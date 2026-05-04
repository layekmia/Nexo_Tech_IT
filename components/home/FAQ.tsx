"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal"; // Adjust import path if needed

export default function FAQ() {
  // State to track which accordion is open. Set to 0 so the first one is open by default.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question:
        "I don't know anything about coding. Can I still manage my system?",
      answer:
        "Absolutely. We build simple, easy-to-use dashboards specifically for non-technical people. If you know how to use Facebook or WhatsApp, you will easily be able to manage the systems we build for you.",
    },
    {
      question: "Are there any hidden maintenance fees?",
      answer:
        "No. We believe in 100% transparency. We give you a clear, upfront price for the project before we start. If you want us to handle your monthly server hosting or ongoing updates, we offer clear, optional support plans.",
    },
    {
      question:
        "I only sell on Facebook right now. Do I really need a website?",
      answer:
        "Yes! Relying only on Facebook is risky because algorithms change. A website automates your sales 24/7, builds professional trust, and gives you 100% ownership of your customer data.",
    },
    {
      question: "What happens after my website or software goes live?",
      answer:
        "We don't just launch your project and disappear. We provide a handover session to show you exactly how everything works, and we are always just a message away if you need ongoing support or future upgrades.",
    },
    {
      question: "How long does it take to build a custom store or system?",
      answer:
        "It depends on your specific needs. A standard e-commerce store can be ready in a few weeks, while a custom school management system takes a bit longer. We will give you a realistic, strict timeline on our very first call.",
    },
  ];

  const handleToggle = (index: number | null) => {
    // If the clicked one is already open, close it (set to null). Otherwise, open the clicked one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <Reveal className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-[1.15] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-lg">
            Everything you need to know about working with Nexotech IT.
          </p>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <Reveal key={i} delay={0.05 * i}>
                <div
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-primary/30 bg-primary/5 shadow-sm"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => handleToggle(i)}
                    className="w-full flex items-center justify-between p-6 text-left outline-none"
                  >
                    <span
                      className={`text-lg font-bold transition-colors ${isOpen ? "text-primary" : "text-slate-900"}`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-primary text-white rotate-180"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="p-6 pt-0 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.4} className="text-center mt-12">
          <p className="text-slate-600 font-medium">
            Have a different question?{" "}
            <a
              href="/contact"
              className="text-primary hover:underline font-bold"
            >
              Send us a message
            </a>{" "}
            and we'll be happy to help.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
