export function HangmanWord({word,guessedLetters} ){
    
    
    return(
        <div className="flex font-bold text-6xl gap-10 ">
            {word.split("").map((letter,index)=>
                <span className =" flex border-b-6 w-10 justify-center items-center" key = {index}>
                    <span className={guessedLetters.includes(letter) ? "" : "invisible"}>{letter}</span>
                </span>
            )}
        </div>
    );
}