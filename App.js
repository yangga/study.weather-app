import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  state = {
    isLoaded: false
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoaded ? null : 
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Loading...</Text> 
        </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading: {
    flex: 1,
    backgroundColor: '#fdf6aa',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100
  },
});
