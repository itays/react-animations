import * as React from 'react';
import Panel from './components/Panel';
import Group from './components/Group';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  render() {
    const onCardSelected = (data: any) => {
      console.log(data);
    };
    return (
      <div className="App">
        <Panel>
          <h2>Your rules-free TV</h2>
          <Group>
            <Card onCardSelected={onCardSelected} data={{id: '1', title: '60+ channels', price: '35$'}} />
            <Card onCardSelected={onCardSelected} data={{id: '2', title: '80+ channels', price: '50$'}} />
          </Group>
          <Group>
            <Card onCardSelected={onCardSelected} data={{id: '3', title: '100+ channels', price: '60$'}} />
            <Card onCardSelected={onCardSelected} data={{id: '4', title: '120+ channels', price: '70$'}} />
          </Group>
        </Panel>
      </div>
    );
  }
}

export default App;
