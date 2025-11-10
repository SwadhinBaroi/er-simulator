import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useId, useState } from 'react';
import { Pressable, Text, TextInput, TextInputProps, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

type Props = {
  label: string;
  labelStyle?: string;
  inputStyle?: string;
  icon?: React.ReactNode;
} & TextInputProps;

export function Input({ label, labelStyle, inputStyle, icon, ...props }: Props) {
  const id = useId();

  // ✅ if icon provided, render icon layout properly
  if (icon) {
    return (
      <View className="w-full items-start gap-3">
        <Text className={twMerge('text-base font-medium text-white', labelStyle)} nativeID={id}>
          {label}
        </Text>

        <View className="h-16 flex-row items-center rounded-md border border-[#026672] bg-[#152326] px-4">
          <View className="mr-3">{icon}</View>
          <TextInput
            accessibilityLabelledBy={id}
            {...props}
            className={twMerge(
              'flex-1 bg-transparent text-white placeholder:text-[#747688]',
              inputStyle
            )}
            style={{ textAlignVertical: 'center' }}
          />
        </View>
      </View>
    );
  }

  // ✅ fallback if no icon
  return (
    <View className="w-full items-start gap-3">
      <Text className={twMerge('text-base font-medium text-white', labelStyle)} nativeID={id}>
        {label}
      </Text>
      <TextInput
        accessibilityLabelledBy={id}
        {...props}
        className={twMerge(
          'h-16 w-full rounded-md border border-[#026672] bg-[#152326] px-4 text-white placeholder:text-[#747688]',
          inputStyle
        )}
        style={{ textAlignVertical: 'center' }}
      />
    </View>
  );
}

export function InputPassword({ label, ...props }: Props) {
  const id = useId();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View className="items-start gap-2">
      <Text className="text-lg font-medium text-white" nativeID={id}>
        {label}
      </Text>
      <View className="relative w-full flex-row items-center justify-end">
        <TextInput
          accessibilityLabelledBy={id}
          {...props}
          secureTextEntry={!showPassword}
          className="border-border h-12 w-full rounded-md border border-[#026672] bg-[#152326] px-4 text-white placeholder:text-[#747688]"
          style={{ textAlignVertical: 'center' }}
        />
        <Pressable
          onPress={() => setShowPassword((prev) => !prev)}
          style={({ pressed }) => ({
            opacity: pressed ? 0.7 : 1,
            transform: [{ scale: pressed ? 0.98 : 1 }],
          })}
          className="absolute right-4">
          <MaterialCommunityIcons
            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
            size={24}
            color={'#9b9b9b'}
          />
        </Pressable>
      </View>
    </View>
  );
}
