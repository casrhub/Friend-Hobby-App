import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export interface BaseItem {
  name: string;
  picture: string;
}

export interface Friend extends BaseItem {
  age: string;
}

export interface Hobby extends BaseItem {}

export type ListItem = Friend | Hobby;

const ListItemComponent: React.FC<{ item: ListItem }> = ({ item }) => {
  const [showImage, setShowImage] = useState(false);
  const isFriend = (item: ListItem): item is Friend => {
    return (item as Friend).age !== undefined;
  };

  const handlePress = () => {
    setShowImage(!showImage);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Text style={styles.text}>{item.name}</Text>
      {showImage && (
        <>
          <Image source={{ uri: item.picture }} style={styles.image} />
          {isFriend(item) && <Text style={styles.age}>Age: {item.age}</Text>}
        </>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center', // Make sure alignment does not squeeze the cards
      justifyContent: 'flex-start', // Align items to the top
      paddingTop: 20, // Padding from the top of the screen
      width: '100%', // Ensures the container takes full width
    },
    card: {
      padding: 20,
      alignItems: 'center',
      backgroundColor: '#f9f9f9',
      marginVertical: 10,
      width: '100%', // Card takes full width of the container
      maxWidth: 800, // Optional: Max width if you want to limit card size on larger devices
      alignSelf: 'center', // Ensure the card centers itself in the container
      borderRadius: 15,
      elevation: 4,
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.5,
      shadowRadius: 4
    },
    text: {
      fontSize: 18, // Adjust font size to ensure it fits in one line
      fontWeight: 'bold',
      textAlign: 'center', // Centers the text within the card
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 15
    },
    image: {
      width: 150,
      height: 150,
      marginTop: 10
    },
    detailsContainer: {
      alignItems: 'center',
      marginTop: 10
    }, 
    age: {
        fontSize: 14,
        color: '#666'
      }
  });

export default ListItemComponent;


