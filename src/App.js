import React, { Component } from 'react'

class App extends Component {
  constructor ()
{
  super();
  this.state={
    data:[
      {
        id:1,
        name:'Name one',
        details:'details one',
      },
      {
        id:2,
        name:'Name Two',
        details:'details two',
      },
      {
        id:3,
        name:'Name Three',
        details:'details three',
      }
    ]
  }
}



render() {
    return (
      <div>
        {
          this.state.data.map((value) =>
          <div>
            <span>{' '+value.id+' '}</span>
            <span>{' '+value.name+' '}</span>
            <span>{' '+value.details+' '}</span>
          </div>
          )
        } 
      </div>
    );
  }
}


export default App;
