import { ExperienceType } from '../../types';

interface ExperinceTableRowProps {
  row: ExperienceType;
}

const ExperinceTableRow = ({ row }: ExperinceTableRowProps) => {
  return (
    <tr className="hover">
      <td>{row.company}</td>
      <td>{row.timeFrame}</td>
      <td>{row.role}</td>
      <td>{row.location}</td>
    </tr>
  );
};

export default ExperinceTableRow;
