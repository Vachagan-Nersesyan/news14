import React, { useState } from 'react'
import styles from './Header.module.css'
import Search from '../Search'
import { SearchProps } from '../Search/Search.interface'

const Header: React.FC<SearchProps> = ({ items }) => {
  const [isUserMenuOpen, setUserMenuOpen] = useState<boolean>(false)

  const toggleUserMenu = (): void => {
    setUserMenuOpen(!isUserMenuOpen);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <ul className={styles.mainMenu}>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>

        <Search items={items} />

        <div className={styles.userContainer}>
          <img
            src="https://avatars.githubusercontent.com/u/98681?v=4"
            alt="user name"
            className={styles.userImage}
            onClick={toggleUserMenu}
          />

          {
            isUserMenuOpen ? (
              <div className={styles.userMenu}>
                <ul>
                  <li>
                    <a href='#'>Profile</a>
                  </li>
                  <li>
                    <a href='#'>Settings</a>
                  </li>
                  <li>
                    <a href='#'>Sign Out</a>
                  </li>
                </ul>
              </div>
            ) : null
          }
        </div>
      </nav>
    </header>
  )
}

export default Header