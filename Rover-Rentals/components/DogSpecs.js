import React from 'react'
import WalkReservation from './WalkReservation'
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    Button, 
    Modal,
    TouchableOpacity
} from 'react-native'



export default class DogSpecs extends React.Component
{
    state = 
    {
        specs: [],
        isLoading: true,
        modalVisible: false,
    }


    render()
    {
        return(
            <View>
                <Text>Here is my dog info! Woof Woof!</Text>
                    <TouchableOpacity
                      style={styles.buttonStyle}>
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