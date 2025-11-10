import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import { useEffect } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

export default function Page() {
  const router = useRouter();

  return (
    <>
      <View className="relative h-full w-full flex-1">
        <LinearGradient
          colors={['#101112', '#000000']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="absolute inset-0 items-center justify-center">
          {/* Top-left hex background */}
          <Image
            source={require('../../assets/images/splash-top-left-image.png')}
            className="absolute left-0 top-0 h-[190px] w-[190px] opacity-40"
            resizeMode="cover"
          />

          {/* Bottom-right hex pattern */}
          <Image
            source={require('../../assets/images/splash-bottom-righ-image.png')}
            className="absolute bottom-0 right-0 h-[190px] w-[190px] opacity-40"
            resizeMode="cover"
          />

          {/* Radial gradient overlay */}
          <Image
            source={require('../../assets/images/splash-radial-gradient.png')}
            className="absolute left-0 top-0 h-full w-full"
            resizeMode="cover"
          />

          {/* Center logo */}
          <View className="flex w-full flex-col items-start justify-center gap-5 px-6 py-5">
            <View className="flex w-full items-center justify-center py-5">
              <Image
                source={require('../../assets/images/onboarding-screen-icon.png')}
                className="h-60 w-60"
                resizeMode="contain"
              />
            </View>

            <Text className="text-3xl font-semibold text-[#DFDFDF]">Track Your Progress</Text>
            <Text className="text-lg font-normal text-[#8E8E93]">
              Monitor your performance, review past simulations, and see your improvement over time
            </Text>
          </View>

          <View className="flex w-full flex-row items-center justify-between py-16 pl-5">
            <View className="flex flex-row items-center gap-2">
              <View className="h-3 w-3 rounded-sm border border-[#E0DEDE] bg-[#E0DEDE]"></View>
              <View className="h-3 w-3 rounded-sm border border-[#E0DEDE] bg-transparent"></View>
              <View className="h-3 w-3 rounded-sm border border-[#E0DEDE] bg-transparent"></View>
            </View>

            <Pressable
              onPress={() => router.push('/auth/login')}
              className="absolute -right-1 pt-6">
              <Svg width={73} height={240} viewBox="0 0 73 240" fill="none">
                <Path
                  d="M68.8757 208.087L70.5241 25.0742L70.5202 25.0768L71.1658 22.5854L70.7477 24.9268C70.7477 24.9268 73 -17.8446 73 8.6665C73 61.5083 0 72.0148 0 118.719C0 165.423 73 184.537 73 231.076C73 257.587 70.5241 216.582 70.5241 216.582L68.8757 208.087Z"
                  fill="#10A9B3"
                />
                <Circle
                  cx="37"
                  cy="120"
                  r="21.4"
                  fill="#08868F"
                  stroke="#08868F"
                  strokeOpacity={0.42}
                  strokeWidth={1.2}
                />
                <Path
                  d="M35 115L39.5 119.5L35 124"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </Pressable>
          </View>
        </LinearGradient>
      </View>
    </>
  );
}
