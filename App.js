import React, {useState} from 'react';
import { 
  StyleSheet, 
  View,  
  Button,  
  FlatList 
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';




export default function App() {  
  const [courseGoals, setCourseGoals] = useState([])
  const [ isAddMode, setIsAddMode ] = useState( false);


  const addGoalHandler = (enteredGoal) => {
    // console.log( enteredGoal )
    if(  enteredGoal.length === 0 ) {
      return;
    }
    setCourseGoals( currentGoals => [ 
      ...currentGoals, 
      {
        id: Math.random().toString(),
        value: enteredGoal
      }
    ] );
    setIsAddMode(false);
  }
  const removeGoalHandler = ( goalId ) => {
    setCourseGoals( currentGoals => {
      return currentGoals.filter(
        item => item.id !== goalId
      )
    });
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }


  return (
    <View
      style={styles.screen} 
    >
      <Button
        title='Add New Goal'
        onPress={ () => setIsAddMode(true) }
      />
      <GoalInput 
        visible={ isAddMode }
        addGoalHandler={addGoalHandler}
        cancelGoalAdditionHandler={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor= {( item, index) => item.id }
        data={courseGoals}
        renderItem={ (itemData) => 
          <GoalItem 
            title={ itemData.item.value }
            id={ itemData.item.id }
            removeGoalHandler={removeGoalHandler }
          />
        }
      />     
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50
  },


});


