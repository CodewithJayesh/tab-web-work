import FeatureCard from "../components/common/FeatureCard";
import SectionIntro from "../components/common/SectionIntro";
import { contactSupport } from "../config/content";
import { useContactForm } from "../hooks/useContactForm";
import { usePageTitle } from "../hooks/usePageTitle";

export default function ContactPage() {
  usePageTitle("ContactUs");
  const { values, canSubmit, feedback, isSubmitting, onSubmit, updateField } =
    useContactForm();

  return (
    <>
      <section className="section">
        <SectionIntro
          copy="Use this reusable event-enabled form to start your project conversation."
          eyebrow="ContactUs"
          title="Send your requirements."
        />

        <div className="two-col">
          <div>
            <form className="contact-form" onSubmit={onSubmit}>
              <input
                className="input-control"
                name="name"
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Your name"
                required
                value={values.name}
              />
              <input
                className="input-control"
                name="email"
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="Email address"
                required
                type="email"
                value={values.email}
              />
              <input
                className="input-control"
                name="company"
                onChange={(event) => updateField("company", event.target.value)}
                placeholder="Company / Project"
                value={values.company}
              />
              <textarea
                className="textarea-control"
                name="message"
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="Tell us your feature goals"
                required
                value={values.message}
              />
              <button
                className="button button-solid"
                disabled={!canSubmit || isSubmitting}
                type="submit"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
            <p className="form-status">{feedback}</p>
          </div>

          <div className="stagger">
            {contactSupport.map((entry) => (
              <FeatureCard key={entry.title} body={entry.body} title={entry.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
