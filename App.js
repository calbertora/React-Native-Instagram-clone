import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NoAuthRoutes from './Components/No_Auth/NoAuthRoutes'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.textStyle}>Mostrando Texto</Text>
          <NoAuthRoutes/>
          <Text style={styles.textStyle}>Mostrando Texto</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
  },
  textStyle: {
    padding: 20
  }
});
