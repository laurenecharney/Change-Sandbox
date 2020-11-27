import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {StackViewStyleInterpolator} from 'react-navigation-stack'
import Home from './Pages/Home';
import Results from './Pages/Results';
import SurveyHousehold from './Pages/SurveyHousehold';


export default class App extends React.Component {
  // this is like the main method of the project
  render() {
    return <AppContainer />;
  }
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 200, height: 40 }}
      source={require("./assets/CarbonXP_Logos/NameLogo_Light.png")}
    />
  );
}

function backArrow() {
  return (
    <Image
        style={{ width: 30, height: 30, tintColor: '#F0F5DF'}}
        source={require("./assets/LeftBlueArrow.png")}/>
  );
}

// this is very important, use this as reference when you don't understand navigation
const AppNavigator = createStackNavigator(
  {
    // road map for the different parts of our navigation
    Home: { screen: Home },
    Household: {screen: SurveyHousehold},
    Results: { screen: Results },
  },
  {
    initialRouteName: "Home", 
    headerLayoutPreset: "center",
    transitionConfig: () => ({
      screenInterpolator: StackViewStyleInterpolator.forHorizontal
    }),
    defaultNavigationOptions: {
      // these will be augmented by the navigation options of the respective screens
      // https://reactnavigation.org/docs/en/headers.html
      headerStyle: {
        backgroundColor: "#73A388",
        borderBottomWidth: 0,
      },
      headerBackTitle: " ",
      headerTitle: LogoTitle,
      headerTintColor: '#F0F5DF',
      headerBackImage: backArrow
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);
