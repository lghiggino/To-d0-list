import React, {useState} from "react"
import axios from "axios"
import "../styles/Login.css"



const Login = () => {
    let [] = useState()

    async function submit(ev) {
        ev.preventDefault()
        const form = ev.target.parentElement
        const email = ev.target.parentElement[0].value
        const password = ev.target.parentElement[1].value
        console.log(email, password)
        try{
                const resp = await axios.post("http://localhost:2121/login", {
                email: email,
                password: password,
            })
            console.log(resp)
            // router.push("/") ???
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <section className="section section-login">
            <form className="form" action="/login" method="POST">
                <div>
                    <label for="userName">User Email: </label>
                    <input type="email" name="email" placeholder="enter your email" />
                </div>
                <div>
                    <label for="userPass">Password: </label>
                    <input type="password" name="password" placeholder="enter your password" />
                </div>
                <button type="submit" value="Login" onClick={(ev) => submit(ev)}>Login</button>
            </form>

            <section>
                <form action="/login" method="POST">
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="submit" />
                </form>
            </section>
        </section>
        
    )
}

export default Login