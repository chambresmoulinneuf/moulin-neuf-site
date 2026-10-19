'use client';

import { useLocale } from 'next-intl';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl md:text-2xl font-semibold text-forest leading-tight tracking-tight mb-3">
        {title}
      </h2>
      <div className="space-y-3 text-base text-ink/80 leading-relaxed tracking-tight">
        {children}
      </div>
    </div>
  );
}

export default function MentionsLegales() {
  const locale = useLocale();
  const isFr = locale === 'fr';

  return (
    <section className="bg-cream py-20 px-6 md:px-10 lg:px-36">
      <div className="max-w-[860px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-forest leading-tight tracking-tight mb-2">
          {isFr ? 'Mentions légales' : 'Legal Notice'}
        </h1>
        <p className="text-sm text-ink/60 mb-12">
          {isFr ? 'Dernière mise à jour : 14 septembre 2026' : 'Last updated: 14 September 2026'}
        </p>

        {isFr ? <FrContent /> : <EnContent />}
      </div>
    </section>
  );
}

function FrContent() {
  return (
    <>
      <Section title="Site">
        <p>chambresmoulinneuf.fr</p>
      </Section>

      <Section title="Éditeur">
        <p>
          Clive Gross, Entreprise Individuelle (EI)
          <br />
          SIRET : 131 267 999 00012
          <br />
          4 Rue du Moulin Neuf, 86400 Civray, France
          <br />
          Email :{' '}
          <a href="mailto:reservation@chambresmoulinneuf.fr" className="text-sage underline">
            reservation@chambresmoulinneuf.fr
          </a>
        </p>
      </Section>

      <Section title="Directeur de la publication">
        <p>Clive Gross</p>
      </Section>

      <Section title="Hébergement">
        <p>
          Le site chambresmoulinneuf.fr est hébergé par Vercel Inc., 440 N Barranca Avenue #4133,
          Covina, CA 91723, États-Unis.
        </p>
      </Section>

      <Section title="Propriété intellectuelle">
        <p>
          L&apos;ensemble des textes, photographies, logos et éléments graphiques présents sur ce
          site sont la propriété de Chambres Moulin Neuf, sauf mention contraire, et sont protégés
          par le droit de la propriété intellectuelle. Toute reproduction ou représentation, totale
          ou partielle, sans autorisation préalable est interdite.
        </p>
      </Section>

      <Section title="Responsabilité">
        <p>
          Chambres Moulin Neuf s&apos;efforce d&apos;assurer l&apos;exactitude des informations
          diffusées sur ce site, mais ne peut être tenu responsable des erreurs, omissions ou de
          l&apos;indisponibilité du site liée à des causes qui lui sont extérieures (panne
          d&apos;hébergement, coupure réseau, etc.). Les photographies illustrant les chambres et
          les espaces ne sont pas contractuelles.
        </p>
      </Section>

      <Section title="Liens hypertextes">
        <p>
          Ce site peut contenir des liens vers des sites tiers (réseaux sociaux notamment).
          Chambres Moulin Neuf n&apos;exerce aucun contrôle sur le contenu de ces sites et
          décline toute responsabilité à leur égard.
        </p>
      </Section>

      <Section title="Droit applicable">
        <p>
          Les présentes mentions légales sont soumises au droit français. En cas de litige, et à
          défaut de résolution amiable, les tribunaux français seront seuls compétents.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Pour toute question relative à ce site, vous pouvez nous écrire à{' '}
          <a href="mailto:reservation@chambresmoulinneuf.fr" className="text-sage underline">
            reservation@chambresmoulinneuf.fr
          </a>
          .
        </p>
      </Section>
    </>
  );
}

function EnContent() {
  return (
    <>
      <p className="text-sm italic text-ink/60 border border-sage/30 rounded-md px-4 py-3 mb-10">
        This legal notice is required by French law and the French version is the definitive one.
        An English translation is provided below for convenience.
      </p>

      <Section title="Site">
        <p>chambresmoulinneuf.fr</p>
      </Section>

      <Section title="Publisher">
        <p>
          Clive Gross, Entreprise Individuelle (EI, sole trader)
          <br />
          SIRET: 131 267 999 00012
          <br />
          4 Rue du Moulin Neuf, 86400 Civray, France
          <br />
          Email:{' '}
          <a href="mailto:reservation@chambresmoulinneuf.fr" className="text-sage underline">
            reservation@chambresmoulinneuf.fr
          </a>
        </p>
      </Section>

      <Section title="Publication director">
        <p>Clive Gross</p>
      </Section>

      <Section title="Hosting">
        <p>
          chambresmoulinneuf.fr is hosted by Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA
          91723, United States.
        </p>
      </Section>

      <Section title="Intellectual property">
        <p>
          All text, photographs, logos and graphic elements on this site are the property of
          Chambres Moulin Neuf unless stated otherwise, and are protected under intellectual
          property law. Any reproduction, in whole or in part, without prior authorisation is
          prohibited.
        </p>
      </Section>

      <Section title="Liability">
        <p>
          Chambres Moulin Neuf takes care to keep the information on this site accurate, but
          cannot be held responsible for errors, omissions, or unavailability of the site caused
          by factors outside its control (hosting outage, network failure, etc.). Photographs of
          the rooms and grounds are not contractual.
        </p>
      </Section>

      <Section title="Hyperlinks">
        <p>
          This site may contain links to third-party sites (social media in particular). Chambres
          Moulin Neuf has no control over the content of those sites and accepts no responsibility
          for them.
        </p>
      </Section>

      <Section title="Governing law">
        <p>
          This legal notice is governed by French law. In the event of a dispute, and failing an
          amicable resolution, the French courts shall have sole jurisdiction.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          For any question about this site, please write to us at{' '}
          <a href="mailto:reservation@chambresmoulinneuf.fr" className="text-sage underline">
            reservation@chambresmoulinneuf.fr
          </a>
          .
        </p>
      </Section>
    </>
  );
}
