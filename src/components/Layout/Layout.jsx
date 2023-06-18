import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import MainLoader from 'components/Loading/MainLoader';
import Header from 'components/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<MainLoader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
