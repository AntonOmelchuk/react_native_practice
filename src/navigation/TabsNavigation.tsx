import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import Main from '../screens/Main/Main';
import Settings from '../screens/Settings/Settings';
import ITheme from '../themes/interfaces';

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  const { colors: { tabBarBackground, tabBarLabelColor, tabBarActiveLabel } } = useTheme() as ITheme;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: tabBarBackground,
    },
    tabBarLabel: {
      fontSize: 18,
      fontWeight: '600',
    },
  });

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.container,
        tabBarIcon: () => null,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarInactiveTintColor: `${tabBarLabelColor}81`,
        tabBarActiveTintColor: tabBarActiveLabel,
      }}
    >
      <Tab.Screen
        name="Main"
        component={Main}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
