"use client"

import { JsonLd } from "react-schemaorg"
import type { Organization, WebSite, FAQPage } from "schema-dts"
import { useCallback, useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowRight, MapPin, Shield, Clock, Eye } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Particles from "react-particles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"
import { Link as ScrollLink, Element } from "react-scroll"
import Link from "next/link"
import { SectionCard } from "@/components/ui/section-card"
import { MobileNav } from "@/components/ui/mobile-nav"

export default function ClientPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const headerRef = useRef<HTMLElement>(null)

  const [particleCount, setParticleCount] = useState(80)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setParticleCount(40)
      } else if (width < 1024) {
        setParticleCount(60)
      } else {
        setParticleCount(80)
      }
    }

    handleResize() // Set initial particle count
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <>
      {/* Enhanced Organization Schema */}
      <JsonLd<Organization>
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Zoul Capital",
          url: "https://zoul.capital",
          logo: "https://zoul.capital/logo.png",
          description:
            "Zoul Capital is a privately held investment firm managing and growing the wealth of a single family.",
          address: {
            "@type": "PostalAddress",
            addressCountry: "Spain",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Inquiries",
            url: "https://zoul.capital/contact",
          },
          sameAs: ["https://www.linkedin.com/company/zoul-capital"],
        }}
      />

      {/* Website Schema */}
      <JsonLd<WebSite>
        item={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Zoul Capital",
          url: "https://zoul.capital",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://zoul.capital/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        }}
      />

      {/* FAQ Schema */}
      <JsonLd<FAQPage>
        item={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is Zoul Capital?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Zoul Capital is a privately held investment firm that manages and grows the financial and generational wealth of a single family. Our focus is to protect and enhance the family's long-term interests by investing in opportunities with proven value and sustainable growth potential.",
              },
            },
            {
              "@type": "Question",
              name: "What industries does Zoul Capital invest in?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Zoul Capital primarily invests in real estate assets, private educational institutions, and educational service providers. We are also actively seeking opportunities in manufacturing, distribution, technology, and other industries that align with our investment criteria.",
              },
            },
            {
              "@type": "Question",
              name: "Does Zoul Capital provide external management services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No, Zoul Capital operates exclusively as a family office and does not provide external management services. We focus solely on managing and growing our family's wealth.",
              },
            },
          ],
        }}
      />

      <div className="flex flex-col min-h-screen relative">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "#6B21E8",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: particleCount,
                max: 80, // Maximum number of particles
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 -z-10"
        />

        <header ref={headerRef} className="bg-white bg-opacity-90 shadow-sm sticky top-0 z-50">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-6 flex justify-between items-center relative"
          >
            <div className="flex items-center space-x-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zoul%20(2)-FStLOd3KoWvG8VWrwNiqVHUnwA2aWx.png"
                alt="Zoul Capital Logo"
                width={40}
                height={40}
                className="rounded"
                priority
              />
              <span className="text-2xl font-bold text-background-dark">Zoul Capital</span>
            </div>
            <nav className="hidden md:block" aria-label="Main Navigation">
              <ul className="flex space-x-6">
                <NavItem to="about" label="About" />
                <NavItem to="mission" label="Mission" />
                <NavItem to="approach" label="Approach" />
                <NavItem to="contact" label="Contact" />
              </ul>
            </nav>
            <MobileNav
              items={[
                { to: "about", label: "About" },
                { to: "mission", label: "Mission" },
                { to: "approach", label: "Approach" },
                { to: "contact", label: "Contact" },
              ]}
            />
          </motion.div>
        </header>

        <main className="flex-grow">
          <motion.section
            style={{ opacity, scale }}
            className="relative min-h-screen flex items-center justify-center text-white py-20"
            aria-labelledby="hero-heading"
          >
            <div className="container mx-auto px-4 text-center">
              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Zoul Capital
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl mb-8"
              >
                A Private Family Holding Company
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="inline-flex items-center bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors cursor-pointer"
                  aria-label="Scroll to contact section"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </ScrollLink>
              </motion.div>
            </div>
          </motion.section>

          <Element name="about">
            <section className="py-20 bg-background-light" aria-labelledby="about-heading">
              <SectionCard title="About Us">
                <div className="text-center">
                  <p className="text-lg text-gray-600 mb-6">
                    Zoul Capital is a privately held investment firm that manages and grows the financial and
                    generational wealth of a single family. Our focus is to protect and enhance the family's long-term
                    interests by investing in opportunities with proven value and sustainable growth potential.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    Operating exclusively as a family office, we currently manage a portfolio of real estate assets,
                    private educational institutions, and educational service providers. With a commitment to creating
                    lasting value, we are actively seeking opportunities to acquire additional companies in diverse
                    industries, including manufacturing, distribution, technology, and others. Driven by a clear vision,
                    we combine disciplined strategy with a focus on impactful outcomes and long-term growth.
                  </p>
                </div>
              </SectionCard>
            </section>
          </Element>

          <Element name="mission">
            <section className="py-20 bg-white" aria-labelledby="mission-heading">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <h2 id="mission-heading" className="text-3xl font-bold text-background-dark">
                      What We Do
                    </h2>
                    <p className="text-lg text-gray-600">
                      At our family office, we focus on investments that align with our family's legacy and create
                      meaningful, lasting impact. Our decisions reflect a careful process, ensuring investments meet our
                      family's goals for security, value creation, and consistent returns.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative h-[400px] rounded-lg overflow-hidden"
                  >
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto%20artes%20y%20las%20ciencias.jpg-QgE4zu6uoElJ8ULDYFSyw7QeRLq0Nh.jpeg"
                      alt="City of Arts and Sciences - Valencia, Spain"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </div>
              </div>
            </section>
          </Element>

          <Element name="approach">
            <section className="bg-white py-20" aria-labelledby="approach-heading">
              <div className="container mx-auto px-4">
                <motion.h2
                  id="approach-heading"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold mb-12 text-center text-background-dark"
                >
                  Our Approach: Principled. Thoughtful. Selective.
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ApproachCard
                    icon={<Shield className="h-10 w-10 text-primary" aria-hidden="true" />}
                    title="Selective Investments"
                    description="Every decision is guided by careful analysis and a focus on scalable, sustainable opportunities."
                  />
                  <ApproachCard
                    icon={<Clock className="h-10 w-10 text-primary" aria-hidden="true" />}
                    title="Stewardship"
                    description="We act as long-term custodians of the family's wealth, ensuring preservation and growth across generations."
                  />
                  <ApproachCard
                    icon={<Eye className="h-10 w-10 text-primary" aria-hidden="true" />}
                    title="Strategic Focus & Discretion"
                    description="Investments are chosen for their alignment with our core interests while maintaining a professional and discreet standard in every endeavor."
                  />
                </div>
              </div>
            </section>
          </Element>

          <section className="py-20 bg-background-light" aria-labelledby="focus-heading">
            <SectionCard title="Our Focus">
              <p className="text-lg text-gray-600 mb-12 text-center">
                While maintaining a diverse and carefully balanced portfolio, our investment preferences reflect our
                values and objectives. Zoul Capital creates meaningful value in high-potential industries, including:
              </p>
              <div className="space-y-8">
                <div className="text-lg text-gray-600">
                  <h3 className="font-semibold mb-2">Real Estate</h3>
                  <p>
                    We identify, acquire, and manage real estate assets with strong growth potential, providing
                    stability and long-term value.
                  </p>
                </div>
                <div className="text-lg text-gray-600">
                  <h3 className="font-semibold mb-2">Educational Institutions</h3>
                  <p>
                    Supporting private schools and universities that are committed to offering transformative education
                    and excellence.
                  </p>
                </div>
                <div className="text-lg text-gray-600">
                  <h3 className="font-semibold mb-2">Educational Services</h3>
                  <p>
                    Partnering with businesses that create innovative solutions for learning, professional development,
                    and access to education.
                  </p>
                </div>
              </div>
            </SectionCard>
          </section>

          <Element name="contact">
            <section className="py-20 bg-white" aria-labelledby="contact-heading">
              <div className="container mx-auto px-4 text-center">
                <motion.h2
                  id="contact-heading"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold mb-8 text-background-dark"
                >
                  Contact Us
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-600 mb-8"
                >
                  Zoul Capital operates exclusively as a family office and does not provide external management
                  services.
                </motion.p>
                <motion.p className="text-lg text-gray-600 mb-8">
                  For internal inquiries or professional partnerships aligned with our areas of focus, please use our
                  contact form below.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex justify-center space-x-4"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary-dark transition-colors"
                    aria-label="Go to contact page"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </motion.div>
              </div>
            </section>
          </Element>
        </main>

        <footer className="bg-background-dark text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 flex items-center space-x-3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zoul%20(2)-FStLOd3KoWvG8VWrwNiqVHUnwA2aWx.png"
                  alt="Zoul Capital Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <span className="text-2xl font-bold">Zoul Capital</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span>Spain</span>
              </div>
              <div>
                <p>&copy; {new Date().getFullYear()} Zoul Capital. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

function ApproachCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-background-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

function NavItem({ to, label }) {
  return (
    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <ScrollLink
        to={to}
        smooth={true}
        duration={500}
        className="text-gray-600 hover:text-primary transition-colors cursor-pointer"
      >
        {label}
      </ScrollLink>
    </motion.li>
  )
}

