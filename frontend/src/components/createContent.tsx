import { CrossIcon } from "../icons/closeIcon";
import React, { useRef, useState } from "react";
import { Button } from "./button";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
}
export enum ContentType {
    YouTube = "youtube",
    Twitter = "twitter"
}
export function CreateContentModel({ open, onClose }: CreateContentModalProps) {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.YouTube)
    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        const BackendUrl=BACKEND_URL;

    await axios.post(`${BackendUrl}/api/v1/content`,{
            title,link,type,
        },{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        }).then((res)=>{
            console.log("Sucessfully submited"+res);
            alert("Added successfully")
        }).catch( (err) =>{
            if (axios.isAxiosError(err)) {
              console.error("Axios error:", err.response?.data || err.message);
              alert(err.response?.data?.message || "An error occurred while adding content.");
            } else {
              console.error("Unexpected error:", err);
              alert("An unexpected error occurred.");
            }
          })
    }

    return (
        <>
          {open && (
            <div className="w-screen h-screen fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center px-4">
              <div className="bg-white p-6 rounded-2xl w-full max-w-md shadow-xl relative space-y-6">
                
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
                >
                  <CrossIcon size="lg" />
                </button>
      
                {/* Title */}
                <h2 className="text-xl font-semibold text-center text-gray-800">
                  Add New Content
                </h2>
      
                {/* Inputs */}
                <div className="space-y-4">
                  <Input ref={titleRef} placeholder="Enter Title" />
                  <Input ref={linkRef} placeholder="Paste Link" />
                </div>
      
                {/* Content Type Selector */}
                <div className="bg-gray-50 p-4 border border-gray-200 rounded-xl space-y-3 text-center">
                  <h3 className="text-md font-medium text-gray-700">Select Content Type</h3>
                  <div className="flex justify-center gap-4">
                    <Button
                      text="YouTube"
                      size="lg"
                      variant={type === ContentType.YouTube ? "primary" : "secondary"}
                      onClick={() => setType(ContentType.YouTube)}
                      animation={"transition hover:scale-105"}
                    />
                    <Button
                      text="Twitter"
                      size="lg"
                      variant={type === ContentType.Twitter ? "primary" : "secondary"}
                      onClick={() => setType(ContentType.Twitter)}
                      animation={"transition hover:scale-105"}
                    />
                  </div>
                </div>
      
                {/* Submit */}
                <div className="flex justify-center">
                  <Button variant="primary" onClick={addContent} text="Submit" size="lg" />
                </div>
              </div>
            </div>
          )}
        </>
      );
      
}

interface InputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    ref?: any
}

function Input({ onChange, placeholder, ref }: InputProps) {
    return (
        <input
            ref={ref}
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded focus:outline-none"
        />
    );
}
