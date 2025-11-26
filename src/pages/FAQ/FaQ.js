import React from "react";
import Heading from "../../component/Heading/Heading";

const FaQ = () => {
  return (
    <section id="faq" className="pb-5">
      <div className="container">
        <Heading headingLabel="Frequently Asked Questions" />
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What sets your advertising services apart from others in the
                area?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Our advertising services offer a comprehensive approach,
                covering 360 advertising strategies tailored to your business
                needs. From traditional to digital marketing, we ensure maximum
                visibility for your brand.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What strategies do you employ for search engine optimization
                (SEO)?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Our SEO strategies are customized to your business goals and
                target audience. We focus on optimizing website content,
                building quality backlinks, and enhancing your online visibility
                to improve search engine rankings and attract organic traffic.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How can digital marketing benefit my business specifically?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Digital marketing offers targeted outreach, allowing you to
                reach potential customers where they spend most of their
                time—online. With our expertise, we can optimize your digital
                presence to drive traffic, leads, and ultimately, sales.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Can you handle commercial advertising shoots and product
                photography?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Absolutely. We offer professional commercial advertising and
                product photography services to showcase your products or
                services in the best light possible. Our skilled photographers
                and creative team ensure high-quality visuals that capture
                attention and drive engagement.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaQ;
