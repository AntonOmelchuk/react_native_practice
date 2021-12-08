import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';
import TabsNavigation from './TabsNavigation';
import LightTheme from '../themes/light';
import DarkTheme from '../themes/dark';

const Stack = createNativeStackNavigator();

const AppNavigator: FC = () => {
  const [theme, setTheme] = useState('');
  const sheme = useColorScheme();

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
  });

  useEffect(() => {
    AsyncStorage.getItem('theme')
      .then((res) => setTheme(res || sheme || 'light'));
  }, [sheme]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={['left', 'right']}>
        <NavigationContainer theme={theme === 'dark' ? DarkTheme : LightTheme} onReady={() => SplashScreen.hide()}>
          <Stack.Navigator screenOptions={{
            headerShown: false,
          }}
          >
            <Stack.Screen name="Tabs" component={TabsNavigation} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
