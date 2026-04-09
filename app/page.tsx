'use client';

import { useEffect } from 'react';

const phoneIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd"/></svg>`;

const shieldIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516 11.209 11.209 0 01-7.877-3.08z" clip-rule="evenodd"/></svg>`;

const sparklesIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd"/></svg>`;

const heartIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/></svg>`;

const clockIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd"/></svg>`;

const userGroupIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"/></svg>`;

const checkCircleIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"/></svg>`;

const toothIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C9.5 2 7.9 3.1 7 4.5C6.1 5.9 5.5 7 4.5 8c-1 1-1.5 2.5-1.5 4 0 2 .8 3.5 1.5 5s1 3.2 1.5 5c.2.8.8 1 1.2.5.5-.5.8-1.5 1.3-3 .5-1.5 1-2.5 1.5-3.5.3-.5.8-1 2-1s1.7.5 2 1c.5 1 1 2 1.5 3.5.5 1.5.8 2.5 1.3 3 .4.5 1 .3 1.2-.5.5-1.8 1-3.5 1.5-5s1.5-3 1.5-5c0-1.5-.5-3-1.5-4-1-1-1.6-2.1-2.5-3.5C16.1 3.1 14.5 2 12 2z"/></svg>`;

const mapPinIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/></svg>`;

const chevronDownIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd"/></svg>`;

const serviceIcons = [toothIcon, sparklesIcon, shieldIcon, heartIcon, clockIcon, userGroupIcon];

