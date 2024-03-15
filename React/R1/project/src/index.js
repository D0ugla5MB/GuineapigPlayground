import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { faker } from '@faker-js/faker';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));


function makePerson() {
    return `${faker.person.firstName()}\t${faker.person.lastName()}`
}

function PeopleList() {
    const people = [];
    let stackQty = 5;

    while (stackQty > 0) {
        people.push(makePerson());
        stackQty--;
    }

    return (
        /*{
                (function () {
                    const aux = [];
                    for (const perosn of people) {
                        aux.push(<Person key={crypto.randomUUID()} person={people[perosn]} />);
                    }
                    return aux;
                })()
            }*/

        <>
            <ul>
                {
                    people.map((person) => (
                        <Person key={crypto.randomUUID()} person={person} />
                    ))
                }
            </ul>
        </>
    );
}

function Title() {
    return <h1>These are my components!</h1>
}


function Person() {

    const person = makePerson();

    return (
        <li key={crypto.randomUUID()}>
            {`${person.firstName} ${person.lastName}`}
        </li>
    );
}

function MyButton({ newPerson, addNewPerson }) {

    return (
        <>
            <div>
                <button id='buttonP' onClick={addNewPerson}>Click me</button>
                <p id='buttonP'>{newPerson}</p>
            </div>

        </>
    );
}
function Content() {
    const [newPerson, setNewPerson] = useState(makePerson());
    function addNewPerson() {
        setNewPerson(makePerson());
    }
    return (
        <>
            {/** THE ISSUE WAS THE PROPS NAME WAS BEING PASSED */}
            <Title />
            <MyButton newPerson={newPerson} addNewPerson={addNewPerson} />
            <MyButton newPerson={newPerson} addNewPerson={addNewPerson} />
            <MyButton newPerson={newPerson} addNewPerson={addNewPerson} />
        </>
    );
}

root.render(<Content />);
