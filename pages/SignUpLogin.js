import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

// Replace with the path to your Instagram logo image
const INSTAGRAM_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png';

const SignUpLogin = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username) {
      navigation.navigate('Home', { username });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: INSTAGRAM_LOGO }} style={styles.logo} />
      <Text style={styles.title}>Login / Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Optional: Set background color to white
  },
  logo: {
    width: 150, // Adjust size as needed
    height: 150, // Adjust size as needed
    marginBottom: 40, // Space between logo and title
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default SignUpLogin;
