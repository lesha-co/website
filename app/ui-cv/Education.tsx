import { Title } from "./Title";
import { Years } from "./Years";

export const Education = (props: { schools: Education[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {props.schools.map((edu) => (
        <div key={edu.school}>
          <Years>{edu.years}</Years>
          <h3>
            <Title>{edu.degree}</Title>
          </h3>
          <p>{edu.school}</p>
        </div>
      ))}
    </div>
  );
};
