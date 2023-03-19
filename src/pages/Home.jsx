import { useState } from 'react';

import CardTable from '../components/partials/dashboard/cards/CardTable';
import CardOverview from '../components/partials/dashboard/cards/overview/CardOverview';
import CardOverviewDoughnut from '../components/partials/dashboard/cards/overview/CardOverviewDoughnut';
import Footer from '../components/partials/dashboard/Footer';
import WelcomeBanner from '../components/partials/dashboard/WelcomeBanner';
import Header from '../components/partials/Header';
import Sidebar from '../components/partials/Sidebar';

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="mx-auto w-full max-w-9xl px-4 py-8 sm:px-6 lg:px-8">
            <WelcomeBanner
              welcomeTitle="IDN Boarding School 🤞"
              welcomeMessage={<b>Student Achievement </b>}
            />
            <div className="grid grid-cols-12 gap-6">
              <CardOverview
                titleProject="IT Project"
                percentageProject={100}
                iconProject="ri-github-fill"
              />
              <CardOverview
                titleProject="Non IT Project"
                percentageProject={40}
                iconProject="ri-attachment-fill"
              />
              <CardOverview
                titleProject="IDN Hebat"
                percentageProject={20}
                iconProject="ri-live-fill"
              />
              <CardOverviewDoughnut />
              <CardTable />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
