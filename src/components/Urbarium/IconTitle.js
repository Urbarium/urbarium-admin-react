import React from 'react';
import styled from 'styled-components';
import PersonIcon from '@atlaskit/icon/glyph/invite-team';
import PhoneIcon from '@atlaskit/icon/glyph/hipchat/dial-out';
import MapIcon from '@atlaskit/icon/glyph/location';
import CalendarIcon from '@atlaskit/icon/glyph/calendar';
import Label from './Label';
import { Row } from 'components/Structural/index';
import { IconTitleStyle as style } from './urbarium-styles';


const TitleLabel = styled(Label)`
  font-size: ${style.label.fontSize};
  font-weight: ${style.label.fontWeight};
  color: ${style.label.color};
`;

const getIcon = (logoName) => {
  switch (logoName) {
  case "phone": return PhoneIcon;
  case "map": return MapIcon;
  case "person": return PersonIcon;
  case "calendar": return CalendarIcon;
  default: return null;
  }
};

export default ({ icon, children }) => {
  const Icon = getIcon(icon);
  return (
    <Row gap={10} justify="start" align="center">
      {Icon
        ? <Icon primaryColor={style.icon.color} size={style.icon.size} />
        : null
      }
      <TitleLabel>{children}</TitleLabel>
    </Row>
  );
};
