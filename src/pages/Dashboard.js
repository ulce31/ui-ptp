import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/Nav/NavBar';
const Dashboard = () => {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
    </Fragment>
  );
};

export default Dashboard;
