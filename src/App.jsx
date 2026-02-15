import {HangmanDrawing} from './Components/HangmanDrawing'
import {HangmanWord} from './Components/HangmanWord'
import {Keyboard} from './Components/Keyboard'
function App(){
    return(
        <div className="flex flex-col gap-20 justify-center items-center">
            <HangmanDrawing/>
            <HangmanWord/>
            <Keyboard/>
        </div>
    );
    
}

export default App;