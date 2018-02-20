import { CardSizes } from '../../SelectionPanelProps';

export default interface DemoCardProps {
  options?: DemoCardOptions;
  data: DemoCardData;
  events: DemoCardEvents;
}

export interface DemoCardOptions {
  /**
   * Custom Classes
   */
  className?: string;
  cardSizes?: CardSizes;
}

export interface DemoCardData {
    id: string | number;
    title: string;
    additionalText: string;
    price: string;
}

export interface DemoCardEvents {
  onSelect: (selectionCard: any) => void; // TODO: add onSelect param with type SelectionCard
}
