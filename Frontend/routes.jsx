import React from "react";
import App from './App.jsx'

const routes = [
    {
        path : '/',
        element : <App />, 
        errorElement : <h1>Something went wrong!</h1>,
        children : [
            {
                path: '/',
                Element: <Home />,
                errorElement : <h1>Something went wrong!</h1>
            },
            {
                path: '/',
                Element: <Home />,
                errorElement : <h1>Something went wrong!</h1>
            },
        ]
    }
]