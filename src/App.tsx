import * as React from 'react';
import Panel from './components/Panel';
import Group from './components/Group';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Panel>
          <h2>Your rules-free TV</h2>
          <Group>
            <Card>80+ channels</Card>
            <Card>100+ channels</Card>
          </Group>
          <Group>
            <Card>120+ channels</Card>
            <Card>140+ channels</Card>
          </Group>
        </Panel>
      </div>
    );
  }
}

export default App;
