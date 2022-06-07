
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MonetizationOnOutlinedIcon  from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon  from '@mui/icons-material/AccountBalanceOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon  from '@mui/icons-material/ShoppingCartOutlined';

import './widget.scss'

const Widget = ({ senerio }) => {

    let data;

    const amount = 100;
    const diff = 20;
    
    switch (senerio) {
        case "user": 
            data = { 
                title: "USERS",
                isMoney: false,
                link: "See all User", 
                // icon: <PersonOutlineOutlinedIcon className='icon' />,
            }; 
        break;
        case "order": 
            data = { 
                title: "ORDER",
                isMoney: false,
                link: "See all Order", 
                // icon: <ShoppingCartOutlinedIcon className='icon' />,
            }; 
        break;
        case "earning": 
            data = { 
                title: "EARNING",
                isMoney: true,
                link: "View Net earnings", 
                // icon: <MonetizationOnOutlinedIcon className='icon' />,
            }; 
        break;
        case "balance": 
            data = { 
                title: "BALANCE",
                isMoney: true,
                link: "See details", 
                // icon: <AccountBalanceOutlinedIcon className='icon' />,
            }; 
        break; 
    default:
        break;
    }

  return (
    <div className='widget'>
        <div className="widget_left">
            <span className="tilte">{data.title}</span>
            <span className="counter">
                {data.isMoney && "$"} {amount}
            </span>
            <span className="link">{data.link}</span>
        </div>
        <div className="widget_right">
            <div className="statistic negative">
                <KeyboardArrowDownIcon   />
                {diff} % 
            </div>
            {/* <data.icon /> */}
        </div>
    </div>
  )
}

export default Widget;