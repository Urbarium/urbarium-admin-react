import React from 'react';
import FlexView from 'react-flexview';

const moveToTheRight = (props) => {
  const { children } = props;
  return (
    <FlexView style={{ marginTop: 20 }}>
      <FlexView grow={1} />
      <FlexView>
        {children}
      </FlexView>
    </FlexView>
  );
};

export default moveToTheRight;
