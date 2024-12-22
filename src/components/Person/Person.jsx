export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person_name">{person.name};</h2>
    <p className="Person_age">{person.age};</p>
    <p className="Person_partner">{person.partner};</p>
  </section>
);
