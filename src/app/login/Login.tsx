import React, { useCallback, useEffect, useState } from 'react'
import style from './Login.module.css'
import background from '../../assets/auth-background.jpg'
import { useDispatch } from 'react-redux'
import { loginThunk } from './LoginThunk'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router'
export default function Login() {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let history = useHistory()
    const dispatch = useDispatch()
    const navigate = (page: string) => {
        history.push(page)
    }
    const login = useCallback(() => {
        dispatch(loginThunk({ email, password }))
    }, [])
    useEffect(() => {
        const listener = (event: KeyboardEvent) => {
            if (event.code === "Enter" || event.code === "NumpadEnter")
                login()
        }
        document.addEventListener("keydown", listener)
        return () => { document.removeEventListener("keydown", listener) }
    }, [login])
    return (
        <div className={style.container}>
            <img src={background} width="100%" height="100%" />
            <div className={style.content}>
                <h1 className={style.headerText}>Login</h1>
                <input
                    type="email"
                    className={style.field}
                    placeholder="Email"
                    onChange={({ target: { value } }) => { setEmail(value) }} />
                <input
                    type="password"
                    className={style.field}
                    placeholder="Password"
                    onChange={({ target: { value } }) => { setPassword(value) }} />
                <Button variant="contained"
                    size="large"
                    style={{ ...loginButtonStyle, backgroundColor: "black", color: "white", borderColor: "black" }}
                    onClick={() => { login();  }}>
                    Sign In
                </Button>
            </div>

        </div>
    )
}

const loginButtonStyle: React.CSSProperties = {
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