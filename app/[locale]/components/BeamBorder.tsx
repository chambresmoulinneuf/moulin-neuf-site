// Moving beam border: a single bright beam chasing around the button edge.
// Drop inside any element with .btn-primary (or position: relative + a border-radius).
// Styles live in globals.css (.beam-border). Hidden for reduced motion,
// so the button just looks normal there.
export default function BeamBorder() {
  return <span className="beam-border" aria-hidden="true" />;
}
