import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { ActivityIndicator } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RPGPage from './src/pages/RPGPage';
import Login from './src/pages/Login';
import Registrar from './src/Pages/Registrar';
import EsqueciSenha from './src/Pages/EsqueciSenha';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name= "Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name= "Registrar" component={Registrar} options={{headerShown: false}}/>
        <Stack.Screen name ='RPGPage' component={RPGPage} />
        <Stack.Screen name= "EsqueciSenha" component={EsqueciSenha} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

