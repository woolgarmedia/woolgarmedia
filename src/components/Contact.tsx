import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        'service_gi3j8lo', // You'll get this from EmailJS
        'template_t8ao4xp', // You'll get this from EmailJS
        formRef.current,
        'etiu6nRx0YXCQ-H0w' // You'll get this from EmailJS
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We will get back to you soon.',
        });
        formRef.current.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to start your web development project? Contact us for a free consultation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your project..."
              />
            </div>

            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="gradient-button text-white px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2 w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <ArrowRight size={20} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;