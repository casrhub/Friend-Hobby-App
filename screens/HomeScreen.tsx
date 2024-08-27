import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { commonStyles } from '../styles';

// Define the type for the navigation stack
type RootStackParamList = {
  Hobbies: undefined;
  Friends: undefined;
  Home: undefined;
};

type HomeScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'Home'>;
};

function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={commonStyles.container}>
      <TouchableOpacity style={commonStyles.button} onPress={() => navigation.navigate('Hobbies')}>
        <Text style={commonStyles.buttonText}>My hobbies</Text>
      </TouchableOpacity>
      <TouchableOpacity style={commonStyles.button} onPress={() => navigation.navigate('Friends')}>
        <Text style={commonStyles.buttonText}>My friends</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#607D8B',  // Blue Gray color
  },
  button: {
    backgroundColor: '#D3D3D3', // Light Gray color for the button
    padding: 10,
    margin: 10,
    alignItems: 'center',
    borderRadius: 5
  },
  buttonText: {
    color: 'black', // Ensuring text is visible against the light gray background
    fontSize: 16
  }
});

export default HomeScreen;
