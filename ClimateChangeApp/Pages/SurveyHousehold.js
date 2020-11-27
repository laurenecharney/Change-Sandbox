import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import SurveyCard from "../Components/SurveyCard";
import { QuestionCardHousing } from "../Components/QuestionCardHousing";

const Household = {
  title: "Household",
  backgroundColor: "#FCCCC0",
};

export default class HouseholdSurvey extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <SurveyCard
          ref={"survey"}
          title={Household.title}
          navigation={this.props.navigation}
        >
          <QuestionCardHousing
            ref={"questionCard"}
            navigation={this.props.navigation}
            backgroundColor={Household.backgroundColor}
            style={{
              backgroundColor: Household.backgroundColor,
            }}
          />
        </SurveyCard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
});