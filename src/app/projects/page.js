import Projects from "@/components/Projects/Projects";

export const metadata = {
  title: "Projects | Nuvosid",
};

export default function ProjectsPage() {
  return (
    <section className="section container">
      <h1 style={{ marginBottom: 24 }}>Featured Projects</h1>
      <Projects />
    </section>
  );
}


