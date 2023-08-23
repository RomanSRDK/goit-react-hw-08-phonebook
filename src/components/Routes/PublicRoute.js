import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import React from 'react';
import { Navigate } from 'react-router';
import authorizationSelectors from 'redux/authorization/authorization-selectors';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/contacts',
}) {
  const isLoggedIn = useSelector(authorizationSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : children}</>;
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
  restricted: PropTypes.bool,
  redirectTo: PropTypes.string,
};
