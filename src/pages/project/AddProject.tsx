import { useParams } from 'react-router-dom';
import AddProjectForm from '../../components/project/AddProjectForm';
import { useGetSingleProjectQuery } from '../../redux/features/project/projectApi';
import { ALERTS } from '../../utils/alerts';

const AddProject = () => {
  const { id } = useParams();
  const { data } = useGetSingleProjectQuery(id, {
    skip: !id,
  });
  return (
    <div className="flex flex-col w-full  my-5 gap-5">
      <div className="grid h-20 card bg-base-200 rounded-box place-items-center ">
        <h1 className="text-3xl font-bold">
          {id ? ALERTS.PAGE_TITLE.EDIT_PROJECT : ALERTS.PAGE_TITLE.ADD_PROJECT}
        </h1>
      </div>
      <div className="grid card bg-base-200 rounded-box place-items-center p-5">
        {data?.data ? (
          <AddProjectForm project={data?.data} />
        ) : (
          <AddProjectForm />
        )}
      </div>
    </div>
  );
};

export default AddProject;
