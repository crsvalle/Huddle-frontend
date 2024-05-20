import Team from "./Team";

export default function Teams({ teams }) {
    return (
        <div>
            {teams.map((team) => (
                <Team key={user.id} team={team} />
            ))}
        </div>
    );
}
