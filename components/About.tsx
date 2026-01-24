import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#1a1612]/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-offwhite mb-8">
              Where Innovation Meets Elegance
            </h2>
            <div className="space-y-6 text-text-muted text-lg leading-relaxed mb-8">
              <p>
                Tivora blends cutting-edge AI, AR, and 3D technology to eliminate the guesswork of online shopping. We believe technology should serve style, not complicate it.
              </p>
              <p>
                Our platform learns from every interaction, refining its understanding of your preferences to present you with a truly personalized boutique experience, available 24/7.
              </p>
            </div>
            <button className="bg-[#2a2419] hover:bg-[#3a3225] text-text-offwhite px-8 py-4 rounded-2xl transition-all duration-300 font-medium text-base hover:shadow-xl hover:shadow-accent-gold/30 hover:-translate-y-1">
              Join Waitlist
            </button>
          </div>

          {/* Right: Decorative Visual */}
          <div className="relative w-full">
            <div className="glass-card rounded-3xl aspect-square relative overflow-hidden">
              <Image
                src="/moth-image.png"
                alt="Elegant moth illustration"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

