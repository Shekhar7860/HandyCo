import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, Alert, ToastAndroid, ImageBackground, BackAndroid, DeviceEventEmitter,  BackHandler, TouchableOpacity, StatusBar, ScrollView} from 'react-native';
import styles from '../styles/styles';
// import { GoogleSignin } from 'react-native-google-signin';
// import { LoginManager,   AccessToken } from 'react-native-fbsdk';
import Service from '../services/Service';
import Constants from '../constants/Constants';
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


export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = { 
      email:'',
      password:'',
      emailError:'',
      passwordError:'',
      emailFormatError:'',
      loading: false
    }
    service = new Service();
    constants = new Constants();
   
  }


    componentDidMount = () => {
  //  this.setupGoogleSignin();
  
  }

  goToForgotPage = () => {
    this.props.navigation.navigate('ForgotPassword')
  }
 
  fbSignIn = () =>{
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      result => {
        if(result.isCancelled == false)
        {
        AccessToken.getCurrentAccessToken().then(
          (data) => {
                this.getUserProfile(data.accessToken);
        });
       }
      },
      error => {
        console.log('Login fail with error: ' + error);
      }
    );
  }


  async setupGoogleSignin() {
    try {
      GoogleSignin.configure({
        clientID: '494192112066-0m441va33bf6n4bnl8qaj892ededod9a.apps.googleusercontent.com',
        scopes: ['openid', 'email', 'profile'],
        shouldFetchBasicProfile: true,
      });
    }
    catch (err) {
      console.log("Google signin error", err.code, err.message);
    }
  }

  getUserProfile = (token) =>{ 
      fetch('https://graph.facebook.com/v2.9/me?fields=picture.width(720).height(720).as(picture_large),name,email,friends&access_token=' + token)
      .then((response) => response.json())
      .then((json) => {
        service.saveUserData('user', json);
        this.props.navigation.navigate('Home')
      })
      .catch((err) => {
      //  alert(JSON.stringify(err))
      })
     
  }

  
      goToSignUp = () =>{
       this.props.navigation.navigate('SignUp')
      }

      goToHome = () =>{
        service.saveUserData('user', "");
        this.props.navigation.navigate('Home')
      }
      login = () =>{
        if (service.validateEmail(this.state.email))
        {
          //alert("email correct")
          this.setState ({ emailFormatError: ''});
        }
        else{
          this.setState ({ emailFormatError: "Incorrect Email"});
        }
             
        if (this.state.email.trim() === "") {
          this.setState(() => ({ emailError: "*Email is required."}));
          this.setState(() => ({ emailFormatError: null}));
        } else {
          this.setState(() => ({ emailError: null})); 
        }
        if (this.state.password.trim() === "") {
          this.setState(() => ({ passwordError: "*Password is required."}));
        } else {
          this.setState(() => ({ passwordError: null}));
        }
        
        if(this.state.email && this.state.password && service.validateEmail(this.state.email))
        {
         this.setState ({ loading: true});
          setTimeout(() => 
          {this.setState({loading: false})
          service.saveUserData('user', "");
         this.props.navigation.navigate('Home')
           }, 3000)
          }
       
      //  this.refs.defaultToastBottom.ShowToastFunction('Login SuccessFull');
      
      
       }
       goToForgot = () =>{
        this.props.navigation.navigate('ForgotPassword')
       }
      
      state = {
      value: '',
   };

  handleTextChange = (newText) => this.setState({ value: newText });


  render() {
    return (
      
      <View
        style={styles.container}>
         
          <View style={styles.imageContainer}>
              <Image
              source={constants.logo}
              style={styles.imageWidth}/>
          </View> 
        
          <View style={styles.ContentLogin}>
          <View style={styles.cardContainer}>
                    
                   
                
             <View style={styles.rowAlign}>
           
             <Image source={constants.emailicon} style={styles.loginIcon}/>
             <View style={styles.emptySpace}></View>
             <TextInput  style={styles.textBoxFont } placeholder="Email ID"  placeholderTextColor="white" value={this.state.email} onChangeText={(text)=>this.setState({ email:text})}></TextInput>
            
             </View>
             
             {!!this.state.emailError && (
            <Text style={styles.error}>{this.state.emailError}</Text>
            )}
           
          
            <Text style={styles.error}>{this.state.emailFormatError}</Text>
            
             <View style={styles.rowAlign}>
            
             <Image source={constants.passwordicon} style={styles.loginIcon}/>
             <View style={styles.emptySpace}></View>
             <TextInput style={styles.textBoxFont } placeholder="Password"  placeholderTextColor="white" value={this.state.password}  secureTextEntry={true} onChangeText={(text)=> this.setState({ password:text})}></TextInput>
             
            </View>
             {!!this.state.passwordError && (
            <Text style={styles.error}>{this.state.passwordError}</Text>
             )}
             <View style={styles.buttonSpace}>
            <Button block light style={styles.mb15} onPress = { () => this.login()}>
            <Text style={styles.signInText}>Login</Text>
            </Button>
           </View>
             <TouchableOpacity style={styles.forgotTextContainer} onPress = { () => this.goToForgotPage()}>
             <Text style={styles.forgotPassText}>Forgot Password ?</Text>
             </TouchableOpacity>
             
             
            
     
      </View>
      </View>
          
   
      <View style={styles.toast}>
      <CustomToast ref = "defaultToastBottom"/>
      <Loader
          loading={this.state.loading} />
      </View>
      </View>
    
     
    );
  }
}

