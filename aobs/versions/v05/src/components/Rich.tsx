import { Fragment } from 'react';

/** Renders content strings. Supports **bold** and turns {{TODO: x}} into a clearly marked "data pending" chip. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\{\{TODO:[^}]*\}\}|\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith('{{TODO:')) return <span key={i} className="todo">{p.slice(7, -2).trim()}</span>;
        if (p.startsWith('**')) return <strong key={i}>{p.slice(2, -2)}</strong>;
        return <Fragment key={i}>{p}</Fragment>;
      })}
    </>
  );
}
