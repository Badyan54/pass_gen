'use client'

import InputLetter from "./inputLetter"
import { useState } from "react"
import Result from "./result"
import Options from "./options"

export default function Main(){
    const [inputValue, setInputValue] = useState('')
    const [selctedOptions, setSelectedOptions] = useState<string[]>([])

    function toggleOption(option: string){
        setSelectedOptions( prev =>
            prev.includes(option)
            ? prev.filter( o => o !== option)
            : [...prev, option]
        )
    }
    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setInputValue(event.target.value)
    }

    function genPass(){
        
    }

    return(
        <main className="grid grid-rows-[30%_1fr] grid-cols-2 gap-x-3 gap-y-6 h-[85%] p-1 px-4">
            <div className="flex flex-col gap-3 justify-center items-center">
                <InputLetter value={inputValue} handleChange={handleChange} handleClick={genPass}/>
            </div>
            <div className="row-span-2 p-20">
                <Options selctedOptions={selctedOptions} toggleOption={toggleOption}/>
            </div>
            <div className="h bg-red-very-ligth">
                <Result passwords=""/>
            </div>
        </main>
    )
}