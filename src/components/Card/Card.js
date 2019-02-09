import React, { Component } from 'react'
import { N0 } from '@atlaskit/theme/dist/cjs/colors';

class Card extends Component {

  let classes = {
    backgroundColor: N0,
    padding: 20,
    borderRadius: 5,
    marginTop: 50
  }

  render() {
    return (
      <div style={{backgroundColor: N0, padding: 20, borderRadius: 5, marginTop: 50}} >
        {children}
      </div>
    )
  }
}

export default Card