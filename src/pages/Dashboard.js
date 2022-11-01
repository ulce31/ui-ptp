import React, { Fragment } from 'react';
import { Outlet, redirect } from 'react-router-dom';
import { NavBar } from '../components/Nav/NavBar';
import Session from 'supertokens-web-js/recipe/session';

const Dashboard = () => {
  const userLogged = async function doesSessionExist() {
    if (await Session.doesSessionExist()) {
      console.log('Session');
      return true;
    } else {
      // user has not logged in yet
      return redirect('/');
    }
  };

  return (
    userLogged && (
      <Fragment>
        <NavBar />
        <Outlet />
      </Fragment>
    )
  );
};

export default Dashboard;
