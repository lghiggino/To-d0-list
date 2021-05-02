import React, {useState} from "react"
import "../styles/Login.css"



const Login = () => {
    let [] = useState()

    async function submit(ev) {
        ev.preventDefault()
        const form = ev.target.parentElement
        const email = ev.target.parentElement[0].value
        const password = ev.target.parentElement[1].value
        console.log(email, password)
        // const resp = await axios.post(`${NEXT_PUBLIC_ADVANCE_API}/auth`, {
        //     email: form.email.value,
        //     password: form.password.value,
        // })
        // if (resp.data.brokers.length === 0) {
        //     console.log(resp.data.brokers[0])
        //     alert('Você ainda não tem acesso a uma corretora.')
        // } else {
        //     AdvanceClient.setAccessToken(resp.data.accessToken)
        //     router.push(`/broker/${resp.data.brokers[0].id}/acc/default`)
        // }
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
        </section>
    )
}

export default Login