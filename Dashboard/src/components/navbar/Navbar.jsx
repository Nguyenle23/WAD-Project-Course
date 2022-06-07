import "./navbar.scss"
import { SearchOutlined } from "@mui/icons-material"
import { LanguageOutlined } from "@mui/icons-material"
import { ListOutlined } from "@mui/icons-material"
import { Notifications } from "@mui/icons-material"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar_search">
                    <SearchOutlined />
                    <input type="text" placeholder="Search..." />
                </div>
                
                <div className="navbar_items_container">
                    <div className="navbar_item">
                        <LanguageOutlined className="navbar_item_logo" />
                        English
                    </div>
                    <div className="navbar_item">
                        <div className="counter_num">3</div>    
                        <Notifications className="navbar_item_logo" />  
                        Notification
                    </div>
                    <div className="navbar_item">
                        <ListOutlined className="navbar_item_logo" />
                        Menu
                    </div>
                    <div className="navbar_item">
                        <img className="navbar_item_avt" src="https://yt3.ggpht.com/P3tOClgDrGcPFc1m4r4VGEyqixLOVJwURacauwlpNMI7opjW4jPoYnzXsVrl-Spz30fmzJTv=s176-c-k-c0x00ffffff-no-rj" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
   
}

export default Navbar