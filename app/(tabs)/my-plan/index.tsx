import { View, Text } from 'react-native';
import { useState } from 'react';
import ProgressCard from 'components/ui/progresscard';
import { Layout } from 'components/ui/layout';

const MyPlan = () => {
  const [completed, setCompleted] = useState(true);
  return (
    <Layout>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 35, marginTop: 20 }}>
        <Text className="font-roboto font-semibold " style={{ fontSize: 26 }}>
          My Simulations
        </Text>
        {/* <View style={{ position: 'absolute', top: 0, left: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#82A4A5',
              borderWidth: 1,
              borderColor: COLORS.deep,
              borderRadius: 40,
              padding: 3,
            }}>
            <X size={35} color={'#fff'} />
          </TouchableOpacity>
        </View> */}
      </View>

      <View style={{ width: '92%', marginHorizontal: 'auto', marginTop: 35, gap: 20 }}>
        <ProgressCard serial={1} complete={completed} />
        <ProgressCard serial={2} complete={false} />
        <ProgressCard serial={3} complete={completed} />
        <ProgressCard serial={4} complete={false} />
        <ProgressCard serial={5} complete={completed} />
      </View>
    </Layout>
  );
};

export default MyPlan;
