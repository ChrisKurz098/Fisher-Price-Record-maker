import { AddRemoveBeat } from "../AddRemoveBeat/AddRemoveBeat.component";
import { BeatLine } from "../BeatLine/BeatLine.component";
import { DeleteCol } from "../DeleteCol/DeleteCol.component";
import { NotesDisplay } from "../NotesDisplay/NotesDisplay.component";
import { ShiftCol } from "../ShiftCol/ShiftCol.component";
import "./staff.css";

export const Staff = ({ notes, song, setNotes, mousePos, setMousePos, setMaxBeats }) => {
    return (
        <div className='staff-container'>
            <div className={"staff-component"}>
                <NotesDisplay />

                {notes[song].map((note, i) => {
                    //we dont want to render a staff line for the last value in the note array as it is the songs title, not a note
                    if (i === 16) return "";
                    
                    //render each beat
                    return note.map((beat, j) => {
                        return (
                            <>
                           {(i === 0) ? <DeleteCol key={`del-${j}`} setMousePos = {setMousePos} column = {j+1} song = {song} setNotes = {setNotes}/>: ''}
                            <BeatLine
                                key={`beat-${i}-${j}-${beat}`}
                                beat={beat}
                                pos={{ row: i, col: j }}
                                setNotes={setNotes}
                                song={song}
                                mousePos={mousePos}
                                setMousePos={setMousePos}
                            />
                            {  (mousePos[1] === j && i === 0) ? <ShiftCol key={`shift-${j}-${i}`} setMousePos = {setMousePos} setNotes={setNotes} song = {song} mousePos={mousePos}/> : '' }
                            </>
                            
                        );
                    });
                  
                })}
            </div>
            <AddRemoveBeat setMaxBeats={setMaxBeats}/>
        </div>
    );
};
