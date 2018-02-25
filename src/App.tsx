import * as React from 'react';
import DemoCarouselMotion from './components/SelectionPanel/components/DemoCarouselMotion';
import DemoCarouselTransition from './components/SelectionPanel/components/DemoCarouselTransition';
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
    const SingleSelectionMotionPanel = SelectionPanel(DemoCarouselMotion);
    const SingleSelectionTransitionPanel = SelectionPanel(DemoCarouselTransition);
    // const MultiSelectionPanel = SelectionPanel(DemoCarouselMotion);
    return (
      <div className="App">
        <SingleSelectionMotionPanel 
          options={{type: SelectionPanelType.SINGLE, cardSizes: {width: 295, height: 557, opacity: 1} }} 
          events={{onSelect: this.onSelect}}
        />
        <hr/>
        <SingleSelectionTransitionPanel
          options={{type: SelectionPanelType.SINGLE, cardSizes: {width: 295, height: 557, opacity: 1}}} 
          events={{onSelect: this.onSelect}}
        />
      </div>
    );
  }
}

export default App;
