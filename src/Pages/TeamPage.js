import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import UsersIndex from "./UsersIndex";
const API_URL = process.env.REACT_APP_API_URL;

export default function TeamPage() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [teamData, setTeamData] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setErrorMsg("");
        setLoading(true);
        const response = await fetch(`${API_URL}/teams/${id}`);
        if (response.ok) {
          const data = await response.json();
          setTeamData(data.data);
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
    } else if (errorMsg) {
      return <div className="Error">Error: {errorMsg} </div>;
    } else if (teamData) {
      return (
        <div>
          {/* will replace with team info component in future => figure out what data needs to be fetched in this file*/}
          <h1>{teamData.name}</h1>
          <p>{teamData.description}</p>
          {<UsersIndex id={id}/>}
        </div>
      );
    } else {
      return null;
    }
  };

  return <div>{renderContent()}</div>;
}
