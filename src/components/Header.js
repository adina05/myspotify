import React, {useState, useEffect} from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { checkAndReturnToken } from "../utils"

 const Header=(props)=>{

     const [user, setUser] = useState("");

     useEffect(
         () => {
             setUserName()
         }, []);

    const setUserName=async()=>{

        const token = checkAndReturnToken(props.history);
        if(token !==null && token !==undefined) {
            const result= await fetch("https://api.spotify.com/v1/me",
                {
                   method:"GET",
                    headers:{
                        Authorization: `Bearer ${checkAndReturnToken()}`
                    }
                }
                )
            const data = await result.json();
            setUser(data.display_name);
        }
     };
        const expiredSession=()=>{
            if(user!==undefined){
                return `Logged in as ${user}`
            }else{
                return <button className="login__btn"><Nav.Link className="loggin__link" href="/login">Login</Nav.Link></button>
            }
        }

        return (
                <Navbar expand="lg" bg="light">
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="pages-links">
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/categories">Categories</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/artists">Artists</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="d-flex align-items-center">
                            {expiredSession()}
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );


}

export default withRouter(Header);
