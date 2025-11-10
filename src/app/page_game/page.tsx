"use client";

import { useState } from "react";
import Card_Help from "../_components/card_help";

export default function Page(){

    const [contador, setcontador] = useState(0)

    return(
        <div>
            <Card_Help/>

            <div className="flex justify-center items-center gap-x-2 p-2 ">
                <button onClick={()=> setcontador(contador-1)} className="bg-gray-300 rounded-xs text-3xl p-2 cursor-pointer">-</button>
                <span className="justify-center items-center">{contador}</span>
                <button onClick={()=>setcontador(contador+1)} className="bg-gray-300 rounded-xs text-3xl p-2 cursor-pointer">+</button>

            </div>


        </div>
    );

}