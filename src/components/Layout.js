import { Fragment } from 'react';
import logo from '../assets/logo.webp';
import Meta from './Meta';


export default function Layout({ children }) {
  return (
    <Fragment>
      <Meta />
      <img src={logo} alt="Logo" />
      <div>{children}</div>
    </Fragment>
  )
}