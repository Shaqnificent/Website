import experienceStyles from "./index.module.scss"
import Tabs from "@/components/Tabs"
import { useState } from "react"
import PlaceHolder from "../assets/placeHolder.svg"
import {skill, work, education} from "./data/index.jsx"
export default function Experience() {

    const [active, setActive] = useState(1)
    function updateActive(idx){
        setActive( ()=> idx )
    }

    return(
        <div className={experienceStyles.experience}>

            <div className={experienceStyles.titleContainer}>
                <span className={experienceStyles.mainTitle}>My Experience</span>
                <span className={experienceStyles.subTitle}>A glimpse into my work and growth</span>
            </div>

            <Tabs activeTab={active} tabClick={updateActive}></Tabs>

            <div className={experienceStyles.bodyContainer}>
                {
                    active == 2 ? (
                    work.map((item)=>{
                        return(
                        <div className={experienceStyles.workContainer}>
                            <div className={experienceStyles.workItem}>
                                <div className={experienceStyles.workImage}>{item.icon}</div>

                                <div className={experienceStyles.workDetails}>
                                    <div className={experienceStyles.workOccupation}>{item.Occupation}</div>

                                    <div className={experienceStyles.workSubDetails}>
                                        <span className={experienceStyles.workTitle}>{item.Title}</span>
                                        <span className={experienceStyles.date}>{item.Date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }))
                        
                    : active == 3 ? 
                    skill.map((item)=>{
                        return(
                        <div className={experienceStyles.experienceContainer}>
                            <div className={experienceStyles.experienceItem}>
                                <div className={experienceStyles.experienceImage}>{item.icon}</div>

                                <div className={experienceStyles.experienceDetails}>
                                    <div className={experienceStyles.experienceTitle}>{item.Title}</div>
                                    <div className={experienceStyles.experienceExample}>{item.Description}</div>   
                                </div>
                            </div>
                        </div>)
                    })
                    :
                    education.map((item)=>{
                        return(
                        <div className={experienceStyles.workContainer}>
                            <div className={experienceStyles.workItem}>
                                <div className={experienceStyles.workImage}>{item.icon}</div>

                                <div className={experienceStyles.workDetails}>
                                    <div className={experienceStyles.workOccupation}>{item.Cert}</div>

                                    <div className={experienceStyles.workSubDetails}>
                                        <span className={experienceStyles.workTitle}>{item.Title}</span>
                                        <span className={experienceStyles.date}>{item.Date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>

        </div>
    )
}