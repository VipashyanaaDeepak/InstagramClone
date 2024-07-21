import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Post = ({ image, caption }) => {
  return (
    <View style={styles.post}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text>{caption}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
});
export const posts = [
    { id: '1', image: 'https://imgur.com/sXtovqa.jpg', caption: 'Post 1' },
    { id: '2', image: 'https://imgur.com/YOQo2Zi.jpg', caption: 'Post 2' },
    
  ];
  
export default Post;
