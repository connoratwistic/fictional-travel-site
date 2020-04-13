import '../styles/styles.css';
import ClientArea from './modules/ClientArea';

// React Related Code
// import React from 'react';
// import ReaconDOM from 'react-dom';

// function MyAmazingComponent()
// {
//     return (
//         <div>
//             <h1>This is My Amazing React Component</h1>
//             <p>React is great</p>
//         </div>
//     );
// }

// ReactDOM.render(<MyAmazingCompononent />, document.querySelector("#my-react-example"));

new ClientArea();

if (module.hot)
{
    module.hot.accept()
}