import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);  //... pulls values out of array


  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (   //.map() brings out array elements for jsx to use below
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
