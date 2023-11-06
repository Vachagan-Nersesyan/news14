import React from 'react'
import styles from './NewsCard.module.css'
import { NewsCardProps } from './NewsCard.interface'
import { Link } from 'react-router-dom'

const NewsCard: React.FC<NewsCardProps> = ({ id, title, content, image, publishDate }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
      <p className={styles.date}>Published on: {publishDate}</p>
      <Link to={`/article/${id}`} className={styles.read_more}>Read more</Link>
    </div>
  )
}

export default NewsCard