import React from 'react'
import { View, Text, Image, Button, TouchableOpacity} from 'react-native'



export default class DogSpecs extends React.Component
{
    state = 
    {
        specs: [],
        isLoading: true
    }

    render()
    {
        return(
            <View>
                <Text>Here is my dog info! Woof Woof!</Text>
                    <TouchableOpacity>
                        <Button
                        backgroundColor='#03A9F4'
                        title="Lets walk together!"
                        />
                    </TouchableOpacity>
            </View>
        )
    }
}