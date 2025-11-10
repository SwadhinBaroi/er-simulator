import { Input } from 'components/input';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Lock, Mail } from 'lucide-react-native';
import { Image, Text, View } from 'react-native';

export default function Page() {
  const router = useRouter();

  return (
    <>
      <View className="relative h-full w-full flex-1">
        <LinearGradient
          colors={['#101112', '#000000']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="absolute inset-0 py-16">
          {/* Radial gradient overlay */}
          <Image
            source={require('../../assets/images/splash-radial-gradient.png')}
            className="absolute left-0 top-0 h-full w-full"
            resizeMode="cover"
          />

          {/* Center logo */}
          <View className="flex w-full flex-col items-center justify-center gap-3 px-6 py-5">
            <View className="flex w-full items-center justify-center py-5">
              <Image
                source={require('../../assets/images/splash-icon-full.png')}
                className="h-20 w-36"
                resizeMode="contain"
              />
            </View>

            <Text className="text-3xl font-semibold text-[#DFDFDF]">Welcome Back</Text>
            <Text className="text-lg font-normal text-[#8E8E93]">
              Sign in to continue your training
            </Text>

            <View className="flex h-auto w-full flex-col gap-4">
              <Input
                label="Email"
                placeholder="abc@email.com"
                icon={<Mail size={20} color={'#026672'} />}
              />

              <Input
                label="Password"
                placeholder="Enter your password"
                icon={<Lock size={20} color={'#026672'} />}
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    </>
  );
}
