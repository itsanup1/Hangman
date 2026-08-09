import {HangmanDrawing} from './Components/HangmanDrawing'
import {HangmanWord} from './Components/HangmanWord'
import {Keyboard} from './Components/Keyboard'
import {useState,useEffect} from 'react'
import words from './assets/words'

function pickWord(){
    const w = words[Math.floor(Math.random()*words.length)];
    return w.toUpperCase();
}

function App(){
    const [wordToGuess,setWordToGuess] = useState(()=>pickWord());
    const [guessedLetters,setGuessedLetters] = useState([]);

    const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));

    const numberOfAllowedWrongGuesses = 6; // matches HangmanDrawing body parts
    const isLoser = incorrectLetters.length >= numberOfAllowedWrongGuesses;
    const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));
    const isGameOver = isLoser || isWinner;

    function addGuessedLetter(letter){
        if(isGameOver) return;
        letter = letter.toUpperCase();
        if(guessedLetters.includes(letter)) return;
        setGuessedLetters(prev => [...prev, letter]);
    }

    function handleKeyDown(e){
        const key = e.key;
        if(/^[a-zA-Z]$/.test(key)){
            e.preventDefault();
            addGuessedLetter(key);
        }
    }

    useEffect(()=>{
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    },[guessedLetters, isGameOver, wordToGuess]);

    function resetGame(){
        setGuessedLetters([]);
        setWordToGuess(pickWord());
    }

    return(
        <div className="flex flex-col gap-8 justify-center items-center">
            <HangmanDrawing numberofGuesses = {incorrectLetters.length}/>

            <div className="flex flex-col items-center gap-6">
                <HangmanWord word = {wordToGuess} guessedLetters = {guessedLetters}/>

                <div className="text-center">
                    {isWinner && <div className="text-3xl font-bold text-green-600">You won! 🎉</div>}
                    {isLoser && <div className="text-3xl font-bold text-red-600">You lost 😞 - the word was: <span className="uppercase">{wordToGuess}</span></div>}
                    {!isGameOver && <div className="text-lg text-gray-700">Wrong guesses: {incorrectLetters.length} / {numberOfAllowedWrongGuesses}</div>}
                </div>

                <div className="flex gap-4 mt-2">
                    <button onClick={resetGame} className="px-4 py-2 bg-blue-500 text-white rounded">Reset</button>
                </div>

            </div>

            <Keyboard onKeyClick={addGuessedLetter} guessedLetters={guessedLetters} disabled={isGameOver} />
        </div>
    );
}

export default App;
