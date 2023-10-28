import React from 'react'
import styles from './NewsCard.module.css'
import { NewsCardProps } from './NewsCard.interface'

const NewsCard: React.FC<NewsCardProps> = ({ id, title, content, image, publishDate }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
      <p className={styles.date}>Published on: {publishDate}</p>
      <a href='#' className={styles.read_more}>Read more</a>
    </div>
  )
}

export default NewsCard