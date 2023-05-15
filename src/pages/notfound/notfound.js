import {Link} from 'react-router-dom';


function Notfound (){
    return(
        <div className='notfoundPage'>
            <h1>Oops!</h1>
            <h2>Page Not Found</h2>
            <h3>Go to &nbsp;
                <Link to='/'>
                    HomePage
                </Link></h3>
        </div>
    )
}

export default Notfound;