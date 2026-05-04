"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column */}
          <div>
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Let's Solve Your Business Headaches</h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Whether you need to automate your Facebook orders, manage your school, or launch an online store, we are here to help. Tell us what you need, in plain English.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email Us</h4>
                    <p className="text-slate-600">hello@nexotechit.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Location</h4>
                    <p className="text-slate-600">Based in Sylhet, Bangladesh. Helping businesses everywhere.</p>
                  </div>
                </div>
              </div>

              {/* Calendly Placeholder */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Book a Free Chat</h3>
                <p className="text-slate-500 text-sm mb-6">Schedule a friendly, no-pressure call with us to discuss your goals.</p>
                <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium w-full hover:bg-slate-800 transition-colors">
                  Schedule a Call
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Column - Form */}
          <Reveal direction="left">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 text-green-700 p-6 rounded-2xl flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Full Name</label>
                      <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Email Address</label>
                      <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Business / Shop Name</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Your Business" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">WhatsApp / Phone</label>
                      <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Your WhatsApp number" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">How can we help?</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all">
                        <option>Professional Business Website</option>
                        <option>E-Commerce / Online Store</option>
                        <option>F-Commerce Website Upgrade</option>
                        <option>School / LMS Platform</option>
                        <option>Inventory Management</option>
                        <option>Custom Software Tool</option>
                        <option>Just Exploring Options</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Project Timeline</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all">
                        <option>As soon as possible</option>
                        <option>Within 1 Month</option>
                        <option>1-3 Months</option>
                        <option>Just researching for now</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Tell us about your business</label>
                    <textarea required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="What are your current daily challenges?"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-primary text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-primary/90 transition-all shadow-md flex items-center justify-center gap-2">
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}