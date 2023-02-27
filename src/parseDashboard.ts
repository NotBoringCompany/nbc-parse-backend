//@ts-nocheck
import ParseDashboard from 'parse-dashboard';
import config from './config';

export const parseDashboard = new ParseDashboard(
  {
    apps: [
      {
        appName: 'Not Boring Company',
        serverURL: config.SERVER_URL,
        appId: config.APPLICATION_ID,
        masterKey: config.MASTER_KEY,
      },
    ],
    users: [
        {
            user: config.DASHBOARD_USER,
            pass: config.DASHBOARD_PASSWORD,
        },
    ],
  },
  { allowInsecureHTTP: true },
);