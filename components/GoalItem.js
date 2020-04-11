import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback,StyleSheet } from 'react-native'

const GoalItem = props => {

  return (
    <TouchableOpacity
      onPress={ props.removeGoalHandler.bind( this, props.id ) }
    >
      <View
        style={styles.listItem}
      >
        <Text> {props.title} </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})

export default GoalItem