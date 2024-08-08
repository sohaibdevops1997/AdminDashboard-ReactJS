import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';


const LineChartComponent = () => {
    return (
        <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
        },
      ]}
      width={350}
      height={200}
    />
    );
  };

export default LineChartComponent