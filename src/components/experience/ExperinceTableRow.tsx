import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useDeleteExperienceMutation } from '../../redux/features/experience/experienceApi';
import { routesName } from '../../routes/routesName';
import { ExperienceType } from '../../types';
import { ALERTS } from '../../utils/alerts';

interface ExperinceTableRowProps {
  row: ExperienceType;
}

const ExperinceTableRow = ({ row }: ExperinceTableRowProps) => {
  const [deleteExperience] = useDeleteExperienceMutation();

  const handleDelete = async () => {
    const result = await deleteExperience(row._id);
    if (result.data) {
      toast.success(ALERTS.EXPERIENCE.DELETE_EXPERIENCE);
    } else {
      toast.error(ALERTS.SOMETHING_WRONG);
    }
  };

  return (
    <tr className="hover">
      <td>{row.company}</td>
      <td>{row.timeFrame}</td>
      <td>{row.role}</td>
      <td>{row.location}</td>
      <td className="flex items-center gap-2">
        <Link
          to={`${routesName.EDIT_EXPERIENCE}/${row._id}`}
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

export default ExperinceTableRow;
