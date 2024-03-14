import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { faker, ro } from '@faker-js/faker';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));


function makePerson() {
    return { firstName: faker.person.firstName(), lastName: faker.person.lastName() };
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
function MyButton() {
    const [newPerson, setNewPerson] = useState(makePerson());
    /* 
    (global)var newPerson = makePerson();
    function setNewPerson(p){
        newPerson = p;
    }

    function addNewPerson() {
        setNewPerson(makePerson());
        return newPerson;
    }
    
     */
    function addNewPerson() {
        setNewPerson(makePerson());
    }
    return (
        <>
            <button onClick={addNewPerson}>
                Click me
            </button>
            <p className='space'>{`${newPerson.firstName}\t${newPerson.lastName}`}</p> 
        </>
    );
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

function Content() {
    return (
        <>
            <Title />
            <br></br>
            <MyButton />
        </>
    );
}

root.render(<Content />);
