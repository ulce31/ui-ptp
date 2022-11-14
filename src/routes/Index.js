import React, { useContext } from 'react';
import { SessionContext } from '../contexts/SessionContext';

/* async function howManyRoles() {
  const accessTokenPayload = await Session.getAccessTokenPayloadSecurely();
  const { roles } = accessTokenPayload.roles;
  console.log(roles);
  return roles;
} */

export default function Index() {
  const roles = useContext(SessionContext);
  return (
    <p id="zero-state">
      This is PTP's index page. The current session have {roles} as roles{' '}
    </p>
  );
}
