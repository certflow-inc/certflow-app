import {
  EventFormat,
  EventStatus,
  EventType
} from '@/service/base/domain/event';

export const SERVICE_MAP: Record<string, string> = {
  credits: 'Créditos',
  users: 'Usuários',
  signatures: 'Assinaturas',
  templates: 'Templates',
  events: 'Eventos'
} as const;

export const EVENT_FORMAT: Record<EventFormat, string> = {
  closed: 'Fechado',
  faceToFace: 'Presencial'
} as const;

export const EVENT_TYPE: Record<EventType, string> = {
  opened: 'Aberto',
  closed: 'Fechado'
};

export const EVENT_STATUS: Record<EventStatus, string> = {
  active: 'Ativo',
  archived: 'Arquivado'
};
