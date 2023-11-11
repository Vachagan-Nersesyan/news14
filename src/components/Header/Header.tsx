import React, { useState } from 'react'
import styles from './Header.module.css'
import Search from 'components/Search'
import { HeaderProps } from 'components/Search/Search.interface'
import { Link } from 'react-router-dom'
import { FaSun } from "react-icons/fa6";
import useTheme from 'theme/useTheme'
import SignIn from 'components/SignIn'

const Header: React.FC<HeaderProps> = ({ items, user, handleSingOut }) => {
  const { toggleTheme } = useTheme();
  const [isUserMenuOpen, setUserMenuOpen] = useState<boolean>(false)

  const toggleUserMenu = (): void => {
    setUserMenuOpen(!isUserMenuOpen);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <ul className={styles.mainMenu}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>

        <Search items={items} />

        <button onClick={toggleTheme}><FaSun /></button>

        <div className={styles.userContainer}>
          {
            user ? (
              <>
              {
                user.photoURL ? (
                  <div onClick={toggleUserMenu}>
                    <p>{user.displayName}</p>
                    <img
                      src={user.photoURL}
                      alt="user name"
                      className={styles.userImage}
                    />
                  </div>
                ) : <div onClick={toggleUserMenu}>{user.displayName}</div>
              }
                

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
                          <button onClick={handleSingOut}>Sign Out</button>
                        </li>
                      </ul>
                    </div>
                  ) : null
                }
              </>
            ) : (
              <SignIn />
            )
          }
        </div>
      </nav>
    </header>
  )
}

export default Header