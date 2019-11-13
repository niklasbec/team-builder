// Build inputs for `name`, `email` and `role` (backend engineer, frontend engineer, designer, etc. Use your imagination)
// - Import the useState hook and utilize what we learned about two-way data binding
// - Render your `Form` component in `App` and pass a setter method (the `set_____` method from your team members state in `App`) down to it so you can add team members to your state.


import React, { useState } from 'react';

const form = (props) => {
    
const nameArray = []

    const handleSubmit = e => {
        e.preventDefault();
        e.persist();
        props.newTeamMember({
            ...props.teamMember,
            name: e.target.name.value
        })
        let teamMemberDiv = document.querySelector('#team-members')
        let newMemberP = document.createElement('p')
        newMemberP.textContent = props.teamMember.name
        teamMemberDiv.append(newMemberP)
    }

    return (
        <div>
            <form className='forms' onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' placeholder='Enter name here'>
                </input>

                <label htmlFor='email'>Email</label>
                <input type='text' id='email' name='email' placeholder='Enter email here'>
                </input>

                <select id='select' name='select'>
                    <option>Backend Engineer</option>
                    <option>Frontend Engineer</option>
                    <option>Designer</option>
                </select>

                <input type='submit'></input>
            </form>
            <div id='team-members'>
                <h1 className='heading'>Team Members</h1>
                {/* <p>{props.teamMember.name.value} </p> */}
            </div>
        </div>
    )
}

export default form