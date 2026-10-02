import {
  Announcement,
  Assignment,
  Competency,
  DayDresscode,
  DaySchedule,
  PhotoItem,
} from '../types';

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
        name: 'Pembukaan OSJUR',
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
        name: 'Penutupan OSJUR',
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
    id: 'tugas-01',
    number: 'Tugas 01',
    title: 'Perkenalan Diri Kreatif',
    description: 'Buat video singkat 1 menit untuk memperkenalkan dirimu.',
    deadline: 'Hari 1, 21.00',
    detail:
      'Video berdurasi maksimal 60 detik berisi nama, asal sekolah, hobi, dan alasan memilih D3 TI Politeknik Semen Indonesia. Unggah di Google Drive atau YouTube (Unlisted).',
    type: 'Individu',
  },
  {
    id: 'tugas-02',
    number: 'Tugas 02',
    title: 'Esai Singkat: Teknologi Impianku',
    description: 'Tulis 300 kata tentang teknologi yang ingin kamu buat.',
    deadline: 'Hari 2, 21.00',
    detail:
      'Tuliskan ide inovatif teknologi digital atau aplikasi yang bisa menyelesaikan masalah nyata di sekitarmu dalam format PDF/Google Docs sebanyak 300 kata.',
    type: 'Individu',
  },
  {
    id: 'tugas-03',
    number: 'Tugas 03',
    title: 'Desain Poster Digital',
    description: 'Buat poster bertema OSJUR D3 TI dengan aplikasi desain bebas.',
    deadline: 'Hari 2, 23.59',
    detail:
      'Gunakan Canva, Figma, Photoshop, atau software pilihanmu. Tema: Bangga Menjadi Mahasiswa D3 Teknologi Informasi Politeknik Semen Indonesia. Format PNG/PDF resolusi tajam.',
    type: 'Individu',
  },
  {
    id: 'tugas-04',
    number: 'Tugas 04',
    title: 'Mini Project Kelompok',
    description: 'Bangun halaman web sederhana bersama timmu.',
    deadline: 'Hari 3, 12.00',
    detail:
      'Kerjakan bersama kelompok OSJUR. Buat halaman web statis sederhana bertema profil kelompok atau portofolio tim menggunakan HTML & CSS.',
    type: 'Kelompok',
  },
];

export const schoolPhotos: PhotoItem[] = [
  {
    id: 'sch-1',
    title: '',
    date: '',
    src: '/src/assets/images/photo_school_banner_1790948130717.jpg',
    category: 'school',
    alt: 'Dokumentasi OSJUR D3 TI',
  },
  {
    id: 'sch-2',
    title: '',
    date: '',
    src: '/src/assets/images/photo_school_class_1790948149409.jpg',
    category: 'school',
    alt: 'Dokumentasi OSJUR D3 TI',
  },
  {
    id: 'sch-3',
    title: '',
    date: '',
    src: '/src/assets/images/photo_school_handover_1790948163047.jpg',
    category: 'school',
    alt: 'Dokumentasi OSJUR D3 TI',
  },
  {
    id: 'sch-4',
    title: '',
    date: '',
    src: '/src/assets/images/doc_school_demo_1790945984145.jpg',
    category: 'school',
    alt: 'Dokumentasi OSJUR D3 TI',
  },
];

export const industryPhotos: PhotoItem[] = [
  {
    id: 'ind-1',
    title: '',
    date: '',
    src: '/src/assets/images/photo_ind_petrokimia_1790948174964.jpg',
    category: 'industry',
    alt: 'Dokumentasi OSJUR D3 TI',
  },
  {
    id: 'ind-2',
    title: '',
    date: '',
    src: '/src/assets/images/photo_ind_office_1790948191590.jpg',
    category: 'industry',
    alt: 'Dokumentasi OSJUR D3 TI',
  },
  {
    id: 'ind-3',
    title: '',
    date: '',
    src: '/src/assets/images/doc_ind_digital_1790946027360.jpg',
    category: 'industry',
    alt: 'Dokumentasi OSJUR D3 TI',
  },
  {
    id: 'ind-4',
    title: '',
    date: '',
    src: '/src/assets/images/doc_ind_datacenter_1790946046197.jpg',
    category: 'industry',
    alt: 'Dokumentasi OSJUR D3 TI',
  },
];
