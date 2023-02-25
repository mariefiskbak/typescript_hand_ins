import React, {useState} from 'react'
import {Person} from "./PeopleViewer";

function AddPeople({people, setPeople}: {
    people: Person[],
    setPeople: React.Dispatch<React.SetStateAction<Person[]>>
}) {

    const [input, setInput] = useState({
        name: "",
        age: "",
        city: ""
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const addPerson = () => {
        setPeople([
            ...people, {
                id: Math.max(...people.map(p => p.id)) + 1,
                name: input.name,
                age: parseInt(input.age),
                city: input.city
            }])
        setInput({
            name: "",
            age: "",
            city: ""
        })
    }

    return (
        <div>
            <h2>Add People</h2>
            <div>
                <input type="text" placeholder="Name" name="name" onChange={handleChange} value={input.name}/>
                <input type="number" placeholder="Age" name="age" onChange={handleChange} value={input.age}/>
                <input type="text" placeholder="City" name="city" onChange={handleChange} value={input.city}/>
                <button onClick={addPerson}>Add</button>
            </div>
        </div>
    )
}

export default AddPeople