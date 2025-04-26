import homeStyles from "./index.module.scss"
import Image from "next/image"
import Profile from "./assets/profile.svg"
import Linkedin from "./assets/linkedin.svg"
import Git from "./assets/git.svg"

export default function Home() {

    const navigateToWebsite = (link) => {
        window.location.href = link;
     }

    return(
        <div className={homeStyles.home}>
            <div className={homeStyles.profileContainer}>
                <Profile className={homeStyles.profile} />
            </div>
            <div className={homeStyles.homeDetails}>

                <div><span>Hey! I'm</span></div>
                <div><span className={homeStyles.name}>Shaqur Adair</span></div>
                <div><span style={{fontWeight: "bold"}}>Developer / Designer</span></div>

                <div className={homeStyles.buttonContainer}>
                    <a href="/files/Resume.pdf" target="_blank"><span className={homeStyles.primary}>Download CV</span></a>
                    <span className={homeStyles.secondary}>Contact Info</span>
                </div>

                <div className={homeStyles.linksContainer}>
                    <span onClick={()=> navigateToWebsite("https://www.linkedin.com/in/shaqur-adair-424a9a205")}><Linkedin className={homeStyles.linkedin} alt="linkedin logo" /></span>
                    <span onClick={()=> navigateToWebsite("https://github.com/Shaqnificent")}><Git className={homeStyles.git} alt="github logo" /></span>
                </div>
                
            </div>
        </div>
    )
}