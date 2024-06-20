import { useUniqViewSeconds } from '../hooks/useUniqViewSeconds';

export const UniqueViewSecondsComponent = () => {
  const { uniqueViewSeconds, loading, error } = useUniqViewSeconds();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Unique View Seconds</h1>
      <ul>
        {uniqueViewSeconds.map((second, index) => (
          <li key={index}>{second}</li>
        ))}
      </ul>
    </div>
  );
};
