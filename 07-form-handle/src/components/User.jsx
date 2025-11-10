import React from 'react'

const User = (props) => {
    return (
        <div className='text-white'>
            {props.elem.FullName},{props.elem.Email},{props.elem.Password}
        </div>
    )
}

export default User
