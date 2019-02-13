import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button, { ButtonGroup } from '@atlaskit/button';
import MainSection from '../components/MainSection';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';

import { connect } from 'react-redux'

class HomePage extends Component {

  componentWillReceiveProps({ authExists }) {
    if (!authExists) {
      this.context.router.push('/login')
    }
  }

  render() {
    return (
      <ContentWrapper>
        <PageTitle>Home</PageTitle>
        <MainSection />
        <ButtonGroup>
          <Button
            appearance="primary"
            onClick={this.context.showModal}
            onClose={() => { }}
          >Click to view Atlaskit modal</Button>
          <Button onClick={this.context.addFlag}>click to view Atlaskit flag</Button>
        </ButtonGroup>
      </ContentWrapper>
    );
  }
}

HomePage.propTypes = {
  authExists: PropTypes.bool,
}

HomePage.contextTypes = {
  router: PropTypes.object.isRequired,
  showModal: PropTypes.func,
  addFlag: PropTypes.func,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  onClose: PropTypes.func,
}

export default connect(
  ({ firebase: { auth } }) => ({ authExists: !!auth && !!auth.uid })
)(HomePage)