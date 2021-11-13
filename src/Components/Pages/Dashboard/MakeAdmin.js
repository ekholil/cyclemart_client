import React, { useState } from 'react';
import swal from 'sweetalert';
const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const handleOnblur = e => {
        setEmail(e.target.value)
    }
    const handleSubmit = e => {
        console.log(email)
        if(email === ''){
            alert("Entar a valid Email")
            return
        }
        const user = {email}
        fetch('https://calm-gorge-61039.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                swal("Success", `${email} is now admin`, "success");
                setEmail('')
              }
        })
        e.preventDefault()
    }
    return (
        <div className="my-4">
            <form onSubmit={handleSubmit}>
                <input className="form-control w-50" onBlur={handleOnblur} type="email" placeholder="Enter email address of a user" required/>
                <button className="btn btn-success text-white mt-2" type="submit">Make Admin</button>
            </form>
        </div>
    );
};

export default MakeAdmin;