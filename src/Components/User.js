export default function User({ user }) {
    return (
        <div>
            <h3>{user.first_name} {user.last_name}</h3>
            <h4>{user.joined_at}</h4>
            <p><small>Joined: {new Date(user.joined_at).toLocaleDateString()}</small></p>
            <button>Remove</button>
            <button>Change Role</button>
        </div>
    )
}
