import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

const pagesDir = path.join(__dirname, '../src/pages');
const i18nDir = path.join(__dirname, '../src/i18n');

describe('FAQ Pages', () => {
  const faqPaths = [
    { lang: 'es', path: path.join(pagesDir, 'faq.astro') },
    { lang: 'en', path: path.join(pagesDir, 'en/faq.astro') },
    { lang: 'ca', path: path.join(pagesDir, 'ca/faq.astro') },
  ];

  faqPaths.forEach(({ lang, path: faqPath }) => {
    describe(`FAQ page (${lang})`, () => {
      it('should exist', () => {
        expect(fs.existsSync(faqPath)).toBe(true);
      });

      it('should use Layout component', () => {
        const content = fs.readFileSync(faqPath, 'utf-8');
        expect(content).toContain('<Layout');
      });

      it('should set correct language', () => {
        const content = fs.readFileSync(faqPath, 'utf-8');
        expect(content).toContain(`lang = '${lang}'`);
      });

      it('should use font-typewriter for headers', () => {
        const content = fs.readFileSync(faqPath, 'utf-8');
        expect(content).toContain('font-typewriter');
      });

      it('should use font-mono for body text', () => {
        const content = fs.readFileSync(faqPath, 'utf-8');
        expect(content).toContain('font-mono');
      });

      it('should use red color for titles', () => {
        const content = fs.readFileSync(faqPath, 'utf-8');
        expect(content).toContain('text-red');
      });

      it('should NOT use gray text (use black/70 instead)', () => {
        const content = fs.readFileSync(faqPath, 'utf-8');
        expect(content).not.toMatch(/text-gray-\d00/);
      });

      it('should NOT use uppercase text', () => {
        const content = fs.readFileSync(faqPath, 'utf-8');
        expect(content).not.toContain('uppercase');
      });

      it('should have FAQ questions and answers', () => {
        const content = fs.readFileSync(faqPath, 'utf-8');
        // Check for FAQ structure with questions
        expect(content).toMatch(/questions\./);
      });
    });
  });
});

describe('About/Historia Pages', () => {
  const aboutPaths = [
    { lang: 'es', path: path.join(pagesDir, 'nosotros.astro') },
    { lang: 'en', path: path.join(pagesDir, 'en/about.astro') },
    { lang: 'ca', path: path.join(pagesDir, 'ca/nosaltres.astro') },
  ];

  aboutPaths.forEach(({ lang, path: aboutPath }) => {
    describe(`About page (${lang})`, () => {
      it('should exist', () => {
        expect(fs.existsSync(aboutPath)).toBe(true);
      });

      it('should use Layout component', () => {
        const content = fs.readFileSync(aboutPath, 'utf-8');
        expect(content).toContain('<Layout');
      });

      it('should set correct language', () => {
        const content = fs.readFileSync(aboutPath, 'utf-8');
        expect(content).toContain(`lang = '${lang}'`);
      });

      it('should use font-typewriter for headers', () => {
        const content = fs.readFileSync(aboutPath, 'utf-8');
        expect(content).toContain('font-typewriter');
      });

      it('should NOT use gray text', () => {
        const content = fs.readFileSync(aboutPath, 'utf-8');
        expect(content).not.toMatch(/text-gray-\d00/);
      });

      it('should include the three pillars (CUIDADO, CONEXIÓN, RITMO)', () => {
        const content = fs.readFileSync(aboutPath, 'utf-8');
        // Should reference the brand pillars
        expect(content).toMatch(/historia\.pillars/);
      });

      it('should have story sections', () => {
        const content = fs.readFileSync(aboutPath, 'utf-8');
        expect(content).toMatch(/historia\.(howItStarted|whySagaro|philosophy)/);
      });
    });
  });
});

describe('Proveedores Pages', () => {
  const proveedoresPaths = [
    { lang: 'es', path: path.join(pagesDir, 'proveedores.astro') },
    { lang: 'en', path: path.join(pagesDir, 'en/producers.astro') },
    { lang: 'ca', path: path.join(pagesDir, 'ca/proveidors.astro') },
  ];

  proveedoresPaths.forEach(({ lang, path: proveedoresPath }) => {
    describe(`Proveedores page (${lang})`, () => {
      it('should exist', () => {
        expect(fs.existsSync(proveedoresPath)).toBe(true);
      });

      it('should set correct language', () => {
        const content = fs.readFileSync(proveedoresPath, 'utf-8');
        expect(content).toContain(`lang = '${lang}'`);
      });

      it('should NOT use gray text', () => {
        const content = fs.readFileSync(proveedoresPath, 'utf-8');
        expect(content).not.toMatch(/text-gray-\d00/);
      });

      it('should NOT use uppercase text', () => {
        const content = fs.readFileSync(proveedoresPath, 'utf-8');
        expect(content).not.toContain('uppercase');
      });
    });
  });
});

describe('i18n translations', () => {
  const languages = ['es', 'en', 'ca'];

  languages.forEach((lang) => {
    describe(`${lang} translations`, () => {
      it('should have FAQ section', () => {
        const translations = JSON.parse(
          fs.readFileSync(path.join(i18nDir, `${lang}.json`), 'utf-8')
        );
        expect(translations.faq).toBeDefined();
        expect(translations.faq.title).toBeDefined();
      });

      it('should have Historia/About section with pillars', () => {
        const translations = JSON.parse(
          fs.readFileSync(path.join(i18nDir, `${lang}.json`), 'utf-8')
        );
        expect(translations.historia).toBeDefined();
        expect(translations.historia.pillars).toBeDefined();
        expect(translations.historia.pillars.care).toBeDefined();
        expect(translations.historia.pillars.connection).toBeDefined();
        expect(translations.historia.pillars.rhythm).toBeDefined();
      });

      it('should have nav.faq entry', () => {
        const translations = JSON.parse(
          fs.readFileSync(path.join(i18nDir, `${lang}.json`), 'utf-8')
        );
        expect(translations.nav.faq).toBeDefined();
      });
    });
  });
});

describe('Design System Compliance', () => {
  const allPages = [
    'faq.astro',
    'nosotros.astro',
    'proveedores.astro',
    'en/faq.astro',
    'en/about.astro',
    'en/producers.astro',
    'ca/faq.astro',
    'ca/nosaltres.astro',
    'ca/proveidors.astro',
  ];

  allPages.forEach((pagePath) => {
    const fullPath = path.join(pagesDir, pagePath);
    
    describe(`${pagePath}`, () => {
      it('should use bg-cream or bg-white backgrounds', () => {
        if (!fs.existsSync(fullPath)) return; // Skip if page doesn't exist yet
        const content = fs.readFileSync(fullPath, 'utf-8');
        // Should use cream or white backgrounds, not arbitrary colors
        expect(content).toMatch(/bg-(cream|white)/);
      });

      it('should use max-w-2xl or max-w-3xl or max-w-5xl for content', () => {
        if (!fs.existsSync(fullPath)) return;
        const content = fs.readFileSync(fullPath, 'utf-8');
        expect(content).toMatch(/max-w-(2xl|3xl|5xl)/);
      });
    });
  });
});
