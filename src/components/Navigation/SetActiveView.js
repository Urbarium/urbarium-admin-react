import { Component } from 'react';
import {
  withNavigationViewController,
} from "@atlaskit/navigation-next";

class SetActiveViewBase extends Component<{id: string,navigationViewController: *,}> {
  componentDidMount() {
    const { id, navigationViewController } = this.props;
    const { containerViewId, productViewId } = navigationViewController.state;
    if (id !== containerViewId && id !== productViewId) {
      navigationViewController.setView(id);
    }
  }
  render() {
    return null;
  }
}

export default withNavigationViewController(SetActiveViewBase);
