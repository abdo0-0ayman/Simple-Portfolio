import { Component } from "react"
import style from './Landing.module.css'
export default class Landing extends Component{
        constructor(){
                super();
        }
        render(){
                return(
                        <>
                        <div className ={style.Landing_div}>
                                <div className={style.Landing_h}>
                                <h1>Abdulrahman Ayman Mostafa</h1>
                                <h2 >MERN Stack Developer</h2>
                                </div>
                        </div>
                        </>
                )
        }
}