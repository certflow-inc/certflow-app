export type EventFormat = 'closed' | 'faceToFace';
export type EventType = 'opened' | 'closed';
export type EventStatus = 'active' | 'archived';
export type Event = {
  eventId: string;
  format: EventFormat;
  type: EventType;
  name: string;
  startDate: number;
  endDate: number;
  hours: number;
  status: EventStatus;
  locked: boolean;
  createdAt: number;
  updatedAt: number;
  templateId?: string;
  signatureId?: string;
};
