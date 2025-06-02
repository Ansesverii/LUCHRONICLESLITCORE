// src/components/ArticlesList.jsx
import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

export default function ArticlesList() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticles()
  }, [])

  async function fetchArticles() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false })

      if (error) throw error
      setArticles(data || [])
    } catch (error) {
      console.error('Error fetching articles:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading articles...</div>

  return (
    <div className="articles-container">
      <h2>Latest Articles</h2>
      {articles.length === 0 ? (
        <p>No articles found</p>
      ) : (
        <div className="articles-grid">
          {articles.map(article => (
            <div key={article.id} className="article-card">
              {article.image_url && (
                <img 
                  src={article.image_url} 
                  alt={article.title} 
                  className="article-image"
                />
              )}
              <h3>{article.title}</h3>
              <p>{article.content.substring(0, 150)}...</p>
              <small>Published: {new Date(article.created_at).toLocaleDateString()}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
