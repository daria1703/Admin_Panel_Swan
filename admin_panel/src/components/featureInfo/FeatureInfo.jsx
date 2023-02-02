import React from 'react'
import "./featureInfo.css" 
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function FeatureInfo() {
  return (
    <div className="featured row">
        <div className="featuredItem col-sm-12 col-md-3">
            <span className='featuredTitle'>Revanue</span>
            <div className="featuredMoneyContainer">
                <span className='faturedMoney'>$2,415</span>
                <span className='faturedMoneyRate'>+1,000 <ArrowUpwardIcon className="featuredIcon" /></span>
            </div>
            <spam className="featuredSub">Compared to last mounth</spam>
        </div>
        <div className="featuredItem col-sm-12 col-md-3">
            <span className='featuredTitle'>Sales</span>
            <div className="featuredMoneyContainer">
                <span className='faturedMoney'>$4,000</span>
                <span className='faturedMoneyRate'>+1,200 <ArrowUpwardIcon className="featuredIcon"/></span>
            </div>
            <spam className="featuredSub">Compared to last mounth</spam>
        </div>
        <div className="featuredItem col-sm-12 col-md-3">
            <span className='featuredTitle'>New Users</span>
            <div className="featuredMoneyContainer">
                <span className='faturedMoney'>120</span>
                <span className='faturedMoneyRate '>-14 <ArrowDownwardIcon className="featuredIcon negative"/></span>
            </div>
            <spam className="featuredSub">Compared to last mounth</spam>
        </div>
    </div>
  )
}
