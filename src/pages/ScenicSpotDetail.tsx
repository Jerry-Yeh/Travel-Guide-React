import { useParams } from 'react-router-dom';

const ScenicSpotDetail = () => {
  const params = useParams();

  return <div>ScenicSpotDetail {params.id}</div>;
};

export default ScenicSpotDetail;
