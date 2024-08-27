// styles.js
import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#607D8B',  // Blue Gray color for backgrounds
  },
  button: {
    backgroundColor: '#D3D3D3', // Light Gray for buttons
    padding: 10,
    margin: 10,
    alignItems: 'center',
    borderRadius: 5
  },
  buttonText: {
    color: 'black',  // Ensuring text is visible
    fontSize: 16
  }
});
