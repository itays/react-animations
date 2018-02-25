export default interface DemoCardProps {
  options?: DemoCardOptions;
  data: DemoCardData;
  events: DemoCardEvents;
}

export interface DemoCardOptions {}

export interface DemoCardData {
    id: string | number;
    title: string;
    additionalText: string;
    price: string;
}

export interface DemoCardEvents {
  onUnselect: (selectionCard: any) => void; // TODO: add onSelect param with type SelectionCard
}
