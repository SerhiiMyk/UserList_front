import './App.css';
import Users from "./components/users/Users";
import UserCreateForm from "./components/forms/UserCreateForm";
import UserUpdateForm from "./components/forms/UserUpdateForm"
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>

            <div className='mainWrap'>
                    <div>
                        <Route path={'/'} component={Users}/>
                    </div>
                <Switch>
                    <div>
                        <Route path={'/createUser'} component={UserCreateForm}/>
                        <Route path={'/updateUser/:id'} component={UserUpdateForm}/>
                    </div>
                </Switch>

            </div>
        </Router>

    );
}

export default App;
