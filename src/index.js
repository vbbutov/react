import React from "react";
// import  ReactDOM  from "react-dom";
import { createRoot } from 'react-dom/client';
import {App} from './App'





// const elements = (<div>
//   <input placeholder={helpText} onClick={inputClick} onMouseOver={mouseOver} />
//   <p>{helpText === 'help text!' ? 'Yes': 'No'}</p>
// </div>)
const app = document.getElementById('app')
const root = createRoot(app)
// ReactDOM.render(elements, app)
root.render(<App />)