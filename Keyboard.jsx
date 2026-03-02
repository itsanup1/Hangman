export function Keyboard({ guessedLetters = [], disabled = false, onSelectLetter }){
    const keys = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z"
    ];
    
    return(
        <div className="flex gap-4 justify-center items-center relative flex-wrap">
            {keys.map((key)=>
                <button 
                    key={key} 
                    onClick={() => onSelectLetter && onSelectLetter(key)}
                    disabled={disabled || guessedLetters.includes(key)} 
                    className="border-2 h-16 w-16 text-2xl uppercase disabled:opacity-40 bg-gray-200 focus:bg-white hover:bg-blue-400"
                >
                    {key}
                </button>
            )}
        </div>
    );
}