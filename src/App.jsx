import {HangmanDrawing} from './Components/HangmanDrawing'
import {HangmanWord} from './Components/HangmanWord'
import {Keyboard} from './Components/Keyboard'
import {useState} from 'react'
function App(){
    const [wordToGuess,setWordToGuess] = useState("OPEN");
    const [guessedLetters,setGuessedLetters] = useState(["G","P","O"]);
    const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));
    return(
        <div className="flex flex-col gap-20 justify-center items-center">
            <HangmanDrawing numberofGuesses = {incorrectLetters.length}/>
            <HangmanWord word = {wordToGuess} guessedLetters = {guessedLetters}/>
            <Keyboard/>
        </div>
    );
    
}

export default App;