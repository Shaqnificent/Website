import aboutStyles from "./index.module.scss"
export default function About() {
    return(
        <div className={aboutStyles.about}>

            <div className={aboutStyles.titleContainer}>
                <span className={aboutStyles.mainTitle}>About Me</span>
                <span className={aboutStyles.subTitle}>Get to know more</span>
            </div>
        </div>
    )
}