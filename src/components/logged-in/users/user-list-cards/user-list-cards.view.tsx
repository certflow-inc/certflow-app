import { UserCard } from '../user-list-card';

// TODO receber a lista de usuários como props
export function UsersListCardsView() {
  const usersMocked = Array.from({ length: 10 }).map((_, index) => ({
    id: String(index),
    name: `User ${index}`,
    email: `user${index}@example.com`,
    mobilePhone: `(11) 99999-9999`,
    role: index === 0 ? 'Owner' : 'Admin',
    status: 'Active'
  }));

  return (
    <div className="flex flex-col gap-8 min-[1130px]:hidden">
      {usersMocked.map((user) => (
        <UserCard key={user.id} data={user} />
      ))}
    </div>
  );
}
