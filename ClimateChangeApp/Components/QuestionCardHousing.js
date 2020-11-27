// Drew Deister
// 1.14.2020

// note: Creating child components is generally best practices for everything on this screen.
//       However, QuestionCard needs access to all child states, and since a child Slider component
//       would need to update almost continuously, I have chosen to leave it as part of this parent.


import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import { InputQuestion } from '../Components/InputQuestion';
import * as SecureStore from 'expo-secure-store';
import INFORMATION from '../Utilities/text.json'; // import JSON file
import { SliderQuestion } from '../Components/SliderQuestion';
import NextButton from "../Components/NextButton";

const HOUSEHOLD_INFO = INFORMATION["carbonCounterScreens"]["household"];


class QuestionCardHousing extends React.Component {
    constructor(props) {
        super(props);
        // this holds the state of the sub components
        // it is superior to letting the subcompents manage themselves because we can access their states
        // and save them when the next button is pushed
        this.state = {
            zipCode: 0,
            numPeople: '',
            sliderValue: 1,
        }
        this.callbackFunction1 = this.callbackFunction1.bind(this); // make sure these are both correct
        this.callbackFunction2 = this.callbackFunction2.bind(this);
        this.updateSliderState = this.updateSliderState.bind(this);
    }

    callbackFunction1(value) {
        this.setState({zipCode: value})
    }

    callbackFunction2(value) {
        this.setState({numPeople: value})
    }
    updateSliderState(value) {
        this.setState({sliderValue: value})
    }

    // called when next button is pushed
    saveAndPush() {
        SecureStore.setItemAsync("zipCode", JSON.stringify(this.state.zipCode)) // save to async
        SecureStore.setItemAsync("numPeople", JSON.stringify(this.state.numPeople))
        SecureStore.setItemAsync("squareFootage", JSON.stringify(this.state.sliderValue))
        SecureStore.setItemAsync("hasHousingBeenAccessed", JSON.stringify("true"))
        
        this.props.navigation.navigate('Results')
    }


    render() {
        return(
            <View style = {styles.view}>
                <InputQuestion
                    ref = {'q1'}
                    keyboardType = {'numeric'}
                    parentCallBack = {this.callbackFunction1}
                    question = {HOUSEHOLD_INFO["questions"][0]}
                    placeholder = {HOUSEHOLD_INFO["placeholders"][0]}/>
                <InputQuestion
                    ref = {'q2'}
                    keyboardType = {'numeric'}
                    parentCallBack = {this.callbackFunction2}
                    question = {HOUSEHOLD_INFO["questions"][1]}
                    placeholder = {HOUSEHOLD_INFO["placeholders"][1]}
                    questionLines={2} />

                <SliderQuestion
                    ref = {'slider'}
                    question={HOUSEHOLD_INFO["questions"][2]}
                    max={6000} min={600} step={100}
                    shouldDisplay={true}
                    callback = {this.updateSliderState} />

                <NextButton
                    onPress={() => this.saveAndPush()}
                    textStyle={{color: this.props.backgroundColor}}
                    >
                    Next
                </NextButton>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    view: {
        alignItems: 'center'
    }
})


export {QuestionCardHousing};
