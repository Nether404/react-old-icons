import React, { useState, useMemo } from 'react'
import { iconMetadata } from './index'
import OldIcon from './OldIcon'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSize, setSelectedSize] = useState(32)
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Get all available categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(iconMetadata.map(icon => icon.category))].sort()
    return cats
  }, [])

  const filteredIcons = useMemo(() => {
    return iconMetadata.filter(icon => {
      const matchesSearch = icon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           icon.filename.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || icon.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const iconsByCategory = useMemo(() => {
    const grouped = iconMetadata.reduce((acc, icon) => {
      if (!acc[icon.category]) acc[icon.category] = 0
      acc[icon.category]++
      return acc
    }, {} as Record<string, number>)
    return grouped
  }, [])

  const handleCopyCode = (iconName: string) => {
    const code = `<${iconName} size={${selectedSize}} />`
    navigator.clipboard.writeText(code).then(() => {
      // Could add a toast notification here
    })
  }

  const handleCopyImport = (iconName: string) => {
    const importCode = `import { ${iconName} } from 'react-old-icons';`
    navigator.clipboard.writeText(importCode).then(() => {
      // Could add a toast notification here
    })
  }

  const displayedIcons = useMemo(() => {
    // Limit to first 100 icons for performance, with pagination later
    return filteredIcons.slice(0, 100)
  }, [filteredIcons])

  const totalIcons = iconMetadata.length
  const displayedCount = displayedIcons.length
  const hasMore = filteredIcons.length > displayedCount
    )
  }, [searchTerm])

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>🪟 React Old Icons</h1>
          <p>A comprehensive collection of {totalIcons.toLocaleString()} classic icons from vintage operating systems and software</p>
          
          <div className="controls">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search icons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="category-container">
              <label htmlFor="category-select">Category:</label>
              <select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="category-select"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category} {category !== 'All' ? `(${iconsByCategory[category] || 0})` : `(${totalIcons})`}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="size-container">
              <label htmlFor="size-select">Size:</label>
              <select
                id="size-select"
                value={selectedSize}
                onChange={(e) => setSelectedSize(Number(e.target.value))}
                className="size-select"
              >
                <option value={16}>16px</option>
                <option value={24}>24px</option>
                <option value={32}>32px</option>
                <option value={48}>48px</option>
                <option value={64}>64px</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="stats">
          <p>
            Showing {displayedCount.toLocaleString()} of {filteredIcons.length.toLocaleString()} icons
            {hasMore && <span className="load-more-hint"> (showing first 100 for performance)</span>}
          </p>
        </div>

        <div className="icon-grid">
          {displayedIcons.map((icon) => (
            <div key={icon.name} className="icon-card">
              <div className="icon-container">
                <OldIcon 
                  name={icon.filename} 
                  size={selectedSize}
                  alt={icon.name}
                />
              </div>
              <div className="icon-info">
                <div className="icon-name">{icon.name}</div>
                <div className="icon-category">{icon.category}</div>
              </div>
              <div className="icon-actions">
                <button 
                  className="copy-btn"
                  onClick={() => handleCopyCode(icon.name)}
                  title="Copy component usage"
                >
                  Copy Usage
                </button>
                <button 
                  className="copy-btn"
                  onClick={() => handleCopyImport(icon.name)}
                  title="Copy import statement"
                >
                  Copy Import
                </button>
              </div>
            </div>
          ))}
        </div>

        {displayedIcons.length === 0 && (
          <div className="no-results">
            <p>No icons found matching "{searchTerm}"</p>
            <p>Try searching for terms like "Windows", "Office", "Game", "Browser", or change the category filter</p>
          </div>
        )}

        {hasMore && (
          <div className="load-more">
            <p>Showing first 100 results for performance. Use search and category filters to find specific icons.</p>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>
          This library preserves digital history with {totalIcons.toLocaleString()} classic icons from the golden age of computing.
          <br />
          Icons are property of their respective companies and used for historical preservation.
        </p>
      </footer>
    </div>
  )
}

export default App