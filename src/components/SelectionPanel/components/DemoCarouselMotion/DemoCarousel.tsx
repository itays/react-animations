import * as React from 'react';
import DemoCarouselProps from './DemoCarouselProps';
import DemoCarouselState from './DemoCarouselState';
import DemoCard from './../DemoCard';
// import DemoCollapsedCard from '../DemoCollapsedCard/DemoCollapsedCard';
import { spring, TransitionMotion } from 'react-motion';
const mockCards = [
  {
    id: 1,
    title: '60+ channels',
    additionalText: 'Live a little',
    price: '35$',
  },
  {
    id: 2,
    title: '80+ channels',
    additionalText: 'Just right',
    price: '50$',
  },
  {
    id: 3,
    title: '100+ channels',
    additionalText: 'Go big',
    price: '60$',
  },
  {
    id: 4,
    additionalText: 'Gotta have it',
    title: '120+ channels',
    price: '70$',
  },
];

const springSettings = { stiffness: 170, damping: 26, precision: 0.5 };
// const NEXT = 'show-next';

export default class DemoCarouselMotion extends React.Component<
  DemoCarouselProps,
  DemoCarouselState
> {
  constructor(props: DemoCarouselProps) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.onUnselect = this.onUnselect.bind(this);
    this.state = {
      data: mockCards,
    };
  }
  onSelect(data: any) {
    // this.props.events.onSelect(data);
    this.setState({ data: [data] });
  }

  onUnselect(data: any) {
    // this.props.events.onUnselect(data);
    this.setState({ data: mockCards });
  }

  willLeave() {
    console.log('willLeave');
    return { width: spring(0, springSettings)};
  }

  render() {
    const height =
      (this.props.options.cardSizes && this.props.options.cardSizes.height) ||
      557;
    const width =
      this.state.data.length === 1
        ? spring(window.innerWidth, springSettings)
        : (this.props.options.cardSizes &&
            this.props.options.cardSizes.width) ||
          100;
    const opacity = 1;
    console.log(`Width:`, width);
    return (
      <TransitionMotion
        willLeave={this.willLeave}
        styles={this.state.data.map(item => ({
          key: item.id.toString(),
          data: item,
          style: { width, height, opacity },
        }))}
      >
        {interpolatedStyles => (
          // first render: a, b, c. Second: still a, b, c! Only last one's a, b.
          <div className="cardlist">
            {interpolatedStyles.map(config => {
              return (
                <DemoCard
                  data={config.data}
                  key={config.data.id}
                  events={{ onSelect: this.onSelect }}
                  options={{
                    cardSizes: {
                      width: config.style.width,
                      height: config.style.height,
                      opacity: config.style.opacity,
                    },
                  }}
                />
              );
            })}
          </div>
        )}
      </TransitionMotion>
    );
  }
}
