import React from 'react'
import "./home.css"
import FeatureInfo from '../../components/featureInfo/FeatureInfo'
import Chart from '../../components/chart/Chart'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
  return (
    <div className='home'>
      <FeatureInfo/>
      <Chart/>
      <div className="homeWidgents">
        <WidgetSm/>
        <WidgetLg/>
      </div>
      </div>
  )
}
