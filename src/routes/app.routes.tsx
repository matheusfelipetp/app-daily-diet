import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Food } from '@screens/Food';
import { Home } from '@screens/Home';
import { NewFood } from '@screens/NewFood';
import { Statistics } from '@screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="newFood" component={NewFood} />
      <Screen name="food" component={Food} />
    </Navigator>
  );
}
