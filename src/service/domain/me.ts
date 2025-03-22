export enum Role {
  Owner = 'owner',
  Manager = 'manager',
  User = 'user'
}

export enum Status {
  Pending = 'pending',
  Active = 'active',
  Suspended = 'suspended',
  Canceled = 'canceled'
}

export type Me = {
  userId: string;
  taxId: string;
  email: string;
  name: string;
  mobilePhone: string;
  picture: string;
  role: Role;
  status: Status;
};
