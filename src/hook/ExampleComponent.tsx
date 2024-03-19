import { Spin } from 'antd';
import useFetch from './useFetch';

const ExampleComponent = () => {
  const [data, isLoading] = useFetch('https://api.example.com/data');

  return (
    <div>
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <div>
          <h1>Data:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ExampleComponent;
