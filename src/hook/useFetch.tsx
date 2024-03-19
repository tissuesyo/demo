import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearLoading, setLoading } from './actions/loadingActions';

const useFetch = (url, method = 'get', initialData) => {
  const [data, setData] = useState(initialData);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loading.isLoading);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading());

      try {
        let response;
        switch (method.toLowerCase()) {
          case 'get':
            response = await axios.get(url);
            break;
          case 'post':
            response = await axios.post(url);
            break;
          case 'patch':
            response = await axios.patch(url);
            break;
          case 'put':
            response = await axios.put(url);
            break;
          case 'delete':
            response = await axios.delete(url);
            break;
          default:
            throw new Error(`Unsupported method: ${method}`);
        }
        setData(response.data);
      } catch (error) {
        console.error('Request failed:', error);
      } finally {
        dispatch(clearLoading());
      }
    };

    fetchData();
  }, [url, method, dispatch]);

  return [data, isLoading];
};

export default useFetch;
