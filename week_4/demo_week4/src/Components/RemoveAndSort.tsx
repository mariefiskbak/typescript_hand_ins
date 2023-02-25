import React, {useContext} from 'react';
import {Person} from "./PeopleViewer";

function RemoveAndSort({people, setPeople}: {
    people: Person[],
    setPeople: React.Dispatch<React.SetStateAction<Person[]>>
}) {

    const handleRemoveLast = () => {
        people.splice(people.length - 1, 1)
        setPeople([...people])
    }

    const handleSort = () => {
        setPeople([...people].sort((a, b) => a.age - b.age))
    }

    return (
        <div>
        <button onClick={handleRemoveLast}>Remove Last</button>
        <button onClick={handleSort}>Sort List by Age</button>
        </div>
    )
}

export default RemoveAndSort