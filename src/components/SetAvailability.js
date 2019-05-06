import React, {Component} from 'react';

import {Platform, Text, View, TextInput, Switch,Image, TouchableHighlight, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';
import Constants from '../constants/Constants';
import Service from '../services/Service';
import PropTypes from 'prop-types';
import CustomToast from './CustomToast';
import Loader from './Loader';
import CheckBox from 'react-native-check-box'
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


 


export default class SetAvailability extends Component {

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
   
    this.state = { selectedItems: '', loading : false, isChecked7 : true, isSwitchOn : true, isSwitchOn2 : true, isSwitchOn3 : true, isSwitchOn4 : true}
    
  }

  componentDidMount = () => {

  }
  switchValue2 = (isSwitchOn) => {
    console.log('val', isSwitchOn);
    this.setState({isSwitchOn2 : isSwitchOn })
     }
  switchValue = (isSwitchOn) => {
 console.log('val', isSwitchOn);
 this.setState({isSwitchOn})
  }

  switchValue3 = (isSwitchOn) => {
    console.log('val', isSwitchOn);
    this.setState({isSwitchOn3 : isSwitchOn })
     }

     switchValue4 = (isSwitchOn) => {
      console.log('val', isSwitchOn);
      this.setState({isSwitchOn4 : isSwitchOn })
       }
  getSelectedItems = () => {
 
    if (selectedArrayOBJ.getArray().length == 0) {
 
      Alert.alert('No Items Selected!');
    }
    else {
      // console.log(selectedArrayOBJ.getArray().map(item => item.label).join());
      this.setState(() => {
        return {
          selectedItems: selectedArrayOBJ.getArray().map(item => item.value).join()
        }
      });
    }
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
          <Title  style={{color:'white'}}>Set Availability</Title>
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
        <View style={styles.viewBackground}>
        <Text style={styles.textViewAvailability}> Your Availability</Text>
        </View>
        <View style={styles.myRowCheckBox}>
        <CheckBox
    style={styles.checkboxWidth}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
/>    
<Text style={styles.textWidthCheckBox}>Sun</Text>
<View style={styles.emptyWidthCheck }></View>
<CheckBox
    style={styles.checkboxWidth}
    onClick={()=>{
      this.setState({
          isChecked2:!this.state.isChecked2
      })
    }}
    isChecked={this.state.isChecked2}
/>    
<Text style={styles.textWidthCheckBox}>Mon</Text>
<View style={styles.emptyWidthCheck }></View>
<CheckBox
  style={styles.checkboxWidth}
    onClick={()=>{
      this.setState({
          isChecked3:!this.state.isChecked3
      })
    }}
    isChecked={this.state.isChecked3}
/>    
<Text style={styles.textWidthCheckBox}>Tue</Text>
<View style={styles.emptyWidthCheck }></View>
<CheckBox
    style={styles.checkboxWidth}
    onClick={()=>{
      this.setState({
          isChecked4:!this.state.isChecked4
      })
    }}
    isChecked={this.state.isChecked4}
/>    
<Text style={styles.textWidthCheckBox}>Wed</Text>
<View style={styles.emptyWidthCheck }></View>
<CheckBox
    style={styles.checkboxWidth}
    onClick={()=>{
      this.setState({
          isChecked5:!this.state.isChecked5
      })
    }}
    isChecked={this.state.isChecked5}
/>    
<Text style={styles.textWidthCheckBox}>Thur</Text>
<View style={styles.emptyWidthCheck }></View>
<CheckBox
    style={styles.checkboxWidth}
    onClick={()=>{
      this.setState({
          isChecked6:!this.state.isChecked6
      })
    }}
    isChecked={this.state.isChecked6}
/>    
<Text style={styles.textWidthCheckBox}>Fri</Text>
<View style={styles.emptyWidthCheck }></View>
<CheckBox
    style={styles.checkboxWidth}
    onClick={()=>{
      this.setState({
          isChecked7:!this.state.isChecked7
      })
    }}
    isChecked={this.state.isChecked7}
/>    
<Text style={styles.textWidthCheckBox}>Sat</Text>
<View style={styles.emptyWidthCheck }></View>
</View>

<View style={styles.viewBackgroundMorning }>
        <View style={styles.viewTextWidth}>
        <Text style={styles.textViewAvailability}> Morning Shift</Text>
        </View>
        <View style={styles.emptySwitch}></View>
        <View style={styles.switchWidth}>
        <Switch style={styles.switch}
                        onValueChange={ (isSwitchOn) => this.switchValue(isSwitchOn)}
                        value={this.state.isSwitchOn} 
                       
                         />
          </View>
        </View>
{this.state.isSwitchOn ? <View style={styles.middleRow}>
<View style={styles.emptySpace}></View>
<View style={styles.emptySpace}></View>
<Image  style={styles.imageClock} source= {constants.clockIcon} />
<View style={styles.emptySpace}></View>
<Text style={styles.textMargin}> 9: 00 AM</Text>
<View style={styles.emptySpace}></View>
<Image  style={styles.imageClock} source= {constants.clockIcon} />
<View style={styles.emptySpace}></View>
<Text style={styles.textMargin}> 11: 00 AM</Text>
</View> : null }

<View style={styles.viewBackgroundAfternoon }>
<View style={styles.viewTextWidth}>
<Text style={styles.textViewAvailability}> AfterNoon Shift</Text>
</View>
<View style={styles.emptySwitch}></View>
<View style={styles.switchWidth}>
<Switch style={styles.switch}
                onValueChange={ (isSwitchOn) => this.switchValue2(isSwitchOn)}
                value={this.state.isSwitchOn2} 
                 />
  </View>
</View>
{ this.state.isSwitchOn2 ?  
<View style={styles.middleRow}>
  <View style={styles.emptySpace}></View>
  <View style={styles.emptySpace}></View>
  <Image  style={styles.imageClock} source= {constants.clockIcon} />
  <View style={styles.emptySpace}></View>
  <Text style={styles.textMargin}> 10: 00 AM</Text>
  <View style={styles.emptySpace}></View>
  <Image  style={styles.imageClock} source= {constants.clockIcon} />
  <View style={styles.emptySpace}></View>
  <Text style={styles.textMargin}> 12: 00 PM</Text>
</View> : null }



<View style={styles.viewBackgroundEvening }>
<View style={styles.viewTextWidth}>
        <Text style={styles.textViewAvailability}> Evening Shift</Text>
        </View>
        <View style={styles.emptySwitch}></View>
        <View style={styles.switchWidth}>
        <Switch style={styles.switch}
                        onValueChange={ (isSwitchOn) => this.switchValue3(isSwitchOn)}
                        value={this.state.isSwitchOn3} 
                       
                         />
          </View>
        </View>
{this.state.isSwitchOn3 ? <View style={styles.middleRow}>
<View style={styles.emptySpace}></View>
<View style={styles.emptySpace}></View>
<Image  style={styles.imageClock} source= {constants.clockIcon} />
<View style={styles.emptySpace}></View>
<Text style={styles.textMargin}> 3: 00 PM</Text>
<View style={styles.emptySpace}></View>
<Image  style={styles.imageClock} source= {constants.clockIcon} />
<View style={styles.emptySpace}></View>
<Text style={styles.textMargin}> 5: 00 PM</Text>
</View> : null }

<View style={styles.viewBackgroundNight }>
<View style={styles.viewTextWidth}>
        <Text style={styles.textViewAvailability}> Night Shift</Text>
        </View>
        <View style={styles.emptySwitch}></View>
        <View style={styles.switchWidth}>
        <Switch style={styles.switch}
                        onValueChange={ (isSwitchOn) => this.switchValue4(isSwitchOn)}
                        value={this.state.isSwitchOn4} 
                       
                         />
          </View>
        </View>
{this.state.isSwitchOn4 ? <View style={styles.middleRow}>
<View style={styles.emptySpace}></View>
<View style={styles.emptySpace}></View>
<Image  style={styles.imageClock} source= {constants.clockIcon} />
<View style={styles.emptySpace}></View>
<Text style={styles.textMargin}> 4: 00 PM</Text>
<View style={styles.emptySpace}></View>
<Image  style={styles.imageClock} source= {constants.clockIcon} />
<View style={styles.emptySpace}></View>
<Text style={styles.textMargin}> 6: 00 PM</Text>
</View> : null }


      </Content>
      <CustomToast ref = "defaultToastBottom"/>
      <Loader
        loading={this.state.loading} />
    </Container>
      
    );
}


}
