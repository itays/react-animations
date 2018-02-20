import * as React from 'react';
import DemoCarouselProps from './DemoCarouselProps';
import DemoCarouselState from './DemoCarouselState';
import DemoCard from './../DemoCard';
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
export default class DemoCarousel extends React.Component<
  DemoCarouselProps,
  DemoCarouselState
> {
  constructor(props: DemoCarouselProps) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }
  onSelect(data: any) {
    this.props.events.onSelect(data);
  }
  render() {
    const cards = mockCards.map(card => (
      <DemoCard
        data={card}
        key={card.id}
        events={{onSelect: this.onSelect}}
        options={{cardSizes: this.props.options.cardSizes}}
      />
      ),
    );
    return <div className="cardlist">{cards}</div>;
  }
}
