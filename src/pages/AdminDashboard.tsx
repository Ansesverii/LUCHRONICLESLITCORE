
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if user is authenticated
  useEffect(() => {
    const user = localStorage.getItem('adminUser');
    if (!user) {
      navigate('/admin');
      return;
    }
    setIsAuthenticated(true);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminUser');
    toast({
      title: "Logged out",
      description: "Successfully logged out from admin dashboard.",
    });
    navigate('/admin');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200">
        <h1 className="font-serif text-3xl font-bold">Admin Dashboard</h1>
        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </header>

      <Tabs defaultValue="articles" className="mb-8">
        <TabsList>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="authors">Authors</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="articles" className="mt-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Manage Articles</h2>
            <p className="text-gray-600 mb-6">
              This would be where articles can be created, edited, and deleted. In a fully implemented system, 
              you would see a table of articles with management options.
            </p>
            <Button className="bg-luChronicles-black hover:bg-luChronicles-darkGray">
              Create New Article
            </Button>
          </Card>
        </TabsContent>
        <TabsContent value="authors" className="mt-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Manage Authors</h2>
            <p className="text-gray-600 mb-6">
              This would be where author profiles can be created and managed. In a fully implemented system, 
              you would see a list of authors with management options.
            </p>
            <Button className="bg-luChronicles-black hover:bg-luChronicles-darkGray">
              Add New Author
            </Button>
          </Card>
        </TabsContent>
        <TabsContent value="categories" className="mt-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Manage Categories</h2>
            <p className="text-gray-600 mb-6">
              This would be where content categories can be created and managed. In a fully implemented system, 
              you would see a list of categories with management options.
            </p>
            <Button className="bg-luChronicles-black hover:bg-luChronicles-darkGray">
              Add New Category
            </Button>
          </Card>
        </TabsContent>
        <TabsContent value="settings" className="mt-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Website Settings</h2>
            <p className="text-gray-600 mb-6">
              This would be where general website settings can be adjusted. In a fully implemented system, 
              you would see forms for updating various site configurations.
            </p>
            <Button className="bg-luChronicles-black hover:bg-luChronicles-darkGray">
              Save Changes
            </Button>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Admin Dashboard Demo</h2>
        <p className="text-gray-600">
          This is a simplified demonstration of an admin dashboard. In a full implementation, 
          this would provide comprehensive content management functionality.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
