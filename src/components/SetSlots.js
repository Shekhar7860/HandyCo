import React, {Component} from 'react';
import {Platform, Text, View,Alert,  TextInput, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';
import Constants from '../constants/Constants';
import Service from '../services/Service';
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
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
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
      cardheight:300,
      isSwitchOn : true
    }
    service = new Service();
    constants = new Constants();
    let datesWhitelist = [{
      start: moment(),
      end: moment().add(3, 'days')  // total 4 days enabled
    }];
    let datesBlacklist = [ moment().add(1, 'days') ]; // 1 day disabled
  }

  submit = () =>{
    this.setState({loading : true})
    setTimeout (() =>    {   this.setState({loading : false})
    setTimeout (() => { Alert.alert("Saved Successfully");
    this.props.navigation.navigate("Home")}, 1000)
  }, 1000 )
    
     
   }
  
 


   goToHome = () =>{
    this.props.navigation.navigate('Home')
   }

   checkDate = (date) => {
     console.log(date._d)
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
          <Title   style={styles.itemCenter}>Set Slots</Title>
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
      <CalendarStrip
                    calendarAnimation={{type: 'sequence', duration: 30}}
                    daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white'}}
                    style={{height: 100, paddingTop: 20, paddingBottom: 10}}
                    calendarHeaderStyle={{color: 'white'}}
                    calendarColor={'#7743CE'}
                    dateNumberStyle={{color: 'white'}}
                    dateNameStyle={{color: 'white'}}
                    highlightDateNumberStyle={{color: 'yellow'}}
                    highlightDateNameStyle={{color: 'yellow'}}
                    disabledDateNameStyle={{color: 'grey'}}
                    disabledDateNumberStyle={{color: 'grey'}}
                    iconContainer={{flex: 0.1}}
                    onDateSelected = { (val) => this.checkDate(val)}
                />
        <View style={styles.viewBackgroundMorning }>
        <View style={styles.viewTextWidth}>
        <Text style={styles.textViewAvailability}> Morning Shift</Text>
        </View>
        </View>
        <View style={styles.checkboxTextRow}>
        <View style={styles.listToggleIconWidth2}></View>
        <View style = {styles.widthcheckBox}><CheckBox
    style={styles.checkboxWidth}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
/><Text style={styles.checkBoxTextWidth}>8:00 am - 09:00 am</Text></View>
        <View style={styles.widthtWenty}></View>
        <View style = {styles.widthcheckBox}><CheckBox
    style={styles.checkboxWidth}
    onClick={()=>{
      this.setState({
          isChecked2:!this.state.isChecked2
      })
    }}
    isChecked={this.state.isChecked2}
/>
<Text  style={styles.checkBoxTextWidth}>12:00 am - 1:00 pm</Text></View>
        <View style={styles.listToggleIconWidth2}></View>
        </View>

          <View style={styles.checkboxTextRow}>
        <View style={styles.listToggleIconWidth2}></View>
        <View style = {styles.widthcheckBox}><CheckBox
    style={styles.checkboxWidth}
    onClick={()=>{
      this.setState({
          isChecked4:!this.state.isChecked4
      })
    }}
    isChecked={this.state.isChecked4}
/><Text style={styles.checkBoxTextWidth}>2:00 pm - 3:00 pm</Text></View>
        <View style={styles.widthtWenty}></View>
        <View style = {styles.widthcheckBox}><CheckBox
    style={styles.checkboxWidth}
    onClick={()=>{
      this.setState({
          isChecked3:!this.state.isChecked3
      })
    }}
    isChecked={this.state.isChecked3}
/>
<Text  style={styles.checkBoxTextWidth}>9:00 am - 10:00 am</Text></View>
        <View style={styles.listToggleIconWidth2}></View>
        </View>

        <View style={styles.viewBackgroundAfternoonSlots }>
        <View style={styles.viewTextWidth}>
        <Text style={styles.textViewAvailability}> AfterNoon Shift</Text>
        </View>
        </View>
        <View style={styles.checkboxTextRow}>
        <View style={styles.listToggleIconWidth2}></View>
        <View style = {styles.widthcheckBox}><CheckBox
    style={styles.checkboxWidth}
    onClick={()=>{
      this.setState({
          isChecked8:!this.state.isChecked8
      })
    }}
    isChecked={this.state.isChecked8}
/><Text style={styles.checkBoxTextWidth}>8:00 am - 09:00 am</Text></View>
        <View style={styles.widthtWenty}></View>
        <View style = {styles.widthcheckBox}><CheckBox
    style={styles.checkboxWidth}
    onClick={()=>{
      this.setState({
          isChecked5:!this.state.isChecked5
      })
    }}
    isChecked={this.state.isChecked5}
/>
<Text  style={styles.checkBoxTextWidth}>12:00 am - 1:00 pm</Text></View>
        <View style={styles.listToggleIconWidth2}></View>
        </View>

          <View style={styles.checkboxTextRow}>
        <View style={styles.listToggleIconWidth2}></View>
        <View style = {styles.widthcheckBox}><CheckBox
    style={styles.checkboxWidth}
    onClick={()=>{
      this.setState({
          isChecked6:!this.state.isChecked6
      })
    }}
    isChecked={this.state.isChecked6}
/><Text style={styles.checkBoxTextWidth}>2:00 pm - 3:00 pm</Text></View>
        <View style={styles.widthtWenty}></View>
        <View style = {styles.widthcheckBox}><CheckBox
    style={styles.checkboxWidth}
    onClick={()=>{
      this.setState({
          isChecked7:!this.state.isChecked7
      })
    }}
    isChecked={this.state.isChecked7}
/>
<Text  style={styles.checkBoxTextWidth}>9:00 am - 10:00 am</Text></View>
        <View style={styles.listToggleIconWidth2}></View>
        </View>
      </Content>
      <View style={styles.footerView}>
      <Button block primary style={styles.mb15} onPress = { () => this.submit()}>
            <Text style={styles.resetText}>SAVE TIMINGS</Text>
            </Button>
      </View>
      <CustomToast ref = "defaultToastBottom"/>
      <Loader
        loading={this.state.loading} />
    </Container>
    );
}


}