import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { faker } from '@faker-js/faker';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

function makePerson() {
    const person = faker.person;
    const age = faker.number.int({ min: 15, max: 100 });
    const sex = person.sex();
    return {
        sex: sex,
        gender: person.gender(),
        name: {
            firstName: person.firstName(sex),
            midName: person.middleName(),
            lastName: person.lastName()
        },
        age: age,
    }
}

function Person({ data }) {
    const n = data.name;
    return <h3 className='space'>{
        `Full name:\t${(n.firstName + "  " + n.midName + "  " + n.lastName).toUpperCase() + "\n"}Age:  ${data.age}\tSex:  ${data.sex}\tGender:  ${data.gender}\n`
    }</h3>
}

function Title() {
    return <h1>These are my components!</h1>
}

function MyButton() {
    const [data, setData] = useState(makePerson());

    return (
        <>
            <div>
                <button onClick={
                    () => setData(makePerson())
                }>Click me</button>
                <Person data={data} />
            </div>

        </>
    );
}
function Content() {
    return (
        <>
            {/** THE ISSUE WAS THE PROPS NAME WAS BEING PASSED */}
            <Title />
            <MyButton />
        </>
    );
}

root.render(<Content />);
