import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './screens/HomeScreen'
import { NewGroupTasker } from './screens/NewGroupTasker';
import { GroupTaskers } from './screens/GroupTaskers';
import { GroupTasker } from './screens/GroupTasker';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='New group tasker' component={NewGroupTasker} />
        <Stack.Screen name='Group taskers' component={GroupTaskers} />
        <Stack.Screen name='Group tasker' component={GroupTasker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
