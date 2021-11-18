import {postUser} from "../../services/user.service";
import {useState} from "react";
import './UserCreateForm.css'
import {Link} from "react-router-dom";

export default function UserCreateForm() {

    let [user, setUser] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        user_type: '',
        password: '',
    })



    let [response, setResponse] = useState({})
    let [confirmPassword, setConfirmPassword] = useState(undefined)
    let [passwordError, setPasswordError] = useState(undefined)

    function onChangeFunk(e) {
        setUser({...user, [e.target.name]: e.target.value})

    }

    function changeOption(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }

    function saveUser(e) {
        e.preventDefault()
        if (passwordError === 'Password is match')
            postUser(user).then(value => setResponse({...value}))
        else {
            setPasswordError('Your password does not confirm, please try again')
        }
    }


    function comparePasswords(e) {
        setConfirmPassword(e.target.value)
        if (user.password !== e.target.value) {
            setPasswordError('Confirm password should be match with password')
        } else {
            setPasswordError('Password is match')
        }
    }

    return (
        <div>

            <form className='form'>
                <Link to={'/'}>x</Link>
                <br/>
                <span>username</span>
                <input type="text" name={'username'} value={user.username}
                       onInput={onChangeFunk}/>
                <span>first_name</span>
                <input type="text" name={'first_name'} value={user.first_name} onInput={onChangeFunk}/>
                <span>last_name</span>
                <input type="text" name={'last_name'} value={user.last_name} onInput={onChangeFunk}/>
                <span>email</span>
                <input type="email" name={'email'} value={user.email}  placeholder={'@'} onInput={onChangeFunk}/>
                <span>user_type</span>
                <select name="user_type" id="user_type" onChange={changeOption}>
                    <option value="Admin">Admin</option>
                    <option value="Driver">Driver</option>
                </select>
                <span>password</span>
                <input type="password" name={'password'} value={user.password} onChange={onChangeFunk}/>
                <span>confirm password</span>
                <input type="password" name={'confirmPassword'} value={confirmPassword} onInput={comparePasswords}/>
                <span>{passwordError}</span>
                <br/>
                <input type="submit" value={'save'} onClick={saveUser}/>
                <p><strong>validation status:</strong>{JSON.stringify(response)}</p>
            </form>

        </div>
    );
}