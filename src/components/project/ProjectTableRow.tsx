import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useDeleteProjectMutation } from '../../redux/features/project/projectApi';
import { routesName } from '../../routes/routesName';
import { ProjectType } from '../../types';
import { ALERTS } from '../../utils/alerts';

interface ProjectTableRowProps {
  row: ProjectType;
}

const ProjectTableRow = ({ row }: ProjectTableRowProps) => {
  const [deleteProject] = useDeleteProjectMutation();

  const handleDelete = async () => {
    const result = await deleteProject(row._id);
    if (result.data) {
      toast.success(ALERTS.PROJECT.DELETE_PROJECT);
    } else {
      toast.error(ALERTS.SOMETHING_WRONG);
    }
  };

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
      <td className="flex items-center gap-2">
        <Link
          to={`${routesName.EDIT_PROJECT}/${row._id}`}
          className="btn btn-sm btn-outline btn-info"
        >
          {ALERTS.BUTTON.EDIT}
        </Link>
        <button
          onClick={() => handleDelete()}
          className="btn btn-sm btn-outline btn-error"
        >
          {ALERTS.BUTTON.DELETE}
        </button>
      </td>
    </tr>
  );
};

export default ProjectTableRow;
