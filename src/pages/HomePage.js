import React from 'react';
import {
  VictoryChart, VictoryLine, VictoryPie, VictoryArea,
} from "victory";
import Page, { Grid, GridColumn } from '@atlaskit/page';
import ContentWrapper from 'components/ContentWrapper';
import PageTitle from 'components/PageTitle';

const HomePage = () => (
  <ContentWrapper>
    <PageTitle>Analytics</PageTitle>
    <Page>
      <Grid>
        <GridColumn medium={6}>
          <VictoryChart>
            <VictoryArea />
          </VictoryChart>
        </GridColumn>
        <GridColumn medium={6}>
          <VictoryChart>
            <VictoryPie data={[{ x: 1, y: 35 }, { x: 2, y: 100 - 35 }]} />
          </VictoryChart>
        </GridColumn>
      </Grid>
      <Grid>
        <GridColumn medium={12}>
          <VictoryChart>
            <VictoryLine />
          </VictoryChart>
        </GridColumn>
      </Grid>
    </Page>
  </ContentWrapper>
);

export default HomePage;
