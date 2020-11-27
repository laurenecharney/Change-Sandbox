// Author: Drew Deister
// Email: andrew.z.deister@vanderbilt.edu
// Date: 12/26/19

// NOTE on Asynchronous Functions/Code: Note that componentDidMount() is called automatically.
// So theoretically, state will be re-rendered before the components the values will be fetched and the state will be
// re-rended automatically.

// NOTE on JSON: The values are saved with the .stringify() function, so you have to .parse() before you can
// perform calculations on them. However, this returns strings. To get ints, use parseInt()

import React, { Component, useState } from 'react';
import {StyleSheet, View, ScrollView } from "react-native";
import { Text } from 'react-native-elements';


import * as SecureStore from 'expo-secure-store';

class Results extends React.Component {
  constructor() {
    super();
    this.state = {
        zipCode: 0,
      numPeople: 0,
      squareFootage: 0,
    }
  }

  componentDidMount() { // this is automatically called
    this.fetchData().done()
    this.flashScroll();
  }

  async fetchData() { // should probably add some error handling here

    // housing
    let zipCode = JSON.parse(await SecureStore.getItemAsync("zipCode"))
    let numPeople = parseInt(JSON.parse(await SecureStore.getItemAsync("numPeople")))
    let squareFootage = JSON.parse(await SecureStore.getItemAsync("squareFootage"))


    // this.setState not only changes the state but also ALWAYS
    // rerenders the components in view
    this.setState({zipCode: zipCode, numPeople: numPeople, squareFootage: squareFootage});
  }



  setScrollView = scrollView => {
    // NOTE: scrollView will be null when the component is unmounted
      this._scrollView = scrollView;
  };


  flashScroll() {
    setTimeout(() => {
        this._scrollView.flashScrollIndicators();
    }, 200)
  }


  render() {
    return(
      <View style={styles.safeView}>
          <ScrollView ref={this.setScrollView}>
            <View>
                <Text>
                  {this.state.zipCode} 
                </Text>
            </View>

          </ScrollView>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  safeView: {
      flex: 1,
  },
});




export default Results;
