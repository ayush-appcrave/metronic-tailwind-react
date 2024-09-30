import React, { useRef } from 'react';
import { Scrollspy } from '@/components/scrollspy/Scrollspy';

const ScrollSpyExample = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);

    if (section && contentRef.current) {
      const contentWrapper = contentRef.current;
      const sectionTop = section.offsetTop - 110;

      contentWrapper.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav ref={navRef}>
        <a
          href="#section-1"
          onClick={(e) => handleNavClick(e, 'section-1')}
          data-scrollspy="section-1"
        >
          Section 1
        </a>
        <a
          href="#section-2"
          onClick={(e) => handleNavClick(e, 'section-2')}
          data-scrollspy="section-2"
        >
          Section 2
        </a>
        <a
          href="#section-3"
          onClick={(e) => handleNavClick(e, 'section-3')}
          data-scrollspy="section-3"
        >
          Section 3
        </a>
        <a
          href="#section-4"
          onClick={(e) => handleNavClick(e, 'section-4')}
          data-scrollspy="section-4"
        >
          Section 4
        </a>
      </nav>
      <div
        ref={contentRef}
        style={{
          padding: '20px',
          height: '100vh',
          overflowY: 'scroll', // Ensures the div scrolls
          scrollBehavior: 'smooth' // Smooth scrolling behavior
        }}
      >
        <Scrollspy
          navContainerRef={navRef}
          parentScrollContainerRef={contentRef}
          activeClass="active"
        >
          <section
            id="section-1"
            style={{ height: '500px', padding: '20px', border: '1px solid black' }}
          >
            <h2>Section 1</h2>
            <p>Content for Section 1</p>
          </section>
          <section
            id="section-2"
            style={{ height: '500px', padding: '20px', border: '1px solid black' }}
          >
            <h2>Section 2</h2>
            <p>Content for Section 2</p>
          </section>
          <section
            id="section-3"
            style={{ height: '500px', padding: '20px', border: '1px solid black' }}
          >
            <h2>Section 3</h2>
            <p>Content for Section 3</p>
          </section>
          <section
            id="section-4"
            style={{ height: '500px', padding: '20px', border: '1px solid black' }}
          >
            <h2>Section 4</h2>
            <p>Content for Section 4</p>
          </section>
        </Scrollspy>
      </div>
    </>
  );
};

export { ScrollSpyExample };
