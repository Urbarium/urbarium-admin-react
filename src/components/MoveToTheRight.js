import React from 'react'
import FlexView from 'react-flexview'

const moveToTheRight = (props) => (
  <FlexView style={ {marginTop: 20} }>
    <FlexView grow={1} />
    <FlexView>
      {props.children}
    </FlexView>
  </FlexView>
)

export default moveToTheRight