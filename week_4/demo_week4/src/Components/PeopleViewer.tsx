import React, {useEffect, useState} from "react";

type Person = {
    id: number
    name: string
    age: number
    city: string
}
function PeopleViewer({people}: { people: { id: number, name: string, age: number, city: string }[]}) {

    return (
        <div>
            <h2>People</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
                </thead>
                <tbody>
                {people.map((person) => (
                    <tr key={person.id}>
                        <td>{person.id}</td>
                        <td>{person.name}</td>
                        <td>{person.age}</td>
                        <td>{person.city}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )

}

export type {Person}
export default PeopleViewer