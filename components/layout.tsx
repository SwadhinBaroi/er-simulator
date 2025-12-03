import { COLORS } from 'constants/color';
import { SafeAreaView, ScrollView } from 'react-native';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.offWhite }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, backgroundColor: COLORS.offWhite, paddingBottom: 0 }}
        style={{ flex: 1 }}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
