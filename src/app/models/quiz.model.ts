


export enum StatusType {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  DEACTIVATED = 'DEACTIVATED',
  DELETED = 'DELETED'
}

export interface Quiz {
  id: number;
  name: string;
  author: string;
  category: string;
  date: string;
  description: string;
  status: StatusType;
  modification_time: string;
}
