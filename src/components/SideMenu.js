import React, {Component} from 'react';
import {ScrollView, Text, View, ImageBackground, Switch, Image, TouchableOpacity ,Alert} from 'react-native';
import Service from '../services/Service';
import Constants from '../constants/Constants';


class SideMenu extends Component {
  constructor(props){
    super(props);
   // console.log('propvalue', props);
    service = new Service();
    constants = new Constants();
    this.state = {
       userFbData: { picture_large:{ data:{}}},
       userGoogleData:{},
       name:"",
       names: [
        {
           id: 0,
           name: 'Home',
           icon:constants.homeIcon
        },
        {
           id: 1,
           name: 'Booking Requests',
           icon:constants.offerIcon
        },
        {
           id: 2,
           name: 'Set Availability',
           icon:constants.favIcon
        },
        {
           id: 3,
           name: 'Set Slots',
           icon:constants.creditIcon,
        },
        {
          id: 4,
          name: 'Settings',
          icon:constants.helpIcon,
       }
     ]
     }; 
}

takePicture = () => {
  const options = {};
  this.camera.capture({ metadata: options })
  .then((data) => console.log(data))
  .catch(err => console.error(err));
}
logOut = () =>{
  Alert.alert(
    'Log Out',
    'Are you Sure? You want to Log Out', [{
        text: 'Cancel',
        style: 'cancel'
    },
    {
        text: 'OK',
        onPress: () => 
        this.exit()
    }, ], {
        cancelable: false
    }
 )
  
}

exit = () => {
  this.props.navigation.navigate('Login')
}
alertItemName = (item) => {
  alert(item.name)
}
componentDidMount() {
//  console.log('newVal', service.getUserData('user'))
  service.getUserData('user').then((keyValue) => {
   
    var parsedData = JSON.parse(keyValue);
    console.log("localstorage", parsedData);
  if(parsedData.picture_large != undefined)
  {
   this.setState({userFbData: parsedData, name:"fb"});
  }
  else if(parsedData.photo != "")
  {
    this.setState({userGoogleData: parsedData, name:"google"});
  }
  


    }, (error) => {
    console.log(error) //Display error
  });
  
 } 
 

  render () {
   // console.log("Fbdata",  this.state.userFbData, "GoogleData", this.state.userGoogleData)
  
  const  NewImage =   <Image source={constants.defaultImage} style={styles.profilePic} />
   const fbImage = <Image source={constants.defaultImage} style={styles.profilePic} />;
   const GoogleImage = <Image source={constants.defaultImage} style={styles.profilePic} />;
   const fbName = <Text style={styles.userName}>Sumit Designer</Text>
   const GoogleName = <Text style={styles.userName}>Rohan</Text>

      
     var userImage;
     var userName;
        if (this.state.name == "fb") {
              if(fbImage.props.source.uri !== null){
                userImage =  fbImage
              }
              else
              {
                userImage = NewImage
              }
              userName = fbName
        } 
        else if(this.state.name == "google")
         {
         
                if(GoogleImage.props.source.uri !== null){
                  userImage = GoogleImage
                }
                else
                {
                  userImage = NewImage
                }
                userName = GoogleName
        }
        else
        {
          userImage = NewImage
        }
      
      
    return (
     
      <View
      style={styles.container}>
        <View style={styles.sideMenu}>
          {userImage}
          {userName}
          <TouchableOpacity onPress = {() => this.takePicture()}>
                 
          </TouchableOpacity>
           
            <View style={styles.topMargin}> 
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     onPress = {() => this.alertItemName(item)}>
                     
                     <View style={styles.list}>
                     <View style={styles.listItemsBlank2}></View>
                       <TouchableOpacity style={styles.listIconsWidth}>
                          <Image source={item.icon} style={styles.shareIcon}/>
                        </TouchableOpacity>
                        <View style={styles.listItemsBlank}></View>
                        <View style={styles.listTextWidth}>
                           <Text style={styles.listTextFontSize}>{item.name}</Text>
                        </View>
                     </View>
                  </TouchableOpacity>
               ))
            }
            <View style={styles.list}>
            <View style={styles.listItemsBlank2}></View>
                       <TouchableOpacity style={styles.listIconsWidth2}>
                          <Image source={constants.notificationIcon} style={styles.shareIcon}/>
                        </TouchableOpacity>
                        <View style={styles.listTextNotifications}>
                           <Text style={styles.listTextFontSize}>Available</Text>
                        </View>
                        <TouchableOpacity style={styles.listToggleIconsWidth2}>
                        <Switch style={styles.switch}
                        onValueChange={isSwitchOn => this.setState({isSwitchOn})}
                        value={this.state.isSwitchOn} 
                         />
                        </TouchableOpacity>
            </View>
         </View>
          
              <TouchableOpacity  style={styles.footer} onPress={() => this.logOut()}>
                   <View style={styles.list}>
                   <View style={styles.listItemsBlank2}></View>
                       <TouchableOpacity style={styles.listIconsWidth2}>
                          <Image source={constants.logoutIcon} style={styles.shareIcon}/>
                        </TouchableOpacity>
                        <View style={styles.listItemsBlank}></View>
                        <View style={styles.listTextWidth}>
                           <Text style={styles.listTextFontSize}>LOGOUT</Text>
                        </View>
                     </View>
              </TouchableOpacity >
        </View>
   </View>
     
     
    );
  }
}



export default SideMenu;