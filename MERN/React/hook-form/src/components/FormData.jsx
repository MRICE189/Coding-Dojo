import React, {useState} from 'react';

const UserForm = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [confirmPw, setConfirmPw] = useState('');

    return (
        <div>    
            <form>
                <div>
                    <label>Username: </label> 
                    <input type="text" onChange={ (e) => setUsername(e.target.value)} value={username} />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPw(e.target.value) }value={pw} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirmPw(e.target.value) }value={confirmPw} />
                </div>
            </form>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Password: {pw}</p>
            <p>Confirm Pw: {confirmPw}</p>
        </div>
    );
}



export default UserForm;