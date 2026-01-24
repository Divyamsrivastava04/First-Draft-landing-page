"use client";

import { useState } from "react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-offwhite mb-12">
          Be The First To Experience Tivora
        </h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 text-text-offwhite placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold/50 transition-all duration-300"
            required
          />
          <button
            type="submit"
            className="bg-[#2a2419] hover:bg-[#3a3225] text-text-offwhite px-8 py-4 rounded-2xl transition-all duration-300 font-medium text-base hover:shadow-xl hover:shadow-accent-gold/30 hover:-translate-y-1 whitespace-nowrap"
          >
            Waitlist
          </button>
        </form>
      </div>
    </section>
  );
}

