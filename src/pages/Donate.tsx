
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent } from '@/components/ui/card';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = donationAmount === 'custom' ? customAmount : donationAmount;
    
    // Process donation (in real app, this would connect to a payment processor)
    toast({
      title: "Thank you for your donation!",
      description: `Your donation of ₹${amount} will help support our journalism.`,
    });
    
    // Reset form
    setDonationAmount('');
    setCustomAmount('');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="font-serif text-4xl font-bold mb-4">Support LU Chronicles</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Your contributions help us continue to deliver quality journalism and provide opportunities
            for student journalists to develop their skills.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="font-serif text-2xl font-bold mb-4">Why Donate?</h2>
            <ul className="space-y-4">
              <li className="flex">
                <span className="bg-luChronicles-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                <div>
                  <h3 className="font-bold mb-1">Support Student Journalism</h3>
                  <p className="text-gray-700">Your donations help train the next generation of journalists at Lucknow University.</p>
                </div>
              </li>
              <li className="flex">
                <span className="bg-luChronicles-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                <div>
                  <h3 className="font-bold mb-1">Maintain Editorial Independence</h3>
                  <p className="text-gray-700">Reader support helps us maintain our journalistic integrity and independence.</p>
                </div>
              </li>
              <li className="flex">
                <span className="bg-luChronicles-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                <div>
                  <h3 className="font-bold mb-1">Enhance Content Quality</h3>
                  <p className="text-gray-700">Donations fund equipment, training, and resources to improve our reporting.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label>Select donation amount</Label>
                  <RadioGroup 
                    value={donationAmount}
                    onValueChange={setDonationAmount}
                    className="grid grid-cols-2 gap-4"
                  >
                    <Label 
                      htmlFor="amount-100" 
                      className={`border rounded-lg p-4 cursor-pointer text-center hover:bg-gray-50 transition-colors ${donationAmount === '100' ? 'border-black' : 'border-gray-200'}`}
                    >
                      <RadioGroupItem value="100" id="amount-100" className="sr-only" />
                      ₹100
                    </Label>
                    <Label 
                      htmlFor="amount-250" 
                      className={`border rounded-lg p-4 cursor-pointer text-center hover:bg-gray-50 transition-colors ${donationAmount === '250' ? 'border-black' : 'border-gray-200'}`}
                    >
                      <RadioGroupItem value="250" id="amount-250" className="sr-only" />
                      ₹250
                    </Label>
                    <Label 
                      htmlFor="amount-500" 
                      className={`border rounded-lg p-4 cursor-pointer text-center hover:bg-gray-50 transition-colors ${donationAmount === '500' ? 'border-black' : 'border-gray-200'}`}
                    >
                      <RadioGroupItem value="500" id="amount-500" className="sr-only" />
                      ₹500
                    </Label>
                    <Label 
                      htmlFor="amount-custom" 
                      className={`border rounded-lg p-4 cursor-pointer text-center hover:bg-gray-50 transition-colors ${donationAmount === 'custom' ? 'border-black' : 'border-gray-200'}`}
                    >
                      <RadioGroupItem value="custom" id="amount-custom" className="sr-only" />
                      Custom
                    </Label>
                  </RadioGroup>
                  
                  {donationAmount === 'custom' && (
                    <div className="mt-4">
                      <Label htmlFor="custom-amount">Custom amount (₹)</Label>
                      <Input
                        id="custom-amount"
                        type="number"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        required={donationAmount === 'custom'}
                        min="1"
                      />
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message (optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-luChronicles-black hover:bg-luChronicles-darkGray"
                  disabled={!donationAmount || (donationAmount === 'custom' && !customAmount)}
                >
                  Donate Now
                </Button>
                
                <p className="text-xs text-center text-gray-500">
                  Donation processing is simulated for demonstration purposes. 
                  No actual payment will be processed.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="font-serif text-2xl font-bold mb-4">Other Ways to Support Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Share Our Content</h3>
              <p className="text-gray-700">
                Help us reach a wider audience by sharing our articles on social media and with your network.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Volunteer</h3>
              <p className="text-gray-700">
                We welcome volunteers who can contribute their skills in writing, editing, photography, and design.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Provide Feedback</h3>
              <p className="text-gray-700">
                Your constructive feedback helps us improve our content and better serve our community.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Partnership Opportunities</h3>
              <p className="text-gray-700">
                We're open to partnerships with organizations that share our values and mission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
