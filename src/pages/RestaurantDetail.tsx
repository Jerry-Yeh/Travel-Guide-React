import { useParams } from 'react-router-dom';

const RestaurantDetail = () => {
  const params = useParams();

  return <div>RestaurantDetail {params.id}</div>;
};

export default RestaurantDetail;
