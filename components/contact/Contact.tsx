import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32"
    >
      <Container>

        <SectionTitle
          subtitle="CONTACT"
          title="Let's Work Together"
        />

        <div
          className="
          mt-16
          grid
          lg:grid-cols-2
          gap-16
          items-start
        "
        >
          <ContactInfo />

          <ContactForm />

        </div>

      </Container>
    </section>
  );
}