import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useDeleteBlogMutation } from '../../redux/features/blog/blogApi';
import { routesName } from '../../routes/routesName';
import { BlogType } from '../../types';
import { ALERTS } from '../../utils/alerts';

interface BlogTableRowProps {
  row: BlogType;
}

const BlogTableRow = ({ row }: BlogTableRowProps) => {
  const [deleteBLog] = useDeleteBlogMutation();

  const handleDelete = async () => {
    const result = await deleteBLog(row._id);
    if (result.data) {
      toast.success(ALERTS.BLOG.DELETE_BLOG);
    } else {
      toast.error(ALERTS.SOMETHING_WRONG);
    }
  };

  return (
    <tr className="hover">
      <td>{row.title}</td>
      <td className="line-clamp-5">{parse(row.content)}...</td>

      <td>
        <img width={100} src={row.coverImage} alt={row.title} />
      </td>
      <td className="flex items-center gap-2">
        <Link
          to={`${routesName.EDIT_BLOG}/${row._id}`}
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

export default BlogTableRow;
