
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // Make sure the path is correct
import MyHobbies from './screens/MyHobbies';   // Make sure the path is correct
import MyFriends from './screens/MyFriends';   // Make sure the path is correct

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Hobbies" component={MyHobbies} />
      <Stack.Screen name="Friends" component={MyFriends} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
