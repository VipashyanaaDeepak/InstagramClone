import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DummyProfile = ({ name, image }) => {
  return (
    <View style={styles.profile}>
      <Image source={{ uri: image }} style={styles.profileImage} />
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default DummyProfile;
