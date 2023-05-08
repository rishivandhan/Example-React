import React, {useState} from 'react';

import GoalList from './components/GoalList/Goallist'; //importing Goalslist from the components folder
import './App.css';
import NewGoal from './components/NewGoal/NewGoal';

//regular javaScript function but return JSX logic.
//it cant return objects. 
//useState cna return two elements. the first element being the initial state. the second element being the updated version.
const App = () => {
  const [courseGoals, setCourseGoals]= useState([
    {id: 'cg1', text: 'Finish the course'},
    {id: 'cg2', text: 'All about the course main topic'},
    {id: 'cg3', text: 'Help other students in teh course QandA questions'},
  ]);

  //function that pushed the new goal onto the js array
  const addnewGoalhandler = (newGoal) => {
    //setCourseGoals(courseGoals.concat(newGoal)); This is fine but using a function will not delay the previous processes.
    //very efficient if the app uses multiple states at the same time.
    //only needed if the state updates depends on the previous state data
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    } );
  };

  return (
  <div className = "course-goals">

    <h2>Course Goals</h2>
    <NewGoal onAddGoal = {addnewGoalhandler}/>
    <GoalList goals={courseGoals} />

    </div>
  );

}
//write every component as functions
export default App;
