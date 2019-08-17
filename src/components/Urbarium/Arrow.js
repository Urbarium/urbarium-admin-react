import React from 'react';
import styled from 'styled-components';
import { primary } from 'config/colors';

const Arrow = styled.div`
    background-color: ${props => props.color};
    width: 0px;
    height: 0px;
    position: relative;
    top: 50%;
    left: 50%;

    ::after{
        position: absolute;
        content: "";
        width: ${props => props.width}px;
        height: ${props => props.height}px;
        border-radius: ${props => props.height / 2}px;
        top: 50%;
        left: 50%;
        background-color: inherit;
        transform: translate(-88%, -50%) rotate(40deg);
    }

    ::before{
        position: absolute;
        content: "";
        width: ${props => props.width}px;
        height: ${props => props.height}px;
        border-radius: ${props => props.height / 2}px;
        top: 50%;
        right: 50%;
        background-color: inherit;
        transform: translate(88%, -50%) rotate(-40deg);
    }
`;

export default ({ width = 10, height = 2, color = primary.primary }) => (
  <Arrow width={width} height={height} color={color} />
);
