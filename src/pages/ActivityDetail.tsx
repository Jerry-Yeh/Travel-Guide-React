import { useParams } from 'react-router-dom';

const ActivityDetail = () => {
  const params = useParams();

  return <div>ActivityDetail {params.id}</div>;
};

export default ActivityDetail;
