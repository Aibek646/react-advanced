import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
    const [people, setPeople] = useState(data);
    // const removeItem = (id) => {
    //     let newPeople = people.filter((person) => person.id !== id);
    //     setPeople(newPeople);
    // };

    const removeItem = (id) => {
        // let newPeople = people.filter((person) => person.id !== id);
        // setPeople(newPeople);
        setPeople((oldPeople) => {
            let newPeople = oldPeople.filter((person) => person.id !== id);
            return newPeople;
        });
    };
    return (
        <>
            {people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id} className="item">
                        <h1>{name}</h1>
                        <button onClick={() => removeItem(id)}>remove</button>
                    </div>
                );
            })}
            <button className="btn" onClick={() => setPeople([])}>
                clear items
            </button>
        </>
    );
};

export default UseStateArray;
