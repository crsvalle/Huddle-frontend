import { useEffect, useState } from "react";
import Users from "../Components/Users";

export default function Users() {
    const [loading, setLoading] = useState(false);
    const [erroMsg, setErrorMsg] = useState("");
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                setErrorMsg("");
                setLoading(true);
                const response = await fetch(`${API_URL}/teams/${id}/users`);
                if (response.ok) {
                    const { data } = await response.json();
                    setUsers(data);
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
            return <Users users={users} />;
        }
    };
    return (
        <div>{renderContent}</div>
    )
}
