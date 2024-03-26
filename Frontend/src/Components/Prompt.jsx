import {React, useState} from 'react'


function Prompt() {
    const [isAlone, setIsAlone] = useState(false)

    function travelAlone(num) {
        if(num < 2) {
            setIsAlone(true)
        }
    }

return(

<div className='prompt-container'>

    <div className='travel-details-section'>
        <h1> Travel Details: </h1>
        <div>
        <p> Where are you traveling?</p>
        <input> Country, City</input>
        </div>
        <div>
            <p> What dates are you traveling?</p>
            <input> "mm/dd/yyyy - mm/dd/yyyy" </input>
        </div>
        <div>
            <p> At what time do you arrive and at what time do you leave? </p>
            <input> arrival: "hh:mm am/pm" departing: "hh:mm am/pm" </input>
        </div>
        <div>
            <p> How many people are in your group?</p>
            <input> Enter # of people</input>
        </div>
        {isAlone ? null
        :
        <div>
        <p> Who are you traveling with? </p>
        <input> Family, Friends, or both</input>
        </div>
        }
    </div>

    <div className='interests-section'>
        <h1> Things To Do: </h1>
        <div>
            <h2>Food:</h2>
            <p>What type(s) of cuisine are you interested in?</p>
            <select> Breakfast, Lunch and/or Dinner </select>
            <input> Enter types of cuisine (ex: Mediterannian, Seafood, Mexican) </input>
            <select> Select price range: $, $$, $$$ </select>
        </div>
        <div>
            <h2> Entertainment:</h2>
            <p> What types of entertainment? </p>
            <input> Be specific (ex: see a play, tour a musuem, take a boat tour) </input>
        </div>
        <div>
            <h2> Nightlife: </h2>
            <p> What type of nightlife? </p>
            <input> (bars, clubs, shows) </input>
        </div>
        <div>
            <h2> Culture: </h2>
            <p> What types of local culture are you looking to experience?</p>
            <input> (sightseeing, historical monuments, popular areas) </input>
        </div>
    </div>


</div>

)

}

export default Prompt;