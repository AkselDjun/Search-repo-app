import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { GithubContext } from './../context/github/githubContext';

export const Search = () => {
    const [value, setValue] = useState("")
    const alert = useContext(AlertContext)
    const github = useContext(GithubContext)

    const onSubmit = event => {
        if (event.key !== "Enter") {
            return
        }

        github.clearUsers()

        if (value.trim()) {
            alert.hide()
            github.search(value.trim())
        } else {
            alert.show("Enter the user's nickname")
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
        </div>
    )
}