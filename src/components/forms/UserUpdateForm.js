import {useEffect, useState} from "react";
import './UserCreateForm.css'
import {Link} from "react-router-dom";
import {delUser, putUser} from "../../services/user.service";

export default function UserCreateForm({location: {state}}) {

    useEffect(() => {
        setUser(state)
    }, [state])

    let [user, setUser] = useState(state)


    let [response, setResponse] = useState({})
    let [confirmPassword, setConfirmPassword] = useState(undefined)
    let [passwordError, setPasswordError] = useState(undefined)


    function onChangeFunk(e) {
        setUser({...user, [e.target.name]: e.target.value})

    }

    function changeOption(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }

    function editUser(e) {
        e.preventDefault()
        if (passwordError === 'Password is match')
            putUser(user).then(value => setResponse({...value}))
        else {
            setPasswordError('Your password does not confirm, please try again')
        }
    }

    function deleteUser() {
        delUser(user.id)
    }

    function comparePasswords(e) {
        setConfirmPassword(e.target.value)
        if (user.password !== e.target.value) {
            setPasswordError('Confirm password should be match with password')
        } else {
            setPasswordError('Password is match')
        }
    }

    let type2 = 'Driver'
    if (user){
        if (user.user_type === 'Admin') {
            type2 = 'Driver'
        } else {
            type2 = 'Admin'
        }
    }
    else{
        user={
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            user_type: 'Admin',
            password: '',
        }
    }


    return (
        <div>
            <div>{passwordError}</div>
            <form className='form'>
                <Link to={'/'}>x</Link>
                <br/>
                <span>username dfgsdgdgs</span>
                <input type="text" name={'username'} value={user.username} placeholder={'username'}
                       onInput={onChangeFunk}/>
                <span>first_name</span>
                <input type="text" name={'first_name'} value={user.first_name} onInput={onChangeFunk}/>
                <span>last_name</span>
                <input type="text" name={'last_name'} value={user.last_name} onInput={onChangeFunk}/>
                <span>email</span>
                <input type="email" name={'email'} value={user.email} onInput={onChangeFunk}/>
                <span>user_type</span>
                <select name="user_type" id="user_type" onChange={changeOption}>
                    <option value={user.user_type}>{user.user_type}</option>
                    <option value={type2}>{type2}</option>
                </select>
                <span>password</span>
                <input type="password" name={'password'} value={user.password} onChange={onChangeFunk}/>
                <span>confirm password</span>
                <input type="password" name={'confirmPassword'} value={confirmPassword} onInput={comparePasswords}/>
                <input type="submit" value={'edit'} onClick={editUser}/>
                <input type="submit" value={'delete'} onClick={deleteUser}/>
                <p><strong>validation status</strong>:{JSON.stringify(response)}</p>
            </form>

        </div>
    );
}