import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text,  Image, TouchableOpacity,  TextInput, ImageBackground, TouchableNativeFeedback} from 'react-native';
import styles from '../styles/styles';
import Constants from '../constants/Constants';
import Service from '../services/Service';
import CustomToast from './CustomToast';
import { withNavigation } from "react-navigation";
import MyView from './MyView';
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
  import Loader from './Loader';

 class Home extends Component {
 constructor(props){
     super(props);
     service = new Service();
     constants = new Constants();
     this.state = {
        userData: { picture_large:{ data:{}}},
        loading : false,
        showSoundImg: true,
isFeed: true,
loading: false,
isFav: false,
isCat: false,
search: true,
itemFav: false,
modalVisible: false,
noText: true,
noTextFav : true,
dummyText: "",
favStatus: false,
notCount : "",
Item: 0,
dummyTextFav :"",
refreshing: false
      };
   
 }
 componentDidMount() {}
  
 hideTab = () => {
    this.setState({ isFeed: true });
    this.setState({ isFav: false });
    }
    
    
    hideTab2 = () => {
    this.setState({ isFeed: false });
    this.setState({ isFav: true });
  
    }

    openDrawer = () =>{
        this.props.navigation.openDrawer();}

    searchPage = () =>{
    alert("searching Page")   
        }
  render() {
    return (
        <Container style={styles.container}>
        <Header style={styles.headerBackGround}>
          <Left >
            <Button transparent >
            <TouchableOpacity onPress={() => this.openDrawer()}>
            <Image source={constants.menuicon} style={styles.hamburgerIcon} />
             </TouchableOpacity>
            </Button>
          </Left>
          <Body style={{ flex:3}}>
            <Title  style={{color:'white'}}>Home</Title>
          </Body>
          <Right>
            <Button
              hasText
              transparent
            >
            </Button>
          </Right>
        </Header>
        <Content  >
<View style={styles.tabs} >
<View style={styles.empty}>
</View>
<View style={styles.empty}>
</View>

<TouchableOpacity  style= {[ this.state.isFeed == true ? styles.selectedTab1 : styles.Tab1]} onPress={() => this.hideTab()}>
<Text style={{ color: this.state.isFeed == false ? "white" : 'white', textAlign: 'center', paddingTop: 10, width:'100%', fontSize:20}}>Today</Text>
</TouchableOpacity>
<TouchableOpacity  style= {[ this.state.isFav == true ? styles.selectedTab3 : styles.Tab3]} onPress={() => this.hideTab2()}>
<Text style={{ color: this.state.isFeed == true ? "white" : 'white', textAlign: 'center', paddingTop: 10, width:'100%', fontSize:20}}>Upcoming</Text>
</TouchableOpacity>

</View>

<MyView hide={!this.state.isFeed}>

<MyView style={styles.noTextContainer} >
<View style = {styles.myRow}>
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
  <Text style={{fontSize:20, color:'white'}}>B</Text>
 </TouchableOpacity>
 </View>

<View style={{width:'50%', marginTop : 15}}>
    <Text>bhumi user</Text>
    <Text style={{marginTop:5}}>Date : 02-05-2019</Text>
    <Text  style={{marginTop:5}}>10:30 am - 11.30 am</Text>
</View>
<View style={{width:'30%',marginTop : 35}}>
    <Image source={constants.forwardArrowIcon} />
</View>

</View>
</MyView>

</MyView>


<MyView hide={!this.state.isFav}>
<MyView >
<View style = {styles.myRow}>
<View style={{width:'30%'}}>
<TouchableOpacity
   style={{
       borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:70,
       height:70,
       backgroundColor:'#e84118',
       borderRadius:50,
       margin :10
     }}
 >
  <Text style={{fontSize:20, color:'white'}}>R</Text>
 </TouchableOpacity>
 </View>

<View style={{width:'50%', marginTop : 15}}>
    <Text>Ritika Singh</Text>
    <Text style={{marginTop:5}}>Date : 03-05-2019</Text>
    <Text  style={{marginTop:5}}>11:30 am - 12.30 am</Text>
</View>
<View style={{width:'30%',marginTop : 35}}>
    <Image source={constants.forwardArrowIcon} />
</View>

</View>
</MyView>

</MyView>
        </Content>
        <CustomToast ref = "defaultToastBottom"/>
        <Loader
          loading={this.state.loading} />
      </Container>
    );
  }
}
export default withNavigation(Home);
