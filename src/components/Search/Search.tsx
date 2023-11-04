import React, { useState } from 'react'
import styles from './Search.module.css'
import { Item, SearchProps } from './Search.interface'

// useEffect
// useRef

const Search: React.FC<SearchProps> = ({ items }) => {

  const [searchText, setSearchText] = useState<string>('')
  const [filtredItems, setFiltredItems] = useState<Item[]>([])

  const handleSearch = (text: string): void => {
    const filtred: Item[] = items.filter((item) => {
      return item.text.toLowerCase().includes(text.toLowerCase())
    }).sort((a, b) => b.rating - a.rating)

    setFiltredItems(filtred)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const text = event.target.value
    setSearchText(text)
    handleSearch(text)
  }

  const handleSelectItem = (item: Item): void => {
    setSearchText(item.text)
    setFiltredItems([])
  }

  return (
    <div className={styles.searchBox}>
      <input
        type='text'
        placeholder='Search...'
        className={styles.input}
        onChange={handleInputChange}
        value={searchText}
      />

      <ul className={styles.list}>
        {
          filtredItems.map((item) => {
            return (
              <li key={item.text} onClick={() => handleSelectItem(item)}>
                {item.text} / {item.rating}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Search