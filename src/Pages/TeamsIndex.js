import { useEffect, useState } from "react";
import Teams from "../Components/Teams";
const API_URL = process.env.REACT_APP_API_URL;

export default function TeamsIndex() {
  const [loading, setLoading] = useState(false);
  const [erroMsg, setErrorMsg] = useState("");
  const [teams, setTeams] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        setErrorMsg("");
        setLoading(true);
        const response = await fetch(`${API_URL}/teams`);
        if (response.ok) {
          const { data } = await response.json();
          setTeams(data);
        } else {
          const { error } = await response.json();
          setErrorMsg(error);
        }
      } catch (err) {
        setErrorMsg(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <div className="Loading">Loading...</div>;
    } else if (erroMsg) {
      return <div className="Error">Error: {erroMsg} </div>;
    } else {
      return <Teams teams={teams} />;
    }
  };
  return (
    <div>{renderContent}</div>
  )
}
