//Ethan
//3/21/2020
// Survey card is essentially a scrollview contained an image and page title.
//             It represents one screen of the Carbon Counter Survey

import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const images = {
    'Household': require('../assets/Household.png'),
}


class SurveyCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    setScrollView = scrollView => {
        // NOTE: scrollView will be null when the component is unmounted
        this._scrollView = scrollView;
    };


    render() {
        return (
            <View style={styles.safeView}>
                <KeyboardAwareScrollView // this is similar to scrollview
                    resetScrollToCoords={{x: 0, y:0}}
                    extraScrollHeight={-30}
                    style={[styles.scrollViewStyle, this.props.style]}
                    contentContainerStyle = {styles.containerStyle}
                    scrollEnabled={!this.state.showingModal}
                    ref={this.setScrollView}>
                    <Image style = {styles.image} source = {images['Household']} />
                    <View style={styles.titleContainer}>
                        <Text style={[styles.pageTitle, this.props.titleStyle]}
                              allowFontScaling={false}
                              >
                                {this.props.title}
                        </Text>
                    </View>

                    <View>
                        {this.props.children}
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        shadowOpacity: .2,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    scrollViewStyle: {
        marginTop: 18,
        backgroundColor: '#FCCCC0',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    image: {
        marginTop: 8,
        height: 180,
        width: 295,
    },
    containerStyle: {
        flexGrow: 1,
        marginTop: 0,
        padding: 0,
        alignItems: 'center',
        alignContent: 'center',
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        height: 60,
        width: 280,
    },
    pageTitle: {
        color: 'white',
        fontSize: 42,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default SurveyCard;