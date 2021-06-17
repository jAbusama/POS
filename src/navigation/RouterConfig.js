import { Switch, Route } from 'react-router-dom';
import routes from './Routes';
import { NotFound } from './NotFound';

export const RouterConfig = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route {...route} />
      ))}
      <Route path='*' component={NotFound} />
    </Switch>
  );
};
