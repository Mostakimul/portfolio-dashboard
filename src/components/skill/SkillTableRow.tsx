import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useDeleteSkillMutation } from '../../redux/features/skill/skillApi';
import { routesName } from '../../routes/routesName';
import { SkillType } from '../../types';
import { ALERTS } from '../../utils/alerts';

interface SkillTableRowProps {
  row: SkillType;
}

const SkillTableRow = ({ row }: SkillTableRowProps) => {
  const [deleteSKill] = useDeleteSkillMutation();
  const handleDelete = async () => {
    const result = await deleteSKill(row._id);
    if (result.data) {
      toast.success(ALERTS.SKILL.DELETE_SKILL);
    } else {
      toast.error(ALERTS.SOMETHING_WRONG);
    }
  };

  return (
    <tr className="hover">
      <td className="text-xl font-semibold">{row.skill}</td>
      <td>
        <img width={100} src={row.icon} alt={row.skill} />
      </td>
      <td className="flex items-center gap-2">
        <Link
          to={`${routesName.EDIT_SKILL}/${row._id}`}
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

export default SkillTableRow;
