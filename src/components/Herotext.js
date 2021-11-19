import React, {useRef, useEffect}from 'react'
import Buttons from './Buttons'
// import gsap from 'gsap'
import arrow from './../images/tri-arrow.png'
import './componentStyle.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {Switch} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './login-button';
// import Signup from './auth/signUp/Signup'

const Herotext = () => {
    // const textOne = useRef()
    // const textTwo = useRef()
    // // const btnClick = useRef()
    // useEffect(() => {
    //     gsap.fromTo(textOne.current, {
    //         opacity: 0,
    //         y: 100 
    //     }, {
    //         opacity: 1,
    //         y: 0,
    //         // duration: 1
    //     })
    // }, [])
    // useEffect(() => {
    //     gsap.fromTo(textTwo.current, {
    //         opacity: 0,
    //         y: 100 
    //     }, {
    //         opacity: 1,
    //         y: 0,
    //         duration: 1
    //     })
    // }, [])
    return (
        <div className="page">
             <section>
                 <div className="hero">
        <div className="hero-text">
            <h1>Compare prices and comfort <br/> between transport companies.</h1>
            <p >This websites helps you to compare prices and honest reviews between transport companies like UBER, BOLT, TAXIFY, RIDA e.t.c <br/> Helping you  get to your location; cheaper, faster and better</p>
           <LoginButton btnText="Get Started" background="none" color="white"/>
            <Buttons BtnText="Watch How It Works &#8594;" background="white" color="black"
            />
        </div>
        <div className="heroImg">
            <img src={arrow} alt="Hero Img" />
        </div>
        </div>
        </section>
        </div>
    )
}

export default Herotext
