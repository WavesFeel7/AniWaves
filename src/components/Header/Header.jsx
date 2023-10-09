import React, { useState } from 'react';
import Logo from '../../assets/images/Logo.svg';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  // Используем useState для отслеживания состояния burger-меню
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const handleBurgerClick = () => {
    // Изменяем состояние isBurgerActive при клике
    setIsBurgerActive(!isBurgerActive);
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.menu}>
            <Link className={styles.Logo} to={`/`}>
              <img src={Logo} alt="AniWaves" />
            </Link>
            <nav className={styles.menu_nav}>
              <Link to={`/`} className={styles.nav__link}>Новое</Link>
              <Link to="#" className={styles.nav__link}>Каталог</Link>
              <Link to="#" className={styles.nav__link}>Расписание</Link>
            </nav>
            <div className={`${styles.burger} ${isBurgerActive ? 'active' : ''}`} onClick={handleBurgerClick}>
              <span></span>
            </div>
            {/* Отображаем меню, если isBurgerActive равно true */}
            {isBurgerActive && (
              <nav className={styles.dropdown_menu}>
                <li>
                  <Link to={`/`} className={styles.dropdown__link}>Новое</Link>
                </li>
                <li>
                  <Link to="#" className={styles.dropdown__link}>Каталог</Link>
                </li>
                <li>
                  <Link to="#" className={styles.dropdown__link}>Расписание</Link>
                </li>
              </nav>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
