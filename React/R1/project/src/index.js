import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { faker } from '@faker-js/faker';

function makePerson() {
    return { firstName: faker.person.firstName(), lastName: faker.person.lastName() };
}

function makeList(...people) {
    return people;
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

function PeopleList() {
    const people = [];
    let stackQty = Math.round( (1+ Math.random()) * 10);

    while(stackQty >= 0){
        people.push(makePerson());
        stackQty--;
    }

    return (
        <ul>
            {people.map((person) => (
                <Person key={crypto.randomUUID()} person={person} /> 
            ))}
        </ul>
    );
}

function Content() {
    return (
        <>
            <Title />
            <br></br>
            <PeopleList />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Content/>);