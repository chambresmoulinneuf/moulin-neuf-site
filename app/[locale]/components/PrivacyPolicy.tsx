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

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicy() {
  const locale = useLocale();
  const isFr = locale === 'fr';

  return (
    <section className="bg-cream py-20 px-6 md:px-10 lg:px-36">
      <div className="max-w-[860px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-forest leading-tight tracking-tight mb-2">
          {isFr ? 'Politique de confidentialité' : 'Privacy Policy'}
        </h1>
        <p className="text-sm text-ink/60 mb-12">
          {isFr ? 'Dernière mise à jour : 23 septembre 2026' : 'Last updated: 23 September 2026'}
        </p>

        {isFr ? <FrContent /> : <EnContent />}
      </div>
    </section>
  );
}

function FrContent() {
  return (
    <>
      <Section title="Qui sommes-nous">
        <p>
          Ce site (chambresmoulinneuf.fr) est édité par Clive Gross, exploitant de Chambres Moulin
          Neuf, 4 Rue du Moulin Neuf, 86400 Civray, France. Pour toute question sur cette politique
          de confidentialité ou sur vos données, vous pouvez nous écrire à{' '}
          <a href="mailto:reservation@chambresmoulinneuf.fr" className="text-sage underline">
            reservation@chambresmoulinneuf.fr
          </a>
          .
        </p>
      </Section>

      <Section title="Quelles données nous collectons">
        <p>
          Ce site ne vend rien en ligne et ne vous demande pas de créer de compte. La seule donnée
          personnelle collectée l&apos;est via le formulaire de demande de réservation de la page
          Réservation, à savoir :
        </p>
        <Bullets
          items={[
            'nom, adresse postale et pays',
            'adresse email et numéro de téléphone',
            'dates d’arrivée et de départ, heure d’arrivée souhaitée',
            'provenance et destination de votre voyage',
            'nombre de chambres et de personnes, présence d’un animal',
            'toute information complémentaire que vous choisissez d’ajouter',
          ]}
        />
      </Section>

      <Section title="Pourquoi nous les utilisons">
        <p>
          Ces informations servent uniquement à traiter votre demande de réservation et à
          échanger avec vous à ce sujet (confirmer les disponibilités, répondre à vos questions,
          organiser votre séjour). La base légale de ce traitement est l&apos;exécution de mesures
          précontractuelles prises à votre demande (article 6.1.b du RGPD) : vous nous contactez
          de votre propre initiative pour un séjour éventuel.
        </p>
      </Section>

      <Section title="Comment vos données circulent">
        <p>
          Le formulaire n&apos;enregistre rien dans une base de données : il transmet votre
          demande directement par email à la messagerie de Chambres Moulin Neuf. Cet email
          transite techniquement par deux prestataires qui agissent en tant que sous-traitants
          techniques (ils n&apos;ont pas accès au contenu ni le droit de l&apos;utiliser pour
          leur propre compte) :
        </p>
        <Bullets
          items={[
            'Vercel Inc. (hébergement du site) — 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis',
            'OVH / Zimbra (messagerie reservation@chambresmoulinneuf.fr) — OVH SAS, France',
          ]}
        />
        <p>
          Vos données ne sont jamais vendues, louées, ni partagées avec un tiers à des fins
          commerciales ou publicitaires.
        </p>
      </Section>

      <Section title="Durée de conservation">
        <p>
          Vos données sont conservées le temps nécessaire pour traiter votre demande et organiser
          votre séjour. Si une réservation est confirmée, les informations utiles à la comptabilité
          (nom, dates, montant) peuvent être conservées plus longtemps pour respecter nos
          obligations légales et comptables. En l&apos;absence de réservation, nous pouvons
          conserver votre demande jusqu&apos;à 24 mois, afin de pouvoir vous reconnaître si vous
          nous recontactez au sujet d&apos;un futur séjour et à des fins d&apos;analyse interne des
          demandes reçues. Ce traitement repose sur notre intérêt légitime (article 6.1.f du RGPD).
          Vous pouvez demander la suppression de votre demande à tout moment — voir la section
          « Vos droits » ci-dessous.
        </p>
      </Section>

      <Section title="Cookies">
        <p>
          Ce site n&apos;affiche aucune publicité et n&apos;utilise aucun outil de mesure
          d&apos;audience ou de suivi. Il n&apos;intègre pas non plus de carte Google Maps. Le seul
          cookie déposé est un cookie technique et strictement nécessaire, <code>NEXT_LOCALE</code>,
          qui mémorise simplement si vous consultez le site en français ou en anglais. Conforme aux
          recommandations de la CNIL, ce cookie ne nécessite pas votre consentement préalable et
          aucune bannière n&apos;est donc affichée.
        </p>
        <p>
          La page d&apos;accueil propose des vidéos hébergées sur YouTube (Google). Elles ne sont
          chargées que si vous cliquez sur lecture, via le mode de confidentialité renforcée de
          YouTube (youtube-nocookie.com). Aucune donnée n&apos;est transmise à YouTube tant que vous
          ne lancez pas une vidéo ; une fois lancée, YouTube peut traiter certaines données (adresse
          IP, lecture) selon sa propre politique de confidentialité.
        </p>
      </Section>

      <Section title="Vos droits">
        <p>
          Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d&apos;un droit
          d&apos;accès, de rectification, d&apos;effacement, de limitation et d&apos;opposition
          concernant vos données, ainsi que du droit de définir des directives sur leur sort après
          votre décès. Pour exercer ces droits, écrivez-nous à{' '}
          <a href="mailto:reservation@chambresmoulinneuf.fr" className="text-sage underline">
            reservation@chambresmoulinneuf.fr
          </a>
          . Vous pouvez également introduire une réclamation auprès de la CNIL (
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage underline"
          >
            www.cnil.fr
          </a>
          ) si vous estimez que vos droits ne sont pas respectés.
        </p>
      </Section>

      <Section title="Modifications">
        <p>
          Cette politique peut être mise à jour si nos pratiques évoluent. La date en haut de cette
          page indique la dernière mise à jour.
        </p>
      </Section>
    </>
  );
}

