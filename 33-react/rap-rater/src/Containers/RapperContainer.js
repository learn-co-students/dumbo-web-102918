import React from "react";
import RapperCard from "../Components/RapperCard";
import { Route, Switch, withRouter } from "react-router-dom";

const RapperContainer = props => {
  const rapArray = props.rapperList.map(rapper => (
    <RapperCard
      key={rapper.name}
      rapper={rapper}
      clickHandler={props.clickHandler}
      deleteHandler={props.deleteHandler}
    />
  ));
  return (
    <div>
      {/*Why use Switch? Because we want the RapperContainer to be responsible for any paths attached to the /rapper index.*/}
      <Switch>
        <Route
          //Similar to writing a function and giving an argument. i.e. const func = (argument) => {}
          //User will give you an argument after "/rappers", take whatever argument the user typed in and save it as a key:value pairing with the key being equal to the string the user typed in
          path="/rappers/:name"
          render={routerProps => {
            console.log("router props", routerProps);
            //Recieve props from Route, find the rapper's name by going into the Route's props and finding the name that was entered into the URL
            //Something to note: the only reason we can find the name using "match.params.name" is because in our path we use ":name". For example, if in our path we had our dynamic route written as :butt we would have to find the rapper's name by calling "match.params.butt". You're welcome Skyler
            let rapperName = routerProps.match.params.name;
            //use that name and find the rapper in our rapperList who has that name
            let rapper = props.rapperList.find(rapper =>
              rapper.name.includes(rapperName)
            );
            console.log("rapper", rapper);
            console.log("rapper list", props.rapperList);
            //Return a <RapperCard /> who's "rapper" prop evaluates to the rapper who's name matched the name entered in our URL
            return (
              <RapperCard
                rapper={rapper}
                clickHandler={props.clickHandler}
                deleteHandler={props.deleteHandler}
              />
            );
          }}
        />
        {/*If router matches "/rappers" simply render our array of <RapperCard/>'s */}
        <Route
          path="/rappers"
          render={() => {
            return <div>{rapArray}</div>;
          }}
        />
      </Switch>
    </div>
  );
};

export default RapperContainer;
