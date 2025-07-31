import { Modulos } from "./modulos";

export function Card_Modulos(){
    return(
        <section className="max-w-[1280px] m-auto py-10">
            <section className="">
                <header className="flex flex-col justify-center items-center text-center py-10">
                    <h1 className="text-4xl">Escolha Seu Módulo de Aprendizado</h1>
                    <h3 className="text-lg text-gray-400 max-w-[600px]">Selecione o módulo que mais desperta seu interesse e comece sua jornada de aprendizado</h3>
                </header>

                <section className="flex flex-wrap justify-center gap-4">
                    <Modulos
                    conteudo = "Programação Web"
                    descricao = "Aprenda HTML, CSS, JavaScript e frameworks modernos para criar aplicações web incríveis. Desde o básico até conceitos avançados de desenvolvimento frontend e backend"
                    emoji = "aasdadsa"/>

                    <Modulos
                    conteudo = "Programação Web"
                    descricao = "Aprenda HTML, CSS, JavaScript e frameworks modernos para criar aplicações web incríveis. Desde o básico até conceitos avançados de desenvolvimento frontend e backend"
                    emoji = "aasdadsa"/>

                    <Modulos
                    conteudo = "Programação Web"
                    descricao = "Aprenda HTML, CSS, JavaScript e frameworks modernos para criar aplicações web incríveis. Desde o básico até conceitos avançados de desenvolvimento frontend e backend"
                    emoji = "aasdadsa"/>

                    <Modulos
                    conteudo = "Programação Web"
                    descricao = "Aprenda HTML, CSS, JavaScript e frameworks modernos para criar aplicações web incríveis. Desde o básico até conceitos avançados de desenvolvimento frontend e backend"
                    emoji = "aasdadsa"/>

                    <Modulos
                    conteudo = "Programação Web"
                    descricao = "Aprenda HTML, CSS, JavaScript e frameworks modernos para criar aplicações web incríveis. Desde o básico até conceitos avançados de desenvolvimento frontend e backend"
                    emoji = "aasdadsa"/>

                </section>

            </section>
        </section>
    );
}