function EnContent() {
  return (
    <>
      <p className="text-sm italic text-ink/60 border border-sage/30 rounded-md px-4 py-3 mb-10">
        This privacy policy is provided in English for convenience. In case of any discrepancy,
        the French version is the definitive one, as required by French law.
      </p>

      <Section title="Who we are">
        <p>
          This site (chambresmoulinneuf.fr) is published by Clive Gross, operator of Chambres
          Moulin Neuf, 4 Rue du Moulin Neuf, 86400 Civray, France. For any question about this
          policy or your data, you can write to us at{' '}
          <a href="mailto:reservation@chambresmoulinneuf.fr" className="text-sage underline">
            reservation@chambresmoulinneuf.fr
          </a>
          .
        </p>
      </Section>

      <Section title="What data we collect">
        <p>
          This site doesn&apos;t sell anything online and doesn&apos;t ask you to create an
          account. The only personal data we collect comes from the booking enquiry form on the
          Booking page, namely:
        </p>
        <Bullets
          items={[
            'name, postal address and country',
            'email address and mobile number',
            'arrival and departure dates, preferred check-in time',
            'where you are travelling from and your onward destination',
            'number of rooms and guests, whether you are travelling with a pet',
            'any further information you choose to add',
          ]}
        />
      </Section>

      <Section title="Why we use it">
        <p>
          This information is used solely to process your booking enquiry and correspond with you
          about it (checking availability, answering questions, arranging your stay). The legal
          basis for this is that it is necessary for pre-contractual steps taken at your own
          request (GDPR Article 6(1)(b)) — you contact us on your own initiative about a possible
          stay.
        </p>
      </Section>

      <Section title="How your data is handled">
        <p>
          The form doesn&apos;t save anything to a database — it sends your enquiry directly by
          email to the Chambres Moulin Neuf mailbox. That email technically passes through two
          providers acting as technical processors (they have no access to, or right to use, the
          content themselves):
        </p>
        <Bullets
          items={[
            'Vercel Inc. (site hosting) — 440 N Barranca Avenue #4133, Covina, CA 91723, United States',
            'OVH / Zimbra (the reservation@chambresmoulinneuf.fr mailbox) — OVH SAS, France',
          ]}
        />
        <p>Your data is never sold, rented, or shared with a third party for commercial or advertising purposes.</p>
      </Section>

      <Section title="How long we keep it">
        <p>
          Your data is kept for as long as needed to process your enquiry and arrange your stay.
          If a booking is confirmed, information needed for accounting purposes (name, dates,
          amount) may be kept for longer to meet our legal and accounting obligations. If no
          booking follows, we may keep your enquiry for up to 24 months, so we can recognise you
          if you contact us again about a future stay and for our own internal analysis of
          enquiries received. This is based on our legitimate interest (GDPR Article 6(1)(f)). You
          can ask us to delete your enquiry at any time — see &quot;Your rights&quot; below.
        </p>
      </Section>

      <Section title="Cookies">
        <p>
          This site carries no advertising and uses no analytics or tracking tools. It also does
          not embed a Google Maps widget. The only cookie set is a strictly necessary, functional
          one, <code>NEXT_LOCALE</code>, which simply remembers whether you&apos;re browsing the
          site in French or English. In line with CNIL guidance, this kind of cookie does not
          require prior consent, so no cookie banner is shown.
        </p>
        <p>
          The home page includes videos hosted on YouTube (Google). They only load if you press
          play, using YouTube&apos;s privacy-enhanced mode (youtube-nocookie.com). Nothing is sent
          to YouTube until you start a video; once you do, YouTube may process some data (such as
          your IP address and playback activity) under its own privacy policy.
        </p>
      </Section>

      <Section title="Your rights">
        <p>
          Under GDPR and French data protection law, you have the right to access, rectify, erase,
          restrict and object to the processing of your data, and to give instructions about what
          happens to it after your death. To exercise these rights, write to us at{' '}
          <a href="mailto:reservation@chambresmoulinneuf.fr" className="text-sage underline">
            reservation@chambresmoulinneuf.fr
          </a>
          . You can also lodge a complaint with the French data protection authority, the CNIL (
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage underline"
          >
            www.cnil.fr
          </a>
          ), if you believe your rights have not been respected.
        </p>
      </Section>

      <Section title="Changes">
        <p>
          This policy may be updated if our practices change. The date at the top of this page
          shows when it was last revised.
        </p>
      </Section>
    </>
  );
}
