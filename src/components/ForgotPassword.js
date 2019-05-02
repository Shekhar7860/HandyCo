import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, ImageBackground,  TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';
import Constants from '../constants/Constants';
import Service from '../services/Service';
import CustomToast from './CustomToast';
import { withNavigation } from "react-navigation";
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
 class  ForgotPassword extends Component {
  constructor(props){
    super(props);
    service = new Service();
    constants = new Constants();
    this.state = { 
      email:'',    
      emailError:'',
      emailFormatError:'',
      loading:false
    }
  }

 
  submit = () =>{
    if ( !service.validateEmail(this.state.email)) {
      this.setState(() => ({ emailFormatError: "Proper Email Format is Required"}));
    } 
    else{
      this.setState(() => ({ emailFormatError: ''}));
    }
    if (this.state.email.trim() === "") {
      this.setState(() => ({ emailError: "*Email is required."}));
      this.setState(() => ({ emailFormatError: null}));
    } else {
      this.setState(() => ({ emailError: null})); 
    }
    if(this.state.email  && service.validateEmail(this.state.email))
        {
         this.setState ({ loading: true});
          setTimeout(() => 
          {this.setState({loading: false})
          this.refs.defaultToastBottom.ShowToastFunction('Email Sent Successfully');
          setTimeout(() => {
         this.props.navigation.navigate('Login')
          }, 1000);
           }, 3000)
          }
   
    }

   
  goToLogin = () => {
    this.props.navigation.navigate('Login')
   }

 
   
  render() {
    return (
     
      <Container style={styles.container}>
        <Header style={styles.headerBackGround}>
          <Left >
            <Button transparent >
            <TouchableOpacity onPress={() => this.goToLogin()}>
             <Image source={constants.backicon } style={styles.icon} />
             </TouchableOpacity>
            </Button>
          </Left>
          <Body style={{ flex:3}}>
            <Title  style={{color:'white'}}>FORGOT PASSWORD</Title>
          </Body>
          <Right>
            <Button
              hasText
              transparent
            >
             
            </Button>
          </Right>
        </Header>

        <Content padder >
          <View style={styles.margin5}>
          <Text style={styles.resetemailtext}>We just need your registered email id for </Text>
          <Text style={styles.resetPassText}>reset password  </Text>
          <View style={styles.rowMargin}>
             <View style={styles.rowAlignForgotPage}>
             <View style={styles.bottomSpace}>
             <Image source={constants.email2Icon} style={styles.forgotPageIcon}/>
             <View style={styles.emptySpace}></View>
             <TextInput  style={styles.textBoxFontForgot } placeholder="Email Id"  placeholderTextColor="black" value={this.state.email} onChangeText={(text)=>this.setState({ email:text})}></TextInput>
             </View>
             </View>
             </View>
             
             {!!this.state.emailError && (
            <Text style={styles.error}>{this.state.emailError}</Text>
            )}
          </View>
          <View style={styles.buttonSpace}>
          <View style= {styles.resetButtonCenter}>
            <Button block primary style={styles.mb15} onPress = { () => this.submit()}>
            <Text style={styles.resetText}>RESET PASSWORD</Text>
            </Button>
            </View>
           </View>
        </Content>
        <CustomToast ref = "defaultToastBottom"/>
        <Loader
          loading={this.state.loading} />
      </Container>
    );
}
}
export default withNavigation(ForgotPassword);


