import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.camara.6H',
  appName: 'camara',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  "plugins": {
    "Camera": {
      "android": {
        "allowImageEditing": true
      },
      "web": {
        "useCameraApi": "auto"
      }
    }
  },
  "cordova": {}
};

export default config;
