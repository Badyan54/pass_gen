import { useState } from "react"
import { Interface } from "readline"
import { buffer } from "stream/consumers"

interface OptionsProp{
    selctedOptions: string[];
    toggleOption: (option: string) => void;

}

export default function Options({selctedOptions, toggleOption}: OptionsProp){
    const allOptions = [ "opt 1", "opt 2", "opt 3"]

    return(
        <>
            {allOptions.map( (option) => (
                <button
                key={option}
                onClick={ () => toggleOption(option) }
                className={`${selctedOptions.includes(option) ? "bg-pink-ligth" : "bg-pink-600"}
                    min-w-14 min-h-14 border-black border m-2 text-blue-light rounded-lg`}
                >
                    { option }
                </button>
            ))}
        </>
    )
}