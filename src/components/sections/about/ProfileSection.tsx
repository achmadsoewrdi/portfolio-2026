import { motion } from "framer-motion";
import { fadeUpTransition, fadeUpVariants } from "../../../lib/motion";
import { profile } from "../../../data/about";
import SectionLabel from "../../ui/SectionLabel";
import photo from "../../../assets/AchmadSoewardi.png";

export default function ProfileSection() {
  return (
    <section className="px-12 max-w-300 mx-auto w-full">
      <SectionLabel text="Profile" />
      <div className="mt-12 grid grid-cols-[1fr_380px] gap-20 items-start">
        {/* left bio */}
        <motion.div
          initial={fadeUpVariants.hidden}
          animate={fadeUpVariants.show}
          transition={fadeUpTransition}
        >
          {/* photo & name row */}
          <div className="flex items-center gap-6 mb-6">
            <div className="w-18 h-18 rounded-full overflow-hidden border border-border shrink-0  ">
              <img
                src={photo}
                alt={profile.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <h1 className="font-display text-[clamp(40px,5vw,72px)]leading-[1.05] tracking-[-0.03em] text-white">
                {profile.name}
              </h1>
            </div>
          </div>
          <p className="font-mono text-[13px] tracking-[0.12em] uppercase text-subtle mb-10">
            {profile.role}
          </p>
          {profile.bio.split("\n\n").map((para, i) => (
            <p key={i} className="text-[15px] text-text leading-[1.85] mb-5">
              {para}
            </p>
          ))}
        </motion.div>

        {/* right info card */}
        <motion.div
          initial={fadeUpVariants.hidden}
          animate={fadeUpVariants.show}
          transition={{ ...fadeUpTransition, delay: 0.2 }}
          className="flex flex-col gap-px bg-border border border-border rounded-lg overflow-hidden sticky top-28"
        >
          {/* photo besar */}
          <div className="aspect-square w-full overflow-hidden bg-surface">
            <img
              src={photo}
              alt={profile.name}
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* location */}
          <div className="px-6 py-5 bg-surface">
            <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-subtle mb-1">
              location
            </p>
            <p className="text-[14px] text-text">{profile.location}</p>
          </div>

          {/* status */}
          <div className="px-6 py-5 bg-surface">
            <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-subtle mb-1">
              Status
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80] animate-pulse" />
              <p className="text-[14px] text-text">Available for work</p>
            </div>
          </div>

          {/* email */}
          <div className="px-6 py-5 bg-surface">
            <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-subtle mb-1">
              Email
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="text-[14px] text-muted hover:text-text transition-colors"
            >
              {profile.email}
            </a>
          </div>

          {/* Links */}
          <div className="px-6 py-5 bg-surface">
            <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-subtle mb-3">
              Links
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[14px] text-muted hover:text-text transition-colors"
              >
                <span className="font-mono text-[11px] w-6 h-6 border border-border rounded flex items-center justify-center text-subtle">
                  gh
                </span>
                Github
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[14px] text-muted hover:text-text transition-colors"
              >
                <span className="font-mono text-[11px] w-6 h-6 border border-border rounded flex items-center justify-center text-subtle">
                  in
                </span>
                Linkedin
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
