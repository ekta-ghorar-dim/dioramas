/** AOBS mark, drawn with a CSS mask so it inherits the current text colour. */
export function Logo({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <span
      role="img" aria-label="AOBS logo" className={`inline-block shrink-0 bg-current ${className}`}
      style={{ width: size * 0.974, height: size, WebkitMask: 'url(/brand/aobs-logo.svg) center / contain no-repeat', mask: 'url(/brand/aobs-logo.svg) center / contain no-repeat' }}
    />
  );
}
