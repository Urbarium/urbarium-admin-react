import React from 'react';
import styled from 'styled-components';
import PersonIcon from '@atlaskit/icon/glyph/invite-team';
import PhoneIcon from '@atlaskit/icon/glyph/hipchat/dial-out';
import MapIcon from '@atlaskit/icon/glyph/location';
import Label from './Label';
import { Row } from '../Structural/index';
import { IconTitleStyle as style } from './urbarium-theme';


const TitleLabel = styled(Label)`
  font-size: ${style.label.fontSize};
  font-weight: ${style.label.fontWeight};
  color: ${style.label.color};
`;

const getIcon = (logoName) => {
  let icon;
  switch (logoName) {
  case "phone": icon = PhoneIcon; break;
  case "map": icon = MapIcon; break;
  case "person":
  default: icon = PersonIcon; break;
  }
  return icon;
};

export default ({ icon, children }) => {
  const Icon = getIcon(icon);
  return (
    <Row justify="start" align="center">
      <Icon primaryColor={style.icon.color} size={style.icon.size} />
      <TitleLabel>{children}</TitleLabel>
    </Row>
  );
};
