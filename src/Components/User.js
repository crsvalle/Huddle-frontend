export default function User({ user }) {
    return (
        <div>
            <div>{user.first_name} {user.last_name}</div>
            <div>{user.joined_at}</div>
        </div>
    )
}
