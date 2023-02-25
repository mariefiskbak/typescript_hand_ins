import React from "react";
import {Person} from "./PeopleViewer";
import {useState} from "react";

function UpdatePeople({people, setPeople}: {
    people: Person[],
    setPeople: React.Dispatch<React.SetStateAction<Person[]>>
}) {

    const init = {
        id: "",
        name: "",
        age: "",
        city: ""
    }
    const [input, setInput] = useState(init)

    const handleUpdate = () => {
        //get the person with the id
        const person = people.find(p => p.id === parseInt(input.id))
        //if person is found
        if (person) {
            //update the person
            person.name = input.name
            person.age = parseInt(input.age)
            person.city = input.city
            //update the people list
            setPeople([...people])
        }
        setInput(init)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h2>Update People</h2>
            <div>
                <input type="number" placeholder="Id" name="id" onChange={handleChange} value={input.id}/>
                <input type="text" placeholder="Name" name="name" onChange={handleChange} value={input.name}/>
                <input type="number" placeholder="Age" name="age" onChange={handleChange} value={input.age}/>
                <input type="text" placeholder="City" name="city" onChange={handleChange} value={input.city}/>
                <button onClick={handleUpdate}>Update</button>
            </div>
        </div>
    )
}

export default UpdatePeople