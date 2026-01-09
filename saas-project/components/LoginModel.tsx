"use client";
import { useState } from "react";

type props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function LoginModel({ isOpen, onClose }: props) {
    if (!isOpen) return null;

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" onClick={onClose}/>

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
                
            </div>
        </div>
    );
}