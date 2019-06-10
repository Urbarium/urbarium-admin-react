import React from 'react';
import styled from 'styled-components';
import { primary, secondary, neutral } from '../../colors';
import fonts from '../../fonts';
import Label from './Label';
import Arrow from './ButtonArrow';
import ButtonState from './ButtonState';
import { Row } from '../Structural/index';
import { isArray } from 'util';

const Frame = styled.div`
    border: 1px ${secondary.lightgray} solid;
    border-radius: 15px;
    padding: 15px 25px;
    margin: 5px 0px;
    max-width: 800px;
`;

const Flex = styled.div`
    display: flex;
    flex-direction: row;
`;

const GridBody = styled.div`
    padding: 15px 25px;
    padding-bottom: 0px;
    display: grid;
    grid-template-columns: ${props => props.columns};
    overflow: hidden;
    max-height: 0px;
    //transition: max-height 0.5s ease-in-out;
    
    &[data-opened=true] {
        max-height: 800px;
    }
`;

const GridHeader = styled.div`
    display: grid;
    grid-template-columns: 5fr 2fr 2fr 2fr  2fr 0.5fr;
    align-items: center;
    justify-content: space-between;
`

const childrenFont = {
  inputFont : `${fonts.defaultAccordionInput} color: ${primary.passive};`,
  labelFont : `${fonts.defaultAccordionLabel} color: ${neutral.black};`
}
const labelFont = `
    ${fonts.accLabel}
    color: ${primary.passive}
`;

class AccordionItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      opened: false,
    };
  };

  insertProps(children) {
    if (children) {
      if (isArray(children)) {
        return children.map((child) => React.cloneElement(child, {...childrenFont}))
      } else {
        return React.cloneElement(children, {...childrenFont})
      }
    };
  };

  handleClick() {
    this.setState((prev, props) => ({opened: !prev.opened}));
  };

  render() {
    const data = this.props.data
    return(
      <Frame>
        <GridHeader>
          <Flex>
            <Label color={primary.primary}>{this.props.index+'.'}</Label>
            <Label>{this.props.title}</Label>
          </Flex>
          <Label font={labelFont}>{data.startDate}</Label>
          <Label font={labelFont}>{data.endDate}</Label>
          <Label font={labelFont}>{data.user}</Label>
          <ButtonState state={data.state}/>
          <Arrow onClick={() => this.handleClick()} />
        </GridHeader>
        <GridBody columns={this.props.columns} data-opened={this.state.opened}>
          {this.insertProps(this.props.children)}
        </GridBody>        
      </Frame>
    );
  };
};

AccordionItem.defaultProps = {
  columns: "1fr",
  index: 0,
  title: "Titulo",
  data: {
    startDate: "-",
    endDate: "-",
    user: "-",
    state: 1
  }
};

export default AccordionItem;
