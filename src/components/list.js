import React from 'react';

export default function list({info, upcoming}) {  //destructuring the object
    // console.log(info);
  return (
      <ul>
          {display(info, upcoming)}
      </ul>
  );
}

function display(data, flag){
    const bgColor = flag ? { backgroundColor : "#ffe66d"} : {};
    if (!data) return;
    else return (
        <>
            {
                //iterate over array of objects
                data.map( (person, index) => {
                    return (
                        <li key={index}>
                            <div className="flex" style={bgColor}>
                                <img src={person.img} alt="img" />
                                <div className="title">
                                    <h3 className='name'>{person.name}</h3>
                                    <h5 className="age">{Old(person.birthday)} years</h5>
                                    <h5 className="age">{person.birthday}</h5>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </>
    )
}

// how old the person is
function Old(personAge){
    let year = new Date(personAge).getFullYear();  //get birth year
    let currentYear = new Date().getFullYear();  // get current year
    
    let age = currentYear - year;
   return age;
}