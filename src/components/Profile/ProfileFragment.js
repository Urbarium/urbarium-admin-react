import React from 'react';
import styled from 'styled-components';
import Avatar from '@atlaskit/avatar';
import Page, { Grid, GridColumn } from '@atlaskit/page';

import { withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import ButtonWithLoading from 'components/ButtonWithLoading';

const enhance = connect(
  ({ firebase: { profile } }) => ({ profile }),
);

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  width: 100%;
  margin-top: 20px;
`;

const Subtitle = styled.div`
  width: 100%;
`;

const FullWidthFragment = styled.div`
  width: 100%;
  padding-top: 50px;
`;

const AvatarRow = ({ children }) => (
  <Grid>
    <GridColumn medium={3} />
    <GridColumn medium={6}>
      {children}
    </GridColumn>
    <GridColumn medium={3} />
  </Grid>
);

const PersonalInfoRow = ({ children }) => (
  <Grid>
    <GridColumn>
      {children}
    </GridColumn>
  </Grid>
);

const ActionsRow = ({ children }) => (
  <Grid>
    <GridColumn medium={8} />
    <GridColumn medium={4}>
      {children}
    </GridColumn>
  </Grid>
);

const ProfileFragment = ({ profile: { name, email, avatar }, firebase }) => (
  <FullWidthFragment>
    <Page>
      <AvatarRow>
        <Avatar src={avatar} size="xlarge" />
      </AvatarRow>
      <PersonalInfoRow>
        <Title>
          {name}
        </Title>
        <Subtitle>
          {email}
        </Subtitle>
      </PersonalInfoRow>
      <ActionsRow>
        <ButtonWithLoading onClick={() => firebase.logout()}>Logout</ButtonWithLoading>
      </ActionsRow>
    </Page>
  </FullWidthFragment>
);

export default enhance(withFirebase(ProfileFragment));
