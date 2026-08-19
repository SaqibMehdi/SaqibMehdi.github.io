"use client";

import { useEffect, useState } from "react";

const news = [
  {
    date: "2026",
    content: (
      <>
        Our ray-tracing-based multipath classification work was published in{" "}
        <a href="https://doi.org/10.1109/JSTARS.2026.3697547">IEEE JSTAR</a>.
      </>
    ),
  },
  {
    date: "2026",
    content: (
      <>
        Our study on healthy urban zones for GNSS tropospheric sensing was
        published in{" "}
        <a href="https://doi.org/10.1007/s10291-026-02065-1">GPS Solutions</a>.
      </>
    ),
  },
  {
    date: "2026",
    content: (
      <>
        Presented geometry-aware PPP research at the European Geosciences Union
        and European Navigation Conference.
      </>
    ),
  },
  {
    date: "2025",
    content: (
      <>
        Completed research visits at The Hong Kong Polytechnic University and
        the University of Warmia and Mazury.
      </>
    ),
  },
  {
    date: "2024",
    content: (
      <>
        Completed research and simulation training at the University of
        Stuttgart and Military University of Technology in Warsaw.
      </>
    ),
  },
];

const publications = [
  {
    image: "/ray-tracing-multipath-classification-cn0-plot.png",
    imageAlt:
      "Core concept linking crowdsourced urban GNSS, 3D ray tracing, multipath mitigation, PPP, and tropospheric estimation",
    title:
      "Ray-Tracing-Based Multipath Classification and Adaptive Satellite Selection for Improved Tropospheric Estimation",
    authors: "Saqib Mehdi, Mingda Ye, Guohao Zhang, and Witold Rohm",
    venue:
      "IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing (JSTAR)",
    year: "2026",
    doi: "https://doi.org/10.1109/JSTARS.2026.3697547",
    abstract:
      "A ray-tracing-assisted PPP framework that classifies reflected, diffracted and obstructed GNSS signals, then adapts satellite weighting and selection to improve positioning and urban tropospheric delay estimation.",
  },
  {
    image: "/future-research.png",
    imageAlt: "3D urban ray-tracing concept for satellite signal propagation",
    title:
      "Identifying Healthy Urban Zones for GNSS-Based Tropospheric Delay Estimation Using 3D Ray-Tracing",
    authors:
      "Saqib Mehdi, Marcus Franz Wareyka-Glaner, Guohao Zhang, and Witold Rohm",
    venue: "GPS Solutions",
    year: "2026",
    doi: "https://doi.org/10.1007/s10291-026-02065-1",
    abstract:
      "A geometry-aware method for identifying urban locations with sufficient clean line-of-sight satellites for reliable, high-resolution and potentially crowdsourced tropospheric observations.",
  },
  {
    image: null,
    imageAlt: "",
    title:
      "Lithosphere–Atmosphere–Ionosphere Coupling Associated with the 2019 Mw 7.1 California Earthquake Using GNSS and Multiple Satellites",
    authors: "Saqib Mehdi, Munawar Shah, and Najam Abbas Naqvi",
    venue: "Environmental Monitoring and Assessment",
    year: "2021",
    doi: "https://doi.org/10.1007/s10661-021-09278-6",
    abstract:
      "A multi-instrument study of atmospheric and ionospheric perturbations surrounding the 2019 Ridgecrest earthquake, connecting GNSS observations with satellite-based atmospheric measurements.",
  },
];

const visits = [
  [
    "Sep 2025",
    "University of Warmia and Mazury, Poland",
    "Filtering for GNSS positioning and atmospheric sensing with Dr. Jacek Paziewski.",
  ],
  [
    "Jul–Aug 2025",
    "The Hong Kong Polytechnic University",
    "Urban GNSS troposphere estimation and ray-tracing simulation with Prof. Guohao Zhang.",
  ],
  [
    "Aug 2024",
    "University of Stuttgart, Germany",
    "Mobile-receiver tropospheric estimation and Spirent-simulated GNSS observations with Prof. Thomas Hobiger.",
  ],
  [
    "Apr 2024",
    "Military University of Technology, Warsaw",
    "Training with a Spirent GNSS hardware simulator for controlled signal and atmospheric experiments.",
  ],
  [
    "Jan–Feb 2022",
    "Institute of Space Technology, Pakistan",
    "GNSS research internship and CORS-network feasibility analysis.",
  ],
];

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <>
      <hr />
      <h2 id={id}>{children}</h2>
    </>
  );
}

