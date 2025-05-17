import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    });
    
    // Reset form
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900">Contact Us</h2>
            <p className="text-gray-600 mt-2">Get in touch with our team</p>
          </div>
          
          <div className="bg-white shadow-lg border border-gray-200 rounded-xl overflow-hidden">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Reach Out to Us</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Have a question, feedback, or want to contribute to LU Chronicles? 
                    We'd love to hear from you.
                  </p>
                  
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-center space-x-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-luChronicles-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Theluchronicles@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-luChronicles-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span>Media Centre, Lucknow University Campus</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-serif text-lg font-bold text-gray-900 mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center bg-luChronicles-black text-white hover:bg-luChronicles-darkGray transition-colors transform hover:scale-105">
                        <span className="sr-only">Facebook</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      </a>
                      <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center bg-luChronicles-black text-white hover:bg-luChronicles-darkGray transition-colors transform hover:scale-105">
                        <span className="sr-only">Twitter</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                      </a>
                      <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center bg-luChronicles-black text-white hover:bg-luChronicles-darkGray transition-colors transform hover:scale-105">
                        <span className="sr-only">Instagram</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-50 border-gray-200 focus:border-luChronicles-black focus:ring-luChronicles-black"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Subject"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="bg-gray-50 border-gray-200 focus:border-luChronicles-black focus:ring-luChronicles-black"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="bg-gray-50 border-gray-200 focus:border-luChronicles-black focus:ring-luChronicles-black"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-luChronicles-black hover:bg-luChronicles-darkGray transition-colors transform hover:scale-[1.02]"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
