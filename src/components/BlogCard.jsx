import { Link } from 'react-router-dom'

function BlogCard({ id, title, summary, date, category }) {
  return (
    <Link to={`/post/${id}`} className="card-link">
      <div className="card">
        <span className="tag">{category}</span>
        <h3>{title}</h3>
        <p>{summary}</p>
        <span className="date">{date}</span>
      </div>
    </Link>
  )
}

export default BlogCard