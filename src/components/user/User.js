import {Link} from "react-router-dom";

export default function User({user}) {
    return (
        <div>
            <Link to={{pathname: '/updateUser/' + user.id, state: user}}>
                {user.id} - {user.email}
            </Link>
        </div>
    );
}