import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contact-form.css';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xovdgeny");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="top-row">
        <label htmlFor="email" className="form-label">
          Email (optional):
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className="form-input"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <div className="text-row">
        <textarea
          id="message"
          name="message"
          placeholder="Type your message here"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="button-row">
        <button type="submit" disabled={state.submitting} className="form-button">
          Send Message
        </button>
      </div>
    </form>
  );
}