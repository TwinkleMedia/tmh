import React from "react";
import Heading from "../../component/Heading/Heading";

const FaQ = () => {
  const faqData = [
    {
      q: "What sets your advertising services apart from others in the area?",
      a: "Our advertising services offer a comprehensive 360° strategy tailored to your business needs. From traditional to digital marketing, we ensure maximum brand visibility and high-performing campaigns.",
    },
    {
      q: "What strategies do you employ for search engine optimization (SEO)?",
      a: "Our SEO strategies include in-depth keyword research, on-page optimization, technical improvements, content planning, and quality backlink building. We focus on long-term growth and organic ranking improvement.",
    },
    {
      q: "How can digital marketing benefit my business specifically?",
      a: "Digital marketing helps you reach a highly targeted audience online. We create performance-driven campaigns that increase visibility, traffic, and conversions—resulting in higher leads and sales.",
    },
    {
      q: "Can you handle commercial advertising shoots and product photography?",
      a: "Yes. We provide professional commercial shoots and product photography to showcase your brand visually. Our creative team ensures high-quality visuals that attract attention and increase engagement.",
    },
  ];

  // JSON-LD Schema for FAQ Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
  return (
    <section id="faq" className="pb-5" aria-labelledby="faq-heading">
      {/* FAQ Structured Data for SEO */}
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <div className="container">
        <Heading headingLabel="Frequently Asked Questions" id="faq-heading" />

        {/* FAQ List */}
        <div className="accordion" id="faqAccordion">
          {faqData.map((item, index) => {
            const collapseId = `collapse${index}`;
            const headingId = `heading${index}`;
            return (
              <article className="accordion-item" key={index}>
                <h2 className="accordion-header" id={headingId}>
                  <button
                    className={`accordion-button ${index !== 0 ? "collapsed" : ""
                      }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded={index === 0}
                    aria-controls={collapseId}
                  >
                    {item.q}
                  </button>
                </h2>

                <div
                  id={collapseId}
                  className={`accordion-collapse collapse ${index === 0 ? "show" : ""
                    }`}
                  aria-labelledby={headingId}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{item.a}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaQ;
