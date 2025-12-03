import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'nativewind';
import ToastManager from 'toastify-react-native';
import { KeyboardProvider } from 'react-native-keyboard-controller';

export default function RootLayout() {
  return (
    <KeyboardProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        <Stack.Screen name="index" options={{ headerShown: false, headerBackground() {
            return null;
        }, }} />
      </Stack>
      <ToastManager />
    </KeyboardProvider>
  );
}
