import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/authActions';
import { useHistory } from 'react-router'


const Logout = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick =() => {
        dispatch(logout())

        try{ history.push(history.location.state.from.pathname) }
        catch { history.push('/') }
    }

    return (
        <div>
            <h1>Logout</h1>
            <button onClick= {handleClick}>Logout</button>
        </div>
    )
}

export default Logout
