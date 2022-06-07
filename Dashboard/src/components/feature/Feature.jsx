import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import  MoreVertOutlinedIcon  from '@mui/icons-material/MoreVertOutlined'
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";
import './feature.scss'

function Feature() {
  return (
    <div className='feature'>
        <div className='feature_top'>
            <h1 className="title">Total revenue</h1>
            <MoreVertOutlinedIcon fontSize='small' />
        </div>
        <div className='feature_bottom'>
            <div className="fetureChart">
                <CircularProgressbar value = {70} text = {"70%"} strokeWidth={5} />
            </div>
            <p className="title">Total sales made today</p>
            <p className="value">$1,000</p>
            <p className="desc">
                Previous transaction processing. Last week: $2,000
            </p>
            <div className="last">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative" >
                        <KeyboardArrowDown fontSize='small' />
                        <p className="value">$1,300</p>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last monthk</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDown fontSize='small' />
                        <p className="value">$1,300</p>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Statistic</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUp fontSize='small' />
                        <p className="value">$1,300</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature