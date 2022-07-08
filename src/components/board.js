import React from 'react';
import './board.css';
import { Info } from './Info';
import List from './list'

export default function board() {
  return (
      <main id='site-main'>
          <h1 className="text-dark title">Birthday Remainder</h1>

          <div className="board">
                {/* //Info is array of objects  passing to the Today function and return filtered data(array of objects) is passed as prop to List component*/}
                <List info={Today(Info)}></List> 
                <h2 className='upcoming text-dark'>Upcoming</h2>
                <List info={Upcoming(Info, 3)} upcoming={true}></List>
          </div>
      </main>
  );
}

function Today(person){
    let currentDay = new Date().getDate(); // get current day
    let currentMonth = new Date().getMonth(); // get current month
    
    //iterate over array of objects(person is array)
    let filter = person.filter(data => {
        let day = new Date(data.birthday).getDate();   //extract birth date
        let month = new Date(data.birthday).getMonth(); //extract birth month
        
        // if current date and month is equla to birth date nad month return that object
        return currentDay == day && currentMonth == month;
    })

    //return the array of objects which have birthday today
    return filter;
}


// upcoming birthdays
function Upcoming(person, toMonth){
    let currentMonth = new Date().getMonth(); //get the current month
    let currentDay = new Date().getDate();  //get the current day

    let filter =person.filter(data => {
        let month = new Date(data.birthday).getMonth(); //get birth month
        let day = new Date(data.birthday).getDate();  //get birth day

        if (currentDay == day && currentMonth==month) return; //remove duplicate (todays birthday wont show in upcoming)
        //return those objects whose birthdate is next after tomonths 
        return month >= currentMonth && month <= currentMonth + toMonth;
    })
    //return array of objects 
    return filter;

}
