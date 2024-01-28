import React, { Component } from 'react';
import {useQuery} from 'react-query'

export const List = () =>{
    const test = {
        "test": "this is just a test",
        "note": "keep up the good work"
    }
    const fetchUrl = "http://localhost:5000/notes"

    
    return(
        <div>
            <ul>
            {
                Object.keys(test).map((key, index) => (
                    <li key={index}> this is my key "{key}" and this is my value "{test[key]}"</li> 
                ))
            }
           </ul>
        </div>
    )
}