const trustIcons = [shieldIcon, sparklesIcon, heartIcon, clockIcon];

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    const nav = document.querySelector('.nav');
    const handleScroll = () => {
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const trustItems = [
    { text: 'Serving Lumberton Families for Over 20 Years', icon: trustIcons[0] },
    { text: 'Trusted Across Robeson County', icon: trustIcons[1] },
    { text: 'Gentle, Patient-Focused Care', icon: trustIcons[2] },
    { text: 'Modern Technology, Hometown Values', icon: trustIcons[3] },
  ];

  const services = [
    { title: 'Family Dentistry', desc: 'Comprehensive dental care for every member of your Lumberton family, from first teeth to golden years. We build lasting relationships with patients across Robeson County.', icon: serviceIcons[0] },
    { title: 'Cosmetic Dentistry', desc: 'Teeth whitening, veneers, and smile makeovers that give you confidence every time you walk into a room. Look your best for every occasion in Lumberton and beyond.', icon: serviceIcons[1] },
    { title: 'Dental Implants', desc: 'Permanent, natural-looking tooth replacement that restores your bite and your confidence. Our implant solutions are built to last a lifetime.', icon: serviceIcons[2] },
    { title: 'Emergency Dental Care', desc: 'Toothaches and dental emergencies don\'t wait, and neither do we. Lumberton families count on us for prompt, compassionate urgent care when it matters most.', icon: serviceIcons[3] },
    { title: 'Preventive Cleanings', desc: 'Routine cleanings and exams that catch problems early and keep your smile healthy year-round. Prevention is the smartest investment you can make in your dental health.', icon: serviceIcons[4] },
    { title: 'Crowns & Bridges', desc: 'Custom-crafted restorations that blend seamlessly with your natural teeth. We restore strength, function, and aesthetics with precision dentistry.', icon: serviceIcons[5] },
  ];

  return (
    <>
      {/* NAV */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav-logo">{'Haymon L Tate DDS'}</div>
        <a
          href="tel:19107383913"
          className="nav-cta"
          aria-label="Call Haymon L Tate DDS at +1 910-738-3913"
        >
          <span
            dangerouslySetInnerHTML={{ __html: phoneIcon }}
            aria-hidden="true"
          />
          <span>{'+1 910-738-3913'}</span>
        </a>
      </nav>

      {/* HERO */}
      <section className="hero" aria-label="Welcome to Haymon L Tate DDS">
        <div className="hero-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1400&q=80"
            alt=""
            loading="eager"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="hero-content">
          <span className="hero-badge">Trusted Dental Care in {'Lumberton'}</span>
          <h1>Your Smile Deserves Gentle, Expert Dentistry</h1>
          <p>
            Welcome to {'Haymon L Tate DDS'} — where modern dental technology meets compassionate
            care. From routine cleanings to complete smile makeovers, our team is here
            to keep your family&apos;s oral health at its best.
          </p>
          <a
            href="tel:19107383913"
            className="hero-cta"
            aria-label="Call now to schedule your dental appointment"
          >
            <span
              dangerouslySetInnerHTML={{ __html: phoneIcon }}
              aria-hidden="true"
            />
            Schedule Your Visit
          </a>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <span dangerouslySetInnerHTML={{ __html: chevronDownIcon }} />
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust-bar" aria-label="Why patients trust us">
        {trustItems.map((item, i) => (
          <div
            className="trust-item"
            key={i}
            data-animate
            data-delay={i + 1}
          >
            <div
              className="trust-icon"
              dangerouslySetInnerHTML={{ __html: item.icon }}
              aria-hidden="true"
            />
            <span className="trust-text">{item.text}</span>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section className="services" aria-label="Our dental services">
        <div className="section-header" data-animate>
          <h2>Comprehensive Dental Services</h2>
          <p>
            From preventive care to advanced restorative procedures, we offer a
            full range of dental treatments tailored to every member of your
            family.
          </p>
        </div>
        <div className="services-grid">
          {services.map((svc, i) => (
            <div
              className="service-card"
              key={i}
              data-animate
              data-delay={i + 1}
            >
              <div
                className="service-icon"
                dangerouslySetInnerHTML={{ __html: svc.icon }}
                aria-hidden="true"
              />
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" aria-label="About our practice">
        <div className="about-grid">
          <div className="about-image" data-animate>
            <img
              src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1400&q=80"
              alt=""
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                inset: 0,
              }}
            />
          </div>
          <div className="about-content" data-animate data-delay={2}>
            <h2>About {'Haymon L Tate DDS'}</h2>
            <p>{'Haymon L Tate DDS has been a cornerstone of dental care in Lumberton, NC, delivering the kind of personalized attention that big corporate practices simply cannot match. Dr. Tate and the team combine advanced dental techniques with genuine Southern hospitality, making every visit comfortable and every treatment plan tailored to you. Whether you need a routine cleaning or a complete smile transformation, this is the Lumberton dental home your family deserves.'}</p>
            <div className="about-features">
              <div className="about-feature">
                <div
                  className="about-feature-icon"
                  dangerouslySetInnerHTML={{ __html: checkCircleIcon }}
                  aria-hidden="true"
                />
                <span>State-of-the-art dental technology</span>
              </div>
              <div className="about-feature">
                <div
                  className="about-feature-icon"
                  dangerouslySetInnerHTML={{ __html: checkCircleIcon }}
                  aria-hidden="true"
                />
                <span>Gentle care for patients of all ages</span>
              </div>
              <div className="about-feature">
                <div
                  className="about-feature-icon"
                  dangerouslySetInnerHTML={{ __html: checkCircleIcon }}
                  aria-hidden="true"
                />
                <span>Most dental insurance plans accepted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-section" aria-label="Contact us">
        <div className="cta-card" data-animate>
          <h2>Contact {'Haymon L Tate DDS'}</h2>
          <p>
            Ready for a healthier, brighter smile? Our friendly dental team is
            here to help. Call today to book your appointment or ask about our
            new patient specials.
          </p>
          <a
            href="tel:19107383913"
            className="cta-button"
            aria-label="Call Haymon L Tate DDS to schedule an appointment"
          >
            <span
              dangerouslySetInnerHTML={{ __html: phoneIcon }}
              aria-hidden="true"
            />
            Call {'+1 910-738-3913'}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" role="contentinfo">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-brand-name">{'Haymon L Tate DDS'}</div>
            <p>
              Providing quality dental care for families in {'Lumberton'},{' '}
              {'NC'} and surrounding communities.
            </p>
          </div>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <span
                dangerouslySetInnerHTML={{ __html: mapPinIcon }}
                aria-hidden="true"
              />
              <span>
                {'581 Farringdom St, Lumberton, NC 28358, USA'}, {'Lumberton'}, {'NC'}
              </span>
            </div>
            <div className="footer-contact-item">
              <span
                dangerouslySetInnerHTML={{ __html: phoneIcon }}
                aria-hidden="true"
              />
              <a
                href="tel:19107383913"
                aria-label="Call Haymon L Tate DDS"
                style={{ cursor: 'pointer' }}
              >
                {'+1 910-738-3913'}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} {'Haymon L Tate DDS'}. All rights
          reserved.
        </div>
      </footer>
    </>
  );
}