import React, {useState} from 'react';

const UserForm = (props) => {
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [pw, setPw] = useState('');
    const [pwError, setPwError] = useState('');
    const [confirmPw, setConfirmPw] = useState('');
    const [confirmPwError, setConfirmPwError] = useState('');

    const handleUsername = (e) => {
        setUsername(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setUsernameError("Username must be 2 or more characters.");
        } else {
            setUsernameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5 && e.target.value.length > 0) {
            setEmailError("Email must be 5 or more characters.");
        } else {
            setEmailError("");
        }
    }
    const handlePw = (e) => {
        setPw(e.target.value);
        if (e.target.value.length < 8 && e.target.value.length > 0) {
            setPwError("Password must be 8 or more characters.");
        } else {
            setPwError("");
        }
    }
    const handleConfirmPw = (e) => {
        setConfirmPw(e.target.value);
        if (e.target.value != pw && e.target.value.length > 1) {
            setConfirmPwError("Passwords must match!");
        } else {
            setConfirmPwError("");
        }
    }

    return (
        <div>    
            <form>
                <div>
                    <label>Username: </label> 
                    <input type="text" onChange={ handleUsername } />
                    {
                    usernameError ?
                    <p style={{color:'red'}}>{ usernameError }</p> :
                    ''
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ handleEmail } />
                    {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ handlePw } />
                    {
                    pwError ?
                    <p style={{color:'red'}}>{ pwError }</p> :
                    ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ handleConfirmPw } />
                    {
                    confirmPwError ?
                    <p style={{color:'red'}}>{ confirmPwError }</p> :
                    ''
                    }
                </div>
            </form>
        
        </div>
    );
}



export default UserForm;