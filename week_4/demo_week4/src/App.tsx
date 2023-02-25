import React, {useEffect, useState} from 'react'
import './App.css'
import PeopleViewer from "./Components/PeopleViewer";
 import type {Person} from "./Components/PeopleViewer";
import InputName from "./Components/InputName";
import ShowName from "./Components/ShowName";
import AddPeople from "./Components/AddPeople";
import RemoveLast from "./Components/RemoveLast";




function App() {
    const [name, setName] = useState<string>("")
    const [people, setPeople] = useState<Person[]>([])

    useEffect(() => {
        fetch('http://localhost:3001/person')
            .then(response => response.json())
            .then(data => setPeople(data))
    }, [])


    return (
        <div className="App">
            <InputName setName={setName} name={name}/>
            <ShowName name={name}/>

            <PeopleViewer people={people}/>
            <AddPeople people={people} setPeople={setPeople}/>
            <RemoveLast people={people} setPeople={setPeople}/>

        </div>
    )
}


export default App
