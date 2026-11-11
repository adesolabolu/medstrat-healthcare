/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Phone,
  Menu,
  X,
  CheckCircle2,
  MapPin
} from 'lucide-react';

import heroRadiologyImg from './assets/images/hero_nigerian_radiology_specialist_1794314949938.jpg';
import pillarRadiologyImg from './assets/images/pillar_radiology_imaging_lagos_1794314952323.jpg';
import pillarPathologyImg from './assets/images/pillar_molecular_pathology_lab_1794314952569.jpg';
import pillarClinicImg from './assets/images/pillar_specialist_consultation_clinic_1794314953674.jpg';
import techIsoLabImg from './assets/images/tech_iso_automated_lab_system_1794314955563.jpg';
import docChidiImg from './assets/images/doctor_portrait_chidi_okonkwo_1794314957642.jpg';
import docAminaImg from './assets/images/doctor_portrait_amina_bello_1794314958871.jpg';
import docTundeImg from './assets/images/doctor_portrait_tunde_adeyemi_1794314960180.jpg';
import docNgoziImg from './assets/images/doctor_portrait_ngozi_eze_1794314960381.jpg';

interface SpecialtyDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  darkCard?: boolean;
  metrics: { label: string; value: string }[];
  procedures: string[];
  leadPhysician: string;
  formOptionValue: string;
}

interface DoctorProfile {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  education: string;
  experience: string;
  publications: string;
  bio: string;
}

const SPECIALTIES: SpecialtyDetail[] = [
  {
    id: 'radiology',
    title: 'Advanced Radiology & Imaging',
    subtitle: '3-Tesla MRI, 128-Slice CT & Digital Mammography',
    description:
      'High-definition 3T MRI, 128-slice CT, 4D Ultrasound, and Digital X-Ray interpreted by UK and Nigerian fellowship-trained consultant radiologists.',
    image: pillarRadiologyImg,
    darkCard: false,
    metrics: [
      { label: 'Scan Report Turnaround', value: 'Under 4 Hrs' },
      { label: 'Diagnostic Concordance', value: '99.8%' }
    ],
    procedures: [
      '3-Tesla Silent Brain, Spine & Musculoskeletal MRI',
      '128-Slice Coronary CT Angiography & Calcium Scoring',
      '3D Digital Tomosynthesis Mammography & Breast Ultrasound',
      '4D Foetal Anomaly & Maternal Doppler Imaging'
    ],
    leadPhysician: 'Dr. Chidi Okonkwo, FWACS, FRCR',
    formOptionValue: 'MRI / CT / 4D Ultrasound Scan'
  },
  {
    id: 'pathology',
    title: 'Molecular & Pathology Lab',
    subtitle: 'ISO-15189 Accredited Automated Diagnostics',
    description:
      'Fully automated blood panels, PCR viral load, hormonal assays, and histopathology biopsies with zero manual sample mix-ups.',
    image: pillarPathologyImg,
    darkCard: true,
    metrics: [
      { label: 'Routine Blood Results', value: '2–6 Hrs' },
      { label: 'Barcoded Sample Accuracy', value: '99.9%' }
    ],
    procedures: [
      'Comprehensive Renal, Liver, Lipid & HbA1c Metabolic Panels',
      'Real-Time PCR Infectious Disease & Viral Load Assays',
      'Endocrine, Fertility, Thyroid & Tumor Marker Profiling',
      'Rapid Histopathology, Cytology & Immunohistochemistry'
    ],
    leadPhysician: 'Dr. Amina Bello, FMCPath, FRCPath',
    formOptionValue: 'Molecular & Blood Pathology Panel'
  },
  {
    id: 'consultation',
    title: 'Specialist Consult & Wellness',
    subtitle: 'Same-Day Result Review & Executive Checkups',
    description:
      'Walk out with clarity. Review your scan and lab results the same day with in-house consultant physicians or via tele-consultation.',
    image: pillarClinicImg,
    darkCard: false,
    metrics: [
      { label: 'Executive Screening Duration', value: '3 Hours' },
      { label: 'Partner HMOs Accepted', value: '35+ HMOs' }
    ],
    procedures: [
      'Same-Day Comprehensive Executive Full-Body Health Check',
      'Cardiology ECG, Stress Treadmill & 2D Echocardiography',
      'Direct Doctor-to-Doctor Referral & Hospital Second Opinions',
      'Pre-Employment, Aviation & Corporate Wellness Screenings'
    ],
    leadPhysician: 'Dr. Babatunde Adeyemi, FWACP',
    formOptionValue: 'Comprehensive Executive Checkup'
  }
];

