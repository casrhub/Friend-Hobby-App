import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ListItemComponent from '../Components/ListItem';  // Import the generic list item component
import { ListItem } from '../Components/ListItem';
import { commonStyles } from '../styles';



function ListContainer() {
  
  const [items, setItems] = useState<ListItem[]>([]);  // State to hold any list item

  useEffect(() => {
    // Example: Fetch data that could be friends or hobbies
    fetch('https://my-jsons.vercel.app/myfriends.json')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <View style={commonStyles.container}>
    <Text style={styles.header}>My Friends</Text>
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItemComponent item={item} />}
        keyExtractor={item => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    width: '80%', 
    alignSelf: 'center',
  }, 

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15
  },
});

export default ListContainer;
