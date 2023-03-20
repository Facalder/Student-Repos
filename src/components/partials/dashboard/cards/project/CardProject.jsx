import React from 'react';
import { Link } from 'react-router-dom';

import EditMenu from '../../../EditMenu';

function CardProject({ titleProject, percentageProject, iconProject }) {
  return (
    <div className="col-span-full flex flex-col rounded-2xl bg-white sm:col-span-6 xl:col-span-1">
      <div className="p-5">
        <header className="mb-2 flex items-start justify-between">
          <i className={`${iconProject} ri-2x text-danube-800`}></i>
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
          Total Project
        </div>
        <div className="flex items-start">
          <div className="mr-2 text-3xl font-bold text-danube-800">
            {percentageProject}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
