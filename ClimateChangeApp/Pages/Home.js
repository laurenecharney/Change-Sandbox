import React, { Component } from "react";
import HomeScreenActivityCard from "../Components/HomeScreenActivityCard";
import { ScrollView, View, StyleSheet, Image } from "react-native";
import { Text } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


function LogoTitle() {
  return (
    <Image
      style={{ width: 200, height: 40 }}
      source={require("../assets/CarbonXP_Logos/NameLogo_Light.png")}
    />
  );
}

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingModal: false
        };
    }

    static navigationOptions = {
        title: " ",
        headerTitle: LogoTitle,
        headerStyle: {backgroundColor: '#73A388',  height: 45, borderBottomWidth: 0},
    };

    setScrollView = scrollView => {
        // NOTE: scrollView will be null when the component is unmounted
        this._scrollView = scrollView;
    };

    componentDidMount() {
        this.flashScroll();
    }

    flashScroll() {
        setTimeout(() => {
            this._scrollView.flashScrollIndicators();
        }, 200)
    }

    // "main method"
    render() { 
        return (
            <View style={styles.safeView}>
                <ScrollView style = {styles.scrollview}
                            contentContainerStyle = {styles.containerStyle}
                            ref={this.setScrollView}
                            >
                    <View style = {styles.imageContainer}>
                            <Image style = {styles.image} source = {require('../assets/Home.png')} />
                    </View>

                    <View style={styles.headerTextContainer}>
                        <Text style={styles.pageTitle}
                              allowFontScaling={false}
                              >
                                  Activities
                        </Text>
                    </View>
                    
                    <HomeScreenActivityCard 
                        title = {"Carbon Counter"}      
                        navigateToActivity = 'Household'
                        navigation = {this.props.navigation}
                        style = {{backgroundColor: '#FCCCC0'}}
                        />
                </ScrollView>

            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
    },
    imageContainer: {
        height: wp("38.85%"),  
        width: wp("92%"),     //       wp("38%") : wp("90%")
    },
    containerStyle: {
        paddingTop: 25,
        padding: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'white'
    },
    scrollview: {
        paddingTop: 0,
        backgroundColor: "white",//"#F0F5DF"
    },
    image: {
        height: '130%',
        width: '100%',
    },
    headerTextContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 16,
        width: wp("62%"),
    },
    pageTitle: {
        color: '#73A388',   //green
        fontSize: 30,
        fontWeight: '700',
    },
});
