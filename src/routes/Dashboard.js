import React, { Fragment, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { NavBar } from '../components/Nav/NavBar';

import Session from 'supertokens-web-js/recipe/session';
import { UserRoleClaim } from 'supertokens-web-js/recipe/userroles';
import { Container } from '@chakra-ui/react';

async function getSessionPayload() {}

async function doesSessionExist() {
  if (await Session.doesSessionExist()) {
    return true;
  } else {
    return false;
  }
}

const Dashboard = () => {
  const [sessionExist, setSessionExist] = useState(undefined);
  /**
   * create a context that will have the session info
   */
  useEffect(() => {
    console.log('useEffect');
    const session = async () => {
      setSessionExist(await doesSessionExist());
    };
    session();
  }, []);
  return sessionExist === true ? (
    <Fragment>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </Fragment>
  ) : sessionExist === false ? (
    <Navigate to="/" />
  ) : (
    <div>Loading</div>
  );
};

export default Dashboard;
