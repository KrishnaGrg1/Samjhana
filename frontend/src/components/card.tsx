import { ShareIcon } from "../icons/ShareIcon";
import { DeleteIcon } from "../icons/deleteIcon";

interface cardProps{
    title:string,
    link:string,
    type:'youtube'|'twitter',
}

export function Card({title,link,type}:cardProps) {
    return (
        <div className="bg-white p-4 rounded-md shadow-md border border-slate-200 max-w-96  min-w-72">
            <div className="flex justify-between">
                <div className="flex items-center text-md ">
                    <div className="pr-2 text-gray-500">
                        <ShareIcon size='md' />
                    </div>
                    <div className="pr-2">
                       {title}
                    </div>

                </div>
                <div className="flex py-2">
                    <div className="pr-2 text-gray-500">
                        <a href={link} target="blank">
                            <ShareIcon size='md' />
                        </a>
                    </div>
                    <div className="pr-2 text-gray-500">
                        <DeleteIcon size='md' />
                    </div>
                </div>
            </div>
            <div className="pt-4">
                {type === "youtube" && <iframe className="w-full" src={link.replace("watch","embed").replace('?v=','/')}
                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>}
                {
                    type === "twitter" && <blockquote className="twitter-tweet">
                        <a href={link.replace("x",'twitter')}></a>
                    </blockquote>
                }

            </div>
        </div>
    )
}