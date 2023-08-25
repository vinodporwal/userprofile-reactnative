import * as React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {roots} from '../../constants';

type Props = {
  root: string,
};

const AuthenticatedRoute: React.FC<Props> = (props: Props) => {
  const {root} = props;

  if (root === roots.INSIDE) {
    return <Outlet />;
  }

  return <Navigate to={'/'} />;
};

export default AuthenticatedRoute;
