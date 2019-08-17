import React from 'react';
import { ConnectedLabeledInput as Input } from './LabeledInput';
import { Row } from 'components/Structural/index';

class DDG extends React.Component {
  constructor(props) {
    super(props);
    const { options } = this.props;
    this.count = options.length;
    const initDisables = Array(this.count).fill(true);
    initDisables[0] = false;
    const initSelectedIndexes = Array(this.count).fill(0);
    const initOptions = Array(this.count).fill(undefined);
    // eslint-disable-next-line prefer-destructuring
    initOptions[0] = options[0];
    const initData = Array(this.count).fill(undefined);
    this.selectedIndexes = initSelectedIndexes;
    this.initialData = initData;
    this.state = {
      disables: initDisables,
      options: initOptions,
    };
  }

  getDropdowns() {
    const result = Array(this.count).fill('');
    const data = this.initialData;
    const {
      placeholders,
      names,
      labels,
    } = this.props;
    const { options, disables } = this.state;
    return result.map((_, dropdownIndex) => (
      <Input
        type="dropdown"
        label={labels[dropdownIndex]}
        placeholder={placeholders[dropdownIndex]}
        name={names[dropdownIndex]}
        options={options[dropdownIndex]}
        disabled={disables[dropdownIndex]}
        changeHandler={optionIndex => this.handleChange(dropdownIndex, optionIndex)}
        data={data[dropdownIndex]}
      />
    ));
  }

  handleChange(dropdownIndex, optionIndex) {
    this.setState((prevState) => {
      // enable next dropdown in chain and disable others further down
      const newDisables = prevState.disables.map((_, index) => index > dropdownIndex + 1);

      // update selected indexes
      this.selectedIndexes.splice(dropdownIndex, 1, optionIndex);

      // update available options for each dropdown depending on selected indexes
      const { options } = this.props;
      const newOptions = prevState.options.map((element, index) => (
        (index < dropdownIndex ? element : this.accessRecursively(options[index], this.selectedIndexes, index))
      ));

      return { disables: newDisables, options: newOptions };
    });
  }

  accessRecursively(array, indexes, level, count = 0) {
    return count === level ? array : this.accessRecursively(array[indexes[count]], indexes, level, count + 1);
  }

  render() {
    return (
      <Row>
        {this.getDropdowns()}
      </Row>
    );
  }
}

const provincias = [
  { name: 'San José', value: 'san_jose' },
  { name: 'Alajuela', value: 'alajuela' },
  { name: 'Cartago', value: 'cartago' },
];

const cantones = [
  [
    { name: 'San José', value: 'san_jose' },
    { name: 'Desamparados', value: 'desamparados' },
  ],
  [
    { name: 'Alajuela', value: 'alajuela' },
    { name: 'San Ramon', value: 'san_ramon' },
  ],
  [
    { name: 'Cartago', value: 'cartago' },
    { name: 'Turrialba', value: 'turrialba' },
  ],
];

const distritos = [
  [
    [
      { name: 'Carmen', value: 'carmen' },
      { name: 'Merced', value: 'merced' },
    ],
    [
      { name: 'Desamparados', value: 'desamparados' },
      { name: 'San Miguel', value: 'san_miguel' },
    ],
  ],
  [
    [
      { name: 'Guácimo', value: 'guacimo' },
      { name: 'San Isidro', value: 'san_isidro' },
    ],
    [
      { name: 'Piedades Norte', value: 'piedades_norte' },
      { name: 'Piedades Sur', value: 'piedades_sur' },
    ],
  ],
  [
    [
      { name: 'Oriental', value: 'oriental' },
      { name: 'Occidental', value: 'occidental' },
      { name: 'Carmen', value: 'carmen' },
      { name: 'San Nicolás', value: 'san_nicolas' },
      { name: 'Agua Caliente', value: 'agua_caliente' },
      { name: 'Guadalupe', value: 'guadalupe' },
      { name: 'Corralillo', value: 'corralillo' },
      { name: 'Tierra Blanca', value: 'tierra_blanca' },
      { name: 'Dulce Nombre', value: 'dulce_nombre' },
      { name: 'Llano Grande', value: 'llano_grande' },
      { name: 'Quebradilla', value: 'quebradilla' },
    ],
    [
      { name: 'Santa Cruz', value: 'santa_cruz' },
      { name: 'Pavones', value: 'pavones' },
    ],
  ],
];

DDG.defaultProps = {
  options: [provincias, cantones, distritos],
  placeholders: [' ', ' ', ' '],
  names: ['linked_dropdown_1', 'linked_dropdown_2', 'linked_dropdown_3'],
  labels: [],
};

export default DDG;
