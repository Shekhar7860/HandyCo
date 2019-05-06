import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Alert,  Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';
import Constants from '../constants/Constants';
import Service from '../services/Service';
import CustomToast from './CustomToast';
import Loader from './Loader';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";
export default class BookingDetails extends Component {

  constructor(props){
    super(props);
    this.state = { 
      email:'',
      password:'',
      mobile:'',
      confirmPassword:'',
      confirmPasswordError:'',
      passwordError:'',
      emailFormatError:'',
      mobileError:'',
      emailFormatError:'',
      loading: false,
      cardheight:300,
      date : ""
    }
    service = new Service();
    constants = new Constants();
  }

  componentDidMount = () => {
      if (this.props.navigation.state.params){
          console.log('props', this.props.navigation.state.params)
          this.setState ({date : this.props.navigation.state.params.request.date})
      }
  }
  goToRequests = () =>{
    this.props.navigation.goBack();
   }

  confirm = () => {
    Alert.alert(
      '',
      'Are You Sure? You Want To Confirm This Booking?',
      [
        
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  cancel = () => {
    Alert.alert(
      '',
      'Are You Sure? You Want To Cancel This Booking?',
      [
        
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  render() {
    console.log('details', this.state.requestsdetails)
    return (
    
      <Container style={styles.container}>
      <Header style={styles.headerBackGround}>
        <Left >
          <Button transparent>
          <TouchableOpacity onPress={() => this.goToRequests()}>
          <Image source={constants.backicon } style={styles.icon} />
           </TouchableOpacity>
          </Button>
        </Left>
        <Body style={{ flex:3}}>
          <Title  style={styles.itemCenter}>BookingDetails</Title>
        </Body>
        <Right>
          <Button
            hasText
            transparent
          >
          </Button>
        </Right>
      </Header>
      <Content>
        <View style={styles.bookingContent}>
        <Text style={styles.bookingText}> <Text style={styles.bold} >Booking Date  </Text>:  {this.state.date} </Text>
        </View>
        <View style={styles.bookingButton}>
        <Button block primary style={styles.mb15} onPress = { () => this.submit()}>
            <Text style={styles.resetText}>11:30pm - 1:30pm</Text>
            </Button>
            </View>
        <View style={styles.bookingContent}>
        <Text style={styles.bookingText}> <Text style={styles.bold} >Requested on  </Text>:  20-02-19 </Text>
        </View>
        <View style={styles.line}>

        </View>
        <View style={styles.bookingContent}>
        <Text style={styles.bookingText}> <Text style={styles.bold} > Name  </Text>:  rohan Gavaskar </Text>
        </View>
        <View style={styles.bookingContent}>
        <Text style={styles.bookingText}> <Text style={styles.bold} > Service Type  </Text>:  Electrician </Text>
        </View>
        <View style={styles.bookingContent}>
        <Text style={styles.bookingText}> <Text style={styles.bold} > Mobile  </Text>:  9988274227 </Text>
        </View>
        <View style={styles.bookingContent}>
        <Text style={styles.bookingText}> <Text style={styles.bold} > Address </Text>: House No 154/6 </Text>
        </View>
        <View style={styles.bookingContent}>
        <Text style={styles.bookingText}> <Text style={styles.bold} > Service Cost </Text>: $ 50.00 </Text>
        </View>
        <View style={styles.bookingContent}>
        <Text style={styles.bookingText}> <Text style={styles.bold} > Payment Method </Text>: Cash </Text>
        </View>
        <View style={styles.bookingContent}>
        <Text style={styles.bookingText}> <Text style={styles.bold} > Duration (Hrs) </Text>: 2 </Text>
        </View>

        <View style={styles.buttonInRow}>
          <View style={styles.buttonemptyWidth}></View>
           <Button block primary  style={[styles.mb15, styles.confirmButton]} onPress = { () => this.confirm()}>
            <Text style={styles.resetText}>Confirm</Text>
            </Button>
          <View style={styles.buttonemptyWidth}></View>
          <Button block primary style={[styles.mb15, styles.cancelButton]} onPress = { () => this.cancel()}>
            <Text style={styles.resetText}>Cancel</Text>
            </Button>
        </View>
      </Content>
      <CustomToast ref = "defaultToastBottom"/>
      <Loader
        loading={this.state.loading} />
    </Container>
    );
}


}