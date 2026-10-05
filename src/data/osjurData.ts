import {
  Announcement,
  Assignment,
  ActivityGuide,
  Competency,
  DresscodeGroup,
  ProgramSchedule,
  PhotoItem,
} from '../types';
import schoolGroupImage from '../assets/images/gallery_it_go_to_school_1.jpeg';
import schoolHandoverImage from '../assets/images/gallery_it_go_to_school_2.jpeg';
import industryPetrokimiaImage from '../assets/images/gallery_kunjungan_industri_1.jpeg';
import industryOfficeImage from '../assets/images/gallery_kunjungan_industri_2.jpeg';

export const competencies: Competency[] = [
  {
    number: '01',
    title: 'Pemrograman Web',
    description:
      'Belajar membuat website dan aplikasi web dari nol, dari tampilan sampai logika di baliknya.',
  },
  {
    number: '02',
    title: 'UI/UX Design',
    description:
      'Merancang tampilan aplikasi yang enak dilihat dan mudah dipakai orang.',
  },
  {
    number: '03',
    title: 'Manajemen Basis Data',
    description:
      'Menyimpan dan mengelola data dengan rapi supaya mudah dicari dan aman.',
  },
  {
    number: '04',
    title: 'Jaringan Komputer',
    description:
      'Memahami cara perangkat saling terhubung, dari Wi-Fi sampai server.',
  },
  {
    number: '05',
    title: 'Pengolahan Data & Algoritma',
    description:
      'Melatih cara berpikir runtut untuk menyelesaikan masalah dengan data dan kode.',
  },
];

export const announcements: Announcement[] = [
  {
    id: 'ann-1',
    title: 'Pengumuman: Briefing Maba',
    content: 'Seluruh maba wajib hadir 15 menit sebelum acara dimulai.',
    date: '10 Okt 2026',
    category: 'Wajib',
  },
  {
    id: 'ann-2',
    title: 'Info Penugasan',
    content: 'Tugas pertama sudah dibuka. Cek halaman Penugasan.',
    date: '09 Okt 2026',
    category: 'Akademik',
  },
  {
    id: 'ann-3',
    title: 'Reminder Atribut',
    content: 'Jangan lupa membawa name tag dan alat tulis.',
    date: '08 Okt 2026',
    category: 'Perlengkapan',
  },
];

export const schedules: ProgramSchedule[] = [
  {
    id: 'online',
    title: 'Penugasan Online',
    dateStr: '7–9 Oktober 2026',
    items: ['Penugasan Individu', 'Penugasan Kelompok', 'Penugasan Angkatan'],
  },
  {
    id: 'offline',
    title: 'Orientasi Jurusan Offline',
    dateStr: '11 Oktober 2026',
    items: ['Penjelasan Materi Oleh Pemateri', 'Presentasi Penugasan'],
  },
];

export const activityGuides: ActivityGuide[] = [
  { activity: 'Registrasi', technicalGuide: 'MABA dating, Registrasi, dan Masuk Ruangan' },
  { activity: 'Pembukaan', technicalGuide: 'MABA duduk dan dibuka oleh MC' },
  { activity: 'Materi 1', technicalGuide: 'Pengenalan jurusan dan Profil Kelulusan' },
  { activity: 'Materi 2', technicalGuide: 'Dasar Dasar Jaringan Komputer' },
  { activity: 'Materi 3', technicalGuide: 'Dasar-dasar Pemrograman Website' },
  { activity: 'Materi 4', technicalGuide: 'Dasar-dasar CyberSecurity' },
  { activity: 'Presentasi logo', technicalGuide: 'MABA mempresentasikan Logo' },
  { activity: 'Bounding', technicalGuide: 'Sharing' },
  { activity: 'persiapan pulang', technicalGuide: 'Penutup' },
];

export const dresscodes: DresscodeGroup[] = [
  {
    id: 'putra',
    title: 'Putra',
    items: ['Baju Putih Formal', 'Celana Hitam Formal', 'Sepatu Bebas'],
  },
  {
    id: 'putri',
    title: 'Putri',
    items: ['Kerudung Hitam', 'Baju Putih Formal', 'Celana Hitam Formal', 'Sepatu Bebas'],
  },
];

export const assignments: Assignment[] = [
  {
    id: 'individu',
    number: '01',
    title: 'Penugasan Individu',
    description: 'Penugasan individu VOTECH 2026.',
    deadline: '7–9 Oktober 2026',
    detail: 'Berikut rangkaian penugasan individu.',
    type: 'Individu',
    items: [
      'Upload Twibbon Resmi VOTECH 2026',
      'link twibbon: (https://canva.link/ynrjncesxexm9zf)',
      'Membuat Roadmap Lulusan (Setelah pelaksanaan Materi 4)',
    ],
  },
  {
    id: 'kelompok',
    number: '02',
    title: 'Penugasan Kelompok',
    description: 'Penugasan kelompok VOTECH 2026.',
    deadline: '7–9 Oktober 2026',
    detail: 'Berikut rangkaian penugasan kelompok.',
    type: 'Kelompok',
    items: [
      'Membuat Logo Kelas + Filosofi Logo Tersebut',
      'Mempresentasikan Maksimal 2 menit Pada Saat Pelaksanaan VOTECH 2026',
    ],
  },
  {
    id: 'angkatan',
    number: '03',
    title: 'Penugasan Angkatan',
    description: 'Penugasan angkatan VOTECH 2026.',
    deadline: '7–9 Oktober 2026',
    detail: 'Berikut rangkaian penugasan angkatan.',
    type: 'Angkatan',
    items: [
      'Membuat Akun Instagram Kelas',
      'Membuat Struktur Kelas',
      'Menentukan Hasil/Voting',
    ],
  },
];

export const schoolPhotos: PhotoItem[] = [
  {
    id: 'sch-1',
    title: 'IT Go to School',
    src: schoolGroupImage,
    category: 'school',
    alt: 'Kegiatan IT Go to School bersama siswa dan mahasiswa Teknologi Informasi',
  },
  {
    id: 'sch-2',
    title: 'IT Go to School',
    src: schoolHandoverImage,
    category: 'school',
    alt: 'Penyerahan apresiasi dalam kegiatan IT Go to School',
  },
];

export const industryPhotos: PhotoItem[] = [
  {
    id: 'ind-1',
    title: 'Kunjungan Industri',
    src: industryPetrokimiaImage,
    category: 'industry',
    alt: 'Mahasiswa Teknologi Informasi dalam kegiatan kunjungan industri',
  },
  {
    id: 'ind-2',
    title: 'Kunjungan Industri',
    src: industryOfficeImage,
    category: 'industry',
    alt: 'Mahasiswa Teknologi Informasi berkunjung ke Petrokimia Gresik',
  },
];
