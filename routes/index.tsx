import React, { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import QuizLayout from "../layouts/QuizLayout/QuizLayout";
import { Spinner } from "../components/Spinner/Spinner";
import ErrorAlert from "../components/ErrorAlert/Alert";
import Component from '/mainComponent'

const Routes = (): ReactElement => {
  return (
    <>
      <Switch>
        <Route exact path={['url', 'url', 'url']}>
          <QuizLayout>
            <Switch>
              <Route path={'url'} component={Component} />
              <Route path={'url'} component={Component} />
              <Route path={'url'} component={Component} />
            </Switch>
          </QuizLayout>
        </Route>
        <Route exact path={['url', 'url']}>
          <HomeLayout>
            <Switch>
              <Route path={'url'} component={Component} />
              <Route path={'url'} component={Component} />
            </Switch>
          </HomeLayout>
        </Route>
        <Route exact path={'url'} component={Component} />
      </Switch>
      <Spinner />
      <ErrorAlert />
    </>
  );
};

export default Routes;
