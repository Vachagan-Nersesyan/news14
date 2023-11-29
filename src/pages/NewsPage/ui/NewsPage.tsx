import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NewsListProps } from '../../../components/NewsList/NewsList.interface';
import { NewsCardPropsCommentsType } from 'components/NewsCard/NewsCard.interface';
import styles from '../styles/NewsStyles.module.css'
import Comments from 'components/Comments';

const NewsPage: React.FC<NewsListProps> = ({ news }) => {

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
                  <Comments info={val} />
                  <div className={styles.comment_part_in_comment}>
                    {
                      val.replay?.map((val1) => {
                        return (
                          <Comments info={val1} />
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
        <div>
          <input type="text" />
          <button>Add reply</button>
        </div>
      </div>

    </div>
  )
}



export default NewsPage