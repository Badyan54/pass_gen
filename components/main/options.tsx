import { useState } from "react"
import { Interface } from "readline"
import { buffer } from "stream/consumers"

interface OptionsProp{
    length: number
    handleLenght: (event: React.ChangeEvent<HTMLInputElement>) => void
    selctedOptions: string[]
    toggleOption: (option: string) => void

}

export default function Options({selctedOptions, toggleOption, length, handleLenght}: OptionsProp){
    const data = [
        ["numbers", "0123456789"],
        ["symbols", "!@#$%^&*()_+-=[]{};:,.<>?"],
        ["uppercase", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
        ["lowercase", "abcdefghijklmnopqrstuvwxyz"]
    ]

    return(
        <>
            {data.map( (option) => (
                <button
                    key={option[0]}
                    onClick={ () => toggleOption(option[1]) }
                    className={`${selctedOptions.includes(option[1]) ? "bg-pink-ligth" : "bg-pink-600"}
                        min-w-14 min-h-14 border-black border m-2 text-blue-light rounded-lg`}
                    >
                    { option[0] }
                </button>
            ))}
            <div>
                <label htmlFor="length">
                    {length}
                </label>
                <input
                    type="range"
                    id="length"
                    min="4"
                    max="32"
                    value={length}
                    onChange={(e) => handleLenght(e)}
                />
            </div>
        </>
    )
}