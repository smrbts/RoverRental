import React from 'react'
import WalkScreen from './WalkScreen'
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    Button, 
    Modal,
    TouchableOpacity
} from 'react-native'



export default class DogSpecScreen extends React.Component
{
    render()
    {
      // console.log(this.props)
        return(
            <View>
                <Text>Here is my dog info! Woof Woof!</Text>
                    <TouchableOpacity
                      style={styles.buttonStyle}
                      onPress={() => this.props.navigation.navigate('Walks')}
                      >
                      <Text style={styles.buttonText}>Let's go for a walk!</Text>
                    </TouchableOpacity>
            </View>
        )
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

