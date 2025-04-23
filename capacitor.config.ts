
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.9072e80013db4701a0c66bba310d0767',
  appName: 'indian-legal-compass-guide',
  webDir: 'dist',
  server: {
    url: 'https://9072e800-13db-4701-a0c6-6bba310d0767.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  ios: {
    contentInset: 'always'
  },
  android: {
    backgroundColor: "#ffffff"
  }
};

export default config;
