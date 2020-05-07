import React from 'react'
import ReactDOM from 'react-dom'
import Home from "./views/Home"

import "./styles/general.scss"

const App = () => <Home/>

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'))