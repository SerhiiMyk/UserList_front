import './App.css';
import Users from "./components/users/Users";
import UserCreateForm from "./components/forms/UserCreateForm";

function App() {
    return (
        <div>
            <UserCreateForm/>
            <Users/>
        </div>
    );
}

export default App;
