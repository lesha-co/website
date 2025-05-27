export const Skills = ({ skills }: { skills: string[] }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <li
          className="bg-blue-100 text-blue-500 rounded-sm px-2 py-1"
          key={skill}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
};
