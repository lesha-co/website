export const Education = (props: { schools: Education[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {props.schools.map((edu) => (
        <div key={edu.school}>
          <p className="font-bold">{edu.years}</p>
          <h3>
            {edu.degree} at <span>{edu.school}</span>
          </h3>
        </div>
      ))}
    </div>
  );
};
