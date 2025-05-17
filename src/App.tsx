
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Layout components
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

// Pages
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Article from "@/pages/Article";
import Category from "@/pages/Category";
import Team from "@/pages/Team";
import Faculty from "@/pages/Faculty";
import AuthorProfile from "@/pages/AuthorProfile";
import AdminLogin from "@/pages/AdminLogin";
import AdminDashboard from "@/pages/AdminDashboard";
import Donate from "@/pages/Donate";

const queryClient = new QueryClient();

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="site-layout">
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <main className="site-main">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/article/:slug" element={<Article />} />
                <Route path="/category/:slug" element={<Category />} />
                <Route path="/team" element={<Team />} />
                <Route path="/category/faculty" element={<Faculty />} />
                <Route path="/author/:username" element={<AuthorProfile />} />
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
