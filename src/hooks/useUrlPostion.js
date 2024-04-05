import { useSearchParams } from "react-router-dom";

const useUrlPosition = () => {
  const [searchParams, setSerarchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return [lat, lng];
};

export { useUrlPosition };
