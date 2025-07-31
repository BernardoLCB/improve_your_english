"use client"

import { useState } from "react";

//        <section className="flex w-screen h-screen justify-center items-center">
//            <button onClick = {botao} className="text-2xl hover:cursor-pointer transition hover:scale-105 bg-blue-800 p-3 //rounded-2xl">conteudo - {valor}</button>
//        </section>

export default function Page(){
    const [valor, setValor] = useState<number>(0);

    function botao(){
        setValor(valor+1);
    }

    

    return(
        <main className="max-w-[1280px] bg-red-200">
            <header>
                <h1>Conteudo</h1>
            </header>

        </main>
    );
}