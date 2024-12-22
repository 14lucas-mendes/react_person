/* eslint-disable no-nested-ternary */
export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person_name">{person.name}</h2>
    <p className="Person_age">{person.age ? person.age : undefined}</p>
    <p className="Person_sex">{person.sex}</p>
    <p className="Person_isMarried">
      {person.isMarried
        ? person.sex === 'm'
          ? `${person.partnerName} is my wife`
          : `${person.partnerName} is my husband`
        : 'Not married'}
    </p>
    {person.partnerName && (
      <p className="Person_partner">Partner: {person.partnerName}</p>
    )}
  </section>
);
