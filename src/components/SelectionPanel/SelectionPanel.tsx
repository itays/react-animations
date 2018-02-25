import * as React from 'react';
import SelectionPanelProps from './SelectionPanelProps';
import SelectionPanelState from './SelectionPanelState';
import { SelectionPanelType } from './SelectionPanelProps';

const getDisplayName = (Comp: React.ComponentType) =>
  Comp.displayName || Comp.name || 'Component';

const SelectionPanel = (WrappedComponentWithCards: React.ComponentClass) => {
  return class extends React.Component<
    SelectionPanelProps,
    SelectionPanelState
  > {
    static displayName = `SelectionPanel(${getDisplayName(
      WrappedComponentWithCards,
    )})`;
    constructor(props: SelectionPanelProps) {
      super(props);
      this.state = {
        selected:
          this.props.data && this.props.data.value ? this.props.data.value : [],
      };
      this.onSelect = this.onSelect.bind(this);
      this.onUnselect = this.onUnselect.bind(this);
      this.onSelectPanel = this.onSelectPanel.bind(this);
    }
    onSelect(selectionCard: any) {
      // TOOO: change to SelectionCard
      if (this.props.options.type === SelectionPanelType.SINGLE) {
        this.setState({ selected: [selectionCard] }, this.onSelectPanel);
      } else {
        // Multi
        const list = this.state.selected.slice();
        if (list.includes(selectionCard)) {
          // remove
          const removeIndex = list.findIndex(
            (item: any) => item.id === selectionCard.id,
          );
          this.setState(
            {
              selected: [
                ...list.slice(0, removeIndex),
                ...list.slice(removeIndex + 1),
              ],
            },
            this.onSelectPanel,
          );
        } else {
          // add
          this.setState(
            { selected: [...list, selectionCard] },
            this.onSelectPanel,
          );
        }
      }
    }

    onUnselect(selectionCard: any) {
      this.setState({ selected: [] });
    }

    onSelectPanel() {
      this.props.events.onSelect(this.state.selected);
    }
    render() {
      const data = {
        ...this.props.data,
        selected: this.state.selected || null,
      };
      const injectedProps = {
        options: this.props.options,
        events: { onSelect: this.onSelect, onUnselect: this.onUnselect },
        data,
      };
      return <WrappedComponentWithCards {...injectedProps} />;
    }
  };
};
export default SelectionPanel;
