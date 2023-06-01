import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScrean from './src/components/Home';
import AddScrean from './src/routs/add';
import AddEditing from './src/routs/editing';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="HomeScrean"
            component={HomeScrean}
        />
      <Stack.Screen 
            name="AddScrean" 
            component={AddScrean}
        />
        <Stack.Screen
          name='AddEditing'
          component={AddEditing}
          />
      </Stack.Navigator>
      </NavigationContainer>

  );
}
