import {postUser} from "../../services/user.service";
import {useState} from "react";
import './UserCreateForm.css'

export default function UserCreateForm() {

    let [user, setUser] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        user_type: '',
        password: '',
    })

    let [choseUser, setChoseUser] = useState({})
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
        if (passwordError==='Password is match')
            postUser(user).then(value => setResponse({...value}))
        else{setPasswordError('Your password does not confirm, please try again')}
    }

    const editUser = (ec) => {
        setChoseUser({...ec});
        setUser({...ec})
    }

    function putUser(e) {
        putUser(choseUser, user);

    }


    function comparePasswords(e){
        setConfirmPassword(e.target.value)
        if (user.password !== e.target.value) {
            setPasswordError('Confirm password should be match with password')
        } else {
            setPasswordError('Password is match')
        }
    }

    return (
        <div>
           <div>{passwordError}</div>
            <form className='form'>
                <br/>
                <span>username</span>
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
                    <option value="Admin">Admin</option>
                    <option value="Driver">Driver</option>
                </select>
                <span>password</span>
                <input type="text" name={'password'} value={user.password} onChange={onChangeFunk}/>
                <span>confirm password</span>
                <input type="text" name={'confirmPassword'} value={confirmPassword} onInput={comparePasswords}/>
                <input type="submit" value={'save'} onClick={saveUser}/>
                <input type="submit" value={'change'} onClick={putUser}/>
                <p>{JSON.stringify(response)}</p>
            </form>

        </div>
    );
}