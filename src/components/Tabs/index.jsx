import tabsStyles from "./index.module.scss";
import WorkIcon from "./assets/work.svg";
import ExperienceIcon from "./assets/experience.svg";
import SchoolIcon from "./assets/school.svg";

export default function Tabs({activeTab, tabClick}) {
    return (
      <div className={tabsStyles.tabsContainer}>
        <div className={tabsStyles.tabsSubContainer}>
          <div onClick={()=>{tabClick(1)}} className={`${tabsStyles.tab} ${activeTab == 1 ? tabsStyles.active : ""}`}>
            <span ><SchoolIcon className={tabsStyles.icon} /></span>
            <span className={tabsStyles.text}>School</span>
          </div>

          <div onClick={()=>{tabClick(2)}} className={`${tabsStyles.tab} ${activeTab == 2 ? tabsStyles.active : ""}`}>
            <span><WorkIcon className={tabsStyles.icon} /></span>
            <span className={tabsStyles.text}>Work</span>
          </div>
    
          <div onClick={()=>{tabClick(3)}} className={`${tabsStyles.tab} ${activeTab == 3 ? tabsStyles.active : ""}`}>
            <span ><ExperienceIcon className={tabsStyles.icon} /></span>
            <span className={tabsStyles.text}>Experience</span>
          </div>
        </div>
      </div>
    );
  }
  