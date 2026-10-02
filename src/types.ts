export type PageId =
  | 'beranda'
  | 'profil'
  | 'kegiatan'
  | 'dresscode'
  | 'penugasan'
  | 'pengumpulan'
  | 'dokumentasi';

export interface Competency {
  number: string;
  title: string;
  description: string;
}

export interface Activity {
  time: string;
  name: string;
  location: string;
  type?: 'wajib' | 'workshop' | 'mentoring' | 'kelompok';
}

export interface DaySchedule {
  day: number;
  title: string;
  dateStr: string;
  activities: Activity[];
}

export interface DayDresscode {
  day: number;
  title: string;
  dateStr: string;
  attire: string;
  items: string[];
}

export interface Assignment {
  id: string;
  number: string;
  title: string;
  description: string;
  deadline: string;
  detail: string;
  type: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  src: string;
  category: 'school' | 'industry';
  alt: string;
}

export interface TaskSubmission {
  taskId: string;
  fullName: string;
  nim: string;
  groupName: string;
  fileUrl: string;
  note?: string;
  submittedAt: string;
}
