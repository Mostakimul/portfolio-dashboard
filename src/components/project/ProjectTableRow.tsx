import { ProjectType } from '../../types';

interface ProjectTableRowProps {
  row: ProjectType;
}

const ProjectTableRow = ({ row }: ProjectTableRowProps) => {
  return (
    <tr className="hover">
      <td>{row.title}</td>
      <td>{row.description}</td>
      <td>
        {row.badges.map((bg, index) => (
          <a
            href={bg.link}
            key={index}
            className="inline-block rounded-full px-3 py-1 text-sm font-semibold m-1 bg-gray-800"
          >
            {bg.title}
          </a>
        ))}
      </td>
      <td>
        <img width={100} src={row.imageSrc} alt={row.title} />
      </td>
    </tr>
  );
};

export default ProjectTableRow;
