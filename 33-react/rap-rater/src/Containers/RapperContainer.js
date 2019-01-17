import React from "react";
import RapperCard from "../Components/RapperCard";
import { Route, Switch } from "react-router-dom";

class RapperContainer extends React.Component {
  render() {
    const rapArray = this.props.rapperList.map(rapper => (
      <RapperCard
        key={rapper.name}
        rapper={rapper}
        clickHandler={this.props.clickHandler}
        deleteHandler={this.props.deleteHandler}
      />
    ));
    return (
      <div>
        <Switch>
          <Route
            path="/rappers/:name"
            render={routerProps => {
              let rapperName = routerProps.match.params.name;
              let rapper = this.props.rapperList.find(rapper =>
                rapper.name.includes(rapperName)
              );
              return (
                <RapperCard
                  rapper={rapper}
                  clickHandler={this.props.clickHandler}
                  deleteHandler={this.props.deleteHandler}
                />
              );
            }}
          />
          <Route
            path="/rappers"
            render={() => {
              return <div>{rapArray}</div>;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default RapperContainer;
