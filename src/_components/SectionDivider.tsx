export default function SectionDivider() {
  return (
    <div className="w-full flex items-center justify-center py-8">
      <div className="w-full max-w-6xl h-px opacity-50" style={{ background: 'linear-gradient(to right, transparent, var(--accent-primary), transparent)' }} />
    </div>
  );
}
