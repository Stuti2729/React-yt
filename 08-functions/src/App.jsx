import React from 'react'

const App = () => {
    function btnClicked() {
        console.log('hello');
    }
    return (
        <div>
            <button onClick={btnClicked} onChange={function () {

                console.log("kuch change hua");
            }}>Click</button>
        </div>
    )
}

export default App