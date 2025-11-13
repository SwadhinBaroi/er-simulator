import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from 'constants/color';
import Trauma from '../../assets/svgs/trauma.svg';

const Treatments = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 25,
        paddingBottom: 5,
        borderRadius: 15,
        marginBottom: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
      }}>
      <View style={{ flex: 1, flexDirection: 'row', gap: 10, marginBottom: 20 }}>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.deep,
            borderRadius: 6,
            borderWidth: 0.5,
            borderColor: COLORS.deep,
          }}>
          <Trauma />
          <Text className="py-3 text-center text-xl font-bold text-white ">Trauma</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
            backgroundColor: '#EDFDFF',
            borderRadius: 6,
            borderWidth: 0.5,
            borderColor: COLORS.deep,
          }}>
          <Trauma />
          <Text className="py-3 text-center text-xl font-bold text-[#40464B] ">Categories</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', gap: 10, marginBottom: 20 }}>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
            backgroundColor: '#EDFDFF',
            borderRadius: 6,
            borderWidth: 0.5,
            borderColor: COLORS.deep,
          }}>
          <Trauma />
          <Text className="py-3 text-center text-xl font-bold text-[#40464B] ">Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
            backgroundColor: '#EDFDFF',
            borderRadius: 6,
            borderWidth: 0.5,
            borderColor: COLORS.deep,
          }}>
          <Trauma />
          <Text className="py-3 text-center text-xl font-bold text-[#40464B] ">Categories</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', gap: 10, marginBottom: 20 }}>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
            backgroundColor: '#EDFDFF',
            borderRadius: 6,
            borderWidth: 0.5,
            borderColor: COLORS.deep,
          }}>
          <Trauma />
          <Text className="py-3 text-center text-xl font-bold text-[#40464B] ">Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
            backgroundColor: '#EDFDFF',
            borderRadius: 6,
            borderWidth: 0.5,
            borderColor: COLORS.deep,
          }}>
          <Trauma />
          <Text className="py-3 text-center text-xl font-bold text-[#40464B] ">Categories</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Treatments;
