import { Fragment } from 'react';
import { MainContainer } from '../styles/pages/Layout';
import Meta from './Meta';

export default function Layout({ children }) {
  return (
    <Fragment>
      <Meta />
      <MainContainer>{children}</MainContainer>
    </Fragment>
  )
}