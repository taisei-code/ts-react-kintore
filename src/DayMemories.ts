import { Memory } from "./Memory";

export class DayMemories {
  constructor(
    public id: string,
    public date: string,
    public memories: Memory[]
  ) {}
}