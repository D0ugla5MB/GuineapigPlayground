import React from 'react';
import ReactDOM from 'react-dom/client';

/* const root = ReactDOM.createRoot(document.getElementById('root')); 
const ref = document.getElementById("root");

function aux() {
    const elem = document.createElement("h1").textContent = "dbhuagadgashff\n";
    const list = [];

    for (let index = 0; index < 5; index++) {
        list.push(elem);
    }
    return list;
}

function aFunc() {
    const list = [];

    for (let index = 0; index < 5; index++) {
        list.push(<h1>{index}</h1>);
    }
    return list;
}

//const aa = `${<h1>TEST</h1>}`;
const a = "<h1>TEST</h1>";
const b = <h1>{aux()}</h1>;
const c = <p>{aux()}</p>;
const d = aFunc();
const e = <p>{aFunc()}</p>; //nest tags
const f = () => {
    const text = "ANDJASFNKSJB";
    const list = [];

    for (let index = 1; index <= 6; index++) {
        const Component = `h${index}`;
        list.push(<Component>{text}</Component>);
    }
    return list;
}  //triggers key warning

const g = () => {
    const range = Math.round(Math.random() * 10);

    const li = []; 

    for (let index = 0; index < range; index++) {
        const uuidKey = crypto.randomUUID();
        li.push(
            <li key={uuidKey}>{uuidKey}</li>
        );
    }

    return <ul>{li}</ul>;
};

root.render(g()); */

function rng(num) {
    return Math.floor(1 + Math.random() * num);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const ref = document.getElementById("root");

function makeElem(tag) {
    return document.createElement(tag);
}

function makeContainerRoot(element) {
    return ReactDOM.createRoot(element);
}

function makeComponent(Tag, content) {
    return <Tag>{content}</Tag>;
}

function a() {
    const elem = makeElem("div");
    document.body.appendChild(elem);
    const container = makeContainerRoot(elem);
    container.render(makeComponent("h1", 1344435353543));
}

function b() {
    const elem = makeElem("div");
    elem.id = rng(100);
    document.body.appendChild(elem);
    const root = ReactDOM.createRoot(elem);

    function ListItem() {
        return <li>{rng(100000)}</li>;
    }
    function UnorderedList() {
        const list  = [];
        const size  = rng(10);

        for (let index = 0; index < size; index++) {
            list.push(<ListItem key={crypto.randomUUID()}/>);            
        }
        return list;
    }
    root.render(<UnorderedList />);
}
b();