const DOCTORS: DoctorProfile[] = [
  {
    id: 'okonkwo',
    name: 'Dr. Chidi Okonkwo',
    role: 'Chief Consultant Radiologist',
    specialty: 'MRI / CT / 4D Ultrasound Scan',
    image: docChidiImg,
    education: 'MBBS (Lagos) · FWACS · FRCR (London)',
    experience: '19+ Years in Neuro & Cross-Sectional Diagnostic Imaging',
    publications: 'Dual-Verified Reporting Across 80,000+ MRI & CT Scans',
    bio: 'Trained at the College of Medicine, University of Lagos and Guy’s & St Thomas’ NHS Trust in London, Dr. Okonkwo leads MEDSTRAT’s sub-specialty radiology reporting network across Lagos and Abuja.'
  },
  {
    id: 'bello',
    name: 'Dr. Amina Bello',
    role: 'Director of Molecular Pathology',
    specialty: 'Molecular & Blood Pathology Panel',
    image: docAminaImg,
    education: 'MBBS (ABU Zaria) · FMCPath · MSc Molecular Medicine (UCL)',
    experience: '16+ Years in Clinical Pathology & ISO-15189 Quality Systems',
    publications: 'Lead Architect of West Africa’s Automated Barcoded Lab Track',
    bio: 'Dr. Bello oversees our automated clinical chemistry, hematology, and PCR laboratories, ensuring every blood and tissue sample meets strict ISO-15189 international quality benchmarks.'
  },
  {
    id: 'adeyemi',
    name: 'Dr. Babatunde Adeyemi',
    role: 'Head of Preventive Cardiology',
    specialty: 'Comprehensive Executive Checkup',
    image: docTundeImg,
    education: 'MBChB (Ife) · FWACP · Fellowship in Non-Invasive Cardiology',
    experience: '17+ Years in Hypertension, Stroke Prevention & Cardiac Imaging',
    publications: 'Spearheads Same-Day Executive Longevity & Heart Screenings',
    bio: 'Dr. Adeyemi translates complex diagnostic findings into clear, actionable treatment plans, helping Nigerian professionals and families prevent cardiovascular and metabolic disease early.'
  },
  {
    id: 'eze',
    name: 'Dr. Ngozi Eze',
    role: 'Lead Maternal & Breast Imaging',
    specialty: 'MRI / CT / 4D Ultrasound Scan',
    image: docNgoziImg,
    education: 'MBBS (UNN) · FMCR · Fellowship in Women’s & Foetal Imaging',
    experience: '14+ Years in 3D Mammography, Fertility & 4D Foetal Scans',
    publications: 'Champion of Early Breast & Cervical Screening in Nigeria',
    bio: 'Dr. Eze leads our dedicated Women’s Wellness & Foetal Assessment Suite in Victoria Island, delivering compassionate, high-precision anomaly scans and early breast diagnostics.'
  }
];

