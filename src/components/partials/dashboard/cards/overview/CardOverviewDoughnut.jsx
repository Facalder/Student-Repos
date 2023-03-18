import React from 'react';

import DoughnutChart from '../../../../../components/charts/DoughnutChart';
import { tailwindConfig } from '../../../../../utils/Utils';

function CardOverviewDoughnut() {
  const chartData = {
    labels: ['TKJ', 'DMM', 'RPL'],
    datasets: [
      {
        label: 'Total Accomplished',
        data: [35, 30, 35],
        backgroundColor: [
          tailwindConfig().theme.colors.indigo[500],
          tailwindConfig().theme.colors.blue[400],
          tailwindConfig().theme.colors.indigo[800],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.indigo[600],
          tailwindConfig().theme.colors.blue[500],
          tailwindConfig().theme.colors.indigo[900],
        ],
        hoverBorderColor: tailwindConfig().theme.colors.white,
      },
    ],
  };

  return (
    <div className="col-span-full flex flex-col rounded-sm border border-slate-200 bg-white shadow-lg sm:col-span-6 xl:col-span-4">
      <header className="border-b border-slate-100 px-5 py-4">
        <h2 className="font-semibold text-slate-800">Total Accomplished</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart chartData={chartData} width={389} height={260} />
    </div>
  );
}

export default CardOverviewDoughnut;
