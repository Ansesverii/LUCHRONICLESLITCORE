import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('articles');
  const navigate = useNavigate();

  // Check if user is authenticated with Supabase
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          navigate('/admin');
          return;
        }
        
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Auth check error:', error);
        navigate('/admin');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/admin');
    } catch (error) {
      console.error('Logout error:', error);
      // Force navigation even if signOut fails
      navigate('/admin');
    }
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const tabStyle = {
    padding: '0.5rem 1rem',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
    marginRight: '1rem'
  };

  const activeTabStyle = {
    ...tabStyle,
    borderBottom: '2px solid #007bff',
    color: '#007bff'
  };

  const cardStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '1.5rem',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#000',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.875rem'
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '2rem',
        paddingBottom: '1.5rem',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>
          Admin Dashboard
        </h1>
        <button 
          style={{
            ...buttonStyle,
            backgroundColor: 'white',
            color: '#000',
            border: '1px solid #ccc'
          }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ borderBottom: '1px solid #e0e0e0', marginBottom: '1.5rem' }}>
          <button
            style={activeTab === 'articles' ? activeTabStyle : tabStyle}
            onClick={() => setActiveTab('articles')}
          >
            Articles
          </button>
          <button
            style={activeTab === 'authors' ? activeTabStyle : tabStyle}
            onClick={() => setActiveTab('authors')}
          >
            Authors
          </button>
          <button
            style={activeTab === 'categories' ? activeTabStyle : tabStyle}
            onClick={() => setActiveTab('categories')}
          >
            Categories
          </button>
          <button
            style={activeTab === 'settings' ? activeTabStyle : tabStyle}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>

        {activeTab === 'articles' && (
          <div style={cardStyle}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Manage Articles
            </h2>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>
              This would be where articles can be created, edited, and deleted. In a fully implemented system, 
              you would see a table of articles with management options.
            </p>
            <button style={buttonStyle}>
              Create New Article
            </button>
          </div>
        )}

        {activeTab === 'authors' && (
          <div style={cardStyle}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Manage Authors
            </h2>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>
              This would be where author profiles can be created and managed. In a fully implemented system, 
              you would see a list of authors with management options.
            </p>
            <button style={buttonStyle}>
              Add New Author
            </button>
          </div>
        )}

        {activeTab === 'categories' && (
          <div style={cardStyle}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Manage Categories
            </h2>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>
              This would be where content categories can be created and managed. In a fully implemented system, 
              you would see a list of categories with management options.
            </p>
            <button style={buttonStyle}>
              Add New Category
            </button>
          </div>
        )}

        {activeTab === 'settings' && (
          <div style={cardStyle}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Website Settings
            </h2>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>
              This would be where general website settings can be adjusted. In a fully implemented system, 
              you would see forms for updating various site configurations.
            </p>
            <button style={buttonStyle}>
              Save Changes
            </button>
          </div>
        )}
      </div>

      <div style={{
        marginTop: '2rem',
        padding: '1.5rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Admin Dashboard Demo
        </h2>
        <p style={{ color: '#666', margin: 0 }}>
          This is a simplified demonstration of an admin dashboard. In a full implementation, 
          this would provide comprehensive content management functionality.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
