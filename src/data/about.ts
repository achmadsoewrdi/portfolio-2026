import type { Education, Experience, Certificate } from '../types'

// ── PROFILE
export const profile = {
  name: 'Achmad Soewardi',
  role: 'UI/UX Designer & Frontend Developer',
  bio: `I am a Software Engineering student with a strong passion for crafting meaningful digital experiences through UI/UX design and front-end development. What started as an introduction to software development has grown into a deep interest in how design and technology come together to create intuitive, engaging, and user-centered products.

I enjoy transforming ideas into clear visual structures, designing interfaces that are not only aesthetically pleasing but also easy to understand and use. From wireframing and prototyping to implementing responsive interfaces with modern front-end technologies, I focus on building experiences that truly resonate with users.

Driven by curiosity and continuous learning, I am committed to refining my design thinking, understanding user needs, and delivering clean, functional, and user-friendly interfaces. I am always open to collaboration and new challenges that help me grow both creatively and technically.`,
  location: 'Bandung, Indonesia',
  email: 'soewardiachmad04@gmail.com',
  linkedin: 'https://www.linkedin.com/in/achmdsoewrdi',
  github: 'https://github.com/achmadsoewrdi',
}

// ── EDUCATION
export const education: Education[] = [
  {
    id: 'upi',
    institution: 'Universitas Pendidikan Indonesia',
    major: 'Rekayasa Perangkat Lunak',
    degree: "Bachelor's Degree",
    startYear: '2023',
    endYear: 'Present',
    location: 'Bandung, Indonesia',
  },
  {
    id: 'smkn1',
    institution: 'SMK Negeri 1 Puncak Cisarua',
    major: 'Teknik Komputer dan Jaringan',
    degree: 'Vocational High School',
    startYear: '2021',
    endYear: '2023',
    location: 'Bogor, Indonesia',
  },
]

// ── EXPERIENCE
// Tips: isi dengan freelance project, organisasi, atau kepanitiaan
export const experience: Experience[] = [
  {
    id: 'freelance-uiux',
    company: 'Freelance',
    role: 'UI/UX Designer & Frontend Developer',
    type: 'Freelance',
    startDate: '2023',
    endDate: 'Present',
    description:
      'Designing and developing user interfaces for various clients. Responsible for end-to-end design process from wireframing, prototyping, to frontend implementation.',
    tags: ['Figma', 'React', 'Tailwind CSS', 'UI Design'],
  },
  {
    id: 'org-example',
    company: 'Nama Organisasi Kampus',  
    role: 'Nama Divisi / Jabatan',
    type: 'Organization',
    startDate: 'MMM YYYY',
    endDate: 'MMM YYYY',
    description:
      'Deskripsi singkat kegiatan atau kontribusi kamu di organisasi ini.',
    tags: ['Leadership', 'Collaboration'],
  },
]

// ── CERTIFICATES

export const orgCertificates: Certificate[] = [
  {
    id: 'org-cert-1',
    name: 'Nama Sertifikat',
    issuer: 'Nama Organisasi',
    year: '2024',
    category: 'organization',
    credentialUrl: '#',   // opsional
  },
]

export const compCertificates: Certificate[] = [
  {
    id: 'comp-cert-1',
    name: 'Nama Sertifikat',
    issuer: 'Dicoding / Coursera / dsb',
    year: '2024',
    category: 'competency',
    credentialUrl: '#',   // opsional
  },
]