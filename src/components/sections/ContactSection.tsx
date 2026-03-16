import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import ContactLink from "../ui/ContactLink";
import Button from "../ui/Button";
import { fadeUpVariants, fadeUpTransition } from "../../lib/motion";
import { type ContactLinkItem } from "../../types";

const contactLinks: ContactLinkItem[] = [
  {
    icon: "✉",
    label: "hello@yourdomain.com",
    href: "mailto:hello@yourdomain.com",
  },
  { icon: "in", label: "linkedin.com/in/yourprofile", href: "#" },
  { icon: "gh", label: "github.com/yourusername", href: "#" },
  { icon: "𝕏", label: "x.com/yourhandle", href: "#" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="px-12 py-24 max-w-300 mx-auto w-full">
      <SectionLabel text="Contact" />

      <motion.h2
        ref={ref}
        initial={fadeUpVariants.hidden}
        animate={inView ? fadeUpVariants.show : fadeUpVariants.hidden}
        transition={fadeUpTransition}
        className="font-display text-[clamp(32px,4vw,56px)] leading-[1.1] tracking-[-0.02em] text-white max-w-175"
      >
        Let's build something <em className="text-muted">great.</em>
      </motion.h2>

      <motion.div
        initial={fadeUpVariants.hidden}
        animate={inView ? fadeUpVariants.show : fadeUpVariants.hidden}
        transition={{ ...fadeUpTransition, delay: 0.2 }}
        className="mt-16 grid grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden"
      >
        {/* left */}
        <div className="p-16 bg-surface flex flex-col">
          <h3 className="font-display text-[40px] leading-[1.1] text-white mb-4">
            Ready to collaborate?
          </h3>
          <p className="text-[15px] text-muted leading-[1.7] mb-8">
            Whether it's a new product, a redesign, or just an idea — I'd love
            to hear about it. Let's talk.
          </p>
          <div className="flex flex-col gap-3">
            {contactLinks.map((link) => (
              <ContactLink key={link.label} item={link} />
            ))}
          </div>
        </div>

        {/* right — form */}
        <div className="p-16 bg-[#111111] flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="font-mono text-[11px] tracking-widest uppercase text-subtle">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Alex Johnson"
              className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-white text-sm outline-none placeholder:text-subtle focus:border-subtle transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-mono text-[11px] tracking-widest uppercase text-subtle">
              Email
            </label>
            <input
              type="email"
              placeholder="alex@company.com"
              className="w-full px-4 py-3 bg-suface border border-border rounded-lg text-white text-sm outline-none placeholder:text-subtle focus:border-subtle transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-mono text-[11px] tracking-widest uppercase text-subtle">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-white text-sm outline-none placeholder:text-subtle focus:border-subtle transition-colors resize-none"
            />
          </div>
          <Button variant="primary" className="w-full justify-center">
            Send Message →
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
