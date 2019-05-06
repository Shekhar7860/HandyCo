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
export default class Settings extends Component {

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

  goToHome = () =>{
    this.props.navigation.navigate('Home')
   }

   openPostalPage = () => {
    this.props.navigation.navigate('SetPostalCode')
   }

   openServicePage = () => {
    this.props.navigation.navigate('SetServiceType')
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
          <Title   style={styles.itemCenter}>Settings</Title>
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
        <TouchableOpacity style={styles.settingView} onPress = { () => this.openPostalPage()}>
          <Text style={styles.settingPageText}> Set Postal Code</Text>
        </TouchableOpacity>
      <TouchableOpacity  style={styles.settingView} onPress = { () => this.openServicePage()}>
          <Text style={styles.settingPageText}> Set Service Type</Text>
        </TouchableOpacity>
        </Content>
      <CustomToast ref = "defaultToastBottom"/>
      <Loader
        loading={this.state.loading} />
    </Container>
    );
}


}