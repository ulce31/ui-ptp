import React, { createContext } from 'react';

export enum eRoles {
  Athlete = 'ATHLETE',
  Coach = 'COACH',
  Admin = 'ADMIN',
}

export const SessionContext = createContext(eRoles.Athlete);
