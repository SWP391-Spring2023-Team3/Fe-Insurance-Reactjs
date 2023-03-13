import React from 'react'
import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../store/actions/userActions";
import ChangPassword from '../ChangePassword/ChangPassword';

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () =>{
        navigate("/login")
        dispatch(Logout)           
    }
    return (
        <div style={{ height:"50px", top: 0, width: '100%', backgroundColor: '#222222', display: 'flex', justifyContent: 'space-between' ,alignItems:"center"}}>
            <h2 style={{color:"white"}}>Website Insurance</h2>
            <div>
                {/* button modale */}
                <button type="button" className="btn btn-outline-info" style={{ margin: '3px' }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Change password
                </button>
                <ChangPassword/>
                <div className="btn btn-outline-info" style={{ margin: '3px' }}
                    onClick={handleLogout}
                >Logout</div>
            </div>
        </div>
    )
}

export default Header