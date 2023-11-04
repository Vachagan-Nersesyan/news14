import React from 'react'
import styles from './NewsList.module.css'
import NewsCard from '../NewsCard'
import { NewsListProps } from './NewsList.interface'
import { NewsCardProps } from '../NewsCard/NewsCard.interface'

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  return (
    <div className={styles.list}>

      {
        news.map((item: NewsCardProps) => 
          <div className={styles.card} key={item.id}><NewsCard {...item} /></div>
        )
      }

    </div>
  )
}

export default NewsList