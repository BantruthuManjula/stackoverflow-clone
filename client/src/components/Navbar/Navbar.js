import React,{useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import {jwtDecode} from 'jwt-decode'
import logo from '../../assets/logo.png';
import search from '../../assets/search.svg';
import Avatar from '../../components/Avatar/Avatar';
import './navbar.css';
import setCurrentUser from "../../actions/currentUser";
  
 

function Navbar()
{
    var user=useSelector((state)=>state.currentUserReducer)
      const dispatch=useDispatch();
      const Navigate=useNavigate()
      const handleLogout=()=>
      {
        dispatch({type:'LOGOUT'})
        Navigate('/')
        dispatch(setCurrentUser(null))
      }

    useEffect(()=>{
        const token=user?.token
        if(token)
        {
            const decodedToken=jwtDecode(token)
            if(decodedToken.exp*1000<new Date().getTime()){
                handleLogout()
            }
            
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))))
      },[dispatch])
     
    return(
        <nav className="main-nav">
            <div className="navbar">
                <Link to="/" className="nav-item nav-logo">
                    <img src={logo} alt="logo"/>
                </Link>
                <Link to="/" className="nav-item nav-btn">Home</Link>
                <Link to="/" className="nav-item nav-btn">products</Link>
                <Link to="/" className="nav-item nav-btn"> For Teams</Link>
                <form>
                    <input type="text" placeholder="search"/>
                    <img src={search} alt=" seach icon" width="18" className="search-icon"/>
                </form>
                
                {
                    user===null?
                    <Link to="/Auth" className="nav-item nav-links">Login</Link>:
                    <>
                    <Avatar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color="white" textDecaration="none"><Link to={`/users/${user?.result?._id}`} style={{color:"white", textDecoration:"none"}}>{user.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                    <button className="nav-item nav-links" onClick={handleLogout}>Log out</button>
                    </>
                }
            </div>


        </nav>
    );
}
export default Navbar;