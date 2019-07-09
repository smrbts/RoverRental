import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'


export default class WalkScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>Please select a time slot below:</Text>
        <Button
          style={styles.buttonStyle}
          onPress={() => this.props.navigation.navigate('Dogs')}
          title="Dismiss"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#71A9F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#0B2545',
    padding: 4,
    marginBottom: 5,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'GillSans',
    color: "#fff",
  },
})