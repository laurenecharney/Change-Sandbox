//Originally created by Drew
//Edited by Ethan

import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Text} from 'react-native-elements';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';


class HomeScreenActivityCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static propTypes = {
        title: PropTypes.string,
        navigateToActivity: PropTypes.string
    }
    static defaultProps = {
        title: 'Activity',
        navigateToActivity: 'Household',
    }

    render() {
        return (
            <View style={[styles.container, this.props.containerStyle]}>
                <TouchableOpacity style={[styles.button, this.props.style]}
                    onPress={() => this.props.navigation.navigate(this.props.navigateToActivity)}>
                    <Text style={styles.activityTitle}
                              allowFontScaling={false}
                              >
                                  {this.props.title}
                    </Text>
     
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        shadowOpacity: .2,
    },
    button: {
        width: wp("75%"),
        height: 146,
        borderRadius: 30,
        backgroundColor: '#9AD1F2', 
        alignItems: 'center',
        justifyContent: "flex-end",
    },
    activityTitle:{
        marginBottom: 18,
        width: "75%",
        color: 'white',
        fontSize: 23,
        fontWeight: '600',
      }
    
});


export default HomeScreenActivityCard;