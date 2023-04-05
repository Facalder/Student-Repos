import React from 'react';
import { Link } from 'react-router-dom';

// import { hexToRGB, tailwindConfig } from '../../../utils/Utils';
// import LineChart from '../../charts/LineChart01';
import EditMenu from '../../../EditMenu';

function CardOverview({ titleProject, percentageProject, iconProject }) {
  //   const chartData = {
  //     labels: [
  //       '12-01-2020',
  //       '01-01-2021',
  //       '02-01-2021',
  //       '03-01-2021',
  //       '04-01-2021',
  //       '05-01-2021',
  //       '06-01-2021',
  //       '07-01-2021',
  //       '08-01-2021',
  //       '09-01-2021',
  //       '10-01-2021',
  //       '11-01-2021',
  //       '12-01-2021',
  //       '01-01-2022',
  //       '02-01-2022',
  //       '03-01-2022',
  //       '04-01-2022',
  //       '05-01-2022',
  //       '06-01-2022',
  //       '07-01-2022',
  //       '08-01-2022',
  //       '09-01-2022',
  //       '10-01-2022',
  //       '11-01-2022',
  //       '12-01-2022',
  //       '01-01-2023',
  //     ],
  //     datasets: [
  //       // Indigo line
  //       {
  //         data: [
  //           732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192, 154, 273,
  //           191, 191, 126, 263, 349, 252, 423, 622, 470, 532,
  //         ],
  //         fill: true,
  //         backgroundColor: `rgba(${hexToRGB(
  //           tailwindConfig().theme.colors.blue[500],
  //         )}, 0.08)`,
  //         borderColor: tailwindConfig().theme.colors.indigo[500],
  //         borderWidth: 2,
  //         tension: 0,
  //         pointRadius: 0,
  //         pointHoverRadius: 3,
  //         pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
  //         clip: 20,
  //       },
  //       // Gray line
  //       {
  //         data: [
  //           532, 532, 532, 404, 404, 314, 314, 314, 314, 314, 234, 314, 234, 234, 314, 314,
  //           314, 388, 314, 202, 202, 202, 202, 314, 720, 642,
  //         ],
  //         borderColor: tailwindConfig().theme.colors.slate[300],
  //         borderWidth: 2,
  //         tension: 0,
  //         pointRadius: 0,
  //         pointHoverRadius: 3,
  //         pointBackgroundColor: tailwindConfig().theme.colors.slate[300],
  //         clip: 20,
  //       },
  //     ],
  //   };

  return (
    <div className="col-span-full flex flex-col rounded-2xl bg-white sm:col-span-6 xl:col-span-4">
      <div className="p-5">
        <header className="mb-2 flex items-start justify-between">
          {/* Icon */}
          <i className={`${iconProject} ri-2x text-danube-800`}></i>
          {/* Menu button */}
          <EditMenu className="relative inline-flex">
            <li>
              <Link
                className="flex py-1 px-3 text-sm font-medium text-danube-600 hover:text-danube-800"
                to="#0"
              >
                Option 1
              </Link>
            </li>
            <li>
              <Link
                className="flex py-1 px-3 text-sm font-medium text-danube-600 hover:text-danube-800"
                to="#0"
              >
                Option 2
              </Link>
            </li>
            <li>
              <Link
                className="flex py-1 px-3 text-sm font-medium text-rose-500 hover:text-rose-600"
                to="#0"
              >
                Remove
              </Link>
            </li>
          </EditMenu>
        </header>
        <h2 className="mb-2 text-lg font-semibold text-danube-800">{titleProject}</h2>
        <div className="mb-1 text-xs font-semibold capitalize text-san-juan-300">
          Average Accomplished
        </div>
        <div className="flex items-start">
          <div className="mr-2 text-3xl font-bold text-danube-800">
            {percentageProject} %
          </div>
        </div>
      </div>
      <div className="grow">
        {/* <LineChart data={chartData} width={389} height={128} /> */}
      </div>
    </div>
  );
}

export default CardOverview;
