import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NewsListProps } from '../../../components/NewsList/NewsList.interface';
import { NewsCardPropsCommentsType } from 'components/NewsCard/NewsCard.interface';
import styles from '../styles/NewsStyles.module.css'

const NewsPage: React.FC<NewsListProps> = ({ news }) => {
  debugger
  const { id } = useParams();
  const articleId = Number(id)


  const [comments, setComments] = useState<Array<NewsCardPropsCommentsType> | undefined>([])

  useEffect(() => {
    setComments(news[articleId - 1].comments)
  }, [])


  if (isNaN(articleId)) {
    console.log('Parameter error');
  }

  const article = news.find((item) => item.id === articleId)

  if (!article) {
    console.log('Article not found');
  }

  return (
    <div>
      <h1>{article?.title}</h1>
      <div>
        <img src={article?.image} alt={article?.title} />
      </div>
      <div>
        <p>{article?.content}</p>
        <span>{article?.publishDate}</span>
      </div>
      <div className={styles.comment_overlay}>
        <div className={styles.comment_title}>
          Comments
        </div>

        <div className={styles.comment_part}>
          {
            comments?.map((val) => {
              return (
                <div>
                  <CommentItem info={val} />
                  <div className={styles.comment_part_in_comment}>
                    {
                      val.replay?.map((val1) => {
                        return (
                          <CommentItem info={val1} />
                        )
                      })
                    }
                  </div>
                  <div className={styles.comment_btn}>
                    <button>Reply</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

const CommentItem: React.FC<OwnProps> = ({ info }) => {

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

type OwnProps = {
  info: NewsCardPropsCommentsType
}

export default NewsPage