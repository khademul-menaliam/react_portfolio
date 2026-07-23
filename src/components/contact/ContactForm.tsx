import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [formName, setFormName] = useState<string>('');
  const [formEmail, setFormEmail] = useState<string>('');
  const [formSubject, setFormSubject] = useState<string>('');
  const [formMessage, setFormMessage] = useState<string>('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) {
      alert('Please fill out all required fields.');
      return;
    }
    setFormStatus('submitting');
    
    // Simulate sending packet over network
    setTimeout(() => {
      setFormStatus('success');
      setFormName('');
      setFormEmail('');
      setFormSubject('');
      setFormMessage('');
    }, 1500);
  };

  if (formStatus === 'success') {
    return (
      <div className="p-8 text-center bg-[#050508]/50 border border-primary-fixed-dim/30 rounded-lg space-y-4">
        <span className="material-symbols-outlined text-primary-fixed-dim text-5xl animate-bounce">check_circle</span>
        <h3 className="text-xl font-bold text-primary">Message Sent Successfully!</h3>
        <p className="text-on-surface-variant text-sm max-w-sm mx-auto">
          Connection established on port 443. Your message has been routed. I will contact you shortly.
        </p>
        <button 
          onClick={() => setFormStatus('idle')}
          className="btn-primary px-4 py-2 rounded text-xs uppercase font-semibold"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block font-code-sm text-code-sm text-on-surface-variant uppercase">Name *</label>
          <input
            type="text"
            required
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
            placeholder="e.g. John Doe"
            className="w-full p-3 rounded bg-surface-container border border-outline-variant/30 text-primary outline-none focus:border-primary-fixed-dim focus:ring-1 focus:ring-primary-fixed-dim/50"
          />
        </div>
        <div className="space-y-2">
          <label className="block font-code-sm text-code-sm text-on-surface-variant uppercase">Email *</label>
          <input
            type="email"
            required
            value={formEmail}
            onChange={(e) => setFormEmail(e.target.value)}
            placeholder="e.g. john@example.com"
            className="w-full p-3 rounded bg-surface-container border border-outline-variant/30 text-primary outline-none focus:border-primary-fixed-dim focus:ring-1 focus:ring-primary-fixed-dim/50"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="block font-code-sm text-code-sm text-on-surface-variant uppercase">Subject</label>
        <input
          type="text"
          value={formSubject}
          onChange={(e) => setFormSubject(e.target.value)}
          placeholder="e.g. Project Collaboration Proposal"
          className="w-full p-3 rounded bg-surface-container border border-outline-variant/30 text-primary outline-none focus:border-primary-fixed-dim focus:ring-1 focus:ring-primary-fixed-dim/50"
        />
      </div>
      <div className="space-y-2">
        <label className="block font-code-sm text-code-sm text-on-surface-variant uppercase">Message *</label>
        <textarea
          required
          rows={4}
          value={formMessage}
          onChange={(e) => setFormMessage(e.target.value)}
          placeholder="Type your message here..."
          className="w-full p-3 rounded bg-surface-container border border-outline-variant/30 text-primary outline-none focus:border-primary-fixed-dim focus:ring-1 focus:ring-primary-fixed-dim/50 resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={formStatus === 'submitting'}
        className="btn-primary w-full p-3 rounded font-code-sm text-code-sm uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
      >
        {formStatus === 'submitting' ? (
          <>
            <span className="material-symbols-outlined animate-spin text-[18px]">sync</span> Routing packet...
          </>
        ) : (
          <>
            <span className="material-symbols-outlined text-[18px]">send</span> Send Message
          </>
        )}
      </button>
    </form>
  );
};
