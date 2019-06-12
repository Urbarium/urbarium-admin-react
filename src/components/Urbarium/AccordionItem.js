import React from 'react';
import styled from 'styled-components';
import { isArray } from 'util';
import { primary, secondary, neutral } from '../../colors';
import fonts from '../../fonts';
import Label from './Label';
import Arrow from './ButtonArrow';
import ButtonState from './ButtonState';

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
`;

const childrenFont = {
  inputFont: `${fonts.defaultAccordionInput} color: ${primary.passive};`,
  labelFont: `${fonts.defaultAccordionLabel} color: ${neutral.black};`,
};
const labelFont = `
    ${fonts.accLabel}
    color: ${primary.passive}
`;

class AccordionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
  }

  handleClick() {
    this.setState((prev, props) => ({ opened: !prev.opened }));
  }

  insertProps(children) {
    if (children) {
      if (isArray(children)) {
        return children.map(child => React.cloneElement(child, { ...childrenFont }));
      }
      return React.cloneElement(children, { ...childrenFont });
    }
  }

  render() {
    const {
      data, title, index, columns, children,
    } = this.props;
    const {
      startDate, endDate, user, state,
    } = data;
    const { opened } = this.state;
    return (
      <Frame>
        <GridHeader>
          <Flex>
            <Label color={primary.primary}>{`${index}.`}</Label>
            <Label>{title}</Label>
          </Flex>
          <Label font={labelFont}>{startDate}</Label>
          <Label font={labelFont}>{endDate}</Label>
          <Label font={labelFont}>{user}</Label>
          <ButtonState state={state} />
          <Arrow onClick={() => this.handleClick()} />
        </GridHeader>
        <GridBody columns={columns} data-opened={opened}>
          {this.insertProps(children)}
        </GridBody>
      </Frame>
    );
  }
}

AccordionItem.defaultProps = {
  columns: '1fr',
  index: 0,
  title: 'Titulo',
  data: {
    startDate: '-',
    endDate: '-',
    user: '-',
    state: 1,
  },
};

export default AccordionItem;
