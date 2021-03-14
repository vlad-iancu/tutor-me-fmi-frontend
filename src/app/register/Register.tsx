import Button from '@material-ui/core/Button'
import React, { useCallback, useEffect, useState } from 'react'
import style from './Register.module.css'
import background from '../../assets/auth-background.jpg'
export default function Register() {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    const register = useCallback(() => { console.log("Register called") }, [])
    useEffect(() => {
        const listener = (event: KeyboardEvent) => {
            if (event.code === "Enter" || event.code === "NumpadEnter")
                register()
        }
        document.addEventListener("keydown", listener)
        return () => { document.removeEventListener("keydown", listener) }
    }, [register])
    return (
        <div className={style.container}>
            <img width="100%" height="100%" src={background} />
            <div className={style.content}>
                <h1 className={style.headerText}>Register</h1>
                <input
                    className={style.field}
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={({ target: { value } }) => { setName(value) }} />
                <input
                    className={style.field}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={({ target: { value } }) => { setEmail(value) }} />
                <input
                    className={style.field}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={({ target: { value } }) => { setPassword(value) }} />
                <Button style={{ ...registerButtonStyle, backgroundColor: "black", color: "white" }}>
                    Sign Up
                </Button>
            </div>
        </div>
    )
}

const registerButtonStyle: React.CSSProperties = {
    width: "70%",
    height: "7%",
    margin: "35px",
    fontFamily: "architect",
    borderRadius: "95% 4% 92% 5%/4% 95% 6% 95%",
    borderWidth: "3px 4px 3px 3px",
    borderColor: "black",
    borderStyle: "solid",
    alignSelf: "flex-end"
}