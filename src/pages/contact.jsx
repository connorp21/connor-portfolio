import { CardElement } from "@formspree/react";
import Header from "../components/alt-header";
import ContactForm from "../components/contact-form";
import './contact.css';

export default function Contact() {
    return(
        <main>
            <Header />
            <section className="section">
                <h2>Please use this form for contact</h2>
            </section>
                <card className="contact-card">
                    <ContactForm />
                </card>
        </main>
    )
}