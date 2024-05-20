import Team from "./Team";

export default function Teams({ teams }) {
    return (
        <div>
            {teams.map((team) => (
                <Team key={team.id} team={team} />
            ))}
        </div>
    );
}
