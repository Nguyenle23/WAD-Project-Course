const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const userSchema = require('../models/User');

const register = async(req, res) => {
    try {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!req.body.email) return res.status(400).json('Email is required');

        if (!regex.test(req.body.email)) return res.status(400).json('Invalid email');

        const checkEmail = await userSchema.User.findOne({ email: req.body.email });
        if (checkEmail) return res.status(400).json('Email already exist');

        if (!req.body.password) return res.status(400).json('Password is required');

        if (req.body.password.length < 8) return res.status(400).json('Password must be at least 8 characters');

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const user = new userSchema.User({
            email: req.body.email,
            password: hashPassword,
        });

        const newUser = await user.save();

        try {
            //parameters
            var partnerCode = "MOMOTLIE20220601";
            var accessKey = "VCN2GFIn1bpWjNgQ";
            var secretkey = "lGv0igg8y2Kypc78p79ywOnMg67EcyH2";
            var requestId = partnerCode + new Date().getTime();
            var orderId = requestId;
            var orderInfo = `Netflix subscribes for ${newUser.email} on ${new Date().toLocaleString()}`;
            var redirectUrl = `http://localhost:3001/login`;
            var ipnUrl = "https://callback.url/notify";
            // var ipnUrl = redirectUrl = "https://webhook.site/454e7b77-f177-4ece-8236-ddf1c26ba7f8";
            var amount = 59000;
            var requestType = "captureWallet"
            var extraData = ""; //pass empty value if your merchant does not have stores

            //before sign HMAC SHA256 with format
            //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
            var rawSignature = "accessKey=" + accessKey + "&amount=" + amount + "&extraData=" + extraData + "&ipnUrl=" + ipnUrl + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&partnerCode=" + partnerCode + "&redirectUrl=" + redirectUrl + "&requestId=" + requestId + "&requestType=" + requestType
                //puts raw signature
                // console.log("--------------------RAW SIGNATURE----------------")
                // console.log(rawSignature)
                //signature
            const crypto = require('crypto');
            var signature = crypto.createHmac('sha256', secretkey)
                .update(rawSignature)
                .digest('hex');
            // console.log("--------------------SIGNATURE----------------")
            // console.log(signature)

            //json object send to MoMo endpoint
            const requestBody = JSON.stringify({
                partnerCode: partnerCode,
                accessKey: accessKey,
                requestId: requestId,
                amount: amount,
                orderId: orderId,
                orderInfo: orderInfo,
                redirectUrl: redirectUrl,
                ipnUrl: ipnUrl,
                extraData: extraData,
                requestType: requestType,
                signature: signature,
                lang: 'en'
            });
            //Create the HTTPS objects
            const https = require('https');
            const options = {
                    hostname: 'test-payment.momo.vn',
                    port: 443,
                    path: '/v2/gateway/api/create',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': Buffer.byteLength(requestBody)
                    }
                }
                //Send the request and get the response
            const req2 = https.request(options, res2 => {
                // console.log(`Status: ${res2.statusCode}`);
                // console.log(`Headers: ${JSON.stringify(res2.headers)}`);
                res2.setEncoding('utf8');
                var url = [];
                res2.on('data', (body) => {
                    // console.log('Body: ');
                    // console.log(JSON.parse(body).resultCode);
                    if (JSON.parse(body).resultCode == 0) {
                        url.push(JSON.parse(body).payUrl);
                        const update = {
                            isActive: true,
                            price: '59.000',
                            beginDate: new Date().toLocaleString(),
                            expiredDate: new Date(new Date().setDate(new Date().getDate() + 30)).toLocaleString(),
                        }
                        try {
                            userSchema.User.findOneAndUpdate({ _id: newUser._id }, update, { new: true }, (err, doc) => {
                                const result = {
                                    user: doc,
                                    url: url,
                                }
                                res.status(200).json(result);
                            });
                        } catch (error) {
                            res.status(500).json(error);
                        }
                    } else {
                        res.status(500).json({
                            message: JSON.parse(body).description,
                            code: JSON.parse(body).resultCode
                        });
                    }
                    // console.log('payUrl: ');
                    // console.log(JSON.parse(body).payUrl);
                    // url.push(JSON.parse(body).payUrl);
                });
                // res2.on('end', () => {
                //     // console.log('No more data in response.');
                //     res.status(200).json(url);
                // });
            })

            req2.on('error', (e) => {
                // console.log(`problem with request: ${e.message}`);
            });
            // write data to request body
            // console.log("Sending....")
            req2.write(requestBody);
            req2.end();
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const login = async(req, res) => {
    try {
        if (!req.body.email) return res.status(401).json('Email is required');

        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regex.test(req.body.email)) return res.status(401).json('Invalid email');

        const user = await userSchema.User.findOne({ email: req.body.email });
        if (!user) return res.status(401).json('No account exist');

        if (!req.body.password) return res.status(401).json('Password is required');

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(401).json('Invalid password');

        if (user.isDestroy === true) return res.status(401).json('Your account has been deleted, please register again');

        if (user.isActive === false) {
            try {
                var userPrice = user.price;
                userPrice = userPrice.replaceAll(',', '');
                userPrice = userPrice.replaceAll('.', '');
                var userPriceInt = parseInt(userPrice);
                var partnerCode = "MOMOTLIE20220601";
                var accessKey = "VCN2GFIn1bpWjNgQ";
                var secretkey = "lGv0igg8y2Kypc78p79ywOnMg67EcyH2";
                var requestId = partnerCode + new Date().getTime();
                var orderId = requestId;
                var orderInfo = `Netflix re-subscribes for ${user.email} on ${new Date().toLocaleString()}`;
                var redirectUrl = `http://localhost:3001/login`;
                var ipnUrl = "https://callback.url/notify";
                // var ipnUrl = redirectUrl = "https://webhook.site/454e7b77-f177-4ece-8236-ddf1c26ba7f8";
                var amount = userPriceInt + 59000;
                var requestType = "captureWallet"
                var extraData = ""; //pass empty value if your merchant does not have stores

                var rawSignature = "accessKey=" + accessKey + "&amount=" + amount + "&extraData=" + extraData + "&ipnUrl=" + ipnUrl + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&partnerCode=" + partnerCode + "&redirectUrl=" + redirectUrl + "&requestId=" + requestId + "&requestType=" + requestType;
                const crypto = require('crypto');
                var signature = crypto.createHmac('sha256', secretkey)
                    .update(rawSignature)
                    .digest('hex');
                const requestBody = JSON.stringify({
                    partnerCode: partnerCode,
                    accessKey: accessKey,
                    requestId: requestId,
                    amount: amount,
                    orderId: orderId,
                    orderInfo: orderInfo,
                    redirectUrl: redirectUrl,
                    ipnUrl: ipnUrl,
                    extraData: extraData,
                    requestType: requestType,
                    signature: signature,
                    lang: 'en'
                });
                const https = require('https');
                const options = {
                    hostname: 'test-payment.momo.vn',
                    port: 443,
                    path: '/v2/gateway/api/create',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': Buffer.byteLength(requestBody)
                    }
                }
                const req2 = https.request(options, res2 => {
                    res2.setEncoding('utf8');
                    var url = [];
                    res2.on('data', (body) => {
                        if (JSON.parse(body).resultCode == 0) {
                            url.push(JSON.parse(body).payUrl);
                            var totalAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                            const update = {
                                isActive: true,
                                price: totalAmount,
                                beginDate: new Date().toLocaleString(),
                                expiredDate: new Date(new Date().setDate(new Date().getDate() + 30)).toLocaleString(),
                            }
                            try {
                                userSchema.User.findOneAndUpdate({ _id: user._id }, update, { new: true }, (err, doc) => {
                                    const result = {
                                        user: doc,
                                        url: url,
                                    }
                                    res.status(401).json({
                                        message: 'Your account is not active',
                                        code: 23,
                                        result: result
                                    });
                                });
                            } catch (error) {
                                res.status(500).json(error);
                            }
                        } else {
                            res.status(500).json({
                                message: JSON.parse(body).description,
                                code: JSON.parse(body).resultCode
                            });
                        }
                    });
                })
                req2.on('error', (e) => {
                    console.log(`problem with request: ${e.message}`);
                });
                req2.write(requestBody);
                req2.end();
            } catch (error) {
                console.log(error);
                res.status(400).json(error);
            }
        } else {
            const { password, ...info } = user._doc;

            const accessToken = jwt.sign({ _id: user._id, isAdmin: user.isAdmin },
                process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5d' });

            return res.status(200).json({...info, accessToken });
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const forgot = async(req, res) => {
    try {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regex.test(req.body.email)) return res.status(400).json('Invalid email');

        const user = await userSchema.User.findOne({ email: req.body.email });
        if (!user) return res.status(400).json('No account exist');

        const secret = process.env.ACCESS_TOKEN_SECRET + user.password;
        const payload = {
            email: user.email,
            id: user.id,
        }
        const accessToken = jwt.sign(payload, secret, { expiresIn: '15m' });
        const link = `http://localhost:3001/forgot/${user.id}/${accessToken}`;
        const emailCus = `${user.email}`;

        const sendObject = {
            status: 'success',
            id: user.id,
            email: user.email,
            token: accessToken,
            link: link
        }

        res.status(200).json({ result: sendObject });

        // try {
        //     const output =
        //         `
        //     <!DOCTYPE html>
        //     <html>
        //     <head>
        //         <style>
        //             .btn:hover {
        //                 background-color: red 
        //             }
        //         </style>
        //     </head>
        //     <body style="background-color: #59ab6e;">
        //             <!-- start preheader -->
        //             <div class="preheader"
        //                 style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #40de65; opacity: 0;">
        //                 The request for reseting password from KCT Customer Service
        //             </div>
        //             <!-- end preheader -->
        //             <!-- start body -->
        //             <table border="0" cellpadding="0" cellspacing="0" width="100%">
        //                 <!-- start logo -->
        //                 <tr>
        //                     <td align="center" bgcolor="#000">
        //                         <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        //                             <tr>
        //                                 <td align="center" valign="top" style="padding: 20px 24px;">
        //                                     <h3 style="color: #e50914;
        //                                     font-weight: 700;
        //                                     font-size: 50px;
        //                                     line-height: 0.65;
        //                                     font-family: 'Roboto', cursive; margin-bottom: -10px">
        //                                         NETFLIX
        //                                     </h3>
        //                                     <p style="font-size: 14px;
        //                                     text-algin: center;
        //                                     color: #545454;
        //                                     font-weight: 400;
        //                                     text-transform: capitalize;
        //                                     font-style: italic;
        //                                     font-family: 'Mansalva', cursive;"></p>
        //                                 </td>
        //                             </tr>
        //                         </table>
        //                     </td>
        //                 </tr>
        //                 <!-- end logo -->

        //                 <!-- start hero -->
        //                 <tr>
        //                     <td align="center" bgcolor="#000">
        //                         <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        //                             <tr>
        //                                 <td align="left" bgcolor="#000"
        //                                     style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
        //                                     <h1
        //                                         style="color: #e50914; margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">
        //                                         Reset Your Password</h1>
        //                                 </td>
        //                             </tr>
        //                         </table>
        //                     </td>
        //                 </tr>
        //                 <!-- end hero -->
        //                 <!-- start copy block -->
        //                 <tr>
        //                     <td align="center" bgcolor="#000">
        //                         <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        //                             <!-- start copy -->
        //                             <tr>
        //                                 <td align="left" bgcolor="#000"
        //                                     style="color: #fff; padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
        //                                     <p style="margin: 0;">Tap the button below to confirm your email address. If you didn't
        //                                         reset your password, you can safely delete this email.</p>
        //                                 </td>
        //                             </tr>
        //                             <!-- end copy -->
        //                             <!-- start button -->
        //                             <tr>
        //                                 <td align="left" bgcolor="#000">
        //                                     <table border="0" cellpadding="0" cellspacing="0" width="100%">
        //                                         <tr>
        //                                             <td align="center" bgcolor="#000" style="padding: 12px;">
        //                                                 <table border="0" cellpadding="0" cellspacing="0">
        //                                                     <tr>
        //                                                         <td align="center" bgcolor="#e50914" style="border-radius: 6px;">
        //                                                             <a class="btn" href="${link}" target="_blank"
        //                                                                 style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #fff; text-decoration: none; border-radius: 6px;">Reset password</a>
        //                                                         </td>
        //                                                     </tr>
        //                                                 </table>
        //                                             </td>
        //                                         </tr>
        //                                     </table>
        //                                 </td>
        //                             </tr>
        //                             <!-- end button -->
        //                             <!-- start copy -->
        //                             <tr>

        //                             </tr>
        //                             <!-- end copy -->
        //                             <!-- start copy -->
        //                             <tr>
        //                                 <td align="left" bgcolor="#000"
        //                                     style="padding: 20px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
        //                                     <p style="margin: 0; color: #fff">Sincerely,<br></p>
        //                                     <p style="margin: 0; color: #e50914">Netflix Customer Service</p>
        //                                 </td>
        //                             </tr>
        //                             <!-- end copy -->
        //                         </table>
        //                     </td>
        //                 </tr>
        //                 <!-- end copy block -->
        //                 <!-- start footer -->
        //                 <tr>
        //                     <td align="center" bgcolor="#000" style="padding: 20px;">
        //                         <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        //                             <!-- start permission -->
        //                             <tr>
        //                                 <td align="center" bgcolor="#000"
        //                                     style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #ccc;">
        //                                     <p style="margin: 0;">You received this email because we received a request for reseting for
        //                                         your account. If you didn't request it you can safely delete this email.</p>
        //                                     <p style="margin: 0; color: #ccc">Quarter 6, Linh Trung Ward, Thu Duc City, Ho Chi Minh City</p>
        //                                 </td>
        //                             </tr>
        //                             <!-- end permission -->
        //                         </table>
        //                     </td>
        //                 </tr>
        //                 <!-- end footer -->

        //             </table>
        //             <!-- end body -->
        //         </body>
        //     </html>            
        //     `;

        //     // create reusable transporter object using the default SMTP transport
        //     let transporter = nodemailer.createTransport({
        //         host: 'mail.glamorous.com',
        //         port: 587,
        //         secure: false, // true for 465, false for other ports
        //         // host: 'smtp.gmail.com',
        //         // port: 465,
        //         // secure: true, // use SSL
        //         auth: {
        //             user: 'glamorous.cs01@gmail.com', // generated ethereal user
        //             pass: 'bin23082001' // generated ethereal password
        //         },
        //         tls: {
        //             rejectUnauthorized: false
        //         }
        //     });

        //     // setup email data with unicode symbols
        //     let mailOptions = {
        //         from: '"Netflix Customer Service" <glamorous.cs01@gmail.com>', // sender address
        //         to: emailCus, // list of receivers
        //         subject: 'Confirm Reset Password', // Subject line
        //         text: 'Hello world?', // plain text body
        //         html: output // html body
        //     };

        //     // send mail with defined transport object
        //     transporter.sendMail(mailOptions, (error, info) => {
        //         if (error) {
        //             return console.log(error);
        //         }
        //         res.status(200).json({ result: sendObject });

        //         console.log('Message sent: %s', info.messageId);
        //         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        //     });
        //     console.log(link)
        // } 
        // catch (error) {
        //     console.log(error.message)
        //     res.send(error.message)
        // }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const reset = async(req, res) => {
    try {
        const { id } = req.params;
        const { password } = req.body;

        if (password.length < 8) {
            return res.status(400).json({ message: 'Password must be at least 8 characters' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        await userSchema.User.findOneAndUpdate({ _id: id }, { password: hashPassword });
        const result = {
            message: 'Reset password success',
            status: 'success'
        }
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports = {
    register,
    login,
    forgot,
    reset
}