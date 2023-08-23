import { useSelector } from 'react-redux';
import React from 'react';
import { Navigate } from 'react-router';
import authorizationSelectors from 'redux/authorization/authorization-selectors';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(authorizationSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : children}</>;
}
