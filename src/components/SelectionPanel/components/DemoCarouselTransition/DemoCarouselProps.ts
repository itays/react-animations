import { SelectionPanelType, CardSizes } from '../../SelectionPanelProps';

export default interface DemoCarouselProps {
  options: DemoCarouselOptions;
  data?: DemoCarouselData;
  events: DemoCarouselEvents;
}

export interface DemoCarouselOptions {
  /**
   * Custom Classes
   */
  className?: string;
  type: SelectionPanelType;
  cardSizes?: CardSizes;
}

export interface DemoCarouselData {
  value?: any | any[]; // TODO: change to SelectionCard
  selected?: any;
}

export interface DemoCarouselEvents {
  onSelect: (selectionCard: any) => void; // TODO: add onSelect param with type SelectionCard
  onUnselect: (selectionCard: any) => void; // TODO: add onSelect param with type SelectionCard
}
