interface InputLetterProps {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputLetter({value, handleChange}: InputLetterProps){
    return(
        <>
            <h4>letters with which the password will be created</h4>
            <div>
                <input type="text" value ={value} onChange={handleChange} className="rounded-lg p-2 bg-blue-light m-3" />
                <button className="rounded-lg bg-pink-ligth p-1.5 text-blue-light">Generate</button>
            </div>
        </>
    )
}