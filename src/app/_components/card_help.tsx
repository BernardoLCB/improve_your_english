export default function Card_Help(){
    return (
        <div className="bg-blue-400 max-w-[500px] rounded-3xl p-4 m-auto">
            <header>
                <h1 className="text-center text-3xl p-2">AJUDA</h1>
            </header>

            <section className="flex-wrap text-center justify-center gap-x-4-3">
                
                <div className="flex justify-center p-2">
                    <div className="border-3 rounded-2xl border-black p-4 bg-yellow-200">
                        <span className="text-5xl">🃏</span>
                        <h2 className="text-black pt-3">DICA</h2>
                    </div>
                </div>

                <div className="flex justify-center p-2">
                    <div className="border-3 rounded-2xl border-black p-4 bg-yellow-200">
                        <span className="text-5xl">✂️</span>
                        <h2 className="text-black pt-3">ELIMINAR OPÇÕES</h2>
                    </div>

                </div>
            </section>
        </div>
    );
}