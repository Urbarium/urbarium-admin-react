import React from 'react';
import styled from 'styled-components';
import { isArray } from 'util';
import { primary, secondary, neutral } from '../../colors';
import fonts from '../../fonts';
import Label from './Label';
import Arrow from './ButtonArrow';
import ButtonState from './ButtonState';
import { Row as AccordionHeader } from '../Structural/index';

const AccordionFrame = styled.div`
    border: 1px ${secondary.lightgray} solid;
    border-radius: 15px;
    padding: 15px 25px;
    max-width: 850px;
`;

const Flex = styled.div`
    display: flex;
    flex-direction: row;
`;

const AccordionContent = styled.div`    
    display: grid;
    grid-template-columns: ${props => props.columns};
    overflow: hidden;
    max-height: 0px;
    //transition: max-height 0.5s ease;

    &[data-opened=true] {
        max-height: 100%;
        padding: 15px 25px;
        padding-bottom: 0px;
    }
`;

const childrenFont = {
  inputFont: `${fonts.defaultAccordionInput} color: ${primary.passive};`,
  labelFont: `${fonts.defaultAccordionLabel} color: ${neutral.black};`,
};
const labelFont = `
    ${fonts.accLabel}
    color: ${primary.passive}
`;

const insertProps = (children) => {
  let childrenWithProps;
  if (children) {
    if (isArray(children)) {
      childrenWithProps = children.map(child => React.cloneElement(child, { ...childrenFont }));
    } else {
      childrenWithProps = React.cloneElement(children, { ...childrenFont });
    }
  }
  return childrenWithProps;
};


class AccordionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
  }

  handleClick() {
    this.setState(prev => ({ opened: !prev.opened }));
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
      <AccordionFrame>
        <AccordionHeader columns="5fr 2fr 2fr 2fr 2fr 0.5fr">
          <Flex>
            <Label color={primary.primary}>{`${index}.`}</Label>
            <Label>{title}</Label>
          </Flex>
          <Label font={labelFont}>{startDate}</Label>
          <Label font={labelFont}>{endDate}</Label>
          <Label font={labelFont}>{user}</Label>
          <ButtonState data={state} />
          { children
            ? <Arrow onClick={() => this.handleClick()} />
            : null
          }
        </AccordionHeader>
        <AccordionContent columns={columns} data-opened={opened}>
          {insertProps(children)}
        </AccordionContent>
      </AccordionFrame>
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
    state: 0,
  },
};

export default AccordionItem;
