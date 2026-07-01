import { createContext, useContext, useState } from 'react';
import api from '../api/axios';

const IssueContext = createContext();

export function IssueProvider({ children }) {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchIssues = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('issues/');
      setIssues(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <IssueContext.Provider value={{ issues, loading, error, fetchIssues }}>
      {children}
    </IssueContext.Provider>
  );
}

export function useIssues() {
  return useContext(IssueContext);
}