import { useState } from 'react';

import CardTable from '../../components/partials/dashboard/cards/CardTable';
import CardProject from '../../components/partials/dashboard/cards/project/CardProject';
import CardProjectDoughnut from '../../components/partials/dashboard/cards/project/CardProjectDoughnut';
import Footer from '../../components/partials/dashboard/Footer';
import WelcomeBanner from '../../components/partials/dashboard/WelcomeBanner';
import Header from '../../components/partials/Header';
import Sidebar from '../../components/partials/Sidebar';

function TKJ() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="mx-auto w-full max-w-9xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
            <WelcomeBanner
              welcomeTitle="TKJ Class"
              welcomeMessage={<b>Student Achievement </b>}
            />

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="space-y-6">
                <h2 className="mb-2 text-lg font-semibold text-slate-800">IT Project</h2>
                <CardProject
                  titleProject="Video Tutorial"
                  percentageProject={100}
                  iconProject="ri-live-fill"
                />
                <CardProject
                  titleProject="Certifacate"
                  percentageProject={100}
                  iconProject="ri-medal-fill"
                />
              </div>

              <div className="space-y-6">
                <h2 className="mb-2 text-lg font-semibold text-slate-800">
                  Non IT Project
                </h2>
                <CardProject
                  titleProject="English"
                  percentageProject={100}
                  iconProject="ri-translate"
                />
                <CardProject
                  titleProject="Diniyah"
                  percentageProject={100}
                  iconProject="ri-book-open-fill"
                />
              </div>

              <div className="space-y-6">
                <h2 className="mb-2 text-lg font-semibold text-slate-800">IDN Hebat</h2>
                <CardProject
                  titleProject="IDN Mengajar"
                  percentageProject={100}
                  iconProject="ri-code-box-fill"
                />
                <CardProject
                  titleProject="Weekend Tech Talk"
                  percentageProject={100}
                  iconProject="ri-broadcast-fill"
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <CardProjectDoughnut />
              <CardTable />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default TKJ;
