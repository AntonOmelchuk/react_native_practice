import React, { FC } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/Main/Main';
import LightTheme from '../themes/light';
import DarkTheme from '../themes/dark';

const Stack = createNativeStackNavigator();

const AppNavigator: FC = () => {
  const sheme = useColorScheme();

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={['left', 'right']}>
        <NavigationContainer theme={sheme === 'dark' ? DarkTheme : LightTheme}>
          <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
