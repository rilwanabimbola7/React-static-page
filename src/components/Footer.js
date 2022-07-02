import React from "react"
import facebook from "../image/facebook.png"
import github from "../image/github.png"
import linkedinn from "../image/linkedinn.png"
import instagram from "../image/instagram.jpg"
import twitter from "../image/twitter.jpg"
import '../index.css';

export default function Footer(){
    return (
        <div className = "footer">
            <table cellSpacing="20px">
                <tr className = "tb">
                    <td width><a href= "www.twitter.com/Rilwan"><img src = {twitter} className= "tw" /></a></td>
                    <td><a href= "www.facebook.com/Rilwan"><img src = {facebook} className = "tw"/></a></td>
                    <td> <a href= "www.instagram.com/Rilwan"><img src = {instagram} className = "tw"/></a></td>
                    <td> <a href= "www.linkedinn.com/Rilwan"><img src = {linkedinn} className = "tw"/></a></td>
                    <td> <td> <a href= "www.github.com/Rilwan"><img src = {github} className = "tw"/></a></td></td>
                    

                </tr>
            </table>
            


        </div>
        
    )
}