import { useParams, Link } from 'react-router-dom'
import { useMemo } from 'react'
import { usePosts } from '../hooks/usePosts'

function PostPage() {
  const { id } = useParams()
  
  const { isLoading, error, getArticleById } = usePosts()
    const article = getArticleById(id)
  
    if (isLoading) return <p className="status-msg">加载中...</p>
	
    if (error) return <p className="status-msg error">加载失败：{error}</p>
  
    if (!article) {
      return (
        <div className="not-found">
          <h2>文章不存在</h2>
          <Link to="/">返回首页</Link>
        </div>
      )
    }

  // 文章存在
  return (
    <article className="post-view">
      <span className="category-tag">{article.category}</span>
      <h1>{article.title}</h1>
      <time>{article.date}</time>
      {/* dangerouslySetInnerHTML 等价于 Vue 的 v-html，注意 XSS 风险 */}
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      <Link to="/" className="back-link">← 返回首页</Link>
    </article>
  )
}

export default PostPage