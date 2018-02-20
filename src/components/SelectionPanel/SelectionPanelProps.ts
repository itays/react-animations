export default interface SelectionPanelProps {
  options: SelectionPanelOptions;
  data?: SelectionPanelData;
  events: SelectionPanelEvents;
}

export interface SelectionPanelOptions {
  /**
   * Custom Classes
   */
  className?: string;
  type: SelectionPanelType;
  cardSizes?: CardSizes;
  // isVisible: boolean;
  // isMain: boolean;
}

export interface SelectionPanelData {
  value?: any | any[]; // TODO: change to SelectionCard
}

export interface SelectionPanelEvents {
  onSelect: (selectionCard: any) => void; // TODO: add onSelect param with type SelectionCard
}

export enum SelectionPanelType {
  SINGLE = 'SINGLE',
  MULTI = 'MULTI',
}

export interface CardSizes {
  width: number;
  height: number;
}