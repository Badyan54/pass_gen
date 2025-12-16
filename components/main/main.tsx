'use client'

import InputLetter from "./inputLetter"
import { useState } from "react"
import Result from "./result"
import Options from "./options"

export default function Main(){
    const [inputValue, setInputValue] = useState('')
    const [selctedOptions, setSelectedOptions] = useState<string[]>(["abcdefghijklmnopqrstuvwxyz"])
    const [length, setLength] = useState<number>(10)
    const [strenght, setStrenght] = useState<number>(0)

    function toggleOption(option: string){
        setSelectedOptions(prev => {
            const isSelected = prev.includes(option) 
            if (prev.length === 1 && isSelected) return prev // не можна вимкнути всі опції
            return isSelected
            ? prev.filter(o => o !== option)
            : [...prev, option];
        }
        );
    }
    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setInputValue(event.target.value)
        setStrenght(howStrengthPass(event.target.value))
    }
    function handleLength(event: React.ChangeEvent<HTMLInputElement>){
        setLength(Number(event.target.value))
    }

    function genPass(): void{
        let genData = ''
        for (let option of selctedOptions){
            genData += option
        }
        let password = ''
        for (let i = 0; i < length; i++){
            password += genData[Math.floor(Math.random() * genData.length)];
        }
        setInputValue(password)
        setStrenght(howStrengthPass(password))
    }

    function howStrengthPass(pass: string): number{
        // по selectedOptions пройтися не варант бо user може сам щось воводитию 
        let score = 0
        if (pass.length > 7) score++
        if (pass.length > 12) score++
        if (/[a-z]/.test(pass)) score++;
        if (/[A-Z]/.test(pass)) score++;
        if (/\d/.test(pass)) score++;
        if (/[!@#$%^&*]/.test(pass)) score++;
        return score
    }

    return(
        <main className="grid grid-rows-[30%_1fr] grid-cols-2 gap-x-3 gap-y-6 h-[85%] p-1 px-4">
            <div className="flex flex-col gap-3 justify-center items-center">
                <InputLetter value={inputValue} handleChange={handleChange} handleClick={genPass}/>
            </div>
            <div className="row-span-2 p-20">
                <Options
                selctedOptions={selctedOptions}
                toggleOption={toggleOption}
                length={length}
                handleLenght={handleLength}
                />
            </div>
            <div className="h ">
                {strenght}
                <Result passwords=""/>
            </div>
        </main>
    )
}