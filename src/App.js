import React, { Component } from 'react';
import TestComponent from './TestComponent'
import ExampleComponent from './ExampleComponent'
import Now from './Now'

// Add your code own within the return statement

class App extends Component {
  render() {

    return (
      <div className="App">
        <header>Now</header>
        <Now />
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax.
          JSX lets us include JavaScript functions right along with the HTML, and also
          allows us to add in components, which are separate, self-contained chunks of JSX.
        </p>
        <ExampleComponent />
        <TestComponent />

      </div>
    );
  }
}

export default App;
