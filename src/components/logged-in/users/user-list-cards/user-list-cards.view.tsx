'use client';

import { UserCard } from '../user-list-card';
import { UserListCardsViewProps } from './user-list-card.types';

export function UsersListCardsView({
  data,
  currentUser,
  onDeleteUser
}: UserListCardsViewProps) {
  return (
    <div className="flex flex-col gap-8 min-[1130px]:hidden">
      {data.map((user) => (
        <UserCard
          key={user.userId}
          data={user}
          currentUser={currentUser}
          onDeleteUser={onDeleteUser}
        />
      ))}
    </div>
  );
}
