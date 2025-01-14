import { Link } from 'react-router-dom';
import { auth } from "../config/firebase";
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';


export const Navbar = () => {

    const [user]= useAuthState(auth);



    const singUserOut = async () => {
        await signOut(auth)
    };

    return (
        <div className='navbar'>
            <div className='links'>
                <Link to="/"> Home </Link>
                {!user? (<Link to="/login"> Login </Link>) : (<Link to="/createpost"> Create Post </Link>)}
            </div>

            <div className='user'>
                {user && (
                <>
                <p> {user?.displayName}</p>
                <img src={user?.photoURL || ""} width="20" height="20" />
                <button onClick={singUserOut} >Log Out</button>
                </>
                )};
            </div>
        </div>
    );
};