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
          '#6496d4',
          tailwindConfig().theme.colors.yellow[400],
          tailwindConfig().theme.colors.teal[500],
        ],
        hoverBackgroundColor: [
          '#4b79c5',
          tailwindConfig().theme.colors.yellow[500],
          tailwindConfig().theme.colors.teal[600],
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
      <DoughnutChart chartData={chartData} width={389} height={260} />
    </div>
  );
}

export default CardOverviewDoughnut;
