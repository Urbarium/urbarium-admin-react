import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MainSection from '../components/MainSection';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';

class HomePage extends Component {

  render() {
    return (
      <ContentWrapper>
        <PageTitle>Home</PageTitle>
        <MainSection />
      </ContentWrapper>
    );
  }
}

HomePage.contextTypes = {
  showModal: PropTypes.func,
  addFlag: PropTypes.func,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  onClose: PropTypes.func,
}

export default HomePage