import React from 'react';

const Users = () => {

    const handleAddUser = e =>{
        e.preventDefault();

        const name = e.target.name.value;
           const email = e.target.email.value;
           const newUser = {name, email};
           console.log(newUser);


        //  create db
        fetch('http://localhost:3000/users',{
         method:'POST',
         headers:{
            'content-type':'application/json'
         },
         body:JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log("after create inthe db",data)
        })
    }
    return (
        <div>
            {/* addd to user */}
            <div>
              <form onSubmit={handleAddUser}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="submit" value="add user" />
              </form>
            </div>
        </div>
    );
};

export default Users;