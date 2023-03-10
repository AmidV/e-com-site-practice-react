import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './navigation-bar.styles.scss';
import CrwnLogo from '../../assets/crown.svg';

const NavigationBar = () => {
  return (
    <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <img src={CrwnLogo} className='logo' alt='logo' />
            </Link>

            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    Shop
                </Link>
                <Link className='nav-link' to='/sign-in'>
                    Sign In
                </Link>
            </div>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default NavigationBar;