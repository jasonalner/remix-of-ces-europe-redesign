// The CES logo swoosh, used as a subtle decorative motif.
export function Swoosh({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 660 676" aria-hidden="true" className={`pointer-events-none fill-current ${className}`}>
      <path d="M544.39,3.74c-100-24.24-526.12,71.09-544,238-17,158.32,520.68,445.63,630.66,433,1-.11,25.32-.58,25.34-18,.09-67-286-284.92-274-421,11-124,207.85-208.36,162-232" />
    </svg>
  );
}
