import React from 'react';
import { View, Switch, StyleSheet } from 'react-native';

const CustomSwitch = ({ handler, enabled }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-end',
    },
  });

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ true: '#4cd137' }}
        thumbColor="#fff"
        onChange={handler}
        value={enabled}
      />
    </View>
  );
};

export default CustomSwitch;
