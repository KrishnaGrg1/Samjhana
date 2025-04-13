import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { ContentType } from "../components/createContent";




export function UseContent() {
    interface Content {
        type: ContentType;
        link: string;
        title: string;
    }

    const [content, setContent] = useState<Content[]>([]);

    function refresh() {

        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then((res) => {
            setContent(res.data.content)
        }).catch((e) => {
            console.error("Signin error:", e);
        })
    }

    useEffect(() => {
        refresh()
        let interval=setInterval(()=>{
            refresh()
        },10*1000)
        return()=>{
            clearInterval(interval)
        }
    }, [])

    return {content,refresh}
}