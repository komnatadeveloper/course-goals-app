import React, {useState} from 'react';
import { View, Button, TextInput, Modal, StyleSheet } from 'react-native'

const GoalInput = ({

  addGoalHandler,
  visible,
  cancelGoalAdditionHandler
}) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoal = () => {
    addGoalHandler(enteredGoal)
    setEnteredGoal('')
  }

  return (
    <Modal
      visible={visible}
      animationType='slide'
    >
      <View
        style={styles.inputContainer}
      >
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View
          style={styles.buttonContainer}
        >
          <View style={styles.button}>

            <Button
              title='ADD'
              onPress={ addGoal }
              
            />
          </View>
          <View style={styles.button}>
            <Button
              title='CANCEL'
              color='red'
              onPress={ cancelGoalAdditionHandler }
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom:10
  },
  buttonContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent:'space-around'
  },
  button: {
    width: '40%'
  }
})

export default GoalInput