import * as React from 'react';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import NavApp from './navigate';
import { AuthProvider } from './AuthProvider';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <NavApp />
      </AuthProvider>
    </NavigationContainer>
  );
}
