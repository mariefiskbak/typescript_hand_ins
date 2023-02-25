import React, {useContext} from 'react';
import {Person} from "./PeopleViewer";

function RemoveLast({people, setPeople}: {
    people: Person[],
    setPeople: React.Dispatch<React.SetStateAction<Person[]>>
}) {

    const handleRemoveLast = () => {
        people.splice(people.length - 1, 1)
        setPeople([...people])
    }

    return (
        <button onClick={handleRemoveLast}>Remove Last</button>
    )
}

export default RemoveLast;