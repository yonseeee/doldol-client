import { Dayjs } from 'dayjs';

export interface Info {
  id: number;
  group_name: string;
  count: number;
  created_at: Dayjs;
}
