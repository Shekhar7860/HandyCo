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
  List,
  ListItem,
  Left,
  Right,
  Body
} from "native-base";


const datas = [
  "Simon Mignolet",
  "Nathaniel Clyne",
  "Dejan Lovren",
  "Mama Sakho",
  "Alberto Moreno",
  "Emre Can",
  "Joe Allen",
  "Phil Coutinho"
];

export default class SetServiceType extends Component {

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
      list : false,
      imgsource : constants.rightIcon
    }
    service = new Service();
    constants = new Constants();
  }

  showHideList = () => {
    if(this.state.list == false) {
    this.setState({imgsource : constants.downIcon })
    this.setState({list : true })
    }
    else {
      this.setState({imgsource : constants.rightIcon })
      this.setState({list : false })
    }
     }
  
   goBack = () =>{
    this.props.navigation.goBack();
   }
  render() {
    return (
    
        <Container style={styles.container}>
        <Header style={styles.headerBackGround}>
          <Left >
            <Button transparent>
            <TouchableOpacity onPress={() => this.goBack()}>
            <Image source={constants.backicon } style={styles.icon} />
             </TouchableOpacity>
            </Button>
          </Left>
          <Body style={{ flex:3}}>
            <Title  style={styles.itemCenter}>Set Service Type</Title>
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
           <View style={styles.postalView} >
            <Text style={styles.postalPageText}> List Of Service Types</Text>
          </View>
          <TouchableOpacity style={styles.imageTextRow} onPress = { () => this.showHideList()}>
          <View style={styles.emptySpace}>
          </View>
          <View style={styles.firstText} >
          <Text style={styles.listTextFontSizeGUI}>GUI District</Text>
        </View>
        <View style = {styles.emptyPostalView}></View>
        <Image style={styles.arrowImage} source = {this.state.imgsource} />
        </TouchableOpacity>
        <View style={styles.line2}>
      </View>
      {this.state.list ? <View>
        <List
            dataArray={datas}
            renderRow={data =>
              <ListItem>
                <Left>
                  <Text>
                    {data}
                  </Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>}
          />
      </View> : null }
        </Content>
        
        <CustomToast ref = "defaultToastBottom"/>
        <Loader
          loading={this.state.loading} />
      </Container>
    );
}


}