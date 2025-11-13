import { COLORS } from 'constants/color';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    // <SafeAreaView className="flex-1">
    <ScrollView
      className="flex-1"
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ backgroundColor: COLORS.offWhite }}>
      {children}
    </ScrollView>
    // </SafeAreaView>
  );
}
