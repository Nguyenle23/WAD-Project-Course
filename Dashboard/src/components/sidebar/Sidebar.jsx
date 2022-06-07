import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import InventoryIcon from '@mui/icons-material/Inventory';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DnsIcon from '@mui/icons-material/Dns';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">NETFLIX</span>
            </Link>
        </div>
        <hr/>

        <div className="center">
            <ul>
                <div className='center_img_container'>
                    <img className='center_img' src="https://yt3.ggpht.com/P3tOClgDrGcPFc1m4r4VGEyqixLOVJwURacauwlpNMI7opjW4jPoYnzXsVrl-Spz30fmzJTv=s176-c-k-c0x00ffffff-no-rj" alt=""/>
                    <span>Your Profile</span>
                </div>
                <p className="title">MAIN PAGE</p>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <li>
                        <DashboardIcon className='center_logo' />
                        <span>Dashboard</span>
                    </li>
                </Link>
                <p className="title">LIST</p>
                <Link to="/user" style={{ textDecoration: "none" }}>
                    <li>
                        <PersonOutlineIcon className='center_logo' />
                        <span>Users</span>
                    </li>
                </Link>
                <li>
                    <InventoryIcon className='center_logo' />
                    <span>Products</span>
                </li>
                <p className="title">STATISTIC</p>
                <li>
                    <UpcomingIcon className='center_logo' />
                    <span>Upcoming</span>
                </li>
                <li>
                    <QueryStatsIcon className='center_logo' />
                    <span>Stats</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <NotificationsIcon className='center_logo' />
                    <span>Notification</span>
                </li>
                <li>
                    <DnsIcon className='center_logo' />
                    <span>System</span>
                </li>
                <li>
                    <SettingsIcon className='center_logo' />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleIcon className='center_logo' />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className='center_logo' />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="color_option"></div>
            <div className="color_option"></div>
            <div className="color_option"></div>
        </div>
    </div>
  )
}

export default Sidebar