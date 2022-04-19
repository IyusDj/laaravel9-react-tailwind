import React from 'react';
import ReactDOM from 'react-dom';

function Hello() {
    return (
        <div className="container mt-10">
            <div className="justify-center">
                    <div className="text-center">
                        <div className=""><h2 className='text-3xl font-bold underline'>React in Laravel</h2></div>
                        <div className="">React Component!</div>
                    </div>
            </div>
        </div>
    );
}

export default Hello;
// DOM element
if (document.getElementById('app')) {
    ReactDOM.render(<Hello />, document.getElementById('app'));
}