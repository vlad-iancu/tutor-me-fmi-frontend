import React from 'react'
import style from './Landing.module.css'
import splash from '../../assets/splash.jpg'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router'
interface LandingProps {

}
export default function Landing(props: LandingProps) {
    let history = useHistory()
    const navigate = (page: string) => {
        history.push(page)
    }
    return (
        <div className={style.container}>
            <img src={splash} width="100%" height="100%" className={style.splashImage} />
            <div className={style.splashContent}>
                <p className={style.appNameText}>TutorMeFMI</p>
                <p className={style.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue lorem vel nunc condimentum suscipit. Mauris non orci eu orci eleifend sodales. Etiam sit amet odio eget libero mattis viverra. Integer nec urna vestibulum, venenatis lectus sit amet, sollicitudin nisl. Maecenas dapibus</p>
                <div className={style.buttonContainer}>
                    <Button variant="contained"
                        size="large"
                        className={style.landingButton}
                        style={{ ...landingButtonStyle, backgroundColor: "white", color: "black", borderColor: "black" }}
                        onClick={() => navigate("/login")}>
                        Sign In
                    </Button>
                    <Button variant="contained"
                        size="large"
                        className={style.landingButton}
                        style={{ ...landingButtonStyle, backgroundColor: "black", color: "white", }}
                        /* onClick={() => navigate("/register")} */>
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    )
}
const landingButtonStyle: React.CSSProperties = {
    width: "20%",
    height: "7%",
    margin: "35px",
    fontFamily: "architect",
    borderRadius: "95% 4% 92% 5%/4% 95% 6% 95%",
    borderWidth: "3px 4px 3px 3px",
    borderColor: "black",
    borderStyle: "solid"

}