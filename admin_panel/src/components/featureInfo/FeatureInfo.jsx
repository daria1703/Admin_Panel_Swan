import React from 'react'
import "./featureInfo.css" 
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function FeatureInfo() {
    const [income, setIncome] = useState([]);
    const [perc, setPerc] = useState(0);
  
    useEffect(() => {
      const getIncome = async () => {
        try {
          const res = await userRequest.get("orders/income");
          setIncome(res.data);
          setPerc((res.data[1].total * 100) / res.data[0].total - 100);
        } catch {}
      };
      getIncome();
    }, []);
  return (
    <div className="featured row">
        <div className="featuredItem col-sm-12 col-md-3">
            <span className='featuredTitle'>Revanue</span>
            <div className="featuredMoneyContainer">
                <span className='faturedMoney'>${income[1]?.total}</span>
                <span className='faturedMoneyRate'>%{Math.floor(perc)}{" "}
            {perc < 0 ? (<ArrowDownwardIcon className="featuredIcon negative"/>):( <ArrowUpwardIcon className="featuredIcon" />)}</span>
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
