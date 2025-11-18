import Services from "@/components/Services/Services";

export const metadata = {
  title: "Services | Nuvosid",
};

export default function ServicesPage() {
  return (
    <section className="section container">
      <h1 style={{ marginBottom: 24 }}>Our Services</h1>
      <Services />
    </section>
  );
}


