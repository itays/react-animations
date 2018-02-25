import * as React from 'react';
import DemoCarouselProps from './DemoCarouselProps';
import DemoCarouselState from './DemoCarouselState';
import DemoCard from './../DemoCard';
import { CSSTransition } from 'react-transition-group';
import DemoCollapsedCard from '../DemoCollapsedCard/DemoCollapsedCard';
import './DemoCarousel.css';

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

export default class DemoCarouselTransition extends React.Component<
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

  render() {
    return (
      <CSSTransition
        in={this.state.data.length === 1}
        classNames="squeeze"
        timeout={2500}
      >
        <CSSTransition
          in={this.state.data.length > 1}
          classNames="expand"
          timeout={2500}
        >
          <div className="card-container">{this.renderCards()}</div>
        </CSSTransition>
      </CSSTransition>
    );
  }

  private renderCards() {
    if (this.state.data.length > 1) {
      const cards = this.state.data.map(card => (
        <DemoCard
          data={card}
          key={card.id}
          events={{ onSelect: this.onSelect }}
          options={{ cardSizes: this.props.options.cardSizes }}
        />
      ));
      return <div className="cardlist">{cards}</div>;
    } else {
      return (
        <DemoCollapsedCard
          data={this.state.data[0]}
          events={{ onUnselect: this.onUnselect }}
        />
      );
    }
  }
}
