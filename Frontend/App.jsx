import React, {useState, useEffect} from 'react'
import {Outlet, useLocation} from 'react-router-dom'


function App() {




return (
<div className="app-container">

    <header className='header'>
    


    </header>
    <body>

        <Outlet context = {{}}/>

    </body>



</div>
);

};


export default App;