export default function Home() {
  const [lightTheme, setLightTheme] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = lightTheme ? "light" : "dark";
  }, [lightTheme]);

  return (
    <>
      <header className="topbar">
        <nav className="nav-container" aria-label="Primary navigation">
          <div className="profile-links" aria-label="Research profiles">
            <a href="mailto:sqbmehdi@gmail.com" aria-label="Email" title="Email">
              ✉
            </a>
            <a
              href="https://orcid.org/0000-0002-1472-8823"
              target="_blank"
              rel="noreferrer"
              aria-label="ORCID"
              title="ORCID"
            >
              iD
            </a>
            <a
              href="https://github.com/SaqibMehdi/2D-Buildings-to-3D-KML"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub research code"
              title="GitHub"
            >
              GH
            </a>
            <a
              href="https://www.linkedin.com/in/saqib-mehdi-4595965a/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              in
            </a>
          </div>

          <div className="site-links">
            <a className="active" href="#home">
              home
            </a>
            <a href="#research">research</a>
            <a href="#publications">publications</a>
            <a href="#experience">experience</a>
            <a href="#teaching">teaching</a>
            <a href="/saqib-mehdi-cv.pdf" download>
              cv
            </a>
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setLightTheme((current) => !current)}
              aria-label={lightTheme ? "Switch to dark theme" : "Switch to light theme"}
              title={lightTheme ? "Dark theme" : "Light theme"}
            >
              {lightTheme ? "☾" : "☀"}
            </button>
          </div>
        </nav>
      </header>

      <main className="page-container" id="home">
        <section className="intro">
          <h1>Saqib Mehdi</h1>
          <p className="position">
            PhD Researcher at the{" "}
            <a href="https://igig.upwr.edu.pl/" target="_blank" rel="noreferrer">
              Institute of Geodesy and Geoinformatics, UPWr
            </a>
            .
          </p>

          <div className="biography">
            <img
              className="portrait"
              src="/saqib-mehdi.jpg"
              alt="Portrait of Saqib Mehdi"
              width="185"
              height="250"
            />
            <p>
              I am a GNSS and geodesy researcher completing my PhD at the
              Wrocław University of Environmental and Life Sciences in Poland.
              My work sits at the intersection of precise positioning,
              atmospheric sensing, signal propagation and urban geospatial
              modelling.
            </p>
            <p>
              A distinctive part of my research is the use of{" "}
              <strong>3D ray tracing</strong> to understand LOS, NLOS,
              reflected and diffracted GNSS signals, and to integrate that
              physical information into Precise Point Positioning for more
              reliable positioning and Zenith Tropospheric Delay estimation in
              dense urban environments.
            </p>
            <p>
              My wider experience includes moving receivers, urban multipath
              mitigation, satellite selection, signal simulation, Spirent GNSS
              simulation and atmospheric–ionospheric observations. Research
              visits to{" "}
              <a href="#experience">PolyU, Stuttgart and other institutions</a>{" "}
              have strengthened the link between theory, signal processing,
              simulation and applied geospatial research.
            </p>
          </div>

          <p className="contact-note">
            For research collaboration, email{" "}
            <a href="mailto:sqbmehdi@gmail.com">sqbmehdi@gmail.com</a> or{" "}
            <a href="mailto:saqib.mehdi@upwr.edu.pl">
              saqib.mehdi@upwr.edu.pl
            </a>
            .
          </p>

          <div className="institution-panel" aria-label="Academic institutions and research visits">
            {[
              {
                logo: "/logos/upwr.png",
                name: "Wrocław University of Environmental and Life Sciences",
                role: "PhD Researcher",
                date: "2022–present",
              },
              {
                logo: "/logos/uwm.png",
                name: "University of Warmia and Mazury",
                role: "Research Visit",
                date: "Sep 2025",
              },
              {
                logo: "/logos/polyu.jpg",
                name: "The Hong Kong Polytechnic University",
                role: "Research Visit",
                date: "Jul–Aug 2025",
              },
              {
                logo: "/logos/stuttgart.png",
                name: "University of Stuttgart",
                role: "Research Visit",
                date: "Aug 2024",
              },
              {
                logo: "/logos/wat.png",
                name: "Military University of Technology",
                role: "Simulator Training",
                date: "Apr 2024",
              },
              {
                logo: "/logos/oradea.png",
                name: "University of Oradea",
                role: "Erasmus+ Programme",
                date: "Jun 2024",
              },
              {
                logo: "/logos/ist.jpg",
                name: "Institute of Space Technology",
                role: "MSc · Research Intern",
                date: "2018–2022",
              },
              {
                logo: "/logos/punjab.png",
                name: "University of the Punjab",
                role: "BSc Physics",
                date: "2014–2018",
              },
            ].map((institution) => (
              <div className="institution" key={institution.name}>
                <div className="institution-logo">
                  <img src={institution.logo} alt={`${institution.name} logo`} />
                </div>
                <strong>{institution.role}</strong>
                <span>{institution.date}</span>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="research">
          <SectionTitle id="research">research interests</SectionTitle>
          <p>
            My research interests include GNSS precise positioning, urban
            multipath and NLOS mitigation, 3D ray tracing, atmospheric remote
            sensing, signal simulation, resilient PNT, urban digital twins and
            physics-informed signal processing.
          </p>
          <p>
            My long-term goal is to connect realistic 3D propagation modelling
            with satellite navigation, wireless sensing and intelligent
            positioning systems for challenging environments.
          </p>
        </section>

        <section aria-labelledby="future-research">
          <SectionTitle id="future-research">future research</SectionTitle>
          <p>
            I am extending the tools developed during my PhD toward resilient
            PNT and sensing with GNSS, LEO satellites, 6G/NTN signals, antenna
            arrays and AI. Potential applications include UAS/UAM navigation,
            LEO-PNT, multipath-aware localization, beamforming, integrated
            sensing and communications, and physics-informed AI training.
          </p>
          <figure className="wide-figure">
            <img
              src="/future-research.png"
              alt="Future research concept showing 3D urban ray tracing for GNSS and LEO signal propagation"
              width="1670"
              height="940"
            />
            <figcaption>
              Emerging direction: urban ray tracing for GNSS, LEO/NTN,
              intelligent sensing and resilient positioning.
            </figcaption>
          </figure>
        </section>

        <section aria-labelledby="news">
          <SectionTitle id="news">news</SectionTitle>
          <div className="news-list">
            {news.map((item, index) => (
              <div className="news-item" key={`${item.date}-${index}`}>
                <time>{item.date}</time>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="selected-research">
          <SectionTitle id="selected-research">selected research</SectionTitle>

          <article className="work-row">
            <div className="work-media video-media">
              <video
                src="/shinjuku-coverage-sequence.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                aria-label="Shinjuku GNSS coverage sequence"
              />
            </div>
            <div className="work-copy">
              <h3>Urban GNSS Coverage and Propagation in Shinjuku</h3>
              <p className="work-meta">3D urban ray tracing · GNSS coverage · 2026</p>
              <p>
                A dynamic coverage sequence showing how realistic city geometry
                changes satellite visibility and propagation conditions along
                an urban trajectory.
              </p>
              <p className="resource-links">
                [<a href="/shinjuku-coverage-sequence.mp4">Video</a>] [
                <a href="#future-research">Research vision</a>]
              </p>
            </div>
          </article>

          <article className="work-row">
            <div className="work-media">
              <img
                src="/gnss-raylab-demo.webp"
                alt="Animated GNSS RayLab simulation and analysis interface"
                width="960"
                height="540"
              />
            </div>
            <div className="work-copy">
              <h3>GNSS RayLab: Propagation-Aware Simulation and Analysis</h3>
              <p className="work-meta">
                Signal classification · satellite geometry · positioning analysis
              </p>
              <p>
                An experimental environment for inspecting satellite visibility,
                propagation classes, receiver geometry and their effect on urban
                positioning and atmospheric retrieval.
              </p>
              <p className="resource-links">
                [<a href="/gnss-raylab-demo.webp">Animation</a>] [
                <a
                  href="https://drive.google.com/file/d/1ac5n-N4xo2blFi6M8dm6DYIDD7N7vQtZ/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  Full video
                </a>
                ] [
                <a href="https://github.com/SaqibMehdi/2D-Buildings-to-3D-KML">
                  Code
                </a>]
              </p>
            </div>
          </article>
        </section>

        <section aria-labelledby="publications">
          <SectionTitle id="publications">selected publications</SectionTitle>
          <p className="section-note">
            <em>
              Selected peer-reviewed journal articles. Follow each DOI for the
              complete publication record.
            </em>
          </p>

          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication-row" key={publication.title}>
                {publication.image ? (
                  <img
                    className="publication-image"
                    src={publication.image}
                    alt={publication.imageAlt}
                    width="215"
                    height="126"
                  />
                ) : (
                  <div className="coupling-graphic" aria-hidden="true">
                    <span>L</span>
                    <i />
                    <span>A</span>
                    <i />
                    <span>I</span>
                  </div>
                )}
                <div className="publication-copy">
                  <h3>{publication.title}</h3>
                  <p>{publication.authors}</p>
                  <p>
                    <em>{publication.venue}</em> {publication.year}
                  </p>
                  <div className="publication-resources">
                    <details>
                      <summary>[Abs]</summary>
                      <p>{publication.abstract}</p>
                    </details>{" "}
                    [
                    <a href={publication.doi} target="_blank" rel="noreferrer">
                      DOI
                    </a>
                    ]
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="experience">
          <SectionTitle id="experience">research experience</SectionTitle>
          <div className="text-list">
            <p>
              <strong>2022–present · PhD Researcher, UPWr</strong>
              <br />
              Urban GNSS atmospheric sensing, precise point positioning, 3D ray
              tracing, signal classification and multipath/NLOS mitigation.
            </p>
            {visits.map(([date, institution, description]) => (
              <p key={`${date}-${institution}`}>
                <strong>
                  {date} · {institution}
                </strong>
                <br />
                {description}
              </p>
            ))}
          </div>
        </section>

        <section aria-labelledby="talks">
          <SectionTitle id="talks">conference presentations</SectionTitle>
          <ul>
            <li>
              2026. Oral presentation, “Geometry-Aware PPP for Reliable GNSS
              Tropospheric Sensing in Dense Urban Environment,”{" "}
              <a href="https://doi.org/10.5194/egusphere-egu26-18365">EGU abstract</a>.
            </li>
            <li>
              2026. Oral presentation, “Ray-Tracing-Assisted Urban GNSS for
              Robust Zenith Tropospheric Delay Estimation,” ENC. [
              <a
                href="https://drive.google.com/file/d/1eqBAvvc3xotc_V1g_BrjgHHWk1a7zmqL/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                PowerPoint
              </a>
              ]
            </li>
            <li>
              2025. Poster presentation, “Ray-Tracing for Precise GNSS
              Troposphere Estimation in Urban Environments,” ENC. [
              <a
                href="https://drive.google.com/file/d/1dWSi4w3Lo_VJ743Rk3ne6yy_gvzsjqeC/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Poster
              </a>
              ]
            </li>
          </ul>
        </section>

        <section aria-labelledby="teaching">
          <SectionTitle id="teaching">teaching &amp; academic service</SectionTitle>
          <p>
            <strong>Teaching Assistant:</strong> Atmospheric Monitoring using
            GNSS Polarimetric Radio Occultation; Introduction to MATLAB
            Programming.
          </p>
          <p>
            <strong>Academic Service:</strong> Representative for Foreign
            Students Affairs, PhD Student Council, UPWr (2024).
          </p>
          <p>
            <strong>Selected Training:</strong> ESA–JRC GNSS Summer School,
            Slovenia (July 2024); Mathematical and Computational Modelling for
            Sustainability, University of Oradea (June 2024).
          </p>
        </section>

        <section aria-labelledby="education">
          <SectionTitle id="education">education</SectionTitle>
          <div className="text-list">
            <p>
              <strong>2022–present · PhD, Civil Engineering, Geodesy &amp; Transport</strong>
              <br />
              Wrocław University of Environmental and Life Sciences, Poland.
              Research on urban GNSS tropospheric sensing, PPP, 3D ray tracing
              and multipath/NLOS mitigation.
            </p>
            <p>
              <strong>2018–2022 · MSc, Global Navigation Satellite Systems</strong>
              <br />
              Institute of Space Technology, Pakistan. CGPA 3.8/4.
            </p>
            <p>
              <strong>2014–2018 · BSc, Physics</strong>
              <br />
              University of the Punjab, Pakistan. CGPA 3.21/4.
            </p>
          </div>
        </section>

        <section aria-labelledby="skills">
          <SectionTitle id="skills">skills</SectionTitle>
          <p>
            Python (NumPy, SciPy, Pandas), MATLAB, C++, LaTeX, GNSS processing,
            Precise Point Positioning, Kalman filtering, urban ray tracing,
            multipath/NLOS classification, atmospheric and geospatial data
            analysis, and Spirent GNSS simulation.
          </p>
        </section>
      </main>

      <footer>
        <div className="footer-container">
          © Copyright 2026 Saqib Mehdi. Academic CV and research portfolio.
        </div>
      </footer>
    </>
  );
}
