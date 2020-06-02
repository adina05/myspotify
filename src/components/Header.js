import React, {useState, useEffect} from "react";
// import { Navbar, Nav, Button, Form, FormControl,Container } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { checkAndReturnToken } from "../utils"

 const Header=()=>{

     const [user, setUser] = useState("");

     useEffect(
         () => {
             setUserName()
         });

    const setUserName=async()=>{
        if(checkAndReturnToken() !==null &&checkAndReturnToken() !==undefined) {
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
                return <button><Nav.Link href="/login">Login</Nav.Link></button>
            }
        }

        return (
                <Navbar expand="lg" bg="light">
                    <div>
                    <SearchBar/>
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="pages-links">
                        <Nav.Item>
                            <Nav.Link href="/categories">Categories</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/artists">Artists</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            {expiredSession()}
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );


}

export default Header;
