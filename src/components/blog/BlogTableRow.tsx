import parse from 'html-react-parser';
import { BlogType } from '../../types';

interface BlogTableRowProps {
  row: BlogType;
}

const BlogTableRow = ({ row }: BlogTableRowProps) => {
  return (
    <tr className="hover">
      <td>{row.title}</td>
      <td className="line-clamp-5">{parse(row.content)}...</td>

      <td>
        <img width={100} src={row.coverImage} alt={row.title} />
      </td>
    </tr>
  );
};

export default BlogTableRow;