const DIAGNOSTIC_CENTRES = [
  {
    name: 'Lagos Flagship — Victoria Island Diagnostic & Specialist Hub',
    address: 'Plot 14, Adeola Odeku Street, Victoria Island, Lagos',
    waitTime: 'Walk-in / 10 mins',
    status: '3T MRI, 128-Slice CT & 24/7 Lab Active',
    phone: '+234 800 633 7872',
    coverage: 'Home Sample Pickup: Ikoyi, VI, Lekki Phase 1 & Ajah'
  },
  {
    name: 'Lagos Mainland — Ikeja GRA Imaging & Pathology Centre',
    address: '28 Isaac John Street, Ikeja GRA, Lagos',
    waitTime: 'Walk-in / 15 mins',
    status: 'Digital X-Ray, CT, 4D Scan & PCR Lab Ready',
    phone: '+234 809 911 7872',
    coverage: 'Home Sample Pickup: Ikeja, Maryland, Magodo, Surulere & Yaba'
  },
  {
    name: 'Abuja Hub — Maitama Specialist Diagnostic Centre',
    address: '42 Gana Street, Maitama, Abuja FCT',
    waitTime: 'Walk-in / 10 mins',
    status: 'Full Radiology Suite & Executive Lounge Open',
    phone: '+234 809 912 7872',
    coverage: 'Home Sample Pickup: Maitama, Asokoro, Wuse II, Garki & Jabi'
  },
  {
    name: 'Port Harcourt Centre — Old GRA Diagnostic Hub',
    address: '15 Forces Avenue, Old GRA, Port Harcourt, Rivers State',
    waitTime: 'Walk-in / 15 mins',
    status: 'CT Scan, Mammography & Automated Lab Active',
    phone: '+234 809 913 7872',
    coverage: 'Home Sample Pickup: GRA Phases 1–3, Peter Odili & Trans-Amadi'
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtyDetail | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorProfile | null>(null);
  const [centresModalOpen, setCentresModalOpen] = useState(false);
  const [activeTechIndex, setActiveTechIndex] = useState<number>(0);

  // Form states
  const [fullName, setFullName] = useState('');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [specialtyRequired, setSpecialtyRequired] = useState('Comprehensive Executive Checkup');
  const [preferredCentre, setPreferredCentre] = useState('Victoria Island, Lagos (or Home Collection)');
  const [symptoms, setSymptoms] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formFeedback, setFormFeedback] = useState<{
    type: 'success' | 'error';
    message: string;
    referenceId?: string;
  } | null>(null);

  // Scroll Reveal Observer matching the template's exact animation framework
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const type = target.dataset.animationType || 'up';
          const delay = target.dataset.animationDelay || '0';

          setTimeout(() => {
            if (type === 'up') target.classList.add('reveal-visible');
            if (type === 'left') target.classList.add('reveal-left-visible');
            if (type === 'scale') target.classList.add('reveal-scale-visible');
            target.classList.add('animate-on-scroll-visible');
          }, parseInt(delay, 10));

          observer.unobserve(target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('[data-animation-on-scroll]');
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      const type = htmlEl.dataset.animationType || 'up';
      if (type === 'up') htmlEl.classList.add('reveal-hidden');
      if (type === 'left') htmlEl.classList.add('reveal-left-hidden');
      if (type === 'scale') htmlEl.classList.add('reveal-scale-hidden');
      observer.observe(htmlEl);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu or modal is open
  useEffect(() => {
    if (mobileMenuOpen || selectedSpecialty || selectedDoctor || centresModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, selectedSpecialty, selectedDoctor, centresModalOpen]);

  const scrollToSection = (sectionId: string, prefillService?: string) => {
    setMobileMenuOpen(false);
    setSelectedSpecialty(null);
    setSelectedDoctor(null);
    setCentresModalOpen(false);

    if (prefillService) {
      setSpecialtyRequired(prefillService);
    }

    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneOrEmail.trim()) {
      setFormFeedback({
        type: 'error',
        message:
          'Please enter your full name and Nigerian phone number or email address to confirm your slot.'
      });
      return;
    }

    setIsSubmitting(true);
    setFormFeedback(null);

    setTimeout(() => {
      const refCode = `MS-NG-${Math.floor(100000 + Math.random() * 900000)}`;
      setIsSubmitting(false);
      setFormFeedback({
        type: 'success',
        message:
          'Your diagnostic booking request has been received. Our Patient Desk in Lagos/Abuja will send your confirmation and preparation guide via WhatsApp & SMS within 15 minutes.',
        referenceId: refCode
      });
      setFullName('');
      setPhoneOrEmail('');
      setSymptoms('');
    }, 600);
  };

  return (
    <div className="font-secondary bg-neutral-background text-brand-primary overflow-x-hidden min-h-screen flex flex-col w-full relative">
      {/* Header — Follows 3-zone Top Bar Contract while keeping template design */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-background/80 backdrop-blur-md border-b border-brand-primary/5">
        <nav
          data-editable="header"
          className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between gap-8"
        >
          <a
            data-editable="text"
            data-path="header.logo.text"
            className="font-primary text-2xl font-bold text-brand-primary tracking-tight whitespace-nowrap shrink-0"
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            MEDSTRAT<span className="text-brand-accent">.</span>
          </a>

          <div
            className="hidden md:flex items-center gap-10"
            data-editable-list="header.navLinks"
          >
            <a
              data-editable="text"
              data-path="header.navLinks[0].text"
              className="font-secondary text-sm font-medium text-brand-primary/70 hover:text-brand-accent transition-colors whitespace-nowrap shrink-0"
              href="#services"
            >
              Diagnostics
            </a>
            <a
              data-editable="text"
              data-path="header.navLinks[1].text"
              className="font-secondary text-sm font-medium text-brand-primary/70 hover:text-brand-accent transition-colors whitespace-nowrap shrink-0"
              href="#technology"
            >
              Accuracy Standard
            </a>
            <a
              data-editable="text"
              data-path="header.navLinks[2].text"
              className="font-secondary text-sm font-medium text-brand-primary/70 hover:text-brand-accent transition-colors whitespace-nowrap shrink-0"
              href="#doctors"
            >
              Consultants
            </a>
            <a
              className="font-secondary text-sm font-medium text-brand-primary/70 hover:text-brand-accent transition-colors whitespace-nowrap shrink-0"
              href="#emergency"
            >
              Centres
            </a>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              data-editable="text"
              data-path="header.ctaButton.text"
              className="hidden sm:block bg-brand-primary text-text-primary font-secondary text-sm font-bold px-6 lg:px-8 py-3 rounded-full hover:bg-brand-accent transition-all shadow-lg shadow-brand-primary/10 cursor-pointer whitespace-nowrap shrink-0"
            >
              Book Scan or Lab Test
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-brand-primary cursor-pointer"
              aria-label="Toggle Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="fixed inset-0 z-[60] bg-brand-primary p-6 md:hidden flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <a
                className="font-primary text-2xl font-bold text-text-primary tracking-tight"
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                MEDSTRAT<span className="text-brand-accent">.</span>
              </a>
              <button
                id="mobile-menu-close"
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-text-primary cursor-pointer"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link font-secondary text-lg font-semibold text-text-primary hover:text-brand-accent transition-colors"
                href="#services"
              >
                Diagnostics & Scans
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link font-secondary text-lg font-semibold text-text-primary hover:text-brand-accent transition-colors"
                href="#technology"
              >
                Accuracy Standard
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link font-secondary text-lg font-semibold text-text-primary hover:text-brand-accent transition-colors"
                href="#doctors"
              >
                Our Consultants
              </a>
              <div className="pt-8 border-t border-text-primary/10 mt-4">
                <a
                  href="#emergency"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-secondary text-sm text-brand-accent font-bold mb-6"
                >
                  Urgent Scan & Home Phlebotomy: 0800-MEDSTRAT
                </a>
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-brand-accent text-text-primary font-secondary text-base font-bold px-8 py-5 rounded-full cursor-pointer"
                >
                  Book Scan or Lab Test
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main id="top" className="flex-grow pt-20">
        {/* Hero Section — Preserving the exact 38% / 62% split card structure */}
        <section className="py-12 md:py-20 flex items-center justify-center bg-[#fcfcfc] px-4 md:px-10 overflow-hidden">
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-[38%_62%] min-h-[550px] rounded-2xl overflow-hidden shadow-2xl border border-brand-primary/5 items-stretch">
            {/* Left Column: Medical Media Section */}
            <div className="relative w-full h-[380px] lg:h-auto bg-brand-primary overflow-hidden group">
              <img
                src={heroRadiologyImg}
                alt="Nigerian Consultant Radiologist reviewing 3T MRI brain scan in Lagos"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover img-medical-reveal grayscale"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/50 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-5 left-5 right-5 text-xs font-secondary text-text-primary/90">
                Victoria Island & Maitama Centres · Lagos · Abuja · Port Harcourt
              </div>
            </div>

            {/* Right Column: Strategic Content Section */}
            <div className="bg-brand-primary flex flex-col justify-center p-8 md:p-12 lg:p-16 relative">
              <div className="space-y-6 relative z-10">
                <div
                  data-animation-on-scroll=""
                  data-animation-type="up"
                  data-animation-delay="100"
                  className="text-reveal-container"
                >
                  <h1
                    className="font-primary text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-text-primary tracking-tighter"
                    data-editable="text"
                    data-path="home.hero.title"
                  >
                    Accurate Diagnosis the{' '}
                    <span className="text-brand-accent">First Time.</span> Results in
                    Hours, Not Weeks.
                  </h1>
                </div>

                <p
                  data-animation-on-scroll=""
                  data-animation-delay="300"
                  className="font-secondary text-base md:text-lg text-text-primary/80 max-w-[560px] leading-relaxed"
                  data-editable="text"
                  data-path="home.hero.description"
                >
                  No more flying abroad for clarity or repeating unreliable lab tests.
                  We combine 3-Tesla MRI, 128-slice CT, and ISO-15189 automated
                  molecular pathology with consultant-verified reports delivered the
                  same day.
                </p>

                {/* CTA Group */}
                <div
                  data-animation-on-scroll=""
                  data-animation-delay="500"
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 sm:gap-8 pt-6"
                >
                  <button
                    type="button"
                    onClick={() =>
                      scrollToSection('contact', 'Comprehensive Executive Checkup')
                    }
                    className="px-10 py-5 bg-brand-accent text-white font-secondary text-sm font-bold rounded-full hover:bg-white hover:text-brand-primary transition-all shadow-accent-glow cursor-pointer whitespace-nowrap"
                  >
                    Book Instant Diagnostic Slot
                  </button>
                  <a
                    href="#services"
                    className="group flex items-center justify-center sm:justify-start gap-3 font-secondary text-sm font-semibold text-text-primary hover:text-brand-accent transition-colors py-2 whitespace-nowrap"
                  >
                    Explore Scans & Lab Panels
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Metrics */}
                <div className="pt-10 border-t border-text-primary/10 mt-8 grid grid-cols-2 md:flex md:flex-wrap items-center gap-8 md:gap-10">
                  <div
                    data-animation-on-scroll=""
                    data-animation-type="up"
                    data-animation-delay="600"
                    className="flex flex-col"
                  >
                    <span className="font-primary text-3xl text-text-primary tabular-nums">
                      2–6 HRS
                    </span>
                    <span className="font-secondary text-[10px] uppercase font-bold tracking-widest text-brand-accent">
                      Lab & Scan Turnaround
                    </span>
                  </div>
                  <div
                    data-animation-on-scroll=""
                    data-animation-type="up"
                    data-animation-delay="700"
                    className="flex flex-col"
                  >
                    <span className="font-primary text-3xl text-text-primary tabular-nums">
                      ISO 15189
                    </span>
                    <span className="font-secondary text-[10px] uppercase font-bold tracking-widest text-brand-accent">
                      Accredited Accuracy
                    </span>
                  </div>
                  <div
                    data-animation-on-scroll=""
                    data-animation-type="up"
                    data-animation-delay="800"
                    className="flex flex-col col-span-2 md:col-span-1"
                  >
                    <span className="font-primary text-3xl text-text-primary tabular-nums">
                      35+ HMOs
                    </span>
                    <span className="font-secondary text-[10px] uppercase font-bold tracking-widest text-brand-accent">
                      Direct Billing Partner
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Urgent Scan & Home Sample Collection Strip */}
        <section id="emergency" className="py-6 bg-brand-accent text-white">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-secondary text-[10px] uppercase font-bold tracking-widest opacity-80">
                  Urgent MRI / CT Dispatch & Home Sample Collection (Lagos · Abuja · PH)
                </p>
                <p className="font-primary text-xl font-bold leading-none">
                  Need a same-day scan or home blood draw? Call{' '}
                  <a href="tel:+2348006337872" className="underline hover:opacity-90">
                    +234 800 MED-STRAT
                  </a>
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setCentresModalOpen(true)}
              className="w-full md:w-auto bg-white text-brand-accent font-secondary text-sm font-bold px-8 py-4 rounded-full hover:bg-brand-primary hover:text-white transition-all shadow-lg cursor-pointer whitespace-nowrap"
            >
              Find Nearest Diagnostic Centre
            </button>
          </div>
        </section>

        {/* Specialties Grid — 3 Pillars for the Diagnostic & Specialist Hub */}
        <section id="services" className="py-24 md:py-32 bg-neutral-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div
              className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20"
              data-animation-on-scroll=""
            >
              <div className="max-w-2xl">
                <span className="font-secondary text-xs font-bold uppercase tracking-widest text-brand-accent block mb-4">
                  Diagnostic Pillars
                </span>
                <h2 className="font-primary text-4xl md:text-6xl text-brand-primary leading-[1.1]">
                  Definitive Answers for{' '}
                  <span className="italic font-normal">Every</span> Clinical Question.
                </h2>
              </div>
              <p className="font-secondary text-text-secondary max-w-sm pb-2">
                Whether your doctor referred you for a specialized scan or you want
                a proactive full-body checkup, every test is double-verified for total
                certainty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SPECIALTIES.map((spec, idx) => (
                <div
                  key={spec.id}
                  onClick={() => setSelectedSpecialty(spec)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedSpecialty(spec);
                    }
                  }}
                  className={`group p-10 rounded-md transition-all hover:shadow-2xl duration-500 cursor-pointer text-left ${
                    spec.darkCard
                      ? 'bg-brand-primary border border-brand-accent/10'
                      : 'bg-white border border-brand-primary/5 hover:border-brand-accent/30'
                  }`}
                  data-animation-on-scroll=""
                  data-animation-type="up"
                  data-animation-delay={String(idx * 200)}
                >
                  <div className="text-brand-accent mb-12 flex justify-between items-center">
                    <div className="w-8 h-px bg-brand-accent/30"></div>
                    <ArrowRight
                      className={`w-5 h-5 group-hover:rotate-45 transition-transform ${
                        spec.darkCard ? 'text-text-primary' : 'text-brand-accent'
                      }`}
                    />
                  </div>
                  <h3
                    className={`font-primary text-3xl mb-6 ${
                      spec.darkCard ? 'text-text-primary' : 'text-brand-primary'
                    }`}
                  >
                    {spec.title}
                  </h3>
                  <p
                    className={`font-secondary mb-10 leading-relaxed ${
                      spec.darkCard ? 'text-text-primary/60' : 'text-text-secondary'
                    }`}
                  >
                    {spec.description}
                  </p>
                  <div className="relative overflow-hidden rounded-sm">
                    <img
                      src={spec.image}
                      alt={spec.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-48 object-cover rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Precision Tech Section — ISO-15189, Instant Portal Delivery, Direct Doctor Reporting */}
        <section
          id="technology"
          className="py-24 bg-brand-primary text-text-primary overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div data-animation-on-scroll="" className="space-y-10">
              <div>
                <span className="font-secondary text-xs font-bold uppercase tracking-widest text-brand-accent block mb-4">
                  Zero-Error Clinical Infrastructure
                </span>
                <h2 className="font-primary text-4xl md:text-6xl leading-tight">
                  Engineered to End{' '}
                  <span className="text-brand-accent">Misdiagnosis.</span>
                </h2>
              </div>

              <div className="space-y-8">
                {[
                  {
                    num: '01',
                    title: 'ISO-15189 Barcoded Lab Automation',
                    desc: 'Robotic sample tracking and daily international quality calibration eliminate human error and reagent degradation.',
                    detail:
                      'Backed by 24/7 tri-redundant power and cold-chain reagent monitoring so every assay in Lagos and Abuja matches UK/US reference standards.'
                  },
                  {
                    num: '02',
                    title: 'Encrypted WhatsApp, SMS & Portal Delivery',
                    desc: 'No need to brave traffic just to pick up paper films. Receive your verified lab reports and DICOM imaging links on your phone.',
                    detail:
                      'Routine blood panels are ready in 2–6 hours; MRI, CT, and ultrasound reports are signed off by consultants within 4 hours.'
                  },
                  {
                    num: '03',
                    title: 'Dual-Consultant Sign-Off & HMO Integration',
                    desc: 'Complex MRI, CT, and oncology biopsies are co-reviewed by two sub-specialty consultants and sent directly to your referring doctor.',
                    detail:
                      'Seamless pre-authorization with AXA Mansard, Hygeia, Reliance HMO, Leadway Health, Avon, and 30+ corporate health plans.'
                  }
                ].map((item, idx) => {
                  const isActive = activeTechIndex === idx;
                  return (
                    <div
                      key={item.num}
                      onClick={() => setActiveTechIndex(idx)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveTechIndex(idx);
                        }
                      }}
                      className={`flex gap-6 items-start p-4 -mx-4 rounded-lg transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-brand-secondary/50 border border-text-primary/10'
                          : 'hover:bg-brand-secondary/20 border border-transparent'
                      }`}
                    >
                      <div className="font-primary text-brand-accent text-2xl tabular-nums">
                        {item.num}
                      </div>
                      <div>
                        <h4 className="font-primary text-2xl mb-2">{item.title}</h4>
                        <p className="text-text-primary/60 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                        {isActive && (
                          <p className="text-brand-accent text-xs mt-3 leading-relaxed font-secondary">
                            {item.detail}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative" data-animation-on-scroll="">
              <div className="absolute -inset-10 bg-brand-accent/10 blur-[100px] rounded-full pointer-events-none"></div>
              <div className="relative z-10 border border-text-primary/10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={techIsoLabImg}
                  alt="Nigerian Biomedical Lab Director inspecting automated clinical analyzer track"
                  referrerPolicy="no-referrer"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-primary via-brand-primary/80 to-transparent p-8">
                  <div className="flex items-center justify-between text-xs font-mono text-text-primary/80">
                    <span>
                      {activeTechIndex === 0 && 'ROCHE COBAS & SIEMENS AUTOMATED TRACK'}
                      {activeTechIndex === 1 && 'CLOUD PACS & ENCRYPTED PATIENT PORTAL'}
                      {activeTechIndex === 2 && 'UK / NIGERIA DUAL-CONSULTANT TELERADIOLOGY'}
                    </span>
                    <span className="text-brand-accent">MLSCN & ISO 15189</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experts Section — Nigerian Consultant Radiologists, Pathologists & Specialists */}
        <section id="doctors" className="py-24 md:py-32 bg-neutral-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div
              className="text-center max-w-3xl mx-auto mb-20"
              data-animation-on-scroll=""
            >
              <span className="font-secondary text-xs font-bold uppercase tracking-widest text-brand-accent block mb-4">
                Clinical Leadership
              </span>
              <h2 className="font-primary text-4xl md:text-5xl text-brand-primary">
                Consultant-Led Diagnostic Certainty.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {DOCTORS.map((doc, idx) => (
                <div
                  key={doc.id}
                  onClick={() => setSelectedDoctor(doc)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedDoctor(doc);
                    }
                  }}
                  className="group cursor-pointer text-left"
                  data-animation-on-scroll=""
                  data-animation-type="scale"
                  data-animation-delay={String(idx * 150)}
                >
                  <div className="relative h-[400px] mb-6 rounded-md overflow-hidden bg-brand-primary">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-xs font-secondary font-semibold text-white flex items-center gap-2">
                        View Consultant Credentials <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                  <h4 className="font-primary text-xl text-brand-primary group-hover:text-brand-accent transition-colors">
                    {doc.name}
                  </h4>
                  <p className="font-secondary text-xs uppercase tracking-widest text-text-secondary font-bold">
                    {doc.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment / Diagnostic Booking Section */}
        <section
          id="contact"
          className="py-24 bg-brand-primary text-text-primary relative overflow-hidden"
        >
          {/* Mesh Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent pointer-events-none"></div>

          <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-20 items-stretch">
              <div
                data-animation-on-scroll=""
                className="space-y-8 flex flex-col justify-center"
              >
                <div>
                  <span className="font-secondary text-xs font-bold uppercase tracking-widest text-brand-accent block mb-4">
                    Zero Wait-Time Booking
                  </span>
                  <h2 className="font-primary text-5xl md:text-7xl leading-tight">
                    Book Your Scan or{' '}
                    <span className="text-brand-accent">Home Test</span> Today.
                  </h2>
                </div>
                <p className="font-secondary text-lg text-text-primary/60 max-w-md">
                  Skip the hospital queue. Reserve a priority slot at our Victoria
                  Island, Ikeja GRA, Maitama, or Port Harcourt centres—or request a
                  certified phlebotomist to collect your samples at home or your
                  office.
                </p>

                <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="p-6 bg-brand-secondary/30 rounded-md border border-text-primary/5">
                    <span className="font-secondary text-[10px] uppercase font-bold tracking-widest text-brand-accent block mb-2">
                      Lagos & Abuja Hubs
                    </span>
                    <p className="font-primary text-lg">VI · Ikeja · Maitama</p>
                    <button
                      type="button"
                      onClick={() => setCentresModalOpen(true)}
                      className="text-xs text-text-primary/60 hover:text-brand-accent mt-1 underline cursor-pointer transition-colors"
                    >
                      View All 4 Centres & Hours
                    </button>
                  </div>
                  <div className="p-6 bg-brand-secondary/30 rounded-md border border-text-primary/5">
                    <span className="font-secondary text-[10px] uppercase font-bold tracking-widest text-brand-accent block mb-2">
                      Patient Concierge Desk
                    </span>
                    <p className="font-primary text-lg">0800-MEDSTRAT</p>
                    <a
                      href="tel:+2348006337872"
                      className="inline-block text-xs text-text-primary/60 hover:text-brand-accent mt-1 underline cursor-pointer transition-colors"
                    >
                      Speak with a Triage Officer
                    </a>
                  </div>
                </div>
              </div>

              {/* Appointment Form */}
              <div
                className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl text-brand-primary"
                data-animation-on-scroll=""
              >
                <h3 className="font-primary text-3xl mb-8">
                  Instant Diagnostic Booking
                </h3>
                <form className="space-y-6" onSubmit={handleFormSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="full-name"
                        className="font-secondary text-[10px] uppercase font-bold tracking-widest text-text-secondary block"
                      >
                        Full Name
                      </label>
                      <input
                        id="full-name"
                        name="fullName"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Oluwaseun Adeyemi"
                        className="w-full bg-neutral-background border border-brand-primary/10 rounded-md px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors font-secondary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone-or-email"
                        className="font-secondary text-[10px] uppercase font-bold tracking-widest text-text-secondary block"
                      >
                        WhatsApp Number / Email
                      </label>
                      <input
                        id="phone-or-email"
                        name="phoneOrEmail"
                        type="text"
                        required
                        value={phoneOrEmail}
                        onChange={(e) => setPhoneOrEmail(e.target.value)}
                        placeholder="+234 803 000 0000"
                        className="w-full bg-neutral-background border border-brand-primary/10 rounded-md px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors font-secondary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="specialty-select"
                        className="font-secondary text-[10px] uppercase font-bold tracking-widest text-text-secondary block"
                      >
                        Diagnostic Service Required
                      </label>
                      <select
                        id="specialty-select"
                        name="specialty"
                        value={specialtyRequired}
                        onChange={(e) => setSpecialtyRequired(e.target.value)}
                        className="w-full bg-neutral-background border border-brand-primary/10 rounded-md px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors font-secondary"
                      >
                        <option value="Comprehensive Executive Checkup">
                          Comprehensive Executive Checkup
                        </option>
                        <option value="MRI / CT / 4D Ultrasound Scan">
                          MRI / CT / 4D Ultrasound Scan
                        </option>
                        <option value="Molecular & Blood Pathology Panel">
                          Molecular & Blood Pathology Panel
                        </option>
                        <option value="Home / Office Sample Collection">
                          Home / Office Sample Collection
                        </option>
                        <option value="Specialist Result Consultation">
                          Specialist Result Consultation
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="centre-select"
                        className="font-secondary text-[10px] uppercase font-bold tracking-widest text-text-secondary block"
                      >
                        Preferred Location
                      </label>
                      <select
                        id="centre-select"
                        name="centre"
                        value={preferredCentre}
                        onChange={(e) => setPreferredCentre(e.target.value)}
                        className="w-full bg-neutral-background border border-brand-primary/10 rounded-md px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors font-secondary"
                      >
                        <option value="Victoria Island, Lagos (or Home Collection)">
                          Victoria Island, Lagos
                        </option>
                        <option value="Ikeja GRA, Lagos">Ikeja GRA, Lagos</option>
                        <option value="Maitama, Abuja FCT">Maitama, Abuja FCT</option>
                        <option value="Old GRA, Port Harcourt">
                          Old GRA, Port Harcourt
                        </option>
                        <option value="Home / Office Phlebotomy Dispatch">
                          Home / Office Dispatch
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="clinical-brief"
                      className="font-secondary text-[10px] uppercase font-bold tracking-widest text-text-secondary block"
                    >
                      Doctor’s Referral Note / HMO Name / Symptoms (Optional)
                    </label>
                    <textarea
                      id="clinical-brief"
                      name="symptoms"
                      rows={3}
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      placeholder="State the scan/test requested by your doctor, your HMO provider (if applicable), or preferred time..."
                      className="w-full bg-neutral-background border border-brand-primary/10 rounded-md px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors font-secondary resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-brand-primary text-text-primary font-secondary text-sm font-bold rounded-md hover:bg-brand-accent transition-all shadow-xl cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? 'Confirming Slot...' : 'Confirm Diagnostic Slot'}
                  </button>

                  {formFeedback && (
                    <div
                      role="status"
                      aria-live="polite"
                      className={`p-4 rounded-md text-sm font-secondary flex items-start gap-3 ${
                        formFeedback.type === 'success'
                          ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                          : 'bg-red-50 border border-red-200 text-red-900'
                      }`}
                    >
                      {formFeedback.type === 'success' && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="font-medium">{formFeedback.message}</p>
                        {formFeedback.referenceId && (
                          <p className="text-xs font-mono mt-1 text-emerald-700">
                            Booking ID: {formFeedback.referenceId} · {preferredCentre}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  <p className="text-[10px] text-center text-text-secondary font-secondary font-medium tracking-wide">
                    NDPR COMPLIANT • ISO-15189 ACCREDITED • HMO & PRIVATE PAY ACCEPTED
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-primary text-text-primary pt-24 pb-12 border-t border-text-primary/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <h3 className="font-primary text-2xl font-bold mb-6">
                MEDSTRAT<span className="text-brand-accent">.</span>
              </h3>
              <p className="text-text-primary/60 text-sm leading-relaxed mb-8">
                Nigeria’s fast, transparent diagnostic and specialist referral hub.
                Delivering ISO-15189 lab accuracy and 3-Tesla imaging across Lagos,
                Abuja, and Port Harcourt.
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  aria-label="Twitter"
                  className="w-8 h-8 rounded-full bg-brand-secondary flex items-center justify-center hover:bg-brand-accent transition-colors cursor-pointer"
                >
                  <span className="font-mono text-[10px]">TW</span>
                </a>
                <a
                  href="#contact"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-brand-secondary flex items-center justify-center hover:bg-brand-accent transition-colors cursor-pointer"
                >
                  <span className="font-mono text-[10px]">LI</span>
                </a>
              </div>
            </div>

            <div>
              <span className="font-secondary text-xs font-bold uppercase tracking-widest text-brand-accent block mb-6">
                Diagnostics
              </span>
              <ul className="space-y-4 font-secondary text-sm text-text-primary/70">
                <li>
                  <button
                    type="button"
                    onClick={() => setSelectedSpecialty(SPECIALTIES[0])}
                    className="hover:text-brand-accent transition-colors cursor-pointer"
                  >
                    3T MRI & 128-Slice CT
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setSelectedSpecialty(SPECIALTIES[1])}
                    className="hover:text-brand-accent transition-colors cursor-pointer"
                  >
                    Molecular & PCR Pathology
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setSelectedSpecialty(SPECIALTIES[2])}
                    className="hover:text-brand-accent transition-colors cursor-pointer"
                  >
                    Executive Health Checkups
                  </button>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-brand-accent transition-colors"
                  >
                    Home Sample Collection
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-secondary text-xs font-bold uppercase tracking-widest text-brand-accent block mb-6">
                Patients & HMOs
              </span>
              <ul className="space-y-4 font-secondary text-sm text-text-primary/70">
                <li>
                  <a
                    href="#contact"
                    className="hover:text-brand-accent transition-colors"
                  >
                    Online Result Portal
                  </a>
                </li>
                <li>
                  <a
                    href="#technology"
                    className="hover:text-brand-accent transition-colors"
                  >
                    Partner HMOs & Tariffs
                  </a>
                </li>
                <li>
                  <a
                    href="#doctors"
                    className="hover:text-brand-accent transition-colors"
                  >
                    Doctor Referral Desk
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setCentresModalOpen(true)}
                    className="hover:text-brand-accent transition-colors cursor-pointer"
                  >
                    Lagos, Abuja & PH Branches
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-secondary text-xs font-bold uppercase tracking-widest text-brand-accent block mb-6">
                Contact
              </span>
              <ul className="space-y-4 font-secondary text-sm text-text-primary/70">
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-semibold">Flagship:</span>
                  <span>Plot 14 Adeola Odeku St, Victoria Island, Lagos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-semibold">Abuja:</span>
                  <span>42 Gana Street, Maitama, Abuja FCT</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-semibold">Phone:</span>
                  <a
                    href="tel:+2348006337872"
                    className="hover:text-brand-accent transition-colors"
                  >
                    +234 800 MED-STRAT
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent font-semibold">Email:</span>
                  <a
                    href="mailto:results@medstrat.ng"
                    className="hover:text-brand-accent transition-colors"
                  >
                    results@medstrat.ng
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-text-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-primary/40">
              © 2026 MEDSTRAT DIAGNOSTICS NIGERIA LTD. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8">
              <a
                href="#contact"
                className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-primary/40 hover:text-brand-accent"
              >
                NDPR Privacy Policy
              </a>
              <a
                href="#contact"
                className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-primary/40 hover:text-brand-accent"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Specialty Detail Modal */}
      {selectedSpecialty && (
        <div
          className="fixed inset-0 z-50 bg-brand-primary/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedSpecialty(null)}
        >
          <div
            className="bg-white text-brand-primary max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl border border-brand-primary/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 bg-brand-primary">
              <img
                src={selectedSpecialty.image}
                alt={selectedSpecialty.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/40 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedSpecialty(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-primary/70 text-white flex items-center justify-center hover:bg-brand-accent transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 left-8 right-8 text-white">
                <p className="font-secondary text-xs uppercase tracking-widest text-brand-accent font-bold mb-1">
                  {selectedSpecialty.subtitle}
                </p>
                <h3 className="font-primary text-3xl font-bold">
                  {selectedSpecialty.title}
                </h3>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <p className="font-secondary text-text-secondary leading-relaxed">
                {selectedSpecialty.description}
              </p>

              <div className="grid grid-cols-2 gap-4 py-4 border-y border-brand-primary/10">
                {selectedSpecialty.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-primary text-2xl font-bold text-brand-primary tabular-nums">
                      {m.value}
                    </div>
                    <div className="font-secondary text-xs text-text-secondary">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-primary text-lg font-bold mb-3">
                  Available Investigations & Turnaround Standards
                </h4>
                <ul className="space-y-2">
                  {selectedSpecialty.procedures.map((proc, i) => (
                    <li
                      key={proc}
                      className="font-secondary text-sm text-brand-primary/80 flex items-center gap-3"
                    >
                      <span className="font-mono text-xs text-brand-accent font-semibold tabular-nums">
                        0{i + 1}.
                      </span>
                      <span>{proc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                <div className="text-xs font-secondary text-text-secondary">
                  Clinical Lead:{' '}
                  <span className="font-semibold text-brand-primary">
                    {selectedSpecialty.leadPhysician}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    scrollToSection('contact', selectedSpecialty.formOptionValue)
                  }
                  className="w-full sm:w-auto px-6 py-3 bg-brand-primary text-white font-secondary text-xs font-bold rounded-full hover:bg-brand-accent transition-colors cursor-pointer whitespace-nowrap"
                >
                  Book {selectedSpecialty.title}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Doctor Profile Modal */}
      {selectedDoctor && (
        <div
          className="fixed inset-0 z-50 bg-brand-primary/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedDoctor(null)}
        >
          <div
            className="bg-white text-brand-primary max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl border border-brand-primary/10 grid grid-cols-1 md:grid-cols-[40%_60%]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-auto bg-brand-primary">
              <img
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-between relative">
              <button
                type="button"
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-surface text-brand-primary flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-4">
                <div>
                  <p className="font-secondary text-[10px] uppercase tracking-widest text-brand-accent font-bold">
                    {selectedDoctor.role}
                  </p>
                  <h3 className="font-primary text-2xl font-bold text-brand-primary">
                    {selectedDoctor.name}
                  </h3>
                </div>

                <p className="font-secondary text-sm text-text-secondary leading-relaxed">
                  {selectedDoctor.bio}
                </p>

                <div className="space-y-2 pt-2 border-t border-brand-primary/10 text-xs font-secondary">
                  <div>
                    <span className="font-semibold text-brand-primary">
                      Qualifications:{' '}
                    </span>
                    <span className="text-text-secondary">
                      {selectedDoctor.education}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-brand-primary">
                      Clinical Experience:{' '}
                    </span>
                    <span className="text-text-secondary">
                      {selectedDoctor.experience}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-brand-primary">
                      Track Record:{' '}
                    </span>
                    <span className="text-text-secondary">
                      {selectedDoctor.publications}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-primary/10">
                <button
                  type="button"
                  onClick={() =>
                    scrollToSection('contact', selectedDoctor.specialty)
                  }
                  className="w-full py-3.5 bg-brand-primary text-white font-secondary text-xs font-bold rounded-full hover:bg-brand-accent transition-colors cursor-pointer"
                >
                  Book Review with {selectedDoctor.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Diagnostic Centres Locator Modal */}
      {centresModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-brand-primary/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setCentresModalOpen(false)}
        >
          <div
            className="bg-white text-brand-primary max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl border border-brand-primary/10 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-brand-primary text-white p-6 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-accent/20 text-brand-accent flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-secondary text-[10px] uppercase tracking-widest text-brand-accent font-bold block">
                    Lagos · Abuja · Port Harcourt Network
                  </span>
                  <h3 className="font-primary text-2xl font-bold">
                    Diagnostic Centres & Home Collection Zones
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setCentresModalOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4 overflow-y-auto">
              {DIAGNOSTIC_CENTRES.map((loc) => (
                <div
                  key={loc.name}
                  className="p-5 rounded-xl bg-neutral-background border border-brand-primary/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <h4 className="font-primary text-lg font-bold text-brand-primary">
                      {loc.name}
                    </h4>
                    <p className="font-secondary text-xs text-text-secondary flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      {loc.address}
                    </p>
                    <p className="font-secondary text-xs text-brand-primary/70">
                      {loc.coverage}
                    </p>
                    <div className="flex items-center gap-3 pt-1 text-xs font-secondary text-brand-primary/80">
                      <span>Avg. Check-in: {loc.waitTime}</span>
                      <span>·</span>
                      <span className="text-brand-accent font-medium">
                        {loc.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-stretch sm:items-end gap-2 shrink-0">
                    <a
                      href={`tel:${loc.phone.replace(/[^0-9+]/g, '')}`}
                      className="px-4 py-2 bg-brand-primary text-white font-secondary text-xs font-bold rounded-full hover:bg-brand-accent transition-colors text-center whitespace-nowrap"
                    >
                      Call {loc.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
