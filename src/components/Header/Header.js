import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from '../Header/Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import Search from '../Search/SearchContainer';
import {settings} from '../../data/dataStore';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.link} to='/'>
              <Icon name={settings.defaultLogoIcon}></Icon>
            </Link>
            <Search/>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;