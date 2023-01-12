
import { CapacitorConfig } from '@capacitor/cli';

const appId = 'DecathApp.ionic.io';
const appName = 'DecathApp';
const server = process.argv.includes('-hmr') ? {
  'url': '192.168.5.62:5173',
  'cleartext': true
} : {};
const webDir = 'build';

const config: CapacitorConfig = {
  appId,
  appName,
  webDir,
  server
};

if (process.argv.includes('-hmr')) console.log('WARNING: running capacitor with livereload config', config);

export default config;
  