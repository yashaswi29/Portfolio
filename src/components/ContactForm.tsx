import React, { useState } from 'react';
import axios from 'axios';
import { useTracker } from '../hooks/useTracker';

const inputClasses =
  'w-full px-3 py-2 font-mono text-sm rounded-md border border-primary-300 dark:border-primary-700 bg-white dark:bg-primary-900 text-primary-900 dark:text-[#F8F8F8] placeholder-primary-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-200';

const ContactForm: React.FC = () => {
  const { trackEvent } = useTracker();
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
    trackEvent('ui', 'interaction', 'contact_submit_attempt');
    setStatus('loading');

    try {
      const API_BASE = import.meta.env.DEV ? '/api' : 'https://yashaswi.cloud/api';
      const response = await axios.post(`${API_BASE}/contact`, formData);
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
      className="bg-white dark:bg-primary-800 p-6 rounded-lg border border-primary-200 dark:border-primary-700 transition-colors duration-300"
    >
      <div className="flex items-center gap-2 mb-6 pb-3 border-b border-primary-100 dark:border-primary-700">
        <span className="w-2.5 h-2.5 rounded-full bg-accent" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent-light" />
        <span className="w-2.5 h-2.5 rounded-full bg-primary-300 dark:bg-primary-600" />
        <span className="ml-2 font-mono text-xs text-primary-500 dark:text-primary-400">send_message.sh</span>
      </div>

      {status === 'success' ? (
        <div className="text-center py-8">
          <h3 className="font-mono text-xl font-bold mb-2 text-accent">✓ Message Sent!</h3>
          <p className="text-primary-600 dark:text-primary-300">
            Thank you for reaching out. I'll get back to you soon.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-4 px-4 py-2 font-mono text-sm bg-accent text-primary-900 rounded font-semibold hover:bg-accent-light transition-colors duration-200"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <label htmlFor="name" className="block font-mono text-sm text-primary-700 dark:text-primary-200 mb-1">
              <span className="text-accent">$</span> name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-mono text-sm text-primary-700 dark:text-primary-200 mb-1">
              <span className="text-accent">$</span> email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block font-mono text-sm text-primary-700 dark:text-primary-200 mb-1">
              <span className="text-accent">$</span> message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={inputClasses}
            />
          </div>

          {status === 'error' && (
            <div className="mb-4 p-3 font-mono text-sm bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-200 border border-red-200 dark:border-red-800 rounded-md">
              <p>! {errorMessage || 'Failed to send message. Please try again.'}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-4 py-2.5 font-mono text-sm bg-accent text-primary-900 rounded font-semibold hover:bg-accent-light transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'sending...' : './send'}
          </button>
        </>
      )}
    </form>
  );
};

export default ContactForm;
