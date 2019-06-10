import React from 'react';
import styled from 'styled-components';
import { primary, secondary } from '../../colors';
import fonts from '../../fonts';
import Arrow from './Arrow';

const DropDown = styled.select`
    ${props => props.font}
    box-sizing: border-box;
    width: 190px;
    height: 30px;
    border-radius: 15px;
    border: 1px ${secondary.lightgray} solid;
    padding-left: 15px;
    appearance: none;
    cursor: pointer;
    
    &[disabled] {
        cursor: default;
    }

    :focus {
        outline: none;
    }

    &[data-default=true] {
        color: ${primary.passive};
    }

    option {
        color: black;
    }
`;
const ArrowContainer = styled.div`
    width: 0px;
    height: 0px;
    position: relative;
    bottom: 15px;
    left: 170px;
 `

// have to turn this into a more complex react component, preloading data is not working 
class InputDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {default: !this.props.data};
  };

  handleOnChange(event) {     
    this.setState({default: false}); 
    // TODO: check setState above should be called or after the changeHandler which trigger the parent setState 
    const selectedIndex = this.props.options.indexOf(event.target.value);
    this.props.changeHandler(selectedIndex);
  }

  getOptions(options) {
    return options.map(option => <option value={option} key={option}>{option}</option>)
  }

  render() {
    const data = this.props.data;
    const options = this.props.options; 
    return(
      <div className="InputDropDown">
        {/* data-default is used as a data property to alter style using css selectors*/}
        <DropDown 
          data-default = {this.state.default} 
          defaultValue = {data ? options[data - 1] : this.props.placeholder} 
          font = {this.props.font}
          onChange = {(event) => this.handleOnChange(event)}
          disabled = {this.props.disabled}
        >
          {[<option hidden value="" key=" ">{this.props.placeholder}</option>, 
            ...this.getOptions(options)]}
        </DropDown>
        <ArrowContainer>
          <Arrow width={8} color={primary.primary}/>
        </ArrowContainer>
      </div>
    );
  };
};

InputDropDown.defaultProps = {
  placeholder: "",
  options: ["option 1"],
  data: undefined,
  font: fonts.defaultInput,
  changeHandler(){},
};

export default InputDropDown;