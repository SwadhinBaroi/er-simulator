import { View, Text, ImageBackground } from 'react-native';
import React from 'react';

const ChatBox = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/images/hospital.jpg')}
        style={{ flex: 1 }}></ImageBackground>
    </View>
  );
};

export default ChatBox;
