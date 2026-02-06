import React, { Component } from 'react'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'

export class App extends Component {
  render() {
    return (
      <div>

         
   <ClickCounter />
<HoverCounter/>


      </div>
    )
  }
}

export default App