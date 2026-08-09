export function Keyboard({onKeyClick = ()=>{}, guessedLetters = [], disabled = false}){
    const keys = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z"
    ];

    const handleClick = (key)=>{
        if(disabled) return;
        onKeyClick(key.toUpperCase());
    }

    return(
        <div className="flex gap-4 justify-center items-center relative flex-wrap max-w-[660px]">
            {keys.map((key)=>
                <button
                    key={key}
                    type="button"
                    aria-label={`Letter ${key.toUpperCase()}`}
                    disabled={disabled || guessedLetters.includes(key.toUpperCase())}
                    onClick={()=>handleClick(key)}
                    className={`border-2 h-16 w-16 text-2xl uppercase disabled:opacity-40 bg-gray-200 focus:bg-white hover:bg-blue-400 ${guessedLetters.includes(key.toUpperCase()) ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                    {key}
                </button>
            )}
        </div>
    );
}
