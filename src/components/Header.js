import React from "react"
import {Link} from "react-router-dom"
import {GlobalCtx} from "../App"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import MovieSearch from "../pages/MovieSearch"
// import {FiVideo} from 'react-icons/fi'




const Header = (props) => {

    const {Movie} = props

    const {gState, setGState} = React.useContext(GlobalCtx);

    const logout = (<Nav.Link onClick = {()=> {
        window.localStorage.removeItem("token")
        setGState({...gState, token: null})
    }}   >Logout</Nav.Link>)

    return ( 
    // <nav>
    //     <Link to="/register"><h2>Signup/Login</h2></Link>
    //     <Link to="/login"><h2> Login</h2></Link>
    //     {gState.token ? logout : null}

    // </nav>

    // )}

    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/lp">Home</Navbar.Brand>
        <Nav className="mr-auto">
<<<<<<< HEAD
            <Nav.Link href="/movcomp">My Reviews</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
=======
            <Nav.Link href="/movcomp">Movie Reviews</Nav.Link>
            <Nav.Link href="/signup" className="signinlogin">Signup</Nav.Link>
            <Nav.Link href="/login" className="signinlogin">Login</Nav.Link>
            {/* <Nav.Link href="/logout">Logout</Nav.Link> */}
>>>>>>> 1d691dca1921b8d1302d70adbf30bc7eea5afe93
            {gState.token ? logout : null}
        </Nav>
  </Navbar>

    
    )}

export default Header 
