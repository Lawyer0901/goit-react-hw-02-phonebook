import { TitleMain } from './Section.styled';

export function Section({ title, children }) {
  return (
    <section>
      <TitleMain>{title}</TitleMain>
      {children}
    </section>
  );
}
