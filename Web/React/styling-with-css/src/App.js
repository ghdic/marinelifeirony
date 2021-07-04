import React from 'react';
import Button from "./components/Button";
import './App.scss'

function App() {
    return (
        <div className="App">
            <div className="buttons">
                <Button size="large">Button</Button>
                <Button>Button</Button>
                <Button size="small">Button</Button>
            </div>
            <div className="buttons">
                <Button size="large" color="gray">Button</Button>
                <Button color="gray">Button</Button>
                <Button color="gray" size="small">Button</Button>
            </div>
            <div className="buttons">
                <Button color="pink" size="large">Button</Button>
                <Button color="pink">Button</Button>
                <Button color="pink" size="small">Button</Button>
            </div>
            <div className="buttons">
                <Button color="gray" size="large" outline={true}>Button</Button>
                <Button color="pink" outline={true}>Button</Button>
                <Button color="pink" size="small">Button</Button>
            </div>
            <div className="buttons">
                <Button color="gray" size="large" fullWidth={true}>Button</Button>
                <Button color="pink" fullWidth={true}>Button</Button>
                <Button color="pink" size="small" fullWidth onClick={
                    () => { console.log("alert!!")}
                }>Button</Button>
            </div>
        </div>
    )
}

export default App;