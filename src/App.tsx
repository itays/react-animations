import * as React from 'react';
import DemoCarousel from './components/SelectionPanel/components/DemoCarousel';
import SelectionPanel from './components/SelectionPanel';
import { SelectionPanelType } from './components/SelectionPanel/SelectionPanelProps';
// import { panels } from './mock-data';
import './App.css';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }
  onSelect(data: any) {
    console.log(data);
  }
  render() {
    const SingleSelectionPanel = SelectionPanel(DemoCarousel);
    const MultiSelectionPanel = SelectionPanel(DemoCarousel);
    return (
      <div className="App">
        <SingleSelectionPanel 
          options={{type: SelectionPanelType.SINGLE, cardSizes: {width: 295, height: 557} }} 
          events={{onSelect: this.onSelect}}
        />
        <hr/>
        <MultiSelectionPanel
          options={{type: SelectionPanelType.MULTI, cardSizes: {width: 295, height: 312}}} 
          events={{onSelect: this.onSelect}}
        />
      </div>
    );
  }
}

export default App;
