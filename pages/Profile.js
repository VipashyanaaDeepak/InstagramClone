import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView ,Dimensions} from 'react-native';
import Post, { posts } from '../components/Post';
import Separator from '../components/Separator'; 
const Profile = ({ route }) => {
    const { username } = route.params;
  
    const profileData = {
      profilePicture: 'https://imgur.com/j4jb2oA.jpg',
      followers: 123,
      following: 456,
      postCount: posts.length,
    };
    
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.topSection}>
            <Image source={{ uri: profileData.profilePicture }} style={styles.profilePicture} />
            <View style={styles.stats}>
              <Text style={styles.statText}>{profileData.followers} Followers</Text>
              <Text style={styles.statText}>{profileData.following} Following</Text>
              <Text style={styles.statText}>Username: {username}</Text>
            </View>
            <Separator />
          </View>
  
          <View style={styles.secondSection}>
            <Text style={styles.statText}>Posts: {profileData.postCount}</Text>
            <Separator />
          </View>
  
          <View style={styles.thirdSection}>
            <FlatList
              horizontal
              data={posts}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View style={styles.postCard}>
                  <Image source={{ uri: item.image }} style={styles.postImage} />
                  <Text>{item.caption}</Text>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    topSection: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    profilePicture: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    stats: {
      marginLeft: 20,
    },
    statText: {
      fontSize: 16,
      marginVertical: 5,
    },
    secondSection: {
      marginBottom: 20,
    },
    thirdSection: {
      marginBottom: 20,
    },
    postCard: {
      width: 150,
      marginRight: 10,
      alignItems: 'center',
    },
    postImage: {
      width: 150,
      height: 150,
    },
  });
  
  export default Profile;