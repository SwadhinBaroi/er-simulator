import { Stack } from 'expo-router';
import 'nativewind';
import { StatusBar } from 'react-native';
import ToastManager from 'toastify-react-native';
import '../../global.css';

export default function SplashLayout() {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <ToastManager />
    </>
  );
}
