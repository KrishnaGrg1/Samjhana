import { ReactElement } from "react"


export function SideBarItem({ text, icon }: {
    text: string,
    icon: ReactElement
}) {
    return <div className="flex py-2 items-center text-gray-700 hover:bg-gray-200 rounded-2xl pl-4 transition-all duration-100">
        <div className="pr-2">
            {icon}
        </div>
        <div>
            {text}
        </div>
    </div>
}