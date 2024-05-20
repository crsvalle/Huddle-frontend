import { useEffect, useState } from "react";

export default function Teams() {
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
  return (
    <div>Teams</div>
  )
}
