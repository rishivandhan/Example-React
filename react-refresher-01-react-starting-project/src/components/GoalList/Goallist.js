//holding my goallist component.

import React from "react";
import './GoalList.css'


//this is a component that uses javaScript function to contain HTML Like code called JSX. 
const Goallist = props =>{
    return <ul className = "goal-list">{
        props.goals.map ((goal) => { //.map is a built in function that lets us map javascript objects to JSX. We are mapping each goal.
            return <li key = {goal.id}>{goal.text}</li>
        })
        
    } </ul>;
 

}; 

//have to export Goallist to be able to access it globally.
export default Goallist;