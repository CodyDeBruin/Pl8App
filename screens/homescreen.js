import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends React.Component {
  
  state = {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
            <Text style={styles.headerText} >Pl8</Text>
            <Text>Connecting drivers</Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHeader: {
    flex:1
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});
