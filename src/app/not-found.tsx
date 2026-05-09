import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] grid place-items-center bg-bone">
      <div className="container-narrow text-center py-16">
        <p className="eyebrow">404</p>
        <h1 className="h-display mt-3">Page not found.</h1>
        <p className="mt-4 max-w-xl mx-auto text-ink/70">
          Looks like we drilled in the wrong spot. Head home or grab a free estimate — we’ll find what you need.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">Go Home</Link>
          <Link href="/quote" className="btn-secondary">Free Estimate</Link>
        </div>
      </div>
    </section>
  );
}
