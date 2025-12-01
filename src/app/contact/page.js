import ContactForm from "@/components/ContactForm/ContactForm";

export const metadata = {
  title: "Contact | Nuvosid",
};

export default function ContactPage() {
  return (
    <section className="section container">
      <h1 style={{ marginBottom: 24 }}>Contact Us</h1>
      <ContactForm />
    </section>
  );
}


