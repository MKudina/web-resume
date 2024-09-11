import { useState } from "react"
import { Link } from "react-router-dom"
import { TABS } from "../../utils/constants"

export const Tabs = () => {
    const [isActiveTab, setIsActiveTab] = useState(window.location.pathname)

    return (
        <div className="hidden lg:flex justify-evenly gap-2">
            {
                TABS.map((tab)=>(
                    <Link key={tab.id} to={tab.path} className={`lg:text-xl xl:text-2xl px-[5px] border-blue-600 
                    border-solid rounded-full box-border ${isActiveTab === tab.path ? 'border-b-2' : 'hover:border-b-2'} `}
                    onClick={()=> setIsActiveTab(tab.path)}>{tab.title}</Link>
                ))
            }
        </div>
    )
}