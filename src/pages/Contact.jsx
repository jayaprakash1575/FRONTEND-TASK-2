import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  MessageSquare, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Send, 
  ChevronDown, 
  CheckCircle2, 
  ShieldCheck,
  Clock,
  HelpCircle
} from 'lucide-react';

export const Contact = () => {
  const { addToast } = useApp();

  // Support ticket form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderId: '',
    category: 'warranty',
    message: ''
  });

  const [submittedTicket, setSubmittedTicket] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const ticketId = 'PLS-TCK-' + Math.floor(100000 + Math.random() * 900000);
    setSubmittedTicket({
      id: ticketId,
      name: formData.name,
      category: formData.category
    });
    addToast(`Ticket #${ticketId} created! Our technical team will reach out within 4 hours.`, 'success');
  };

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'How do I claim my 1-Year Pan-India Doorstep Warranty?',
      a: 'PULSE offers zero-hassle doorstep pickup for any warranty replacement. Simply enter your Order ID above or message our 24/7 WhatsApp hotline. A courier partner will pick up your unit from your doorstep within 24 hours and deliver a fresh replacement.',
    },
    {
      q: 'What is the return and refund policy?',
      a: 'We offer an unconditional 7-day return guarantee. If the sound profile or fit does not suit you, return it in original packaging for a 100% full refund to your original payment method.',
    },
    {
      q: 'How fast is nationwide delivery?',
      a: 'All orders placed before 3:00 PM IST are dispatched on the same day via express air couriers (Blue Dart / Delhivery). Metros receive orders within 24 to 48 hours; other cities take 2 to 3 business days.',
    },
    {
      q: 'How do I reset my PULSE ANC Earbuds if one bud disconnects?',
      a: 'Place both earbuds inside the charging case. Keep the lid open and press & hold the multi-function button on the case for 10 seconds until the status LEDs flash white three times. Re-pair with your phone via Bluetooth.',
    },
    {
      q: 'Are PULSE smartwatches compatible with both iPhone and Android?',
      a: 'Yes! All PULSE smartwatches seamlessly pair with both iOS (iOS 12+) and Android (Android 8+) via our free PULSE Health Sync companion app available on the App Store and Google Play.',
    },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16 space-y-16">
      
      {/* Page Title */}
      <section className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-pulse-primary uppercase tracking-wider">WE'VE GOT YOUR BACK</span>
        <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-slate-900 dark:text-white">
          PULSE Support &amp; Helpdesk
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Need warranty service, order tracking assistance, or acoustic troubleshooting? Reach out below.
        </p>
      </section>

      {/* 4 Support Channels */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/5 hover:border-pulse-primary/40 hover:shadow-glow transition-all shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-1">24/7 WhatsApp Support</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Instant answers from technical agents.</p>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
            +91 98765 43210 &rarr;
          </a>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/5 hover:border-pulse-primary/40 hover:shadow-glow transition-all shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-pulse-primary/10 text-pulse-primary mb-4">
            <PhoneCall className="w-6 h-6" />
          </div>
          <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-1">Toll-Free Helpline</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Mon-Sat from 9:00 AM to 8:00 PM IST.</p>
          <span className="text-xs font-bold text-pulse-primary font-mono">1800-123-PULSE</span>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/5 hover:border-pulse-primary/40 hover:shadow-glow transition-all shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-pulse-secondary/10 text-pulse-secondary mb-4">
            <Mail className="w-6 h-6" />
          </div>
          <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-1">Email Helpdesk</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Guaranteed response within 4 hours.</p>
          <span className="text-xs font-bold text-pulse-secondary">support@pulse.audio</span>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/5 hover:border-pulse-primary/40 hover:shadow-glow transition-all shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-500 mb-4">
            <MapPin className="w-6 h-6" />
          </div>
          <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-1">Experience Centers</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Over 120+ retail audio hubs across India.</p>
          <span className="text-xs font-bold text-amber-500">View City Directory &rarr;</span>
        </div>
      </section>

      {/* Ticket Form + FAQ Accordion */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Support Ticket Form */}
        <div className="lg:col-span-7 p-8 rounded-3xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/5 shadow-sm">
          <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white mb-2">Create a Support Ticket</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">Enter your details and our audio engineering team will assist you.</p>

          {submittedTicket ? (
            <div className="p-8 rounded-2xl bg-emerald-500/5 dark:bg-pulse-surface border border-emerald-500/30 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">Ticket #{submittedTicket.id} Created!</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Thank you, <strong>{submittedTicket.name}</strong>. A dedicated technician has been assigned to your ticket. You will receive real-time updates via SMS and Email.
              </p>
              <button
                onClick={() => setSubmittedTicket(null)}
                className="px-6 py-2 rounded-xl bg-pulse-primary text-black font-bold text-xs uppercase"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Sameer Sen"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-pulse-surface border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-pulse-primary focus:ring-1 focus:ring-pulse-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="sameer@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-pulse-surface border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-pulse-primary focus:ring-1 focus:ring-pulse-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-400 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-pulse-surface border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-pulse-primary focus:ring-1 focus:ring-pulse-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-400 mb-1">Order ID (Optional)</label>
                  <input
                    type="text"
                    placeholder="#PLS-84920"
                    value={formData.orderId}
                    onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-pulse-surface border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-pulse-primary focus:ring-1 focus:ring-pulse-primary font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-400 mb-1">Inquiry Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-pulse-surface border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-pulse-primary focus:ring-1 focus:ring-pulse-primary cursor-pointer"
                >
                  <option value="warranty" className="bg-white dark:bg-pulse-card text-slate-900 dark:text-white">1-Year Warranty Claim &amp; Replacement</option>
                  <option value="delivery" className="bg-white dark:bg-pulse-card text-slate-900 dark:text-white">Track Active Shipment</option>
                  <option value="audio" className="bg-white dark:bg-pulse-card text-slate-900 dark:text-white">Acoustic &amp; Firmware Troubleshooting</option>
                  <option value="returns" className="bg-white dark:bg-pulse-card text-slate-900 dark:text-white">7-Day Hassle-Free Return</option>
                  <option value="corporate" className="bg-white dark:bg-pulse-card text-slate-900 dark:text-white">Bulk &amp; Corporate Gifting Inquiries</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-400 mb-1">Describe Your Issue</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Provide details regarding your hardware, symptoms, or delivery question..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-pulse-surface border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-pulse-primary focus:ring-1 focus:ring-pulse-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-pulse-primary text-black font-heading font-extrabold text-xs uppercase tracking-wider shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Priority Ticket</span>
              </button>
            </form>
          )}
        </div>

        {/* FAQ Accordion */}
        <div className="lg:col-span-5 space-y-4">
          <div className="mb-2">
            <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">Frequently Asked Questions</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">Quick answers to common questions</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-pulse-card border border-slate-200 dark:border-white/5 overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 dark:text-white hover:text-pulse-primary transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-pulse-primary' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};
