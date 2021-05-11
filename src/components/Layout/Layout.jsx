import React from 'react'
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav'
import classes from './Layout.module.scss';

const Layout = ({children}) => {
  return (
    <div>
   <Nav/>
   <div className={classes.container}>
    
   {children}
   </div>
   <Footer/>
   </div>
  )
}

export default Layout
