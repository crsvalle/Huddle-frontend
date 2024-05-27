export default function Team({ team }) {
    return (
        <div className="team-card">
        <h2>{team.name}</h2>
        <p>{team.description}</p>
        <p><small>Created at: {new Date(team.created_at).toLocaleDateString()}</small></p>
      </div>
    )
}
