import React from 'react';
import { Dimensions } from 'react-native';
import { View, Text, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';
import DummyProfile from '../components/DummyProfile';
import Post from '../components/Post';
import ProfileSuggestion from '../components/ProfileSuggestion';
import Separator from '../components/Separator';
import { dummyProfiles, posts, profileSuggestions } from '../components/data'; 

const INSTAGRAM_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png';

const { width: screenWidth } = Dimensions.get('window'); // Get screen width

const HomeScreen = ({ route, navigation }) => {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image source={{ uri: INSTAGRAM_LOGO }} style={styles.logo} />
          <Text style={styles.title}>Welcome, {username}!</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Stories</Text>
          <FlatList
            horizontal
            data={dummyProfiles}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <DummyProfile name={item.name} image={item.image} />}
          />
          <Separator />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Posts</Text>
          {posts.map(post => (
            <View key={post.id} style={[styles.postCard, { width: screenWidth }]}>
              <Post image={post.image} caption={post.caption} />
            </View>
          ))}
          <Separator />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile Suggestions</Text>
          <FlatList
            horizontal
            data={profileSuggestions}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ProfileSuggestion name={item.name} image={item.image} />}
          />
          <Separator />
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.profileIconContainer}
        onPress={() => navigation.navigate('Profile', { username })}
      >
        <Image source={{ uri: 'https://imgur.com/j4jb2oA.jpg' }} style={styles.profileIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#f8f8f8', 
    paddingVertical: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  logo: {
    width: 50, 
    height: 50, 
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  postCard: {
    marginBottom: 10,
  },
  profileIconContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default HomeScreen;