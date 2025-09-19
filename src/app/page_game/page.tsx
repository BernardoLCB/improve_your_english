"use client"

import { useState } from "react";
import { emotionsVocabulary } from "@/_conteudos/vocabulary";


type prop = {
    possible_answer:string,
    number:string,
    tip:string,
    emoji:string,

}

    function Cards_Help({tip, emoji}:prop){
        return(
            <div>
                <button className="cursor-pointer rounded-2xl border p-4">
                    <figure>
                        <p className="text-5xl">{emoji}</p>
                    </figure>
                    <header className="text-center py-3">
                        <h1>{tip}</h1>
                    </header>
                </button>
            </div>

        );
    }

    
    function Cards_Answer({possible_answer, number}:prop){
        return(
            <div className="flex">

                <figure className="px-4">
                    <img className="w-[50px] h-[50px]" src={number} alt="" />
                </figure>

                <button className="flex bg-amber-700 border rounded p-2 w-full items-center cursor-pointer"> {possible_answer} </button>
            </div>
        );
    }




export default function Page(){
    const [valor, setValor] = useState<number>(0);
    let numero:number = Math.floor(Math.random() * 21)

    function botao(){
        setValor(valor+1);
        alert(numero)
    }

    return(
        <main className="flex w-screen h-screen bg-linear-to-b from-[#222242] via-gray-500 to-white items-ceter justify-center">
            <section className="flex flex-col  w-[1280px] p-5 m-auto gap-y-5 ">

                <section className="flex ">

                    <header className="flex-[8] bg-amber-500 text-center rounded-md border p-3 text-2xl font-semibold">
                        <h1>{emotionsVocabulary.happy}</h1>
                    </header>

                    <section className="flex-[2]">
                        <section className="flex w-full h-full justify-center items-center">
                            <button className=" cursor-pointer border p-4 rounded-md">PARAR</button>
                        </section>
                    </section>

                </section>


                <section className="flex">

                    <section className="flex-[7]">
                        <section className="flex flex-col gap-5">
                            <Cards_Answer
                            possible_answer = "opção 1"
                            number="/numbers/numero-1.png"/>

                            <Cards_Answer
                            possible_answer = "opção 2"
                            number="/numbers/numero-2.png"/>

                            <Cards_Answer
                            possible_answer = "opção 3"
                            number="/numbers/numero-3.png"/>

                            <Cards_Answer
                            possible_answer = "opção 4"
                            number="/numbers/numero-4.png"/>

                            <Cards_Answer
                            possible_answer = "opção 5"
                            number="/numbers/numero-5.png"/>
                        </section>
                    </section>

                    <section className="flex-[3]">
                        
                        <div className="flex w-full h-full  justify-center items-center">
                            
                            <div className="flex flex-col gap-5 p-4 rounded-2xlm  ">
                                
                                <section className="flex flex-col gap-2 bg-blue-500 border rounded-2xl p-6 justify-center items-center">

                                    <header>
                                        <h1 className="text-2xl text-center">AJUDA</h1>
                                    </header>

                                    <section className="flex flex-wrap gap-5">
                                        <Cards_Help
                                        tip = "Cartas"
                                        emoji = "🃏"/>

                                        <Cards_Help
                                        tip = "Cartas"
                                        emoji = "✂️"/>
                                    </section>
                                </section>

                                <section  className="flex m-auto">
                                    <button onClick={botao} className="border rounded-md p-3 cursor-pointer">PROXIMO</button>
                                </section>
                            
                            </div>
                        
                        </div>
                    </section>




                </section>
            </section>

        </main>
    );
}