export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0d0a] via-[#1a1612] to-[#0f0d0a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,97,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(232,220,198,0.05),transparent_70%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-text-offwhite mb-6 leading-tight">
          The AI-Powered Fashion & Beauty Layer
        </h1>
        
        <p className="font-subheading text-lg sm:text-xl md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
          Experience next-gen shopping with AI-driven styling, AR try-ons, and personalized fits. All in one immersive marketplace.
        </p>

        <button className="bg-[#2a2419] hover:bg-[#3a3225] text-text-offwhite px-8 py-4 rounded-2xl transition-all duration-300 font-medium text-base sm:text-lg hover:shadow-xl hover:shadow-accent-gold/30 hover:-translate-y-1">
          Join Waitlist
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f0d0a] to-transparent"></div>
    </section>
  );
}
