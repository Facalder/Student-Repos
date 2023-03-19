import React from 'react';

function CardTable() {
  const customers = [
    {
      id: 0,
      name: 'Valezar Pedrosa Susanto',
      certificate: 100,
      ciscoLab: 40,
      tutorialVideo: 60,
      wtt: 40,
      idnTeaching: 80,
      diniyah: 30,
      english: 40,
    },
    {
      id: 1,
      name: 'Rizky Noor Achmad',
      certificate: 100,
      ciscoLab: 40,
      tutorialVideo: 60,
      wtt: 40,
      idnTeaching: 80,
      diniyah: 30,
      english: 40,
    },
    {
      id: 2,
      name: 'Nufail Ihsan Ruzain',
      certificate: 100,
      ciscoLab: 40,
      tutorialVideo: 60,
      wtt: 40,
      idnTeaching: 80,
      diniyah: 30,
      english: 40,
    },
    {
      id: 3,
      name: 'Muhammad Khaizuran Danish',
      certificate: 100,
      ciscoLab: 40,
      tutorialVideo: 60,
      wtt: 40,
      idnTeaching: 80,
      diniyah: 30,
      english: 40,
    },
    {
      id: 4,
      name: 'Muhammad Hanan Sarwono',
      certificate: 100,
      ciscoLab: 40,
      tutorialVideo: 60,
      wtt: 40,
      idnTeaching: 80,
      diniyah: 30,
      english: 40,
    },
    {
      id: 5,
      name: 'Muhammad Fadhlan Wahyudi',
      certificate: 100,
      ciscoLab: 40,
      tutorialVideo: 60,
      wtt: 40,
      idnTeaching: 80,
      diniyah: 30,
      english: 40,
    },
  ];

  return (
    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-lg xl:col-span-8">
      <header className="border-b border-slate-100 px-5 py-4">
        <h2 className="font-semibold text-danube-800">Student</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            {/* Table header */}
            <thead className="bg-danube-50 text-xs font-semibold capitalize text-san-juan-400">
              <tr>
                <th className="whitespace-nowrap p-2">
                  <div className="text-left font-semibold">Name</div>
                </th>
                <th className="whitespace-nowrap p-2">
                  <div className="text-center font-semibold">Certificate</div>
                </th>
                <th className="whitespace-nowrap p-2">
                  <div className="text-center font-semibold">Cisco Lab</div>
                </th>
                <th className="whitespace-nowrap p-2">
                  <div className="text-center font-semibold">Tutorial Video</div>
                </th>
                <th className="whitespace-nowrap p-2">
                  <div className="text-center font-semibold">WTT</div>
                </th>
                <th className="whitespace-nowrap p-2">
                  <div className="text-center font-semibold">IDN Teaching</div>
                </th>
                <th className="whitespace-nowrap p-2">
                  <div className="text-center font-semibold">Diniyah</div>
                </th>
                <th className="whitespace-nowrap p-2">
                  <div className="text-center font-semibold">English</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="divide-y divide-slate-100 text-sm">
              {customers.map((customer) => {
                return (
                  <tr key={customer.id} className="text-danube-800">
                    <td className="whitespace-nowrap p-2">
                      <div className="font-medium ">{customer.name}</div>
                    </td>
                    <td className="whitespace-nowrap p-2">
                      <div className="text-center">{customer.certificate}%</div>
                    </td>
                    <td className="whitespace-nowrap p-2">
                      <div className="text-center">{customer.ciscoLab}%</div>
                    </td>
                    <td className="whitespace-nowrap p-2">
                      <div className="text-center">{customer.tutorialVideo}%</div>
                    </td>
                    <td className="whitespace-nowrap p-2">
                      <div className="text-center">{customer.wtt}%</div>
                    </td>
                    <td className="whitespace-nowrap p-2">
                      <div className="text-center">{customer.idnTeaching}%</div>
                    </td>
                    <td className="whitespace-nowrap p-2">
                      <div className="text-center">{customer.diniyah}%</div>
                    </td>
                    <td className="whitespace-nowrap p-2">
                      <div className="text-center">{customer.english}%</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CardTable;
