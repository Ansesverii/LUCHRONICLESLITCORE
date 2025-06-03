// src/components/AdminDashboard.jsx
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import ArticleForm from './ArticleForm'

export default function AdminDashboard() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [showForm, setShowForm] = useState(false)
  
  useEffect(() => {
    fetchArticles()
  }, [])
  
  async function fetchArticles() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false })
        
      if (error) throw error
      setArticles(data || [])
    } catch (error) {
      console.error('Error fetching articles:', error)
    } finally {
      setLoading(false)
    }
  }
  
  async function deleteArticle(id) {
    if (!confirm('Are you sure you want to delete this article?')) return
    
    try {
      const { error } = await supabase
        .from('articles')
        .delete()
        .eq('id', id)
        
      if (error) throw error
      
      // Refresh the list
      fetchArticles()
    } catch (error) {
      console.error('Error deleting article:', error)
    }
  }
  
  function handleEdit(article) {
    setSelectedArticle(article)
    setShowForm(true)
  }
  
  function handleSuccess() {
    fetchArticles()
    setShowForm(false)
    setSelectedArticle(null)
  }
  
  if (loading) return <div>Loading dashboard...</div>
  
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      
      {showForm ? (
        <div>
          <button onClick={() => {
            setShowForm(false)
            setSelectedArticle(null)
          }}>
            Back to Articles
          </button>
          <ArticleForm 
            article={selectedArticle} 
            onSuccess={handleSuccess} 
          />
        </div>
      ) : (
        <div>
          <button onClick={() => setShowForm(true)}>Create New Article</button>
          
          <h3>All Articles</h3>
          <table className="articles-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.length === 0 ? (
                <tr>
                  <td colSpan="4">No articles found</td>
                </tr>
              ) : (
                articles.map(article => (
                  <tr key={article.id}>
                    <td>{article.title}</td>
                    <td>{article.status}</td>
                    <td>{new Date(article.created_at).toLocaleDateString()}</td>
                    <td>
                      <button onClick={() => handleEdit(article)}>Edit</button>
                      <button onClick={() => deleteArticle(article.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
