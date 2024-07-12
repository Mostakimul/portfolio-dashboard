import { SkillType } from '../../types';

interface SkillTableRowProps {
  row: SkillType;
}

const SkillTableRow = ({ row }: SkillTableRowProps) => {
  return (
    <tr className="hover">
      <td className="text-xl font-semibold">{row.skill}</td>
      <td>
        <img width={100} src={row.icon} alt={row.skill} />
      </td>
    </tr>
  );
};

export default SkillTableRow;
