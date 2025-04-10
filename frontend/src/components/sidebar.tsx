import { LogoIcon } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SideBarItem } from "./sidebarItem";


export function SideBar() {
    return <div className="bg-white h-screen  w-72 fixed left-0 top-0 pl-6">
        <h1 className="flex text-2xl pt-8  items-center">
            <div className="pr-4 text-purple-600">
                <LogoIcon size="lg" />
            </div>
            Samjhana</h1>
        <div className="pt-4 pr-4">
            <SideBarItem text="Twitter" icon={<TwitterIcon />} />
            <SideBarItem text="YouTube" icon={<YoutubeIcon />} />
        </div>
    </div>
}