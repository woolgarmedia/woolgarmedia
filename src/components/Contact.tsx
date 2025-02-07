import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        contact_name: formData.name,
        contact_email: formData.email,
        message: formData.message,
        to_email: 'cal@woolgarmedia.co.uk'
      };

      await emailjs.send(
        'service_gi3j8lo', // Replace with your EmailJS service ID
        'template_t8ao4xp', // Replace with your EmailJS template ID
        templateParams,
        'etiu6nRx0YXCQ-H0w' // Replace with your EmailJS public key
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border ${
                    errors.name ? 'border-red-500' : 'border-gray-700/50'
                  } text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                  focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border ${
                    errors.email ? 'border-red-500' : 'border-gray-700/50'
                  } text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                  focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border ${
                    errors.message ? 'border-red-500' : 'border-gray-700/50'
                  } text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                  focus:ring-blue-500 focus:border-transparent transition-all duration-300 
                  resize-none`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`gradient-button text-white px-8 py-4 rounded-full text-lg font-medium 
                         inline-flex items-center gap-2 shadow-lg ${
                           isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                         }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;