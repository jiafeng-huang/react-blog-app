import { useState, useEffect, useMemo } from 'react'
import BlogCard from '../components/BlogCard'
import CategoryFilter from '../components/CategoryFilter'
import { usePosts } from '../hooks/usePosts'

function HomePage() {
  const {
	isLoading, error,
	activeCategory, setActiveCategory,
	keyword, setKeyword,
	categories,
	filteredArticles,
	refetch
  } = usePosts()

	if (isLoading) return <p className="status-msg">加载中...</p>
	
	if (error) return (
	  <div className="status-msg error">
		<p>加载失败：{error}</p>
		<button onClick={refetch}>重试</button>
	  </div>
	)

  return (
    <div>
      <h2 className="section-title">最新文章</h2>

      {/* 搜索框 */}
      <div className="search-bar">
        <input
          type="text"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          placeholder="搜索文章标题或摘要..."
          className="search-input"
        />
        {keyword && (
          <span className="clear-btn" onClick={() => setKeyword('')}>✕</span>
        )}
      </div>

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
	  
      <p className="result-info">
        共 {filteredArticles.length} 篇
        {keyword && `，搜索「${keyword}」`}
      </p>
	  
      {filteredArticles.length === 0 ? (
        <p className="empty-tip">没有找到匹配的文章</p>
      ) : (
        <div className="article-grid">
          {filteredArticles.map(article => (
            <BlogCard key={article.id} {...article} />
          ))}
        </div>
      )}
    </div>
  )
}

export default HomePage