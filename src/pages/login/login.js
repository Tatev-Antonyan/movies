import {useState} from 'react';
import { useNavigate } from 'react-router';


function Login(){

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleClick = () => {
        if(name === 'admin' && password === 'admin'){
            navigate('/usersList');
        }else{
            navigate('/users')
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    return(
        <div className="login_container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <input placeholder="Please enter your username" type='text' onChange={handleNameChange}/>
            <input placeholder="Please enter your password" type='password' onChange={handlePasswordChange}/>
            <button onClick={handleClick}>Login</button>
            </form>
        </div>
    )
}

export default Login;