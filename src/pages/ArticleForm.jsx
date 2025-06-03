// src/components/ArticleForm.jsx
import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function ArticleForm({ article, onSuccess }) {
  const [title, setTitle] = useState(article?.title || '')
  const [content, setContent] = useState(article?.content || '')
  const [status, setStatus] = useState(article?.status || 'draft')
  const [imageFile, setImageFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  
  const isEditing = !!article

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    
    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('You must be logged in')
      
      let image_url = article?.image_url || null
      
      // Upload image if provided
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop()
        const fileName = `${Date.now()}.${fileExt}`
        const filePath = `${fileName}`
        
        const { error: uploadError } = await supabase.storage
          .from('article-images')
          .upload(filePath, imageFile)
          
        if (uploadError) throw uploadError
        
        const { data } = supabase.storage
          .from('article-images')
          .getPublicUrl(filePath)
          
        image_url = data.publicUrl
      }
      
      // Insert or update article
      if (isEditing) {
        // Update existing article
        const { error } = await supabase
          .from('articles')
          .update({
            title,
            content,
            status,
            image_url,
            updated_at: new Date()
          })
          .eq('id', article.id)
          
        if (error) throw error
        setMessage('Article updated successfully!')
      } else {
        // Insert new article
        const { error } = await supabase
          .from('articles')
          .insert([{
            title,
            content,
            status,
            author_id: user.id,
            image_url
          }])
          
        if (error) throw error
        setMessage('Article created successfully!')
        
        // Reset form after successful creation
        setTitle('')
        setContent('')
        setStatus('draft')
        setImageFile(null)
      }
      
      if (onSuccess) onSuccess()
    } catch (error) {
      setMessage(`Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="article-form">
      <h2>{isEditing ? 'Edit Article' : 'Create New Article'}</h2>
      {message && <div className={message.includes('Error') ? 'error' : 'success'}>{message}</div>}
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            required
          />
        </div>
        
        <div>
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
          {article?.image_url && !imageFile && (
            <div>
              <p>Current image:</p>
              <img 
                src={article.image_url} 
                alt="Current" 
                style={{ maxWidth: '200px' }} 
              />
            </div>
          )}
        </div>
        
        <div>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
        
        <button type="submit" disabled={loading}>
          {loading ? 'Saving...' : (isEditing ? 'Update Article' : 'Create Article')}
        </button>
      </form>
    </div>
  )
}
