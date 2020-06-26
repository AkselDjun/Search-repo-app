import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Search = () => {
    const [value, setValue] = useState("")
    const { show } = useContext(AlertContext)

    const onSubmit = event => {
        if (event.key !== "Enter") {
            return
        }

        if (value.trim()) {
            console.log("Make request with: ", value)
        } else {
            show("Enter the user's nickname")
        }
    }

    return (
        <div className="form-group input-group mb-3" >
            <input
                type="text"
                className="form-control"
                placeholder="Enter the user's nickname..."
                aria-label="Enter the user's nickname..."
                aria-describedby="button-addon2"
                onKeyPress={onSubmit}
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
        </div >
    )
}