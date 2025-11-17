import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import MainMenuScreen from './src/screens/MainMenuScreen';
import PromotionFormScreen from './src/screens/PromotionFormScreen';
import SolicitationListScreen from './src/screens/SolicitationListScreen';
import ManagerDecisionScreen from './src/screens/ManagerDecisionScreen';
import ReportsScreen from './src/screens/ReportsScreen';
import PublicDataScreen from './src/screens/PublicDataScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#0F3057" />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainMenu" component={MainMenuScreen} />
        <Stack.Screen name="PromotionForm" component={PromotionFormScreen} />
        <Stack.Screen name="Solicitations" component={SolicitationListScreen} />
        <Stack.Screen name="ManagerDecision" component={ManagerDecisionScreen} />
        <Stack.Screen name="Reports" component={ReportsScreen} />
        <Stack.Screen name="PublicData" component={PublicDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
