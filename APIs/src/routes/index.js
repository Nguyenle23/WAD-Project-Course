const authRouter = require('./auth');
const userRouter = require('./user');
const movieRouter = require('./movie');
const listRouter = require('./list');

function route(app) {
    app.use('/list', listRouter);
    app.use('/movie', movieRouter);
    app.use('/user', userRouter);
    app.use('/auth', authRouter);
}

module.exports = route;