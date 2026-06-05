export type VerificationText = "Data perlu diverifikasi" | "Data belum tersedia";

export type SeasonEra =
  | "Pra Sir Alex Ferguson"
  | "Era awal Sir Alex Ferguson"
  | "Era Premier League awal"
  | "Era Treble"
  | "Era Ronaldo & Rooney"
  | "Era pasca Sir Alex Ferguson"
  | "Era modern";

export interface SquadPlayer {
  name: string;
  shirtNumber: number | string;
  position: string;
  age: number | VerificationText;
  country: string | VerificationText;
  appearances?: number | VerificationText;
  goals?: number | VerificationText;
  status: "Pemain utama" | "Cadangan" | "Pemain muda" | VerificationText;
}

export interface TransferRecord {
  player: string;
  from?: string;
  to?: string;
  fee: string | VerificationText;
  date: string | VerificationText;
  note: string;
}

export interface StartingXI {
  formation: string | VerificationText;
  players: {
    GK: string | VerificationText;
    RB: string | VerificationText;
    CB1: string | VerificationText;
    CB2: string | VerificationText;
    LB: string | VerificationText;
    RM: string | VerificationText;
    CM1: string | VerificationText;
    CM2: string | VerificationText;
    LM: string | VerificationText;
    ST1: string | VerificationText;
    ST2: string | VerificationText;
  };
}

export interface KeyPlayer {
  name: string;
  position: string;
  contribution: string;
  story: string;
}

export interface SeasonStatistics {
  leaguePosition: string | VerificationText;
  matches: number | VerificationText;
  wins: number | VerificationText;
  draws: number | VerificationText;
  losses: number | VerificationText;
  goalsFor: number | VerificationText;
  goalsAgainst: number | VerificationText;
  topScorer: string | VerificationText;
  mostAppearances: string | VerificationText;
}

export interface ImportantMoment {
  month: string;
  title: string;
  description: string;
  impact: string;
}

export interface Season {
  id: string;
  label: string;
  title: string;
  era: SeasonEra;
  managers: string[];
  competitions: string[];
  leaguePosition: string | VerificationText;
  trophies: string[];
  summary: string;
  story: string[];
  squad: SquadPlayer[];
  transfersIn: TransferRecord[];
  transfersOut: TransferRecord[];
  commonStartingXI: StartingXI;
  keyPlayers: KeyPlayer[];
  statistics: SeasonStatistics;
  importantMoments: ImportantMoment[];
  additionalInfo: string[];
  featured: boolean;
}

export interface EraGroup {
  name:
    | SeasonEra
    | "Era Newton Heath"
    | "Era Matt Busby"
    | "Era Tommy Docherty"
    | "Era Ron Atkinson";
  description: string;
  seasonIds: string[];
}

const NEEDS_VERIFICATION: VerificationText = "Data perlu diverifikasi";
const NOT_AVAILABLE: VerificationText = "Data belum tersedia";
const NO_PERMANENT_SQUAD_NUMBER = "Belum ada nomor skuad permanen";

const emptyStartingXI: StartingXI = {
  formation: NEEDS_VERIFICATION,
  players: {
    GK: NEEDS_VERIFICATION,
    RB: NEEDS_VERIFICATION,
    CB1: NEEDS_VERIFICATION,
    CB2: NEEDS_VERIFICATION,
    LB: NEEDS_VERIFICATION,
    RM: NEEDS_VERIFICATION,
    CM1: NEEDS_VERIFICATION,
    CM2: NEEDS_VERIFICATION,
    LM: NEEDS_VERIFICATION,
    ST1: NEEDS_VERIFICATION,
    ST2: NEEDS_VERIFICATION
  }
};

