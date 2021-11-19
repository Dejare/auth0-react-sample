import React,{useRef, useEffect} from 'react'
import './componentStyle.css'
// import gsap from 'gsap'
const Infocard = ({imgSrc, title, description}) => {
    const img = useRef()
    const tilteAnim = useRef()
    const descriptionAnim = useRef()

    // useEffect(()=> {
    //     gsap.fromTo(img.current, {
    //         scrollTrigger: img.current,
    //         opacity: 0,
    //         y: 100 
    //     }, {
    //         opacity: 1,
    //         y: 0,
    //         duration: 1
    //     })
    // }, [])
    // useEffect(()=> {
    //     gsap.fromTo(tilteAnim.current, {
    //         opacity: 0,
    //         y: 100 
    //     }, {
    //         opacity: 1,
    //         y: 0,
    //         duration: 2
    //     })
    // }, [])
    // useEffect(()=> {
    //     gsap.fromTo(descriptionAnim.current, {
    //         opacity: 0,
    //         y: 100 
    //     }, {
    //         opacity: 1,
    //         y: 0,
    //         duration: 3
    //     })
    // }, [])
    return (
        <div className="mainInfoCard">
        <div className="infocard">
            <img src={imgSrc} ref={img} />
            <h2 ref={tilteAnim}>{title} </h2>
            <p ref ={descriptionAnim}>{description} </p>
            
        </div>
        </div>
    )
}

export default Infocard
