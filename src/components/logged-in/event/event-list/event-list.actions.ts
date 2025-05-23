'use server';

import {
  EVENT_FORMAT,
  EVENT_STATUS,
  EVENT_TYPE
} from '@/dictionary/service.dict';
import { Event } from '@/domain';
import { CertFlowServices } from '@/service';

export async function getEventsAction(): Promise<Event[]> {
  // TODO: voltar para o método getEvents quando o backend estiver pronto
  const response = await CertFlowServices.getEventsMock();

  return (response.data ?? []).map((event) => ({
    id: event.eventId,
    name: event.name,
    format: EVENT_FORMAT[event.format] || event.format,
    startDate: new Date(event.startDate),
    endDate: new Date(event.endDate),
    hours: `${event.hours} horas`,
    type: EVENT_TYPE[event.type] || event.type,
    status: EVENT_STATUS[event.status] || event.status,
    createdAt: new Date(event.createdAt),
    updatedAt: new Date(event.updatedAt)
  }));
}
