import {React, useState} from 'react'


function Prompt() {
    const [where, setWhere] = useState('')
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [groupSize, setGroupSize] = useState('')
    const [arrival, setArrival] = useState('')
    const [departure, setDeparture] = useState('')
    const [arriveTime, setArriveTime] = useState('')
    const [departTime, setDepartTime] = useState('')
    const [cuisine, setCuisine] = useState('')
    const [mealPrice, setMealPrice] = useState('')
    const [entertainment, setEntertainment] = useState('')
    const [nightlife, setNightlife] = useState('')
    const [culture, setCulture] = useState('')

    // if isAlone = true, change value "with # of my close friends/family --> by myself" 
    const [isAlone, setIsAlone] = useState(false)
    // if bookedFlight = true, show the arrival/departure date and time
    const [bookedFlight, setBookedFlight] = useState(false)






return(

<div className='prompt-container'>

    <form onSubmit={handleInputSubmit}>
        <div className='travel-details-section'>
            <h1> Travel Details: </h1>
            <div>
                <label> Where are you traveling?</label>
                <p>Country, City</p>
                <input
                    type='text'
                    className='form-group'
                    id='where'
                    placeholder='City, Country'
                    value={where}
                    onChange={(e) => setWhere(e.target.value)}
                />
            </div>
            <div>
                <label> What dates are you traveling?</label>
                <p> Please use "mm/dd/yyyy" format </p>
                <input
                    type='text'
                    className='form-group'
                    id='from-date'
                    placeholder='mm/dd/yyy'
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                />
                <input
                    type='text'
                    className='form-group'
                    id='to-date'
                    placeholder='mm/dd/yyy'
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                />
            </div>
            <div>
                <label> At what time will you arrive and at what time will you depart? </label>
                <p> Please use "hh:mm" format </p>
                <input 
                    type='text'
                    className='form-group'
                    id='arrive'
                    placeholder='Arriving'
                    value={arrival}
                    onChange={(e) => setArrival(e.target.value)}
                />
                <select
                    name="time"
                    value={arriveTime}
                    onChange={(e) => setArriveTime(e.target.value)}
                    className="form-group"
                > 
                    <option value="am"> AM </option>
                    <option value="pm"> PM </option>
                </select>

                <input 
                    type='text'
                    className='form-group'
                    id='depart'
                    placeholder='Departing'
                    value={departure}
                    onChange={(e)=> setDeparture(e.target.value)}
                />
                <select
                    name="time"
                    value={departTime}
                    onChange={(e) => setDepartTime(e.target.value)}
                    className="form-group"
                > 
                    <option value="am"> AM </option>
                    <option value="pm"> PM </option>
                </select>
            </div>
            <div>
                <label> How many people are in your group?</label>
                <p> Enter # of travelers or enter 0 if traveling alone. </p>
                <input 
                    type='text'
                    className='form-group'
                    id='group-size'
                    placeholder='#'
                    value={groupSize}
                    onChange={(e) => setGroupSize(e.target.value)}
                />
            </div>

        </div>

        <div className='interests-section'>
            <h1> Things To Do: </h1>
            <div>
                <h2>Food:</h2>
                <p>What type(s) of cuisine are you interested in?</p>
                    <input type="checkbox" id="meal1" name="breakfast" value="breakfast"/>
                    <label for="meal1"> Breakfast</label>
                    <input type="checkbox" id="meal2" name="lunch" value="lunch"/>
                    <label for="meal2"> Lunch </label>
                    <input type="checkbox" id="meal3" name="dinner" value="dinner"/>
                    <label for="meal3"> Dinner</label>
                <p> Enter types of cuisine (ex: Mediterannian, Seafood, Mexican) </p>
                    <input 
                        type='text'
                        className='form-group'
                        id='cuisines'
                        placeholder='Ex: Pasta, Seafood, Mexican'
                        value={cuisine}
                        onChange={(e) => setCuisine(e.target.value)}
                    />
                <select> Select price range: $, $$, $$$ </select>
                <select
                    name="meal-price"
                    value={mealPrice}
                    onChange={(e) => setMealPrice(e.target.value)}
                    className="form-group"
                > 
                    <option value="low"> $ </option>
                    <option value="moderately"> $$ </option>
                    <option value="high-end"> $$$ </option>
                </select>
            </div>
            <div>
                <h2> Entertainment:</h2>
                <label> What type(s) of entertainment are you interested in? </label>
                <p> Please describe the event </p>
                <input
                    type='text'
                    className='form-group'
                    id='entertainment'
                    placeholder='Ex: see a play, tour a musuem, skydive'
                    value={entertainment}
                    onChange={(e) => setEntertainment(e.target.value)}
                />
            </div>
            <div>
                <h2> Nightlife: </h2>
                <label> What type of nightlife? </label>
                <input
                    type='text'
                    className='form-group'
                    id='nightlife'
                    placeholder='Ex: bars, clubs, concert'
                    value={nightlife}
                    onChange={(e) => setNightlife(e.target.value)}
                />
            </div>
            <div>
                <h2> Culture: </h2>
                <label> What types of local culture are you looking to experience?</label>
                <input> (sightseeing, historical monuments, popular areas) </input>
                <input
                    type='text'
                    className='form-group'
                    id='culture'
                    placeholder='Ex: sightseeing, places with rich history, famous parks'
                    value={culture}
                    onChange={(e) => setCulture(e.target.value)}
                />
            </div>
        </div>
    <button type='submit'> Submit </button>
    </form>

</div>

)

}

export default Prompt;