import { useNavigate } from "react-router";
import Counter from '../counter'

function Landing () {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/login')
    }




    return(

        <div>
            <button className="landing_btn" onClick={handleNavigate}>Sign In</button>
            <h1 className="landing_title">Welcome</h1>
            <Counter/>
        </div>
    )
}

export default Landing;