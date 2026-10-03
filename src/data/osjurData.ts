import {
  Announcement,
  Assignment,
  Competency,
  DayDresscode,
  DaySchedule,
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

export const schedules: DaySchedule[] = [
  {
    day: 1,
    title: 'Hari 1',
    dateStr: 'Senin, 12 Oktober 2026',
    activities: [
      {
        time: '07.00',
        name: 'Registrasi Ulang',
        location: 'Lobi Gedung A',
        type: 'wajib',
      },
      {
        time: '08.00',
        name: 'Pembukaan VOTECH',
        location: 'Aula Utama',
        type: 'wajib',
      },
      {
        time: '10.00',
        name: 'Perkenalan Prodi TI',
        location: 'Ruang Seminar',
        type: 'workshop',
      },
      {
        time: '13.00',
        name: 'Games Kelompok',
        location: 'Lapangan',
        type: 'kelompok',
      },
    ],
  },
  {
    day: 2,
    title: 'Hari 2',
    dateStr: 'Selasa, 13 Oktober 2026',
    activities: [
      {
        time: '07.30',
        name: 'Apel Pagi',
        location: 'Lapangan',
        type: 'wajib',
      },
      {
        time: '09.00',
        name: 'Workshop Dasar Web',
        location: 'Lab Komputer 1',
        type: 'workshop',
      },
      {
        time: '13.00',
        name: 'Sesi Mentoring',
        location: 'Ruang Kelas B2',
        type: 'mentoring',
      },
      {
        time: '15.30',
        name: 'Evaluasi Harian',
        location: 'Ruang Kelas B2',
        type: 'wajib',
      },
    ],
  },
  {
    day: 3,
    title: 'Hari 3',
    dateStr: 'Rabu, 14 Oktober 2026',
    activities: [
      {
        time: '08.00',
        name: 'Mini Project Kelompok',
        location: 'Lab Komputer 2',
        type: 'kelompok',
      },
      {
        time: '12.30',
        name: 'Presentasi Hasil',
        location: 'Aula Utama',
        type: 'workshop',
      },
      {
        time: '15.00',
        name: 'Penutupan VOTECH',
        location: 'Aula Utama',
        type: 'wajib',
      },
    ],
  },
];

export const dresscodes: DayDresscode[] = [
  {
    day: 1,
    title: 'Hari 1',
    dateStr: 'Senin, 12 Oktober 2026',
    attire: 'Kemeja putih, celana/rok hitam, sepatu hitam.',
    items: ['Name tag', 'Alat tulis', 'Botol minum'],
  },
  {
    day: 2,
    title: 'Hari 2',
    dateStr: 'Selasa, 13 Oktober 2026',
    attire: 'Kaos jurusan, celana bahan hitam, sepatu bebas rapi.',
    items: ['Laptop', 'Charger', 'Name tag'],
  },
  {
    day: 3,
    title: 'Hari 3',
    dateStr: 'Rabu, 14 Oktober 2026',
    attire: 'Kemeja biru, celana/rok hitam, sepatu hitam.',
    items: ['Name tag', 'Laptop', 'Bekal ringan'],
  },
];

export const assignments: Assignment[] = [
  {
    id: 'individu',
    number: '01',
    title: 'Penugasan Individu',
    description: 'Dikerjakan oleh setiap peserta VOTECH.',
    deadline: 'Ikuti arahan panitia',
    detail: 'Selesaikan seluruh butir penugasan individu berikut.',
    type: 'Individu',
    items: [
      'Upload Twibbon',
      'Wajib Connect LinkedIn minimal 5 teman sekelas',
      'Membuat Roadmap Lulusan',
    ],
    note: 'Roadmap Lulusan dikerjakan saat pelaksanaan VOTECH pada Sabtu, 10 Oktober 2026.',
  },
  {
    id: 'kelompok',
    number: '02',
    title: 'Penugasan Kelompok',
    description: 'Dikerjakan dan dipresentasikan bersama kelompok.',
    deadline: 'Saat pelaksanaan VOTECH',
    detail: 'Siapkan identitas kelas dan presentasi singkat.',
    type: 'Kelompok',
    items: [
      'Membuat Logo Kelas + Filosofi Logo tersebut',
      'Mempresentasikan selama 2 menit pada saat pelaksanaan VOTECH',
    ],
  },
  {
    id: 'angkatan',
    number: '03',
    title: 'Penugasan Angkatan',
    description: 'Dikerjakan bersama seluruh peserta satu angkatan.',
    deadline: 'Dijelaskan saat pelaksanaan',
    detail: 'Ketentuan lengkap akan dijelaskan saat pelaksanaan VOTECH.',
    type: 'Angkatan',
    items: [
      'Membuat Akun Instagram Kelas',
      'Membentuk Struktural Kelas',
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
