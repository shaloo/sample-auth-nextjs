import { AuthProvider } from '@arcana/auth';

const auth = new AuthProvider(process.env.NEXT_PUBLIC_ARCANA_APP_ID, {
  theme: 'light',
  network: 'testnet',
  connectOptions: {
    compact: true
  }
});

const getAuth = () => {
  return auth;
};

export { getAuth };
