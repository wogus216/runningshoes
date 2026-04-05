import type { MarathonEvent, EventMonth } from '@/types/marathon';
import { marchEvents } from './march';
import { aprilEvents } from './april';
import { mayEvents } from './may';
import { juneEvents } from './june';

export const marathonEvents: MarathonEvent[] = [
  ...marchEvents,
  ...aprilEvents,
  ...mayEvents,
  ...juneEvents,
];

export function getMarathonEvents(): MarathonEvent[] {
  return marathonEvents;
}

export function getMarathonEventById(id: string): MarathonEvent | undefined {
  return marathonEvents.find((event) => event.id === id);
}

export function getEventsByMonth(month: EventMonth): MarathonEvent[] {
  return marathonEvents.filter((event) => event.month === month);
}

export function getMajorEvents(): MarathonEvent[] {
  return marathonEvents.filter((event) => event.isMajor);
}

export function getOpenEvents(): MarathonEvent[] {
  return marathonEvents.filter((event) => event.status === '접수중');
}

export default marathonEvents;
