"use client"

export function Generic_Button(){

    function cliqueemmim(){
        alert("entrei");
    }


    return(
        <button onClick={cliqueemmim} className="bg-orange-600 p-5 rounded-md cursor-pointer">clique aqui em mim</button>
    );
}