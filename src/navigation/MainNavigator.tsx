import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Main from '../screens/Main/Main';
import Animations from '../screens/Animations/Animations';
import CornerMovement from '../screens/Animations/animations/CornerMovement';
import StaggeredDrag from '../screens/Animations/animations/StaggeredDrag';
import SwipeCards from '../screens/Animations/animations/SwipeCards';
import ITheme from '../themes/interfaces';

const Stack = createNativeStackNavigator();

const MainNavigator: FC = () => {
  const { t } = useTranslation();
  const { colors: { screenLabel } } = useTheme() as ITheme;

  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: screenLabel,
      headerBackTitleVisible: false,
    }}
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Animations" component={Animations} />
      <Stack.Screen
        name="CornerMovement"
        component={CornerMovement}
        options={{
          headerTitle: t('cornerAnimations'),
        }}
      />
      <Stack.Screen
        name="StaggeredDrag"
        component={StaggeredDrag}
        options={{
          headerTitle: t('staggeredDrag'),
        }}
      />
      <Stack.Screen
        name="SwipeCards"
        component={SwipeCards}
        options={{
          headerTitle: t('swipeCards'),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
