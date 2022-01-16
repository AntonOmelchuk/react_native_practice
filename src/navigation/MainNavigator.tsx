import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Main from '../screens/Main/Main';
import Animations from '../screens/Animations/Animations';
import CornerMovement from '../screens/Animations/components/CornerMovement';
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
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Animations" component={Animations} />
      <Stack.Screen
        name="CornerMovement"
        component={CornerMovement}
        options={{
          headerTitle: t('cornerAnimations'),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