export const seasons: Season[] = [
  {
    id: "1986-87",
    label: "1986/87",
    title: "Manchester United Musim 1986/87",
    era: "Era awal Sir Alex Ferguson",
    managers: ["Ron Atkinson", "Sir Alex Ferguson"],
    competitions: ["First Division", "FA Cup", "League Cup"],
    leaguePosition: "11th First Division",
    trophies: [],
    summary:
      "Musim transisi besar: Ron Atkinson digantikan Sir Alex Ferguson pada 6 November 1986. United tidak meraih trofi, tetapi musim ini menjadi titik awal perubahan budaya, disiplin, kebugaran, dan arah masa depan klub.",
    story: [
      "Manchester United memulai musim 1986/87 dalam kondisi tidak stabil. Ron Atkinson memulai musim, tetapi hasil awal yang buruk membuat klub mengambil keputusan besar untuk mengganti manajer.",
      "Sir Alex Ferguson datang dari Aberdeen pada 6 November 1986. Laga pertamanya berakhir dengan kekalahan dari Oxford United, tetapi setelah itu United perlahan menjadi lebih stabil.",
      "Menurut data yang diberikan, Ferguson menangani 31 pertandingan semua kompetisi pada sisa musim itu dengan catatan 12 menang, 10 seri, dan 9 kalah. Ini bukan lonjakan instan menuju kejayaan, tetapi tanda awal bahwa standar baru mulai dibangun.",
      "Performa kandang dan tandang sangat kontras. Di liga, United mencatat rekor kandang 21 main, 13 menang, 3 seri, 5 kalah, gol 38:18. Di tandang, United hanya menang 1 kali dari 21 pertandingan, dengan rekor 1 menang, 11 seri, 9 kalah, gol 14:27.",
      "Musim ini penting karena Ferguson datang bukan ke tim juara, melainkan ke klub besar yang sedang kacau. Ia mewarisi skuad berisi nama besar seperti Bryan Robson, Paul McGrath, Norman Whiteside, Gordon Strachan, dan Frank Stapleton, tetapi juga masalah cedera, disiplin, keseimbangan skuad, dan konsistensi."
    ],
    squad: [
      {
        name: "Peter Davenport",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Striker",
        age: 26,
        country: "England",
        appearances: 45,
        goals: 16,
        status: "Pemain utama"
      },
      {
        name: "Paul McGrath",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek tengah",
        age: 27,
        country: "Republic of Ireland",
        appearances: 40,
        goals: 2,
        status: "Pemain utama"
      },
      {
        name: "Frank Stapleton",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Striker",
        age: 30,
        country: "Republic of Ireland",
        appearances: 40,
        goals: 9,
        status: "Pemain utama"
      },
      {
        name: "Kevin Moran",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek tengah",
        age: 31,
        country: "Republic of Ireland",
        appearances: 38,
        goals: 0,
        status: "Pemain utama"
      },
      {
        name: "Gordon Strachan",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang kanan",
        age: 30,
        country: "Scotland",
        appearances: 38,
        goals: 4,
        status: "Pemain utama"
      },
      {
        name: "Mick Duxbury",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kanan",
        age: 27,
        country: "England",
        appearances: 37,
        goals: 1,
        status: "Pemain utama"
      },
      {
        name: "Bryan Robson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kapten, gelandang",
        age: 30,
        country: "England",
        appearances: 33,
        goals: 7,
        status: "Pemain utama"
      },
      {
        name: "Jesper Olsen",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kiri",
        age: 26,
        country: "Denmark",
        appearances: 32,
        goals: 3,
        status: "Pemain utama"
      },
      {
        name: "John Sivebaek",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kanan",
        age: 25,
        country: "Denmark",
        appearances: 31,
        goals: 1,
        status: "Pemain utama"
      },
      {
        name: "Norman Whiteside",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang serang/penyerang",
        age: 22,
        country: "Northern Ireland",
        appearances: 31,
        goals: 8,
        status: "Pemain utama"
      },
      {
        name: "Chris Turner",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kiper",
        age: 28,
        country: "England",
        appearances: 29,
        goals: 0,
        status: "Pemain utama"
      },
      {
        name: "Arthur Albiston",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kiri",
        age: 29,
        country: "Scotland",
        appearances: 26,
        goals: 0,
        status: "Pemain utama"
      },
      {
        name: "Colin Gibson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kiri",
        age: 27,
        country: "England",
        appearances: 26,
        goals: 1,
        status: "Pemain utama"
      },
      {
        name: "Remi Moses",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang bertahan",
        age: 26,
        country: "England",
        appearances: 22,
        goals: 2,
        status: "Pemain utama"
      },
      {
        name: "Terry Gibson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Striker",
        age: 24,
        country: "England",
        appearances: 20,
        goals: 1,
        status: "Cadangan"
      },
      {
        name: "Gary Walsh",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kiper",
        age: 19,
        country: "England",
        appearances: 14,
        goals: 0,
        status: "Cadangan"
      },
      {
        name: "Clayton Blackmore",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kanan",
        age: 22,
        country: "Wales",
        appearances: 13,
        goals: 1,
        status: "Cadangan"
      },
      {
        name: "Graeme Hogg",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek tengah",
        age: 23,
        country: "Scotland",
        appearances: 13,
        goals: 0,
        status: "Cadangan"
      },
      {
        name: "Billy Garton",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek tengah",
        age: 22,
        country: "England",
        appearances: 11,
        goals: 0,
        status: "Cadangan"
      },
      {
        name: "Liam O'Brien",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang bertahan",
        age: 22,
        country: "Republic of Ireland",
        appearances: 11,
        goals: 0,
        status: "Cadangan"
      },
      {
        name: "Peter Barnes",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang kiri",
        age: 30,
        country: "England",
        appearances: 9,
        goals: 1,
        status: "Cadangan"
      },
      {
        name: "Gary Bailey",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kiper",
        age: 28,
        country: "England",
        appearances: 5,
        goals: 0,
        status: "Cadangan"
      },
      {
        name: "Nicky Wood",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Penyerang",
        age: 21,
        country: "England",
        appearances: 3,
        goals: 0,
        status: "Cadangan"
      },
      {
        name: "Tony Gill",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang bertahan",
        age: 19,
        country: "England",
        appearances: 1,
        goals: 0,
        status: "Pemain muda"
      }
    ],
    transfersIn: [
      {
        player: "Liam O'Brien",
        from: "Shamrock Rovers",
        fee: "EUR 65k (perkiraan Transfermarkt)",
        date: NEEDS_VERIFICATION,
        note: "Defensive midfielder. Detail tanggal dan nilai akhir perlu diverifikasi."
      },
      {
        player: "Mark Higgins",
        from: "Bury",
        fee: "Tidak diketahui (Transfermarkt: ?)",
        date: NEEDS_VERIFICATION,
        note: "Bek tengah. Transfermarkt mencatat biaya sebagai tanda tanya."
      },
      {
        player: "Terry Gibson",
        from: "Coventry City",
        fee: "Tidak diketahui (Transfermarkt: ?)",
        date: NEEDS_VERIFICATION,
        note: "Striker. Data lampiran mencatat 17 main dan 1 gol."
      },
      {
        player: "Tony Gill",
        from: "Manchester United U21",
        fee: "Promosi internal",
        date: NEEDS_VERIFICATION,
        note: "Gelandang bertahan dari jalur internal."
      },
      {
        player: "Dennis Cronin",
        from: "Manchester United Youth",
        fee: "Promosi internal",
        date: NEEDS_VERIFICATION,
        note: "Striker dari sistem muda."
      },
      {
        player: "Russell Beardsmore",
        from: "Manchester United U18",
        fee: "Promosi internal",
        date: NEEDS_VERIFICATION,
        note: "Gelandang dari sistem muda."
      },
      {
        player: "Andy Comyn",
        from: "Manchester United U18",
        fee: "Promosi internal",
        date: NEEDS_VERIFICATION,
        note: "Bek tengah dari sistem muda."
      }
    ],
    transfersOut: [
      {
        player: "Mark Hughes",
        to: "Barcelona",
        fee: "EUR 3 juta (perkiraan Transfermarkt)",
        date: "1986",
        note: "Transfer besar. Hughes kemudian kembali ke United dan menjadi bagian penting dari kebangkitan era Ferguson."
      },
      {
        player: "Peter Barnes",
        to: "Manchester City",
        fee: "EUR 40k (Transfermarkt)",
        date: NEEDS_VERIFICATION,
        note: "Dijual menurut data lampiran; detail biaya dan tanggal perlu diverifikasi."
      },
      {
        player: "Fraser Digby",
        to: "Swindon Town",
        fee: "EUR 40k (Transfermarkt)",
        date: NEEDS_VERIFICATION,
        note: "Dijual menurut data lampiran."
      },
      {
        player: "Mark Higgins",
        to: "Bury",
        fee: "EUR 11k (Transfermarkt)",
        date: NEEDS_VERIFICATION,
        note: "Tercatat dijual/keluar setelah masuk; status loan juga perlu diverifikasi."
      },
      {
        player: "Martin Russell",
        to: "Birmingham City",
        fee: "Free transfer",
        date: NEEDS_VERIFICATION,
        note: "Free transfer menurut data lampiran."
      },
      {
        player: "John Gidman",
        to: "Manchester City",
        fee: "Tidak diketahui (Transfermarkt: ?)",
        date: NEEDS_VERIFICATION,
        note: "Keluar menurut data lampiran."
      },
      {
        player: "Mark Dempsey",
        to: "Sheffield United",
        fee: "Tidak diketahui (Transfermarkt: ?)",
        date: NEEDS_VERIFICATION,
        note: "Keluar menurut data lampiran."
      },
      {
        player: "Alan McLoughlin",
        to: "Swindon Town",
        fee: "Tidak diketahui (Transfermarkt: ?)",
        date: NEEDS_VERIFICATION,
        note: "Keluar menurut data lampiran."
      },
      {
        player: "Mark Todd",
        to: "Sheffield United",
        fee: "Tidak diketahui (Transfermarkt: ?)",
        date: NEEDS_VERIFICATION,
        note: "Keluar menurut data lampiran."
      }
    ],
    commonStartingXI: {
      formation: "4-4-2 (perkiraan dari pemain dengan starter liga terbanyak)",
      players: {
        GK: "Chris Turner",
        RB: "Mick Duxbury",
        CB1: "Paul McGrath",
        CB2: "Kevin Moran",
        LB: "Colin Gibson",
        RM: "Gordon Strachan",
        CM1: "Bryan Robson",
        CM2: "Remi Moses",
        LM: "Jesper Olsen",
        ST1: "Peter Davenport",
        ST2: "Norman Whiteside"
      }
    },
    keyPlayers: [
      {
        name: "Bryan Robson",
        position: "Kapten, gelandang",
        contribution: "33 main, 7 gol semua kompetisi",
        story:
          "Bryan Robson adalah kapten dan simbol tim. Ia tetap penting pada musim ini meski kariernya sering terganggu cedera. Kepemimpinannya menjadi salah satu fondasi awal bagi standar baru yang dibawa Ferguson."
      },
      {
        name: "Paul McGrath",
        position: "Bek",
        contribution: "40 main, 2 gol semua kompetisi",
        story:
          "Paul McGrath adalah bek dengan kemampuan luar biasa: kuat, elegan, dan sangat berbakat. Pada era Ferguson berikutnya, persoalan kebugaran dan gaya hidup membuat hubungannya dengan Ferguson menjadi rumit."
      },
      {
        name: "Norman Whiteside",
        position: "Gelandang/penyerang",
        contribution: "31 main, 8 gol semua kompetisi",
        story:
          "Norman Whiteside masih sekitar 21 tahun tetapi sudah menjadi pemain besar. Ia bisa bermain sebagai penyerang atau gelandang menyerang. Cedera lutut kemudian sangat memengaruhi kariernya."
      },
      {
        name: "Peter Davenport",
        position: "Striker",
        contribution: "45 main, 16 gol semua kompetisi",
        story:
          "Peter Davenport menjadi top scorer United musim itu. MUFCInfo mencatat 45 main dan 16 gol semua kompetisi, sementara data liga BDFutbol mencatat 39 main dan 14 gol. Ia produktif, tetapi bukan profil striker dominan yang kemudian dicari Ferguson untuk membangun tim juara."
      }
    ],
    statistics: {
      leaguePosition: "11th First Division",
      matches: 42,
      wins: 14,
      draws: 14,
      losses: 14,
      goalsFor: 52,
      goalsAgainst: 45,
      topScorer: "Peter Davenport (16 gol semua kompetisi / 14 gol liga)",
      mostAppearances: "Peter Davenport (45 main semua kompetisi)"
    },
    importantMoments: [
      {
        month: "Awal musim 1986",
        title: "Start buruk di bawah Ron Atkinson",
        description:
          "United memulai musim dengan hasil yang mengecewakan. Kondisi ini mendorong klub mengambil keputusan besar di kursi manajer.",
        impact:
          "Membuka jalan bagi perubahan arah klub dan kedatangan Sir Alex Ferguson."
      },
      {
        month: "6 November 1986",
        title: "Sir Alex Ferguson ditunjuk sebagai manajer",
        description:
          "Ferguson datang dari Aberdeen untuk menggantikan Ron Atkinson. Ia masuk ke klub yang sedang tidak stabil, bukan ke tim yang sudah siap juara.",
        impact:
          "Menjadi bab pertama dari era paling berpengaruh dalam sejarah modern Manchester United."
      },
      {
        month: "Sisa musim 1986/87",
        title: "Perbaikan bertahap, belum instan",
        description:
          "Ferguson mencatat 12 menang, 10 seri, dan 9 kalah dari 31 pertandingan semua kompetisi menurut data lampiran.",
        impact:
          "United mulai lebih stabil, tetapi pekerjaan besar soal disiplin, kebugaran, konsistensi, dan regenerasi masih menunggu."
      },
      {
        month: "Rekor kandang/tandang",
        title: "Old Trafford kuat, laga tandang rapuh",
        description:
          "Rekor liga kandang 13-3-5 kontras dengan rekor tandang 1-11-9. Satu-satunya kemenangan tandang liga disebut terjadi melawan Liverpool di Anfield.",
        impact:
          "Menunjukkan masalah mental dan konsistensi yang perlu diubah Ferguson."
      }
    ],
    additionalInfo: [
      "Musim ini bukan penting karena trofi, tetapi karena menjadi awal pembangunan ulang Manchester United modern.",
      "Ferguson tidak langsung belanja besar pada musim pertamanya. Ia lebih dulu mengevaluasi skuad, standar latihan, budaya ruang ganti, dan sistem pemain muda.",
      "Catatan semua kompetisi: 48 pertandingan, 17 menang, 15 seri, 16 kalah, gol 61:52. Di liga: 42 pertandingan, 14 menang, 14 seri, 14 kalah, gol 52:45.",
      "Hasil kompetisi: First Division posisi 11, FA Cup ronde ke-4, dan League Cup ronde ke-3.",
      "United finis ke-11, jauh dari gambaran klub juara. Ini memperlihatkan besarnya pekerjaan yang diwarisi Ferguson.",
      "Skuad berisi pemain besar seperti Robson, McGrath, Whiteside, Strachan, Stapleton, dan Davenport, tetapi belum punya kultur juara modern yang konsisten.",
      "Nomor punggung permanen pra-Premier League modern tidak saya isi karena belum ada sumber yang cukup kuat. Starting XI ditandai sebagai perkiraan dari data starter liga, bukan klaim susunan yang selalu dimainkan bersama."
    ],
    featured: true
  },
  {
    id: "1987-88",
    label: "1987/88",
    title: "Manchester United Musim 1987/88",
    era: "Era awal Sir Alex Ferguson",
    managers: ["Sir Alex Ferguson"],
    competitions: ["First Division", "FA Cup", "League Cup"],
    leaguePosition: "2nd First Division",
    trophies: [],
    summary:
      "Musim penuh pertama Sir Alex Ferguson memperlihatkan peningkatan signifikan, dengan United finis kedua di First Division.",
    story: [
      "Musim 1987/88 menjadi musim penuh pertama Sir Alex Ferguson di Old Trafford. United mulai terlihat lebih kompetitif dan menutup liga di posisi kedua.",
      "Detail statistik skuad, nomor punggung, dan starting XI paling sering digunakan tetap harus diverifikasi sebelum dipakai sebagai data final."
    ],
    squad: [
      {
        name: "Bryan Robson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang",
        age: NEEDS_VERIFICATION,
        country: "England",
        status: "Pemain utama"
      },
      {
        name: "Brian McClair",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Penyerang",
        age: NEEDS_VERIFICATION,
        country: "Scotland",
        status: "Pemain utama"
      }
    ],
    transfersIn: [],
    transfersOut: [],
    commonStartingXI: emptyStartingXI,
    keyPlayers: [],
    statistics: {
      leaguePosition: "2nd First Division",
      matches: NEEDS_VERIFICATION,
      wins: NEEDS_VERIFICATION,
      draws: NEEDS_VERIFICATION,
      losses: NEEDS_VERIFICATION,
      goalsFor: NEEDS_VERIFICATION,
      goalsAgainst: NEEDS_VERIFICATION,
      topScorer: NEEDS_VERIFICATION,
      mostAppearances: NEEDS_VERIFICATION
    },
    importantMoments: [
      {
        month: "Musim 1987/88",
        title: "United finis kedua di First Division",
        description:
          "United menunjukkan lompatan performa dibanding musim transisi sebelumnya.",
        impact:
          "Memperkuat keyakinan bahwa proyek pembangunan ulang Ferguson mulai bergerak ke arah yang benar."
      }
    ],
    additionalInfo: ["Data detail musim ini belum menjadi fokus dan perlu diverifikasi."],
    featured: false
  },
  {
    id: "1988-89",
    label: "1988/89",
    title: "Manchester United Musim 1988/89",
    era: "Era awal Sir Alex Ferguson",
    managers: ["Sir Alex Ferguson"],
    competitions: ["First Division", "FA Cup", "League Cup"],
    leaguePosition: "11th First Division",
    trophies: [],
    summary:
      "Musim 1988/89 menjadi pengingat bahwa pembangunan ulang United belum stabil, dengan finis di papan tengah liga.",
    story: [
      "Setelah finis kedua pada 1987/88, Manchester United tidak langsung menjadi penantang gelar yang konsisten. Musim 1988/89 berjalan lebih sulit.",
      "Data detail pemain, transfer, dan statistik musim ini perlu diverifikasi dari sumber historis sebelum diisi penuh."
    ],
    squad: [
      {
        name: "Mark Hughes",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Penyerang",
        age: NEEDS_VERIFICATION,
        country: "Wales",
        status: "Pemain utama"
      },
      {
        name: "Bryan Robson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang",
        age: NEEDS_VERIFICATION,
        country: "England",
        status: "Pemain utama"
      }
    ],
    transfersIn: [],
    transfersOut: [],
    commonStartingXI: emptyStartingXI,
    keyPlayers: [],
    statistics: {
      leaguePosition: "11th First Division",
      matches: NEEDS_VERIFICATION,
      wins: NEEDS_VERIFICATION,
      draws: NEEDS_VERIFICATION,
      losses: NEEDS_VERIFICATION,
      goalsFor: NEEDS_VERIFICATION,
      goalsAgainst: NEEDS_VERIFICATION,
      topScorer: NEEDS_VERIFICATION,
      mostAppearances: NEEDS_VERIFICATION
    },
    importantMoments: [
      {
        month: "Musim 1988/89",
        title: "Performa liga menurun",
        description:
          "United finis di papan tengah setelah musim sebelumnya menjadi runner-up.",
        impact:
          "Menegaskan bahwa pembangunan ulang skuad membutuhkan waktu dan konsistensi."
      }
    ],
    additionalInfo: ["Data detail musim ini belum menjadi fokus dan perlu diverifikasi."],
    featured: false
  }
];

