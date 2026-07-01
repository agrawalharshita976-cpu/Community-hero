import { IssueProvider, useIssues } from './context/IssueContext';
import { useEffect } from 'react';

function TestFetch() {
  const { issues, loading, error, fetchIssues } = useIssues();

  useEffect(() => {
    fetchIssues();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <p>Fetched {issues.length} issues</p>
      <pre>{JSON.stringify(issues, null, 2)}</pre>
    </div>
  );
}

function App() {
  return (
    <IssueProvider>
      <TestFetch />
    </IssueProvider>
  );
}

export default App;