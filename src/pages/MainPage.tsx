import React from 'react'
import NewsList from '../components/NewsList'
import { NewsListProps } from '../components/NewsList/NewsList.interface'

const MainPage: React.FC<NewsListProps> = ({ news }) => {

  return (
    <div>
      <h1>Main Page</h1>
      <NewsList news={news} />
    </div>
  )
}

export default MainPage