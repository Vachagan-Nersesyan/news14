import React from 'react'
import styles from './Comments.module.css'
import { NewsCardPropsCommentsType } from 'components/NewsCard/NewsCard.interface'

const Comments: React.FC<OwnProps> = ({ info }) => {
  return (
    <div className={styles.comment_content_ovrl}>
      <div className={styles.comment_content_in_item_1}>
        <img src={info.author.image} />
      </div>
      <div className={styles.comment_content_in_item_2}>
        <div className={styles.comment_content_in_item_2_1_item}>
          <span>{info.author.name}</span>
          <span>{info.date}</span>
        </div>
        <div className={styles.comment_content_in_item_2_2_item}>
          {info.text}
        </div>
      </div>
    </div>
  )
}

export default Comments


type OwnProps = {
  info: NewsCardPropsCommentsType
}