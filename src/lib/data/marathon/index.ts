import type { MarathonEvent } from '@/types/marathon';
import { marchEvents } from './march';
import { aprilEvents } from './april';
import { mayEvents } from './may';
import { juneEvents } from './june';
import { julyEvents } from './july';
import { augustEvents } from './august';
import { septemberEvents } from './september';
import { octoberEvents } from './october';
import { novemberEvents } from './november';
import { decemberEvents } from './december';
import { februaryEvents } from './february';

export const marathonEvents: MarathonEvent[] = [
  ...marchEvents,
  ...aprilEvents,
  ...mayEvents,
  ...juneEvents,
  ...julyEvents,
  ...augustEvents,
  ...septemberEvents,
  ...octoberEvents,
  ...novemberEvents,
  ...decemberEvents,
  ...februaryEvents,
];

export function getMarathonEvents(): MarathonEvent[] {
  return marathonEvents;
}

export function getMarathonEventById(id: string): MarathonEvent | undefined {
  return marathonEvents.find((event) => event.id === id);
}

export function getMajorEvents(): MarathonEvent[] {
  return marathonEvents.filter((event) => event.isMajor);
}

export default marathonEvents;
