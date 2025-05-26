import React, { useState } from 'react';
import axios from 'axios';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      if (response.data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(response.data.error || 'Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
      console.error('Contact form error:', error);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white dark:bg-primary-800 p-6 rounded-lg shadow-sm transition-colors duration-300 animate-fade-in"
    >
      {status === 'success' ? (
        <div className="text-center py-8">
          <h3 className="text-xl font-bold mb-2 text-primary-900 dark:text-white">Message Sent!</h3>
          <p className="text-primary-600 dark:text-primary-300">
            Thank you for reaching out. I'll get back to you soon.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-4 px-4 py-2 bg-primary-900 dark:bg-white text-white dark:text-primary-900 rounded font-medium hover:bg-primary-800 dark:hover:bg-primary-100 transition-colors duration-200"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-primary-900 dark:text-white mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-primary-300 dark:border-primary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 bg-white dark:bg-primary-800 text-primary-900 dark:text-white transition-colors duration-200"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-primary-900 dark:text-white mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-primary-300 dark:border-primary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 bg-white dark:bg-primary-800 text-primary-900 dark:text-white transition-colors duration-200"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-primary-900 dark:text-white mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-3 py-2 border border-primary-300 dark:border-primary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 bg-white dark:bg-primary-800 text-primary-900 dark:text-white transition-colors duration-200"
            />
          </div>
          
          {status === 'error' && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-md">
              <p>{errorMessage || 'Failed to send message. Please try again.'}</p>
            </div>
          )}
          
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-4 py-2 bg-primary-900 dark:bg-white text-white dark:text-primary-900 rounded font-medium hover:bg-primary-800 dark:hover:bg-primary-100 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </>
      )}
    </form>
  );
};

export default ContactForm;