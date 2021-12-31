import React from 'react'
import PropTypes from 'prop-types';

function Profile({fullName,bio,profession,handeleAlert,name}) {
    return (
        <div>
            {handeleAlert(name)}
            <h1> {fullName} </h1>
            <h1> {bio} </h1>
            <h1> {profession} </h1>
        </div>
    )
}


Profile.defaultProps ={
    fullName:'Majdi',
    bio:'Fullstack',
    profession:'Aeronautical',
}
export default Profile
