import {useForm} from 'react-hook-form';
import {useState} from 'react';
import Logo from '../../assets/images/logo.jpg';
import { useNavigate } from "react-router";

function Login() {
    const {register, formState: { errors }} = useForm()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(email === 'admin@gmail.com' && password === 'admin'){
            navigate('/createMovies')
        } else {
            navigate('/movies')
        }
    }
    return(
        <div className={"login_page"}>
            <img src={Logo} alt={'Image Not Found'} className={'logo'}/>
            <h1 className={"name"}>Movieland</h1>
            <form onSubmit={handleSubmit}>
                <input type={'email'}
                       {...register('email', {required: true })}
                       aria-invalid={errors.email ? "true" : "false"}
                        onChange={handleEmailChange}/>
                {errors.email?.type === 'required' && <p role="alert">Email is required</p>}
                <input type={'password'}
                       {...register("password", { required: "Password is required" })}
                       aria-invalid={errors.password ? "true" : "false"}
                        onChange={handlePasswordChange}/>
                {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
                <input type={'submit'} value={'Login'}/>

            </form>
        </div>
    )
}

export default Login;