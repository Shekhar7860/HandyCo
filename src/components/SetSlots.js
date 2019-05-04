import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
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
export default class SetSlots extends Component {

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
      cardheight:300
    }
    service = new Service();
    constants = new Constants();
  }

  signUp = () =>{
    this.setState(() => ({ cardheight:370}));
    if ( !service.validateEmail(this.state.email)) {
      this.setState(() => ({ emailFormatError: "Proper Email Format is Required"}));
    } 
    else{
      this.setState(() => ({ emailFormatError: ''}));
    }
    if (this.state.email.trim() === "") {
      this.setState(() => ({ emailError: " Email is required."}));
      this.setState(() => ({ emailFormatError: null}));
    } else {
      this.setState(() => ({ emailError: null})); 
    }
    if (this.state.password.trim() === "") {
      this.setState(() => ({ passwordError: " Password is required."}));
    } else {
      this.setState(() => ({ passwordError: null}));
    }
    if (this.state.mobile.trim() === "") {
      this.setState(() => ({ mobileError: " Mobile Number is required."}));
    } else {
      this.setState(() => ({ mobileError: null}));
    }
    if (this.state.confirmPassword.trim() === "") {
      this.setState(() => ({ confirmPasswordError: " Confirm Password is required."}));
    } else {
      this.setState(() => ({ confirmPasswordError: null}));
    }
    if(this.state.email && this.state.mobile && this.state.password && this.state.confirmPassword)
    {
      this.setState(() => ({ cardheight:300}));
    }

    if(this.state.email && this.state.password && this.state.mobile && this.state.confirmPassword && service.validateEmail(this.state.email))
    {
      
     this.setState ({ loading: true});
      setTimeout(() => 
      {this.setState({loading: false})
      this.refs.defaultToastBottom.ShowToastFunction('SignUp SuccessFully');
      this.props.navigation.navigate('Login')
       }, 3000)
      }

  
   // alert(this.state.password)
   }
   goToHome = () =>{
    this.props.navigation.navigate('Home')
   }
  render() {
    return (
    
      <Container style={styles.container}>
      <Header style={styles.headerBackGround}>
        <Left >
          <Button transparent>
          <TouchableOpacity onPress={() => this.goToHome()}>
          <Image source={constants.backicon } style={styles.icon} />
           </TouchableOpacity>
          </Button>
        </Left>
        <Body style={{ flex:3}}>
          <Title  style={{color:'white'}}>Set Slots</Title>
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
      </Content>
      <CustomToast ref = "defaultToastBottom"/>
      <Loader
        loading={this.state.loading} />
    </Container>
    );
}


}