import { UserCard } from '../user-list-card';
import { UserListCardsViewProps } from './user-list-card.types';

// TODO receber a lista de usuários como props
export function UsersListCardsView({ data }: UserListCardsViewProps) {
  return (
    <div className="flex flex-col gap-8 min-[1130px]:hidden">
      {data.map((user) => (
        <UserCard key={user.userId} data={user} />
      ))}
    </div>
  );
}
