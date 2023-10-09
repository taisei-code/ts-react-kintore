import { Memory } from "./Memory";

export class DayMemories {
  constructor(
    public date: string,
    public memories: Memory[]
  ) {}
}