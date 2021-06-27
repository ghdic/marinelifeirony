import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext('defaultValue');

function Child() {
    const text = useContext(MyContext);
    return <div>안녕하세요? {text} </div>
}

function Parent() {
    return <Child/>
}

function GrandParent() {
    return <Parent/>
}

function ContextSample() {
    const [value, setValue] = useState(true);
    return (
    <MyContext.Provider value={value ? 'GOOD': 'BAD'}>
    <GrandParent />
    <button onClick={() => setValue(!value)}>CLICK ME</button>
    </MyContext.Provider>)
}

export default ContextSample;