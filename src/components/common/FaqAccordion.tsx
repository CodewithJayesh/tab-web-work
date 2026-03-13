import { useState } from "react";
import type { FaqData } from "../../config/content";

interface FaqAccordionProps {
  items: FaqData[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article className="faq-item" key={item.question}>
            <button
              aria-expanded={isOpen}
              className="faq-trigger"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              type="button"
            >
              <span>{item.question}</span>
              <span>{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen ? <p className="faq-answer">{item.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
