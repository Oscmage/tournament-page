import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { getUserFromStorage } from "../helpers/LocalStorage";

class PrivateRoute extends React.Component<
  { component: any; path: string; componentProps?: any },
  any
> {
  public render() {
    const Component = this.props.component;
    const user = getUserFromStorage();

    if (user) {
      return <Route path={this.props.path} component={Component} />;
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default PrivateRoute;
