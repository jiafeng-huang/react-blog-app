import '../App.css'

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }) { 
    return (
        <div className="category-bar">
          {categories.map(cat => (
            <button
              key={cat}
              className={activeCategory === cat ? 'active' : ''}
              onClick={() => onCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
    )
}