import { Fragment } from 'react';
import Meta from './Meta';

export default function Layout({ children }) {
  return (
    <Fragment>
      <Meta />
      
      <div>{children}</div>
    </Fragment>
  )
}