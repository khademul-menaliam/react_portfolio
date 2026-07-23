import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto w-full scroll-mt-24">
      <div className="glass-panel p-8 rounded-xl border border-outline-variant/20 shadow-lg max-w-3xl mx-auto space-y-6">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-secondary font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-[28px]">person</span> /* About Me */
        </h2>
        <div className="text-on-surface-variant space-y-4 font-body-md">
          <p>
            I am a backend specialist focused on creating bulletproof architectures, low-latency microservices, and optimized data workflows. I strive to build clean, maintainable systems that scale seamlessly under heavy workloads.
          </p>
          <p>
            Whether working with relational databases or distributed event systems like Kafka, my goal is always maximum throughput, data integrity, and architectural clarity.
          </p>
        </div>
      </div>
    </section>
  );
};
