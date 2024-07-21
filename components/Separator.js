import { StyleSheet, View } from 'react-native';
import React from 'react';

const Separator = () => {
  return (
    <View style={styles.separator} />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#CAD5E2',
    marginVertical: 10,
  },
});

export default Separator;
