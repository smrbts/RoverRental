import React from 'react'
import WalkScreen from './WalkScreen'
import Calendar from './Calendar'
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    Button, 
    TouchableOpacity
} from 'react-native'




export default class DogSpecScreen extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state=
    {
      isBooked: false,
      walks:[{}],
      // modalVisible: false
    }
    // },this._addModal = this._addModal.bind(this)
  }

  // static navigationOptions = ({ navigation }) => 
  // {
  //   const params = navigation.state.params || {};
  // }

  // _addModal() 
  // {
  //   this.setState({modalVisible: true})
  // }

  // componentDidMount() 
  // {
  //   this.props.navigation.setParams({
  //     addModal: this._addModal
  //   })
  // }

  handleSubmit = (dog) => 
  {
    this.setState(
      {
        walks: dog
      })
    let walkObj = 
    {
      dog_id: this.props.dog.id,
      user_id: 1,
    }
    fetch('http://localhost:3000/walks',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(walkObj)
    })
    .then(res => res.json())
    .then(data => 
      {
        console.log(data)
      })
      // .then(this.props.fetchWalkDogs)
  }


    render()
    {
        return(
            <View>
                    <Text> Breed: {this.props.dog.breed} </Text>
                    <Text> Gender: {this.props.dog.gender} </Text>
                    <Text> Age: {this.props.dog.age} </Text>
                    <Calendar />
                    <TouchableOpacity
                      style={styles.buttonStyle}
                      onPress={() => this.handleSubmit(this.props.dog)}
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

