interface InputLetterProps {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: () => void;
}

export default function InputLetter({value, handleChange, handleClick}: InputLetterProps){
    return(
        <>
            <h4>your password</h4>
            <div>
                <input type="text" value ={value} onChange={handleChange} className="rounded-lg p-2 bg-blue-light m-3" />
                <button onClick={handleClick} className="rounded-lg bg-pink-ligth p-1.5 text-blue-light">
                    Generate
                </button>
            </div>
        </>
    )
}