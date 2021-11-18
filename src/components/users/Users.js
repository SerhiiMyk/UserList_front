import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";
import User from '../user/User'
import {Link} from "react-router-dom";

export default function Users() {
    let [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [users])

    return (
        <div>
            <Link to={'/createUser'}>Create</Link>
            {
                users.map(value => <User key={value.id} user={value}/>)
            }

        </div>
    );
}