export const eraGroups: EraGroup[] = [
  {
    name: "Era Newton Heath",
    description: "Periode awal klub sebelum menjadi Manchester United.",
    seasonIds: []
  },
  {
    name: "Era Matt Busby",
    description: "Fondasi identitas besar klub, Busby Babes, dan kejayaan Eropa.",
    seasonIds: []
  },
  {
    name: "Era Tommy Docherty",
    description: "Periode pembangunan ulang dan perubahan besar setelah masa Busby.",
    seasonIds: []
  },
  {
    name: "Era Ron Atkinson",
    description: "Era sebelum transisi ke kepemimpinan Sir Alex Ferguson.",
    seasonIds: []
  },
  {
    name: "Era awal Sir Alex Ferguson",
    description:
      "Fase awal pembangunan ulang budaya, skuad, dan standar Manchester United.",
    seasonIds: ["1986-87", "1987-88", "1988-89"]
  },
  {
    name: "Era Premier League awal",
    description: "Fase gelar liga modern pertama dan dominasi domestik awal.",
    seasonIds: []
  },
  {
    name: "Era Treble",
    description: "Puncak era 1990-an dengan musim 1998/99 sebagai ikon utama.",
    seasonIds: []
  },
  {
    name: "Era Ronaldo & Rooney",
    description: "Era transisi menuju skuad juara Eropa 2008.",
    seasonIds: []
  },
  {
    name: "Era pasca Sir Alex Ferguson",
    description: "Masa pencarian identitas baru setelah 2012/13.",
    seasonIds: []
  },
  {
    name: "Era modern",
    description: "Periode kontemporer yang datanya bisa ditambahkan bertahap.",
    seasonIds: []
  }
];

export function getSeasonById(id: string) {
  return seasons.find((season) => season.id === id);
}

export function getFeaturedSeasons() {
  return seasons.filter((season) => season.featured);
}
