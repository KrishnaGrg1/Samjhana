import { CrossIcon } from "../icons/closeIcon";
import React from "react";
import { Button } from "./button";

interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
}

export function CreateContentModel({ open, onClose }: CreateContentModalProps) {
    return (
        <>
            {open && (
                <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-70 flex justify-center items-center ">
                    <div className="bg-white p-6 rounded-2xl w-[400px] shadow-lg relative">
                        <div className="flex justify-end">
                            <button onClick={onClose}>
                                <CrossIcon size="lg" />
                            </button>
                        </div>
                        <div className="m-4 space-y-4">
                            <Input placeholder="Title" onChange={() => { }} />
                            <Input placeholder="Link" onChange={() => { }} />
                        </div>
                        <div className="flex justify-center">
                            <Button variant="primary" text="Submit" size="lg"/>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

interface InputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

function Input({ onChange, placeholder }: InputProps) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded focus:outline-none"
        />
    );
}
