// Drew Deister & Shirom Makkad
// 1.17.2020

// This slider updates continuosly onChange, but only changes its parent component on slidingComplete (prevents lag)
// See use of ternary operator: super cool


import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Text, Slider} from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { QuestionText } from './QuestionText';
import PropTypes from 'prop-types';

class SliderQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sliderValue: null,
        }
    }

    static propTypes = {
        question: PropTypes.string,
        questionLines: PropTypes.number,
        secondaryColor: PropTypes.string,
        min: PropTypes.number,
        max: PropTypes.number,
        step: PropTypes.number,
        shouldDisplay: PropTypes.bool,
        minLabel: PropTypes.string,
        maxLabel: PropTypes.string,
        fixedDecimals: PropTypes.number
    }

    static defaultProps = {
        question: "",
        questionLines: 1,
        secondaryColor: '#EB5B6D',
        min: 1,
        max: 100,
        step: 1,
        shoudlDisplay: true,
        minLabel: "",
        maxLabel: "",
        fixedDecemals: null,
        sliderValuePrefix: "",
        sliderValuePostfix: "",
    }

    changeValue(value) {
        this.setState({sliderValue: value})
        // important: Ensures parent state is updated every time sliderState is updated
        this.props.callback(value)
    } 

    render() {
        return (            
            <View style={styles.container}>
                <QuestionText
                    lines={this.props.questionLines}
                    question={this.props.question}
                    style={this.props.questionStyle}
                    >
                </QuestionText>
                
                <View style={styles.sliderContainer}>
                    <Slider style={styles.slider}
                            maximumTrackTintColor='white'
                            minimumTrackTintColor={this.props.secondaryColor}
                            trackStyle={styles.track}
                            thumbStyle={[styles.thumb, {backgroundColor: this.props.secondaryColor}]}
                            maximumValue={this.props.max}
                            minimumValue={this.props.min}
                            value = {this.state.sliderValue}
                            step={this.props.step} 
                            onValueChange={(value) => this.setState({sliderValue: value})}
                            onSlidingComplete={(value) => this.props.callback(value)}/>
                </View>

                <View style={styles.sliderLabelContainer}>
                    <Text style={styles.sliderLabel}
                          allowFontScaling={false}
                          >
                            {this.props.minLabel}
                    </Text>
                    { 
                    this.props.shouldDisplay ? // this is called a ternary operator: the text element will display if true
                        
                        <Text style={styles.sliderValue}>
                            <Text style={styles.sliderValuePrefix}>
                                {this.props.sliderValuePrefix}
                            </Text>
                            {
                                
                            this.props.fixedDecimals !== null && this.state.sliderValue !== null ?
                            this.state.sliderValue.toFixed(this.props.fixedDecimals) :
                            this.state.sliderValue
                            }  
                            <Text style={styles.sliderValuePrefix}>
                                {this.props.sliderValuePostfix}
                            </Text>
                        </Text>
                        
                        
                    : null
                    }
                    <Text style={[styles.sliderLabel, {textAlign: 'right'}]}
                          allowFontScaling={false}
                          >
                            {this.props.maxLabel}
                    </Text>
                </View>
                
            </View>   
        )
    }
}



export {SliderQuestion};

const styles = StyleSheet.create({
    thumb: {
        marginTop: -15,
    },
    track: {
        height: 5,
    },
    sliderValue: {
        color: 'white',
        fontSize: 20, //diagonalScale(4.5),
        fontWeight: '600',
    },
    sliderValuePrefix: {
        fontSize: 15
    },
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        marginVertical: 16,
    },
    sliderContainer: {
        marginTop: 5,
        marginBottom: 5,
        width: wp('74%'),
    },
    slider: {
        width: '100%',
        height: 10,
    },
    sliderLabelContainer: {
        flexDirection: 'row',
        width: wp('74%'),
        justifyContent: 'center'//'space-between'
    },
    sliderLabel: {
        width: wp('26%'),
        color: 'white',
        fontSize: 13, //diagonalScale(4.5),
        fontWeight: '600',
    }
});











