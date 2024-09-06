import React from 'react';
import Sidebar from './sidebar';
import Header from './header';
import Courses from '../pages/manager/home/courses';
import Students from '../pages/manager/home/students';
import { Outlet, useMatch } from 'react-router-dom';

export default function LayoutDashboard() {
  const isPreviewPage = useMatch('/manager/courses/:id/preview');

  console.log('isPreviewPage', isPreviewPage);
  return (
    <>
      {isPreviewPage !== null ? (
        <Outlet />
      ) : (
        <>
          <Sidebar />
          <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
            <Header />
            <Outlet />
          </main>
        </>
      )}
    </>
  );
}
