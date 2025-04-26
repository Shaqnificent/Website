import navStyles from "./index.module.scss"
import Image from "next/image"
import logo from "./assets/logo.png"
import Websitelogo from "./assets/WebsiteLogo.png"
import { useRouter } from "next/dist/client/router"

export default function Navbar({active}) {

    const router = useRouter()

    const navigateToPage = (link) => {
       router.push(link)
    }
    return(
        <div className={navStyles.navContainer}>
            <div className={navStyles.nav}>         
                <div>
                    <Image src={Websitelogo} alt="Logo" />
                </div>
                <div className={navStyles.links}>
                    <span
                        className={`${navStyles.link} ${active === "home" ? navStyles.active : ""}`}
                        onClick={() => navigateToPage("/")}
                    >
                    Home
                    </span>
                    
                    <span
                        className={`${navStyles.link} ${active === "experience" ? navStyles.active : ""}`}
                        onClick={() => navigateToPage("/experience")}
                    >
                    Experience
                    </span>
                </div>
            </div>
        </div>
    )
}