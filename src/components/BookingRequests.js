import React, {Component} from 'react';
import {Platform, Text, View, TextInput, FlatList, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
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
export default class BookingRequests extends Component {

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
      requests : []
    }
    service = new Service();
    constants = new Constants();
  }

  componentDidMount = () => {
    this.setState({
     
        requests : [{ 
          name : 'shekhar',
          string : 'S',
          date : '11-03-19',
          time : '12:30 pm - 1.30 pm'
        },
      {
        name : 'ankit',
        string : 'A',
        date : '11-05-19',
        time : '2:30 pm - 4.30 pm'
      },
      {
        name : 'akash',
        string : 'A',
        date : '11-07-19',
        time : '5 pm - 7 pm'
      },
      {
        name : 'Nagma',
        string : 'N',
        date : '11-09-19',
        time : '6 pm - 7 pm'
      }
    ]
    }
    )
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

   selectBooking = (val) => {
 // alert(JSON.stringify(val));
  this.props.navigation.navigate('BookingDetails', {request : val})
   }
  render() {
    console.log(this.state.requests, 'requests')
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
          <Title   style={styles.itemCenter}>Booking Requests</Title>
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
      <FlatList
        data={this.state.requests}
        style={styles.freelancerlistCardWidth}
        renderItem={({ item }) => (
      <View>
      <TouchableOpacity style = {styles.myRow}   onPress = { () => this.selectBooking(item)}>
<View style={{width:'30%'}}>
<TouchableOpacity
   style={{
       borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:70,
       height:70,
       backgroundColor:'#273c75',
       borderRadius:50,
       margin :10
     }}
 >
  <Text style={{fontSize:20, color:'white'}}>{item.string}</Text>
 </TouchableOpacity>
 </View>
<View style={{width:'50%', marginTop : 15}}>
    <Text>{item.name}</Text>
    <Text style={{marginTop:5}}>Date : {item.date}</Text>
    <Text  style={{marginTop:5}}>Time : {item.time}</Text>
</View>
<View style={{width:'30%',marginTop : 35}}>
    <Image source={constants.forwardArrowIcon} />
</View>
</TouchableOpacity>
<View style={styles.borderList}>
</View>
</View>
 )}
 />
      </Content>
      <CustomToast ref = "defaultToastBottom"/>
      <Loader
        loading={this.state.loading} />
    </Container>
    );
}


}