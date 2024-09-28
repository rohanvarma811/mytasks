"use client";
import React from "react";
import GlobalStyleProvider from "./GlobalStyleProvider";
import { GlobalProvider } from "../context/golbalProvider"
// import { Toaster } from "react-hot-toast";

interface Props {
  children: React.ReactNode;
}

function ContextProvider({ children }: Props) {
    // const [isReady, setIsReady] = React.useState(false);

    // React.useEffect(() => {
    //     setTimeout(() => {
    //     setIsReady(true);
    //     }, 250);
    // }, []);

    // if (!isReady) {
    //     return (
    //         <div className="w-full h-full flex items-center justify-center">
    //             <span className="loader"></span>
    //         </div>
    //     );
    // }

    return (
        <GlobalProvider>
            {children}
        </GlobalProvider>
    );
}

export default ContextProvider;
