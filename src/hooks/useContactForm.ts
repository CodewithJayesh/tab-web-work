import { type FormEvent, useMemo, useState } from "react";
import { emitContactSent } from "./useUiEvents";

interface ContactValues {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface ContactFormState {
  values: ContactValues;
  canSubmit: boolean;
  isSubmitting: boolean;
  feedback: string;
  updateField: (field: keyof ContactValues, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const initialValues: ContactValues = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function useContactForm(): ContactFormState {
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");

  const canSubmit = useMemo(() => {
    return (
      values.name.trim().length > 1 &&
      values.email.includes("@") &&
      values.message.trim().length >= 10
    );
  }, [values.email, values.message, values.name]);

  const updateField = (field: keyof ContactValues, value: string) => {
    setValues((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canSubmit || isSubmitting) {
      setFeedback("Please complete required fields before submitting.");
      return;
    }

    setIsSubmitting(true);
    setFeedback("Sending your details...");

    window.setTimeout(() => {
      emitContactSent({
        name: values.name,
        email: values.email,
      });
      setIsSubmitting(false);
      setFeedback("Thanks. We will contact you within one business day.");
      setValues(initialValues);
    }, 700);
  };

  return {
    values,
    canSubmit,
    isSubmitting,
    feedback,
    updateField,
    onSubmit,
  };
}
