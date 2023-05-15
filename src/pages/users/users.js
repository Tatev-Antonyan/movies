import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

function Users({}) {
    //const {id} = useParams();
    const navigate = useNavigate();

    const handlePush = () =>{
        navigate('/userDetails/:id')
    }
    return(
        <div className="users">
            <h1>Users</h1> 
            <Link to={'/userDetails/:id'}>
            <button onClick={() => handlePush(1)}>User 1</button>
            <button onClick={() => handlePush(2)}>User 2</button>
            <button onClick={() => handlePush(3)}>User 3</button>
            <button onClick={() => handlePush(4)}>User 4</button>
            <button onClick={() => handlePush(5)}>User 5</button>
            <button onClick={() => handlePush(6)}>User 6</button>
            <button onClick={() => handlePush(7)}>User 7</button>
            <button onClick={() => handlePush(8)}>User 8</button>
            </Link>
        </div>
    )
}

export default Users;