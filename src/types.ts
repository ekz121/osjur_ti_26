export type PageId =
  | 'beranda'
  | 'profil'
  | 'kegiatan'
  | 'dresscode'
  | 'penugasan'
  | 'pengumpulan'
  | 'guidebook'
  | 'dokumentasi';

export interface Competency {
  number: string;
  title: string;
  description: string;
}

export interface ActivityGuide {
  activity: string;
  technicalGuide: string;
}

export interface ProgramSchedule {
  id: string;
  title: string;
  dateStr: string;
  items: string[];
}

export interface DresscodeGroup {
  id: string;
  title: string;
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
  items: string[];
  note?: string;
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
  date?: string;
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
