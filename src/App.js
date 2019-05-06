
import React, {Component} from 'react';
import { StackNavigator, DrawerNavigator, createBottomTabNavigator} from 'react-navigation';
import { BackHandler, Alert, Image} from 'react-native';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Splash from './components/Splash';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import SideMenu from './components/SideMenu';
import SplashScreen from 'react-native-splash-screen'
import BookingRequests from './components/BookingRequests';
import SetAvailability from './components/SetAvailability';
import SetSlots from './components/SetSlots';
import Settings from './components/Settings';
import SetPostalCode from './components/SetPostalCode';
import SetServiceType from './components/SetServiceType';
import BookingDetails from './components/BookingDetails';

// Sidemenu
export const Menu = createBottomTabNavigator({
    Home: { screen: Home, navigationOptions: {
      tabBarLabel: 
        'Home',
        tabBarIcon : ({ tintColor }) => (<Image source={constants.homeIcon} style={styles.shareIcon} />)
      
    }},
    SetAvailability : { screen : SetAvailability,
      navigationOptions: {
        tabBarLabel: 
          'Set Availability',
          tabBarIcon : ({ tintColor }) => (<Image source={constants.avaiIcon} style={styles.shareIcon} />)
        
      }},
    SetSlots : { screen: SetSlots, navigationOptions: {
      tabBarLabel: 
        'Set Slots',
        tabBarIcon : ({ tintColor }) => (<Image source={constants.slotIcon} style={styles.shareIcon} />)
      
    }},
    Settings:{ screen : Settings, navigationOptions: {
      tabBarLabel: 
        'Settings',
        tabBarIcon : ({ tintColor }) => (<Image source={constants.settingsIcon} style={styles.shareIcon} />)
      
    }}
}, {
  contentComponent: SideMenu,
  drawerWidth: 300
});

// routing 
const AppNavigator = StackNavigator(
  {
    Splash: { screen: Login},
    Login: { screen: Login},
    Home: { screen: Menu},
    SignUp: { screen: SignUp},
    ForgotPassword:{ screen : ForgotPassword},
    BookingRequests : { screen: BookingRequests},
    SetAvailability : { screen : SetAvailability},
    SetSlots : { screen: SetSlots},
    SetPostalCode : { screen : SetPostalCode},
    SetServiceType : { screen: SetServiceType},
    Settings:{ screen : Settings},
    BookingDetails:{ screen : BookingDetails}
  },
  { headerMode: 'none' }
);

export default class App extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      navState: ""
    };
  }
 
 
  onNavigationChange = (navState, currentState ,action) => {
    if (navState.hasOwnProperty('index')) {
      this.setState({navState: navState.routes[navState.index]})
  } else {
      this.setState({navState: setCurrentRouteName(navState.routeName)})
  }
  }
  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
   }
  
    
   componentWillUnmount = () =>{
     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
   }  

   handleBackButton = () => {
    if(this.state.navState.routeName == "Login")
    {
      BackHandler.exitApp()
      return true;
    }
    else if(this.state.navState.routeName == "Home")
    {
      Alert.alert(
        'Exit App',
        'Do you want to Exit the application?', [{
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
        }, {
            text: 'OK',
            onPress: () => BackHandler.exitApp()
        }, ], {
            cancelable: false
        }
     )
      return true;
    }
     
   } 

  render() {
    return (
      <AppNavigator
      onNavigationStateChange={this.onNavigationChange}
    />
    );
  }
}


