export function HangmanWord(){
    const word = "HELLO";
    const guessed_letter = "O";
    return(
        <div className="flex font-bold text-6xl gap-10 ">
            {word.split("").map((letter,index)=>
                <span className =" flex border-b-6 w-10 justify-center items-center">
                    <span className={guessed_letter.includes(letter) ? "" : "invisible"}>{letter}</span>
                </span>
            )}
        </div>
    );
}