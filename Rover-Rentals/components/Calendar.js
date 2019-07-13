import React, { Component } from "react";
import { Button, View, StyleSheet } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

export default class DateTimePickerTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false
    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.hideDateTimePicker();
  };

  render() 
  {
    return (
      <>
        <Button style={styles.buttonStyle} title="Please select your date and time!" onPress={this.showDateTimePicker} />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          mode='datetime'
        />
      </>
    );
  }
}

const styles = StyleSheet.create(
{
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
    }
})