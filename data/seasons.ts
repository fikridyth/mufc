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
  assists?: number | VerificationText;
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
  topAssist: string | VerificationText;
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
const NO_PERMANENT_SQUAD_NUMBER = "-";

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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
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
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      }
    ],
    transfersIn: [
      {
        player: "Liam O'Brien",
        from: "Shamrock Rovers",
        fee: "EUR 65k",
        date: NEEDS_VERIFICATION,
        note: "Defensive midfielder. Detail tanggal transfer perlu diverifikasi."
      },
      {
        player: "Mark Higgins",
        from: "Bury",
        fee: "Tidak diketahui",
        date: NEEDS_VERIFICATION,
        note: "Bek tengah. Biaya transfer belum diketahui."
      },
      {
        player: "Terry Gibson",
        from: "Coventry City",
        fee: "Tidak diketahui",
        date: NEEDS_VERIFICATION,
        note: "Striker dengan 20 penampilan dan 1 gol semua kompetisi."
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
        fee: "EUR 3 juta",
        date: "1986",
        note: "Transfer besar. Hughes kemudian kembali ke United dan menjadi bagian penting dari kebangkitan era Ferguson."
      },
      {
        player: "Peter Barnes",
        to: "Manchester City",
        fee: "EUR 40k",
        date: NEEDS_VERIFICATION,
        note: "Dijual ke Manchester City. Detail tanggal transfer perlu diverifikasi."
      },
      {
        player: "Fraser Digby",
        to: "Swindon Town",
        fee: "EUR 40k",
        date: NEEDS_VERIFICATION,
        note: "Dijual ke Swindon Town."
      },
      {
        player: "Mark Higgins",
        to: "Bury",
        fee: "EUR 11k",
        date: NEEDS_VERIFICATION,
        note: "Tercatat dijual/keluar setelah masuk; status loan juga perlu diverifikasi."
      },
      {
        player: "Martin Russell",
        to: "Birmingham City",
        fee: "Free transfer",
        date: NEEDS_VERIFICATION,
        note: "Free transfer."
      },
      {
        player: "John Gidman",
        to: "Manchester City",
        fee: "Tidak diketahui",
        date: NEEDS_VERIFICATION,
        note: "Keluar ke Manchester City."
      },
      {
        player: "Mark Dempsey",
        to: "Sheffield United",
        fee: "Tidak diketahui",
        date: NEEDS_VERIFICATION,
        note: "Keluar ke Sheffield United."
      },
      {
        player: "Alan McLoughlin",
        to: "Swindon Town",
        fee: "Tidak diketahui",
        date: NEEDS_VERIFICATION,
        note: "Keluar ke Swindon Town."
      },
      {
        player: "Mark Todd",
        to: "Sheffield United",
        fee: "Tidak diketahui",
        date: NEEDS_VERIFICATION,
        note: "Keluar ke Sheffield United."
      }
    ],
    commonStartingXI: {
      formation: "4-4-2",
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
          "Peter Davenport menjadi top scorer United musim itu dengan 45 main dan 16 gol semua kompetisi. Di liga, ia mencatat 39 main dan 14 gol. Ia produktif, tetapi bukan profil striker dominan yang kemudian dicari Ferguson untuk membangun tim juara."
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
      topAssist: "-",
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
          "Ferguson mencatat 12 menang, 10 seri, dan 9 kalah dari 31 pertandingan semua kompetisi.",
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
      "Nomor punggung permanen pra-Premier League modern belum digunakan seperti era modern. Starting XI ditandai sebagai perkiraan dari pola starter liga, bukan klaim susunan yang selalu dimainkan bersama."
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
      "Musim penuh pertama Sir Alex Ferguson memperlihatkan lompatan besar: United naik dari posisi 11 ke runner-up First Division, dengan Brian McClair langsung menjadi mesin gol utama.",
    story: [
      "Musim 1987/88 adalah musim penuh pertama Sir Alex Ferguson sebagai manajer Manchester United. Setelah datang di tengah kekacauan 1986/87, Ferguson akhirnya punya pramusim dan satu musim penuh untuk membentuk standar tim.",
      "United finis kedua di First Division, di bawah Liverpool yang sangat dominan. Hasil ini menjadi lompatan besar dari musim sebelumnya yang hanya berakhir di posisi 11.",
      "Transfer Brian McClair menjadi cerita terbesar musim ini. Ia datang dari Celtic dan langsung mencetak 31 gol semua kompetisi, termasuk 24 gol liga.",
      "Viv Anderson menjadi rekrutan senior untuk memperkuat pertahanan, sementara Steve Bruce datang dari Norwich City pada Desember 1987 dan mulai mengambil tempat penting di jantung lini belakang.",
      "United belum siap menjadi juara karena Liverpool terlalu matang dan United terlalu sering seri. Namun musim ini menjadi bukti awal bahwa proyek Ferguson bisa mengangkat klub kembali ke papan atas."
    ],
    squad: [
      {
        name: "Brian McClair",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Second striker",
        age: 24,
        country: "Scotland",
        appearances: 48,
        goals: 31,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Mick Duxbury",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kanan/bek serbaguna",
        age: 28,
        country: "England",
        appearances: 47,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Jesper Olsen",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kiri",
        age: 27,
        country: "Denmark",
        appearances: 44,
        goals: 2,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Gordon Strachan",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang kanan",
        age: 31,
        country: "Scotland",
        appearances: 44,
        goals: 9,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Bryan Robson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kapten, gelandang",
        age: 31,
        country: "England",
        appearances: 43,
        goals: 11,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Peter Davenport",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Striker",
        age: 27,
        country: "England",
        appearances: 40,
        goals: 6,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Viv Anderson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kanan",
        age: 31,
        country: "England",
        appearances: 38,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Colin Gibson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kiri",
        age: 28,
        country: "England",
        appearances: 36,
        goals: 2,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Norman Whiteside",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang/penyerang",
        age: 23,
        country: "Northern Ireland",
        appearances: 35,
        goals: 10,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Chris Turner",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kiper",
        age: 29,
        country: "England",
        appearances: 30,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Clayton Blackmore",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek/gelandang serbaguna",
        age: 23,
        country: "Wales",
        appearances: 28,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Steve Bruce",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek tengah",
        age: 27,
        country: "England",
        appearances: 24,
        goals: 2,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Paul McGrath",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek tengah",
        age: 28,
        country: "Republic of Ireland",
        appearances: 24,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Kevin Moran",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek tengah",
        age: 32,
        country: "Republic of Ireland",
        appearances: 24,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Liam O'Brien",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang",
        age: 23,
        country: "Republic of Ireland",
        appearances: 21,
        goals: 2,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Remi Moses",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang bertahan",
        age: 27,
        country: "England",
        appearances: 20,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Gary Walsh",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kiper",
        age: 20,
        country: "England",
        appearances: 18,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Graeme Hogg",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek tengah",
        age: 24,
        country: "Scotland",
        appearances: 13,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Arthur Albiston",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kiri",
        age: 30,
        country: "Scotland",
        appearances: 11,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Billy Garton",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek tengah",
        age: 23,
        country: "England",
        appearances: 9,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Deiniol Graham",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Penyerang",
        age: 18,
        country: "Wales",
        appearances: 2,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Lee Martin",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek",
        age: 20,
        country: "England",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      }
    ],
    transfersIn: [
      {
        player: "Steve Bruce",
        from: "Norwich City",
        fee: "EUR 1.20m",
        date: "18 Desember 1987",
        note: "Bek tengah yang langsung menjadi fondasi pertahanan Ferguson."
      },
      {
        player: "Brian McClair",
        from: "Celtic",
        fee: "EUR 1.20m",
        date: "Juli 1987",
        note: "Top skor United musim ini dengan 31 gol semua kompetisi."
      },
      {
        player: "Viv Anderson",
        from: "Arsenal",
        fee: "EUR 300k",
        date: "Juli 1987",
        note: "Rekrutan senior pertama Ferguson; memperkuat sisi kanan pertahanan."
      },
      {
        player: "Lee Sharpe",
        from: "Torquay United",
        fee: "EUR 200k",
        date: "Juni 1988",
        note: "Investasi pemain muda yang mulai lebih terlihat pada musim berikutnya."
      },
      {
        player: "Deiniol Graham",
        from: "Manchester United U21",
        fee: "Promosi internal",
        date: NEEDS_VERIFICATION,
        note: "Penyerang muda yang mulai mendapat kesempatan terbatas."
      },
      {
        player: "David Wilson",
        from: "Manchester United U18",
        fee: "Promosi internal",
        date: NEEDS_VERIFICATION,
        note: "Gelandang muda dari jalur akademi."
      },
      {
        player: "Graeme Hogg",
        from: "West Bromwich Albion",
        fee: "End of loan",
        date: "1 Mei 1988",
        note: "Kembali dari masa pinjaman."
      }
    ],
    transfersOut: [
      {
        player: "Frank Stapleton",
        to: "Ajax",
        fee: "Free transfer",
        date: NEEDS_VERIFICATION,
        note: "Striker senior keluar saat Ferguson mulai membentuk ulang lini depan."
      },
      {
        player: "Gary Bailey",
        to: "Kaizer Chiefs",
        fee: "Free transfer",
        date: NEEDS_VERIFICATION,
        note: "Kiper lama United meninggalkan klub."
      },
      {
        player: "Joe Hanrahan",
        to: "Shamrock Rovers",
        fee: "Free transfer",
        date: NEEDS_VERIFICATION,
        note: "Keluar ke Shamrock Rovers."
      },
      {
        player: "John Sivebaek",
        to: "Saint-Etienne",
        fee: "Tidak diketahui",
        date: NEEDS_VERIFICATION,
        note: "Bek kanan Denmark keluar setelah menit bermainnya menurun."
      },
      {
        player: "Terry Gibson",
        to: "Wimbledon",
        fee: "Tidak diketahui",
        date: NEEDS_VERIFICATION,
        note: "Penyerang keluar dan kemudian mencetak gol melawan United di League Cup 1988/89."
      },
      {
        player: "Simon Ratcliffe",
        to: "Norwich City",
        fee: "Tidak diketahui",
        date: NEEDS_VERIFICATION,
        note: "Bek muda pindah ke Norwich City."
      },
      {
        player: "Jesper Olsen",
        to: "Naestved BK",
        fee: "Loan transfer",
        date: NEEDS_VERIFICATION,
        note: "Dipinjamkan ke Denmark sebelum kemudian meninggalkan United."
      },
      {
        player: "Graeme Hogg",
        to: "West Bromwich Albion",
        fee: "Loan transfer",
        date: NEEDS_VERIFICATION,
        note: "Dipinjamkan ke West Bromwich Albion pada bagian musim ini."
      }
    ],
    commonStartingXI: {
      formation: "4-4-2",
      players: {
        GK: "Chris Turner",
        RB: "Viv Anderson",
        CB1: "Steve Bruce",
        CB2: "Paul McGrath",
        LB: "Mick Duxbury",
        RM: "Gordon Strachan",
        CM1: "Bryan Robson",
        CM2: "Norman Whiteside",
        LM: "Jesper Olsen",
        ST1: "Brian McClair",
        ST2: "Peter Davenport"
      }
    },
    keyPlayers: [
      {
        name: "Brian McClair",
        position: "Second striker",
        contribution: "48 main, 31 gol semua kompetisi",
        story:
          "Brian McClair langsung menjadi transfer terbaik Ferguson pada fase awal United. Ia memberi United pencetak gol konsisten dan menjadi pemain pertama sejak George Best yang menembus 20 gol liga untuk United."
      },
      {
        name: "Bryan Robson",
        position: "Kapten, gelandang",
        contribution: "43 main, 11 gol semua kompetisi",
        story:
          "Robson tetap menjadi jiwa tim. Kepemimpinan, energi box-to-box, dan produktivitasnya dari lini tengah menjaga United tetap kompetitif di musim penuh pertama Ferguson."
      },
      {
        name: "Steve Bruce",
        position: "Bek tengah",
        contribution: "24 main, 2 gol semua kompetisi",
        story:
          "Steve Bruce datang pada Desember 1987 dan langsung memberi tanda perubahan besar di lini belakang. Transfer ini menjadi awal dari salah satu pilar pertahanan terpenting era Ferguson."
      },
      {
        name: "Gordon Strachan",
        position: "Gelandang kanan",
        contribution: "44 main, 9 gol semua kompetisi",
        story:
          "Strachan memberi kreativitas dan pengalaman di sisi kanan. Pada musim ketika United mulai kembali ke papan atas, kontribusinya menjadi salah satu sumber kontrol dan variasi serangan."
      }
    ],
    statistics: {
      leaguePosition: "2nd First Division",
      matches: 40,
      wins: 23,
      draws: 12,
      losses: 5,
      goalsFor: 71,
      goalsAgainst: 38,
      topScorer: "Brian McClair (31 gol semua kompetisi / 24 gol liga)",
      topAssist: "-",
      mostAppearances: "Brian McClair (48 main semua kompetisi)"
    },
    importantMoments: [
      {
        month: "Juli 1987",
        title: "Brian McClair dan Viv Anderson datang",
        description:
          "Ferguson mulai membentuk timnya sendiri dengan merekrut penyerang produktif dari Celtic dan bek kanan berpengalaman dari Arsenal.",
        impact:
          "McClair langsung menjadi sumber gol utama, sementara Anderson memberi pengalaman di lini belakang."
      },
      {
        month: "18 Desember 1987",
        title: "Steve Bruce bergabung dari Norwich City",
        description:
          "Bruce datang pada pertengahan musim dan langsung menjadi bagian penting dari pertahanan United.",
        impact:
          "Kedatangannya mulai menggeser hierarki bek senior dan menjadi fondasi untuk era berikutnya."
      },
      {
        month: "4 April 1988",
        title: "Liverpool 3-3 Manchester United di Anfield",
        description:
          "United tertinggal 1-3 saat half-time, lalu bangkit menahan Liverpool 3-3 di Anfield.",
        impact:
          "Hasil ini tidak cukup untuk mengejar Liverpool, tetapi menjadi simbol karakter baru yang mulai dibangun Ferguson."
      },
      {
        month: "Akhir musim 1987/88",
        title: "United finis runner-up First Division",
        description:
          "United mencatat 23 menang, 12 seri, 5 kalah, dengan gol 71:38 dan 81 poin.",
        impact:
          "Lonjakan dari posisi 11 ke posisi 2 memberi bukti awal bahwa proyek Ferguson bergerak ke arah yang benar."
      }
    ],
    additionalInfo: [
      "Liverpool menjadi juara liga dengan hanya dua kekalahan. United finis kedua, 9 poin di belakang Liverpool.",
      "United mencatat rekor semua kompetisi 48 pertandingan, 29 menang, 12 seri, 7 kalah, gol 86:45.",
      "Di liga, United hanya kalah 5 kali, tetapi 12 hasil seri membuat mereka tidak cukup dekat untuk benar-benar menekan Liverpool.",
      "FA Cup berakhir di ronde kelima setelah kalah 1-2 dari Arsenal; Brian McClair mencetak gol tetapi juga gagal penalti penting di akhir laga.",
      "League Cup juga berakhir di ronde kelima setelah kalah 0-2 dari Oxford United.",
      "Norman Whiteside masih berkontribusi 10 gol semua kompetisi, tetapi cedera dan ketidakpastian masa depan mulai menjadi cerita penting.",
      "Nomor punggung permanen pra-Premier League modern belum digunakan seperti era modern. Starting XI ditandai sebagai perkiraan dari pola starter liga dan kontribusi menit bermain, bukan klaim susunan yang selalu dimainkan bersama."
    ],
    featured: false
  },
  {
    id: "1988-89",
    label: "1988/89",
    title: "Manchester United Musim 1988/89",
    era: "Era awal Sir Alex Ferguson",
    managers: ["Sir Alex Ferguson"],
    competitions: [
      "First Division",
      "FA Cup",
      "League Cup",
      "Football League Centenary Trophy"
    ],
    leaguePosition: "11th First Division",
    trophies: [],
    summary:
      "Musim 1988/89 menjadi langkah mundur setelah runner-up 1987/88: United finis ke-11 meski Mark Hughes kembali, Jim Leighton datang, dan Ferguson mulai membersihkan skuad lama.",
    story: [
      "Setelah finis kedua pada 1987/88, ekspektasi terhadap Manchester United naik. Fans berharap tim Ferguson bisa makin dekat dengan Liverpool, tetapi musim 1988/89 justru berakhir mengecewakan.",
      "Ferguson melakukan beberapa transfer besar. Mark Hughes kembali dari Barcelona, Jim Leighton datang dari Aberdeen, Lee Sharpe dibeli sebagai investasi masa depan, lalu Mal Donaghy, Ralph Milne, dan Giuliano Maiorana menyusul di tengah musim.",
      "Secara teori skuad terlihat lebih kuat, tetapi United terlalu sering kehilangan poin. Mereka mengalami rentetan panjang tanpa kemenangan di liga pada awal musim dan terlalu banyak bermain imbang.",
      "Hughes sukses secara individu. Ia mencetak 16 gol semua kompetisi, sejajar dengan Brian McClair sebagai top skor United musim itu, dan terpilih sebagai PFA Player of the Year.",
      "Musim ini memperlihatkan bahwa proyek Ferguson masih jauh dari selesai. Banyak pemain lama mulai keluar, beberapa rekrutan belum langsung berhasil, dan United masih mencari bentuk tim yang stabil."
    ],
    squad: [
      {
        name: "Steve Bruce",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek tengah",
        age: 28,
        country: "England",
        appearances: 48,
        goals: 4,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Mark Hughes",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Second striker",
        age: 24,
        country: "Wales",
        appearances: 48,
        goals: 16,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Jim Leighton",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kiper",
        age: 30,
        country: "Scotland",
        appearances: 48,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Brian McClair",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Penyerang",
        age: 25,
        country: "Scotland",
        appearances: 48,
        goals: 16,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Bryan Robson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kapten, gelandang",
        age: 31,
        country: "England",
        appearances: 43,
        goals: 8,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Clayton Blackmore",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek/gelandang serbaguna",
        age: 24,
        country: "Wales",
        appearances: 37,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Mal Donaghy",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kiri/bek tengah",
        age: 31,
        country: "Northern Ireland",
        appearances: 37,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Russell Beardsmore",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang serang",
        age: 19,
        country: "England",
        appearances: 30,
        goals: 2,
        assists: 2,
        status: "Pemain muda"
      },
      {
        name: "Lee Sharpe",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kiri/bek kiri",
        age: 17,
        country: "England",
        appearances: 30,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Lee Martin",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kiri/bek kanan",
        age: 20,
        country: "England",
        appearances: 29,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Gordon Strachan",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang kanan",
        age: 32,
        country: "Scotland",
        appearances: 29,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Ralph Milne",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kiri",
        age: 27,
        country: "Scotland",
        appearances: 29,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Paul McGrath",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek tengah",
        age: 29,
        country: "Republic of Ireland",
        appearances: 26,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Mick Duxbury",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kanan/bek serbaguna",
        age: 29,
        country: "England",
        appearances: 21,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Billy Garton",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek tengah",
        age: 24,
        country: "England",
        appearances: 16,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Tony Gill",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang",
        age: 22,
        country: "England",
        appearances: 13,
        goals: 2,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Jesper Olsen",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kiri",
        age: 27,
        country: "Denmark",
        appearances: 12,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Mark Robins",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Penyerang",
        age: 18,
        country: "England",
        appearances: 12,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Peter Davenport",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Striker",
        age: 27,
        country: "England",
        appearances: 10,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Viv Anderson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kanan",
        age: 32,
        country: "England",
        appearances: 7,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "David Wilson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang",
        age: 19,
        country: "England",
        appearances: 6,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Giuliano Maiorana",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kiri",
        age: 19,
        country: "England",
        appearances: 6,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Norman Whiteside",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang/penyerang",
        age: 23,
        country: "Northern Ireland",
        appearances: 6,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Liam O'Brien",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang bertahan",
        age: 24,
        country: "Republic of Ireland",
        appearances: 4,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Colin Gibson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kiri",
        age: 28,
        country: "England",
        appearances: 3,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Deiniol Graham",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Penyerang",
        age: 19,
        country: "Wales",
        appearances: 1,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Derek Brazil",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kanan",
        age: 19,
        country: "Republic of Ireland",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      }
    ],
    transfersIn: [
      {
        player: "Mark Hughes",
        from: "Barcelona",
        fee: "EUR 2m",
        date: "23 Juni 1988",
        note: "Kembali ke Old Trafford sebagai pembelian terbesar United musim ini dan langsung menjadi PFA Player of the Year."
      },
      {
        player: "Mal Donaghy",
        from: "Luton Town",
        fee: "EUR 750k",
        date: "27 Oktober 1988",
        note: "Bek berpengalaman yang langsung menjadi bagian penting rotasi pertahanan."
      },
      {
        player: "Lee Sharpe",
        from: "Torquay United",
        fee: "EUR 275k",
        date: "1 Juni 1988",
        note: "Pemain muda yang cepat masuk rotasi senior sebagai winger kiri dan bek kiri."
      },
      {
        player: "Jim Leighton",
        from: "Aberdeen",
        fee: "EUR 750k",
        date: "14 Mei 1988",
        note: "Kiper pilihan Ferguson dari Aberdeen; memainkan seluruh 48 laga United musim ini."
      },
      {
        player: "Ralph Milne",
        from: "Bristol City",
        fee: "Tidak diketahui",
        date: "11 November 1988",
        note: "Winger Skotlandia yang didatangkan di tengah musim, tetapi tidak pernah benar-benar menjadi solusi jangka panjang."
      },
      {
        player: "Giuliano Maiorana",
        from: "Histon",
        fee: "Tidak diketahui",
        date: "30 November 1988",
        note: "Winger non-liga yang sempat memberi kesan kuat dalam kesempatan terbatas."
      },
      {
        player: "Mark Robins",
        from: "Manchester United U18",
        fee: "Promosi internal",
        date: NEEDS_VERIFICATION,
        note: "Striker akademi yang mulai masuk skuad utama."
      },
      {
        player: "Shaun Goater",
        from: "Manchester United U18",
        fee: "Promosi internal",
        date: NEEDS_VERIFICATION,
        note: "Penyerang muda yang tercatat naik dari tim muda, tetapi belum tampil di tim utama musim ini."
      },
      {
        player: "Derek Brazil",
        from: "Manchester United U21",
        fee: "Promosi internal",
        date: NEEDS_VERIFICATION,
        note: "Bek kanan muda yang mendapat satu penampilan senior."
      }
    ],
    transfersOut: [
      {
        player: "Peter Davenport",
        to: "Middlesbrough",
        fee: "EUR 939k",
        date: "31 Oktober 1988",
        note: "Keluar setelah kedatangan Mark Hughes mengubah komposisi lini depan."
      },
      {
        player: "Jesper Olsen",
        to: "Bordeaux",
        fee: "EUR 500k",
        date: "18 November 1988",
        note: "Winger Denmark meninggalkan klub setelah perannya mengecil."
      },
      {
        player: "Liam O'Brien",
        to: "Newcastle United",
        fee: "EUR 300k",
        date: "10 November 1988",
        note: "Gelandang Republik Irlandia pindah setelah kesempatan bermain terbatas."
      },
      {
        player: "Graeme Hogg",
        to: "Portsmouth",
        fee: "EUR 210k",
        date: "10 Agustus 1988",
        note: "Bek tengah keluar sebelum skuad Ferguson mulai berubah lebih jauh."
      },
      {
        player: "Chris Turner",
        to: "Sheffield Wednesday",
        fee: "EUR 208k",
        date: "12 September 1988",
        note: "Posisi kiper berubah setelah Jim Leighton datang sebagai pilihan utama."
      },
      {
        player: "Gordon Strachan",
        to: "Leeds United",
        fee: "EUR 200k",
        date: "Maret 1989",
        note: "Gelandang senior pergi sebelum akhir musim dan kemudian membantu Leeds bangkit."
      },
      {
        player: "Arthur Albiston",
        to: "West Bromwich Albion",
        fee: "Tidak diketahui",
        date: "Agustus 1988",
        note: "Bek kiri senior meninggalkan klub setelah era panjang bersama United."
      },
      {
        player: "Kevin Moran",
        to: "Sporting Gijon",
        fee: "Tidak diketahui",
        date: "Juni 1988",
        note: "Bek tengah berpengalaman pindah ke Spanyol."
      },
      {
        player: "Andy Comyn",
        to: "Alvechurch",
        fee: "Tidak diketahui",
        date: NEEDS_VERIFICATION,
        note: "Bek muda keluar tanpa mencatat tempat reguler di tim utama."
      },
      {
        player: "Nicky Wood",
        to: "Retired",
        fee: "-",
        date: NEEDS_VERIFICATION,
        note: "Keluar dari daftar skuad senior."
      },
      {
        player: "Tony Gill",
        to: "Career break",
        fee: "-",
        date: NEEDS_VERIFICATION,
        note: "Cedera patah pergelangan kaki menghentikan perkembangan kariernya."
      }
    ],
    commonStartingXI: {
      formation:
        "4-4-2",
      players: {
        GK: "Jim Leighton",
        RB: "Clayton Blackmore",
        CB1: "Steve Bruce",
        CB2: "Mal Donaghy",
        LB: "Lee Martin",
        RM: "Gordon Strachan",
        CM1: "Bryan Robson",
        CM2: "Russell Beardsmore",
        LM: "Lee Sharpe",
        ST1: "Mark Hughes",
        ST2: "Brian McClair"
      }
    },
    keyPlayers: [
      {
        name: "Mark Hughes",
        position: "Second striker",
        contribution: "48 main, 16 gol; PFA Player of the Year",
        story:
          "Kembali dari Barcelona sebagai transfer besar dan langsung menjadi wajah paling kuat dari musim ini."
      },
      {
        name: "Brian McClair",
        position: "Penyerang",
        contribution: "48 main, 16 gol",
        story:
          "Tetap produktif setelah musim debut 31 gol, kali ini membentuk duet utama bersama Hughes."
      },
      {
        name: "Jim Leighton",
        position: "Kiper",
        contribution: "48 main, 35 kebobolan liga, 15 clean sheet liga",
        story:
          "Menjadi kiper utama baru Ferguson dan memainkan setiap laga semua kompetisi."
      },
      {
        name: "Russell Beardsmore",
        position: "Gelandang serang",
        contribution: "30 main, 2 gol, 2 assist tercatat",
        story:
          "Nama muda yang meledak di laga Tahun Baru melawan Liverpool dengan satu gol dan dua assist."
      }
    ],
    statistics: {
      leaguePosition: "11th First Division",
      matches: 48,
      wins: 18,
      draws: 15,
      losses: 15,
      goalsFor: 63,
      goalsAgainst: 41,
      topScorer: "Mark Hughes & Brian McClair (16 gol semua kompetisi)",
      topAssist:
        "Russell Beardsmore (2 assist vs Liverpool; data musim penuh belum tersedia)",
      mostAppearances: "Steve Bruce, Mark Hughes, Jim Leighton, Brian McClair (48 main)"
    },
    importantMoments: [
      {
        month: "23 Juni 1988",
        title: "Mark Hughes kembali ke United",
        description:
          "United membawa pulang Hughes dari Barcelona setelah masa singkatnya di luar Inggris.",
        impact:
          "Ia langsung menjadi pemain terbaik United musim ini dan top skor bersama Brian McClair."
      },
      {
        month: "September-November 1988",
        title: "Rentetan tanpa kemenangan di liga",
        description:
          "United kehilangan momentum setelah start yang tidak stabil dan terlalu sering bermain imbang.",
        impact:
          "Periode ini merusak ambisi papan atas dan membuat musim berubah menjadi perjuangan konsistensi."
      },
      {
        month: "1 Januari 1989",
        title: "Manchester United 3-1 Liverpool",
        description:
          "Russell Beardsmore mencetak satu gol dan membuat dua assist dalam kemenangan Tahun Baru atas Liverpool.",
        impact:
          "Kemenangan ini menjadi salah satu titik terang terbesar musim 1988/89."
      },
      {
        month: "18 Maret 1989",
        title: "FA Cup terhenti di perempat final",
        description:
          "United kalah 0-1 dari Nottingham Forest di Old Trafford.",
        impact:
          "Peluang terakhir meraih trofi domestik musim itu hilang."
      },
      {
        month: "Akhir musim 1988/89",
        title: "Finis ke-11 First Division",
        description:
          "United menutup musim liga dengan 13 menang, 12 seri, 13 kalah dan 51 poin.",
        impact:
          "Hasil ini menegaskan bahwa rebuild Ferguson masih membutuhkan perubahan skuad lebih besar."
      }
    ],
    additionalInfo: [
      "United tidak bermain di UEFA Cup meski finis kedua pada 1987/88 karena larangan klub Inggris di kompetisi Eropa setelah Heysel.",
      "Rekor semua kompetisi United musim ini: 48 pertandingan, 18 menang, 15 seri, 15 kalah, gol 63:41.",
      "Rekor liga United: 38 pertandingan, 13 menang, 12 seri, 13 kalah, gol 45:35, 51 poin.",
      "Mark Hughes menjadi PFA Player of the Year 1988/89.",
      "United menjadi runner-up Football League Centenary Trophy setelah kalah 1-2 dari Arsenal di final.",
      "Lee Sharpe mulai terlihat sebagai pemain muda penting, tampil 30 kali di musim pertamanya bersama tim utama.",
      "Giuliano Maiorana datang dari Histon dan tampil enam kali; performa awalnya menjanjikan, tetapi karier United-nya tidak berkembang panjang.",
      "Norman Whiteside hanya tampil enam kali karena masalah cedera; musim berikutnya ia meninggalkan klub.",
      "Ralph Milne sering dikenang sebagai salah satu transfer paling mengecewakan pada awal era Ferguson.",
      "Data assist musim penuh era ini tidak tersedia lengkap di sumber utama; assist yang dicantumkan hanya data spesifik yang dapat dikaitkan dengan laga Liverpool 1 Januari 1989."
    ],
    featured: false
  },
  {
    id: "1989-90",
    label: "1989/90",
    title: "Manchester United Musim 1989/90",
    era: "Era awal Sir Alex Ferguson",
    managers: ["Sir Alex Ferguson"],
    competitions: ["First Division", "FA Cup", "League Cup"],
    leaguePosition: "13th First Division",
    trophies: ["FA Cup"],
    summary:
      "Musim 1989/90 buruk di liga tetapi sangat penting secara sejarah: United finis ke-13, namun FA Cup 1990 menjadi trofi pertama Sir Alex Ferguson di Old Trafford.",
    story: [
      "Musim 1989/90 adalah musim paradoks. Manchester United memulai liga dengan kemenangan 4-1 atas Arsenal, tetapi performa liga kemudian runtuh dan tekanan terhadap Alex Ferguson membesar.",
      "Ferguson semakin agresif membongkar skuad. Paul McGrath dan Norman Whiteside pergi, sementara Mike Phelan, Neil Webb, Gary Pallister, Paul Ince, Danny Wallace, dan beberapa pemain lain datang untuk membentuk generasi baru.",
      "Adaptasi tidak mulus. United kalah 1-5 dari Manchester City, tersingkir cepat dari League Cup, dan pada akhir Desember 1989 berada dekat zona degradasi.",
      "FA Cup menjadi penyelamat musim. Gol Mark Robins melawan Nottingham Forest di ronde ketiga membuka jalan ke Wembley, lalu United melewati Hereford, Newcastle, Sheffield United, Oldham Athletic, dan Crystal Palace.",
      "Final pertama melawan Crystal Palace berakhir 3-3. Ferguson kemudian membuat keputusan besar dengan mencadangkan Jim Leighton dan memainkan Les Sealey di replay. United menang 1-0 lewat gol Lee Martin dari umpan Neil Webb.",
      "Trofi FA Cup ini memberi Ferguson legitimasi dan waktu. Secara liga musim ini mengecewakan, tetapi secara sejarah ia menjadi titik balik sebelum United mulai bergerak menuju dominasi 1990-an."
    ],
    squad: [
      {
        name: "Mark Hughes",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Second striker",
        age: 25,
        country: "Wales",
        appearances: 48,
        goals: 15,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Brian McClair",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Penyerang/gelandang",
        age: 25,
        country: "Scotland",
        appearances: 48,
        goals: 8,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Mike Phelan",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang/bek kanan",
        age: 26,
        country: "England",
        appearances: 48,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Gary Pallister",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek tengah",
        age: 24,
        country: "England",
        appearances: 46,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Jim Leighton",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kiper",
        age: 31,
        country: "Scotland",
        appearances: 45,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Steve Bruce",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek tengah",
        age: 28,
        country: "England",
        appearances: 43,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Lee Martin",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kiri",
        age: 21,
        country: "England",
        appearances: 41,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Paul Ince",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang tengah",
        age: 21,
        country: "England",
        appearances: 36,
        goals: 2,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Danny Wallace",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kiri/penyerang",
        age: 25,
        country: "England",
        appearances: 35,
        goals: 6,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Clayton Blackmore",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek/gelandang serbaguna",
        age: 24,
        country: "Wales",
        appearances: 31,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Bryan Robson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kapten, gelandang",
        age: 32,
        country: "England",
        appearances: 27,
        goals: 4,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Mick Duxbury",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kanan/bek serbaguna",
        age: 29,
        country: "England",
        appearances: 25,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Russell Beardsmore",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang serang",
        age: 20,
        country: "England",
        appearances: 25,
        goals: 2,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Mark Robins",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Penyerang",
        age: 19,
        country: "England",
        appearances: 23,
        goals: 10,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Viv Anderson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kanan",
        age: 33,
        country: "England",
        appearances: 21,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Lee Sharpe",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kiri/bek kiri",
        age: 18,
        country: "England",
        appearances: 20,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Mal Donaghy",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kiri/bek tengah",
        age: 31,
        country: "Northern Ireland",
        appearances: 18,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Neil Webb",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang",
        age: 25,
        country: "England",
        appearances: 15,
        goals: 3,
        assists: 1,
        status: "Pemain utama"
      },
      {
        name: "Colin Gibson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kiri",
        age: 29,
        country: "England",
        appearances: 8,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Les Sealey",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kiper",
        age: 31,
        country: "England",
        appearances: 3,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Giuliano Maiorana",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger/penyerang",
        age: 20,
        country: "England",
        appearances: 2,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Mark Bosnich",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kiper",
        age: 17,
        country: "Australia",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Derek Brazil",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kanan",
        age: 20,
        country: "Republic of Ireland",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Deiniol Graham",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang/penyerang",
        age: 19,
        country: "Wales",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Ralph Milne",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kiri",
        age: 28,
        country: "Scotland",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      }
    ],
    transfersIn: [
      {
        player: "Gary Pallister",
        from: "Middlesbrough",
        fee: "EUR 2.6m",
        date: "28 Agustus 1989",
        note: "Bek tengah mahal yang menjadi fondasi awal duet Bruce-Pallister."
      },
      {
        player: "Neil Webb",
        from: "Nottingham Forest",
        fee: "EUR 1.7m",
        date: "1 Juli 1989",
        note: "Gelandang besar yang mencetak gol pada debut liga, tetapi cedera membuat musimnya terganggu."
      },
      {
        player: "Paul Ince",
        from: "West Ham United",
        fee: "EUR 1.5m",
        date: "13 September 1989",
        note: "Gelandang muda agresif yang kemudian menjadi bagian penting United awal 1990-an."
      },
      {
        player: "Danny Wallace",
        from: "Southampton",
        fee: "EUR 1.45m",
        date: "18 September 1989",
        note: "Didatangkan untuk memberi kecepatan di sisi kiri dan lini depan."
      },
      {
        player: "Mike Phelan",
        from: "Norwich City",
        fee: "EUR 875k",
        date: "1 Juli 1989",
        note: "Pemain serbaguna yang langsung menjadi salah satu pemain paling sering tampil."
      },
      {
        player: "Denis Irwin",
        from: "Oldham Athletic",
        fee: "EUR 700k",
        date: "8 Juni 1990",
        note: "Datang setelah final FA Cup dan menjadi rekrutan penting untuk musim berikutnya."
      },
      {
        player: "Brian Carey",
        from: "Cork City",
        fee: "EUR 117k",
        date: "24 Agustus 1989",
        note: "Bek muda Republik Irlandia untuk memperdalam opsi pertahanan."
      },
      {
        player: "Andy Rammell",
        from: "Atherstone United",
        fee: "EUR 48k",
        date: "21 September 1989",
        note: "Penyerang dari non-liga yang direkrut sebagai prospek."
      },
      {
        player: "Neil Whitworth",
        from: "Wigan Athletic",
        fee: "EUR 45k",
        date: "8 Juni 1990",
        note: "Datang setelah musim selesai sebagai tambahan kedalaman skuad."
      },
      {
        player: "Mark Bosnich",
        from: "Sydney United",
        fee: "Free transfer",
        date: NEEDS_VERIFICATION,
        note: "Kiper muda Australia yang mendapat satu penampilan senior."
      },
      {
        player: "Les Sealey",
        from: "Luton Town",
        fee: "Loan transfer",
        date: "Desember 1989",
        note: "Datang sebagai pinjaman dan menjadi kiper penentu di final replay FA Cup."
      },
      {
        player: "Mark Crossley",
        from: "Nottingham Forest",
        fee: "Loan transfer",
        date: "Januari 1990",
        note: "Kiper pinjaman jangka pendek di tengah kebutuhan kedalaman posisi penjaga gawang."
      }
    ],
    transfersOut: [
      {
        player: "Norman Whiteside",
        to: "Everton",
        fee: "EUR 750k",
        date: "Agustus 1989",
        note: "Kepergian emosional salah satu wonderkid besar United yang kariernya terganggu cedera."
      },
      {
        player: "Paul McGrath",
        to: "Aston Villa",
        fee: "EUR 450k",
        date: "3 Agustus 1989",
        note: "Bek sangat berbakat yang kemudian bersinar di Aston Villa."
      },
      {
        player: "Shaun Goater",
        to: "Rotherham United",
        fee: "EUR 45k",
        date: "25 Oktober 1989",
        note: "Penyerang muda pindah untuk mencari jalur bermain reguler."
      },
      {
        player: "Wayne Heseltine",
        to: "Oldham Athletic",
        fee: "EUR 40k",
        date: "Juli 1989",
        note: "Bek muda keluar sebelum menjadi bagian skuad utama."
      },
      {
        player: "Nicky Spooner",
        to: "Bolton Wanderers",
        fee: "Tidak diketahui",
        date: "12 Juli 1989",
        note: "Bek muda keluar dengan biaya yang tidak dipublikasikan."
      },
      {
        player: "Mal Donaghy",
        to: "Luton Town",
        fee: "Loan transfer",
        date: "Desember 1989",
        note: "Dipinjamkan singkat lalu kembali pada Januari 1990."
      },
      {
        player: "Ralph Milne",
        to: "West Ham United",
        fee: "Loan transfer",
        date: "Januari 1990",
        note: "Dipinjamkan setelah tersingkir dari persaingan di sisi kiri."
      },
      {
        player: "Remi Moses",
        to: "Retired",
        fee: "-",
        date: NEEDS_VERIFICATION,
        note: "Pensiun karena masalah cedera."
      }
    ],
    commonStartingXI: {
      formation:
        "4-4-2",
      players: {
        GK: "Jim Leighton",
        RB: "Mike Phelan",
        CB1: "Steve Bruce",
        CB2: "Gary Pallister",
        LB: "Lee Martin",
        RM: "Clayton Blackmore",
        CM1: "Paul Ince",
        CM2: "Bryan Robson",
        LM: "Danny Wallace",
        ST1: "Mark Hughes",
        ST2: "Brian McClair"
      }
    },
    keyPlayers: [
      {
        name: "Mark Hughes",
        position: "Second striker",
        contribution: "48 main, 15 gol; top skor klub",
        story:
          "Tetap menjadi sumber gol utama United dan mencetak dua gol penting di final FA Cup pertama."
      },
      {
        name: "Mark Robins",
        position: "Penyerang",
        contribution: "23 main, 10 gol; gol penting vs Nottingham Forest dan Oldham",
        story:
          "Bukan starter reguler, tetapi gol-golnya di FA Cup membuatnya punya tempat khusus dalam sejarah Ferguson."
      },
      {
        name: "Lee Martin",
        position: "Bek kiri",
        contribution: "41 main, gol kemenangan final replay FA Cup",
        story:
          "Menjadi bek kiri reguler dan mencetak gol yang memberi Ferguson trofi pertamanya di United."
      },
      {
        name: "Les Sealey",
        position: "Kiper",
        contribution: "3 main; clean sheet final replay FA Cup",
        story:
          "Hanya tampil sedikit, tetapi dipilih menggantikan Jim Leighton di replay dan tampil menentukan."
      },
      {
        name: "Gary Pallister",
        position: "Bek tengah",
        contribution: "46 main, 3 gol",
        story:
          "Datang sebagai transfer besar dan mulai membentuk fondasi duet pertahanan dengan Steve Bruce."
      },
      {
        name: "Mike Phelan",
        position: "Gelandang/bek kanan",
        contribution: "48 main, 1 gol",
        story:
          "Pemain serbaguna paling konsisten di musim penuh perubahan besar."
      }
    ],
    statistics: {
      leaguePosition: "13th First Division",
      matches: 49,
      wins: 20,
      draws: 12,
      losses: 17,
      goalsFor: 64,
      goalsAgainst: 61,
      topScorer: "Mark Hughes (15 gol semua kompetisi / 13 gol liga)",
      topAssist:
        "Neil Webb (assist final replay FA Cup; data musim penuh belum tersedia)",
      mostAppearances: "Mark Hughes, Brian McClair, Mike Phelan (48 main)"
    },
    importantMoments: [
      {
        month: "19 Agustus 1989",
        title: "United 4-1 Arsenal",
        description:
          "United membuka liga dengan kemenangan besar atas Arsenal di Old Trafford.",
        impact:
          "Awal ini memberi harapan besar, tetapi performa liga tidak bertahan lama."
      },
      {
        month: "23 September 1989",
        title: "Manchester City 5-1 Manchester United",
        description:
          "Derby Manchester di Maine Road berakhir sangat buruk untuk United.",
        impact:
          "Kekalahan ini memperbesar tekanan kepada Ferguson dan menjadi simbol rapuhnya liga United musim itu."
      },
      {
        month: "7 Januari 1990",
        title: "Gol Mark Robins di Nottingham Forest",
        description:
          "Robins mencetak gol tunggal dalam kemenangan 1-0 pada ronde ketiga FA Cup.",
        impact:
          "Gol ini membuka jalan menuju trofi FA Cup dan sering dikenang sebagai momen yang menyelamatkan proyek Ferguson."
      },
      {
        month: "11 April 1990",
        title: "Robins menentukan semifinal replay",
        description:
          "United mengalahkan Oldham Athletic 2-1 setelah replay, dengan Robins kembali mencetak gol penting.",
        impact:
          "United memastikan tempat di final FA Cup pertama Ferguson."
      },
      {
        month: "17 Mei 1990",
        title: "Lee Martin memenangkan FA Cup replay",
        description:
          "United mengalahkan Crystal Palace 1-0 di Wembley lewat gol Lee Martin dari umpan Neil Webb.",
        impact:
          "FA Cup 1990 menjadi trofi pertama Ferguson sebagai manajer Manchester United."
      }
    ],
    additionalInfo: [
      "Rekor semua kompetisi United musim ini: 49 pertandingan, 20 menang, 12 seri, 17 kalah, gol 64:61.",
      "Rekor liga United: 38 pertandingan, 13 menang, 9 seri, 16 kalah, gol 46:47, 48 poin.",
      "United finis ke-13, posisi liga terendah mereka sejak era degradasi 1970-an.",
      "League Cup berakhir di ronde ketiga setelah kalah 0-3 dari Tottenham Hotspur di Old Trafford.",
      "Final FA Cup pertama melawan Crystal Palace berakhir 3-3 setelah extra time; replay dimenangkan United 1-0.",
      "Ferguson mencadangkan Jim Leighton untuk final replay dan memainkan Les Sealey, keputusan manajerial besar yang terbukti berhasil.",
      "Michael Knighton sempat hampir membeli Manchester United pada 1989 sebelum rencana takeover batal dan ia masuk board sebagai non-executive director.",
      "Neil Webb mencetak gol pada debut liga melawan Arsenal, tetapi cedera saat membela Inggris membatasi dampaknya di United.",
      "Mark Robins mencetak 10 gol dari 23 penampilan dan menjadi pahlawan cup run meski bukan starter utama.",
      "Data assist musim penuh era ini tidak tersedia lengkap di sumber utama; assist yang dicantumkan hanya momen yang bisa diverifikasi dari laporan final replay."
    ],
    featured: false
  },
  {
    id: "1990-91",
    label: "1990/91",
    title: "Manchester United Musim 1990/91",
    era: "Era awal Sir Alex Ferguson",
    managers: ["Sir Alex Ferguson"],
    competitions: [
      "First Division",
      "FA Cup",
      "League Cup",
      "FA Charity Shield",
      "European Cup Winners' Cup"
    ],
    leaguePosition: "6th First Division",
    trophies: ["European Cup Winners' Cup", "FA Charity Shield (shared)"],
    summary:
      "Musim ketika proyek Sir Alex Ferguson mulai terlihat lebih jelas: United finis keenam di liga, berbagi Charity Shield, menjadi runner-up League Cup, dan menjuarai European Cup Winners' Cup setelah mengalahkan Barcelona 2-1 di Rotterdam.",
    story: [
      "Setelah FA Cup 1989/90 memberi Ferguson waktu dan legitimasi, musim 1990/91 menjadi ujian berikutnya: United harus membuktikan bahwa trofi itu bukan sekadar penyelamat sesaat.",
      "Skuad mulai terlihat lebih seimbang. Denis Irwin datang dari Oldham Athletic, Les Sealey mendapat kepercayaan sebagai kiper utama, dan fondasi Bruce-Pallister semakin kuat di jantung pertahanan.",
      "United kembali ke kompetisi Eropa melalui European Cup Winners' Cup, setelah klub Inggris kembali diterima di panggung UEFA. Jalan mereka melewati Pecsi Munkas, Wrexham, Montpellier, dan Legia Warsaw sebelum final melawan Barcelona.",
      "Di liga, United membaik drastis dibanding musim sebelumnya, tetapi belum cukup konsisten untuk menantang gelar. Mereka finis keenam dengan rekor 16 menang, 12 seri, 10 kalah, gol 58:45.",
      "Puncak musim datang pada 15 Mei 1991 di Rotterdam. Mark Hughes mencetak dua gol melawan mantan klubnya, Barcelona, dan United menang 2-1. Trofi Eropa ini mengangkat reputasi Ferguson sekaligus menandai kebangkitan United di level internasional.",
      "Musim ini juga memperlihatkan masa depan: Lee Sharpe makin menonjol, Ryan Giggs mulai masuk tim utama, dan rekrutan Maret 1991, Andrei Kanchelskis, menjadi sinyal arah tim awal Premier League."
    ],
    squad: [
      {
        name: "Brian McClair",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Penyerang/gelandang",
        age: 26,
        country: "Scotland",
        appearances: 58,
        goals: 21,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Gary Pallister",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek tengah",
        age: 25,
        country: "England",
        appearances: 58,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Clayton Blackmore",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek/gelandang serbaguna",
        age: 25,
        country: "Wales",
        appearances: 57,
        goals: 9,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Mark Hughes",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Second striker",
        age: 26,
        country: "Wales",
        appearances: 52,
        goals: 21,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Denis Irwin",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kanan/bek kiri",
        age: 24,
        country: "Republic of Ireland",
        appearances: 52,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Les Sealey",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kiper",
        age: 32,
        country: "England",
        appearances: 51,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Mike Phelan",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang/bek kanan",
        age: 27,
        country: "England",
        appearances: 51,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Steve Bruce",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek tengah",
        age: 29,
        country: "England",
        appearances: 50,
        goals: 19,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Paul Ince",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang tengah",
        age: 22,
        country: "England",
        appearances: 47,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Neil Webb",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang tengah",
        age: 27,
        country: "England",
        appearances: 47,
        goals: 5,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Lee Sharpe",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kiri",
        age: 19,
        country: "England",
        appearances: 41,
        goals: 9,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Mal Donaghy",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kiri/bek tengah",
        age: 32,
        country: "Northern Ireland",
        appearances: 38,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Bryan Robson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kapten, gelandang",
        age: 33,
        country: "England",
        appearances: 29,
        goals: 1,
        assists: 1,
        status: "Pemain utama"
      },
      {
        name: "Danny Wallace",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kiri/penyerang",
        age: 26,
        country: "England",
        appearances: 28,
        goals: 4,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Mark Robins",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Penyerang",
        age: 20,
        country: "England",
        appearances: 27,
        goals: 5,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Lee Martin",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kiri",
        age: 22,
        country: "England",
        appearances: 24,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Russell Beardsmore",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang serang",
        age: 21,
        country: "England",
        appearances: 15,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Gary Walsh",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kiper",
        age: 22,
        country: "England",
        appearances: 6,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Darren Ferguson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang",
        age: 18,
        country: "Scotland",
        appearances: 5,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Viv Anderson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kanan",
        age: 34,
        country: "England",
        appearances: 3,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Mark Bosnich",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kiper",
        age: 18,
        country: "Australia",
        appearances: 2,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Ryan Giggs",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kiri",
        age: 16,
        country: "Wales",
        appearances: 2,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Paul Wratten",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang/penyerang",
        age: 20,
        country: "England",
        appearances: 2,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Andrei Kanchelskis",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kanan",
        age: 21,
        country: "Soviet Union",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Jim Leighton",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kiper",
        age: 32,
        country: "Scotland",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Neil Whitworth",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek tengah",
        age: 18,
        country: "England",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      }
    ],
    transfersIn: [
      {
        player: "Les Sealey",
        from: "Luton Town",
        fee: "Tidak diketahui",
        date: "Juni 1990",
        note: "Dikontrak permanen setelah menjadi pahlawan final replay FA Cup 1990."
      },
      {
        player: "Neil Whitworth",
        from: "Wigan Athletic",
        fee: "EUR 180k",
        date: "Juni 1990",
        note: "Bek muda untuk kedalaman skuad."
      },
      {
        player: "Denis Irwin",
        from: "Oldham Athletic",
        fee: "EUR 700k",
        date: "8 Juni 1990",
        note: "Full-back serbaguna yang langsung menjadi bagian penting skuad Ferguson."
      },
      {
        player: "Ryan Giggs",
        from: "Manchester United trainee",
        fee: "Promosi internal",
        date: "9 Juli 1990",
        note: "Masuk sebagai trainee, lalu menembus tim utama pada Maret 1991."
      },
      {
        player: "Simon Davies",
        from: "Manchester United trainee",
        fee: "Promosi internal",
        date: "9 Juli 1990",
        note: "Pemain muda Wales yang tercatat sebagai trainee."
      },
      {
        player: "Andrei Kanchelskis",
        from: "Shakhtar Donetsk",
        fee: "EUR 1.00m",
        date: "26 Maret 1991",
        note: "Winger kanan yang datang terlambat pada musim ini dan menjadi penting pada musim-musim berikutnya."
      }
    ],
    transfersOut: [
      {
        player: "Les Sealey",
        to: "Luton Town",
        fee: "End of loan",
        date: "1990",
        note: "Secara administratif kembali dari masa pinjaman sebelum kemudian dikontrak permanen."
      },
      {
        player: "Billy Garton",
        to: "Retired",
        fee: "-",
        date: "Mei 1990",
        note: "Pensiun karena cedera."
      },
      {
        player: "Mick Duxbury",
        to: "Blackburn Rovers",
        fee: "Free transfer",
        date: "Agustus 1990",
        note: "Bek kanan senior era lama keluar saat Ferguson merapikan skuad."
      },
      {
        player: "Colin Gibson",
        to: "Leicester City",
        fee: "EUR 115k",
        date: "Desember 1990",
        note: "Bek kiri keluar setelah perannya berkurang."
      },
      {
        player: "Tony Gill",
        to: "Retired",
        fee: "-",
        date: "Desember 1990",
        note: "Pensiun karena cedera."
      },
      {
        player: "Viv Anderson",
        to: "Sheffield Wednesday",
        fee: "Free transfer",
        date: "Januari 1991",
        note: "Pemain senior pindah ke klub yang kemudian mengalahkan United di final League Cup."
      },
      {
        player: "Mark Bosnich",
        to: "Sydney Croatia",
        fee: "-",
        date: "30 Juni 1991",
        note: "Kembali ke Australia setelah persoalan izin kerja."
      },
      {
        player: "Ralph Milne",
        to: "Sing Tao",
        fee: "Tidak diketahui",
        date: "Juni 1991",
        note: "Keluar setelah tidak lagi masuk rencana utama Ferguson."
      },
      {
        player: "Les Sealey",
        to: "Aston Villa",
        fee: "Free transfer",
        date: "Juli 1991",
        note: "Pergi setelah musim selesai meski menjadi kiper utama sepanjang 1990/91."
      },
      {
        player: "David Wilson",
        to: "Bristol Rovers",
        fee: "Tidak diketahui",
        date: "Juli 1991",
        note: "Keluar pada akhir periode musim."
      }
    ],
    commonStartingXI: {
      formation:
        "4-4-2 (berdasarkan pemain inti dan final Cup Winners' Cup 1991)",
      players: {
        GK: "Les Sealey",
        RB: "Denis Irwin",
        CB1: "Steve Bruce",
        CB2: "Gary Pallister",
        LB: "Clayton Blackmore",
        RM: "Mike Phelan",
        CM1: "Paul Ince",
        CM2: "Neil Webb",
        LM: "Lee Sharpe",
        ST1: "Mark Hughes",
        ST2: "Brian McClair"
      }
    },
    keyPlayers: [
      {
        name: "Mark Hughes",
        position: "Second striker",
        contribution: "52 main, 21 gol; dua gol final Cup Winners' Cup",
        story:
          "Hughes menjadi wajah terbesar musim Eropa United. Dua golnya melawan Barcelona di Rotterdam memberi Ferguson trofi Eropa pertama bersama United."
      },
      {
        name: "Brian McClair",
        position: "Penyerang/gelandang",
        contribution: "58 main, 21 gol; top skor bersama semua kompetisi",
        story:
          "McClair tetap produktif dan sangat fleksibel. Ia mencetak 21 gol semua kompetisi dan menjadi salah satu pemain paling sering tampil."
      },
      {
        name: "Steve Bruce",
        position: "Bek tengah",
        contribution: "50 main, 19 gol",
        story:
          "Bruce mencatat angka gol luar biasa untuk bek tengah. Banyak golnya datang dari penalti dan bola mati, sambil membentuk duet utama dengan Gary Pallister."
      },
      {
        name: "Gary Pallister",
        position: "Bek tengah",
        contribution: "58 main, 1 gol; penampilan terbanyak bersama",
        story:
          "Pallister menjadi fondasi pertahanan United. Musim ini memperkuat duet Bruce-Pallister yang kelak menjadi tulang punggung era awal Premier League."
      },
      {
        name: "Denis Irwin",
        position: "Full-back",
        contribution: "52 main pada musim debut",
        story:
          "Irwin langsung memberi stabilitas di sisi pertahanan. Ketenangan, konsistensi, dan fleksibilitasnya membuat transfer ini terlihat seperti salah satu pembelian paling cerdas Ferguson."
      },
      {
        name: "Lee Sharpe",
        position: "Winger kiri",
        contribution: "41 main, 9 gol; hat-trick vs Arsenal di League Cup",
        story:
          "Sharpe menjadi pemain muda paling mencolok musim ini, termasuk hat-trick terkenal dalam kemenangan 6-2 atas Arsenal di Highbury."
      },
      {
        name: "Ryan Giggs",
        position: "Winger kiri",
        contribution: "2 main, 1 gol",
        story:
          "Giggs baru muncul di akhir musim, tetapi debutnya melawan Everton dan golnya di derby Manchester memberi petunjuk awal tentang generasi baru yang sedang datang."
      }
    ],
    statistics: {
      leaguePosition: "6th First Division",
      matches: 60,
      wins: 32,
      draws: 16,
      losses: 12,
      goalsFor: 101,
      goalsAgainst: 63,
      topScorer:
        "Brian McClair dan Mark Hughes (21 gol semua kompetisi); Brian McClair dan Steve Bruce (13 gol liga)",
      topAssist:
        "Bryan Robson (assist gol pertama final Cup Winners' Cup; data musim penuh belum tersedia)",
      mostAppearances: "Brian McClair dan Gary Pallister (58 main)"
    },
    importantMoments: [
      {
        month: "18 Agustus 1990",
        title: "Charity Shield dibagi dengan Liverpool",
        description:
          "United bermain 1-1 melawan Liverpool di Wembley sehingga Charity Shield dibagi.",
        impact:
          "Menjaga momentum setelah FA Cup 1990 dan membuka musim dengan status juara bertahan piala domestik."
      },
      {
        month: "20 Oktober 1990",
        title: "Keributan besar melawan Arsenal",
        description:
          "Laga United melawan Arsenal di Old Trafford diwarnai perkelahian massal. United kemudian dikurangi satu poin, Arsenal dua poin.",
        impact:
          "Menjadi salah satu insiden liga paling terkenal musim itu dan menggambarkan panasnya persaingan United-Arsenal sebelum era Premier League."
      },
      {
        month: "28 November 1990",
        title: "Lee Sharpe hat-trick di Highbury",
        description:
          "United mengalahkan Arsenal 6-2 di League Cup, dengan Lee Sharpe mencetak hat-trick.",
        impact:
          "Membuat Sharpe semakin dikenal sebagai talenta muda besar United."
      },
      {
        month: "2 Maret 1991",
        title: "Debut Ryan Giggs",
        description:
          "Giggs masuk sebagai pemain pengganti melawan Everton di Old Trafford.",
        impact:
          "Menandai awal karier senior salah satu pemain terbesar dalam sejarah Manchester United."
      },
      {
        month: "21 April 1991",
        title: "Kalah di final League Cup",
        description:
          "United kalah 0-1 dari Sheffield Wednesday di Wembley. Gol John Sheridan memberi Ron Atkinson kemenangan atas mantan klubnya.",
        impact:
          "United nyaris meraih double cup, tetapi kekalahan ini menunjukkan skuad belum sepenuhnya matang."
      },
      {
        month: "4 Mei 1991",
        title: "Gol pertama Giggs dalam derby Manchester",
        description:
          "Giggs mencetak gol dalam kemenangan 1-0 atas Manchester City pada start liga pertamanya.",
        impact:
          "Memberi tanda awal bahwa pemain muda dari akademi akan punya tempat besar dalam proyek Ferguson."
      },
      {
        month: "15 Mei 1991",
        title: "United juara European Cup Winners' Cup",
        description:
          "United mengalahkan Barcelona 2-1 di Rotterdam lewat dua gol Mark Hughes.",
        impact:
          "Trofi Eropa pertama Ferguson bersama United dan bukti bahwa klub mulai kembali ke level elite."
      }
    ],
    additionalInfo: [
      "Rekor semua kompetisi United musim ini: 60 pertandingan, 32 menang, 16 seri, 12 kalah, gol 101:63.",
      "Rekor liga United: 38 pertandingan, 16 menang, 12 seri, 10 kalah, gol 58:45, 60 poin, finis keenam.",
      "United menjadi klub Inggris pertama yang meraih trofi Eropa setelah klub-klub Inggris kembali ke kompetisi UEFA pasca-larangan Heysel.",
      "Perjalanan European Cup Winners' Cup: Pecsi Munkas, Wrexham, Montpellier, Legia Warsaw, lalu final melawan Barcelona.",
      "Final European Cup Winners' Cup dimainkan pada 15 Mei 1991 di Feijenoord Stadion, Rotterdam.",
      "Mark Hughes mencetak dua gol final melawan mantan klubnya, Barcelona.",
      "Steve Bruce mencetak 19 gol semua kompetisi, angka yang sangat tinggi untuk seorang bek tengah.",
      "Lee Martin, pahlawan final FA Cup 1990, terganggu cedera punggung sehingga tampil jauh lebih sedikit.",
      "Jim Leighton praktis kehilangan posisi utama setelah final FA Cup 1990 dan hanya tampil sekali pada musim ini.",
      "Andrei Kanchelskis datang pada Maret 1991 sehingga baru tampil sekali, tetapi transfer ini penting untuk sisi kanan United pada musim-musim berikutnya.",
      "Data assist musim penuh era ini tidak tersedia lengkap di sumber utama; assist yang dicantumkan hanya momen yang bisa diverifikasi dari laporan pertandingan."
    ],
    featured: false
  },
  {
    id: "1991-92",
    label: "1991/92",
    title: "Manchester United Musim 1991/92",
    era: "Era awal Sir Alex Ferguson",
    managers: ["Sir Alex Ferguson"],
    competitions: [
      "First Division",
      "FA Cup",
      "League Cup",
      "European Cup Winners' Cup",
      "UEFA Super Cup"
    ],
    leaguePosition: "2nd First Division",
    trophies: ["League Cup", "UEFA Super Cup"],
    summary:
      "Musim nyaris juara liga sebelum lahirnya Premier League: United finis kedua di belakang Leeds United, tetapi tetap meraih League Cup pertama klub dan UEFA Super Cup. Peter Schmeichel, Paul Parker, Ryan Giggs, dan duet Bruce-Pallister memperkuat fondasi menuju gelar liga 1992/93.",
    story: [
      "Manchester United masuk musim 1991/92 dengan kepercayaan diri tinggi setelah FA Cup 1990 dan European Cup Winners' Cup 1991. Sir Alex Ferguson sudah membuktikan bisa memberi trofi, tetapi gelar liga masih menjadi target besar.",
      "Dua rekrutan utama datang pada awal musim: Peter Schmeichel dari Brondby dan Paul Parker dari Queens Park Rangers. Keduanya langsung memperbaiki struktur tim, terutama stabilitas gawang dan sisi kanan pertahanan.",
      "United memimpin perebutan gelar cukup lama. Rekor liga mereka kuat, terutama defensif: 42 pertandingan, 21 menang, 15 seri, 6 kalah, gol 63:33, dan 78 poin.",
      "Masalah muncul pada fase akhir musim. United kehilangan poin penting melawan Nottingham Forest, West Ham United, dan Liverpool pada April 1992. Leeds United akhirnya menjadi juara liga.",
      "Di sisi lain, United memenangkan League Cup pertama dalam sejarah klub setelah mengalahkan Nottingham Forest 1-0 di Wembley lewat gol Brian McClair dari assist Ryan Giggs.",
      "United juga meraih UEFA Super Cup 1991 dengan kemenangan 1-0 atas Crvena zvezda di Old Trafford, lagi-lagi lewat gol Brian McClair. Musim ini terasa pahit, tetapi menjadi fondasi langsung menuju gelar liga pertama era Ferguson."
    ],
    squad: [
      {
        name: "Brian McClair",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Penyerang/gelandang",
        age: 27,
        country: "Scotland",
        appearances: 58,
        goals: 25,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Gary Pallister",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek tengah",
        age: 26,
        country: "England",
        appearances: 56,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Mark Hughes",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Second striker",
        age: 27,
        country: "Wales",
        appearances: 53,
        goals: 14,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Peter Schmeichel",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kiper",
        age: 27,
        country: "Denmark",
        appearances: 53,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Denis Irwin",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kiri/bek kanan",
        age: 25,
        country: "Republic of Ireland",
        appearances: 51,
        goals: 4,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Ryan Giggs",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kiri",
        age: 17,
        country: "Wales",
        appearances: 51,
        goals: 7,
        assists: 1,
        status: "Pemain utama"
      },
      {
        name: "Steve Bruce",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek tengah",
        age: 30,
        country: "England",
        appearances: 50,
        goals: 6,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Paul Ince",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang tengah",
        age: 23,
        country: "England",
        appearances: 47,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Neil Webb",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang tengah",
        age: 28,
        country: "England",
        appearances: 44,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Andrei Kanchelskis",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kanan",
        age: 22,
        country: "Russia",
        appearances: 42,
        goals: 8,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Clayton Blackmore",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek/gelandang serbaguna",
        age: 26,
        country: "Wales",
        appearances: 41,
        goals: 4,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Bryan Robson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kapten, gelandang",
        age: 34,
        country: "England",
        appearances: 38,
        goals: 5,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Paul Parker",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kanan",
        age: 27,
        country: "England",
        appearances: 37,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Mal Donaghy",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kiri/bek tengah",
        age: 33,
        country: "Northern Ireland",
        appearances: 26,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Mike Phelan",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang/bek kanan",
        age: 28,
        country: "England",
        appearances: 25,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Lee Sharpe",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kiri",
        age: 20,
        country: "England",
        appearances: 19,
        goals: 2,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Mark Robins",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Penyerang",
        age: 21,
        country: "England",
        appearances: 8,
        goals: 2,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Lee Martin",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kiri",
        age: 23,
        country: "England",
        appearances: 6,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Darren Ferguson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang tengah",
        age: 19,
        country: "Scotland",
        appearances: 4,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Gary Walsh",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kiper",
        age: 23,
        country: "England",
        appearances: 4,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Russell Beardsmore",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang serang",
        age: 22,
        country: "England",
        appearances: 3,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Danny Wallace",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kiri/penyerang",
        age: 27,
        country: "England",
        appearances: 2,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Ian Wilkinson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kiper",
        age: 18,
        country: "England",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      }
    ],
    transfersIn: [
      {
        player: "Paul Parker",
        from: "Queens Park Rangers",
        fee: "EUR 2.43m",
        date: "6 Agustus 1991",
        note: "Bek kanan natural yang langsung memperkuat struktur pertahanan United."
      },
      {
        player: "Peter Schmeichel",
        from: "Brondby IF",
        fee: "EUR 750k",
        date: "6 Agustus 1991",
        note: "Kiper Denmark yang menjadi salah satu pembelian terbaik Ferguson."
      },
      {
        player: "Kieran Toal",
        from: "Manchester United U21",
        fee: "Promosi internal",
        date: NEEDS_VERIFICATION,
        note: "Pemain muda yang tercatat dalam daftar kedatangan Transfermarkt musim 1991/92."
      },
      {
        player: "Andy Arnott",
        from: "Gillingham",
        fee: "Loan transfer",
        date: "Maret 1992",
        note: "Pinjaman jangka pendek yang disebut dalam data tambahan, tanpa penampilan senior United."
      }
    ],
    transfersOut: [
      {
        player: "Deiniol Graham",
        to: "Barnsley",
        fee: "EUR 58k",
        date: NEEDS_VERIFICATION,
        note: "Penyerang muda Wales keluar secara permanen."
      },
      {
        player: "Les Sealey",
        to: "Aston Villa",
        fee: "Free transfer",
        date: "Juli 1991",
        note: "Kiper utama musim sebelumnya pergi setelah kontrak singkatnya selesai."
      },
      {
        player: "Mike Pollitt",
        to: "Bury",
        fee: "Free transfer",
        date: NEEDS_VERIFICATION,
        note: "Kiper muda keluar tanpa biaya transfer."
      },
      {
        player: "John Sharples",
        to: "Heart of Midlothian",
        fee: "Free transfer",
        date: NEEDS_VERIFICATION,
        note: "Bek muda pindah ke Skotlandia."
      },
      {
        player: "Jim Leighton",
        to: "Dundee FC",
        fee: "Tidak diketahui",
        date: "Februari 1992",
        note: "Kiper Skotlandia keluar permanen setelah posisinya di United praktis selesai."
      },
      {
        player: "Ralph Milne",
        to: "Sing Tao",
        fee: "Tidak diketahui",
        date: NEEDS_VERIFICATION,
        note: "Keluar setelah tidak lagi menjadi bagian rencana utama."
      },
      {
        player: "Derek Brazil",
        to: "Swansea City",
        fee: "Loan transfer",
        date: "1991",
        note: "Dipinjamkan untuk mencari menit bermain."
      },
      {
        player: "Russell Beardsmore",
        to: "Blackburn Rovers",
        fee: "Loan transfer",
        date: "1991",
        note: "Dipinjamkan setelah posisinya di skuad utama berkurang."
      },
      {
        player: "Brian Carey",
        to: "Wrexham",
        fee: "Loan transfer",
        date: "1991",
        note: "Dipinjamkan ke Wrexham."
      },
      {
        player: "Neil Whitworth",
        to: "Preston North End / Barnsley",
        fee: "Loan transfer",
        date: "1991/92",
        note: "Menjalani dua masa pinjaman selama musim 1991/92."
      },
      {
        player: "Paul Wratten",
        to: "Hartlepool United",
        fee: "-",
        date: NEEDS_VERIFICATION,
        note: "Keluar dari jalur pemain muda United."
      }
    ],
    commonStartingXI: {
      formation: "4-4-2",
      players: {
        GK: "Peter Schmeichel",
        RB: "Paul Parker",
        CB1: "Steve Bruce",
        CB2: "Gary Pallister",
        LB: "Denis Irwin",
        RM: "Andrei Kanchelskis",
        CM1: "Paul Ince",
        CM2: "Neil Webb",
        LM: "Ryan Giggs",
        ST1: "Mark Hughes",
        ST2: "Brian McClair"
      }
    },
    keyPlayers: [
      {
        name: "Peter Schmeichel",
        position: "Kiper",
        contribution: "53 main, fondasi pertahanan terbaik liga",
        story:
          "Schmeichel langsung memberi United otoritas baru di gawang. Ia vokal, dominan di udara, dan menjadi salah satu faktor besar mengapa United hanya kebobolan 33 gol di liga."
      },
      {
        name: "Gary Pallister",
        position: "Bek tengah",
        contribution: "56 main, 1 gol; PFA Player of the Year",
        story:
          "Pallister menjalani musim luar biasa dan terpilih sebagai PFA Player of the Year, pencapaian langka untuk seorang bek tengah."
      },
      {
        name: "Ryan Giggs",
        position: "Winger kiri",
        contribution: "51 main, 7 gol; assist final League Cup",
        story:
          "Giggs berubah dari prospek menjadi pemain inti. Kecepatan dan dribelnya memberi United dimensi baru, dan assistnya untuk Brian McClair memenangkan League Cup."
      },
      {
        name: "Brian McClair",
        position: "Penyerang/gelandang",
        contribution: "58 main, 25 gol; top skor klub",
        story:
          "McClair menjadi top skor United musim ini dan mencetak dua gol final besar: UEFA Super Cup melawan Crvena zvezda dan League Cup melawan Nottingham Forest."
      },
      {
        name: "Paul Parker",
        position: "Bek kanan",
        contribution: "37 main pada musim debut",
        story:
          "Parker membuat sisi kanan pertahanan lebih natural dan stabil, memungkinkan Denis Irwin lebih sering menetap di sisi kiri."
      },
      {
        name: "Andrei Kanchelskis",
        position: "Winger kanan",
        contribution: "42 main, 8 gol",
        story:
          "Kanchelskis memberi United ancaman langsung dari kanan. Kecepatannya melengkapi Giggs di sisi kiri dan membuka pola sayap yang kelak penting di awal Premier League."
      }
    ],
    statistics: {
      leaguePosition: "2nd First Division",
      matches: 58,
      wins: 30,
      draws: 21,
      losses: 7,
      goalsFor: 85,
      goalsAgainst: 43,
      topScorer: "Brian McClair (25 gol semua kompetisi / 18 gol liga)",
      topAssist:
        "Ryan Giggs (assist final League Cup; data assist musim penuh belum tersedia)",
      mostAppearances: "Brian McClair (58 main semua kompetisi)"
    },
    importantMoments: [
      {
        month: "6 Agustus 1991",
        title: "Schmeichel dan Parker datang",
        description:
          "United mendatangkan Peter Schmeichel dari Brondby dan Paul Parker dari Queens Park Rangers.",
        impact:
          "Dua transfer ini memperkuat tulang punggung tim yang akan menjadi juara liga pada musim berikutnya."
      },
      {
        month: "19 November 1991",
        title: "United memenangkan UEFA Super Cup",
        description:
          "United mengalahkan Crvena zvezda 1-0 di Old Trafford lewat gol Brian McClair.",
        impact:
          "Menambah kredibilitas Ferguson di Eropa setelah Cup Winners' Cup 1991."
      },
      {
        month: "26 Desember 1991",
        title: "Kemenangan 6-3 di Oldham",
        description:
          "United menang 6-3 atas Oldham Athletic dengan gol dari Denis Irwin, Andrei Kanchelskis, Brian McClair, dan Ryan Giggs.",
        impact:
          "Menunjukkan kapasitas serangan United saat mereka masih berada di jalur kuat perebutan gelar."
      },
      {
        month: "12 April 1992",
        title: "League Cup pertama klub",
        description:
          "United mengalahkan Nottingham Forest 1-0 di Wembley. Brian McClair mencetak gol dari assist Ryan Giggs.",
        impact:
          "United meraih League Cup pertama dalam sejarah klub."
      },
      {
        month: "20-26 April 1992",
        title: "Liga lepas di pekan penentuan",
        description:
          "United kalah dari Nottingham Forest, West Ham United, dan Liverpool dalam rentang enam hari.",
        impact:
          "Rangkaian kekalahan ini membuat Leeds United memastikan gelar liga."
      },
      {
        month: "Mei 1992",
        title: "FA Youth Cup dan Class of '92",
        description:
          "Tim muda United memenangkan FA Youth Cup 1992 dengan generasi yang kelak dikenal sebagai Class of '92.",
        impact:
          "Menjadi tanda bahwa fondasi jangka panjang klub tidak hanya dibangun lewat transfer, tetapi juga akademi."
      }
    ],
    additionalInfo: [
      "Rekor semua kompetisi United musim ini menurut MUFCInfo: 58 pertandingan, 30 menang, 21 seri, 7 kalah, gol 85:43.",
      "Rekor liga United: 42 pertandingan, 21 menang, 15 seri, 6 kalah, gol 63:33, 78 poin, finis kedua.",
      "Leeds United menjadi juara First Division terakhir sebelum kompetisi kasta tertinggi Inggris berubah menjadi Premier League.",
      "United memiliki pertahanan terbaik liga dengan hanya 33 gol kebobolan.",
      "Brian McClair menjadi top skor United dengan 25 gol semua kompetisi dan 18 gol liga.",
      "Gary Pallister terpilih sebagai PFA Player of the Year.",
      "Ryan Giggs memenangkan PFA Young Player of the Year dan mulai menjadi starter reguler pada usia 17 tahun.",
      "United tersingkir dari European Cup Winners' Cup di ronde kedua setelah kalah agregat 1-4 dari Atletico Madrid.",
      "FA Cup berakhir di ronde keempat setelah United kalah adu penalti dari Southampton dalam replay.",
      "Kegagalan liga musim ini menjadi pelajaran terakhir sebelum Ferguson membawa United juara liga pada 1992/93 setelah kedatangan Eric Cantona.",
      "Data assist musim penuh era ini tidak tersedia lengkap di sumber utama; assist yang dicantumkan hanya momen yang bisa diverifikasi dari laporan pertandingan."
    ],
    featured: false
  },
  {
    id: "1992-93",
    label: "1992/93",
    title: "Manchester United Musim 1992/93",
    era: "Era Premier League awal",
    managers: ["Sir Alex Ferguson"],
    competitions: ["Premier League", "FA Cup", "League Cup", "UEFA Cup"],
    leaguePosition: "1st Premier League",
    trophies: ["Premier League"],
    summary:
      "Musim pertama Premier League sekaligus musim pecahnya puasa gelar liga Manchester United sejak 1966/67. Setelah awal yang sulit dan cedera Dion Dublin, kedatangan Eric Cantona mengubah arah musim. United finis juara dengan 84 poin, unggul 10 poin dari Aston Villa.",
    story: [
      "Manchester United masuk musim 1992/93 dengan luka dari musim sebelumnya. Mereka nyaris juara pada 1991/92, tetapi runtuh pada pekan-pekan terakhir dan gelar jatuh ke Leeds United.",
      "Sir Alex Ferguson mencari penyerang baru. Alan Shearer memilih Blackburn Rovers, lalu United membeli Dion Dublin dari Cambridge United. Namun Dublin mengalami cedera patah kaki tidak lama setelah datang, sehingga masalah ketajaman lini depan kembali muncul.",
      "Start Premier League tidak mulus. United kalah 1-2 dari Sheffield United pada 15 Agustus 1992, laga yang juga melahirkan gol pertama dalam sejarah Premier League lewat Brian Deane. United lalu kalah 0-3 dari Everton di Old Trafford.",
      "Solusi terbesar datang secara mengejutkan dari Leeds United. Eric Cantona bergabung pada akhir November 1992 dengan biaya EUR 1.80m menurut Transfermarkt dan langsung memberi United kreativitas, keyakinan, serta koneksi serangan yang sebelumnya kurang.",
      "Cantona bukan top skor United, tetapi efeknya besar. Mark Hughes menjadi lebih hidup, Brian McClair bisa digeser ke lini tengah, Ryan Giggs makin berbahaya dari kiri, dan Paul Ince punya opsi progresi bola yang lebih baik.",
      "Momen ikonik musim ini datang pada 10 April 1993 melawan Sheffield Wednesday. Steve Bruce mencetak dua gol sundulan sangat telat, termasuk gol kemenangan pada menit 90+6, dalam laga yang sering dikaitkan dengan lahirnya istilah Fergie Time.",
      "United menutup musim dengan tujuh kemenangan beruntun. Gelar dipastikan setelah Aston Villa kalah dari Oldham Athletic pada 2 Mei 1993, lalu United merayakannya dengan kemenangan 3-1 atas Blackburn Rovers di Old Trafford sehari kemudian."
    ],
    squad: [
      {
        name: "Steve Bruce",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek tengah",
        age: 31,
        country: "England",
        appearances: 50,
        goals: 5,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Brian McClair",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Penyerang/gelandang",
        age: 28,
        country: "Scotland",
        appearances: 50,
        goals: 9,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Gary Pallister",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek tengah",
        age: 27,
        country: "England",
        appearances: 50,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Mark Hughes",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Second striker",
        age: 28,
        country: "Wales",
        appearances: 48,
        goals: 16,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Denis Irwin",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kiri/bek kanan",
        age: 26,
        country: "Republic of Ireland",
        appearances: 48,
        goals: 5,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Peter Schmeichel",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kiper",
        age: 28,
        country: "Denmark",
        appearances: 48,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Paul Ince",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang tengah",
        age: 24,
        country: "England",
        appearances: 47,
        goals: 6,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Ryan Giggs",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kiri",
        age: 18,
        country: "Wales",
        appearances: 46,
        goals: 11,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Paul Parker",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kanan",
        age: 28,
        country: "England",
        appearances: 37,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Andrei Kanchelskis",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kanan",
        age: 23,
        country: "Russia",
        appearances: 32,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Lee Sharpe",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kiri",
        age: 21,
        country: "England",
        appearances: 30,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Eric Cantona",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Second striker",
        age: 26,
        country: "France",
        appearances: 23,
        goals: 9,
        assists: 11,
        status: "Pemain utama"
      },
      {
        name: "Clayton Blackmore",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek/gelandang serbaguna",
        age: 27,
        country: "Wales",
        appearances: 17,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Bryan Robson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kapten, gelandang",
        age: 35,
        country: "England",
        appearances: 17,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Darren Ferguson",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang tengah",
        age: 20,
        country: "Scotland",
        appearances: 16,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Mike Phelan",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang/bek kanan",
        age: 29,
        country: "England",
        appearances: 14,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Dion Dublin",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Penyerang",
        age: 23,
        country: "England",
        appearances: 7,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Danny Wallace",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kiri/penyerang",
        age: 28,
        country: "England",
        appearances: 6,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Neil Webb",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang tengah",
        age: 29,
        country: "England",
        appearances: 4,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Lee Martin",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kiri",
        age: 24,
        country: "England",
        appearances: 2,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Gary Walsh",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kiper",
        age: 24,
        country: "England",
        appearances: 2,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Keith Gillespie",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Winger kanan",
        age: 17,
        country: "Northern Ireland",
        appearances: 2,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Gary Neville",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Bek kanan",
        age: 17,
        country: "England",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "David Beckham",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang kanan",
        age: 17,
        country: "England",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Nicky Butt",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Gelandang tengah",
        age: 17,
        country: "England",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      }
    ],
    transfersIn: [
      {
        player: "Dion Dublin",
        from: "Cambridge United",
        fee: "EUR 1.50m",
        date: "Agustus 1992",
        note: "Dibeli setelah United gagal mendapatkan Alan Shearer, tetapi cedera patah kaki membatasi musim debutnya."
      },
      {
        player: "Eric Cantona",
        from: "Leeds United",
        fee: "EUR 1.80m",
        date: "26 November 1992",
        note: "Transfer penentu musim. Cantona langsung menjadi katalis serangan dan mental juara United."
      },
      {
        player: "Les Sealey",
        from: "Aston Villa",
        fee: "Free transfer",
        date: "Januari 1993",
        note: "Kembali sebagai kedalaman posisi kiper."
      },
      {
        player: "Keith Gillespie",
        from: "Manchester United Youth",
        fee: "Promosi internal",
        date: NEEDS_VERIFICATION,
        note: "Winger muda yang mulai mendapat kesempatan senior dan mencetak gol di FA Cup."
      },
      {
        player: "Jovan Kirovski",
        from: "Pemain muda",
        fee: "Promosi internal",
        date: NEEDS_VERIFICATION,
        note: "Prospek penyerang dari jalur muda."
      },
      {
        player: "Pat McGibbon",
        from: "Portadown / youth",
        fee: "EUR 225k",
        date: NEEDS_VERIFICATION,
        note: "Bek tengah muda yang masuk sebagai prospek."
      }
    ],
    transfersOut: [
      {
        player: "Mal Donaghy",
        to: "Chelsea",
        fee: "EUR 115k",
        date: "13 Agustus 1992",
        note: "Bek senior keluar pada awal musim."
      },
      {
        player: "Mark Robins",
        to: "Norwich City",
        fee: "EUR 1.00m",
        date: "14 Agustus 1992",
        note: "Penyerang pahlawan FA Cup 1990 keluar karena persaingan lini depan semakin ketat."
      },
      {
        player: "Neil Webb",
        to: "Nottingham Forest",
        fee: "EUR 925k",
        date: "November 1992",
        note: "Kembali ke mantan klub setelah kehilangan tempat utama di Old Trafford."
      },
      {
        player: "Kieran Toal",
        to: "Motherwell",
        fee: "Tidak diketahui",
        date: "Maret 1993",
        note: "Keluar setelah tidak menembus tim utama United."
      },
      {
        player: "Russell Beardsmore",
        to: "AFC Bournemouth",
        fee: "Free transfer",
        date: "Akhir musim 1992/93",
        note: "Keluar setelah tidak tampil untuk tim utama pada musim ini."
      },
      {
        player: "Derek Brazil",
        fee: NEEDS_VERIFICATION,
        date: NEEDS_VERIFICATION,
        note: "Pemain pinggiran yang keluar dari klub; detail tujuan dan biaya perlu diverifikasi."
      },
      {
        player: "Colin Telford",
        fee: NEEDS_VERIFICATION,
        date: NEEDS_VERIFICATION,
        note: "Pemain muda/pinggiran yang keluar dari klub; detail perlu diverifikasi."
      },
      {
        player: "Raphael Burke",
        to: "Released",
        fee: "Free transfer",
        date: NEEDS_VERIFICATION,
        note: "Dilepas dari skuad muda."
      },
      {
        player: "Adrian Doherty",
        to: "Released",
        fee: "Free transfer",
        date: NEEDS_VERIFICATION,
        note: "Talenta muda berbakat yang kariernya sangat terganggu cedera."
      },
      {
        player: "George Switzer",
        to: "Released",
        fee: "Free transfer",
        date: NEEDS_VERIFICATION,
        note: "Pemain muda keluar dari klub."
      },
      {
        player: "Ian Wilkinson",
        to: "Released",
        fee: "Free transfer",
        date: NEEDS_VERIFICATION,
        note: "Kiper muda keluar setelah berada di pinggir skuad."
      }
    ],
    commonStartingXI: {
      formation: "4-4-2",
      players: {
        GK: "Peter Schmeichel",
        RB: "Paul Parker",
        CB1: "Steve Bruce",
        CB2: "Gary Pallister",
        LB: "Denis Irwin",
        RM: "Andrei Kanchelskis",
        CM1: "Paul Ince",
        CM2: "Brian McClair",
        LM: "Ryan Giggs",
        ST1: "Eric Cantona",
        ST2: "Mark Hughes"
      }
    },
    keyPlayers: [
      {
        name: "Eric Cantona",
        position: "Second striker",
        contribution: "23 main, 9 gol; 11 assist liga untuk United",
        story:
          "Cantona adalah missing piece musim ini. Ia datang dari Leeds United, memberi kreativitas dan aura juara, lalu mengubah United dari calon juara yang rapuh menjadi tim yang menutup musim dengan sangat kuat."
      },
      {
        name: "Peter Schmeichel",
        position: "Kiper",
        contribution: "48 main, semua 42 laga liga",
        story:
          "Schmeichel menjadi fondasi pertahanan. Dengan Bruce, Pallister, Parker, dan Irwin di depannya, United memiliki tulang punggung yang stabil sepanjang musim."
      },
      {
        name: "Steve Bruce",
        position: "Bek tengah",
        contribution: "50 main, 5 gol; dua gol dramatis vs Sheffield Wednesday",
        story:
          "Bruce sering menjadi kapten di lapangan ketika Bryan Robson jarang bermain. Dua gol telatnya melawan Sheffield Wednesday menjadi momen simbolis perebutan gelar."
      },
      {
        name: "Mark Hughes",
        position: "Second striker",
        contribution: "48 main, 16 gol; top skor klub",
        story:
          "Hughes menjadi top skor United semua kompetisi dan liga. Setelah Cantona datang, perannya semakin efektif sebagai penyerang fisik yang membuka ruang dan menyelesaikan peluang besar."
      },
      {
        name: "Ryan Giggs",
        position: "Winger kiri",
        contribution: "46 main, 11 gol; PFA Young Player of the Year",
        story:
          "Giggs makin matang sebagai ancaman utama dari kiri. Ia memenangkan PFA Young Player of the Year untuk kedua kalinya secara beruntun."
      },
      {
        name: "Paul Ince",
        position: "Gelandang tengah",
        contribution: "47 main, 6 gol",
        story:
          "Ince memberi tenaga, duel, dan agresivitas di lini tengah. Kombinasinya dengan McClair setelah Cantona datang menjadi struktur penting dalam kebangkitan paruh kedua musim."
      }
    ],
    statistics: {
      leaguePosition: "1st Premier League",
      matches: 50,
      wins: 27,
      draws: 15,
      losses: 8,
      goalsFor: 73,
      goalsAgainst: 35,
      topScorer: "Mark Hughes (16 gol semua kompetisi / 15 gol liga)",
      topAssist:
        "Eric Cantona (11 assist Premier League untuk United; 16 total liga musim itu termasuk Leeds)",
      mostAppearances: "Steve Bruce, Brian McClair, Gary Pallister (50 main)"
    },
    importantMoments: [
      {
        month: "15 Agustus 1992",
        title: "Laga pertama Premier League",
        description:
          "United kalah 1-2 dari Sheffield United di Bramall Lane. Brian Deane mencetak gol pertama dalam sejarah Premier League.",
        impact:
          "Awal musim tidak ideal, tetapi menjadi pembuka era baru sepak bola Inggris."
      },
      {
        month: "Agustus-September 1992",
        title: "Dion Dublin datang lalu cedera",
        description:
          "Dublin mencetak gol penting melawan Southampton, tetapi cedera patah kaki membuatnya absen lama.",
        impact:
          "Memaksa Ferguson kembali mencari solusi lini depan."
      },
      {
        month: "26 November 1992",
        title: "Eric Cantona direkrut dari Leeds",
        description:
          "United membeli Cantona dari Leeds United dengan biaya EUR 1.80m menurut Transfermarkt.",
        impact:
          "Menjadi salah satu transfer paling menentukan dalam sejarah Manchester United."
      },
      {
        month: "6 Desember 1992",
        title: "Debut Cantona di derby Manchester",
        description:
          "Cantona tampil saat United mengalahkan Manchester City 2-1 di Old Trafford.",
        impact:
          "Menandai awal perubahan ritme serangan United."
      },
      {
        month: "10 April 1993",
        title: "Steve Bruce dan Fergie Time",
        description:
          "Bruce mencetak dua gol telat saat United menang 2-1 atas Sheffield Wednesday.",
        impact:
          "Momen psikologis besar yang membuat United semakin dekat dengan gelar liga."
      },
      {
        month: "2-3 Mei 1993",
        title: "Gelar liga dipastikan",
        description:
          "Aston Villa kalah dari Oldham Athletic pada 2 Mei 1993, lalu United mengalahkan Blackburn Rovers 3-1 sehari kemudian.",
        impact:
          "United menjadi juara Premier League pertama dan mengakhiri penantian gelar liga sejak 1967."
      },
      {
        month: "9 Mei 1993",
        title: "Penutup manis di Wimbledon",
        description:
          "United menang 2-1 atas Wimbledon di Selhurst Park. Bryan Robson ikut mencetak gol pada laga terakhir liga.",
        impact:
          "Akhir simbolis untuk kapten lama yang akhirnya merasakan gelar liga bersama United."
      }
    ],
    additionalInfo: [
      "Rekor semua kompetisi United musim ini menurut MUFCInfo: 50 pertandingan, 27 menang, 15 seri, 8 kalah, gol 73:35.",
      "Rekor liga United: 42 pertandingan, 24 menang, 12 seri, 6 kalah, gol 67:31, 84 poin, juara dengan selisih 10 poin dari Aston Villa.",
      "Ini adalah musim pertama Premier League dan United menjadi juara pertama kompetisi tersebut.",
      "Nomor punggung tetap belum digunakan di Premier League 1992/93. United masih memakai sistem tradisional nomor 1-11 sesuai posisi starter dan nomor cadangan per pertandingan; nomor skuad tetap baru menjadi standar Premier League mulai 1993/94.",
      "United tersingkir dari UEFA Cup ronde pertama setelah dua kali 0-0 melawan Torpedo Moscow dan kalah adu penalti.",
      "FA Cup berakhir di ronde kelima setelah kalah 1-2 dari Sheffield United.",
      "League Cup berakhir di ronde ketiga setelah kalah 0-1 dari Aston Villa.",
      "Mark Hughes menjadi top skor klub dengan 16 gol semua kompetisi dan 15 gol liga.",
      "Eric Cantona mencatat 11 assist Premier League untuk United; total assist liga musim itu 16 jika digabung dengan paruh awalnya di Leeds United.",
      "Ryan Giggs memenangkan PFA Young Player of the Year untuk kedua kalinya secara beruntun.",
      "David Beckham, Nicky Butt, Gary Neville, dan Keith Gillespie mulai mendapat debut senior pada musim ini.",
      "United tidak mencatat hat-trick pemain sendiri musim ini.",
      "Gelar 1992/93 adalah gelar liga pertama Manchester United sejak musim 1966/67."
    ],
    featured: true
  },
  {
    id: "1993-94",
    label: "1993/94",
    title: "Manchester United Musim 1993/94",
    era: "Era Premier League awal",
    managers: ["Sir Alex Ferguson"],
    competitions: [
      "Premier League",
      "FA Cup",
      "League Cup",
      "UEFA Champions League",
      "FA Charity Shield"
    ],
    leaguePosition: "1st Premier League",
    trophies: ["Premier League", "FA Cup", "FA Charity Shield"],
    summary:
      "Musim dominasi pertama Manchester United di era Premier League. Setelah juara pada 1992/93, United mempertahankan gelar liga, memenangkan FA Cup, dan nyaris meraih treble domestik sebelum kalah dari Aston Villa di final League Cup.",
    story: [
      "Manchester United memasuki 1993/94 bukan lagi sebagai pemburu gelar, tetapi sebagai juara bertahan. Tantangannya berubah: membuktikan bahwa gelar 1992/93 bukan kebetulan dan bahwa era dominasi baru benar-benar dimulai.",
      "Sir Alex Ferguson mempertahankan inti skuad juara musim sebelumnya. Transfer besar datang pada Juli 1993 ketika Roy Keane dibeli dari Nottingham Forest dengan biaya EUR 4.40m menurut Transfermarkt, rekor transfer Inggris saat itu.",
      "Keane langsung memberi tenaga baru di lini tengah. Bersama Paul Ince, ia membuat United jauh lebih agresif, sementara Bryan Robson mulai bergeser menjadi figur senior dan simbol transisi generasi.",
      "Eric Cantona menjalani musim penuh pertamanya bersama United dan menjadi pusat permainan. Ia mencetak 25 gol semua kompetisi, memimpin kreativitas serangan, dan terpilih sebagai PFA Player of the Year.",
      "United memimpin Premier League dari pekan-pekan awal hingga akhir. Blackburn Rovers menjadi pesaing utama, tetapi United finis dengan 92 poin, unggul 8 poin, dengan rekor liga 27 menang, 11 seri, dan 4 kalah.",
      "Di FA Cup, United menuntaskan musim dengan kemenangan 4-0 atas Chelsea di final. Dua penalti Cantona, satu gol Mark Hughes, dan satu gol Brian McClair memastikan Double Winners pertama dalam sejarah klub.",
      "Satu-satunya kekurangan domestik datang di League Cup. United mencapai final, tetapi kalah 1-3 dari Aston Villa, sehingga kesempatan meraih treble domestik hilang.",
      "Di Eropa, United kembali ke kompetisi elite tetapi tersingkir dari UEFA Champions League ronde kedua oleh Galatasaray lewat aturan gol tandang setelah agregat 3-3.",
      "Musim ini juga menjadi akhir era Bryan Robson di Old Trafford. Setelah 13 tahun, sang kapten pergi ke Middlesbrough sebagai player-manager, sementara wajah baru United semakin jelas: Cantona, Keane, Giggs, Ince, Schmeichel, dan duet Bruce-Pallister."
    ],
    squad: [
      {
        name: "Peter Schmeichel",
        shirtNumber: 1,
        position: "Kiper",
        age: 29,
        country: "Denmark",
        appearances: 60,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Paul Parker",
        shirtNumber: 2,
        position: "Bek kanan",
        age: 29,
        country: "England",
        appearances: 56,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Denis Irwin",
        shirtNumber: 3,
        position: "Bek kiri/bek kanan",
        age: 27,
        country: "Republic of Ireland",
        appearances: 62,
        goals: 4,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Steve Bruce",
        shirtNumber: 4,
        position: "Bek tengah",
        age: 32,
        country: "England",
        appearances: 62,
        goals: 7,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Lee Sharpe",
        shirtNumber: 5,
        position: "Winger kiri/bek kiri",
        age: 22,
        country: "England",
        appearances: 41,
        goals: 11,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Gary Pallister",
        shirtNumber: 6,
        position: "Bek tengah",
        age: 28,
        country: "England",
        appearances: 60,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Eric Cantona",
        shirtNumber: 7,
        position: "Second striker",
        age: 27,
        country: "France",
        appearances: 48,
        goals: 25,
        assists: 13,
        status: "Pemain utama"
      },
      {
        name: "Paul Ince",
        shirtNumber: 8,
        position: "Gelandang tengah",
        age: 25,
        country: "England",
        appearances: 55,
        goals: 9,
        assists: 10,
        status: "Pemain utama"
      },
      {
        name: "Brian McClair",
        shirtNumber: 9,
        position: "Penyerang/gelandang",
        age: 29,
        country: "Scotland",
        appearances: 38,
        goals: 6,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Mark Hughes",
        shirtNumber: 10,
        position: "Striker",
        age: 29,
        country: "Wales",
        appearances: 54,
        goals: 22,
        assists: 6,
        status: "Pemain utama"
      },
      {
        name: "Ryan Giggs",
        shirtNumber: 11,
        position: "Winger kiri",
        age: 19,
        country: "Wales",
        appearances: 58,
        goals: 17,
        assists: 7,
        status: "Pemain utama"
      },
      {
        name: "Bryan Robson",
        shirtNumber: 12,
        position: "Kapten, gelandang",
        age: 36,
        country: "England",
        appearances: 27,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Les Sealey",
        shirtNumber: 13,
        position: "Kiper",
        age: 35,
        country: "England",
        appearances: 2,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Andrei Kanchelskis",
        shirtNumber: 14,
        position: "Winger kanan",
        age: 24,
        country: "Russia",
        appearances: 47,
        goals: 10,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Clayton Blackmore",
        shirtNumber: 15,
        position: "Bek/gelandang serbaguna",
        age: 28,
        country: "Wales",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Roy Keane",
        shirtNumber: 16,
        position: "Gelandang tengah",
        age: 22,
        country: "Republic of Ireland",
        appearances: 53,
        goals: 8,
        assists: 7,
        status: "Pemain utama"
      },
      {
        name: "Colin McKee",
        shirtNumber: 17,
        position: "Penyerang",
        age: 20,
        country: "Scotland",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Darren Ferguson",
        shirtNumber: 18,
        position: "Gelandang tengah",
        age: 21,
        country: "Scotland",
        appearances: 5,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Nicky Butt",
        shirtNumber: 19,
        position: "Gelandang tengah",
        age: 18,
        country: "England",
        appearances: 2,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Dion Dublin",
        shirtNumber: 20,
        position: "Penyerang",
        age: 24,
        country: "England",
        appearances: 10,
        goals: 2,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Lee Martin",
        shirtNumber: 21,
        position: "Bek kiri",
        age: 25,
        country: "England",
        appearances: 6,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Craig Lawton",
        shirtNumber: 22,
        position: "Gelandang tengah",
        age: NEEDS_VERIFICATION,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Mike Phelan",
        shirtNumber: 23,
        position: "Gelandang/bek kanan",
        age: 30,
        country: "England",
        appearances: 8,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Paul Scholes",
        shirtNumber: 24,
        position: "Gelandang tengah",
        age: 18,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Gary Walsh",
        shirtNumber: 25,
        position: "Kiper",
        age: 25,
        country: "England",
        appearances: 3,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Chris Casper",
        shirtNumber: 26,
        position: "Bek tengah",
        age: 18,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Gary Neville",
        shirtNumber: 27,
        position: "Bek kanan",
        age: 18,
        country: "England",
        appearances: 2,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "David Beckham",
        shirtNumber: 28,
        position: "Gelandang kanan",
        age: 18,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Ben Thornley",
        shirtNumber: 29,
        position: "Winger kiri",
        age: 18,
        country: "England",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "John O'Kane",
        shirtNumber: 30,
        position: "Bek kanan",
        age: 18,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Keith Gillespie",
        shirtNumber: 31,
        position: "Winger kanan",
        age: 18,
        country: "Northern Ireland",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Neil Whitworth",
        shirtNumber: 32,
        position: "Bek tengah",
        age: 21,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      }
    ],
    transfersIn: [
      {
        player: "Roy Keane",
        from: "Nottingham Forest",
        fee: "EUR 4.40m",
        date: "19 Juli 1993",
        note: "Transfer utama musim ini dan rekor transfer Inggris saat itu. Keane langsung menjadi pasangan inti Paul Ince di lini tengah."
      },
      {
        player: "Phil Neville",
        from: "Manchester United Youth",
        fee: "Signed trainee",
        date: "5 Juli 1993",
        note: "Pemain akademi yang masuk jalur profesional dan menjadi bagian dari generasi Class of '92."
      },
      {
        player: "Michael Clegg",
        from: "Manchester United Youth",
        fee: "Signed trainee",
        date: "5 Juli 1993",
        note: "Pemain muda yang masuk daftar trainee pada musim ini."
      }
    ],
    transfersOut: [
      {
        player: "Russell Beardsmore",
        to: "AFC Bournemouth",
        fee: "Free transfer",
        date: "30 Juni 1993",
        note: "Keluar setelah tidak lagi menembus rencana tim utama."
      },
      {
        player: "Ian Wilkinson",
        to: "Stockport County",
        fee: "Tidak diketahui",
        date: "Juni 1993",
        note: "Kiper muda/pinggiran yang meninggalkan klub."
      },
      {
        player: "Danny Wallace",
        to: "Birmingham City",
        fee: "EUR 300k",
        date: "15 Oktober 1993",
        note: "Keluar setelah peluang bermainnya makin kecil di skuad yang sudah memiliki banyak opsi sayap dan penyerang."
      },
      {
        player: "Bryan Robson",
        to: "Middlesbrough",
        fee: "Free transfer",
        date: "Akhir musim 1993/94",
        note: "Mengakhiri 13 tahun di Old Trafford dan menjadi player-manager Middlesbrough."
      },
      {
        player: "Les Sealey",
        to: "Released",
        fee: "Free transfer",
        date: "Akhir musim 1993/94",
        note: "Kiper cadangan senior yang keluar setelah musim double."
      },
      {
        player: "Clayton Blackmore",
        to: "Released",
        fee: "Free transfer",
        date: "Akhir musim 1993/94",
        note: "Pemain serbaguna lama yang keluar pada akhir musim."
      },
      {
        player: "Mike Phelan",
        to: "Released",
        fee: "Free transfer",
        date: "Akhir musim 1993/94",
        note: "Pemain serbaguna senior yang meninggalkan klub setelah era baru skuad Ferguson semakin terbentuk."
      },
      {
        player: "Colin McKee",
        to: "Released",
        fee: "Free transfer",
        date: "Akhir musim 1993/94",
        note: "Pemain pinggiran yang keluar dari skuad."
      },
      {
        player: "Giuliano Maiorana",
        to: "Released",
        fee: "Free transfer",
        date: "Akhir musim 1993/94",
        note: "Pemain pinggiran yang keluar dari klub."
      }
    ],
    commonStartingXI: {
      formation: "4-4-2",
      players: {
        GK: "Peter Schmeichel",
        RB: "Paul Parker",
        CB1: "Steve Bruce",
        CB2: "Gary Pallister",
        LB: "Denis Irwin",
        RM: "Andrei Kanchelskis",
        CM1: "Paul Ince",
        CM2: "Roy Keane",
        LM: "Ryan Giggs",
        ST1: "Eric Cantona",
        ST2: "Mark Hughes"
      }
    },
    keyPlayers: [
      {
        name: "Eric Cantona",
        position: "Second striker",
        contribution: "48 main, 25 gol; PFA Player of the Year",
        story:
          "Cantona adalah pusat kreativitas dan karisma tim. Ia bukan hanya top skor klub, tetapi juga penghubung yang membuat Hughes, Giggs, Kanchelskis, Sharpe, Ince, dan Keane lebih berbahaya."
      },
      {
        name: "Roy Keane",
        position: "Gelandang tengah",
        contribution: "53 main, 8 gol; musim debut langsung menjadi inti",
        story:
          "Keane datang sebagai transfer mahal dan langsung membuktikan diri. Energi, agresivitas, dan keberaniannya membuat lini tengah United punya wajah baru."
      },
      {
        name: "Peter Schmeichel",
        position: "Kiper",
        contribution: "60 main; fondasi pertahanan juara",
        story:
          "Schmeichel menjadi jangkar back five yang sangat stabil bersama Parker, Bruce, Pallister, dan Irwin. Konsistensinya memberi United dasar untuk menyerang tanpa kehilangan kontrol."
      },
      {
        name: "Ryan Giggs",
        position: "Winger kiri",
        contribution: "58 main, 17 gol",
        story:
          "Giggs semakin matang sebagai winger elite. Kecepatan, dribel, dan produktivitas golnya menjadikan sisi kiri United salah satu senjata utama musim double."
      },
      {
        name: "Mark Hughes",
        position: "Striker",
        contribution: "54 main, 22 gol",
        story:
          "Hughes menjadi pasangan ideal Cantona: agresif, kuat secara fisik, dan tajam dalam laga besar. Ia juga mencetak gol di final FA Cup dan final League Cup."
      },
      {
        name: "Steve Bruce",
        position: "Bek tengah",
        contribution: "62 main, 7 gol",
        story:
          "Bruce tetap menjadi pemimpin defensif dan kapten lapangan ketika Bryan Robson tidak bermain. Kontribusi golnya dari bola mati tetap penting."
      }
    ],
    statistics: {
      leaguePosition: "1st Premier League",
      matches: 63,
      wins: 40,
      draws: 16,
      losses: 7,
      goalsFor: 125,
      goalsAgainst: 60,
      topScorer: "Eric Cantona (25 gol semua kompetisi / 18 gol liga)",
      topAssist:
        "Eric Cantona (13 assist Premier League menurut Transfermarkt; StatMuse mencatat 12)",
      mostAppearances: "Denis Irwin dan Steve Bruce (62 main)"
    },
    importantMoments: [
      {
        month: "7 Agustus 1993",
        title: "Charity Shield dimenangkan",
        description:
          "United bermain 1-1 melawan Arsenal di Wembley, lalu menang adu penalti 5-4. Mark Hughes mencetak gol United.",
        impact:
          "Membuka musim dengan trofi dan menjaga momentum setelah gelar liga 1992/93."
      },
      {
        month: "18 Agustus 1993",
        title: "Roy Keane langsung mencetak dua gol",
        description:
          "Keane mencetak dua gol saat United mengalahkan Sheffield United 3-0 di Old Trafford.",
        impact:
          "Memberi sinyal bahwa transfer mahal itu langsung cocok dengan ritme tim Ferguson."
      },
      {
        month: "7 November 1993",
        title: "Comeback derby Manchester",
        description:
          "United tertinggal 0-2 dari Manchester City di Maine Road, lalu menang 3-2 lewat dua gol Cantona dan gol kemenangan Roy Keane.",
        impact:
          "Salah satu simbol mental juara United musim ini."
      },
      {
        month: "20 Maret 1994",
        title: "Final League Cup gagal",
        description:
          "United kalah 1-3 dari Aston Villa di final League Cup. Mark Hughes mencetak gol United.",
        impact:
          "Menghapus peluang treble domestik, tetapi tidak menghentikan laju liga dan FA Cup."
      },
      {
        month: "10 April 1994",
        title: "Semifinal FA Cup dramatis",
        description:
          "Mark Hughes mencetak gol menit 119 saat United menahan Oldham Athletic 1-1 di semifinal FA Cup.",
        impact:
          "Menjaga mimpi double tetap hidup sebelum United menang 4-1 di laga replay."
      },
      {
        month: "14 Mei 1994",
        title: "Double Winners di Wembley",
        description:
          "United mengalahkan Chelsea 4-0 di final FA Cup melalui dua penalti Cantona, satu gol Hughes, dan satu gol McClair.",
        impact:
          "Memastikan Premier League dan FA Cup dalam satu musim, double pertama dalam sejarah Manchester United."
      },
      {
        month: "Akhir musim 1993/94",
        title: "Bryan Robson meninggalkan United",
        description:
          "Robson pergi setelah 13 tahun dan menjadi player-manager Middlesbrough.",
        impact:
          "Menutup era kapten lama dan menandai peralihan simbolis menuju generasi Cantona-Keane."
      }
    ],
    additionalInfo: [
      "Rekor liga United: 42 pertandingan, 27 menang, 11 seri, 4 kalah, gol 80:38, 92 poin.",
      "United juara Premier League dengan keunggulan 8 poin dari Blackburn Rovers.",
      "Rekor semua kompetisi yang digunakan di data ini: 63 pertandingan, 40 menang, 16 seri, 7 kalah, gol 125:60.",
      "1993/94 adalah musim pertama Premier League memakai nomor skuad tetap dan nama di punggung; United memberi nomor 1-11 kepada inti juara 1992/93, sementara Roy Keane memakai nomor 16.",
      "Assist yang diisi pada tabel skuad adalah assist Premier League, bukan semua kompetisi. Untuk 1993/94, data lengkap semua kompetisi belum tersedia konsisten.",
      "Transfermarkt mencatat top assist liga United: Eric Cantona 13, Paul Ince 10, Ryan Giggs 7, Roy Keane 7, dan Mark Hughes 6.",
      "StatMuse mencatat Eric Cantona dengan 12 assist Premier League untuk United pada 1993/94, sehingga angka assist historis awal Premier League punya perbedaan kecil antar sumber.",
      "Eric Cantona menjadi top skor United dengan 25 gol semua kompetisi dan 18 gol liga, serta memenangkan PFA Player of the Year.",
      "Ryan Giggs mencetak 17 gol semua kompetisi, sedangkan Lee Sharpe 11 dan Andrei Kanchelskis 10.",
      "FA Cup dimenangkan dengan kemenangan 4-0 atas Chelsea di final.",
      "League Cup berakhir sebagai runner-up setelah kalah 1-3 dari Aston Villa di final.",
      "UEFA Champions League berakhir di ronde kedua setelah United tersingkir oleh Galatasaray lewat aturan gol tandang.",
      "Bryan Robson meninggalkan United pada akhir musim setelah 13 tahun di klub.",
      "Class of '92 mulai semakin dekat dengan tim utama: Nicky Butt, Gary Neville, David Beckham, Paul Scholes, Keith Gillespie, Ben Thornley, dan John O'Kane sudah berada dalam daftar nomor skuad."
    ],
    featured: false
  },
  {
    id: "1994-95",
    label: "1994/95",
    title: "Manchester United Musim 1994/95",
    era: "Era Premier League awal",
    managers: ["Sir Alex Ferguson"],
    competitions: [
      "Premier League",
      "FA Cup",
      "League Cup",
      "UEFA Champions League",
      "Charity Shield"
    ],
    leaguePosition: "2nd Premier League",
    trophies: ["Charity Shield"],
    summary:
      "Musim 1994/95 menjadi musim nyaris untuk Manchester United: kalah satu poin dari Blackburn di liga, kalah dari Everton di final FA Cup, dan kehilangan Eric Cantona karena skorsing panjang.",
    story: [
      "United masuk musim 1994/95 sebagai Double Winners dan masih membawa tulang punggung tim 1993/94: Schmeichel, Bruce, Pallister, Irwin, Ince, Keane, Giggs, Kanchelskis, Cantona, dan Hughes.",
      "Awal musim tetap kuat. United memenangkan Charity Shield melawan Blackburn Rovers, lalu terus menempel Blackburn dalam perebutan Premier League.",
      "Kemenangan 4-2 di kandang Blackburn dan 5-0 atas Manchester City menunjukkan kualitas tim Ferguson, dengan Andrei Kanchelskis tampil sebagai salah satu pemain paling menentukan musim ini.",
      "Titik balik besar datang pada 25 Januari 1995 di Selhurst Park. Eric Cantona diusir, lalu melakukan tendangan kung-fu ke arah penonton Crystal Palace. Skorsing panjangnya membuat United kehilangan pusat kreativitas pada fase paling penting musim.",
      "Ferguson merespons dengan transfer besar Andy Cole dari Newcastle United. Cole langsung memberi gol, termasuk lima gol dalam kemenangan 9-0 atas Ipswich Town, tetapi kombinasi baru itu harus beradaptasi di tengah tekanan perebutan gelar.",
      "Pada hari terakhir liga, Blackburn kalah dari Liverpool, tetapi United hanya imbang 1-1 melawan West Ham. United finis kedua dengan 88 poin, hanya satu poin di belakang Blackburn.",
      "Seminggu kemudian, United kalah 0-1 dari Everton di final FA Cup. Musim berakhir pahit, tetapi kegagalan ini menjadi jembatan menuju keputusan besar musim panas 1995: melepas beberapa senior dan memberi ruang lebih besar untuk Class of '92."
    ],
    squad: [
      {
        name: "Peter Schmeichel",
        shirtNumber: 1,
        position: "Kiper",
        age: 30,
        country: "Denmark",
        appearances: 43,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Paul Parker",
        shirtNumber: 2,
        position: "Bek kanan",
        age: 30,
        country: "England",
        appearances: 5,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Denis Irwin",
        shirtNumber: 3,
        position: "Bek kiri",
        age: 28,
        country: "Republic of Ireland",
        appearances: 54,
        goals: 6,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Steve Bruce",
        shirtNumber: 4,
        position: "Bek tengah, kapten",
        age: 33,
        country: "England",
        appearances: 48,
        goals: 4,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Lee Sharpe",
        shirtNumber: 5,
        position: "Winger kiri",
        age: 23,
        country: "England",
        appearances: 41,
        goals: 6,
        assists: 4,
        status: "Pemain utama"
      },
      {
        name: "Gary Pallister",
        shirtNumber: 6,
        position: "Bek tengah",
        age: 29,
        country: "England",
        appearances: 58,
        goals: 4,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Eric Cantona",
        shirtNumber: 7,
        position: "Second striker",
        age: 28,
        country: "France",
        appearances: 25,
        goals: 14,
        assists: 5,
        status: "Pemain utama"
      },
      {
        name: "Paul Ince",
        shirtNumber: 8,
        position: "Gelandang tengah",
        age: 26,
        country: "England",
        appearances: 48,
        goals: 6,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Brian McClair",
        shirtNumber: 9,
        position: "Striker/gelandang",
        age: 30,
        country: "Scotland",
        appearances: 53,
        goals: 8,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Mark Hughes",
        shirtNumber: 10,
        position: "Striker",
        age: 30,
        country: "Wales",
        appearances: 46,
        goals: 12,
        assists: 6,
        status: "Pemain utama"
      },
      {
        name: "Ryan Giggs",
        shirtNumber: 11,
        position: "Winger kiri",
        age: 20,
        country: "Wales",
        appearances: 40,
        goals: 4,
        assists: 11,
        status: "Pemain utama"
      },
      {
        name: "David May",
        shirtNumber: 12,
        position: "Bek tengah/bek kanan",
        age: 24,
        country: "England",
        appearances: 27,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Gary Walsh",
        shirtNumber: 13,
        position: "Kiper",
        age: 26,
        country: "England",
        appearances: 16,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Andrei Kanchelskis",
        shirtNumber: 14,
        position: "Winger kanan",
        age: 25,
        country: "Russia",
        appearances: 39,
        goals: 15,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Graeme Tomlinson",
        shirtNumber: 15,
        position: "Penyerang",
        age: 18,
        country: "England",
        appearances: 2,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Roy Keane",
        shirtNumber: 16,
        position: "Gelandang tengah",
        age: 23,
        country: "Republic of Ireland",
        appearances: 37,
        goals: 3,
        assists: 4,
        status: "Pemain utama"
      },
      {
        name: "Colin McKee",
        shirtNumber: 17,
        position: "Penyerang",
        age: 20,
        country: "Scotland",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Andy Cole",
        shirtNumber: 17,
        position: "Striker",
        age: 22,
        country: "England",
        appearances: 18,
        goals: 12,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Simon Davies",
        shirtNumber: 18,
        position: "Gelandang tengah",
        age: 20,
        country: "Wales",
        appearances: 10,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Nicky Butt",
        shirtNumber: 19,
        position: "Gelandang tengah",
        age: 19,
        country: "England",
        appearances: 35,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Dion Dublin",
        shirtNumber: 20,
        position: "Penyerang",
        age: 25,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Terry Cooke",
        shirtNumber: 20,
        position: "Winger kanan",
        age: 18,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Pat McGibbon",
        shirtNumber: 21,
        position: "Bek tengah",
        age: 20,
        country: "Northern Ireland",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Phil Neville",
        shirtNumber: 23,
        position: "Bek kiri/gelandang",
        age: 17,
        country: "England",
        appearances: 3,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Paul Scholes",
        shirtNumber: 24,
        position: "Gelandang/penyerang",
        age: 19,
        country: "England",
        appearances: 25,
        goals: 7,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Kevin Pilkington",
        shirtNumber: 25,
        position: "Kiper",
        age: 20,
        country: "England",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Chris Casper",
        shirtNumber: 26,
        position: "Bek tengah",
        age: 19,
        country: "England",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Gary Neville",
        shirtNumber: 27,
        position: "Bek kanan",
        age: 19,
        country: "England",
        appearances: 27,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "David Beckham",
        shirtNumber: 28,
        position: "Gelandang kanan",
        age: 19,
        country: "England",
        appearances: 10,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Ben Thornley",
        shirtNumber: 29,
        position: "Winger kiri",
        age: 19,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "John O'Kane",
        shirtNumber: 30,
        position: "Bek kanan",
        age: 19,
        country: "England",
        appearances: 3,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Keith Gillespie",
        shirtNumber: 31,
        position: "Winger kanan",
        age: 19,
        country: "Northern Ireland",
        appearances: 12,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Neil Whitworth",
        shirtNumber: 32,
        position: "Bek tengah",
        age: 22,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      }
    ],
    transfersIn: [
      {
        player: "David May",
        from: "Blackburn Rovers",
        fee: "EUR 2.10m",
        date: "Juli 1994",
        note: "Bek serbaguna yang memberi kedalaman saat Paul Parker sering cedera dan Steve Bruce mulai memasuki fase akhir sebagai starter reguler."
      },
      {
        player: "Graeme Tomlinson",
        from: "Bradford City",
        fee: "EUR 120k",
        date: "Juli 1994",
        note: "Penyerang muda yang masuk sebagai prospek dan hanya mendapat menit terbatas."
      },
      {
        player: "Andy Cole",
        from: "Newcastle United",
        fee: "EUR 9.60m",
        date: "Januari 1995",
        note: "Transfer rekor Inggris saat itu; paket transfer juga melibatkan Keith Gillespie yang pindah ke Newcastle. Cole mencetak 12 gol untuk United sebelum musim selesai."
      },
      {
        player: "Grant Brebner",
        from: "Manchester United U18",
        fee: "Promosi internal",
        date: NEEDS_VERIFICATION,
        note: "Pemain muda akademi yang masuk jalur skuad profesional."
      },
      {
        player: "Phil Mulryne",
        from: "Manchester United U18",
        fee: "Promosi internal",
        date: NEEDS_VERIFICATION,
        note: "Gelandang muda dari akademi yang mulai masuk fase profesional."
      }
    ],
    transfersOut: [
      {
        player: "Dion Dublin",
        to: "Coventry City",
        fee: "EUR 3.00m",
        date: "September 1994",
        note: "Keluar setelah sulit mendapatkan tempat reguler di lini depan United."
      },
      {
        player: "Colin McKee",
        to: "Kilmarnock",
        fee: "EUR 265k",
        date: "September 1994",
        note: "Pemain pinggiran yang meninggalkan klub pada awal musim."
      },
      {
        player: "Neil Whitworth",
        to: "Kilmarnock",
        fee: "EUR 317k",
        date: "September 1994",
        note: "Bek cadangan/pemain muda yang keluar secara permanen."
      },
      {
        player: "Keith Gillespie",
        to: "Newcastle United",
        fee: "EUR 1.50m",
        date: "Januari 1995",
        note: "Prospek Class of '92 yang menjadi bagian dari paket transfer besar Andy Cole."
      },
      {
        player: "Les Sealey",
        to: "Blackpool",
        fee: "Free transfer",
        date: "1994",
        note: "Kiper cadangan senior meninggalkan klub."
      },
      {
        player: "Giuliano Maiorana",
        to: "Ljungskile SK",
        fee: "Tidak diketahui",
        date: "Akhir musim 1994/95",
        note: "Pemain pinggiran yang keluar setelah tidak menembus tim utama."
      },
      {
        player: "Ben Thornley",
        to: "Huddersfield Town",
        fee: "Loan transfer",
        date: "1994/95",
        note: "Dipinjamkan setelah jalur ke tim utama terganggu oleh cedera besar dan persaingan di posisi sayap."
      },
      {
        player: "Paul Ince",
        to: "Internazionale",
        fee: "EUR 10.50m",
        date: "Musim panas 1995",
        note: "Keluar setelah musim berakhir; salah satu keputusan besar Ferguson sebelum memberi ruang lebih banyak untuk generasi muda."
      },
      {
        player: "Mark Hughes",
        to: "Chelsea",
        fee: "EUR 1.90m",
        date: "Musim panas 1995",
        note: "Striker senior pergi setelah menjadi bagian penting dari dua gelar liga awal Premier League."
      },
      {
        player: "Andrei Kanchelskis",
        to: "Everton",
        fee: "EUR 7.50m",
        date: "Musim panas 1995",
        note: "Top skor semua kompetisi United musim ini kemudian meninggalkan klub dalam fase perombakan besar."
      }
    ],
    commonStartingXI: {
      formation: "4-4-2",
      players: {
        GK: "Peter Schmeichel",
        RB: "David May",
        CB1: "Steve Bruce",
        CB2: "Gary Pallister",
        LB: "Denis Irwin",
        RM: "Andrei Kanchelskis",
        CM1: "Paul Ince",
        CM2: "Roy Keane",
        LM: "Ryan Giggs",
        ST1: "Eric Cantona",
        ST2: "Mark Hughes"
      }
    },
    keyPlayers: [
      {
        name: "Andrei Kanchelskis",
        position: "Winger kanan",
        contribution: "39 main, 15 gol semua kompetisi",
        story:
          "Kanchelskis menjadi sumber gol terbesar United musim ini. Hat-trick dalam derby 5-0 melawan Manchester City dan 14 gol liga menunjukkan betapa tajamnya ia dari sisi kanan."
      },
      {
        name: "Eric Cantona",
        position: "Second striker",
        contribution: "25 main, 14 gol; diskors setelah insiden Selhurst Park",
        story:
          "Sebelum skorsing, Cantona tetap menjadi pusat permainan United. Kehilangannya setelah Januari mengubah ritme serangan dan menjadi faktor besar dalam kegagalan mempertahankan gelar."
      },
      {
        name: "Gary Pallister",
        position: "Bek tengah",
        contribution: "58 main, 4 gol; pemain dengan penampilan terbanyak",
        story:
          "Pallister adalah pemain paling konsisten United musim ini. Ia menjadi pilar pertahanan saat tim menghadapi jadwal panjang liga, FA Cup, Eropa, dan transisi pemain."
      },
      {
        name: "Andy Cole",
        position: "Striker",
        contribution: "18 main, 12 gol sejak Januari",
        story:
          "Cole datang sebagai transfer rekor dan langsung memberi produktivitas. Lima golnya melawan Ipswich menjadi salah satu momen paling ikonik Premier League awal."
      },
      {
        name: "Ryan Giggs",
        position: "Winger kiri",
        contribution: "40 main, 4 gol, 11 assist Premier League",
        story:
          "Cedera membuat Giggs tidak setajam musim sebelumnya dalam jumlah gol, tetapi kreativitasnya tetap penting. Ia tercatat sebagai pemberi assist Premier League terbanyak United musim ini."
      },
      {
        name: "Paul Scholes",
        position: "Gelandang/penyerang",
        contribution: "25 main, 7 gol",
        story:
          "Scholes mulai benar-benar terlihat di tim utama. Dua gol debut melawan Port Vale dan gol liga pertamanya memberi sinyal awal bahwa Class of '92 siap mengambil peran lebih besar."
      }
    ],
    statistics: {
      leaguePosition: "2nd Premier League",
      matches: 59,
      wins: 36,
      draws: 13,
      losses: 10,
      goalsFor: 110,
      goalsAgainst: 48,
      topScorer: "Andrei Kanchelskis (15 gol semua kompetisi / 14 gol liga)",
      topAssist: "Ryan Giggs (11 assist Premier League)",
      mostAppearances: "Gary Pallister (58 main)"
    },
    importantMoments: [
      {
        month: "14 Agustus 1994",
        title: "Charity Shield dimenangkan",
        description:
          "United mengalahkan Blackburn Rovers 2-0 di Wembley melalui gol Eric Cantona dan Paul Ince.",
        impact:
          "Membuka musim dengan trofi dan mempertegas bahwa rival utama musim ini adalah Blackburn."
      },
      {
        month: "23 Oktober 1994",
        title: "Menang 4-2 di kandang Blackburn",
        description:
          "United mengalahkan Blackburn di Ewood Park lewat gol Cantona, dua gol Kanchelskis, dan gol Mark Hughes.",
        impact:
          "Kemenangan langsung atas pesaing gelar menjaga United sangat dekat dalam pacuan Premier League."
      },
      {
        month: "10 November 1994",
        title: "Derby 5-0 melawan Manchester City",
        description:
          "United menghancurkan Manchester City 5-0 di Old Trafford, dengan Kanchelskis mencetak hat-trick.",
        impact:
          "Salah satu derby paling dominan era Ferguson dan bukti betapa berbahayanya sisi kanan United."
      },
      {
        month: "25 Januari 1995",
        title: "Insiden Cantona di Selhurst Park",
        description:
          "Cantona diusir saat melawan Crystal Palace, lalu melakukan tendangan kung-fu ke arah penonton setelah keluar lapangan.",
        impact:
          "Skorsing panjang Cantona mengubah musim United dan melemahkan kreativitas tim dalam fase penentuan gelar."
      },
      {
        month: "Januari 1995",
        title: "Andy Cole datang dari Newcastle",
        description:
          "United membeli Andy Cole dengan fee EUR 9.60m menurut Transfermarkt; paket transfer juga melibatkan Keith Gillespie yang pindah ke Newcastle.",
        impact:
          "Memberi United striker tajam baru, tetapi juga memaksa adaptasi cepat di tengah perburuan gelar."
      },
      {
        month: "4 Maret 1995",
        title: "United 9-0 Ipswich Town",
        description:
          "United menang 9-0 atas Ipswich di Old Trafford; Andy Cole mencetak lima gol, sementara Roy Keane, Mark Hughes, dan Paul Ince juga mencetak gol.",
        impact:
          "Menjadi salah satu kemenangan terbesar Premier League dan menjaga tekanan terhadap Blackburn."
      },
      {
        month: "14 Mei 1995",
        title: "Hari terakhir yang pahit di West Ham",
        description:
          "Blackburn kalah dari Liverpool, tetapi United hanya imbang 1-1 melawan West Ham. Gol Brian McClair tidak cukup untuk membawa gelar ke Old Trafford.",
        impact:
          "United gagal juara Premier League hanya dengan selisih satu poin."
      },
      {
        month: "20 Mei 1995",
        title: "Final FA Cup kalah dari Everton",
        description:
          "United kalah 0-1 dari Everton di Wembley lewat gol Paul Rideout.",
        impact:
          "Mengakhiri musim tanpa trofi besar selain Charity Shield dan memperkuat kebutuhan regenerasi skuad."
      }
    ],
    additionalInfo: [
      "Rekor liga United: 42 pertandingan, 26 menang, 10 seri, 6 kalah, gol 77:28, 88 poin.",
      "United finis satu poin di belakang Blackburn Rovers, yang menjadi juara Premier League dengan 89 poin.",
      "Rekor semua kompetisi yang digunakan di data ini: 59 pertandingan, 36 menang, 13 seri, 10 kalah, gol 110:48.",
      "MUFCInfo mencatat total 727 penampilan pemain dan 108 gol pemain untuk musim 1994/95; tambahan 2 gol lain berasal dari own goal lawan.",
      "Pasted text menyebut Eric Cantona sebagai top skor semua kompetisi, tetapi data penampilan/gol MUFCInfo mencatat Andrei Kanchelskis sebagai top skor United dengan 15 gol semua kompetisi.",
      "Transfermarkt mencatat top skor Premier League United: Andrei Kanchelskis 14, Eric Cantona 12, Andy Cole 12, Mark Hughes 8, dan Paul Ince 5.",
      "Assist yang diisi pada tabel skuad adalah assist Premier League, bukan semua kompetisi.",
      "Transfermarkt mencatat top assist Premier League United: Ryan Giggs 11, Mark Hughes 6, Eric Cantona 5, Lee Sharpe 4, dan Roy Keane 4.",
      "StatMuse juga mencatat Ryan Giggs dengan 11 assist Premier League pada 1994/95.",
      "United By Numbers mencatat nomor skuad 1994/95, termasuk nomor yang dipakai ulang: Colin McKee dan Andy Cole sama-sama tercatat nomor 17, Dion Dublin dan Terry Cooke nomor 20.",
      "Nomor 22, 31, 32, dan seterusnya kosong setelah beberapa pemain keluar; Keith Gillespie tercatat sebagai departure nomor 31 dan Neil Whitworth nomor 32.",
      "Eric Cantona hanya tampil 25 kali semua kompetisi karena skorsing setelah insiden Selhurst Park.",
      "Andy Cole mencetak 12 gol dari 18 penampilan setelah datang pada Januari 1995.",
      "Paul Scholes mencetak 7 gol semua kompetisi pada musim kemunculan seniornya, termasuk dua gol di debut League Cup melawan Port Vale.",
      "Musim panas 1995 menjadi titik balik besar: Paul Ince, Mark Hughes, dan Andrei Kanchelskis pergi, lalu Ferguson memberi ruang lebih besar kepada Class of '92."
    ],
    featured: false
  },
  {
    id: "1995-96",
    label: "1995/96",
    title: "Manchester United Musim 1995/96",
    era: "Era Premier League awal",
    managers: ["Sir Alex Ferguson"],
    competitions: ["Premier League", "FA Cup", "League Cup", "UEFA Cup"],
    leaguePosition: "1st Premier League",
    trophies: ["Premier League", "FA Cup"],
    summary:
      "Musim Class of '92 membungkam kritik: setelah melepas beberapa senior besar, United mengejar Newcastle, memenangkan Premier League, lalu mengalahkan Liverpool di final FA Cup untuk meraih double kedua.",
    story: [
      "Manchester United memasuki 1995/96 dengan keputusan berani. Paul Ince, Mark Hughes, dan Andrei Kanchelskis pergi, sementara Ferguson tidak mengganti mereka dengan bintang besar.",
      "Kekalahan 1-3 dari Aston Villa pada pekan pertama melahirkan kritik terkenal bahwa United tidak akan menang apa pun dengan anak-anak. Gol David Beckham di laga itu justru menjadi sinyal awal generasi baru.",
      "Gary Neville, Phil Neville, Nicky Butt, Paul Scholes, David Beckham, dan Ryan Giggs mendapat menit besar. Di sekitar mereka masih ada tulang punggung senior: Schmeichel, Bruce, Pallister, Irwin, Keane, Cantona, dan Cole.",
      "Cantona kembali dari skorsing pada 1 Oktober 1995 melawan Liverpool dan langsung mencetak penalti. Ia kemudian menjadi pemain penentu dalam banyak laga ketat.",
      "Newcastle United sempat unggul 10 poin pada periode Natal, tetapi kemenangan United 2-0 di Old Trafford pada 27 Desember dan 1-0 di St James' Park pada 4 Maret 1996 mengubah tekanan mental perebutan gelar.",
      "United mengambil alih puncak pada Maret dan mengunci Premier League di hari terakhir dengan kemenangan 3-0 atas Middlesbrough, klub yang dilatih Bryan Robson.",
      "Di FA Cup, Cantona menutup musim dengan gol tunggal ke gawang Liverpool di Wembley. United menjadi tim Inggris pertama yang memenangkan double dua kali."
    ],
    squad: [
      {
        name: "Peter Schmeichel",
        shirtNumber: 1,
        position: "Kiper",
        age: 31,
        country: "Denmark",
        appearances: 45,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Paul Parker",
        shirtNumber: 2,
        position: "Bek kanan",
        age: 31,
        country: "England",
        appearances: 10,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Denis Irwin",
        shirtNumber: 3,
        position: "Bek kiri/bek kanan",
        age: 29,
        country: "Republic of Ireland",
        appearances: 39,
        goals: 1,
        assists: 5,
        status: "Pemain utama"
      },
      {
        name: "Steve Bruce",
        shirtNumber: 4,
        position: "Bek tengah, kapten",
        age: 34,
        country: "England",
        appearances: 39,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Lee Sharpe",
        shirtNumber: 5,
        position: "Winger kiri/kanan",
        age: 24,
        country: "England",
        appearances: 41,
        goals: 6,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Gary Pallister",
        shirtNumber: 6,
        position: "Bek tengah",
        age: 30,
        country: "England",
        appearances: 28,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Eric Cantona",
        shirtNumber: 7,
        position: "Second striker",
        age: 29,
        country: "France",
        appearances: 38,
        goals: 19,
        assists: 11,
        status: "Pemain utama"
      },
      {
        name: "Brian McClair",
        shirtNumber: 9,
        position: "Gelandang/penyerang",
        age: 31,
        country: "Scotland",
        appearances: 23,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Ryan Giggs",
        shirtNumber: 11,
        position: "Winger kiri",
        age: 21,
        country: "Wales",
        appearances: 44,
        goals: 12,
        assists: 10,
        status: "Pemain utama"
      },
      {
        name: "David May",
        shirtNumber: 12,
        position: "Bek tengah/bek kanan",
        age: 25,
        country: "England",
        appearances: 18,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Gary Walsh",
        shirtNumber: 13,
        position: "Kiper",
        age: 27,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Tony Coton",
        shirtNumber: 13,
        position: "Kiper",
        age: 34,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Graeme Tomlinson",
        shirtNumber: 15,
        position: "Penyerang",
        age: 20,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Roy Keane",
        shirtNumber: 16,
        position: "Gelandang tengah",
        age: 24,
        country: "Republic of Ireland",
        appearances: 39,
        goals: 6,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Andy Cole",
        shirtNumber: 17,
        position: "Striker",
        age: 23,
        country: "England",
        appearances: 44,
        goals: 13,
        assists: 6,
        status: "Pemain utama"
      },
      {
        name: "Simon Davies",
        shirtNumber: 18,
        position: "Gelandang tengah",
        age: 21,
        country: "Wales",
        appearances: 8,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Nicky Butt",
        shirtNumber: 19,
        position: "Gelandang tengah",
        age: 20,
        country: "England",
        appearances: 41,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Gary Neville",
        shirtNumber: 20,
        position: "Bek kanan/bek tengah",
        age: 20,
        country: "England",
        appearances: 39,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Pat McGibbon",
        shirtNumber: 21,
        position: "Bek tengah",
        age: 21,
        country: "Northern Ireland",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Paul Scholes",
        shirtNumber: 22,
        position: "Gelandang/penyerang",
        age: 20,
        country: "England",
        appearances: 31,
        goals: 14,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Phil Neville",
        shirtNumber: 23,
        position: "Bek kiri/bek kanan/gelandang",
        age: 18,
        country: "England",
        appearances: 34,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "David Beckham",
        shirtNumber: 24,
        position: "Gelandang kanan",
        age: 20,
        country: "England",
        appearances: 40,
        goals: 8,
        assists: 5,
        status: "Pemain utama"
      },
      {
        name: "Kevin Pilkington",
        shirtNumber: 25,
        position: "Kiper",
        age: 21,
        country: "England",
        appearances: 5,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Chris Casper",
        shirtNumber: 26,
        position: "Bek tengah",
        age: 20,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Terry Cooke",
        shirtNumber: 27,
        position: "Winger kanan",
        age: 19,
        country: "England",
        appearances: 7,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Nick Culkin",
        shirtNumber: NOT_AVAILABLE,
        position: "Kiper",
        age: 17,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Ben Thornley",
        shirtNumber: 29,
        position: "Winger kiri",
        age: 20,
        country: "England",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "John O'Kane",
        shirtNumber: 30,
        position: "Bek kanan",
        age: 20,
        country: "England",
        appearances: 2,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "William Prunier",
        shirtNumber: 31,
        position: "Bek tengah",
        age: 28,
        country: "France",
        appearances: 2,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      }
    ],
    transfersIn: [
      {
        player: "Tony Coton",
        from: "Manchester City",
        fee: "EUR 575k",
        date: "31 Januari 1996",
        note: "Kiper senior yang dibeli sebagai pelapis Peter Schmeichel, tetapi tidak tampil untuk tim utama."
      },
      {
        player: "Nick Culkin",
        from: "York City",
        fee: "Tidak tercatat di Transfermarkt",
        date: "25 September 1995",
        note: "Kiper muda; beberapa sumber Inggris menyebut transfer ini berbiaya, tetapi data Transfermarkt 95/96 tidak mencatatnya sebagai transfer berbiaya."
      },
      {
        player: "William Prunier",
        from: "Girondins Bordeaux",
        fee: "Loan transfer",
        date: "Desember 1995",
        note: "Bek tengah Prancis yang datang saat krisis bek, tampil dua kali, lalu masa trial/pinjamannya tidak diperpanjang."
      },
      {
        player: "Ben Thornley",
        from: "Stockport County",
        fee: "End of loan",
        date: "1995/96",
        note: "Kembali dari pinjaman dan tetap berada di sekitar skuad muda."
      },
      {
        player: "Terry Cooke",
        from: "Sunderland",
        fee: "End of loan",
        date: "1995/96",
        note: "Kembali dari pinjaman sebelum mendapat kesempatan terbatas di tim utama."
      },
      {
        player: "Michael Clegg",
        from: "Manchester United U18",
        fee: "Promosi internal",
        date: "1995/96",
        note: "Pemain muda akademi yang masuk daftar profesional."
      },
      {
        player: "Jody Banim",
        from: "Manchester United U18",
        fee: "Promosi internal",
        date: "1995/96",
        note: "Pemain muda akademi yang masuk jalur profesional."
      }
    ],
    transfersOut: [
      {
        player: "Paul Ince",
        to: "Internazionale",
        fee: "EUR 10.50m",
        date: "Juli 1995",
        note: "Penjualan besar sebelum musim dimulai; menjadi bagian utama cerita regenerasi skuad."
      },
      {
        player: "Andrei Kanchelskis",
        to: "Everton",
        fee: "EUR 7.50m",
        date: "25 Agustus 1995",
        note: "Top skor United musim sebelumnya pergi setelah awal musim, membuka jalan untuk Beckham dan Sharpe di kanan."
      },
      {
        player: "Mark Hughes",
        to: "Chelsea",
        fee: "EUR 1.90m",
        date: "Juli 1995",
        note: "Striker senior pergi sebelum musim, membuat Cole, Cantona, dan Scholes lebih sering menjadi opsi depan."
      },
      {
        player: "Gary Walsh",
        to: "Middlesbrough",
        fee: "EUR 700k",
        date: "11 Agustus 1995",
        note: "Kiper cadangan pindah ke klub Bryan Robson."
      },
      {
        player: "Richard Irving",
        to: "Nottingham Forest",
        fee: "EUR 93k",
        date: "1995/96",
        note: "Pemain muda/pinggiran yang keluar permanen."
      },
      {
        player: "Ashley Westwood",
        to: "Crewe Alexandra",
        fee: "EUR 40k",
        date: "1995/96",
        note: "Bek muda yang keluar permanen."
      },
      {
        player: "Graeme Tomlinson",
        to: "Luton Town",
        fee: "Loan transfer",
        date: "1995/96",
        note: "Dipinjamkan untuk mencari menit bermain."
      },
      {
        player: "Chris Casper",
        to: "AFC Bournemouth",
        fee: "Loan transfer",
        date: "1995/96",
        note: "Dipinjamkan dari skuad muda."
      },
      {
        player: "Ben Thornley",
        to: "Huddersfield Town / Stockport County",
        fee: "Loan transfer",
        date: "1995/96",
        note: "Menjalani masa pinjaman pada musim ini."
      },
      {
        player: "Terry Cooke",
        to: "Sunderland",
        fee: "Loan transfer",
        date: "1995/96",
        note: "Dipinjamkan sebelum kembali dan mendapat nomor 27."
      },
      {
        player: "Kevin Pilkington",
        to: "Rochdale",
        fee: "Loan transfer",
        date: "1995/96",
        note: "Dipinjamkan untuk menit bermain."
      },
      {
        player: "William Prunier",
        to: "Girondins Bordeaux",
        fee: "End of loan",
        date: "Januari 1996",
        note: "Kembali setelah dua penampilan dan performa buruk melawan Tottenham."
      },
      {
        player: "Steve Bruce",
        to: "Birmingham City",
        fee: "Tidak diketahui",
        date: "Akhir musim 1995/96",
        note: "Kapten senior meninggalkan United setelah musim double."
      },
      {
        player: "Paul Parker",
        to: "Derby County",
        fee: "Free transfer",
        date: "Akhir musim 1995/96",
        note: "Keluar setelah Gary Neville mengambil alih posisi bek kanan."
      }
    ],
    commonStartingXI: {
      formation: "4-4-2",
      players: {
        GK: "Peter Schmeichel",
        RB: "Gary Neville",
        CB1: "Steve Bruce",
        CB2: "Gary Pallister",
        LB: "Denis Irwin",
        RM: "David Beckham",
        CM1: "Roy Keane",
        CM2: "Nicky Butt",
        LM: "Ryan Giggs",
        ST1: "Eric Cantona",
        ST2: "Andy Cole"
      }
    },
    keyPlayers: [
      {
        name: "Eric Cantona",
        position: "Second striker",
        contribution: "38 main, 19 gol, 11 assist Premier League; FWA Player of the Year",
        story:
          "Cantona kembali dari skorsing dan langsung menjadi pemimpin teknis sekaligus mental. Golnya di Newcastle, Arsenal, Tottenham, Coventry, dan final FA Cup menjadikan musim ini sebagai salah satu babak terbaiknya."
      },
      {
        name: "David Beckham",
        position: "Gelandang kanan",
        contribution: "40 main, 8 gol, 5 assist Premier League",
        story:
          "Beckham mengambil ruang yang ditinggalkan Kanchelskis. Umpan silang, bola mati, dan kedewasaannya membuat sisi kanan United punya identitas baru."
      },
      {
        name: "Nicky Butt",
        position: "Gelandang tengah",
        contribution: "41 main, 3 gol",
        story:
          "Butt menjadi simbol keberanian Ferguson mempercayai akademi. Ia memberi duel, energi, dan struktur saat Paul Ince sudah pergi."
      },
      {
        name: "Ryan Giggs",
        position: "Winger kiri",
        contribution: "44 main, 12 gol, 10 assist Premier League",
        story:
          "Giggs sudah menjadi pemain senior muda yang menentukan. Dari kiri, ia memberi gol, progresi bola, dan ancaman konstan dalam pengejaran Newcastle."
      },
      {
        name: "Paul Scholes",
        position: "Gelandang/penyerang",
        contribution: "31 main, 14 gol",
        story:
          "Scholes sangat produktif meski sering berganti peran antara gelandang dan penyerang. Empat belas golnya membuat kehilangan Mark Hughes jauh lebih mudah ditanggung."
      },
      {
        name: "Peter Schmeichel",
        position: "Kiper",
        contribution: "45 main, 1 gol",
        story:
          "Schmeichel tetap menjadi fondasi tim dan tampil luar biasa di kemenangan 1-0 atas Newcastle. Golnya melawan Rotor Volgograd menjadi salah satu momen Eropa paling unik United."
      }
    ],
    statistics: {
      leaguePosition: "1st Premier League",
      matches: 49,
      wins: 32,
      draws: 10,
      losses: 7,
      goalsFor: 92,
      goalsAgainst: 46,
      topScorer: "Eric Cantona (19 gol semua kompetisi / 14 gol liga)",
      topAssist: "Eric Cantona (11 assist Premier League)",
      mostAppearances: "Peter Schmeichel (45 main)"
    },
    importantMoments: [
      {
        month: "19 Agustus 1995",
        title: "Kalah dari Aston Villa dan lahirnya kritik 'kids'",
        description:
          "United kalah 1-3 di Villa Park pada pekan pertama. David Beckham mencetak gol United, tetapi tim muda Ferguson langsung dikritik.",
        impact:
          "Menjadi titik awal narasi besar musim ini: skuad muda yang diragukan lalu membuktikan diri."
      },
      {
        month: "1 Oktober 1995",
        title: "Cantona kembali melawan Liverpool",
        description:
          "Cantona kembali dari skorsing delapan bulan dan mencetak penalti dalam hasil 2-2 melawan Liverpool di Old Trafford.",
        impact:
          "Mengembalikan pusat kreativitas dan pemimpin mental ke dalam tim."
      },
      {
        month: "27 Desember 1995",
        title: "United memangkas jarak dari Newcastle",
        description:
          "United mengalahkan Newcastle 2-0 di Old Trafford melalui gol Andy Cole dan Roy Keane.",
        impact:
          "Menghidupkan kembali perburuan gelar setelah Newcastle sempat unggul jauh."
      },
      {
        month: "4 Maret 1996",
        title: "Newcastle 0-1 United",
        description:
          "Cantona mencetak gol tunggal di St James' Park, sementara Schmeichel membuat penyelamatan penting.",
        impact:
          "Mengubah momentum perebutan gelar dan memberi tekanan besar kepada Newcastle."
      },
      {
        month: "13 April 1996",
        title: "Kisah kaus abu-abu di Southampton",
        description:
          "United kalah 1-3 dari Southampton dan mengganti seragam abu-abu pada jeda karena Ferguson merasa pemain sulit melihat rekan setim.",
        impact:
          "Menjadi salah satu cerita taktik dan psikologi paling terkenal di era Ferguson."
      },
      {
        month: "5 Mei 1996",
        title: "Gelar liga dikunci di Middlesbrough",
        description:
          "United menang 3-0 atas Middlesbrough di Riverside Stadium untuk memastikan Premier League.",
        impact:
          "Menuntaskan comeback dari ketertinggalan 10 poin atas Newcastle."
      },
      {
        month: "11 Mei 1996",
        title: "Cantona memenangkan final FA Cup",
        description:
          "United mengalahkan Liverpool 1-0 di Wembley lewat gol Cantona pada menit akhir.",
        impact:
          "Memastikan double kedua United dalam tiga musim dan menjadikan Cantona ikon musim 1995/96."
      }
    ],
    additionalInfo: [
      "Rekor liga United: 38 pertandingan, 25 menang, 7 seri, 6 kalah, gol 73:35, 82 poin.",
      "Rekor semua kompetisi yang digunakan di data ini: 49 pertandingan, 32 menang, 10 seri, 7 kalah, gol 92:46.",
      "MUFCInfo mencatat musim 1995/96 sebagai 49 pertandingan semua kompetisi.",
      "United menjadi tim Inggris pertama yang memenangkan double liga dan FA Cup dua kali.",
      "Transfermarkt mencatat pengeluaran transfer United 1995/96 hanya EUR 575k, yaitu Tony Coton dari Manchester City.",
      "Transfermarkt mencatat pemasukan transfer United 1995/96 sebesar EUR 20.73m, terutama dari Paul Ince, Andrei Kanchelskis, Mark Hughes, Gary Walsh, Richard Irving, dan Ashley Westwood.",
      "United By Numbers mencatat nomor skuad 1995/96: Gary Neville pindah ke nomor 20, Paul Scholes ke 22, David Beckham ke 24, dan Terry Cooke mendapat nomor 27.",
      "Nomor 8, 10, 14, 28, dan beberapa nomor setelah 31 tidak terpakai pada daftar United By Numbers musim ini.",
      "Assist yang diisi pada tabel skuad adalah assist Premier League dari Transfermarkt, bukan semua kompetisi.",
      "Transfermarkt mencatat top assist Premier League United: Eric Cantona 11, Ryan Giggs 10, Andy Cole 6, David Beckham 5, dan Denis Irwin 5.",
      "Eric Cantona menjadi top skor United dengan 19 gol semua kompetisi dan 14 gol liga, serta memenangkan FWA Player of the Year.",
      "Peter Schmeichel mencetak gol di UEFA Cup melawan Rotor Volgograd; United tetap tersingkir karena aturan gol tandang.",
      "League Cup berakhir cepat setelah United kalah agregat 3-4 dari York City.",
      "UEFA Cup berakhir di ronde pertama setelah United tersingkir oleh Rotor Volgograd.",
      "Steve Bruce dan Paul Parker meninggalkan United setelah musim berakhir, memperdalam transisi ke generasi baru."
    ],
    featured: false
  },
  {
    id: "1996-97",
    label: "1996/97",
    title: "Manchester United Musim 1996/97",
    era: "Era Treble",
    managers: ["Sir Alex Ferguson"],
    competitions: [
      "Premier League",
      "FA Cup",
      "League Cup",
      "UEFA Champions League",
      "Charity Shield"
    ],
    leaguePosition: "1st Premier League",
    trophies: ["Premier League", "Charity Shield"],
    summary:
      "Musim 1996/97 mempertahankan status United sebagai raja Inggris, memperlihatkan ledakan David Beckham dan Ole Gunnar Solskjaer, membawa tim ke semifinal Champions League, sekaligus menutup era Eric Cantona.",
    story: [
      "United datang sebagai Double Winners 1995/96, tetapi musim panas 1996 tetap menjadi fase transisi. Steve Bruce, Paul Parker, Tony Coton, dan Lee Sharpe pergi, sementara Ferguson menambah Ronny Johnsen, Karel Poborsky, Ole Gunnar Solskjaer, Jordi Cruyff, dan Raimond van der Gouw.",
      "Di Charity Shield, United menghancurkan Newcastle United 4-0. Kemenangan itu menjadi sinyal bahwa rival yang dikejar pada musim sebelumnya belum tentu mampu membalas pada musim baru.",
      "Premier League dimulai dengan ikon baru: David Beckham mencetak gol dari dekat garis tengah melawan Wimbledon. Gol itu membuatnya masuk sorotan nasional dan mempercepat statusnya sebagai bintang muda Inggris.",
      "Liga tidak selalu mulus. United kalah 0-5 dari Newcastle, 3-6 dari Southampton, dan sempat terlihat rapuh, tetapi para pesaing juga tidak cukup konsisten. United tetap mengumpulkan 75 poin dan unggul tujuh poin dari Newcastle, Arsenal, dan Liverpool.",
      "Solskjaer menjadi kejutan terbesar. Datang dari Molde tanpa reputasi sebesar Poborsky atau Cruyff, ia justru menjadi top skor klub dengan 19 gol semua kompetisi.",
      "Di Champions League, United lolos dari grup, mengalahkan Porto 4-0 di perempat final, lalu kalah dari Borussia Dortmund di semifinal. Ini menjadi pencapaian Eropa terjauh Ferguson sampai titik itu.",
      "Musim berakhir dengan kejutan besar ketika Eric Cantona pensiun pada 18 Mei 1997. United tetap juara, tetapi harus memasuki era baru tanpa pemain yang mengubah nasib klub sejak 1992."
    ],
    squad: [
      {
        name: "Peter Schmeichel",
        shirtNumber: 1,
        position: "Kiper",
        age: 32,
        country: "Denmark",
        appearances: 49,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Gary Neville",
        shirtNumber: 2,
        position: "Bek kanan",
        age: 21,
        country: "England",
        appearances: 46,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Denis Irwin",
        shirtNumber: 3,
        position: "Bek kiri",
        age: 30,
        country: "Republic of Ireland",
        appearances: 43,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "David May",
        shirtNumber: 4,
        position: "Bek tengah/bek kanan",
        age: 26,
        country: "England",
        appearances: 41,
        goals: 4,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Lee Sharpe",
        shirtNumber: 5,
        position: "Winger kiri",
        age: 25,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Gary Pallister",
        shirtNumber: 6,
        position: "Bek tengah",
        age: 31,
        country: "England",
        appearances: 37,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Eric Cantona",
        shirtNumber: 7,
        position: "Second striker, kapten",
        age: 30,
        country: "France",
        appearances: 50,
        goals: 15,
        assists: 12,
        status: "Pemain utama"
      },
      {
        name: "Nicky Butt",
        shirtNumber: 8,
        position: "Gelandang tengah",
        age: 21,
        country: "England",
        appearances: 36,
        goals: 6,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Andy Cole",
        shirtNumber: 9,
        position: "Striker",
        age: 24,
        country: "England",
        appearances: 28,
        goals: 7,
        assists: 5,
        status: "Pemain utama"
      },
      {
        name: "David Beckham",
        shirtNumber: 10,
        position: "Gelandang kanan",
        age: 21,
        country: "England",
        appearances: 49,
        goals: 12,
        assists: 8,
        status: "Pemain utama"
      },
      {
        name: "Ryan Giggs",
        shirtNumber: 11,
        position: "Winger kiri",
        age: 22,
        country: "Wales",
        appearances: 37,
        goals: 5,
        assists: 5,
        status: "Pemain utama"
      },
      {
        name: "Phil Neville",
        shirtNumber: 12,
        position: "Bek kiri/bek kanan",
        age: 19,
        country: "England",
        appearances: 24,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Brian McClair",
        shirtNumber: 13,
        position: "Penyerang/gelandang",
        age: 32,
        country: "Scotland",
        appearances: 27,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Jordi Cruyff",
        shirtNumber: 14,
        position: "Gelandang serang/forward",
        age: 22,
        country: "Netherlands",
        appearances: 22,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Karel Poborsky",
        shirtNumber: 15,
        position: "Winger kanan",
        age: 24,
        country: "Czech Republic",
        appearances: 33,
        goals: 4,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Roy Keane",
        shirtNumber: 16,
        position: "Gelandang tengah",
        age: 25,
        country: "Republic of Ireland",
        appearances: 33,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Raimond van der Gouw",
        shirtNumber: 17,
        position: "Kiper",
        age: 33,
        country: "Netherlands",
        appearances: 5,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Paul Scholes",
        shirtNumber: 18,
        position: "Gelandang/penyerang",
        age: 21,
        country: "England",
        appearances: 33,
        goals: 6,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Ronny Johnsen",
        shirtNumber: 19,
        position: "Bek tengah/gelandang bertahan",
        age: 27,
        country: "Norway",
        appearances: 42,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Ole Gunnar Solskjaer",
        shirtNumber: 20,
        position: "Striker",
        age: 23,
        country: "Norway",
        appearances: 46,
        goals: 19,
        assists: 4,
        status: "Pemain utama"
      },
      {
        name: "Pat McGibbon",
        shirtNumber: 21,
        position: "Bek tengah",
        age: 22,
        country: "Northern Ireland",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Simon Davies",
        shirtNumber: 22,
        position: "Gelandang tengah",
        age: 22,
        country: "Wales",
        appearances: 2,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Ben Thornley",
        shirtNumber: 23,
        position: "Winger kiri",
        age: 21,
        country: "England",
        appearances: 4,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "John O'Kane",
        shirtNumber: 24,
        position: "Bek kanan",
        age: 21,
        country: "England",
        appearances: 2,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Kevin Pilkington",
        shirtNumber: 25,
        position: "Kiper",
        age: 22,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Chris Casper",
        shirtNumber: 26,
        position: "Bek tengah",
        age: 21,
        country: "England",
        appearances: 6,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Terry Cooke",
        shirtNumber: 27,
        position: "Winger kanan",
        age: 20,
        country: "England",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Phil Mulryne",
        shirtNumber: 28,
        position: "Gelandang tengah",
        age: 18,
        country: "Northern Ireland",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Michael Appleton",
        shirtNumber: 29,
        position: "Gelandang tengah",
        age: 20,
        country: "England",
        appearances: 2,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Ronnie Wallwork",
        shirtNumber: 30,
        position: "Gelandang/bek",
        age: 18,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "John Curtis",
        shirtNumber: 31,
        position: "Bek kanan",
        age: 17,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Michael Clegg",
        shirtNumber: 32,
        position: "Bek kanan",
        age: 19,
        country: "England",
        appearances: 6,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Paul Gibson",
        shirtNumber: 33,
        position: "Kiper",
        age: 19,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      }
    ],
    transfersIn: [
      {
        player: "Teddy Sheringham",
        from: "Tottenham Hotspur",
        fee: "EUR 5.30m",
        date: "27 Juni 1997",
        note: "Datang setelah musim kompetitif selesai sebagai pengganti Eric Cantona untuk 1997/98."
      },
      {
        player: "Karel Poborsky",
        from: "Slavia Prague",
        fee: "EUR 4.00m",
        date: "20 Juli 1996",
        note: "Winger kanan Republik Ceko datang setelah Euro 1996, tetapi kesulitan melewati perkembangan David Beckham."
      },
      {
        player: "Ole Gunnar Solskjaer",
        from: "Molde FK",
        fee: "EUR 2.50m",
        date: "23 Juli 1996",
        note: "Rekrutan paling sukses musim ini; langsung menjadi top skor United dengan 19 gol semua kompetisi."
      },
      {
        player: "Jordi Cruyff",
        from: "Barcelona",
        fee: "EUR 2.50m",
        date: "8 Agustus 1996",
        note: "Gelandang serang/forward serbaguna yang menjadi opsi rotasi, tetapi tidak mengunci tempat utama."
      },
      {
        player: "Ronny Johnsen",
        from: "Besiktas",
        fee: "EUR 2.23m",
        date: "10 Juli 1996",
        note: "Bek tengah fleksibel yang membantu menutup kepergian Steve Bruce."
      },
      {
        player: "Raimond van der Gouw",
        from: "Vitesse Arnhem",
        fee: "Free transfer",
        date: "Juli 1996",
        note: "Kiper cadangan senior untuk melapis Peter Schmeichel."
      },
      {
        player: "Wes Brown",
        from: "Manchester United U18",
        fee: "Promosi internal",
        date: "1996/97",
        note: "Bek muda akademi yang masuk jalur profesional."
      },
      {
        player: "Jon Macken",
        from: "Manchester United U18",
        fee: "Promosi internal",
        date: "1996/97",
        note: "Penyerang muda akademi yang masuk daftar profesional."
      },
      {
        player: "Robert Trees",
        from: "Manchester United U18",
        fee: "Promosi internal",
        date: "1996/97",
        note: "Pemain muda akademi yang masuk daftar profesional."
      }
    ],
    transfersOut: [
      {
        player: "Lee Sharpe",
        to: "Leeds United",
        fee: "EUR 6.75m",
        date: "12 Agustus 1996",
        note: "Winger lama United pindah setelah delapan tahun di Old Trafford."
      },
      {
        player: "Tony Coton",
        to: "Sunderland",
        fee: "EUR 675k",
        date: "12 Juli 1996",
        note: "Kiper cadangan pindah permanen sebelum musim berjalan."
      },
      {
        player: "Paul Parker",
        to: "Derby County",
        fee: "Free transfer",
        date: "1996",
        note: "Keluar setelah posisinya diambil Gary Neville."
      },
      {
        player: "Steve Bruce",
        to: "Birmingham City",
        fee: "Tidak diketahui",
        date: "1996",
        note: "Kapten era sebelumnya pergi dan membuka jalan untuk May, Pallister, dan Johnsen."
      },
      {
        player: "Hasney Aljofree",
        to: "Bolton Wanderers",
        fee: "Free transfer",
        date: "2 Juli 1996",
        note: "Bek muda/pinggiran yang keluar pada awal musim."
      },
      {
        player: "Jovan Kirovski",
        to: "Borussia Dortmund",
        fee: "Free transfer",
        date: "8 Desember 1996",
        note: "Penyerang muda Amerika Serikat keluar ke Dortmund."
      },
      {
        player: "Colin Murdock",
        to: "Preston North End",
        fee: "Tidak tercatat di Transfermarkt",
        date: "15 Mei 1997",
        note: "Bek muda yang keluar permanen; beberapa sumber Inggris menyebut transfer ini berbiaya, tetapi data Transfermarkt tidak mencatat nominal EUR."
      },
      {
        player: "Eric Cantona",
        to: "Retired",
        fee: "Retired",
        date: "18 Mei 1997",
        note: "Pensiun mengejutkan pada usia 31 tahun setelah membantu United meraih empat gelar liga dalam lima musim."
      },
      {
        player: "Kevin Pilkington",
        to: "Rotherham United",
        fee: "Loan transfer",
        date: "1996/97",
        note: "Dipinjamkan untuk menit bermain."
      },
      {
        player: "Pat McGibbon",
        to: "Swansea City / Wigan Athletic",
        fee: "Loan transfer",
        date: "1996/97",
        note: "Menjalani masa pinjaman sepanjang musim."
      },
      {
        player: "John O'Kane",
        to: "Bury / Wrexham",
        fee: "Loan transfer",
        date: "1996/97",
        note: "Dipinjamkan beberapa kali dari skuad muda."
      },
      {
        player: "Michael Appleton",
        to: "Grimsby Town",
        fee: "Loan transfer",
        date: "1996/97",
        note: "Dipinjamkan untuk pengalaman senior."
      },
      {
        player: "Terry Cooke",
        to: "Birmingham City",
        fee: "Loan transfer",
        date: "1996/97",
        note: "Dipinjamkan pada bagian musim ini."
      },
      {
        player: "Robert Trees",
        to: "Released",
        fee: "Free transfer",
        date: "30 Juni 1997",
        note: "Dilepas dari skuad muda."
      }
    ],
    commonStartingXI: {
      formation: "4-4-2",
      players: {
        GK: "Peter Schmeichel",
        RB: "Gary Neville",
        CB1: "Gary Pallister",
        CB2: "David May",
        LB: "Denis Irwin",
        RM: "David Beckham",
        CM1: "Roy Keane",
        CM2: "Nicky Butt",
        LM: "Ryan Giggs",
        ST1: "Eric Cantona",
        ST2: "Ole Gunnar Solskjaer"
      }
    },
    keyPlayers: [
      {
        name: "Ole Gunnar Solskjaer",
        position: "Striker",
        contribution: "46 main, 19 gol semua kompetisi",
        story:
          "Solskjaer datang sebagai nama kecil dari Molde, lalu langsung menjadi top skor klub. Insting penyelesaian akhirnya membuat ia cepat menjadi favorit fans."
      },
      {
        name: "David Beckham",
        position: "Gelandang kanan",
        contribution: "49 main, 12 gol, 8 assist Premier League; PFA Young Player of the Year",
        story:
          "Gol dari tengah lapangan melawan Wimbledon mengubah profil Beckham. Musim ini ia mengambil alih sisi kanan United dan menjadi bintang nasional."
      },
      {
        name: "Eric Cantona",
        position: "Second striker, kapten",
        contribution: "50 main, 15 gol, 12 assist Premier League",
        story:
          "Cantona masih menjadi pusat permainan dan top assist liga United. Pensiunnya pada akhir musim menutup era yang mengubah sejarah klub."
      },
      {
        name: "Ronny Johnsen",
        position: "Bek tengah/gelandang bertahan",
        contribution: "42 main",
        story:
          "Johnsen memberi fleksibilitas penting setelah Steve Bruce pergi. Ia bisa bermain di belakang atau tengah dan menjadi fondasi penting menuju tahun-tahun berikutnya."
      },
      {
        name: "Peter Schmeichel",
        position: "Kiper",
        contribution: "49 main",
        story:
          "Schmeichel tetap pemimpin belakang dalam musim yang defensifnya tidak selalu mulus, terutama setelah kekalahan besar dari Newcastle dan Southampton."
      },
      {
        name: "Nicky Butt",
        position: "Gelandang tengah",
        contribution: "36 main, 6 gol",
        story:
          "Butt semakin matang sebagai gelandang utama. Ketika Keane absen atau rotasi dibutuhkan, energinya menjaga intensitas lini tengah."
      }
    ],
    statistics: {
      leaguePosition: "1st Premier League",
      matches: 54,
      wins: 28,
      draws: 14,
      losses: 12,
      goalsFor: 95,
      goalsAgainst: 54,
      topScorer: "Ole Gunnar Solskjaer (19 gol semua kompetisi / 18 gol liga)",
      topAssist: "Eric Cantona (12 assist Premier League)",
      mostAppearances: "Eric Cantona (50 main)"
    },
    importantMoments: [
      {
        month: "11 Agustus 1996",
        title: "Charity Shield 4-0 atas Newcastle",
        description:
          "United mengalahkan Newcastle 4-0 di Wembley lewat gol Cantona, Butt, Beckham, dan Keane.",
        impact:
          "Membuka musim dengan pernyataan kuat kepada rival utama musim sebelumnya."
      },
      {
        month: "17 Agustus 1996",
        title: "Gol Beckham dari tengah lapangan",
        description:
          "Beckham mencetak gol ikonik dari dekat garis tengah saat United menang 3-0 atas Wimbledon.",
        impact:
          "Membuat Beckham masuk sorotan nasional dan mempercepat statusnya sebagai bintang muda Inggris."
      },
      {
        month: "20 Oktober 1996",
        title: "Kalah 0-5 di Newcastle",
        description:
          "United kalah besar di St James' Park, salah satu kekalahan paling mencolok era Ferguson.",
        impact:
          "Menunjukkan bahwa musim juara ini tetap berisi kerentanan dan transisi defensif."
      },
      {
        month: "26 Oktober 1996",
        title: "Southampton 6-3 United",
        description:
          "United kembali kalah besar sepekan setelah kekalahan di Newcastle.",
        impact:
          "Menjadi periode terburuk musim liga, tetapi United tidak kehilangan kendali jangka panjang."
      },
      {
        month: "5 Maret 1997",
        title: "Porto dihancurkan di Old Trafford",
        description:
          "United menang 4-0 atas Porto pada leg pertama perempat final Champions League melalui gol May, Cantona, Giggs, dan Cole.",
        impact:
          "Menjadi salah satu tanda pertama bahwa United mulai mendekati level elite Eropa."
      },
      {
        month: "19 April 1997",
        title: "Menang besar di Anfield",
        description:
          "United mengalahkan Liverpool 3-1 di Anfield. Gary Pallister mencetak dua gol dan Andy Cole menambah satu gol.",
        impact:
          "Memperkuat posisi United dalam perebutan gelar melawan salah satu pesaing utama."
      },
      {
        month: "23 April 1997",
        title: "Semifinal Champions League berakhir",
        description:
          "United kalah 0-1 dari Borussia Dortmund di Old Trafford dan tersingkir agregat 0-2.",
        impact:
          "Membuktikan progres Eropa United, tetapi juga memperlihatkan jarak menuju juara Champions League."
      },
      {
        month: "18 Mei 1997",
        title: "Eric Cantona pensiun",
        description:
          "Cantona mengumumkan pensiun dari sepak bola profesional pada usia 31 tahun.",
        impact:
          "Menutup era King Eric dan memaksa Ferguson mencari struktur serangan baru."
      }
    ],
    additionalInfo: [
      "Rekor liga United: 38 pertandingan, 21 menang, 12 seri, 5 kalah, gol 76:44, 75 poin.",
      "United juara Premier League dengan keunggulan 7 poin atas Newcastle United, Arsenal, dan Liverpool.",
      "Rekor semua kompetisi yang digunakan di data ini: 54 pertandingan, 28 menang, 14 seri, 12 kalah, gol 95:54.",
      "MUFCInfo mencatat musim 1996/97 sebagai 54 pertandingan semua kompetisi.",
      "Transfermarkt mencatat pengeluaran transfer United 1996/97 sebesar EUR 16.53m dan pemasukan sebesar EUR 7.43m.",
      "Transfermarkt mencatat top arrivals: Teddy Sheringham EUR 5.30m, Karel Poborsky EUR 4.00m, Ole Gunnar Solskjaer EUR 2.50m, Jordi Cruyff EUR 2.50m, dan Ronny Johnsen EUR 2.23m.",
      "Teddy Sheringham datang pada 27 Juni 1997 setelah musim kompetitif selesai, sehingga tidak masuk statistik skuad 1996/97.",
      "United By Numbers mencatat perubahan nomor besar: Gary Neville ke 2, David May ke 4, Nicky Butt ke 8, Andy Cole ke 9, David Beckham ke 10, Paul Scholes ke 18, dan Ole Gunnar Solskjaer memakai 20.",
      "Beberapa pemain memakai nomor berbeda khusus Champions League: Phil Neville 28, Paul Scholes 12, Ronny Johnsen 5, Chris Casper 19, dan Michael Appleton 18.",
      "Assist yang diisi pada tabel skuad adalah assist Premier League dari Transfermarkt, bukan semua kompetisi.",
      "Transfermarkt mencatat top assist Premier League United: Eric Cantona 12, David Beckham 8, Andy Cole 5, Ryan Giggs 5, dan Ole Gunnar Solskjaer 4.",
      "Ole Gunnar Solskjaer menjadi top skor United dengan 19 gol semua kompetisi dan 18 gol liga.",
      "David Beckham memenangkan PFA Young Player of the Year pada musim ini.",
      "United tersingkir dari FA Cup ronde keempat setelah kalah replay 0-1 dari Wimbledon.",
      "League Cup berakhir di ronde keempat setelah kalah 0-2 dari Leicester City.",
      "Champions League berakhir di semifinal setelah kalah dua kali 0-1 dari Borussia Dortmund, yang kemudian menjadi juara.",
      "Eric Cantona pensiun pada akhir musim setelah membantu United memenangkan empat gelar Premier League sejak kedatangannya pada 1992."
    ],
    featured: false
  },
  {
    id: "1997-98",
    label: "1997/98",
    title: "Manchester United Musim 1997/98",
    era: "Era Treble",
    managers: ["Sir Alex Ferguson"],
    competitions: [
      "Premier League",
      "FA Cup",
      "League Cup",
      "UEFA Champions League",
      "Charity Shield"
    ],
    leaguePosition: "2nd Premier League",
    trophies: ["Charity Shield"],
    summary:
      "Musim 1997/98 menjadi tahun nyaris bagi United: awalnya tampak menuju gelar liga ketiga beruntun, tetapi cedera Roy Keane, laju akhir Arsenal, kegagalan di Barnsley, dan aturan gol tandang melawan Monaco membuat musim hanya berakhir dengan Charity Shield.",
    story: [
      "United memasuki musim pertama setelah Eric Cantona pensiun dengan Teddy Sheringham sebagai pengganti utama di lini depan. David Beckham mengambil nomor 7, Andy Cole kembali menjadi penyerang utama, dan Henning Berg datang dari Blackburn untuk memperkuat lini belakang.",
      "Start domestik sangat kuat. United menang Charity Shield atas Chelsea lewat adu penalti, menjaga lima clean sheet liga beruntun pada awal musim, lalu memuncak dengan kemenangan 7-0 atas Barnsley dan performa besar Andy Cole.",
      "Pukulan terbesar datang pada akhir September ketika Roy Keane mengalami cedera ligamen lutut melawan Leeds United dan absen hingga akhir musim. Nicky Butt dan Paul Scholes harus menanggung beban lini tengah dalam jadwal yang padat.",
      "Di Eropa, United memperlihatkan level baru: menang 3-2 atas Juventus di Old Trafford, menang 3-1 di Feyenoord lewat hat-trick Cole, dan lolos sebagai juara grup Champions League.",
      "Memasuki Maret, United masih terlihat memegang kendali Premier League dan sempat unggul besar, tetapi Arsenal punya pertandingan simpanan. Kekalahan 0-1 dari Arsenal di Old Trafford lewat gol Marc Overmars mengubah momentum perebutan gelar.",
      "FA Cup berakhir pahit ketika Barnsley menyingkirkan United dalam replay ronde kelima. Champions League juga selesai di perempat final setelah dua hasil imbang melawan Monaco, dengan United kalah karena aturan gol tandang.",
      "United finis dengan 77 poin, hanya satu poin di belakang Arsenal. Musim ini kemudian menjadi bahan bakar penting untuk belanja besar dan respons historis pada 1998/99."
    ],
    squad: [
      {
        name: "Peter Schmeichel",
        shirtNumber: 1,
        position: "Kiper, kapten setelah cedera Keane",
        age: 33,
        country: "Denmark",
        appearances: 44,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Gary Neville",
        shirtNumber: 2,
        position: "Bek kanan",
        age: 22,
        country: "England",
        appearances: 45,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Denis Irwin",
        shirtNumber: 3,
        position: "Bek kiri",
        age: 31,
        country: "Republic of Ireland",
        appearances: 37,
        goals: 4,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "David May",
        shirtNumber: 4,
        position: "Bek tengah/bek kanan",
        age: 27,
        country: "England",
        appearances: 11,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Ronny Johnsen",
        shirtNumber: 5,
        position: "Bek tengah/gelandang bertahan",
        age: 28,
        country: "Norway",
        appearances: 32,
        goals: 4,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Gary Pallister",
        shirtNumber: 6,
        position: "Bek tengah",
        age: 32,
        country: "England",
        appearances: 43,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "David Beckham",
        shirtNumber: 7,
        position: "Gelandang kanan",
        age: 22,
        country: "England",
        appearances: 50,
        goals: 11,
        assists: 14,
        status: "Pemain utama"
      },
      {
        name: "Nicky Butt",
        shirtNumber: 8,
        position: "Gelandang tengah",
        age: 22,
        country: "England",
        appearances: 42,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Andy Cole",
        shirtNumber: 9,
        position: "Striker",
        age: 25,
        country: "England",
        appearances: 45,
        goals: 25,
        assists: 7,
        status: "Pemain utama"
      },
      {
        name: "Teddy Sheringham",
        shirtNumber: 10,
        position: "Striker/second striker",
        age: 31,
        country: "England",
        appearances: 42,
        goals: 14,
        assists: 11,
        status: "Pemain utama"
      },
      {
        name: "Ryan Giggs",
        shirtNumber: 11,
        position: "Winger kiri",
        age: 23,
        country: "Wales",
        appearances: 37,
        goals: 9,
        assists: 9,
        status: "Pemain utama"
      },
      {
        name: "Phil Neville",
        shirtNumber: 12,
        position: "Bek kiri/bek kanan",
        age: 20,
        country: "England",
        appearances: 42,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Brian McClair",
        shirtNumber: 13,
        position: "Penyerang/gelandang",
        age: 33,
        country: "Scotland",
        appearances: 20,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Jordi Cruyff",
        shirtNumber: 14,
        position: "Gelandang serang/forward",
        age: 23,
        country: "Netherlands",
        appearances: 8,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Karel Poborsky",
        shirtNumber: 15,
        position: "Winger kanan",
        age: 25,
        country: "Czech Republic",
        appearances: 15,
        goals: 2,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Roy Keane",
        shirtNumber: 16,
        position: "Gelandang tengah, kapten",
        age: 25,
        country: "Republic of Ireland",
        appearances: 11,
        goals: 2,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Raimond van der Gouw",
        shirtNumber: 17,
        position: "Kiper",
        age: 34,
        country: "Netherlands",
        appearances: 7,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Paul Scholes",
        shirtNumber: 18,
        position: "Gelandang tengah/penyerang",
        age: 22,
        country: "England",
        appearances: 42,
        goals: 10,
        assists: 5,
        status: "Pemain utama"
      },
      {
        name: "Ole Gunnar Solskjaer",
        shirtNumber: 20,
        position: "Striker",
        age: 24,
        country: "Norway",
        appearances: 30,
        goals: 9,
        assists: 4,
        status: "Pemain utama"
      },
      {
        name: "Henning Berg",
        shirtNumber: 21,
        position: "Bek kanan/bek tengah",
        age: 27,
        country: "Norway",
        appearances: 36,
        goals: 2,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Erik Nevland",
        shirtNumber: 22,
        position: "Striker",
        age: 19,
        country: "Norway",
        appearances: 5,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Ben Thornley",
        shirtNumber: 23,
        position: "Winger kiri",
        age: 22,
        country: "England",
        appearances: 8,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "John O'Kane",
        shirtNumber: 24,
        position: "Bek kanan",
        age: 22,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Kevin Pilkington",
        shirtNumber: 25,
        position: "Kiper",
        age: 23,
        country: "England",
        appearances: 2,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Chris Casper",
        shirtNumber: 26,
        position: "Bek tengah",
        age: 22,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Terry Cooke",
        shirtNumber: 27,
        position: "Winger kanan",
        age: 21,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Phil Mulryne",
        shirtNumber: 28,
        position: "Gelandang tengah",
        age: 19,
        country: "Northern Ireland",
        appearances: 3,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Michael Appleton",
        shirtNumber: 29,
        position: "Gelandang tengah",
        age: 21,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Ronnie Wallwork",
        shirtNumber: 30,
        position: "Gelandang/bek",
        age: 19,
        country: "England",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "John Curtis",
        shirtNumber: 31,
        position: "Bek kanan",
        age: 18,
        country: "England",
        appearances: 9,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Michael Clegg",
        shirtNumber: 32,
        position: "Bek kanan",
        age: 20,
        country: "England",
        appearances: 7,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Nick Culkin",
        shirtNumber: 33,
        position: "Kiper",
        age: 19,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Michael Twiss",
        shirtNumber: 34,
        position: "Gelandang kanan",
        age: 19,
        country: "England",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Wes Brown",
        shirtNumber: 35,
        position: "Bek tengah",
        age: 17,
        country: "England",
        appearances: 2,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Alex Notman",
        shirtNumber: 36,
        position: "Striker",
        age: 18,
        country: "Scotland",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Jonathan Greening",
        shirtNumber: 37,
        position: "Gelandang tengah",
        age: 18,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Danny Higginbotham",
        shirtNumber: 38,
        position: "Bek tengah",
        age: 18,
        country: "England",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      }
    ],
    transfersIn: [
      {
        player: "Erik Nevland",
        from: "Viking FK",
        fee: "EUR 2.25m",
        date: "2 Juli 1997",
        note: "Sumber Inggris mencatat GBP 1.5m; nominal diubah ke EUR dengan rasio historis sekitar 1.5 seperti fee Berg. Transfermarkt tidak mencatat nominal EUR tetap untuk transfer ini."
      },
      {
        player: "Henning Berg",
        from: "Blackburn Rovers",
        fee: "EUR 7.50m",
        date: "11 Agustus 1997",
        note: "Transfer besar pertengahan Agustus untuk memperkuat bek kanan/bek tengah setelah United start musim tanpa Cantona."
      },
      {
        player: "Jonathan Greening",
        from: "York City",
        fee: "EUR 750k",
        date: "24 Maret 1998",
        note: "Gelandang muda yang datang menjelang akhir musim; tidak tampil di tim utama 1997/98."
      },
      {
        player: "Mark Wilson",
        from: "Manchester United U18",
        fee: "Promosi internal",
        date: "1997/98",
        note: "Gelandang akademi masuk daftar profesional dan dipinjamkan ke Wrexham."
      },
      {
        player: "Danny Higginbotham",
        from: "Manchester United U18",
        fee: "Promosi internal",
        date: "1997/98",
        note: "Bek muda akademi yang menjalani debut senior musim ini."
      },
      {
        player: "Nick Culkin",
        from: "Manchester United U18",
        fee: "Promosi internal",
        date: "1997/98",
        note: "Kiper akademi yang masuk nomor skuad senior, tetapi belum tampil kompetitif."
      }
    ],
    transfersOut: [
      {
        player: "Karel Poborsky",
        to: "Benfica",
        fee: "EUR 2.80m",
        date: "30 Desember 1997",
        note: "Keluar pada jendela musim dingin setelah kalah bersaing dengan David Beckham di sisi kanan."
      },
      {
        player: "Michael Appleton",
        to: "Preston North End",
        fee: "EUR 760k",
        date: "8 Agustus 1997",
        note: "Pindah permanen setelah beberapa masa pinjaman; sumber Inggris menyebut GBP 500k."
      },
      {
        player: "Pat McGibbon",
        to: "Wigan Athletic",
        fee: "EUR 563k",
        date: "28 Juli 1997",
        note: "Bek muda keluar permanen setelah musim pinjaman."
      },
      {
        player: "John O'Kane",
        to: "Everton",
        fee: "EUR 400k",
        date: "29 Januari 1998",
        note: "Bek kanan pinggiran pindah pada pertengahan musim."
      },
      {
        player: "Simon Davies",
        to: "Luton Town",
        fee: "EUR 300k",
        date: "1 Agustus 1997",
        note: "Gelandang muda Wales keluar permanen setelah kesempatan tim utama terbatas."
      },
      {
        player: "Jon Macken",
        to: "Preston North End",
        fee: "EUR 10k",
        date: "22 Juli 1997",
        note: "Transfermarkt mencatat EUR 10k; sumber Inggris musim ini menyebut biaya GBP 250k."
      },
      {
        player: "Gareth Macklin",
        to: "Newcastle United",
        fee: "Free transfer",
        date: "1 Juli 1997",
        note: "Bek muda Irlandia Utara menjadi keberangkatan pertama musim ini."
      },
      {
        player: "Neil Mustoe",
        to: "Wigan Athletic",
        fee: "Free transfer",
        date: "31 Desember 1997",
        note: "Penyerang muda keluar pada periode yang sama dengan Poborsky."
      },
      {
        player: "Brian McClair",
        to: "Motherwell",
        fee: "Free transfer",
        date: "30 Juni 1998",
        note: "Mengakhiri 11 tahun di United dan kembali ke klub lamanya."
      },
      {
        player: "Kevin Pilkington",
        to: "Port Vale",
        fee: "Free transfer",
        date: "30 Juni 1998",
        note: "Kiper cadangan dilepas setelah hanya dua penampilan musim ini."
      },
      {
        player: "Chris Casper",
        to: "Swindon Town",
        fee: "Loan transfer",
        date: "5 September 1997",
        note: "Dipinjamkan sampai 5 November 1997."
      },
      {
        player: "Ronnie Wallwork",
        to: "Carlisle United / Stockport County",
        fee: "Loan transfer",
        date: "1997/98",
        note: "Menjalani dua masa pinjaman pada paruh kedua musim."
      },
      {
        player: "Erik Nevland",
        to: "Viking FK",
        fee: "Loan transfer",
        date: "15 April 1998",
        note: "Dipinjamkan kembali ke Viking menjelang akhir musim."
      }
    ],
    commonStartingXI: {
      formation: "4-4-2",
      players: {
        GK: "Peter Schmeichel",
        RB: "Gary Neville",
        CB1: "Gary Pallister",
        CB2: "Henning Berg",
        LB: "Denis Irwin",
        RM: "David Beckham",
        CM1: "Nicky Butt",
        CM2: "Paul Scholes",
        LM: "Ryan Giggs",
        ST1: "Andy Cole",
        ST2: "Teddy Sheringham"
      }
    },
    keyPlayers: [
      {
        name: "Andy Cole",
        position: "Striker",
        contribution: "45 main, 25 gol semua kompetisi; 15 gol Premier League",
        story:
          "Cole mengambil alih panggung setelah era Cantona. Ia mencetak hat-trick melawan Barnsley di liga dan Feyenoord di Champions League, lalu menjadi top skor United musim ini."
      },
      {
        name: "David Beckham",
        position: "Gelandang kanan",
        contribution: "50 main, 11 gol, 14 assist Premier League",
        story:
          "Dengan nomor 7 warisan Cantona, Beckham menjadi motor kreativitas United. Ia memimpin daftar assist Premier League musim ini menurut Transfermarkt."
      },
      {
        name: "Teddy Sheringham",
        position: "Striker/second striker",
        contribution: "42 main, 14 gol, 11 assist Premier League",
        story:
          "Sheringham menjalani musim adaptasi sebagai pengganti Cantona. Meski hubungan di lapangan dengan Cole belum langsung mulus, produksinya tetap penting."
      },
      {
        name: "Paul Scholes",
        position: "Gelandang tengah",
        contribution: "42 main, 10 gol, 5 assist Premier League",
        story:
          "Cedera Keane mempercepat peran Scholes di lini tengah. Gol-golnya dari area kedua menjaga United tetap produktif di tengah absensi kapten."
      },
      {
        name: "Peter Schmeichel",
        position: "Kiper",
        contribution: "44 main; kapten pengganti setelah cedera Keane",
        story:
          "Schmeichel kembali menjadi fondasi pertahanan, termasuk periode awal musim dengan rangkaian clean sheet dan beberapa laga krusial ketika United mulai kehilangan ritme."
      },
      {
        name: "Roy Keane",
        position: "Gelandang tengah",
        contribution: "11 main, 2 gol sebelum cedera ligamen lutut",
        story:
          "Keane memulai musim sebagai kapten baru, tetapi cedera melawan Leeds mengubah struktur musim United. Absensinya terasa besar pada perebutan gelar."
      }
    ],
    statistics: {
      leaguePosition: "2nd Premier League",
      matches: 52,
      wins: 30,
      draws: 12,
      losses: 10,
      goalsFor: 102,
      goalsAgainst: 43,
      topScorer: "Andy Cole (25 gol semua kompetisi / 15 gol liga)",
      topAssist: "David Beckham (14 assist Premier League)",
      mostAppearances: "David Beckham (50 main)"
    },
    importantMoments: [
      {
        month: "3 Agustus 1997",
        title: "Charity Shield dimenangkan lewat penalti",
        description:
          "United bermain 1-1 melawan Chelsea di Wembley melalui gol Ronny Johnsen, lalu menang 4-2 dalam adu penalti.",
        impact:
          "Memberi trofi pembuka musim dan memperkenalkan struktur pasca-Cantona."
      },
      {
        month: "27 September 1997",
        title: "Roy Keane cedera serius di Elland Road",
        description:
          "Keane mengalami cedera ligamen lutut saat United kalah 0-1 dari Leeds United.",
        impact:
          "United kehilangan kapten dan pengatur tempo utama untuk sisa musim."
      },
      {
        month: "1 Oktober 1997",
        title: "Juventus dikalahkan 3-2 di Old Trafford",
        description:
          "United bangkit dari gol cepat Alessandro Del Piero dan menang melalui Sheringham, Scholes, dan Giggs.",
        impact:
          "Menjadi tanda bahwa United mulai punya keyakinan baru di Champions League."
      },
      {
        month: "25 Oktober 1997",
        title: "Barnsley dihancurkan 7-0",
        description:
          "Andy Cole mencetak hat-trick, sementara Scholes, Giggs dua kali, dan Poborsky ikut mencetak gol.",
        impact:
          "Memperlihatkan daya ledak serangan United pada fase terbaik musim."
      },
      {
        month: "5 November 1997",
        title: "Hat-trick Cole di Rotterdam",
        description:
          "Cole mencetak tiga gol saat United menang 3-1 atas Feyenoord di fase grup Champions League.",
        impact:
          "Membantu United memimpin grup berisi Juventus, Feyenoord, dan Kosice."
      },
      {
        month: "25 Februari 1998",
        title: "Barnsley membalas di FA Cup",
        description:
          "Setelah imbang 1-1 di Old Trafford, United kalah 2-3 di replay ronde kelima di Oakwell.",
        impact:
          "Mengakhiri peluang treble domestik dan menjadi salah satu kejutan besar musim."
      },
      {
        month: "14 Maret 1998",
        title: "Arsenal menang di Old Trafford",
        description:
          "Gol Marc Overmars memberi Arsenal kemenangan 1-0 dalam laga perebutan gelar yang menentukan momentum.",
        impact:
          "Mengubah tekanan psikologis perebutan gelar dan membuka jalan bagi laju akhir Arsenal."
      },
      {
        month: "18 Maret 1998",
        title: "Monaco lolos lewat gol tandang",
        description:
          "United hanya bermain 1-1 di Old Trafford setelah 0-0 di Monaco; AS Monaco lolos ke semifinal Champions League.",
        impact:
          "Menutup ambisi Eropa United musim ini di perempat final."
      }
    ],
    additionalInfo: [
      "Rekor liga United: 38 pertandingan, 23 menang, 8 seri, 7 kalah, gol 73:26, 77 poin.",
      "Rekor semua kompetisi yang digunakan di data ini: 52 pertandingan, 30 menang, 12 seri, 10 kalah, gol 102:43.",
      "MUFCInfo mencatat Andy Cole sebagai top skor United dengan 25 gol dan David Beckham sebagai pemain dengan penampilan terbanyak, 50 main.",
      "Assist yang diisi pada tabel skuad adalah assist Premier League dari Transfermarkt, bukan semua kompetisi.",
      "Transfermarkt mencatat top assist Premier League United: David Beckham 14, Teddy Sheringham 11, Ryan Giggs 9, Andy Cole 7, Paul Scholes 5, dan Ole Gunnar Solskjaer 4.",
      "Transfermarkt mencatat pengeluaran transfer United 1997/98 sebesar EUR 8.25m dan pemasukan sebesar EUR 4.83m; angka itu tidak memasukkan fee Erik Nevland karena Transfermarkt menandainya tidak diketahui.",
      "Nominal Erik Nevland ditulis EUR 2.25m sebagai konversi dari fee GBP 1.5m yang dicatat sumber Inggris; karena Transfermarkt tidak memberi nominal EUR, catatan ini dipisahkan dari total Transfermarkt.",
      "Nomor punggung utama berubah setelah Cantona pensiun: David Beckham memakai 7, Andy Cole 9, Teddy Sheringham 10, Henning Berg 21, dan Erik Nevland 22.",
      "Beberapa pemain memakai nomor berbeda khusus Champions League; tabel skuad memakai nomor domestik utama seperti daftar musim.",
      "Roy Keane cedera ligamen lutut pada kekalahan 0-1 dari Leeds United dan absen untuk sisa musim.",
      "United lolos sebagai juara grup Champions League dengan 15 poin dari grup Juventus, Feyenoord, dan Kosice.",
      "Arsenal memenangkan Premier League dengan 78 poin, satu poin di atas United.",
      "FA Cup berakhir di ronde kelima setelah kalah replay 2-3 dari Barnsley.",
      "League Cup berakhir di ronde ketiga setelah kalah 0-2 dari Ipswich Town.",
      "Champions League berakhir di perempat final setelah United disingkirkan AS Monaco lewat aturan gol tandang."
    ],
    featured: false
  },
  {
    id: "1998-99",
    label: "1998/99",
    title: "Manchester United Musim 1998/99",
    era: "Era Treble",
    managers: ["Sir Alex Ferguson"],
    competitions: [
      "Premier League",
      "FA Cup",
      "League Cup",
      "UEFA Champions League",
      "Charity Shield"
    ],
    leaguePosition: "1st Premier League",
    trophies: ["Premier League", "FA Cup", "UEFA Champions League"],
    summary:
      "Musim paling legendaris dalam sejarah Manchester United: Treble Winners. United menjuarai Premier League, FA Cup, dan UEFA Champions League dalam rangkaian akhir musim dramatis yang berpuncak pada dua gol injury time melawan Bayern Munich di Camp Nou.",
    story: [
      "United memasuki 1998/99 setelah musim tanpa trofi pada 1997/98. Ferguson merespons dengan memperkuat tiga area utama: Jaap Stam untuk pertahanan, Dwight Yorke untuk lini depan, dan Jesper Blomqvist untuk kedalaman sisi kiri.",
      "Awal musim belum sempurna. United kalah 0-3 dari Arsenal di Charity Shield dan kemudian kalah 0-3 lagi dari Arsenal di liga pada September, tetapi tim perlahan menemukan bentuk terbaiknya.",
      "Duet Dwight Yorke dan Andy Cole menjadi pusat serangan. Yorke memberi kreativitas dan penyelesaian, Cole menyerang ruang dengan tajam, sementara Sheringham dan Solskjaer memberi kedalaman yang menentukan di laga-laga besar.",
      "Premier League berjalan ketat sampai hari terakhir. United menutup liga dengan kemenangan 2-1 atas Tottenham Hotspur di Old Trafford, finis dengan 79 poin, unggul satu poin dari Arsenal.",
      "Di FA Cup, jalurnya berat dan dramatis: Liverpool, Chelsea, Arsenal, lalu Newcastle di final. Semifinal replay melawan Arsenal menjadi ikon musim berkat penalti Dennis Bergkamp yang diselamatkan Peter Schmeichel dan gol solo Ryan Giggs di extra time.",
      "Di Champions League, United tidak terkalahkan di grup berat bersama Bayern Munich, Barcelona, dan Brondby, lalu menyingkirkan Inter Milan dan Juventus sebelum final.",
      "Final Champions League 26 Mei 1999 menjadi puncak sejarah. Tanpa Roy Keane dan Paul Scholes yang terkena skorsing, United tertinggal dari Bayern sampai injury time, lalu Teddy Sheringham dan Ole Gunnar Solskjaer mencetak gol yang mengunci Treble."
    ],
    squad: [
      {
        name: "Peter Schmeichel",
        shirtNumber: 1,
        position: "Kiper",
        age: 34,
        country: "Denmark",
        appearances: 56,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Gary Neville",
        shirtNumber: 2,
        position: "Bek kanan",
        age: 23,
        country: "England",
        appearances: 54,
        goals: 1,
        assists: 3,
        status: "Pemain utama"
      },
      {
        name: "Denis Irwin",
        shirtNumber: 3,
        position: "Bek kiri/bek kanan",
        age: 32,
        country: "Republic of Ireland",
        appearances: 48,
        goals: 3,
        assists: 2,
        status: "Pemain utama"
      },
      {
        name: "David May",
        shirtNumber: 4,
        position: "Bek tengah",
        age: 28,
        country: "England",
        appearances: 9,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Ronny Johnsen",
        shirtNumber: 5,
        position: "Bek tengah/gelandang bertahan",
        age: 29,
        country: "Norway",
        appearances: 37,
        goals: 3,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Jaap Stam",
        shirtNumber: 6,
        position: "Bek tengah",
        age: 26,
        country: "Netherlands",
        appearances: 51,
        goals: 1,
        assists: 1,
        status: "Pemain utama"
      },
      {
        name: "David Beckham",
        shirtNumber: 7,
        position: "Gelandang kanan",
        age: 23,
        country: "England",
        appearances: 55,
        goals: 9,
        assists: 11,
        status: "Pemain utama"
      },
      {
        name: "Nicky Butt",
        shirtNumber: 8,
        position: "Gelandang tengah",
        age: 23,
        country: "England",
        appearances: 47,
        goals: 2,
        assists: 3,
        status: "Pemain utama"
      },
      {
        name: "Andy Cole",
        shirtNumber: 9,
        position: "Striker",
        age: 26,
        country: "England",
        appearances: 50,
        goals: 24,
        assists: 3,
        status: "Pemain utama"
      },
      {
        name: "Teddy Sheringham",
        shirtNumber: 10,
        position: "Striker/second striker",
        age: 32,
        country: "England",
        appearances: 27,
        goals: 5,
        assists: 3,
        status: "Cadangan"
      },
      {
        name: "Ryan Giggs",
        shirtNumber: 11,
        position: "Winger kiri",
        age: 24,
        country: "Wales",
        appearances: 41,
        goals: 10,
        assists: 2,
        status: "Pemain utama"
      },
      {
        name: "Phil Neville",
        shirtNumber: 12,
        position: "Bek kiri/bek kanan/gelandang",
        age: 21,
        country: "England",
        appearances: 44,
        goals: 1,
        assists: 2,
        status: "Pemain utama"
      },
      {
        name: "John Curtis",
        shirtNumber: 13,
        position: "Bek kanan",
        age: 19,
        country: "England",
        appearances: 7,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Jordi Cruyff",
        shirtNumber: 14,
        position: "Gelandang serang/forward",
        age: 24,
        country: "Netherlands",
        appearances: 11,
        goals: 2,
        assists: 1,
        status: "Cadangan"
      },
      {
        name: "Jesper Blomqvist",
        shirtNumber: 15,
        position: "Gelandang kiri/winger kiri",
        age: 24,
        country: "Sweden",
        appearances: 38,
        goals: 1,
        assists: 3,
        status: "Pemain utama"
      },
      {
        name: "Roy Keane",
        shirtNumber: 16,
        position: "Gelandang tengah, kapten",
        age: 27,
        country: "Republic of Ireland",
        appearances: 55,
        goals: 5,
        assists: NOT_AVAILABLE,
        status: "Pemain utama"
      },
      {
        name: "Raimond van der Gouw",
        shirtNumber: 17,
        position: "Kiper",
        age: 35,
        country: "Netherlands",
        appearances: 8,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Paul Scholes",
        shirtNumber: 18,
        position: "Gelandang tengah/gelandang serang",
        age: 23,
        country: "England",
        appearances: 51,
        goals: 11,
        assists: 6,
        status: "Pemain utama"
      },
      {
        name: "Dwight Yorke",
        shirtNumber: 19,
        position: "Striker",
        age: 26,
        country: "Trinidad and Tobago",
        appearances: 51,
        goals: 29,
        assists: 11,
        status: "Pemain utama"
      },
      {
        name: "Ole Gunnar Solskjaer",
        shirtNumber: 20,
        position: "Striker",
        age: 25,
        country: "Norway",
        appearances: 37,
        goals: 18,
        assists: 1,
        status: "Cadangan"
      },
      {
        name: "Henning Berg",
        shirtNumber: 21,
        position: "Bek kanan/bek tengah",
        age: 28,
        country: "Norway",
        appearances: 29,
        goals: 0,
        assists: 2,
        status: "Pemain utama"
      },
      {
        name: "Erik Nevland",
        shirtNumber: 22,
        position: "Striker",
        age: 20,
        country: "Norway",
        appearances: 1,
        goals: 1,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Michael Clegg",
        shirtNumber: 23,
        position: "Bek kanan",
        age: 21,
        country: "England",
        appearances: 3,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Wes Brown",
        shirtNumber: 24,
        position: "Bek tengah/bek kanan",
        age: 18,
        country: "England",
        appearances: 21,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Phil Mulryne",
        shirtNumber: 28,
        position: "Gelandang tengah",
        age: 20,
        country: "Northern Ireland",
        appearances: 2,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Alex Notman",
        shirtNumber: 29,
        position: "Striker/winger",
        age: 18,
        country: "Scotland",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Ronnie Wallwork",
        shirtNumber: 30,
        position: "Gelandang tengah/bek",
        age: 20,
        country: "England",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Mark Wilson",
        shirtNumber: 33,
        position: "Gelandang tengah",
        age: 19,
        country: "England",
        appearances: 3,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Jonathan Greening",
        shirtNumber: 34,
        position: "Gelandang tengah",
        age: 19,
        country: "England",
        appearances: 7,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      }
    ],
    transfersIn: [
      {
        player: "Dwight Yorke",
        from: "Aston Villa",
        fee: "EUR 19.25m",
        date: "20 Agustus 1998",
        note: "Transfer rekor klub baru. Sumber Inggris mencatat GBP 12.6m; tabel memakai nominal euro Transfermarkt."
      },
      {
        player: "Jaap Stam",
        from: "PSV Eindhoven",
        fee: "EUR 17.00m",
        date: "1 Juli 1998",
        note: "Bek tengah utama yang langsung menjadi fondasi Treble; sumber Inggris mencatat sekitar GBP 10.6m-10.75m."
      },
      {
        player: "Jesper Blomqvist",
        from: "Parma",
        fee: "EUR 7.00m",
        date: "Juli 1998",
        note: "Didatangkan sebagai kedalaman sisi kiri dan menjadi starter final Champions League."
      },
      {
        player: "Bojan Djordjic",
        from: "IF Brommapojkarna",
        fee: "EUR 1.50m",
        date: "17 Februari 1999",
        note: "Prospek muda Swedia; tidak tampil di tim utama pada musim Treble."
      },
      {
        player: "Lee Roche",
        from: "Manchester United Reserves",
        fee: "Promosi internal",
        date: "1998/99",
        note: "Bek kanan muda masuk daftar senior, tetapi belum mencatat penampilan kompetitif musim ini."
      },
      {
        player: "Jordi Cruyff",
        from: "Celta de Vigo",
        fee: "End of loan",
        date: "31 Mei 1999",
        note: "Kembali setelah masa pinjaman di Celta Vigo."
      },
      {
        player: "Chris Casper",
        from: "Reading",
        fee: "End of loan",
        date: "31 Oktober 1998",
        note: "Kembali dari pinjaman sebelum kemudian keluar permanen ke Reading."
      },
      {
        player: "Terry Cooke",
        from: "Wrexham / Manchester City",
        fee: "End of loan",
        date: "1998/99",
        note: "Sempat kembali dari dua masa pinjaman, tetapi bukan bagian skuad pertandingan utama Treble."
      },
      {
        player: "Ronnie Wallwork",
        from: "Royal Antwerp",
        fee: "End of loan",
        date: "1 Mei 1999",
        note: "Kembali dari pinjaman dan mencatat satu penampilan semua kompetisi."
      },
      {
        player: "Erik Nevland",
        from: "Viking FK / IFK Goteborg",
        fee: "End of loan",
        date: "1998/99",
        note: "Kembali dari pinjaman dan mencetak satu gol dari satu penampilan musim ini."
      }
    ],
    transfersOut: [
      {
        player: "Gary Pallister",
        to: "Middlesbrough",
        fee: "EUR 2.80m",
        date: "Juli 1998",
        note: "Kembali ke klub lamanya setelah menjadi bek utama era awal Premier League United."
      },
      {
        player: "Phil Mulryne",
        to: "Norwich City",
        fee: "EUR 750k",
        date: "Maret 1999",
        note: "Keluar permanen setelah dua penampilan semua kompetisi pada musim ini."
      },
      {
        player: "Grant Brebner",
        to: "Reading",
        fee: "EUR 450k",
        date: "1998/99",
        note: "Gelandang muda keluar permanen menurut catatan Transfermarkt."
      },
      {
        player: "Chris Casper",
        to: "Reading",
        fee: "EUR 300k",
        date: "1998/99",
        note: "Bek tengah muda pindah permanen setelah masa pinjaman."
      },
      {
        player: "Ben Thornley",
        to: "Huddersfield Town",
        fee: "EUR 200k",
        date: "1998/99",
        note: "Winger lulusan akademi keluar permanen."
      },
      {
        player: "Kevin Pilkington",
        to: "Port Vale",
        fee: "Free transfer",
        date: "1 Juli 1998",
        note: "Kiper cadangan dilepas pada awal musim."
      },
      {
        player: "Robert Trees",
        to: "Bristol Rovers",
        fee: "Free transfer",
        date: "1998/99",
        note: "Pemain muda keluar permanen."
      },
      {
        player: "Stuart Brightwell",
        to: "Hartlepool United",
        fee: "Free transfer",
        date: "1998/99",
        note: "Pemain muda keluar permanen."
      },
      {
        player: "Graeme Tomlinson",
        to: "Macclesfield Town",
        fee: "Tidak diketahui",
        date: "1998/99",
        note: "Penyerang muda keluar permanen; Transfermarkt tidak mencatat nominal fee."
      },
      {
        player: "Jordi Cruyff",
        to: "Celta de Vigo",
        fee: "Loan transfer",
        date: "1998/99",
        note: "Dipinjamkan ke Celta Vigo dan kembali pada akhir musim."
      },
      {
        player: "Terry Cooke",
        to: "Wrexham / Manchester City",
        fee: "Loan transfer",
        date: "1998/99",
        note: "Menjalani dua masa pinjaman pada musim ini."
      },
      {
        player: "Erik Nevland",
        to: "IFK Goteborg",
        fee: "Loan transfer",
        date: "1998/99",
        note: "Dipinjamkan ke IFK Goteborg sebelum kembali pada akhir musim."
      },
      {
        player: "Ronnie Wallwork",
        to: "Royal Antwerp",
        fee: "Loan transfer",
        date: "1998/99",
        note: "Dipinjamkan ke Royal Antwerp sampai 1 Mei 1999."
      },
      {
        player: "Danny Higginbotham",
        to: "Royal Antwerp",
        fee: "Loan transfer",
        date: "1998/99",
        note: "Dipinjamkan ke Royal Antwerp."
      },
      {
        player: "Alex Notman",
        to: "Aberdeen",
        fee: "Loan transfer",
        date: "1998/99",
        note: "Dipinjamkan ke Aberdeen."
      }
    ],
    commonStartingXI: {
      formation: "4-4-2",
      players: {
        GK: "Peter Schmeichel",
        RB: "Gary Neville",
        CB1: "Jaap Stam",
        CB2: "Ronny Johnsen",
        LB: "Denis Irwin",
        RM: "David Beckham",
        CM1: "Roy Keane",
        CM2: "Paul Scholes",
        LM: "Ryan Giggs",
        ST1: "Dwight Yorke",
        ST2: "Andy Cole"
      }
    },
    keyPlayers: [
      {
        name: "Dwight Yorke",
        position: "Striker",
        contribution: "51 main, 29 gol, 11 assist Premier League",
        story:
          "Yorke menjadi pembelian paling menentukan musim ini. Ia langsung cocok dengan Andy Cole, menjadi top skor klub di semua kompetisi, dan berbagi posisi top assist United di liga."
      },
      {
        name: "Andy Cole",
        position: "Striker",
        contribution: "50 main, 24 gol, 3 assist Premier League",
        story:
          "Cole membentuk duet tajam dengan Yorke. Pergerakannya ke ruang dan penyelesaiannya penting di liga serta dalam comeback semifinal Champions League melawan Juventus."
      },
      {
        name: "David Beckham",
        position: "Gelandang kanan",
        contribution: "55 main, 9 gol, 11 assist Premier League",
        story:
          "Beckham menjawab tekanan setelah Piala Dunia 1998 dengan musim besar. Crossing, bola mati, dan stamina kerjanya menjadi sumber kreativitas utama United."
      },
      {
        name: "Roy Keane",
        position: "Kapten, gelandang tengah",
        contribution: "55 main, 5 gol semua kompetisi",
        story:
          "Keane kembali dari cedera panjang dan mengangkat intensitas tim. Performanya di Turin melawan Juventus menjadi salah satu penampilan kapten paling terkenal dalam sejarah United."
      },
      {
        name: "Jaap Stam",
        position: "Bek tengah",
        contribution: "51 main, 1 gol, 1 assist Premier League",
        story:
          "Stam memberi United bek tengah dominan yang cepat, kuat, dan tenang. Kedatangannya membuat pertahanan siap menghadapi jadwal domestik dan Eropa yang berat."
      },
      {
        name: "Peter Schmeichel",
        position: "Kiper",
        contribution: "56 main; kapten final Champions League",
        story:
          "Di musim terakhirnya bersama United, Schmeichel tetap menjadi fondasi. Ia menyelamatkan penalti Bergkamp di semifinal FA Cup dan mengangkat trofi Champions League sebagai kapten di Camp Nou."
      },
      {
        name: "Teddy Sheringham",
        position: "Striker/second striker",
        contribution: "27 main, 5 gol, 3 assist Premier League",
        story:
          "Sheringham tidak selalu starter, tetapi mencetak gol pembuka final FA Cup dan gol penyama kedudukan final Champions League. Dampaknya pada dua final membuatnya abadi dalam cerita Treble."
      },
      {
        name: "Ole Gunnar Solskjaer",
        position: "Striker",
        contribution: "37 main, 18 gol, 1 assist Premier League",
        story:
          "Solskjaer menjadi super-sub paling terkenal musim ini: empat gol dari bangku cadangan melawan Nottingham Forest dan gol kemenangan final Champions League menit 90+3."
      }
    ],
    statistics: {
      leaguePosition: "1st Premier League",
      matches: 63,
      wins: 36,
      draws: 22,
      losses: 5,
      goalsFor: 128,
      goalsAgainst: 63,
      topScorer: "Dwight Yorke (29 gol semua kompetisi / 18 gol liga)",
      topAssist: "David Beckham & Dwight Yorke (11 assist Premier League)",
      mostAppearances: "Peter Schmeichel (56 main)"
    },
    importantMoments: [
      {
        month: "9 Agustus 1998",
        title: "Charity Shield kalah dari Arsenal",
        description:
          "United membuka musim dengan kekalahan 0-3 dari Arsenal di Wembley.",
        impact:
          "Menjadi pengingat bahwa Arsenal masih rival utama dan United perlu memperbaiki diri setelah musim 1997/98."
      },
      {
        month: "20 Agustus 1998",
        title: "Dwight Yorke datang dari Aston Villa",
        description:
          "Yorke bergabung dengan biaya rekor klub dan segera menjadi pasangan ideal Andy Cole.",
        impact:
          "Mengubah struktur serangan United dan memberi Ferguson empat striker kelas atas."
      },
      {
        month: "6 Februari 1999",
        title: "Nottingham Forest dihancurkan 8-1",
        description:
          "United menang besar di City Ground; Solskjaer mencetak empat gol setelah masuk sebagai pemain pengganti.",
        impact:
          "Menjadi simbol kedalaman skuad dan daya ledak serangan United."
      },
      {
        month: "14 April 1999",
        title: "Gol solo Ryan Giggs melawan Arsenal",
        description:
          "Dalam replay semifinal FA Cup, Schmeichel menyelamatkan penalti Bergkamp, lalu Giggs mencetak gol solo di extra time.",
        impact:
          "Membawa United ke final FA Cup dan menjadi salah satu momen paling ikonik dalam sejarah kompetisi."
      },
      {
        month: "21 April 1999",
        title: "Comeback di Turin",
        description:
          "United tertinggal 0-2 dari Juventus, lalu bangkit lewat Keane, Yorke, dan Cole untuk menang 3-2.",
        impact:
          "Mengantar United ke final Champions League pertama sejak 1968 dan menegaskan mental comeback tim."
      },
      {
        month: "16 Mei 1999",
        title: "Premier League diamankan",
        description:
          "United mengalahkan Tottenham 2-1 pada laga terakhir liga melalui gol Beckham dan Cole.",
        impact:
          "Trofi pertama Treble diamankan dengan keunggulan satu poin atas Arsenal."
      },
      {
        month: "22 Mei 1999",
        title: "FA Cup dimenangkan",
        description:
          "United mengalahkan Newcastle United 2-0 di Wembley melalui gol Sheringham dan Scholes.",
        impact:
          "Trofi kedua Treble membuat United tinggal satu laga dari sejarah Eropa."
      },
      {
        month: "26 Mei 1999",
        title: "Camp Nou dan dua gol injury time",
        description:
          "Sheringham menyamakan skor pada 90+1 dan Solskjaer mencetak gol kemenangan pada 90+3 melawan Bayern Munich.",
        impact:
          "Mengunci UEFA Champions League dan menyempurnakan Treble Winners 1998/99."
      }
    ],
    additionalInfo: [
      "Rekor liga United: 38 pertandingan, 22 menang, 13 seri, 3 kalah, gol 80:37, 79 poin.",
      "Rekor semua kompetisi MUFCInfo: 63 pertandingan, 36 menang, 22 seri, 5 kalah, gol 128:63.",
      "MUFCInfo mencatat Dwight Yorke sebagai top skor United dengan 29 gol dan Peter Schmeichel sebagai pemain dengan penampilan terbanyak, 56 main.",
      "Assist yang diisi pada tabel skuad adalah assist Premier League dari StatMuse, bukan semua kompetisi.",
      "StatMuse mencatat David Beckham dan Dwight Yorke sama-sama memimpin assist Premier League United dengan 11 assist, diikuti Paul Scholes 6, Andy Cole 3, Gary Neville 3, Jesper Blomqvist 3, Nicky Butt 3, dan Teddy Sheringham 3.",
      "Transfermarkt mencatat pengeluaran transfer United 1998/99 sebesar EUR 44.75m dan pemasukan sebesar EUR 4.50m.",
      "Transfermarkt mencatat transfer masuk utama: Dwight Yorke EUR 19.25m, Jaap Stam EUR 17.00m, Jesper Blomqvist EUR 7.00m, dan Bojan Djordjic EUR 1.50m.",
      "Transfermarkt mencatat transfer keluar permanen utama: Gary Pallister EUR 2.80m, Phil Mulryne EUR 750k, Grant Brebner EUR 450k, Chris Casper EUR 300k, dan Ben Thornley EUR 200k.",
      "United By Numbers mencatat nomor skuad utama 1998/99: Schmeichel 1, Gary Neville 2, Irwin 3, Stam 6, Beckham 7, Cole 9, Sheringham 10, Giggs 11, Keane 16, Scholes 18, Yorke 19, dan Solskjaer 20.",
      "John Curtis memakai nomor 13 domestik tetapi nomor 29 di Champions League; Wes Brown memakai nomor 24 domestik tetapi nomor 30 di Champions League.",
      "Final Champions League dimainkan tanpa Roy Keane dan Paul Scholes karena skorsing; Beckham dan Butt bermain di tengah, Giggs di kanan, dan Blomqvist di kiri.",
      "League Cup berakhir di perempat final setelah United kalah 1-3 dari Tottenham Hotspur.",
      "United tidak kalah di Premier League setelah kekalahan 2-3 dari Middlesbrough pada 19 Desember 1998 sampai akhir musim.",
      "Schmeichel meninggalkan United setelah musim ini dan bergabung dengan Sporting CP.",
      "Sir Alex Ferguson dianugerahi knighthood setelah keberhasilan Treble."
    ],
    featured: true
  },
  {
    id: "1999-00",
    label: "1999/00",
    title: "Manchester United Musim 1999/00",
    era: "Era Treble",
    managers: ["Sir Alex Ferguson"],
    competitions: [
      "Premier League",
      "League Cup",
      "UEFA Champions League",
      "Charity Shield",
      "UEFA Super Cup",
      "Intercontinental Cup",
      "FIFA Club World Championship"
    ],
    leaguePosition: "1st Premier League",
    trophies: ["Premier League", "Intercontinental Cup"],
    summary:
      "Musim setelah Treble membuktikan United tetap menjadi kekuatan terbesar Inggris. Tanpa Peter Schmeichel, Ferguson melewati musim dengan masalah kiper, tetapi tim tetap menjuarai Premier League dengan 91 poin, 97 gol, dan margin 18 poin atas Arsenal.",
    story: [
      "United memasuki 1999/00 sebagai juara Treble. Beban terbesar datang dari kepergian Peter Schmeichel, kapten final Champions League 1999, yang digantikan Mark Bosnich, Massimo Taibi, dan Raimond van der Gouw secara bergantian.",
      "Ferguson tidak mengubah fondasi utama tim: Jaap Stam tetap memimpin pertahanan, Roy Keane dan Paul Scholes mengendalikan tengah, David Beckham dan Ryan Giggs menyediakan lebar, sementara Dwight Yorke dan Andy Cole tetap menjadi duet utama.",
      "Premier League menjadi panggung dominasi. United menang 28 kali dari 38 laga, mencetak 97 gol, mengumpulkan 91 poin, dan finis 18 poin di atas Arsenal.",
      "Di Eropa, United tidak mampu mempertahankan Champions League. Mereka lolos sampai perempat final sebelum kalah agregat 2-3 dari Real Madrid, termasuk laga leg kedua terkenal di Old Trafford.",
      "Musim ini juga unik karena United tidak mempertahankan FA Cup. Klub menarik diri untuk mengikuti FIFA Club World Championship 2000 di Brasil, keputusan yang kemudian menjadi kontroversi besar.",
      "Trofi internasional datang lewat Intercontinental Cup. United mengalahkan Palmeiras 1-0 di Tokyo melalui gol Roy Keane dan menjadi klub Inggris pertama yang memenangkan kompetisi tersebut.",
      "Walau tidak seikonik 1998/99, musim ini menegaskan bahwa Treble bukan akhir dinasti. United tetap menjadi tim paling konsisten di Inggris dan sudah mulai mencari solusi jangka panjang di posisi kiper."
    ],
    squad: [
      {
        name: "Mark Bosnich",
        shirtNumber: 1,
        position: "Kiper",
        age: 27,
        country: "Australia",
        appearances: 35,
        goals: 0,
        assists: 0,
        status: "Pemain utama"
      },
      {
        name: "Gary Neville",
        shirtNumber: 2,
        position: "Bek kanan",
        age: 24,
        country: "England",
        appearances: 35,
        goals: 0,
        assists: 3,
        status: "Pemain utama"
      },
      {
        name: "Denis Irwin",
        shirtNumber: 3,
        position: "Bek kiri/bek kanan",
        age: 33,
        country: "Republic of Ireland",
        appearances: 42,
        goals: 3,
        assists: 1,
        status: "Pemain utama"
      },
      {
        name: "David May",
        shirtNumber: 4,
        position: "Bek tengah",
        age: 29,
        country: "England",
        appearances: 3,
        goals: 0,
        assists: 0,
        status: "Cadangan"
      },
      {
        name: "Ronny Johnsen",
        shirtNumber: 5,
        position: "Bek tengah/gelandang bertahan",
        age: 30,
        country: "Norway",
        appearances: 3,
        goals: 0,
        assists: 0,
        status: "Cadangan"
      },
      {
        name: "Jaap Stam",
        shirtNumber: 6,
        position: "Bek tengah",
        age: 27,
        country: "Netherlands",
        appearances: 51,
        goals: 0,
        assists: 1,
        status: "Pemain utama"
      },
      {
        name: "David Beckham",
        shirtNumber: 7,
        position: "Gelandang kanan",
        age: 24,
        country: "England",
        appearances: 48,
        goals: 8,
        assists: 15,
        status: "Pemain utama"
      },
      {
        name: "Nicky Butt",
        shirtNumber: 8,
        position: "Gelandang tengah",
        age: 24,
        country: "England",
        appearances: 42,
        goals: 4,
        assists: 3,
        status: "Pemain utama"
      },
      {
        name: "Andy Cole",
        shirtNumber: 9,
        position: "Striker",
        age: 27,
        country: "England",
        appearances: 45,
        goals: 22,
        assists: 4,
        status: "Pemain utama"
      },
      {
        name: "Teddy Sheringham",
        shirtNumber: 10,
        position: "Striker/second striker",
        age: 33,
        country: "England",
        appearances: 41,
        goals: 6,
        assists: 6,
        status: "Cadangan"
      },
      {
        name: "Ryan Giggs",
        shirtNumber: 11,
        position: "Winger kiri",
        age: 25,
        country: "Wales",
        appearances: 44,
        goals: 7,
        assists: 12,
        status: "Pemain utama"
      },
      {
        name: "Phil Neville",
        shirtNumber: 12,
        position: "Bek kiri/bek kanan/gelandang",
        age: 22,
        country: "England",
        appearances: 43,
        goals: 0,
        assists: 2,
        status: "Pemain utama"
      },
      {
        name: "John Curtis",
        shirtNumber: 13,
        position: "Bek kanan",
        age: 20,
        country: "England",
        appearances: 3,
        goals: 0,
        assists: 0,
        status: "Pemain muda"
      },
      {
        name: "Jordi Cruyff",
        shirtNumber: 14,
        position: "Gelandang serang/forward",
        age: 25,
        country: "Netherlands",
        appearances: 17,
        goals: 3,
        assists: 0,
        status: "Cadangan"
      },
      {
        name: "Jesper Blomqvist",
        shirtNumber: 15,
        position: "Gelandang kiri/winger kiri",
        age: 25,
        country: "Sweden",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Cadangan"
      },
      {
        name: "Roy Keane",
        shirtNumber: 16,
        position: "Gelandang tengah, kapten",
        age: 28,
        country: "Republic of Ireland",
        appearances: 45,
        goals: 12,
        assists: 1,
        status: "Pemain utama"
      },
      {
        name: "Raimond van der Gouw",
        shirtNumber: 17,
        position: "Kiper",
        age: 36,
        country: "Netherlands",
        appearances: 23,
        goals: 0,
        assists: 0,
        status: "Pemain utama"
      },
      {
        name: "Paul Scholes",
        shirtNumber: 18,
        position: "Gelandang tengah/gelandang serang",
        age: 24,
        country: "England",
        appearances: 45,
        goals: 12,
        assists: 5,
        status: "Pemain utama"
      },
      {
        name: "Dwight Yorke",
        shirtNumber: 19,
        position: "Striker",
        age: 27,
        country: "Trinidad and Tobago",
        appearances: 47,
        goals: 24,
        assists: 3,
        status: "Pemain utama"
      },
      {
        name: "Ole Gunnar Solskjaer",
        shirtNumber: 20,
        position: "Striker",
        age: 26,
        country: "Norway",
        appearances: 46,
        goals: 15,
        assists: 7,
        status: "Cadangan"
      },
      {
        name: "Henning Berg",
        shirtNumber: 21,
        position: "Bek kanan/bek tengah",
        age: 29,
        country: "Norway",
        appearances: 37,
        goals: 1,
        assists: 0,
        status: "Pemain utama"
      },
      {
        name: "Michael Clegg",
        shirtNumber: 23,
        position: "Bek kanan",
        age: 22,
        country: "England",
        appearances: 5,
        goals: 0,
        assists: 0,
        status: "Pemain muda"
      },
      {
        name: "Wes Brown",
        shirtNumber: 24,
        position: "Bek tengah/bek kanan",
        age: 19,
        country: "England",
        appearances: 0,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Quinton Fortune",
        shirtNumber: 25,
        position: "Gelandang kiri/bek kiri",
        age: 22,
        country: "South Africa",
        appearances: 12,
        goals: 4,
        assists: 1,
        status: "Cadangan"
      },
      {
        name: "Massimo Taibi",
        shirtNumber: 26,
        position: "Kiper",
        age: 29,
        country: "Italy",
        appearances: 4,
        goals: 0,
        assists: 0,
        status: "Cadangan"
      },
      {
        name: "Mikael Silvestre",
        shirtNumber: 27,
        position: "Bek kiri/bek tengah",
        age: 22,
        country: "France",
        appearances: 38,
        goals: 0,
        assists: 0,
        status: "Pemain utama"
      },
      {
        name: "Danny Higginbotham",
        shirtNumber: 28,
        position: "Bek tengah/bek kiri",
        age: 20,
        country: "England",
        appearances: 6,
        goals: 0,
        assists: 0,
        status: "Pemain muda"
      },
      {
        name: "Ronnie Wallwork",
        shirtNumber: 30,
        position: "Gelandang tengah/bek",
        age: 21,
        country: "England",
        appearances: 7,
        goals: 0,
        assists: 0,
        status: "Pemain muda"
      },
      {
        name: "Nick Culkin",
        shirtNumber: 31,
        position: "Kiper",
        age: 21,
        country: "England",
        appearances: 1,
        goals: 0,
        assists: 0,
        status: "Pemain muda"
      },
      {
        name: "Mark Wilson",
        shirtNumber: 33,
        position: "Gelandang tengah",
        age: 20,
        country: "England",
        appearances: 7,
        goals: 0,
        assists: 0,
        status: "Pemain muda"
      },
      {
        name: "Jonathan Greening",
        shirtNumber: 34,
        position: "Gelandang tengah",
        age: 20,
        country: "England",
        appearances: 9,
        goals: 0,
        assists: 0,
        status: "Pemain muda"
      },
      {
        name: "John O'Shea",
        shirtNumber: 37,
        position: "Bek tengah",
        age: 18,
        country: "Republic of Ireland",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "David Healy",
        shirtNumber: 38,
        position: "Striker",
        age: 20,
        country: "Northern Ireland",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Luke Chadwick",
        shirtNumber: 39,
        position: "Gelandang serang",
        age: 18,
        country: "England",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Richard Wellens",
        shirtNumber: 41,
        position: "Gelandang tengah",
        age: 19,
        country: "England",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Michael Twiss",
        shirtNumber: 42,
        position: "Gelandang kanan/forward",
        age: 21,
        country: "England",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      },
      {
        name: "Paul Rachubka",
        shirtNumber: NO_PERMANENT_SQUAD_NUMBER,
        position: "Kiper",
        age: 18,
        country: "England",
        appearances: 1,
        goals: 0,
        assists: NOT_AVAILABLE,
        status: "Pemain muda"
      }
    ],
    transfersIn: [
      {
        player: "Mark Bosnich",
        from: "Aston Villa",
        fee: "Free transfer",
        date: "2 Juni 1999",
        note: "Datang sebagai pengganti Peter Schmeichel setelah kontraknya di Aston Villa berakhir."
      },
      {
        player: "Quinton Fortune",
        from: "Atletico Madrid",
        fee: "EUR 2.25m",
        date: "21 Agustus 1999",
        note: "Sumber Inggris mencatat GBP 1.5m; tabel memakai nominal euro Transfermarkt."
      },
      {
        player: "Massimo Taibi",
        from: "Venezia",
        fee: "EUR 5.30m",
        date: "31 Agustus 1999",
        note: "Didatangkan setelah awal musim posisi kiper tidak stabil; sumber Inggris mencatat sekitar GBP 4.5m."
      },
      {
        player: "Mikael Silvestre",
        from: "Inter Milan",
        fee: "EUR 5.70m",
        date: "10 September 1999",
        note: "Bek kiri/bek tengah muda yang langsung mendapat menit besar pada musim debutnya."
      },
      {
        player: "Fabien Barthez",
        from: "AS Monaco",
        fee: "EUR 11.70m",
        date: "21 Mei 2000",
        note: "Kesepakatan akhir musim untuk 2000/01; sumber Inggris mencatat GBP 7.8m, dikonversi sekitar EUR 11.7m."
      }
    ],
    transfersOut: [
      {
        player: "Peter Schmeichel",
        to: "Sporting CP",
        fee: "Free transfer",
        date: "1 Juli 1999",
        note: "Pergi setelah final Champions League 1999 dan meninggalkan lubang besar di posisi kiper."
      },
      {
        player: "Erik Nevland",
        to: "Viking FK",
        fee: "EUR 350k",
        date: "20 Desember 1999",
        note: "Kembali ke Norwegia setelah dua musim di United; Transfermarkt mencatat fee EUR 350k."
      },
      {
        player: "Richard Wellens",
        to: "Blackpool",
        fee: "Tidak diketahui",
        date: "23 Maret 2000",
        note: "Sumber musim mencatat nominal fee, tetapi nominal pasti tidak tersedia di data yang dipakai."
      },
      {
        player: "John Curtis",
        to: "Blackburn Rovers",
        fee: "EUR 2.25m",
        date: "31 Mei 2000",
        note: "Sumber Inggris mencatat GBP 1.5m; nominal dikonversi sekitar EUR 2.25m."
      },
      {
        player: "Michael Twiss",
        to: "Port Vale",
        fee: "Free transfer",
        date: "25 Juli 2000",
        note: "Keluar setelah musim 1999/00 dan bergabung dengan Port Vale."
      },
      {
        player: "John Curtis",
        to: "Barnsley",
        fee: "Loan transfer",
        date: "1999/00",
        note: "Dipinjamkan ke Barnsley sebelum kembali pada 1 Mei 2000."
      },
      {
        player: "Massimo Taibi",
        to: "Reggina",
        fee: "Loan transfer",
        date: "Januari 2000",
        note: "Kembali ke Italia dengan status pinjaman setelah hanya empat penampilan untuk United."
      },
      {
        player: "David May",
        to: "Huddersfield Town",
        fee: "Loan transfer",
        date: "1999/00",
        note: "Dipinjamkan karena kesempatan bermain sangat terbatas."
      },
      {
        player: "Terry Cooke",
        to: "Wigan Athletic",
        fee: "Loan transfer",
        date: "1999/00",
        note: "Winger akademi menjalani masa pinjaman di Wigan Athletic."
      },
      {
        player: "Michael Clegg",
        to: "Wigan Athletic / Ipswich Town",
        fee: "Loan transfer",
        date: "1999/00",
        note: "Menjalani dua masa pinjaman pada musim ini."
      },
      {
        player: "Nick Culkin",
        to: "Hull City",
        fee: "Loan transfer",
        date: "1999/00",
        note: "Kiper muda dipinjamkan ke Hull City."
      },
      {
        player: "David Healy",
        to: "Port Vale",
        fee: "Loan transfer",
        date: "1999/00",
        note: "Dipinjamkan ke Port Vale dan kembali pada akhir musim."
      },
      {
        player: "Alex Notman",
        to: "Aberdeen / Sheffield United",
        fee: "Loan transfer",
        date: "1999/00",
        note: "Menjalani masa pinjaman di Skotlandia dan Inggris."
      },
      {
        player: "John O'Shea",
        to: "Bournemouth",
        fee: "Loan transfer",
        date: "1999/00",
        note: "Dipinjamkan untuk mendapatkan pengalaman senior."
      }
    ],
    commonStartingXI: {
      formation: "4-4-2",
      players: {
        GK: "Mark Bosnich",
        RB: "Gary Neville",
        CB1: "Jaap Stam",
        CB2: "Henning Berg",
        LB: "Denis Irwin",
        RM: "David Beckham",
        CM1: "Roy Keane",
        CM2: "Paul Scholes",
        LM: "Ryan Giggs",
        ST1: "Dwight Yorke",
        ST2: "Andy Cole"
      }
    },
    keyPlayers: [
      {
        name: "Dwight Yorke",
        position: "Striker",
        contribution: "47 main, 24 gol semua kompetisi; 20 gol Premier League",
        story:
          "Yorke tetap menjadi top skor United. Ia menjaga produktivitas duet dengan Cole dan menjadi pencetak gol liga terbanyak klub."
      },
      {
        name: "Andy Cole",
        position: "Striker",
        contribution: "45 main, 22 gol semua kompetisi; 19 gol Premier League",
        story:
          "Cole tetap tajam sebagai penyerang ruang. Total 22 golnya membuat United punya dua striker yang sama-sama melewati 20 gol semua kompetisi."
      },
      {
        name: "David Beckham",
        position: "Gelandang kanan",
        contribution: "48 main, 8 gol semua kompetisi, 15 assist Premier League",
        story:
          "Beckham menjadi kreator utama liga. Crossing dan bola matinya mengangkat volume serangan United sampai 97 gol Premier League."
      },
      {
        name: "Ryan Giggs",
        position: "Winger kiri",
        contribution: "44 main, 7 gol semua kompetisi, 12 assist Premier League",
        story:
          "Giggs memberi keseimbangan sisi kiri dan menjadi kreator terbesar kedua United di Premier League menurut StatMuse."
      },
      {
        name: "Roy Keane",
        position: "Kapten, gelandang tengah",
        contribution: "45 main, 12 gol semua kompetisi",
        story:
          "Keane menjalani salah satu musim paling produktifnya. Golnya melawan Palmeiras juga mengunci Intercontinental Cup."
      },
      {
        name: "Paul Scholes",
        position: "Gelandang tengah/gelandang serang",
        contribution: "45 main, 12 gol semua kompetisi, 5 assist Premier League",
        story:
          "Scholes menjadi sumber gol dari lini kedua dan memberi United keunggulan besar ketika lawan terlalu fokus pada duet Yorke-Cole."
      },
      {
        name: "Jaap Stam",
        position: "Bek tengah",
        contribution: "51 main; menit Premier League terbanyak di skuad",
        story:
          "Stam tetap menjadi jangkar pertahanan di musim ketika posisi kiper tidak stabil. Ia menjadi pemain paling banyak menit United di liga."
      },
      {
        name: "Mikael Silvestre",
        position: "Bek kiri/bek tengah",
        contribution: "38 main semua kompetisi",
        story:
          "Silvestre langsung menjadi rotasi penting, terutama karena cedera Ronny Johnsen dan kebutuhan kedalaman di kiri serta tengah pertahanan."
      }
    ],
    statistics: {
      leaguePosition: "1st Premier League",
      matches: 59,
      wins: 38,
      draws: 11,
      losses: 10,
      goalsFor: 124,
      goalsAgainst: 66,
      topScorer: "Dwight Yorke (24 gol semua kompetisi / 20 gol liga)",
      topAssist: "David Beckham (15 assist Premier League)",
      mostAppearances: "Jaap Stam (51 main)"
    },
    importantMoments: [
      {
        month: "22 Agustus 1999",
        title: "Roy Keane menaklukkan Arsenal",
        description:
          "United menang 2-1 di Highbury lewat dua gol Roy Keane pada awal musim Premier League.",
        impact:
          "Memberi sinyal bahwa juara Treble tetap siap mempertahankan liga dari rival utama."
      },
      {
        month: "31 Agustus 1999",
        title: "Massimo Taibi datang dari Venezia",
        description:
          "United membeli Taibi di tengah ketidakpastian posisi kiper setelah Bosnich cedera dan Schmeichel pergi.",
        impact:
          "Menunjukkan bahwa pengganti Schmeichel belum benar-benar ditemukan."
      },
      {
        month: "3 Oktober 1999",
        title: "Kalah 0-5 dari Chelsea",
        description:
          "United mengalami kekalahan liga terbesar musim ini di Stamford Bridge.",
        impact:
          "Menjadi pengingat bahwa transisi kiper dan konsentrasi bertahan masih menjadi masalah."
      },
      {
        month: "30 November 1999",
        title: "Intercontinental Cup dimenangkan",
        description:
          "United mengalahkan Palmeiras 1-0 di Tokyo melalui gol Roy Keane.",
        impact:
          "Menjadikan United klub Inggris pertama yang memenangkan Intercontinental Cup."
      },
      {
        month: "Januari 2000",
        title: "FIFA Club World Championship di Brasil",
        description:
          "United bermain di grup melawan Necaxa, Vasco da Gama, dan South Melbourne, lalu gagal lolos ke final.",
        impact:
          "Turnamen ini membuat United tidak mempertahankan FA Cup dan memicu kritik besar terhadap keputusan klub."
      },
      {
        month: "11 Maret 2000",
        title: "Hat-trick Yorke melawan Derby County",
        description:
          "Yorke mencetak tiga gol dalam kemenangan 3-1 di Old Trafford.",
        impact:
          "Menegaskan statusnya sebagai penyerang utama dan top skor United musim ini."
      },
      {
        month: "19 April 2000",
        title: "Real Madrid menyingkirkan United",
        description:
          "Setelah 0-0 di Bernabeu, United kalah 2-3 di Old Trafford pada leg kedua perempat final Champions League.",
        impact:
          "Mengakhiri usaha mempertahankan gelar Eropa dan menjadi salah satu laga besar awal rivalitas United-Real Madrid era modern."
      },
      {
        month: "14 Mei 2000",
        title: "Liga ditutup dengan 91 poin",
        description:
          "United menang 1-0 atas Aston Villa pada laga terakhir Premier League.",
        impact:
          "Mengunci musim liga dengan margin 18 poin atas Arsenal."
      }
    ],
    additionalInfo: [
      "Rekor liga United: 38 pertandingan, 28 menang, 7 seri, 3 kalah, gol 97:45, 91 poin.",
      "Rekor semua kompetisi MUFCInfo: 59 pertandingan, 38 menang, 11 seri, 10 kalah, gol 124:66.",
      "Assist yang diisi pada tabel skuad adalah assist Premier League dari StatMuse, bukan semua kompetisi.",
      "StatMuse mencatat top assist Premier League United 1999/00: David Beckham 15, Ryan Giggs 12, Ole Gunnar Solskjaer 7, Teddy Sheringham 6, Paul Scholes 5, Andy Cole 4, Gary Neville 3, Nicky Butt 3, dan Dwight Yorke 3.",
      "Transfermarkt mencatat pengeluaran transfer United 1999/00 sebesar EUR 13.25m dan pemasukan sebesar EUR 350k.",
      "Transfermarkt mencatat transfer masuk utama 1999/00: Mikael Silvestre EUR 5.70m, Massimo Taibi EUR 5.30m, Quinton Fortune EUR 2.25m, dan Mark Bosnich free transfer.",
      "Fabien Barthez disepakati pada 21 Mei 2000 untuk musim 2000/01; fee GBP 7.8m ditulis sebagai sekitar EUR 11.70m dan tidak dimasukkan ke total Transfermarkt 1999/00.",
      "United By Numbers mencatat nomor skuad utama 1999/00: Bosnich 1, Gary Neville 2, Irwin 3, May 4, Johnsen 5, Stam 6, Beckham 7, Butt 8, Cole 9, Sheringham 10, Giggs 11, Keane 16, Scholes 18, Yorke 19, Solskjaer 20, Berg 21, Fortune 25, Taibi 26, dan Silvestre 27.",
      "Beberapa pemain memakai nomor berbeda khusus FIFA Club World Championship: Fortune 22, Silvestre 5, Higginbotham 4, Wallwork 23, Mark Wilson 18, Jonathan Greening 15, dan Paul Rachubka 13.",
      "United tidak mengikuti FA Cup 1999/00 karena mengikuti FIFA Club World Championship di Brasil.",
      "League Cup berakhir di ronde ketiga setelah United kalah dari Aston Villa.",
      "Champions League berakhir di perempat final setelah United disingkirkan Real Madrid dengan agregat 2-3.",
      "UEFA Super Cup berakhir sebagai runner-up setelah kalah 0-1 dari Lazio.",
      "Intercontinental Cup dimenangkan lewat kemenangan 1-0 atas Palmeiras pada 30 November 1999.",
      "Masalah kiper menjadi tema besar musim: Bosnich tampil 35 kali, Van der Gouw 23 kali, dan Taibi hanya 4 kali sebelum dipinjamkan ke Reggina."
    ],
    featured: false
  },
  {
    id: "2000-01",
    label: "2000/01",
    title: "Manchester United Musim 2000/01",
    era: "Era Treble",
    managers: ["Sir Alex Ferguson"],
    competitions: [
      "Premier League",
      "FA Cup",
      "League Cup",
      "UEFA Champions League",
      "Charity Shield"
    ],
    leaguePosition: "1st Premier League",
    trophies: ["Premier League"],
    summary:
      "United menyelesaikan hat-trick juara Premier League: tiga gelar liga beruntun dari 1998/99 sampai 2000/01. Fabien Barthez memperbaiki krisis kiper, Teddy Sheringham menjalani musim terbaiknya di United, tetapi Bayern Munich menghentikan ambisi Eropa di perempat final Champions League.",
    story: [
      "Setelah dominasi 1999/00, Ferguson memperbaiki posisi kiper dengan Fabien Barthez. Barthez memberi United karakter baru di belakang: flamboyan, berani, dan jauh lebih meyakinkan daripada situasi Bosnich-Taibi musim sebelumnya.",
      "Di liga, United tetap terlalu kuat untuk rival domestik. Mereka menjuarai Premier League dengan 80 poin, unggul 10 poin dari Arsenal, walau performa menurun setelah gelar praktis aman.",
      "Momen liga terbesar datang pada 25 Februari 2001 ketika United menghancurkan Arsenal 6-1 di Old Trafford. Dwight Yorke mencetak hat-trick babak pertama dan United semakin menjauh dari rival utama.",
      "Teddy Sheringham menjadi cerita personal terbesar musim ini. Di usia 34 tahun, ia mencetak 21 gol semua kompetisi, menjadi top skor klub, lalu memenangi PFA Player of the Year dan FWA Footballer of the Year.",
      "Di Champions League, United lolos dari dua fase grup, tetapi Bayern Munich membalas luka final 1999 dengan menang 1-0 di Old Trafford dan 2-1 di Munich pada perempat final.",
      "FA Cup berakhir cepat oleh West Ham di Old Trafford lewat gol Paolo Di Canio, sementara League Cup juga berhenti di ronde keempat. Musim ini dominan di liga, tetapi tidak lengkap di kompetisi lain.",
      "Akhir musim mulai menandai transisi. Henning Berg, Mark Bosnich, David Healy, dan Teddy Sheringham pergi, sementara transfer Ruud van Nistelrooy sudah disiapkan untuk 2001/02."
    ],
    squad: [
      { name: "Fabien Barthez", shirtNumber: 1, position: "Kiper", age: 29, country: "France", appearances: 44, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Gary Neville", shirtNumber: 2, position: "Bek kanan", age: 25, country: "England", appearances: 49, goals: 1, assists: 1, status: "Pemain utama" },
      { name: "Denis Irwin", shirtNumber: 3, position: "Bek kiri/bek kanan", age: 34, country: "Republic of Ireland", appearances: 30, goals: 2, assists: 2, status: "Pemain utama" },
      { name: "David May", shirtNumber: 4, position: "Bek tengah", age: 30, country: "England", appearances: 2, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Ronny Johnsen", shirtNumber: 5, position: "Bek tengah/gelandang bertahan", age: 31, country: "Norway", appearances: 17, goals: 1, assists: 0, status: "Cadangan" },
      { name: "Jaap Stam", shirtNumber: 6, position: "Bek tengah", age: 28, country: "Netherlands", appearances: 23, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "David Beckham", shirtNumber: 7, position: "Gelandang kanan", age: 25, country: "England", appearances: 46, goals: 9, assists: 12, status: "Pemain utama" },
      { name: "Nicky Butt", shirtNumber: 8, position: "Gelandang tengah", age: 25, country: "England", appearances: 41, goals: 4, assists: 2, status: "Pemain utama" },
      { name: "Andy Cole", shirtNumber: 9, position: "Striker", age: 28, country: "England", appearances: 31, goals: 13, assists: 3, status: "Pemain utama" },
      { name: "Teddy Sheringham", shirtNumber: 10, position: "Striker/second striker", age: 34, country: "England", appearances: 43, goals: 21, assists: 6, status: "Pemain utama" },
      { name: "Ryan Giggs", shirtNumber: 11, position: "Winger kiri", age: 26, country: "Wales", appearances: 45, goals: 7, assists: 8, status: "Pemain utama" },
      { name: "Phil Neville", shirtNumber: 12, position: "Bek kiri/bek kanan/gelandang", age: 23, country: "England", appearances: 38, goals: 1, assists: 0, status: "Pemain utama" },
      { name: "Mark Bosnich", shirtNumber: 13, position: "Kiper", age: 28, country: "Australia", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Cadangan" },
      { name: "Andy Goram", shirtNumber: 14, position: "Kiper", age: 36, country: "Scotland", appearances: 2, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Jesper Blomqvist", shirtNumber: 15, position: "Gelandang kiri/winger kiri", age: 26, country: "Sweden", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Cadangan" },
      { name: "Roy Keane", shirtNumber: 16, position: "Gelandang tengah, kapten", age: 29, country: "Republic of Ireland", appearances: 44, goals: 3, assists: 7, status: "Pemain utama" },
      { name: "Raimond van der Gouw", shirtNumber: 17, position: "Kiper", age: 37, country: "Netherlands", appearances: 15, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Paul Scholes", shirtNumber: 18, position: "Gelandang tengah/gelandang serang", age: 25, country: "England", appearances: 45, goals: 12, assists: 5, status: "Pemain utama" },
      { name: "Dwight Yorke", shirtNumber: 19, position: "Striker", age: 28, country: "Trinidad and Tobago", appearances: 38, goals: 12, assists: 4, status: "Cadangan" },
      { name: "Ole Gunnar Solskjaer", shirtNumber: 20, position: "Striker/winger kanan", age: 27, country: "Norway", appearances: 47, goals: 13, assists: 4, status: "Cadangan" },
      { name: "Henning Berg", shirtNumber: 21, position: "Bek kanan/bek tengah", age: 30, country: "Norway", appearances: 1, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Ronnie Wallwork", shirtNumber: 22, position: "Bek/gelandang", age: 22, country: "England", appearances: 16, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Michael Clegg", shirtNumber: 23, position: "Bek kanan", age: 23, country: "England", appearances: 2, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Wes Brown", shirtNumber: 24, position: "Bek tengah/bek kanan", age: 20, country: "England", appearances: 41, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Quinton Fortune", shirtNumber: 25, position: "Gelandang kiri/bek kiri", age: 23, country: "South Africa", appearances: 11, goals: 2, assists: 0, status: "Cadangan" },
      { name: "Mark Wilson", shirtNumber: 26, position: "Gelandang tengah", age: 21, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Mikael Silvestre", shirtNumber: 27, position: "Bek kiri/bek tengah", age: 23, country: "France", appearances: 47, goals: 1, assists: 2, status: "Pemain utama" },
      { name: "Michael Stewart", shirtNumber: 28, position: "Gelandang tengah", age: 19, country: "Scotland", appearances: 5, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "John O'Shea", shirtNumber: 30, position: "Bek tengah/bek kiri", age: 19, country: "Republic of Ireland", appearances: 2, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Bojan Djordjic", shirtNumber: 32, position: "Gelandang/winger", age: 18, country: "Sweden", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Paul Rachubka", shirtNumber: 33, position: "Kiper", age: 19, country: "England", appearances: 2, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Jonathan Greening", shirtNumber: 34, position: "Gelandang tengah", age: 21, country: "England", appearances: 11, goals: 0, assists: 1, status: "Pemain muda" },
      { name: "David Healy", shirtNumber: 35, position: "Striker", age: 21, country: "Northern Ireland", appearances: 2, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Luke Chadwick", shirtNumber: 36, position: "Gelandang kanan/gelandang serang", age: 19, country: "England", appearances: 22, goals: 2, assists: 0, status: "Pemain muda" },
      { name: "Danny Webber", shirtNumber: 37, position: "Striker", age: 18, country: "England", appearances: 1, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" }
    ],
    transfersIn: [
      { player: "Fabien Barthez", from: "AS Monaco", fee: "EUR 11.70m", date: "1 Juli 2000", note: "Transfer disepakati pada akhir musim sebelumnya dan menjadi rekrutan utama untuk 2000/01; sumber Inggris mencatat GBP 7.8m." },
      { player: "Andy Goram", from: "Motherwell", fee: "Loan transfer", date: "22 Maret 2001", note: "Kiper veteran dipinjam sebagai kedalaman darurat menjelang akhir musim." },
      { player: "Ruud van Nistelrooy", from: "PSV Eindhoven", fee: "EUR 28.50m", date: "23 April 2001", note: "Transfer rekor Inggris GBP 19m disepakati pada April 2001 dan efektif untuk skuad 2001/02." },
      { player: "Lee Roche", from: "Wrexham", fee: "End of loan", date: "31 Mei 2001", note: "Kembali dari pinjaman; tidak tampil di tim utama musim ini." },
      { player: "Michael Stewart", from: "Royal Antwerp", fee: "End of loan", date: "31 Desember 2000", note: "Kembali dari pinjaman dan tampil lima kali semua kompetisi." },
      { player: "Henning Berg", from: "Blackburn Rovers", fee: "End of loan", date: "10 Desember 2000", note: "Kembali sebentar dari pinjaman sebelum pindah permanen ke Blackburn." },
      { player: "Terry Cooke", from: "Sheffield Wednesday", fee: "End of loan", date: "2 Januari 2001", note: "Kembali dari masa pinjaman di Sheffield Wednesday." },
      { player: "Nick Culkin", from: "Bristol Rovers", fee: "End of loan", date: "31 Mei 2001", note: "Kembali dari pinjaman pada akhir musim." },
      { player: "David Healy", from: "Preston North End", fee: "End of loan", date: "2 Januari 2001", note: "Kembali dari pinjaman sebelum transfer permanen ke Preston." }
    ],
    transfersOut: [
      { player: "Danny Higginbotham", to: "Derby County", fee: "EUR 3.00m", date: "5 Juli 2000", note: "Pindah permanen untuk mencari menit tim utama; sumber Inggris mencatat GBP 2m." },
      { player: "Massimo Taibi", to: "Reggina", fee: "EUR 4.00m", date: "12 Juli 2000", note: "Kembali permanen ke Reggina setelah masa pinjaman; sumber Inggris mencatat GBP 2.5m." },
      { player: "Henning Berg", to: "Blackburn Rovers", fee: "EUR 2.63m", date: "15 Desember 2000", note: "Kembali ke Blackburn setelah perannya di United menurun." },
      { player: "David Healy", to: "Preston North End", fee: "EUR 2.00m", date: "3 Januari 2001", note: "Pindah permanen setelah masa pinjaman; sumber Inggris mencatat GBP 1.5m." },
      { player: "Alex Notman", to: "Norwich City", fee: "EUR 375k", date: "28 November 2000", note: "Sumber Inggris mencatat GBP 250k; Transfermarkt tidak menampilkan nominal terpisah pada ringkasan yang dipakai." },
      { player: "Mark Bosnich", to: "Chelsea", fee: "Free transfer", date: "18 Januari 2001", note: "Tidak tampil musim ini setelah Barthez datang, lalu pindah ke Chelsea." },
      { player: "Jordi Cruyff", to: "Deportivo Alaves", fee: "Free transfer", date: "10 Juli 2000", note: "Kontrak habis dan pindah ke Spanyol." },
      { player: "Teddy Sheringham", to: "Tottenham Hotspur", fee: "Free transfer", date: "26 Mei 2001", note: "Kembali ke Tottenham setelah menjadi top skor dan pemain terbaik United musim ini." },
      { player: "Jimmy Davis", to: "Royal Antwerp", fee: "Free transfer", date: "2000/01", note: "Pemain muda keluar menurut catatan Transfermarkt." },
      { player: "Michael Twiss", to: "Port Vale", fee: "Tidak diketahui", date: "2000/01", note: "Transfermarkt mencatat tujuan Port Vale tetapi nominal fee tidak tersedia." },
      { player: "Michael Stewart", to: "Royal Antwerp", fee: "Loan transfer", date: "2000/01", note: "Dipinjamkan ke Royal Antwerp sebelum kembali pada 31 Desember 2000." },
      { player: "Henning Berg", to: "Blackburn Rovers", fee: "Loan transfer", date: "September 2000", note: "Awalnya kembali ke Blackburn dengan status pinjaman sebelum transfer permanen." },
      { player: "Terry Cooke", to: "Sheffield Wednesday", fee: "Loan transfer", date: "2000/01", note: "Menjalani dua periode pinjaman ke Sheffield Wednesday." },
      { player: "David Healy", to: "Preston North End", fee: "Loan transfer", date: "2000/01", note: "Dipinjamkan ke Preston sebelum transfer permanen pada Januari 2001." }
    ],
    commonStartingXI: {
      formation: "4-4-2",
      players: {
        GK: "Fabien Barthez",
        RB: "Gary Neville",
        CB1: "Jaap Stam",
        CB2: "Mikael Silvestre",
        LB: "Denis Irwin",
        RM: "David Beckham",
        CM1: "Roy Keane",
        CM2: "Paul Scholes",
        LM: "Ryan Giggs",
        ST1: "Teddy Sheringham",
        ST2: "Andy Cole"
      }
    },
    keyPlayers: [
      { name: "Teddy Sheringham", position: "Striker/second striker", contribution: "43 main, 21 gol semua kompetisi, 6 assist Premier League", story: "Sheringham menjadi bintang utama musim ini. Ia memimpin daftar gol United, memenangi PFA Player of the Year dan FWA Footballer of the Year, lalu pergi ke Tottenham setelah musim berakhir." },
      { name: "David Beckham", position: "Gelandang kanan", contribution: "46 main, 9 gol semua kompetisi, 12 assist Premier League", story: "Beckham kembali menjadi kreator utama United. StatMuse mencatat 12 assist Premier League, tertinggi di skuad musim ini." },
      { name: "Roy Keane", position: "Kapten, gelandang tengah", contribution: "44 main, 3 gol semua kompetisi, 7 assist Premier League", story: "Keane tetap menjadi pusat kontrol dan intensitas tim. Kontribusi assist liganya juga tinggi untuk gelandang yang banyak mengatur ritme dari tengah." },
      { name: "Paul Scholes", position: "Gelandang tengah/gelandang serang", contribution: "45 main, 12 gol semua kompetisi, 5 assist Premier League", story: "Scholes mencetak 12 gol, termasuk enam di Champions League. Gol dari lini kedua menjadi sumber penting saat rotasi striker berubah-ubah." },
      { name: "Fabien Barthez", position: "Kiper", contribution: "44 main semua kompetisi", story: "Barthez memberi United solusi yang lebih stabil setelah masalah kiper 1999/00. Ada momen berisiko, tetapi ia langsung menjadi kiper utama." },
      { name: "Ryan Giggs", position: "Winger kiri", contribution: "45 main, 7 gol semua kompetisi, 8 assist Premier League", story: "Giggs tetap menjadi ancaman progresif dari kiri. Ia juga mencetak gol United di leg kedua perempat final Champions League melawan Bayern Munich." },
      { name: "Mikael Silvestre", position: "Bek kiri/bek tengah", contribution: "47 main, 1 gol semua kompetisi, 2 assist Premier League", story: "Silvestre menjadi salah satu pemain tersibuk musim ini. Fleksibilitasnya penting ketika Stam dan Johnsen tidak selalu tersedia." },
      { name: "Wes Brown", position: "Bek tengah/bek kanan", contribution: "41 main semua kompetisi", story: "Brown mendapat menit besar dan mulai terlihat sebagai bagian penting regenerasi pertahanan United." }
    ],
    statistics: {
      leaguePosition: "1st Premier League",
      matches: 57,
      wins: 32,
      draws: 12,
      losses: 13,
      goalsFor: 107,
      goalsAgainst: 50,
      topScorer: "Teddy Sheringham (21 gol semua kompetisi / 15 gol liga)",
      topAssist: "David Beckham (12 assist Premier League)",
      mostAppearances: "Gary Neville (49 main)"
    },
    importantMoments: [
      { month: "13 Agustus 2000", title: "Charity Shield kalah dari Chelsea", description: "United membuka musim dengan kekalahan 0-2 dari Chelsea di Wembley.", impact: "Tidak merusak musim liga, tetapi menjadi tanda bahwa United belum langsung tajam di laga pembuka." },
      { month: "26 Agustus 2000", title: "Bradford dihancurkan 6-0", description: "United menang besar di Old Trafford melalui gol Fortune dua kali, Sheringham dua kali, Cole, dan Beckham.", impact: "Menunjukkan bahwa lini depan masih punya banyak sumber gol." },
      { month: "28 Januari 2001", title: "Di Canio menyingkirkan United dari FA Cup", description: "West Ham menang 1-0 di Old Trafford lewat gol Paolo Di Canio.", impact: "Menjadi salah satu momen paling terkenal musim ini dan menutup perjalanan FA Cup United di ronde keempat." },
      { month: "25 Februari 2001", title: "Arsenal dihancurkan 6-1", description: "Dwight Yorke mencetak hat-trick babak pertama saat United mengalahkan Arsenal 6-1 di Old Trafford.", impact: "Membuat United semakin jauh di puncak dan menjadi simbol dominasi domestik musim ini." },
      { month: "3 April 2001", title: "Bayern menang di Old Trafford", description: "Bayern Munich menang 1-0 pada leg pertama perempat final Champions League.", impact: "Membuat United harus mengejar di Munich dan mengubah arah duel knockout." },
      { month: "14 April 2001", title: "Coventry dikalahkan 4-2", description: "United mengalahkan Coventry City lewat dua gol Yorke, lalu Giggs dan Scholes.", impact: "Mendekatkan United ke gelar liga ketiga beruntun." },
      { month: "18 April 2001", title: "Bayern membalas dendam 1999", description: "United kalah 1-2 di Munich dan tersingkir dengan agregat 1-3.", impact: "Mengakhiri ambisi Champions League dan menegaskan bahwa dominasi domestik belum kembali menjadi dominasi Eropa." },
      { month: "26 Mei 2001", title: "Sheringham kembali ke Tottenham", description: "Setelah menjadi top skor dan pemain terbaik musim, Sheringham kembali ke Tottenham dengan status free transfer.", impact: "Menutup babak penting lini depan United sebelum datangnya Ruud van Nistelrooy." }
    ],
    additionalInfo: [
      "Rekor liga United: 38 pertandingan, 24 menang, 8 seri, 6 kalah, gol 79:31, 80 poin.",
      "Rekor semua kompetisi MUFCInfo: 57 pertandingan, 32 menang, 12 seri, 13 kalah, gol 107:50.",
      "MUFCInfo mencatat Teddy Sheringham sebagai top skor United dengan 21 gol dan Gary Neville sebagai pemain dengan penampilan terbanyak, 49 main.",
      "Assist yang diisi pada tabel skuad adalah assist Premier League dari StatMuse, bukan semua kompetisi.",
      "StatMuse mencatat top assist Premier League United 2000/01: David Beckham 12, Ryan Giggs 8, Roy Keane 7, Teddy Sheringham 6, Paul Scholes 5, Dwight Yorke 4, Ole Gunnar Solskjaer 4, Andy Cole 3, Denis Irwin 2, Nicky Butt 2, dan Mikael Silvestre 2.",
      "Transfermarkt mencatat pemasukan transfer United 2000/01 sebesar EUR 13.88m; pengeluaran inti musim ini praktis Barthez EUR 11.70m jika transfer yang disepakati akhir 1999/00 dimasukkan sebagai rekrutan 2000/01.",
      "Transfermarkt mencatat transfer keluar permanen utama: Massimo Taibi EUR 4.00m, Danny Higginbotham EUR 3.00m, Henning Berg EUR 2.63m, David Healy EUR 2.00m, dan John Curtis EUR 2.25m yang sudah dicatat pada akhir 1999/00.",
      "Ruud van Nistelrooy disepakati pada April 2001 dengan fee GBP 19m, ditulis EUR 28.50m sebagai konversi rasio historis sekitar 1.5; transfer efektif untuk musim 2001/02.",
      "Nomor skuad 2000/01 mencakup Barthez 1, Gary Neville 2, Irwin 3, May 4, Johnsen 5, Stam 6, Beckham 7, Butt 8, Cole 9, Sheringham 10, Giggs 11, Phil Neville 12, Goram 14, Keane 16, Scholes 18, Yorke 19, Solskjaer 20, Brown 24, Fortune 25, Silvestre 27, O'Shea 30, Rachubka 33, Greening 34, dan Chadwick 36.",
      "United menjadi tim pertama era Premier League yang menjuarai liga tiga kali berturut-turut.",
      "FA Cup berakhir di ronde keempat setelah kalah 0-1 dari West Ham United.",
      "League Cup berakhir di ronde keempat setelah kalah 1-2 dari Sunderland.",
      "Champions League berakhir di perempat final setelah United kalah agregat 1-3 dari Bayern Munich.",
      "Teddy Sheringham memenangi PFA Player of the Year dan FWA Footballer of the Year sebelum kembali ke Tottenham."
    ],
    featured: false
  },
  {
    id: "2001-02",
    label: "2001/02",
    title: "Manchester United Musim 2001/02",
    era: "Era Ronaldo & Rooney",
    managers: ["Sir Alex Ferguson"],
    competitions: [
      "Premier League",
      "FA Cup",
      "League Cup",
      "UEFA Champions League",
      "FA Charity Shield"
    ],
    leaguePosition: "3rd Premier League",
    trophies: [],
    summary:
      "Musim transisi setelah tiga gelar liga beruntun. Ruud van Nistelrooy langsung menjadi mesin gol dengan 36 gol semua kompetisi, tetapi penjualan Jaap Stam, adaptasi Juan Sebastian Veron, dan pertahanan yang rapuh membuat United finis ketiga dan tersingkir di semifinal Champions League.",
    story: [
      "United masuk musim 2001/02 sebagai juara Premier League tiga musim beruntun, tetapi Ferguson merasa skuad perlu disegarkan untuk mengejar dominasi Eropa lagi.",
      "Belanja musim panas sangat besar: Ruud van Nistelrooy akhirnya datang dari PSV, Juan Sebastian Veron dibeli dari Lazio sebagai rekor transfer Inggris, Roy Carroll menambah opsi kiper, dan Laurent Blanc datang setelah Jaap Stam dijual.",
      "Van Nistelrooy menjadi cerita terbaik musim ini. Ia mencetak 36 gol semua kompetisi, termasuk 23 di Premier League dan 10 di Champions League, sekaligus langsung menjadi pusat serangan baru United.",
      "Di sisi lain, keseimbangan tim terganggu. Stam hanya tampil dua kali sebelum dijual ke Lazio, Blanc memberi pengalaman tetapi tidak mengganti dominasi fisik Stam, dan Veron belum sepenuhnya cocok dengan ritme Premier League.",
      "United tetap produktif dan mencapai semifinal Champions League, tetapi kalah gol tandang dari Bayer Leverkusen. Di liga, Arsenal mengakhiri dominasi United dengan memastikan gelar lewat kemenangan 1-0 di Old Trafford."
    ],
    squad: [
      { name: "Fabien Barthez", shirtNumber: 1, position: "Kiper", age: 30, country: "France", appearances: 49, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Gary Neville", shirtNumber: 2, position: "Bek kanan", age: 26, country: "England", appearances: 51, goals: 0, assists: 3, status: "Pemain utama" },
      { name: "Denis Irwin", shirtNumber: 3, position: "Bek kiri/bek kanan", age: 35, country: "Republic of Ireland", appearances: 23, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Juan Sebastian Veron", shirtNumber: 4, position: "Gelandang tengah", age: 26, country: "Argentina", appearances: 40, goals: 5, assists: 1, status: "Pemain utama" },
      { name: "Ronny Johnsen", shirtNumber: 5, position: "Bek tengah/gelandang bertahan", age: 32, country: "Norway", appearances: 19, goals: 1, assists: 0, status: "Cadangan" },
      { name: "Laurent Blanc", shirtNumber: 6, position: "Bek tengah", age: 35, country: "France", appearances: 46, goals: 3, assists: 0, status: "Pemain utama" },
      { name: "Jaap Stam", shirtNumber: 6, position: "Bek tengah", age: 29, country: "Netherlands", appearances: 2, goals: 0, assists: 0, status: "Cadangan" },
      { name: "David Beckham", shirtNumber: 7, position: "Gelandang kanan", age: 26, country: "England", appearances: 43, goals: 16, assists: 8, status: "Pemain utama" },
      { name: "Nicky Butt", shirtNumber: 8, position: "Gelandang tengah", age: 26, country: "England", appearances: 37, goals: 1, assists: 1, status: "Pemain utama" },
      { name: "Andy Cole", shirtNumber: 9, position: "Striker", age: 29, country: "England", appearances: 15, goals: 5, assists: 4, status: "Cadangan" },
      { name: "Ruud van Nistelrooy", shirtNumber: 10, position: "Striker", age: 25, country: "Netherlands", appearances: 49, goals: 36, assists: 6, status: "Pemain utama" },
      { name: "Ryan Giggs", shirtNumber: 11, position: "Winger kiri", age: 27, country: "Wales", appearances: 40, goals: 9, assists: 12, status: "Pemain utama" },
      { name: "Phil Neville", shirtNumber: 12, position: "Bek/gelandang", age: 24, country: "England", appearances: 38, goals: 2, assists: 1, status: "Pemain utama" },
      { name: "Roy Carroll", shirtNumber: 13, position: "Kiper", age: 23, country: "Northern Ireland", appearances: 10, goals: 0, assists: 0, status: "Cadangan" },
      { name: "David May", shirtNumber: 14, position: "Bek tengah", age: 31, country: "England", appearances: 3, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Luke Chadwick", shirtNumber: 15, position: "Gelandang kanan/gelandang serang", age: 20, country: "England", appearances: 11, goals: 0, assists: 2, status: "Pemain muda" },
      { name: "Roy Keane", shirtNumber: 16, position: "Kapten, gelandang tengah", age: 30, country: "Republic of Ireland", appearances: 43, goals: 4, assists: 5, status: "Pemain utama" },
      { name: "Raimond van der Gouw", shirtNumber: 17, position: "Kiper", age: 38, country: "Netherlands", appearances: 2, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Paul Scholes", shirtNumber: 18, position: "Gelandang tengah/gelandang serang", age: 26, country: "England", appearances: 51, goals: 9, assists: 6, status: "Pemain utama" },
      { name: "Dwight Yorke", shirtNumber: 19, position: "Striker", age: 29, country: "Trinidad and Tobago", appearances: 16, goals: 1, assists: 1, status: "Cadangan" },
      { name: "Ole Gunnar Solskjaer", shirtNumber: 20, position: "Striker/winger kanan", age: 28, country: "Norway", appearances: 47, goals: 25, assists: 9, status: "Pemain utama" },
      { name: "Diego Forlan", shirtNumber: 21, position: "Striker", age: 22, country: "Uruguay", appearances: 18, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Ronnie Wallwork", shirtNumber: 22, position: "Bek/gelandang", age: 23, country: "England", appearances: 3, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Michael Clegg", shirtNumber: 23, position: "Bek kanan", age: 23, country: "England", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Wes Brown", shirtNumber: 24, position: "Bek tengah/bek kanan", age: 21, country: "England", appearances: 24, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Quinton Fortune", shirtNumber: 25, position: "Gelandang kiri/bek kiri", age: 24, country: "South Africa", appearances: 19, goals: 1, assists: 0, status: "Cadangan" },
      { name: "Mikael Silvestre", shirtNumber: 27, position: "Bek kiri/bek tengah", age: 24, country: "France", appearances: 51, goals: 1, assists: 6, status: "Pemain utama" },
      { name: "Michael Stewart", shirtNumber: 28, position: "Gelandang tengah", age: 20, country: "Scotland", appearances: 5, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "John O'Shea", shirtNumber: 30, position: "Bek tengah/bek kiri", age: 20, country: "Republic of Ireland", appearances: 13, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Bojan Djordjic", shirtNumber: 32, position: "Gelandang/winger", age: 19, country: "Sweden", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Lee Roche", shirtNumber: 34, position: "Bek kanan", age: 20, country: "Republic of Ireland", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Jimmy Davis", shirtNumber: 36, position: "Winger/striker", age: 19, country: "England", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Danny Webber", shirtNumber: 37, position: "Striker", age: 19, country: "England", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Daniel Nardiello", shirtNumber: 40, position: "Striker", age: 18, country: "Wales", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" }
    ],
    transfersIn: [
      { player: "Roy Carroll", from: "Wigan Athletic", fee: "EUR 3.00m", date: "1 Juli 2001", note: "Transfermarkt mencatat EUR 3.00m; sumber Inggris menulis fee tidak diumumkan/sekitar GBP 2.5m." },
      { player: "Ruud van Nistelrooy", from: "PSV Eindhoven", fee: "EUR 28.50m", date: "1 Juli 2001", note: "Transfer yang tertunda dari 2000 akhirnya efektif. Sumber Inggris mencatat GBP 19m." },
      { player: "Juan Sebastian Veron", from: "Lazio", fee: "EUR 42.60m", date: "12 Juli 2001", note: "Rekor transfer Inggris saat itu; sumber Inggris mencatat GBP 28.1m." },
      { player: "Laurent Blanc", from: "Inter Milan", fee: "Free transfer", date: "30 Agustus 2001", note: "Datang sebagai pengganti senior setelah Stam dijual; Transfermarkt mencatat free transfer, sementara beberapa ringkasan Inggris mencatat GBP 2.5m." },
      { player: "Diego Forlan", from: "Independiente", fee: "EUR 11.00m", date: "22 Januari 2002", note: "Rekrutan Januari; sumber Inggris mencatat sekitar GBP 7.5m." },
      { player: "Luke Steele", from: "Peterborough United", fee: "EUR 750k", date: "11 Mei 2002", note: "Kiper muda; sebelumnya masuk dengan status pinjaman pada Maret 2002." },
      { player: "Danny Webber", from: "Port Vale", fee: "End of loan", date: "22 Desember 2001", note: "Kembali dari pinjaman sebelum dipinjamkan lagi ke Watford." },
      { player: "Bojan Djordjic", from: "Sheffield Wednesday", fee: "End of loan", date: "30 Juni 2002", note: "Kembali dari pinjaman pada akhir musim." }
    ],
    transfersOut: [
      { player: "Jonathan Greening", to: "Middlesbrough", fee: "EUR 3.00m", date: "9 Agustus 2001", note: "Sumber Inggris mencatat GBP 2m; Transfermarkt menulis EUR 3.00m." },
      { player: "Mark Wilson", to: "Middlesbrough", fee: "EUR 2.30m", date: "9 Agustus 2001", note: "Sumber Inggris mencatat GBP 1.5m; Transfermarkt menulis EUR 2.30m." },
      { player: "Jaap Stam", to: "Lazio", fee: "EUR 25.75m", date: "27 Agustus 2001", note: "Transfer kontroversial; sumber Inggris mencatat GBP 16.5m." },
      { player: "Jesper Blomqvist", to: "Everton", fee: "Free transfer", date: "8 November 2001", note: "Pindah setelah masa cedera panjang dan kontrak United berakhir." },
      { player: "Andy Cole", to: "Blackburn Rovers", fee: "EUR 12.20m", date: "29 Desember 2001", note: "Fee resmi Inggris tidak diumumkan luas; Transfermarkt mencatat EUR 12.20m." },
      { player: "Michael Clegg", to: "Oldham Athletic", fee: "Free transfer", date: "19 Februari 2002", note: "Keluar untuk mencari menit bermain." },
      { player: "Paul Rachubka", to: "Charlton Athletic", fee: "EUR 300k", date: "17 Mei 2002", note: "Initial fee GBP 200k dikonversi sekitar EUR 300k dengan rasio historis yang dipakai pada data musim ini." },
      { player: "Raimond van der Gouw", to: "West Ham United", fee: "Free transfer", date: "28 Juni 2002", note: "Kiper senior meninggalkan klub setelah musim berakhir." },
      { player: "Denis Irwin", to: "Released", fee: "Released", date: "30 Juni 2002", note: "Akhir era bek kiri legendaris United; kemudian bergabung dengan Wolverhampton Wanderers." },
      { player: "Ronny Johnsen", to: "Released", fee: "Released", date: "30 Juni 2002", note: "Dilepas setelah enam musim dan kemudian bergabung dengan Aston Villa." },
      { player: "Ronnie Wallwork", to: "Released", fee: "Released", date: "30 Juni 2002", note: "Dilepas pada akhir musim." },
      { player: "Danny Webber", to: "Port Vale", fee: "Loan transfer", date: "23 November 2001", note: "Pinjaman jangka pendek sampai 22 Desember 2001." },
      { player: "Paul Rachubka", to: "Oldham Athletic", fee: "Loan transfer", date: "23 November 2001", note: "Dipinjamkan sebelum transfer permanen ke Charlton Athletic pada Mei 2002." },
      { player: "Bojan Djordjic", to: "Sheffield Wednesday", fee: "Loan transfer", date: "7 Desember 2001", note: "Dipinjamkan sampai akhir musim." },
      { player: "Danny Webber", to: "Watford", fee: "Loan transfer", date: "28 Maret 2002", note: "Pinjaman kedua musim ini sampai 27 April 2002." }
    ],
    commonStartingXI: {
      formation: "4-4-2",
      players: {
        GK: "Fabien Barthez",
        RB: "Gary Neville",
        CB1: "Laurent Blanc",
        CB2: "Mikael Silvestre",
        LB: "Denis Irwin",
        RM: "David Beckham",
        CM1: "Roy Keane",
        CM2: "Juan Sebastian Veron",
        LM: "Ryan Giggs",
        ST1: "Ruud van Nistelrooy",
        ST2: "Ole Gunnar Solskjaer"
      }
    },
    keyPlayers: [
      { name: "Ruud van Nistelrooy", position: "Striker", contribution: "49 main, 36 gol semua kompetisi, 6 assist Premier League", story: "Van Nistelrooy langsung menjadi pusat serangan United. Ia mencetak 23 gol liga dan 10 gol Champions League, lalu menjadi top scorer United musim ini." },
      { name: "Ole Gunnar Solskjaer", position: "Striker/winger kanan", contribution: "47 main, 25 gol semua kompetisi, 9 assist Premier League", story: "Solskjaer menjalani salah satu musim paling produktifnya. Ia menjadi partner penting Van Nistelrooy dan juga sering memberi solusi dari sisi kanan." },
      { name: "Ryan Giggs", position: "Winger kiri", contribution: "40 main, 9 gol semua kompetisi, 12 assist Premier League", story: "Giggs menjadi kreator liga paling produktif United musim ini. StatBunker/StatMuse menempatkannya di 12 assist Premier League." },
      { name: "David Beckham", position: "Gelandang kanan", contribution: "43 main, 16 gol semua kompetisi, 8 assist Premier League", story: "Beckham tetap sangat produktif lewat bola mati, crossing, dan umpan diagonal. Ia juga menjadi bagian dari comeback 5-3 di Tottenham." },
      { name: "Juan Sebastian Veron", position: "Gelandang tengah", contribution: "40 main, 5 gol semua kompetisi", story: "Veron datang sebagai rekor Inggris dan tampil lebih nyaman di Eropa daripada di Premier League. Kualitasnya jelas, tetapi struktur lini tengah United belum sepenuhnya cocok." },
      { name: "Laurent Blanc", position: "Bek tengah", contribution: "46 main, 3 gol semua kompetisi", story: "Blanc memberi pengalaman besar setelah Stam pergi, tetapi pada usia 35 tahun ia tidak bisa mengganti kecepatan dan dominasi fisik Stam." },
      { name: "Roy Keane", position: "Kapten, gelandang tengah", contribution: "43 main, 4 gol semua kompetisi, 5 assist Premier League", story: "Keane tetap menjadi pemimpin dan pusat intensitas tim, meski komposisi lini tengah berubah dengan kedatangan Veron." },
      { name: "Mikael Silvestre", position: "Bek kiri/bek tengah", contribution: "51 main, 1 gol semua kompetisi, 6 assist Premier League", story: "Silvestre menjadi pemain penting karena fleksibilitasnya di bek kiri dan bek tengah saat pertahanan United terus berubah." }
    ],
    statistics: {
      leaguePosition: "3rd Premier League",
      matches: 58,
      wins: 33,
      draws: 11,
      losses: 14,
      goalsFor: 122,
      goalsAgainst: 69,
      topScorer: "Ruud van Nistelrooy (36 gol semua kompetisi / 23 gol liga)",
      topAssist: "Ryan Giggs (12 assist Premier League)",
      mostAppearances: "Gary Neville, Paul Scholes, dan Mikael Silvestre (51 main)"
    },
    importantMoments: [
      { month: "12 Agustus 2001", title: "Charity Shield kalah dari Liverpool", description: "United membuka musim kompetitif dengan kekalahan 1-2 dari Liverpool. Van Nistelrooy mencetak gol United.", impact: "Memberi gambaran awal bahwa musim ini tidak akan semulus tiga musim liga sebelumnya." },
      { month: "27 Agustus 2001", title: "Jaap Stam dijual ke Lazio", description: "Stam pindah ke Lazio dengan fee besar. Keputusan ini menjadi salah satu transfer paling kontroversial era Ferguson.", impact: "Pertahanan United kehilangan bek tengah dominan dan butuh penyesuaian sepanjang musim." },
      { month: "29 September 2001", title: "Comeback 5-3 di Tottenham", description: "United tertinggal 0-3 saat jeda tetapi menang 5-3 lewat gol Cole, Blanc, Van Nistelrooy, Veron, dan Beckham.", impact: "Menjadi salah satu kemenangan comeback paling terkenal era Ferguson." },
      { month: "Desember 2001", title: "Andy Cole pindah ke Blackburn", description: "Cole meninggalkan United setelah Van Nistelrooy menjadi striker utama dan persaingan lini depan berubah.", impact: "Menandai berakhirnya era duet Yorke-Cole sebagai pusat serangan United." },
      { month: "22 Januari 2002", title: "Diego Forlan datang dari Independiente", description: "United menambah penyerang Uruguay pada bursa Januari.", impact: "Memberi kedalaman lini depan, meski Forlan belum mencetak gol pada sisa musim ini." },
      { month: "24 dan 30 April 2002", title: "Tersingkir oleh Bayer Leverkusen", description: "United bermain 2-2 di Old Trafford dan 1-1 di Jerman pada semifinal Champions League.", impact: "United tersingkir lewat aturan gol tandang dan gagal mencapai final di Hampden Park." },
      { month: "8 Mei 2002", title: "Arsenal juara di Old Trafford", description: "Arsenal menang 1-0 melalui gol Sylvain Wiltord dan memastikan gelar Premier League di kandang United.", impact: "Mengakhiri tiga musim dominasi liga United." }
    ],
    additionalInfo: [
      "Rekor semua kompetisi MUFCInfo: 58 pertandingan, 33 menang, 11 seri, 14 kalah, gol 122:69.",
      "Rekor liga United: 38 pertandingan, 24 menang, 5 seri, 9 kalah, gol 87:45, 77 poin, finis posisi 3.",
      "United adalah tim tersubur Premier League 2001/02 dengan 87 gol, tetapi kebobolan 45 gol dan kehilangan stabilitas setelah Stam pergi.",
      "Assist yang diisi pada tabel skuad adalah assist Premier League dari StatBunker/StatMuse, bukan semua kompetisi.",
      "Top assist Premier League United 2001/02: Ryan Giggs 12, Ole Gunnar Solskjaer 9, David Beckham 8, Ruud van Nistelrooy 6, Paul Scholes 6, Mikael Silvestre 6, Roy Keane 5, Andy Cole 4, dan Gary Neville 3.",
      "Transfermarkt mencatat pengeluaran United 2001/02 sebesar EUR 85.85m, termasuk Veron EUR 42.60m, Van Nistelrooy EUR 28.50m, Forlan EUR 11.00m, Carroll EUR 3.00m, dan Luke Steele EUR 750k.",
      "Transfermarkt mencatat pemasukan transfer United 2001/02 sebesar EUR 43.60m, terutama Stam EUR 25.75m, Cole EUR 12.20m, Greening EUR 3.00m, dan Mark Wilson EUR 2.30m.",
      "Wikipedia mencatat transfer Veron sebagai GBP 28.1m dan Van Nistelrooy sebagai GBP 19m; nominal di data ini ditulis dalam EUR mengikuti pola konversi/nominal Transfermarkt pada musim sebelumnya.",
      "Nomor skuad 2001/02 mencakup Barthez 1, Gary Neville 2, Irwin 3, Veron 4, Johnsen 5, Blanc/Stam 6, Beckham 7, Butt 8, Cole 9, Van Nistelrooy 10, Giggs 11, Phil Neville 12, Carroll 13, Keane 16, Scholes 18, Yorke 19, Solskjaer 20, Forlan 21, Brown 24, Silvestre 27, O'Shea 30, dan Nardiello 40.",
      "Ferguson sempat berencana pensiun pada akhir musim 2001/02 sebelum akhirnya berubah pikiran dan bertahan.",
      "Champions League berakhir di semifinal setelah United kalah dari Bayer Leverkusen lewat gol tandang dengan agregat 3-3.",
      "FA Cup berakhir di ronde keempat setelah kalah dari Middlesbrough, dan League Cup berakhir di ronde ketiga setelah kalah dari Arsenal.",
      "Musim ini menjadi jembatan menuju pembangunan ulang berikutnya: Rio Ferdinand datang pada 2002/03 untuk memperbaiki struktur pertahanan."
    ],
    featured: false
  },
  {
    id: "2002-03",
    label: "2002/03",
    title: "Manchester United Musim 2002/03",
    era: "Era Ronaldo & Rooney",
    managers: ["Sir Alex Ferguson"],
    competitions: [
      "Premier League",
      "FA Cup",
      "League Cup",
      "UEFA Champions League"
    ],
    leaguePosition: "1st Premier League",
    trophies: ["Premier League"],
    summary:
      "Musim comeback besar setelah finis ketiga pada 2001/02. United membeli Rio Ferdinand untuk membangun ulang pertahanan, Ruud van Nistelrooy mencetak 44 gol semua kompetisi, dan Ferguson mengejar Arsenal dari defisit besar untuk merebut kembali gelar Premier League.",
    story: [
      "United memulai musim dengan kebutuhan jelas: pertahanan harus diperbaiki setelah musim 2001/02 yang rapuh. Rio Ferdinand datang dari Leeds United dengan status transfer rekor Inggris dan bek termahal dunia saat itu.",
      "Awal liga tidak mulus. United sempat berada di posisi 10 setelah kalah dari Leeds pada 14 September 2002, lalu kalah 1-3 dari Manchester City dalam derby terakhir di Maine Road.",
      "Momentum berubah pada akhir 2002. Van Nistelrooy mulai mencetak gol tanpa henti, Diego Forlan mencetak dua gol terkenal di Anfield, dan United mengalahkan Arsenal 2-0 di Old Trafford pada Desember.",
      "Fase penentu datang pada musim semi 2003. United mengejar Arsenal yang sempat unggul delapan poin, menang 6-2 di Newcastle, lalu menahan Arsenal 2-2 di Highbury untuk menjaga tekanan perebutan gelar.",
      "Di Eropa, United memainkan duel klasik melawan Real Madrid. Mereka kalah agregat 5-6 di perempat final meski menang 4-3 di Old Trafford pada malam ketika Ronaldo Nazario mencetak hat-trick dan Beckham mencetak dua gol dari bangku cadangan.",
      "Musim ini juga menjadi akhir bab David Beckham di United. Ia tetap produktif dengan 11 gol semua kompetisi dan 9 assist Premier League, tetapi hubungan dengan Ferguson memburuk dan ia pindah ke Real Madrid setelah musim selesai."
    ],
    squad: [
      { name: "Fabien Barthez", shirtNumber: 1, position: "Kiper", age: 31, country: "France", appearances: 46, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Gary Neville", shirtNumber: 2, position: "Bek kanan", age: 27, country: "England", appearances: 44, goals: 1, assists: 4, status: "Pemain utama" },
      { name: "Phil Neville", shirtNumber: 3, position: "Bek/gelandang bertahan", age: 25, country: "England", appearances: 43, goals: 2, assists: 1, status: "Pemain utama" },
      { name: "Juan Sebastian Veron", shirtNumber: 4, position: "Gelandang tengah", age: 27, country: "Argentina", appearances: 42, goals: 6, assists: 2, status: "Pemain utama" },
      { name: "Laurent Blanc", shirtNumber: 5, position: "Bek tengah", age: 36, country: "France", appearances: 29, goals: 1, assists: 0, status: "Cadangan" },
      { name: "Rio Ferdinand", shirtNumber: 6, position: "Bek tengah", age: 23, country: "England", appearances: 46, goals: 0, assists: 1, status: "Pemain utama" },
      { name: "David Beckham", shirtNumber: 7, position: "Gelandang kanan", age: 27, country: "England", appearances: 52, goals: 11, assists: 9, status: "Pemain utama" },
      { name: "Nicky Butt", shirtNumber: 8, position: "Gelandang tengah", age: 27, country: "England", appearances: 29, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Ruud van Nistelrooy", shirtNumber: 10, position: "Striker", age: 26, country: "Netherlands", appearances: 52, goals: 44, assists: 4, status: "Pemain utama" },
      { name: "Ryan Giggs", shirtNumber: 11, position: "Winger kiri", age: 28, country: "Wales", appearances: 59, goals: 14, assists: 14, status: "Pemain utama" },
      { name: "Roy Carroll", shirtNumber: 13, position: "Kiper", age: 24, country: "Northern Ireland", appearances: 16, goals: 0, assists: 0, status: "Cadangan" },
      { name: "David May", shirtNumber: 14, position: "Bek tengah", age: 32, country: "England", appearances: 4, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Luke Chadwick", shirtNumber: 15, position: "Gelandang kanan/gelandang serang", age: 21, country: "England", appearances: 5, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Roy Keane", shirtNumber: 16, position: "Kapten, gelandang tengah", age: 31, country: "Republic of Ireland", appearances: 32, goals: 0, assists: 1, status: "Pemain utama" },
      { name: "Michael Stewart", shirtNumber: 17, position: "Gelandang tengah", age: 21, country: "Scotland", appearances: 4, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Paul Scholes", shirtNumber: 18, position: "Gelandang serang/second striker", age: 27, country: "England", appearances: 52, goals: 20, assists: 4, status: "Pemain utama" },
      { name: "Ricardo Lopez", shirtNumber: 19, position: "Kiper", age: 30, country: "Spain", appearances: 5, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Ole Gunnar Solskjaer", shirtNumber: 20, position: "Striker/winger kanan", age: 29, country: "Norway", appearances: 57, goals: 15, assists: 7, status: "Pemain utama" },
      { name: "Diego Forlan", shirtNumber: 21, position: "Striker", age: 23, country: "Uruguay", appearances: 45, goals: 9, assists: 2, status: "Cadangan" },
      { name: "John O'Shea", shirtNumber: 22, position: "Bek kiri/bek tengah/bek kanan", age: 21, country: "Republic of Ireland", appearances: 52, goals: 0, assists: 1, status: "Pemain utama" },
      { name: "Bojan Djordjic", shirtNumber: 23, position: "Winger kiri", age: 20, country: "Sweden", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Wes Brown", shirtNumber: 24, position: "Bek tengah/bek kanan", age: 22, country: "England", appearances: 35, goals: 1, assists: 0, status: "Pemain utama" },
      { name: "Quinton Fortune", shirtNumber: 25, position: "Gelandang kiri/bek kiri", age: 25, country: "South Africa", appearances: 16, goals: 0, assists: 1, status: "Cadangan" },
      { name: "Danny Pugh", shirtNumber: 26, position: "Gelandang kiri/bek kiri", age: 19, country: "England", appearances: 5, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Mikael Silvestre", shirtNumber: 27, position: "Bek kiri/bek tengah", age: 25, country: "France", appearances: 54, goals: 1, assists: 7, status: "Pemain utama" },
      { name: "Kirk Hilton", shirtNumber: 28, position: "Bek kiri", age: 22, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Ben Williams", shirtNumber: 30, position: "Kiper", age: 20, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Darren Fletcher", shirtNumber: 31, position: "Gelandang tengah", age: 18, country: "Scotland", appearances: 2, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Paul Rachubka", shirtNumber: 33, position: "Kiper", age: 21, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Lee Roche", shirtNumber: 34, position: "Bek kanan", age: 22, country: "Republic of Ireland", appearances: 2, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Jimmy Davis", shirtNumber: 36, position: "Winger/striker", age: 20, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Danny Webber", shirtNumber: 37, position: "Striker", age: 20, country: "England", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Mark Lynch", shirtNumber: 38, position: "Bek kanan", age: 20, country: "England", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Paul Tierney", shirtNumber: 39, position: "Bek kiri", age: 19, country: "Republic of Ireland", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Daniel Nardiello", shirtNumber: 40, position: "Striker", age: 19, country: "Wales", appearances: 2, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Alan Tate", shirtNumber: 41, position: "Bek tengah", age: 19, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Kieran Richardson", shirtNumber: 42, position: "Winger kiri", age: 17, country: "England", appearances: 9, goals: 1, assists: 0, status: "Pemain muda" },
      { name: "Mads Timm", shirtNumber: 43, position: "Striker/gelandang serang", age: 17, country: "Denmark", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Luke Steele", shirtNumber: 44, position: "Kiper", age: 17, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Chris Eagles", shirtNumber: 45, position: "Winger kanan", age: 16, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" }
    ],
    transfersIn: [
      { player: "Rio Ferdinand", from: "Leeds United", fee: "EUR 46.00m", date: "22 Juli 2002", note: "Transfermarkt mencatat EUR 46.00m; UEFA menulis EUR 46.9m dan sumber Inggris mencatat GBP 29.1m-30m." },
      { player: "Ricardo Lopez", from: "Real Valladolid", fee: "EUR 2.23m", date: "30 Agustus 2002", note: "Kiper pelapis; Transfermarkt mencatat EUR 2.23m dan sumber Inggris mencatat sekitar GBP 1.5m." },
      { player: "Hussein Yasser", from: "Al-Rayyan", fee: "EUR 250k", date: "2002/03", note: "Pemain muda/reserve yang dicatat Transfermarkt sebagai kedatangan musim ini." },
      { player: "Souleymane Mamam", from: "AC Merlan Lome", fee: "EUR 55k", date: "2002/03", note: "Pemain muda/reserve yang dicatat Transfermarkt sebagai kedatangan musim ini." },
      { player: "Colin Heath", from: "Manchester United U18", fee: "-", date: "2002/03", note: "Promosi dari kelompok muda menurut catatan Transfermarkt." },
      { player: "Kirk Hilton", from: "Livingston FC", fee: "End of loan", date: "25 Mei 2003", note: "Kembali dari masa pinjaman di Livingston." },
      { player: "Luke Chadwick", from: "Reading", fee: "End of loan", date: "1 Mei 2003", note: "Kembali dari pinjaman sebelum dipinjamkan lagi pada Maret 2003 dan kembali akhir musim." },
      { player: "Jimmy Davis", from: "Swindon Town", fee: "End of loan", date: "31 Mei 2003", note: "Kembali dari pinjaman." },
      { player: "Alan Tate", from: "Swansea City", fee: "End of loan", date: "4 Mei 2003", note: "Kembali dari pinjaman." },
      { player: "Danny Webber", from: "Watford", fee: "End of loan", date: "27 Oktober 2002", note: "Kembali dari pinjaman awal musim." },
      { player: "Ben Muirhead", from: "Doncaster Rovers", fee: "End of loan", date: "1 Desember 2002", note: "Kembali dari pinjaman tim muda/reserve." }
    ],
    transfersOut: [
      { player: "Nick Culkin", to: "Released", fee: "Released", date: "7 Juli 2002", note: "Dilepas pada awal musim 2002/03." },
      { player: "Dwight Yorke", to: "Blackburn Rovers", fee: "EUR 3.50m", date: "26 Juli 2002", note: "Transfermarkt mencatat EUR 3.50m; sumber Inggris mencatat sekitar GBP 2m." },
      { player: "Denis Irwin", to: "Wolverhampton Wanderers", fee: "Free transfer", date: "Juli 2002", note: "Transfermarkt mencatat free transfer ke Wolves; juga sering dicatat sebagai bagian dari keluaran akhir musim 2001/02." },
      { player: "Ronny Johnsen", to: "Aston Villa", fee: "Free transfer", date: "Juli 2002", note: "Keluar bebas transfer setelah perannya menurun." },
      { player: "Ronnie Wallwork", to: "West Bromwich Albion", fee: "Free transfer", date: "Juli 2002", note: "Keluar permanen dengan free transfer menurut Transfermarkt." },
      { player: "Ben Muirhead", to: "Bradford City", fee: "Free transfer", date: "2002/03", note: "Transfermarkt mencatat keluar ke Bradford dengan free transfer." },
      { player: "Andrew Taylor", to: "Northwich Victoria", fee: "Tidak diketahui", date: "2002/03", note: "Transfermarkt mencatat tujuan Northwich Victoria tetapi nominal fee tidak tersedia." },
      { player: "Luke Chadwick", to: "Reading", fee: "Loan transfer", date: "7 Februari 2003", note: "Pinjaman pertama ke Reading pada paruh kedua musim." },
      { player: "Luke Chadwick", to: "Reading", fee: "Loan transfer", date: "27 Maret 2003", note: "Pinjaman kedua ke Reading sampai akhir musim." },
      { player: "Danny Webber", to: "Watford", fee: "Loan transfer", date: "12 Agustus 2002", note: "Dipinjamkan ke Watford sampai 27 Oktober 2002." },
      { player: "Jimmy Davis", to: "Swindon Town", fee: "Loan transfer", date: "9 Agustus 2002", note: "Dipinjamkan selama tiga bulan." },
      { player: "Kirk Hilton", to: "Livingston FC", fee: "Loan transfer", date: "30 Agustus 2002", note: "Dipinjamkan ke Livingston sampai Mei 2003." },
      { player: "Bojan Djordjic", to: "Aarhus Fremad", fee: "Loan transfer", date: "1 September 2002", note: "Dipinjamkan ke Denmark untuk mendapat menit bermain." },
      { player: "Paul Tierney", to: "Crewe Alexandra", fee: "Loan transfer", date: "7 November 2002", note: "Dipinjamkan sampai Maret 2003." },
      { player: "Alan Tate", to: "Swansea City", fee: "Loan transfer", date: "18 November 2002", note: "Dipinjamkan sampai Mei 2003." },
      { player: "Lee Roche", to: "Released", fee: "Released", date: "5 Juni 2003", note: "Dilepas setelah hanya tampil dua kali musim ini." },
      { player: "David May", to: "Released", fee: "Released", date: "5 Juni 2003", note: "Dilepas setelah sembilan tahun di United." },
      { player: "Laurent Blanc", to: "Retired", fee: "Retired", date: "30 Juni 2003", note: "Pensiun setelah musim berakhir." },
      { player: "David Beckham", to: "Real Madrid", fee: "EUR 37.50m", date: "2 Juli 2003", note: "Transfer setelah musim selesai; sumber Inggris mencatat sekitar GBP 25m dan Transfermarkt 2003/04 mencatat EUR 37.50m." },
      { player: "Juan Sebastian Veron", to: "Chelsea", fee: "EUR 21.80m", date: "6 Agustus 2003", note: "Keluar pada musim panas berikutnya; sumber Inggris mencatat sekitar GBP 15m." }
    ],
    commonStartingXI: {
      formation: "4-4-1-1",
      players: {
        GK: "Fabien Barthez",
        RB: "Gary Neville",
        CB1: "Rio Ferdinand",
        CB2: "Mikael Silvestre",
        LB: "John O'Shea",
        RM: "David Beckham",
        CM1: "Roy Keane",
        CM2: "Juan Sebastian Veron",
        LM: "Ryan Giggs",
        ST1: "Paul Scholes",
        ST2: "Ruud van Nistelrooy"
      }
    },
    keyPlayers: [
      { name: "Ruud van Nistelrooy", position: "Striker", contribution: "52 main, 44 gol semua kompetisi, 25 gol Premier League, 4 assist Premier League", story: "Van Nistelrooy menjalani musim terbaiknya di United. Ia menjadi top skor Premier League, top skor United, dan pemain paling menentukan dalam pengejaran gelar." },
      { name: "Ryan Giggs", position: "Winger kiri", contribution: "59 main, 14 gol semua kompetisi, 14 assist Premier League", story: "Giggs menjadi kreator utama United musim ini. StatBunker mencatat 14 assist Premier League, tertinggi di skuad." },
      { name: "Paul Scholes", position: "Gelandang serang/second striker", contribution: "52 main, 20 gol semua kompetisi, 4 assist Premier League", story: "Scholes sering bermain di belakang Van Nistelrooy dan mencetak 20 gol, salah satu musim paling produktifnya." },
      { name: "Rio Ferdinand", position: "Bek tengah", contribution: "46 main, 1 assist Premier League", story: "Ferdinand memberi United kualitas bek tengah elite lagi setelah kehilangan Jaap Stam. Transfernya menjadi fondasi pertahanan baru Ferguson." },
      { name: "John O'Shea", position: "Bek serbabisa", contribution: "52 main, 1 assist Premier League", story: "O'Shea menjadi breakthrough player. Ia sering bermain di bek kiri, tetapi juga bisa mengisi bek tengah dan kanan." },
      { name: "David Beckham", position: "Gelandang kanan", contribution: "52 main, 11 gol semua kompetisi, 9 assist Premier League", story: "Beckham tetap berkontribusi besar, namun musim ini menjadi akhir perjalanannya di United sebelum pindah ke Real Madrid." },
      { name: "Ole Gunnar Solskjaer", position: "Striker/winger kanan", contribution: "57 main, 15 gol semua kompetisi, 7 assist Premier League", story: "Solskjaer penting karena fleksibel: ia bisa menjadi penyerang tengah atau solusi di sisi kanan ketika Beckham tidak starter." },
      { name: "Mikael Silvestre", position: "Bek kiri/bek tengah", contribution: "54 main, 1 gol semua kompetisi, 7 assist Premier League", story: "Silvestre menjadi salah satu pemain tersibuk dan memberi kecepatan di lini belakang, terutama saat berpasangan dengan Ferdinand." }
    ],
    statistics: {
      leaguePosition: "1st Premier League",
      matches: 63,
      wins: 42,
      draws: 10,
      losses: 11,
      goalsFor: 130,
      goalsAgainst: 61,
      topScorer: "Ruud van Nistelrooy (44 gol semua kompetisi / 25 gol liga)",
      topAssist: "Ryan Giggs (14 assist Premier League)",
      mostAppearances: "Ryan Giggs (59 main)"
    },
    importantMoments: [
      { month: "22 Juli 2002", title: "Rio Ferdinand datang dari Leeds", description: "United membeli Ferdinand dengan biaya rekor Inggris dan rekor dunia untuk bek.", impact: "Memberi fondasi baru di pertahanan setelah masalah besar musim sebelumnya." },
      { month: "14 September 2002", title: "Start buruk di Elland Road", description: "United kalah 0-1 dari Leeds dan sempat berada di posisi 10 Premier League.", impact: "Memperjelas bahwa perebutan gelar tidak akan mudah dan United harus membangun momentum dari posisi tertinggal." },
      { month: "1 Desember 2002", title: "Forlan dua gol di Anfield", description: "United menang 2-1 atas Liverpool lewat dua gol Diego Forlan.", impact: "Menjadi salah satu kemenangan tandang paling terkenal musim ini dan momen kultus Forlan di United." },
      { month: "7 Desember 2002", title: "Arsenal dikalahkan 2-0", description: "Gol Veron dan Scholes memberi United kemenangan penting atas Arsenal di Old Trafford.", impact: "United memangkas jarak psikologis dengan Arsenal dan mulai terlihat sebagai penantang serius lagi." },
      { month: "2 Maret 2003", title: "Final League Cup kalah dari Liverpool", description: "United kalah 0-2 dari Liverpool di Millennium Stadium, Cardiff.", impact: "Satu trofi domestik lepas, tetapi fokus perebutan liga tetap hidup." },
      { month: "12 April 2003", title: "Newcastle dihancurkan 6-2", description: "Scholes mencetak hat-trick dalam kemenangan besar di St James' Park.", impact: "Kemenangan ini menjadi titik lonjakan besar dalam perburuan gelar." },
      { month: "16 April 2003", title: "Highbury berakhir 2-2", description: "United menahan Arsenal 2-2 lewat gol Van Nistelrooy dan Giggs.", impact: "Hasil ini menjaga United di jalur juara dan menambah tekanan ke Arsenal." },
      { month: "23 April 2003", title: "Menang 4-3 atas Real Madrid", description: "United menang di Old Trafford, tetapi tersingkir agregat 5-6. Beckham mencetak dua gol dari bangku cadangan.", impact: "Salah satu laga Eropa paling ikonik era Ferguson, sekaligus salah satu bab akhir Beckham di United." },
      { month: "4 Mei 2003", title: "Gelar liga dipastikan", description: "Kekalahan Arsenal dari Leeds membuat United memastikan gelar Premier League 2002/03.", impact: "United merebut kembali tahta Inggris setelah kehilangan gelar pada musim sebelumnya." },
      { month: "2 Juli 2003", title: "Beckham pindah ke Real Madrid", description: "Setelah musim selesai, Beckham meninggalkan United menuju Real Madrid.", impact: "Menutup era besar Class of 92 di sisi kanan United dan membuka jalan bagi nomor 7 berikutnya."
      }
    ],
    additionalInfo: [
      "Rekor liga United: 38 pertandingan, 25 menang, 8 seri, 5 kalah, gol 74:34, 83 poin.",
      "Rekor semua kompetisi MUFCInfo: 63 pertandingan, 42 menang, 10 seri, 11 kalah, gol 130:61.",
      "United finis juara Premier League dengan keunggulan lima poin atas Arsenal.",
      "FA Cup berakhir di ronde kelima setelah kalah 0-2 dari Arsenal di Old Trafford.",
      "League Cup berakhir sebagai runner-up setelah kalah 0-2 dari Liverpool di final.",
      "Champions League berakhir di perempat final setelah kalah agregat 5-6 dari Real Madrid.",
      "Assist yang diisi pada tabel skuad adalah assist Premier League dari StatBunker, bukan semua kompetisi.",
      "Top assist Premier League United 2002/03: Ryan Giggs 14, David Beckham 9, Ole Gunnar Solskjaer 7, Mikael Silvestre 7, Paul Scholes 4, Gary Neville 4, Ruud van Nistelrooy 4, Diego Forlan 2, Juan Sebastian Veron 2, Quinton Fortune 1, Phil Neville 1, Rio Ferdinand 1, Roy Keane 1, dan John O'Shea 1.",
      "Nomor skuad 2002/03 mengikuti United By Numbers: Barthez 1, Gary Neville 2, Phil Neville 3, Veron 4, Blanc 5, Ferdinand 6, Beckham 7, Butt 8, Van Nistelrooy 10, Giggs 11, Carroll 13, Keane 16, Scholes 18, Ricardo 19, Solskjaer 20, Forlan 21, O'Shea 22, Brown 24, Silvestre 27, Fletcher 31, Richardson 42, dan Timm 43.",
      "Transfermarkt mencatat pengeluaran United 2002/03 sebesar EUR 48.53m dan pemasukan EUR 3.50m.",
      "Rio Ferdinand ditulis EUR 46.00m mengikuti Transfermarkt; UEFA mencatat EUR 46.9m dan sumber Inggris mencatat GBP 29.1m-30m.",
      "Ricardo Lopez ditulis EUR 2.23m mengikuti Transfermarkt; sumber Inggris mencatat sekitar GBP 1.5m.",
      "David Beckham dan Juan Sebastian Veron dicatat di transfer keluar sebagai konteks akhir musim, meski secara administrasi masuk bursa musim panas 2003/04."
    ],
    featured: false
  },
  {
    id: "2003-04",
    label: "2003/04",
    title: "Manchester United Musim 2003/04",
    era: "Era Ronaldo & Rooney",
    managers: ["Sir Alex Ferguson"],
    competitions: [
      "Premier League",
      "FA Cup",
      "League Cup",
      "UEFA Champions League",
      "FA Community Shield"
    ],
    leaguePosition: "3rd Premier League",
    trophies: ["FA Cup", "FA Community Shield"],
    summary:
      "Musim transisi besar setelah gelar liga 2002/03. David Beckham dan Juan Sebastian Veron pergi, Cristiano Ronaldo datang sebagai pewaris nomor 7, Rio Ferdinand terkena skorsing panjang, dan United gagal mempertahankan Premier League tetapi menutup musim dengan FA Cup.",
    story: [
      "United masuk musim 2003/04 sebagai juara Premier League, tetapi skuadnya berubah drastis. Beckham pindah ke Real Madrid, Veron dijual ke Chelsea, dan Ferguson membawa wajah baru seperti Cristiano Ronaldo, Tim Howard, Kleberson, Eric Djemba-Djemba, David Bellion, lalu Louis Saha pada Januari.",
      "Community Shield memberi awal positif. United menahan Arsenal 1-1 dan menang adu penalti 4-3, dengan Tim Howard langsung membuat kesan kuat sebagai kiper baru.",
      "Di liga, United sempat terlihat cukup stabil dan ikut bersaing di papan atas, tetapi musim ini akhirnya menjadi milik Arsenal Invincibles. Arsenal tidak kalah dalam 38 laga liga, sementara United finis ketiga dengan 75 poin.",
      "Titik paling merusak adalah skorsing delapan bulan Rio Ferdinand karena gagal hadir pada tes doping. Setelah Ferdinand absen mulai Januari 2004, struktur pertahanan United jauh lebih rapuh.",
      "Champions League berakhir sangat pahit melawan Porto. United hampir lolos di Old Trafford, tetapi gol Costinha pada menit akhir membuat Porto lolos agregat 3-2 dan kemudian menjadi juara Eropa.",
      "FA Cup menyelamatkan musim. United mengalahkan Arsenal di semifinal lewat gol Paul Scholes, lalu menang 3-0 atas Millwall di final. Cristiano Ronaldo mencetak gol pembuka dan Ruud van Nistelrooy mencetak dua gol."
    ],
    squad: [
      { name: "Fabien Barthez", shirtNumber: 1, position: "Kiper", age: 32, country: "France", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Cadangan" },
      { name: "Gary Neville", shirtNumber: 2, position: "Bek kanan", age: 28, country: "England", appearances: 42, goals: 2, assists: 3, status: "Pemain utama" },
      { name: "Phil Neville", shirtNumber: 3, position: "Bek/gelandang bertahan", age: 26, country: "England", appearances: 43, goals: 1, assists: 0, status: "Pemain utama" },
      { name: "Rio Ferdinand", shirtNumber: 5, position: "Bek tengah", age: 24, country: "England", appearances: 27, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Wes Brown", shirtNumber: 6, position: "Bek tengah/bek kanan", age: 23, country: "England", appearances: 25, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Cristiano Ronaldo", shirtNumber: 7, position: "Winger kanan/kiri", age: 18, country: "Portugal", appearances: 40, goals: 6, assists: 4, status: "Pemain utama" },
      { name: "Nicky Butt", shirtNumber: 8, position: "Gelandang tengah", age: 28, country: "England", appearances: 34, goals: 2, assists: 0, status: "Cadangan" },
      { name: "Louis Saha", shirtNumber: 9, position: "Striker", age: 25, country: "France", appearances: 14, goals: 7, assists: 2, status: "Pemain utama" },
      { name: "Ruud van Nistelrooy", shirtNumber: 10, position: "Striker", age: 27, country: "Netherlands", appearances: 44, goals: 30, assists: 2, status: "Pemain utama" },
      { name: "Ryan Giggs", shirtNumber: 11, position: "Winger kiri", age: 29, country: "Wales", appearances: 47, goals: 8, assists: 11, status: "Pemain utama" },
      { name: "David Bellion", shirtNumber: 12, position: "Striker/winger", age: 20, country: "France", appearances: 22, goals: 3, assists: 1, status: "Cadangan" },
      { name: "Roy Carroll", shirtNumber: 13, position: "Kiper", age: 25, country: "Northern Ireland", appearances: 12, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Tim Howard", shirtNumber: 14, position: "Kiper", age: 24, country: "United States", appearances: 44, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Jose Kleberson", shirtNumber: 15, position: "Gelandang tengah", age: 24, country: "Brazil", appearances: 16, goals: 2, assists: 3, status: "Cadangan" },
      { name: "Roy Keane", shirtNumber: 16, position: "Kapten, gelandang tengah", age: 32, country: "Republic of Ireland", appearances: 38, goals: 3, assists: 3, status: "Pemain utama" },
      { name: "Ricardo Lopez", shirtNumber: 17, position: "Kiper", age: 31, country: "Spain", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Cadangan" },
      { name: "Paul Scholes", shirtNumber: 18, position: "Gelandang tengah/gelandang serang", age: 28, country: "England", appearances: 40, goals: 14, assists: 3, status: "Pemain utama" },
      { name: "Eric Djemba-Djemba", shirtNumber: 19, position: "Gelandang bertahan", age: 22, country: "Cameroon", appearances: 22, goals: 2, assists: 0, status: "Cadangan" },
      { name: "Ole Gunnar Solskjaer", shirtNumber: 20, position: "Striker/winger kanan", age: 30, country: "Norway", appearances: 19, goals: 1, assists: 2, status: "Cadangan" },
      { name: "Diego Forlan", shirtNumber: 21, position: "Striker", age: 24, country: "Uruguay", appearances: 32, goals: 8, assists: 4, status: "Cadangan" },
      { name: "John O'Shea", shirtNumber: 22, position: "Bek kiri/bek tengah/bek kanan", age: 22, country: "Republic of Ireland", appearances: 49, goals: 2, assists: 1, status: "Pemain utama" },
      { name: "Kieran Richardson", shirtNumber: 23, position: "Winger kiri", age: 18, country: "England", appearances: 3, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Darren Fletcher", shirtNumber: 24, position: "Gelandang tengah/gelandang kanan", age: 19, country: "Scotland", appearances: 35, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Quinton Fortune", shirtNumber: 25, position: "Bek kiri/gelandang kiri", age: 26, country: "South Africa", appearances: 35, goals: 3, assists: 0, status: "Pemain utama" },
      { name: "Danny Pugh", shirtNumber: 26, position: "Gelandang kiri/bek kiri", age: 20, country: "England", appearances: 2, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Mikael Silvestre", shirtNumber: 27, position: "Bek tengah/bek kiri", age: 26, country: "France", appearances: 46, goals: 3, assists: 0, status: "Pemain utama" },
      { name: "Eddie Johnson", shirtNumber: 32, position: "Striker", age: 19, country: "England", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Chris Eagles", shirtNumber: 33, position: "Winger kanan", age: 17, country: "England", appearances: 2, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Phil Bardsley", shirtNumber: 34, position: "Bek kanan", age: 18, country: "England", appearances: 2, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Daniel Nardiello", shirtNumber: 36, position: "Striker", age: 20, country: "Wales", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Paul Tierney", shirtNumber: 39, position: "Bek kiri", age: 20, country: "Republic of Ireland", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" }
    ],
    transfersIn: [
      { player: "David Bellion", from: "Sunderland", fee: "EUR 3.00m", date: "1 Juli 2003", note: "Transfermarkt mencatat EUR 3.00m; sumber Inggris mencatat kompensasi awal sekitar GBP 2m." },
      { player: "Eric Djemba-Djemba", from: "FC Nantes", fee: "EUR 4.50m", date: "3 Juli 2003", note: "Gelandang bertahan muda sebagai opsi rotasi untuk lini tengah." },
      { player: "Tim Howard", from: "MetroStars/New York", fee: "EUR 3.20m", date: "15 Juli 2003", note: "Datang dari MLS dan langsung menjadi kiper utama." },
      { player: "Jose Kleberson", from: "Athletico Paranaense", fee: "EUR 8.60m", date: "12 Agustus 2003", note: "Juara dunia 2002 bersama Brasil; sumber Inggris mencatat GBP 5.93m." },
      { player: "Cristiano Ronaldo", from: "Sporting CP", fee: "EUR 19.00m", date: "12 Agustus 2003", note: "Transfer historis pewaris nomor 7; sumber Inggris mencatat GBP 12.24m." },
      { player: "Dong Fangzhuo", from: "Dalian Shide", fee: "EUR 725k", date: "12 Januari 2004", note: "Transfer Januari, lalu dipinjamkan ke Royal Antwerp." },
      { player: "Louis Saha", from: "Fulham", fee: "EUR 17.50m", date: "23 Januari 2004", note: "Rekrutan Januari yang langsung tajam di liga, tetapi cup-tied di FA Cup." },
      { player: "Phil Bardsley", from: "Manchester United U18", fee: "-", date: "2003/04", note: "Promosi pemain muda; tampil dua kali semua kompetisi." },
      { player: "Chris Eagles", from: "Manchester United U18", fee: "-", date: "2003/04", note: "Promosi pemain muda; tampil dua kali di League Cup." },
      { player: "Jonathan Spector", from: "Akademi/Chicago Sockers", fee: "-", date: "Juli 2003", note: "Pemain muda yang masuk daftar nomor skuad, tetapi belum tampil di tim utama musim ini." },
      { player: "Alan Smith", from: "Leeds United", fee: "EUR 9.00m", date: "26 Mei 2004", note: "Disepakati setelah musim selesai dan efektif untuk skuad 2004/05; Transfermarkt 2004/05 mencatat EUR 9.00m." },
      { player: "Gabriel Heinze", from: "Paris Saint-Germain", fee: "EUR 10.00m", date: "11 Juni 2004", note: "Disepakati setelah musim selesai dan efektif untuk skuad 2004/05; Transfermarkt 2004/05 mencatat EUR 10.00m." }
    ],
    transfersOut: [
      { player: "David Beckham", to: "Real Madrid", fee: "EUR 37.50m", date: "2 Juli 2003", note: "Akhir era Beckham di United; Transfermarkt mencatat EUR 37.50m dan sumber Inggris mencatat GBP 17.25m yang bisa naik ke GBP 24.25m." },
      { player: "Danny Webber", to: "Watford", fee: "Free transfer", date: "7 Juli 2003", note: "Wikipedia/BBC menulis undisclosed, sedangkan Transfermarkt mencatat free transfer." },
      { player: "Juan Sebastian Veron", to: "Chelsea", fee: "EUR 21.80m", date: "7 Agustus 2003", note: "Transfermarkt mencatat EUR 21.80m; sumber Inggris mencatat sekitar GBP 15m." },
      { player: "Jimmy Davis", to: "Deceased", fee: "-", date: "9 Agustus 2003", note: "Meninggal dunia dalam kecelakaan mobil saat masa pinjaman di Watford." },
      { player: "Kirk Hilton", to: "Blackpool", fee: "Free transfer", date: "2003/04", note: "Transfermarkt mencatat keluar permanen ke Blackpool." },
      { player: "Alan Tate", to: "Swansea City", fee: "Free transfer", date: "6 Februari 2004", note: "Wikipedia/BBC menulis undisclosed; Transfermarkt mencatat free transfer." },
      { player: "David May", to: "Burnley", fee: "Free transfer", date: "Agustus 2003", note: "Keluar setelah dilepas pada akhir musim sebelumnya." },
      { player: "Lee Roche", to: "Burnley", fee: "Free transfer", date: "2003/04", note: "Keluar permanen ke Burnley menurut Transfermarkt." },
      { player: "Matthew Williams", to: "Notts County", fee: "Free transfer", date: "2003/04", note: "Pemain muda keluar menurut catatan Transfermarkt." },
      { player: "Fabien Barthez", to: "Marseille", fee: "Loan transfer", date: "Januari 2004", note: "Dipinjamkan ke Marseille; Wikipedia mencatat transfer permanen pada 27 April 2004 dengan fee GBP 5m." },
      { player: "Ricardo Lopez", to: "Racing Santander", fee: "Loan transfer", date: "24 Agustus 2003", note: "Dipinjamkan ke Spanyol setelah Tim Howard datang." },
      { player: "Luke Chadwick", to: "Burnley", fee: "Loan transfer", date: "10 Juli 2003", note: "Dipinjamkan sepanjang musim." },
      { player: "Michael Stewart", to: "Nottingham Forest", fee: "Loan transfer", date: "29 Juli 2003", note: "Dipinjamkan ke Nottingham Forest." },
      { player: "Bojan Djordjic", to: "Red Star Belgrade", fee: "Loan transfer", date: "19 Juli 2003", note: "Dipinjamkan ke Red Star." },
      { player: "Dong Fangzhuo", to: "Royal Antwerp", fee: "Loan transfer", date: "Januari 2004", note: "Dipinjamkan setelah datang dari Dalian Shide." },
      { player: "Danny Pugh", to: "Leeds United", fee: "Free transfer", date: "26 Mei 2004", note: "Pindah ke Leeds sebagai bagian dari deal Alan Smith menurut ringkasan musim." }
    ],
    commonStartingXI: {
      formation: "4-4-1-1",
      players: {
        GK: "Tim Howard",
        RB: "Gary Neville",
        CB1: "Rio Ferdinand",
        CB2: "Mikael Silvestre",
        LB: "John O'Shea",
        RM: "Cristiano Ronaldo",
        CM1: "Roy Keane",
        CM2: "Paul Scholes",
        LM: "Ryan Giggs",
        ST1: "Louis Saha",
        ST2: "Ruud van Nistelrooy"
      }
    },
    keyPlayers: [
      { name: "Ruud van Nistelrooy", position: "Striker", contribution: "44 main, 30 gol semua kompetisi, 20 gol Premier League", story: "Van Nistelrooy tetap menjadi mesin gol utama. Ia mencetak 30 gol semua kompetisi, termasuk dua gol di final FA Cup melawan Millwall." },
      { name: "Cristiano Ronaldo", position: "Winger kanan/kiri", contribution: "40 main, 6 gol semua kompetisi, 4 assist Premier League", story: "Ronaldo datang sebagai remaja nomor 7. Musim pertamanya belum matang, tetapi dribel dan keberaniannya langsung memberi warna baru, lalu ia mencetak gol pembuka di final FA Cup." },
      { name: "Ryan Giggs", position: "Winger kiri", contribution: "47 main, 8 gol semua kompetisi, 11 assist Premier League", story: "Giggs menjadi sumber kreativitas utama setelah Beckham pergi. Transfermarkt/StatsCrew mencatatnya sebagai top assist liga United musim ini." },
      { name: "Paul Scholes", position: "Gelandang tengah/gelandang serang", contribution: "40 main, 14 gol semua kompetisi", story: "Scholes menjadi salah satu pemain terpenting musim ini. Golnya di semifinal FA Cup melawan Arsenal menjadi momen penentu." },
      { name: "Tim Howard", position: "Kiper", contribution: "44 main semua kompetisi", story: "Howard langsung menjadi kiper utama dan membantu United memenangi Community Shield lewat adu penalti, meski performanya menurun pada beberapa momen besar paruh kedua musim." },
      { name: "Rio Ferdinand", position: "Bek tengah", contribution: "27 main sebelum skorsing panjang", story: "Rio adalah bek terbaik United, tetapi skorsing delapan bulannya mengubah arah musim. Absennya Rio sangat terasa dalam penurunan performa liga." },
      { name: "John O'Shea", position: "Bek serbabisa", contribution: "49 main, 2 gol semua kompetisi", story: "O'Shea menjadi pemain paling sering tampil. Fleksibilitasnya penting saat United kekurangan stabilitas di pertahanan." },
      { name: "Louis Saha", position: "Striker", contribution: "14 main, 7 gol semua kompetisi", story: "Saha datang Januari dan langsung tajam. Ia memberi opsi baru di depan, walau tidak bisa tampil di FA Cup karena sudah bermain untuk Fulham." }
    ],
    statistics: {
      leaguePosition: "3rd Premier League",
      matches: 55,
      wins: 35,
      draws: 8,
      losses: 12,
      goalsFor: 98,
      goalsAgainst: 49,
      topScorer: "Ruud van Nistelrooy (30 gol semua kompetisi / 20 gol liga)",
      topAssist: "Ryan Giggs (11 assist Premier League menurut Transfermarkt/StatsCrew)",
      mostAppearances: "John O'Shea (49 main)"
    },
    importantMoments: [
      { month: "10 Agustus 2003", title: "Community Shield dimenangi", description: "United bermain 1-1 melawan Arsenal lalu menang adu penalti 4-3.", impact: "Memberi awal positif untuk era tanpa Beckham dan awal Tim Howard sebagai kiper utama." },
      { month: "12 Agustus 2003", title: "Cristiano Ronaldo datang", description: "United membeli Ronaldo dari Sporting CP dan memberinya nomor 7.", impact: "Menjadi transfer paling penting secara sejarah dalam musim transisi ini." },
      { month: "21 September 2003", title: "Battle of Old Trafford", description: "United dan Arsenal bermain 0-0; Van Nistelrooy gagal penalti di akhir laga dan terjadi keributan setelah peluit akhir.", impact: "Menjadi salah satu laga paling panas rivalitas United-Arsenal." },
      { month: "Januari 2004", title: "Rio Ferdinand mulai diskors", description: "Ferdinand menjalani skorsing delapan bulan setelah gagal hadir pada tes doping.", impact: "Pertahanan United kehilangan pemain paling tenang dan performa liga menurun tajam." },
      { month: "23 Januari 2004", title: "Louis Saha datang dari Fulham", description: "United membeli Saha pada bursa Januari dan ia langsung mencetak gol-gol penting di liga.", impact: "Menambah daya ledak lini depan, meski tidak bisa bermain di FA Cup." },
      { month: "9 Maret 2004", title: "Porto menyingkirkan United", description: "Scholes membawa United unggul, tetapi Costinha mencetak gol telat untuk Porto di Old Trafford.", impact: "United tersingkir dari Champions League dan Jose Mourinho mulai mencuri perhatian Eropa." },
      { month: "14 Maret 2004", title: "Derby kalah 1-4 dari City", description: "United kalah telak dari Manchester City di Premier League.", impact: "Menjadi simbol runtuhnya konsistensi liga setelah skorsing Ferdinand." },
      { month: "3 April 2004", title: "Arsenal dikalahkan di semifinal FA Cup", description: "Gol Paul Scholes memberi United kemenangan 1-0 atas Arsenal di Villa Park.", impact: "Membuka jalan menuju trofi FA Cup dan menghentikan peluang treble domestik Arsenal." },
      { month: "22 Mei 2004", title: "FA Cup dimenangi atas Millwall", description: "United menang 3-0 lewat gol Ronaldo dan dua gol Van Nistelrooy.", impact: "Menyelamatkan musim transisi dengan trofi besar dan memberi Ronaldo trofi pertamanya bersama United." }
    ],
    additionalInfo: [
      "Rekor liga United: 38 pertandingan, 23 menang, 6 seri, 9 kalah, gol 64:35, 75 poin, finis posisi 3.",
      "Rekor semua kompetisi MUFCInfo: 55 pertandingan, 35 menang, 8 seri, 12 kalah, gol 98:49.",
      "United menjuarai FA Cup 2003/04 setelah menang 3-0 atas Millwall di Millennium Stadium, Cardiff.",
      "United memenangkan FA Community Shield 2003 atas Arsenal lewat adu penalti setelah skor 1-1.",
      "League Cup berakhir di ronde keempat setelah kalah 0-2 dari West Bromwich Albion.",
      "Champions League berakhir di babak 16 besar setelah kalah agregat 2-3 dari Porto.",
      "Assist yang diisi pada tabel skuad adalah assist Premier League dari Transfermarkt/StatsCrew, bukan semua kompetisi.",
      "Top assist Premier League United 2003/04 menurut Transfermarkt/StatsCrew: Ryan Giggs 11, Cristiano Ronaldo 4, Diego Forlan 4, Paul Scholes 3, Roy Keane 3, Kleberson 3, Gary Neville 3, Ruud van Nistelrooy 2, Louis Saha 2, Ole Gunnar Solskjaer 2, David Bellion 1, dan John O'Shea 1.",
      "StatBunker memakai pencatatan berbeda dan menampilkan Ryan Giggs 13 assist, Cristiano Ronaldo 5 assist, serta Gary Neville 5 assist untuk Premier League 2003/04.",
      "Nomor skuad 2003/04 mengikuti United By Numbers: Gary Neville 2, Phil Neville 3, Ferdinand 5, Brown 6, Ronaldo 7, Butt 8, Saha 9, Van Nistelrooy 10, Giggs 11, Bellion 12, Carroll 13, Howard 14, Kleberson 15, Keane 16, Ricardo 17, Scholes 18, Djemba-Djemba 19, Solskjaer 20, Forlan 21, O'Shea 22, Richardson 23, Fletcher 24, Fortune 25, Pugh 26, Silvestre 27, Eagles 33, Bardsley 34, Nardiello 36, dan Tierney 39.",
      "Transfermarkt mencatat pengeluaran United 2003/04 sebesar EUR 56.53m dan pemasukan EUR 59.30m.",
      "Transfermarkt mencatat kedatangan utama: Cristiano Ronaldo EUR 19.00m, Louis Saha EUR 17.50m, Kleberson EUR 8.60m, Eric Djemba-Djemba EUR 4.50m, Tim Howard EUR 3.20m, David Bellion EUR 3.00m, dan Dong Fangzhuo EUR 725k.",
      "Transfermarkt mencatat penjualan utama: David Beckham EUR 37.50m dan Juan Sebastian Veron EUR 21.80m.",
      "Alan Smith dan Gabriel Heinze dicatat sebagai konteks akhir musim karena transfernya terjadi pada Mei/Juni 2004 untuk skuad 2004/05."
    ],
    featured: false
  },
  {
    id: "2004-05",
    label: "2004/05",
    title: "Manchester United Musim 2004/05",
    era: "Era Ronaldo & Rooney",
    managers: ["Sir Alex Ferguson"],
    competitions: [
      "Premier League",
      "FA Cup",
      "League Cup",
      "UEFA Champions League",
      "FA Community Shield"
    ],
    leaguePosition: "3rd Premier League",
    trophies: [],
    summary:
      "Musim transisi tanpa trofi besar: Wayne Rooney datang dan langsung meledak, Cristiano Ronaldo mulai naik level, tetapi Chelsea-nya Jose Mourinho terlalu solid dan United menutup musim dengan kekalahan adu penalti dari Arsenal di final FA Cup.",
    story: [
      "United masuk musim 2004/05 sebagai juara FA Cup, tetapi belum sepenuhnya stabil setelah perubahan besar dua musim sebelumnya. Rio Ferdinand baru kembali dari skorsing pada September 2004, sementara lini depan dan kiper sering berubah karena cedera serta performa.",
      "Bursa transfer membentuk masa depan klub. Alan Smith dan Gabriel Heinze sudah disepakati sebelum musim efektif berjalan, Gerard Pique dan Giuseppe Rossi datang sebagai talenta muda, Liam Miller datang gratis dari Celtic, lalu Wayne Rooney dibeli dari Everton pada deadline day.",
      "Rooney menjadi cerita terbesar. Pada debutnya melawan Fenerbahce di Champions League, ia mencetak hat-trick saat United menang 6-2. Musim pertamanya berakhir dengan 43 penampilan dan 17 gol semua kompetisi, menjadikannya top scorer klub.",
      "Di liga, United finis ketiga dengan 77 poin. Mereka punya pertahanan liga yang kuat, hanya kebobolan 26 gol, tetapi terlalu banyak hasil imbang dan kalah cepat dari Chelsea yang menutup musim dengan 95 poin.",
      "FA Cup hampir menyelamatkan musim. United tampil dominan melawan Arsenal di final, tetapi skor tetap 0-0 sampai extra time dan Paul Scholes menjadi satu-satunya eksekutor yang gagal dalam adu penalti.",
      "Musim ini penting secara jangka panjang karena fondasi Rooney-Ronaldo mulai terlihat, Heinze menjadi pemain favorit fans, dan Ferguson makin jelas perlu menyegarkan kiper serta lini tengah untuk mengejar Chelsea."
    ],
    squad: [
      { name: "Tim Howard", shirtNumber: 1, position: "Kiper", age: 25, country: "United States", appearances: 27, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Gary Neville", shirtNumber: 2, position: "Bek kanan", age: 29, country: "England", appearances: 35, goals: 1, assists: 3, status: "Pemain utama" },
      { name: "Phil Neville", shirtNumber: 3, position: "Bek/gelandang bertahan", age: 27, country: "England", appearances: 34, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Gabriel Heinze", shirtNumber: 4, position: "Bek kiri/bek tengah", age: 26, country: "Argentina", appearances: 39, goals: 1, assists: 1, status: "Pemain utama" },
      { name: "Rio Ferdinand", shirtNumber: 5, position: "Bek tengah", age: 25, country: "England", appearances: 42, goals: 0, assists: 2, status: "Pemain utama" },
      { name: "Wes Brown", shirtNumber: 6, position: "Bek tengah/bek kanan", age: 24, country: "England", appearances: 37, goals: 1, assists: 0, status: "Pemain utama" },
      { name: "Cristiano Ronaldo", shirtNumber: 7, position: "Winger kanan/kiri", age: 19, country: "Portugal", appearances: 50, goals: 9, assists: 4, status: "Pemain utama" },
      { name: "Wayne Rooney", shirtNumber: 8, position: "Second striker/forward", age: 18, country: "England", appearances: 43, goals: 17, assists: 2, status: "Pemain utama" },
      { name: "Louis Saha", shirtNumber: 9, position: "Striker", age: 26, country: "France", appearances: 22, goals: 2, assists: 2, status: "Cadangan" },
      { name: "Ruud van Nistelrooy", shirtNumber: 10, position: "Striker", age: 28, country: "Netherlands", appearances: 27, goals: 16, assists: 1, status: "Pemain utama" },
      { name: "Ryan Giggs", shirtNumber: 11, position: "Winger kiri", age: 30, country: "Wales", appearances: 44, goals: 8, assists: 9, status: "Pemain utama" },
      { name: "David Bellion", shirtNumber: 12, position: "Striker/winger", age: 21, country: "France", appearances: 18, goals: 5, assists: 0, status: "Cadangan" },
      { name: "Roy Carroll", shirtNumber: 13, position: "Kiper", age: 26, country: "Northern Ireland", appearances: 34, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Alan Smith", shirtNumber: 14, position: "Striker/gelandang serang", age: 23, country: "England", appearances: 42, goals: 10, assists: 4, status: "Pemain utama" },
      { name: "Jose Kleberson", shirtNumber: 15, position: "Gelandang tengah", age: 25, country: "Brazil", appearances: 14, goals: 0, assists: 1, status: "Cadangan" },
      { name: "Roy Keane", shirtNumber: 16, position: "Kapten, gelandang tengah", age: 33, country: "Republic of Ireland", appearances: 43, goals: 2, assists: 2, status: "Pemain utama" },
      { name: "Liam Miller", shirtNumber: 17, position: "Gelandang tengah/kanan", age: 23, country: "Republic of Ireland", appearances: 19, goals: 1, assists: 0, status: "Cadangan" },
      { name: "Paul Scholes", shirtNumber: 18, position: "Gelandang tengah/gelandang serang", age: 29, country: "England", appearances: 49, goals: 12, assists: 3, status: "Pemain utama" },
      { name: "Ole Gunnar Solskjaer", shirtNumber: 20, position: "Striker/winger kanan", age: 31, country: "Norway", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Cadangan" },
      { name: "John O'Shea", shirtNumber: 22, position: "Bek/gelandang", age: 23, country: "Republic of Ireland", appearances: 37, goals: 3, assists: 1, status: "Pemain utama" },
      { name: "Kieran Richardson", shirtNumber: 23, position: "Winger kiri/bek kiri", age: 19, country: "England", appearances: 9, goals: 1, assists: 0, status: "Pemain muda" },
      { name: "Darren Fletcher", shirtNumber: 24, position: "Gelandang tengah/kanan", age: 20, country: "Scotland", appearances: 30, goals: 3, assists: 2, status: "Pemain utama" },
      { name: "Quinton Fortune", shirtNumber: 25, position: "Bek kiri/gelandang kiri", age: 27, country: "South Africa", appearances: 33, goals: 1, assists: 0, status: "Pemain utama" },
      { name: "Phil Bardsley", shirtNumber: 26, position: "Bek kanan", age: 19, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Mikael Silvestre", shirtNumber: 27, position: "Bek tengah/bek kiri", age: 27, country: "France", appearances: 50, goals: 2, assists: 1, status: "Pemain utama" },
      { name: "Gerard Pique", shirtNumber: 28, position: "Bek tengah", age: 17, country: "Spain", appearances: 3, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Jonathan Spector", shirtNumber: 29, position: "Bek tengah/bek kiri", age: 18, country: "United States", appearances: 8, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Luke Steele", shirtNumber: 30, position: "Kiper", age: 19, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "David Jones", shirtNumber: 31, position: "Gelandang tengah", age: 19, country: "England", appearances: 2, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Eddie Johnson", shirtNumber: 32, position: "Striker", age: 19, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Chris Eagles", shirtNumber: 33, position: "Winger kanan", age: 18, country: "England", appearances: 7, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Paul McShane", shirtNumber: 34, position: "Bek tengah", age: 18, country: "Republic of Ireland", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Ricardo Lopez", shirtNumber: 35, position: "Kiper", age: 32, country: "Spain", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Cadangan" },
      { name: "Sylvan Ebanks-Blake", shirtNumber: 40, position: "Striker", age: 18, country: "England", appearances: 1, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Giuseppe Rossi", shirtNumber: 42, position: "Forward", age: 17, country: "Italy", appearances: 2, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Diego Forlan", shirtNumber: 21, position: "Striker", age: 25, country: "Uruguay", appearances: 3, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Eric Djemba-Djemba", shirtNumber: 19, position: "Gelandang bertahan", age: 23, country: "Cameroon", appearances: 17, goals: 0, assists: 0, status: "Cadangan" }
    ],
    transfersIn: [
      { player: "Alan Smith", from: "Leeds United", fee: "EUR 9.00m", date: "26 Mei 2004", note: "Disepakati setelah 2003/04 dan efektif untuk skuad 2004/05; Transfermarkt mencatat EUR 9.00m." },
      { player: "Gabriel Heinze", from: "Paris Saint-Germain", fee: "EUR 10.00m", date: "11 Juni 2004", note: "Bek Argentina yang langsung menjadi pilihan utama; Transfermarkt mencatat EUR 10.00m." },
      { player: "Gerard Pique", from: "Barcelona U19", fee: "EUR 5.25m", date: "1 Juli 2004", note: "Transfermarkt mencatat EUR 5.25m; ringkasan musim Inggris mencatat sekitar GBP 4.8m." },
      { player: "Liam Miller", from: "Celtic", fee: "Free transfer", date: "1 Juli 2004", note: "Datang gratis dari Celtic sebagai opsi muda lini tengah." },
      { player: "Giuseppe Rossi", from: "Parma/Manchester United U18", fee: "-", date: "6 Juli 2004", note: "Transfermarkt mencatat masuk dari United U18 tanpa fee; ringkasan musim mencatat kompensasi sekitar GBP 200k dari Parma." },
      { player: "Wayne Rooney", from: "Everton", fee: "EUR 37.00m", date: "31 Agustus 2004", note: "Transfer deadline day. Transfermarkt mencatat EUR 37.00m; sumber Inggris mencatat GBP 27.1m termasuk add-ons." },
      { player: "David Jones", from: "Manchester United U21", fee: "-", date: "2004/05", note: "Gelandang muda dari jalur internal; tampil dua kali semua kompetisi." },
      { player: "Jonathan Spector", from: "Manchester United U18", fee: "-", date: "2004/05", note: "Bek muda yang mendapat nomor 29 dan tampil delapan kali semua kompetisi." },
      { player: "Luke Steele", from: "Coventry City", fee: "End of loan", date: "1 Mei 2005", note: "Kembali dari pinjaman menurut Transfermarkt." },
      { player: "Kieran Richardson", from: "West Bromwich Albion", fee: "End of loan", date: "31 Mei 2005", note: "Kembali dari masa pinjaman setelah paruh kedua musim." }
    ],
    transfersOut: [
      { player: "Mark Lynch", to: "Sunderland", fee: "EUR 75k", date: "14 Juli 2004", note: "Wikipedia mencatat free transfer; Transfermarkt mencatat EUR 75k." },
      { player: "Nicky Butt", to: "Newcastle United", fee: "EUR 3.75m", date: "27 Juli 2004", note: "Akhir perjalanan panjang anggota Class of '92 di United; sumber Inggris mencatat GBP 2.5m." },
      { player: "Luke Chadwick", to: "West Ham United", fee: "Free transfer", date: "2 Agustus 2004", note: "Pindah permanen ke West Ham." },
      { player: "Diego Forlan", to: "Villarreal", fee: "EUR 3.20m", date: "20 Agustus 2004", note: "Transfermarkt mencatat EUR 3.20m; sumber Inggris mencatat sekitar GBP 2.6m." },
      { player: "Bojan Djordjic", to: "Rangers", fee: "Free transfer", date: "27 Desember 2004", note: "Keluar permanen pada bursa musim dingin." },
      { player: "Eric Djemba-Djemba", to: "Aston Villa", fee: "EUR 2.54m", date: "31 Januari 2005", note: "Transfermarkt mencatat EUR 2.54m; sumber Inggris mencatat sekitar GBP 1.35m." },
      { player: "Daniel Nardiello", to: "Barnsley", fee: "EUR 100k", date: "30 Juni 2005", note: "Wikipedia mencatat released, sedangkan Transfermarkt mencatat transfer ke Barnsley senilai EUR 100k." },
      { player: "Fabien Barthez", to: "Marseille", fee: "Free transfer", date: "2004/05", note: "Keluar permanen ke Marseille setelah sebelumnya dipinjamkan." },
      { player: "Danny Pugh", to: "Leeds United", fee: "Free transfer", date: "Juli 2004", note: "Transfer permanen ke Leeds setelah masuk dalam konteks kesepakatan Alan Smith." },
      { player: "Neil Wood", to: "Coventry City", fee: "Free transfer", date: "Juli 2004", note: "Keluar permanen menurut Transfermarkt/United By Numbers." },
      { player: "Roy Carroll", to: "Released", fee: "-", date: "30 Juni 2005", note: "Dilepas pada akhir musim ketika kontraknya habis." },
      { player: "Ricardo Lopez", to: "Released", fee: "-", date: "30 Juni 2005", note: "Dilepas pada akhir musim." },
      { player: "Paul Tierney", to: "Released", fee: "-", date: "30 Juni 2005", note: "Dilepas pada akhir musim." },
      { player: "Arthur Gomez", to: "Released", fee: "-", date: "30 Juni 2005", note: "Dilepas pada akhir musim menurut ringkasan transfer musim." },
      { player: "Eddie Johnson", to: "Coventry City", fee: "Loan transfer", date: "15 Juli 2004", note: "Dipinjamkan hingga akhir musim." },
      { player: "Kenny Cooper", to: "Academica Coimbra", fee: "Loan transfer", date: "18 Agustus 2004", note: "Dipinjamkan ke Portugal." },
      { player: "Luke Steele", to: "Coventry City", fee: "Loan transfer", date: "11 September 2004", note: "Dipinjamkan ke Coventry sebelum kembali pada akhir musim." }
    ],
    commonStartingXI: {
      formation: "4-4-1-1",
      players: {
        GK: "Roy Carroll",
        RB: "Gary Neville",
        CB1: "Rio Ferdinand",
        CB2: "Mikael Silvestre",
        LB: "Gabriel Heinze",
        RM: "Cristiano Ronaldo",
        CM1: "Roy Keane",
        CM2: "Paul Scholes",
        LM: "Ryan Giggs",
        ST1: "Wayne Rooney",
        ST2: "Ruud van Nistelrooy"
      }
    },
    keyPlayers: [
      { name: "Wayne Rooney", position: "Forward/second striker", contribution: "43 main, 17 gol semua kompetisi, 2 assist Premier League", story: "Rooney langsung menjadi wajah baru United. Debut hat-trick melawan Fenerbahce membuatnya terasa seperti pemain besar sejak hari pertama, dan ia menutup musim sebagai top scorer klub." },
      { name: "Cristiano Ronaldo", position: "Winger kanan/kiri", contribution: "50 main, 9 gol semua kompetisi, 4 assist Premier League", story: "Ronaldo belum menjadi mesin gol, tetapi makin sering menjadi starter dan mulai menentukan laga besar, terutama dua gol di Highbury saat United menang 4-2 atas Arsenal." },
      { name: "Ryan Giggs", position: "Winger kiri", contribution: "44 main, 8 gol semua kompetisi, 9 assist Premier League", story: "Giggs menjadi kreator liga paling produktif United menurut StatsCrew/StatMuse. Pengalaman dan progresi bolanya penting di musim yang mulai dipenuhi pemain muda." },
      { name: "Ruud van Nistelrooy", position: "Striker", contribution: "27 main, 16 gol semua kompetisi", story: "Van Nistelrooy tetap sangat tajam ketika fit, tetapi cedera membuat menitnya turun drastis dibanding musim-musim puncaknya." },
      { name: "Gabriel Heinze", position: "Bek kiri/bek tengah", contribution: "39 main, 1 gol semua kompetisi", story: "Heinze langsung menjadi favorit fans karena agresivitas, intensitas, dan konsistensinya di bek kiri. Ia juga memenangkan Sir Matt Busby Player of the Year 2004/05." },
      { name: "Roy Keane", position: "Kapten, gelandang tengah", contribution: "43 main, 2 gol semua kompetisi", story: "Keane masih menjadi pemimpin, tetapi musim ini juga menunjukkan fase akhir dominasinya secara fisik. Regenerasi lini tengah menjadi salah satu pekerjaan besar Ferguson berikutnya." },
      { name: "Paul Scholes", position: "Gelandang tengah/serang", contribution: "49 main, 12 gol semua kompetisi, 3 assist Premier League", story: "Scholes tetap menjadi sumber gol dari lini kedua dan menjadi pemain dengan penampilan terbanyak ketiga musim ini." },
      { name: "Roy Carroll", position: "Kiper", contribution: "34 main semua kompetisi", story: "Carroll dan Howard bergantian sepanjang musim. Ketidakpastian posisi kiper menjadi salah satu alasan United bergerak membeli Edwin van der Sar pada musim panas 2005." }
    ],
    statistics: {
      leaguePosition: "3rd Premier League",
      matches: 61,
      wins: 35,
      draws: 16,
      losses: 10,
      goalsFor: 100,
      goalsAgainst: 44,
      topScorer: "Wayne Rooney (17 gol semua kompetisi / 11 gol liga)",
      topAssist: "Ryan Giggs (9 assist Premier League menurut StatsCrew/StatMuse)",
      mostAppearances: "Cristiano Ronaldo dan Mikael Silvestre (50 main)"
    },
    importantMoments: [
      { month: "8 Agustus 2004", title: "Community Shield kalah dari Arsenal", description: "United kalah 1-3 dari Arsenal di Millennium Stadium. Alan Smith mencetak gol United.", impact: "Menjadi awal yang kurang ideal dan menegaskan bahwa United masih mencari keseimbangan baru." },
      { month: "31 Agustus 2004", title: "Wayne Rooney dibeli dari Everton", description: "United menyelesaikan transfer Rooney pada deadline day dengan biaya besar untuk pemain berusia 18 tahun.", impact: "Menjadi transfer paling penting dalam pembentukan generasi Rooney-Ronaldo." },
      { month: "28 September 2004", title: "Debut hat-trick Rooney", description: "Rooney mencetak tiga gol saat United mengalahkan Fenerbahce 6-2 di Champions League.", impact: "Mengubah ekspektasi secara instan: Rooney bukan sekadar prospek, tetapi pemain utama." },
      { month: "24 Oktober 2004", title: "Rekor 49 laga Arsenal dihentikan", description: "United menang 2-0 atas Arsenal di Old Trafford lewat penalti Van Nistelrooy dan gol Rooney.", impact: "Menjadi salah satu momen terbesar rivalitas Ferguson-Wenger dan membalas luka Battle of Old Trafford musim sebelumnya." },
      { month: "1 Februari 2005", title: "Highbury dimenangi 4-2", description: "United menang 4-2 di kandang Arsenal. Ronaldo mencetak dua gol dan John O'Shea menutup laga dengan chip terkenal.", impact: "Membuktikan potensi generasi baru United dalam laga besar." },
      { month: "8 Maret 2005", title: "AC Milan menyingkirkan United", description: "United kalah 0-1 di San Siro dan tersingkir dari Champions League dengan agregat 0-2.", impact: "Menunjukkan jarak United dengan tim elite Eropa yang lebih matang." },
      { month: "17 April 2005", title: "Final FA Cup diraih lagi", description: "United mengalahkan Newcastle United 4-1 di semifinal FA Cup lewat dua gol Van Nistelrooy, Scholes, dan Ronaldo.", impact: "Memberi peluang besar menutup musim dengan trofi." },
      { month: "21 Mei 2005", title: "Final FA Cup kalah adu penalti", description: "United bermain 0-0 melawan Arsenal, lalu kalah 4-5 dalam adu penalti setelah tendangan Paul Scholes diselamatkan Jens Lehmann.", impact: "United menutup musim tanpa trofi meski tampil lebih dominan di final." }
    ],
    additionalInfo: [
      "Rekor liga United: 38 pertandingan, 22 menang, 11 seri, 5 kalah, gol 58:26, 77 poin, finis posisi 3.",
      "Rekor semua kompetisi MUFCInfo: 61 pertandingan, 35 menang, 16 seri, 10 kalah, gol 100:44.",
      "MUFCInfo mencatat top scorer semua kompetisi: Rooney 17, Van Nistelrooy 16, Scholes 12, Smith 10, Ronaldo 9, Giggs 8.",
      "Assist yang diisi pada tabel skuad adalah assist Premier League dari StatsCrew/StatMuse, bukan semua kompetisi.",
      "Top assist Premier League United 2004/05 menurut StatsCrew/StatMuse: Ryan Giggs 9, Cristiano Ronaldo 4, Alan Smith 4, Paul Scholes 3, Gary Neville 3, Wayne Rooney 2, Darren Fletcher 2, Roy Keane 2, Rio Ferdinand 2, Louis Saha 2, Van Nistelrooy 1, John O'Shea 1, Mikael Silvestre 1, Gabriel Heinze 1, dan Kleberson 1.",
      "StatBunker memakai pencatatan berbeda dan menampilkan Ryan Giggs 10 assist untuk Premier League 2004/05.",
      "Nomor skuad 2004/05 mengikuti United By Numbers: Howard 1, Gary Neville 2, Phil Neville 3, Heinze 4, Ferdinand 5, Brown 6, Ronaldo 7, Rooney 8, Saha 9, Van Nistelrooy 10, Giggs 11, Bellion 12, Carroll 13, Smith 14, Kleberson 15, Keane 16, Miller 17, Scholes 18, Solskjaer 20, O'Shea 22, Richardson 23, Fletcher 24, Fortune 25, Bardsley 26, Silvestre 27, Pique 28, Spector 29, Steele 30, David Jones 31, Eagles 33, McShane 34, Ricardo 35, Ebanks-Blake 40, dan Rossi 42.",
      "Transfermarkt mencatat pengeluaran United 2004/05 sebesar EUR 61.25m dan pemasukan EUR 9.67m.",
      "Transfermarkt mencatat kedatangan utama: Wayne Rooney EUR 37.00m, Gabriel Heinze EUR 10.00m, Alan Smith EUR 9.00m, Gerard Pique EUR 5.25m, Liam Miller free transfer, dan Giuseppe Rossi tanpa fee dari tim U18.",
      "Transfermarkt mencatat penjualan utama: Nicky Butt EUR 3.75m, Diego Forlan EUR 3.20m, Eric Djemba-Djemba EUR 2.54m, Daniel Nardiello EUR 100k, dan Mark Lynch EUR 75k.",
      "Wikipedia/ringkasan musim mencatat Pique GBP 4.8m, Rossi GBP 200k, Rooney GBP 27.1m termasuk add-ons, Nicky Butt GBP 2.5m, Forlan GBP 2.6m, dan Djemba-Djemba GBP 1.35m; nilai di tabel transfer dikonversi mengikuti Transfermarkt agar konsisten dengan musim sebelumnya.",
      "FA Cup berakhir sebagai runner-up setelah kalah adu penalti 4-5 dari Arsenal di final.",
      "League Cup berakhir di semifinal setelah kalah agregat 1-2 dari Chelsea.",
      "Champions League berakhir di babak 16 besar setelah kalah agregat 0-2 dari AC Milan.",
      "Gabriel Heinze memenangkan Sir Matt Busby Player of the Year 2004/05."
    ],
    featured: false
  },
  {
    id: "2005-06",
    label: "2005/06",
    title: "Manchester United Musim 2005/06",
    era: "Era Ronaldo & Rooney",
    managers: ["Sir Alex Ferguson"],
    competitions: [
      "Premier League",
      "FA Cup",
      "League Cup",
      "UEFA Champions League"
    ],
    leaguePosition: "2nd Premier League",
    trophies: ["League Cup"],
    summary:
      "Musim transisi besar menuju generasi juara baru: Edwin van der Sar dan Park Ji-sung datang, Roy Keane pergi, Nemanja Vidic serta Patrice Evra tiba pada Januari, United finis kedua di liga, gagal di fase grup Champions League, tetapi memenangkan League Cup.",
    story: [
      "United memulai musim dengan tekanan besar setelah dua musim beruntun tertinggal dari Arsenal dan Chelsea. Ferguson memperbaiki posisi kiper dengan membeli Edwin van der Sar, transfer yang langsung memberi stabilitas setelah periode tidak menentu sejak Peter Schmeichel pergi.",
      "Park Ji-sung datang dari PSV dan segera memberi energi, pressing, dan fleksibilitas di lini tengah. Ia bukan pembelian paling glamor, tetapi cocok dengan kebutuhan Ferguson untuk membangun tim yang lebih cepat dan lebih agresif.",
      "Musim ini juga menandai akhir era Roy Keane. Sang kapten hanya tampil enam kali semua kompetisi sebelum meninggalkan klub pada November 2005, lalu Gary Neville menjadi kapten utama.",
      "Di tengah musim, United membeli Nemanja Vidic dari Spartak Moscow dan Patrice Evra dari Monaco. Keduanya belum langsung menjadi starter otomatis, tetapi transfer ini kelak menjadi fondasi penting skuad juara Premier League dan Champions League.",
      "Di liga, United membaik dengan finis kedua dan 83 poin, delapan poin di belakang Chelsea. Mereka mencetak 72 gol di Premier League, tetapi konsistensi Chelsea masih terlalu kuat untuk dikejar.",
      "Di Eropa, United mengalami pukulan besar karena finis terakhir di grup Champions League bersama Villarreal, Benfica, dan Lille. Ini pertama kalinya di era Premier League modern United gagal melewati fase grup sejak 1994/95.",
      "League Cup menjadi penyelamat musim. United mengalahkan Wigan Athletic 4-0 di final, dengan Wayne Rooney mencetak dua gol dan Louis Saha serta Cristiano Ronaldo ikut mencetak gol.",
      "Rooney dan Ronaldo makin jelas menjadi pusat masa depan. Ruud van Nistelrooy tetap top scorer klub dengan 24 gol, tetapi pada fase akhir musim Ferguson mulai lebih sering memakai kombinasi Rooney-Saha."
    ],
    squad: [
      { name: "Tim Howard", shirtNumber: 1, position: "Kiper", age: 26, country: "United States", appearances: 6, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Gary Neville", shirtNumber: 2, position: "Bek kanan/kapten", age: 30, country: "England", appearances: 37, goals: 0, assists: 1, status: "Pemain utama" },
      { name: "Patrice Evra", shirtNumber: 3, position: "Bek kiri", age: 24, country: "France", appearances: 14, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Gabriel Heinze", shirtNumber: 4, position: "Bek kiri/bek tengah", age: 27, country: "Argentina", appearances: 6, goals: 2, assists: 0, status: "Cadangan" },
      { name: "Rio Ferdinand", shirtNumber: 5, position: "Bek tengah", age: 26, country: "England", appearances: 52, goals: 3, assists: 0, status: "Pemain utama" },
      { name: "Wes Brown", shirtNumber: 6, position: "Bek tengah/bek kanan", age: 25, country: "England", appearances: 31, goals: 0, assists: 2, status: "Pemain utama" },
      { name: "Cristiano Ronaldo", shirtNumber: 7, position: "Winger kanan/kiri", age: 20, country: "Portugal", appearances: 47, goals: 12, assists: 6, status: "Pemain utama" },
      { name: "Wayne Rooney", shirtNumber: 8, position: "Second striker/forward", age: 19, country: "England", appearances: 48, goals: 19, assists: 9, status: "Pemain utama" },
      { name: "Louis Saha", shirtNumber: 9, position: "Striker", age: 27, country: "France", appearances: 30, goals: 15, assists: 1, status: "Pemain utama" },
      { name: "Ruud van Nistelrooy", shirtNumber: 10, position: "Striker", age: 29, country: "Netherlands", appearances: 47, goals: 24, assists: 3, status: "Pemain utama" },
      { name: "Ryan Giggs", shirtNumber: 11, position: "Winger kiri/gelandang tengah", age: 31, country: "Wales", appearances: 37, goals: 5, assists: 7, status: "Pemain utama" },
      { name: "Park Ji-sung", shirtNumber: 13, position: "Gelandang serang/winger", age: 24, country: "South Korea", appearances: 45, goals: 2, assists: 0, status: "Pemain utama" },
      { name: "Alan Smith", shirtNumber: 14, position: "Gelandang tengah/striker", age: 24, country: "England", appearances: 33, goals: 1, assists: 2, status: "Pemain utama" },
      { name: "Nemanja Vidic", shirtNumber: 15, position: "Bek tengah", age: 23, country: "Serbia", appearances: 15, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Roy Keane", shirtNumber: 16, position: "Kapten, gelandang tengah", age: 34, country: "Republic of Ireland", appearances: 6, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Liam Miller", shirtNumber: 17, position: "Gelandang tengah", age: 24, country: "Republic of Ireland", appearances: 3, goals: 1, assists: 0, status: "Cadangan" },
      { name: "Paul Scholes", shirtNumber: 18, position: "Gelandang tengah/gelandang serang", age: 30, country: "England", appearances: 27, goals: 3, assists: 2, status: "Pemain utama" },
      { name: "Edwin van der Sar", shirtNumber: 19, position: "Kiper", age: 34, country: "Netherlands", appearances: 51, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Ole Gunnar Solskjaer", shirtNumber: 20, position: "Striker/winger kanan", age: 32, country: "Norway", appearances: 5, goals: 0, assists: 0, status: "Cadangan" },
      { name: "John O'Shea", shirtNumber: 22, position: "Bek/gelandang", age: 24, country: "Republic of Ireland", appearances: 47, goals: 2, assists: 2, status: "Pemain utama" },
      { name: "Kieran Richardson", shirtNumber: 23, position: "Bek kiri/winger kiri", age: 20, country: "England", appearances: 36, goals: 6, assists: 1, status: "Pemain utama" },
      { name: "Darren Fletcher", shirtNumber: 24, position: "Gelandang tengah/kanan", age: 21, country: "Scotland", appearances: 41, goals: 1, assists: 2, status: "Pemain utama" },
      { name: "Quinton Fortune", shirtNumber: 25, position: "Bek kiri/gelandang kiri", age: 28, country: "South Africa", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Cadangan" },
      { name: "Phil Bardsley", shirtNumber: 26, position: "Bek kanan", age: 20, country: "England", appearances: 15, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Mikael Silvestre", shirtNumber: 27, position: "Bek tengah/bek kiri", age: 28, country: "France", appearances: 48, goals: 1, assists: 2, status: "Pemain utama" },
      { name: "Gerard Pique", shirtNumber: 28, position: "Bek tengah", age: 18, country: "Spain", appearances: 7, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Luke Steele", shirtNumber: 30, position: "Kiper", age: 20, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "David Jones", shirtNumber: 31, position: "Gelandang tengah", age: 20, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Chris Eagles", shirtNumber: 33, position: "Winger kanan", age: 19, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Ritchie Jones", shirtNumber: 49, position: "Gelandang tengah", age: 18, country: "England", appearances: 4, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Darron Gibson", shirtNumber: 50, position: "Gelandang tengah", age: 17, country: "Northern Ireland", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Lee Martin", shirtNumber: 46, position: "Winger", age: 18, country: "England", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Adam Eckersley", shirtNumber: 44, position: "Bek kiri", age: 19, country: "England", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Sylvan Ebanks-Blake", shirtNumber: NO_PERMANENT_SQUAD_NUMBER, position: "Striker", age: 19, country: "England", appearances: 1, goals: 1, assists: 0, status: "Pemain muda" },
      { name: "Ben Foster", shirtNumber: NO_PERMANENT_SQUAD_NUMBER, position: "Kiper", age: 22, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" }
    ],
    transfersIn: [
      { player: "Edwin van der Sar", from: "Fulham", fee: "EUR 4.00m", date: "1 Juli 2005", note: "Transfermarkt mencatat EUR 4.00m; langsung menjadi kiper utama dengan 51 penampilan semua kompetisi." },
      { player: "Park Ji-sung", from: "PSV Eindhoven", fee: "EUR 7.30m", date: "8 Juli 2005", note: "Transfermarkt mencatat EUR 7.30m; sumber Inggris saat itu banyak menyebut sekitar GBP 4m." },
      { player: "Ben Foster", from: "Stoke City", fee: "EUR 2.00m", date: "19 Juli 2005", note: "Transfermarkt mencatat EUR 2.00m; setelah datang ia dipinjamkan ke Watford." },
      { player: "Nemanja Vidic", from: "Spartak Moscow", fee: "EUR 10.50m", date: "5 Januari 2006", note: "Datang pada bursa Januari; Transfermarkt mencatat EUR 10.50m." },
      { player: "Patrice Evra", from: "AS Monaco", fee: "EUR 8.00m", date: "10 Januari 2006", note: "Datang pada bursa Januari untuk mengatasi masalah bek kiri; Transfermarkt mencatat EUR 8.00m." },
      { player: "Ritchie Jones", from: "Manchester United U18", fee: "-", date: "2005/06", note: "Naik dari tim muda dan tampil empat kali semua kompetisi." },
      { player: "Lee Martin", from: "Manchester United U18", fee: "-", date: "2005/06", note: "Naik dari tim muda, tampil satu kali, lalu sempat dipinjamkan ke Royal Antwerp." },
      { player: "Darron Gibson", from: "Manchester United U18", fee: "-", date: "2005/06", note: "Naik dari tim muda dan mendapat debut senior satu kali." },
      { player: "David Bellion", from: "West Ham United", fee: "End of loan", date: "8 Januari 2006", note: "Kembali dari pinjaman sebelum kemudian dipinjamkan lagi ke OGC Nice." },
      { player: "Liam Miller", from: "Leeds United", fee: "End of loan", date: "1 Mei 2006", note: "Kembali dari pinjaman pada akhir musim." },
      { player: "Jonathan Spector", from: "Charlton Athletic", fee: "End of loan", date: "1 Mei 2006", note: "Kembali dari pinjaman menurut Transfermarkt." },
      { player: "Kieran Richardson", from: "West Bromwich Albion", fee: "End of loan", date: "2005/06", note: "Kembali dari pinjaman dan menjadi opsi penting di sisi kiri." }
    ],
    transfersOut: [
      { player: "Phil Neville", to: "Everton", fee: "EUR 5.30m", date: "4 Agustus 2005", note: "Transfermarkt mencatat EUR 5.30m; menjadi akhir perjalanan panjang anggota Class of '92 di United." },
      { player: "Kleberson", to: "Besiktas", fee: "EUR 2.60m", date: "8 Agustus 2005", note: "Transfermarkt mencatat EUR 2.60m; sumber Inggris saat itu menyebut sekitar GBP 2.5m." },
      { player: "Roy Carroll", to: "West Ham United", fee: "Free transfer", date: "1 Juli 2005", note: "Keluar setelah kontraknya habis dan posisi kiper diperkuat oleh Van der Sar." },
      { player: "Ricardo Lopez", to: "CA Osasuna", fee: "Free transfer", date: "1 Juli 2005", note: "Keluar permanen sebagai free transfer menurut Transfermarkt." },
      { player: "Roy Keane", to: "Celtic", fee: "Free transfer", date: "18 November 2005", note: "Meninggalkan United secara dramatis setelah hanya enam penampilan semua kompetisi musim ini." },
      { player: "Quinton Fortune", to: "Released", fee: "-", date: "30 Juni 2006", note: "Dilepas pada akhir musim setelah lama menjadi pemain rotasi penting." },
      { player: "Ben Foster", to: "Watford", fee: "Loan transfer", date: "2005/06", note: "Dipinjamkan ke Watford setelah dibeli dari Stoke City." },
      { player: "Chris Eagles", to: "Sheffield Wednesday / Watford", fee: "Loan transfer", date: "2005/06", note: "Menjalani dua masa pinjaman Championship menurut Transfermarkt." },
      { player: "Jonathan Spector", to: "Charlton Athletic", fee: "Loan transfer", date: "2005/06", note: "Dipinjamkan ke Charlton Athletic." },
      { player: "David Jones", to: "Preston North End / NEC Nijmegen", fee: "Loan transfer", date: "2005/06", note: "Menjalani masa pinjaman di Preston dan NEC Nijmegen." },
      { player: "Liam Miller", to: "Leeds United", fee: "Loan transfer", date: "2005/06", note: "Dipinjamkan ke Leeds United." },
      { player: "David Bellion", to: "West Ham United / OGC Nice", fee: "Loan transfer", date: "2005/06", note: "Dipinjamkan ke West Ham pada awal musim dan OGC Nice pada paruh kedua." },
      { player: "Colin Heath", to: "Chesterfield", fee: "Free transfer", date: "Januari 2006", note: "Transfermarkt mencatat free transfer." },
      { player: "Jami Puustinen", to: "Released", fee: "-", date: "Januari 2006", note: "Dilepas dari skuad muda/reserve." },
      { player: "David Fox", to: "Released", fee: "-", date: "Januari 2006", note: "Dilepas dari skuad muda/reserve." },
      { player: "Kenny Cooper", to: "Released", fee: "-", date: "Januari 2006", note: "Dilepas sebelum melanjutkan karier di luar United." }
    ],
    commonStartingXI: {
      formation: "4-4-1-1",
      players: {
        GK: "Edwin van der Sar",
        RB: "Gary Neville",
        CB1: "Rio Ferdinand",
        CB2: "Wes Brown",
        LB: "John O'Shea",
        RM: "Cristiano Ronaldo",
        CM1: "Darren Fletcher",
        CM2: "Paul Scholes",
        LM: "Ryan Giggs",
        ST1: "Wayne Rooney",
        ST2: "Ruud van Nistelrooy"
      }
    },
    keyPlayers: [
      { name: "Edwin van der Sar", position: "Kiper", contribution: "51 main semua kompetisi, 38 main Premier League", story: "Van der Sar langsung menyelesaikan masalah kiper United. Dengan pengalaman dan distribusi yang tenang, ia memberi pondasi defensif yang sebelumnya sering hilang." },
      { name: "Rio Ferdinand", position: "Bek tengah", contribution: "52 main, 3 gol semua kompetisi", story: "Rio menjadi pemain dengan penampilan terbanyak dan pemimpin pertahanan. Gol menit akhir melawan Liverpool menjadi salah satu momen paling ikonik musim ini." },
      { name: "Wayne Rooney", position: "Forward/second striker", contribution: "48 main, 19 gol semua kompetisi, 9 assist Premier League", story: "Rooney menjadi pemain paling berpengaruh dalam permainan terbuka United. Ia mencetak dua gol di final League Cup dan menjadi kreator utama tim di liga." },
      { name: "Cristiano Ronaldo", position: "Winger kanan/kiri", contribution: "47 main, 12 gol semua kompetisi, 6 assist Premier League", story: "Ronaldo makin produktif dan makin kuat secara fisik. Musim ini menjadi langkah penting sebelum ledakan besarnya pada 2006/07." },
      { name: "Ruud van Nistelrooy", position: "Striker", contribution: "47 main, 24 gol semua kompetisi", story: "Ruud tetap top scorer klub, tetapi mulai kehilangan status otomatis di fase akhir ketika Ferguson lebih sering memakai Rooney dan Saha." },
      { name: "Louis Saha", position: "Striker", contribution: "30 main, 15 gol semua kompetisi", story: "Saha sangat penting di paruh kedua musim dan di League Cup. Mobilitasnya membuat kombinasi dengan Rooney terasa lebih cocok untuk arah baru United." },
      { name: "Park Ji-sung", position: "Gelandang/winger", contribution: "45 main, 2 gol semua kompetisi", story: "Park cepat dipercaya karena intensitas, disiplin, dan kemampuan menekan. Ia memberi Ferguson opsi taktis yang sangat berguna." },
      { name: "Roy Keane", position: "Kapten, gelandang tengah", contribution: "6 main semua kompetisi", story: "Kepergian Keane pada November 2005 menutup satu era. Setelah itu United mulai membangun ulang kepemimpinan tim di sekitar Gary Neville dan generasi Rooney-Ronaldo." }
    ],
    statistics: {
      leaguePosition: "2nd Premier League",
      matches: 56,
      wins: 35,
      draws: 13,
      losses: 8,
      goalsFor: 106,
      goalsAgainst: 44,
      topScorer: "Ruud van Nistelrooy (24 gol semua kompetisi / 21 gol liga)",
      topAssist: "Wayne Rooney (9 assist Premier League menurut StatsCrew)",
      mostAppearances: "Rio Ferdinand (52 main)"
    },
    importantMoments: [
      { month: "9 Agustus 2005", title: "Musim kompetitif dibuka dengan kemenangan Eropa", description: "United mengalahkan Debrecen 3-0 di Old Trafford pada kualifikasi Champions League.", impact: "Memberi awal positif sebelum masuk jadwal Premier League." },
      { month: "13 Agustus 2005", title: "Everton 0-2 United", description: "United membuka liga dengan kemenangan di Goodison Park lewat gol Ruud van Nistelrooy dan Wayne Rooney.", impact: "Membuka musim liga dengan tajam dan menunjukkan Rooney makin menjadi pusat serangan." },
      { month: "29 Oktober 2005", title: "Kalah 1-4 dari Middlesbrough", description: "United kalah berat di Riverside. Gol hiburan Cristiano Ronaldo menjadi gol ke-1000 United di Premier League.", impact: "Kekalahan ini memunculkan tekanan besar, tetapi juga menjadi titik balik sebelum menang atas Chelsea." },
      { month: "6 November 2005", title: "Rekor Chelsea dihentikan", description: "United mengalahkan Chelsea 1-0 di Old Trafford melalui gol Darren Fletcher.", impact: "Menghentikan laju unbeaten Chelsea di liga dan memberi bukti bahwa United masih bisa menandingi tim Mourinho." },
      { month: "18 November 2005", title: "Roy Keane meninggalkan United", description: "Keane resmi pergi setelah 12 tahun di Old Trafford, lalu bergabung dengan Celtic.", impact: "Menutup satu era kepemimpinan dan menjadikan Gary Neville kapten utama." },
      { month: "25 November 2005", title: "George Best wafat", description: "Legenda United George Best meninggal dunia pada usia 59 tahun.", impact: "Menjadi momen emosional besar bagi klub dan suporter." },
      { month: "7 Desember 2005", title: "Benfica menyingkirkan United dari Champions League", description: "United kalah 1-2 di Lisbon dan finis terakhir di grup.", impact: "Menjadi kegagalan Eropa besar dan memperkuat kebutuhan regenerasi skuad." },
      { month: "Januari 2006", title: "Vidic dan Evra datang", description: "United membeli Nemanja Vidic dari Spartak Moscow dan Patrice Evra dari Monaco.", impact: "Belum langsung terlihat besar saat itu, tetapi menjadi dua transfer inti untuk masa kejayaan berikutnya." },
      { month: "22 Januari 2006", title: "Rio menangkan laga melawan Liverpool", description: "Ferdinand mencetak gol sundulan menit akhir saat United menang 1-0 atas Liverpool di Old Trafford.", impact: "Salah satu momen liga paling dikenang musim ini dan memperkuat status Rio sebagai pemimpin lini belakang." },
      { month: "18 Februari 2006", title: "FA Cup berakhir dan Alan Smith cedera parah", description: "United kalah 0-1 dari Liverpool di ronde kelima FA Cup; Alan Smith mengalami cedera patah kaki dan dislokasi engkel.", impact: "Membuat opsi lini tengah makin sempit dan menutup musim Smith lebih cepat." },
      { month: "26 Februari 2006", title: "League Cup dimenangkan 4-0", description: "United mengalahkan Wigan Athletic 4-0 di Millennium Stadium. Rooney mencetak dua gol, Ronaldo dan Saha masing-masing satu.", impact: "Memberi trofi pertama untuk generasi Rooney-Ronaldo dan menyelamatkan musim dari tanpa gelar." },
      { month: "29 April 2006", title: "Chelsea mengunci gelar liga", description: "United kalah 0-3 dari Chelsea di Stamford Bridge.", impact: "Memastikan United finis sebagai runner-up, delapan poin di belakang Chelsea." }
    ],
    additionalInfo: [
      "Rekor liga United: 38 pertandingan, 25 menang, 8 seri, 5 kalah, gol 72:34, 83 poin, finis posisi 2.",
      "Rekor semua kompetisi MUFCInfo: 56 pertandingan, 35 menang, 13 seri, 8 kalah, gol 106:44.",
      "MUFCInfo mencatat top scorer semua kompetisi: Ruud van Nistelrooy 24, Wayne Rooney 19, Louis Saha 15, Cristiano Ronaldo 12, Kieran Richardson 6, dan Ryan Giggs 5.",
      "Assist yang diisi pada tabel skuad adalah assist Premier League dari StatsCrew, bukan semua kompetisi.",
      "Top assist Premier League United 2005/06 menurut StatsCrew: Wayne Rooney 9, Ryan Giggs 7, Cristiano Ronaldo 6, Ruud van Nistelrooy 3, Paul Scholes 2, Alan Smith 2, Darren Fletcher 2, Mikael Silvestre 2, John O'Shea 2, Wes Brown 2, Gary Neville 1, Kieran Richardson 1, dan Louis Saha 1.",
      "StatsCrew mencatat Park Ji-sung tampil 34 kali di Premier League tetapi baris datanya tidak menampilkan angka assist yang rapi; tabel ini mengisinya 0 agar tetap konsisten dengan sumber yang tersedia.",
      "Nomor skuad 2005/06 mengikuti FootballSquads: Howard 1, Gary Neville 2, Evra 3, Heinze 4, Ferdinand 5, Brown 6, Ronaldo 7, Rooney 8, Saha 9, Van Nistelrooy 10, Giggs 11, Park 13, Smith 14, Vidic 15, Keane 16, Miller 17, Scholes 18, Van der Sar 19, Solskjaer 20, O'Shea 22, Richardson 23, Fletcher 24, Fortune 25, Bardsley 26, Silvestre 27, Pique 28, Steele 30, David Jones 31, Lee Martin 46, Ritchie Jones 49, dan Darron Gibson 50.",
      "Transfermarkt mencatat pengeluaran United 2005/06 sebesar EUR 31.80m, pemasukan EUR 7.90m, dan saldo EUR -23.90m.",
      "Transfermarkt mencatat kedatangan utama: Nemanja Vidic EUR 10.50m, Patrice Evra EUR 8.00m, Park Ji-sung EUR 7.30m, Edwin van der Sar EUR 4.00m, dan Ben Foster EUR 2.00m.",
      "Transfermarkt mencatat penjualan utama: Phil Neville EUR 5.30m dan Kleberson EUR 2.60m; Roy Carroll, Ricardo, Michael Stewart, Paul Tierney, Colin Heath, Steven Hogg, dan David Poole keluar gratis.",
      "FA Cup berakhir di ronde kelima setelah kalah 0-1 dari Liverpool di Anfield.",
      "League Cup dimenangkan dengan skor 4-0 atas Wigan Athletic di final.",
      "Champions League berakhir di fase grup; United finis posisi 4 di grup berisi Villarreal, Benfica, dan Lille.",
      "Roy Keane memainkan laga kompetitif terakhirnya untuk United pada September 2005 melawan Liverpool dan resmi meninggalkan klub pada 18 November 2005.",
      "Gary Neville menjadi kapten utama setelah Keane pergi."
    ],
    featured: false
  },
  {
    id: "2006-07",
    label: "2006/07",
    title: "Manchester United Musim 2006/07",
    era: "Era Ronaldo & Rooney",
    managers: ["Sir Alex Ferguson"],
    competitions: [
      "Premier League",
      "FA Cup",
      "League Cup",
      "UEFA Champions League"
    ],
    leaguePosition: "1st Premier League",
    trophies: ["Premier League"],
    summary:
      "Musim kebangkitan besar: United kembali menjadi juara Premier League setelah tiga musim tanpa gelar liga, Cristiano Ronaldo naik ke level pemain terbaik Inggris, Rooney-Ronaldo menjadi wajah tim baru, Michael Carrick memberi kontrol di tengah, dan duet Ferdinand-Vidic mulai mapan.",
    story: [
      "United masuk musim 2006/07 dengan banyak keraguan. Roy Keane sudah pergi, Ruud van Nistelrooy dilepas ke Real Madrid, dan Chelsea masih terlihat sebagai standar tertinggi Premier League.",
      "Ferguson mengambil keputusan besar dengan membangun serangan yang lebih cair. Tanpa Van Nistelrooy, gol tidak lagi terpusat pada satu striker kotak penalti, tetapi menyebar lewat Cristiano Ronaldo, Wayne Rooney, Louis Saha, Ole Gunnar Solskjaer, Paul Scholes, Ryan Giggs, dan Michael Carrick.",
      "Michael Carrick datang dari Tottenham dan menjadi satu-satunya pembelian permanen utama. Ia tidak menggantikan Roy Keane secara gaya, tetapi memberi United kontrol posisi, sirkulasi bola, dan passing vertikal yang membuat Scholes serta para penyerang lebih bebas.",
      "Cristiano Ronaldo menjawab tekanan besar setelah Piala Dunia 2006 dengan musim terbaiknya sejauh itu. Ia mencetak 23 gol semua kompetisi, menjadi top scorer bersama Rooney, dan memenangkan penghargaan individu utama di Inggris.",
      "Wayne Rooney tetap menjadi penghubung serangan. Ia mencetak 23 gol semua kompetisi dan menjadi top assist United di Premier League menurut StatsCrew.",
      "Di belakang, Van der Sar, Ferdinand, Vidic, dan Evra mulai membentuk tulang punggung defensif era 2006-2009. Vidic dan Evra yang datang pada Januari 2006 mulai benar-benar menyatu musim ini.",
      "United merebut Premier League dengan 89 poin, unggul enam poin dari Chelsea. Mereka juga mencapai final FA Cup dan semifinal Champions League, sehingga musim ini menjadi tanda bahwa generasi baru Ferguson sudah matang.",
      "Di Eropa, kemenangan 7-1 atas Roma menjadi salah satu performa Champions League paling ikonik era Ferguson, meski perjalanan akhirnya dihentikan AC Milan di semifinal."
    ],
    squad: [
      { name: "Edwin van der Sar", shirtNumber: 1, position: "Kiper", age: 35, country: "Netherlands", appearances: 47, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Gary Neville", shirtNumber: 2, position: "Bek kanan/kapten", age: 31, country: "England", appearances: 33, goals: 0, assists: 3, status: "Pemain utama" },
      { name: "Patrice Evra", shirtNumber: 3, position: "Bek kiri", age: 25, country: "France", appearances: 36, goals: 2, assists: 2, status: "Pemain utama" },
      { name: "Gabriel Heinze", shirtNumber: 4, position: "Bek kiri/bek tengah", age: 28, country: "Argentina", appearances: 38, goals: 1, assists: 1, status: "Pemain utama" },
      { name: "Rio Ferdinand", shirtNumber: 5, position: "Bek tengah", age: 27, country: "England", appearances: 49, goals: 1, assists: 0, status: "Pemain utama" },
      { name: "Wes Brown", shirtNumber: 6, position: "Bek tengah/bek kanan", age: 26, country: "England", appearances: 37, goals: 0, assists: 2, status: "Pemain utama" },
      { name: "Cristiano Ronaldo", shirtNumber: 7, position: "Winger kanan/kiri", age: 21, country: "Portugal", appearances: 53, goals: 23, assists: 8, status: "Pemain utama" },
      { name: "Wayne Rooney", shirtNumber: 8, position: "Second striker/forward", age: 20, country: "England", appearances: 55, goals: 23, assists: 11, status: "Pemain utama" },
      { name: "Louis Saha", shirtNumber: 9, position: "Striker", age: 28, country: "France", appearances: 34, goals: 13, assists: 4, status: "Pemain utama" },
      { name: "Ryan Giggs", shirtNumber: 11, position: "Winger kiri/gelandang serang", age: 32, country: "Wales", appearances: 44, goals: 6, assists: 7, status: "Pemain utama" },
      { name: "Park Ji-sung", shirtNumber: 13, position: "Gelandang/winger", age: 25, country: "South Korea", appearances: 20, goals: 5, assists: 2, status: "Pemain utama" },
      { name: "Alan Smith", shirtNumber: 14, position: "Striker/gelandang", age: 25, country: "England", appearances: 18, goals: 1, assists: 1, status: "Cadangan" },
      { name: "Nemanja Vidic", shirtNumber: 15, position: "Bek tengah", age: 24, country: "Serbia", appearances: 38, goals: 4, assists: 1, status: "Pemain utama" },
      { name: "Michael Carrick", shirtNumber: 16, position: "Gelandang tengah", age: 25, country: "England", appearances: 52, goals: 6, assists: 3, status: "Pemain utama" },
      { name: "Henrik Larsson", shirtNumber: 17, position: "Striker", age: 34, country: "Sweden", appearances: 13, goals: 3, assists: 0, status: "Cadangan" },
      { name: "Paul Scholes", shirtNumber: 18, position: "Gelandang tengah", age: 31, country: "England", appearances: 45, goals: 7, assists: 1, status: "Pemain utama" },
      { name: "Giuseppe Rossi", shirtNumber: 19, position: "Striker", age: 19, country: "Italy", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Ole Gunnar Solskjaer", shirtNumber: 20, position: "Striker/winger kanan", age: 33, country: "Norway", appearances: 32, goals: 11, assists: 3, status: "Pemain utama" },
      { name: "Dong Fangzhuo", shirtNumber: 21, position: "Striker", age: 21, country: "China", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "John O'Shea", shirtNumber: 22, position: "Bek/gelandang", age: 25, country: "Republic of Ireland", appearances: 49, goals: 5, assists: 1, status: "Pemain utama" },
      { name: "Kieran Richardson", shirtNumber: 23, position: "Bek kiri/winger kiri", age: 21, country: "England", appearances: 24, goals: 3, assists: 0, status: "Cadangan" },
      { name: "Darren Fletcher", shirtNumber: 24, position: "Gelandang tengah/kanan", age: 22, country: "Scotland", appearances: 40, goals: 3, assists: 1, status: "Pemain utama" },
      { name: "David Jones", shirtNumber: 25, position: "Gelandang tengah", age: 21, country: "England", appearances: 2, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Phil Bardsley", shirtNumber: 26, position: "Bek kanan", age: 21, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Mikael Silvestre", shirtNumber: 27, position: "Bek tengah/bek kiri", age: 29, country: "France", appearances: 21, goals: 1, assists: 1, status: "Cadangan" },
      { name: "Gerard Pique", shirtNumber: 28, position: "Bek tengah", age: 19, country: "Spain", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Tomasz Kuszczak", shirtNumber: 29, position: "Kiper", age: 24, country: "Poland", appearances: 13, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Lee Martin", shirtNumber: 30, position: "Gelandang serang/winger", age: 19, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Craig Cathcart", shirtNumber: 32, position: "Bek tengah", age: 17, country: "Northern Ireland", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Chris Eagles", shirtNumber: 33, position: "Winger kanan", age: 20, country: "England", appearances: 2, goals: 1, assists: 0, status: "Pemain muda" },
      { name: "Ryan Shawcross", shirtNumber: 34, position: "Bek tengah", age: 18, country: "Wales", appearances: 2, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Kieran Lee", shirtNumber: 35, position: "Bek/gelandang", age: 18, country: "England", appearances: 3, goals: 1, assists: 0, status: "Pemain muda" },
      { name: "David Gray", shirtNumber: 36, position: "Bek kanan", age: 18, country: "Scotland", appearances: 1, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Tom Heaton", shirtNumber: 38, position: "Kiper", age: 20, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Ron-Robert Zieler", shirtNumber: 39, position: "Kiper", age: 17, country: "Germany", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Adam Eckersley", shirtNumber: 40, position: "Bek kiri", age: 20, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Phil Marsh", shirtNumber: 41, position: "Striker", age: 19, country: "England", appearances: 1, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Michael Barnes", shirtNumber: 42, position: "Winger kiri", age: 18, country: "England", appearances: 1, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Danny Simpson", shirtNumber: 25, position: "Bek kanan", age: 19, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Jonny Evans", shirtNumber: 47, position: "Bek tengah", age: 18, country: "Northern Ireland", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Ritchie Jones", shirtNumber: 49, position: "Gelandang tengah", age: 19, country: "England", appearances: 1, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Darron Gibson", shirtNumber: 50, position: "Gelandang tengah", age: 18, country: "Northern Ireland", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Fraizer Campbell", shirtNumber: 51, position: "Striker", age: 18, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Ben Foster", shirtNumber: NO_PERMANENT_SQUAD_NUMBER, position: "Kiper", age: 23, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" }
    ],
    transfersIn: [
      { player: "Michael Carrick", from: "Tottenham Hotspur", fee: "EUR 27.20m", date: "31 Juli 2006", note: "Transfermarkt mencatat EUR 27.20m; sumber Inggris mencatat biaya awal GBP 13m dengan potensi naik lewat add-ons." },
      { player: "Tomasz Kuszczak", from: "West Bromwich Albion", fee: "Loan transfer", date: "10 Agustus 2006", note: "Pinjaman semusim sebagai pelapis Edwin van der Sar; transfer permanen baru diselesaikan musim berikutnya." },
      { player: "Henrik Larsson", from: "Helsingborg", fee: "Loan transfer", date: "2 Januari 2007", note: "Pinjaman jangka pendek 10 minggu; tampil 13 kali dan mencetak 3 gol semua kompetisi." },
      { player: "Dong Fangzhuo", from: "Royal Antwerp", fee: "End of loan", date: "Januari 2007", note: "Masuk skuad setelah masa pengembangan dan izin kerja; mendapat nomor 21." },
      { player: "Danny Simpson", from: "Manchester United U18", fee: "-", date: "2006/07", note: "Naik ke daftar nomor skuad dengan nomor 25 menurut United By Numbers." },
      { player: "Kieran Lee", from: "Manchester United U18", fee: "-", date: "2006/07", note: "Pemain akademi yang tampil tiga kali dan mencetak satu gol." },
      { player: "Ryan Shawcross", from: "Manchester United U18", fee: "-", date: "2006/07", note: "Bek muda yang mendapat dua penampilan semua kompetisi." },
      { player: "Michael Barnes", from: "Manchester United U18", fee: "-", date: "2006/07", note: "Pemain muda yang mendapat satu penampilan di League Cup." },
      { player: "Phil Marsh", from: "Manchester United U18", fee: "-", date: "2006/07", note: "Pemain muda yang mendapat satu penampilan di League Cup." }
    ],
    transfersOut: [
      { player: "David Bellion", to: "OGC Nice", fee: "EUR 500k", date: "1 Juli 2006", note: "Transfermarkt mencatat EUR 500k; sebagian sumber Inggris menyebut undisclosed." },
      { player: "Quinton Fortune", to: "Bolton Wanderers", fee: "Free transfer", date: "Juli 2006", note: "Keluar gratis setelah kontraknya habis." },
      { player: "Jonathan Spector", to: "West Ham United", fee: "EUR 750k", date: "Juli 2006", note: "Transfermarkt mencatat EUR 750k." },
      { player: "Sylvan Ebanks-Blake", to: "Plymouth Argyle", fee: "EUR 300k", date: "14 Juli 2006", note: "Nilai euro dibulatkan dari laporan sekitar GBP 200k awal, dengan klausul tambahan." },
      { player: "Ruud van Nistelrooy", to: "Real Madrid", fee: "EUR 15.00m", date: "28 Juli 2006", note: "Transfermarkt dan UEFA mencatat transfer ke Real Madrid senilai EUR 15.00m." },
      { player: "Paul McShane", to: "West Bromwich Albion", fee: "EUR 500k", date: "10 Agustus 2006", note: "Keluar permanen ke West Brom dalam konteks kesepakatan Tomasz Kuszczak." },
      { player: "Luke Steele", to: "West Bromwich Albion", fee: "EUR 250k", date: "10 Agustus 2006", note: "Keluar permanen ke West Brom; sumber Inggris mencatat sekitar GBP 170k." },
      { player: "Liam Miller", to: "Sunderland", fee: "Free transfer", date: "31 Agustus 2006", note: "Keluar permanen setelah tidak masuk rencana utama Ferguson." },
      { player: "David Jones", to: "Derby County", fee: "EUR 1.50m", date: "3 Januari 2007", note: "Transfermarkt mencatat EUR 1.50m; Wikipedia mencatat GBP 1m." },
      { player: "Tim Howard", to: "Everton", fee: "Loan transfer", date: "1 Juli 2006", note: "Dipinjamkan semusim ke Everton; transfer permanen terjadi efektif pada 2007." },
      { player: "Gerard Pique", to: "Real Zaragoza", fee: "Loan transfer", date: "4 Agustus 2006", note: "Dipinjamkan ke La Liga untuk mendapatkan menit bermain." },
      { player: "Ben Foster", to: "Watford", fee: "Loan transfer", date: "10 Agustus 2006", note: "Dipinjamkan semusim ke Watford." },
      { player: "Giuseppe Rossi", to: "Newcastle United / Parma", fee: "Loan transfer", date: "2006/07", note: "Dipinjamkan ke Newcastle pada paruh pertama dan Parma pada paruh kedua musim." },
      { player: "Jonny Evans", to: "Royal Antwerp / Sunderland", fee: "Loan transfer", date: "2006/07", note: "Dipinjamkan ke Royal Antwerp lalu Sunderland untuk perkembangan." },
      { player: "Phil Bardsley", to: "Rangers / Aston Villa", fee: "Loan transfer", date: "2006/07", note: "Dipinjamkan ke Rangers pada paruh pertama dan Aston Villa pada paruh kedua." },
      { player: "Lee Martin", to: "Rangers", fee: "Loan transfer", date: "11 Agustus 2006", note: "Dipinjamkan ke Rangers sampai akhir Desember 2006." },
      { player: "Chris Eagles", to: "NEC Nijmegen", fee: "Loan transfer", date: "31 Agustus 2006", note: "Dipinjamkan ke NEC sebelum kembali dan mencetak gol liga melawan Everton." },
      { player: "Fraizer Campbell", to: "Royal Antwerp", fee: "Loan transfer", date: "17 Agustus 2006", note: "Dipinjamkan ke Royal Antwerp." }
    ],
    commonStartingXI: {
      formation: "4-4-2",
      players: {
        GK: "Edwin van der Sar",
        RB: "Gary Neville",
        CB1: "Rio Ferdinand",
        CB2: "Nemanja Vidic",
        LB: "Patrice Evra",
        RM: "Cristiano Ronaldo",
        CM1: "Michael Carrick",
        CM2: "Paul Scholes",
        LM: "Ryan Giggs",
        ST1: "Wayne Rooney",
        ST2: "Louis Saha"
      }
    },
    keyPlayers: [
      { name: "Cristiano Ronaldo", position: "Winger kanan/kiri", contribution: "53 main, 23 gol semua kompetisi, 8 assist Premier League", story: "Ronaldo berubah dari talenta muda menjadi superstar Premier League. Tekanan setelah Piala Dunia 2006 justru menjadi bahan bakar untuk musim terbaiknya sejauh itu." },
      { name: "Wayne Rooney", position: "Forward/second striker", contribution: "55 main, 23 gol semua kompetisi, 11 assist Premier League", story: "Rooney menjadi top appearance sekaligus kreator utama United di liga. Ia menghubungkan lini tengah dan depan, membuka ruang untuk Ronaldo dan Saha." },
      { name: "Michael Carrick", position: "Gelandang tengah", contribution: "52 main, 6 gol semua kompetisi, 3 assist Premier League", story: "Carrick memberi bentuk baru pada lini tengah United. Ia menjaga posisi, mengalirkan bola, dan membuat Scholes bisa kembali mengontrol tempo permainan." },
      { name: "Paul Scholes", position: "Gelandang tengah", contribution: "45 main, 7 gol semua kompetisi", story: "Scholes kembali penuh setelah masalah penglihatan musim sebelumnya dan membentuk duet kontrol yang sangat penting bersama Carrick." },
      { name: "Rio Ferdinand", position: "Bek tengah", contribution: "49 main, 1 gol semua kompetisi", story: "Rio menjadi pusat pertahanan dan partner ideal untuk Vidic. Ketenangan membaca permainan membuat agresivitas Vidic bisa keluar dengan aman." },
      { name: "Nemanja Vidic", position: "Bek tengah", contribution: "38 main, 4 gol semua kompetisi", story: "Musim breakthrough Vidic. Ia memberi duel udara, fisik, dan karakter keras yang melengkapi elegansi Ferdinand." },
      { name: "Patrice Evra", position: "Bek kiri", contribution: "36 main, 2 gol semua kompetisi", story: "Evra mulai menggeser Heinze sebagai bek kiri utama. Overlap cepatnya cocok dengan gaya menyerang baru United." },
      { name: "Louis Saha", position: "Striker", contribution: "34 main, 13 gol semua kompetisi, 4 assist Premier League", story: "Saha sangat penting pada paruh pertama musim karena mobilitasnya membuat serangan United lebih sulit ditebak daripada era Van Nistelrooy." },
      { name: "Ole Gunnar Solskjaer", position: "Striker/winger kanan", contribution: "32 main, 11 gol semua kompetisi", story: "Solskjaer memberi satu kontribusi besar terakhir setelah cedera panjang, sebelum pensiun sebagai pemain pada 2007." }
    ],
    statistics: {
      leaguePosition: "1st Premier League",
      matches: 60,
      wins: 42,
      draws: 7,
      losses: 11,
      goalsFor: 123,
      goalsAgainst: 51,
      topScorer: "Cristiano Ronaldo dan Wayne Rooney (23 gol semua kompetisi / Ronaldo 17 gol liga)",
      topAssist: "Wayne Rooney (11 assist Premier League menurut StatsCrew)",
      mostAppearances: "Wayne Rooney (55 main)"
    },
    importantMoments: [
      { month: "20 Agustus 2006", title: "United membuka liga dengan 5-1 atas Fulham", description: "United langsung tampil eksplosif di Old Trafford dan menang 5-1.", impact: "Memberi sinyal awal bahwa serangan tanpa Van Nistelrooy bisa lebih cair dan produktif." },
      { month: "22 Oktober 2006", title: "Liverpool dikalahkan 2-0", description: "United mengalahkan Liverpool di Old Trafford lewat gol Paul Scholes dan Rio Ferdinand.", impact: "Menguatkan posisi United sebagai kandidat juara serius." },
      { month: "28 Oktober 2006", title: "Rooney hat-trick di Bolton", description: "United menang 4-0 di Reebok Stadium dan Rooney mencetak hat-trick.", impact: "Kemenangan tandang besar yang menunjukkan daya ledak lini depan baru." },
      { month: "26 November 2006", title: "United 1-1 Chelsea", description: "Duel langsung kandidat juara di Old Trafford berakhir imbang.", impact: "United tetap berada dalam perburuan gelar dan menunjukkan jarak dengan Chelsea mulai menipis." },
      { month: "24 Februari 2007", title: "Gol solo Ronaldo di Fulham", description: "Ronaldo mencetak gol kemenangan telat saat United menang 2-1 di Craven Cottage.", impact: "Salah satu momen ketika Ronaldo terlihat sebagai pemain yang bisa memenangkan liga sendirian." },
      { month: "3 Maret 2007", title: "John O'Shea menangkan laga di Anfield", description: "United menang 1-0 atas Liverpool lewat gol injury time O'Shea setelah bermain dengan 10 pemain.", impact: "Momen mental juara: menang di Anfield dalam kondisi sulit." },
      { month: "10 April 2007", title: "Roma dihancurkan 7-1", description: "United mengalahkan Roma 7-1 di Old Trafford pada perempat final Champions League.", impact: "Menjadi salah satu performa Eropa terbaik United era Ferguson." },
      { month: "24 April 2007", title: "Rooney kalahkan Milan di leg pertama", description: "United menang 3-2 atas AC Milan di semifinal Champions League, dengan Rooney mencetak gol kemenangan pada injury time.", impact: "Memberi harapan besar menuju final Eropa, meski akhirnya Milan membalikkan agregat di San Siro." },
      { month: "28 April 2007", title: "Comeback besar di Everton", description: "United tertinggal 0-2 di Goodison Park lalu menang 4-2, sementara Chelsea hanya imbang melawan Bolton.", impact: "Hari yang sangat menentukan dalam perebutan gelar karena jarak melebar di puncak klasemen." },
      { month: "5 Mei 2007", title: "Derby Manchester dimenangkan", description: "United menang 1-0 atas Manchester City lewat penalti Ronaldo dan Van der Sar menyelamatkan penalti Darius Vassell.", impact: "United semakin dekat ke gelar liga sebelum Chelsea kehilangan poin melawan Arsenal." },
      { month: "6 Mei 2007", title: "Gelar Premier League dipastikan", description: "Chelsea bermain imbang 1-1 dengan Arsenal sehari setelah United menang di derby Manchester.", impact: "United resmi kembali menjadi juara Premier League untuk pertama kalinya sejak 2002/03." },
      { month: "19 Mei 2007", title: "Final FA Cup kalah dari Chelsea", description: "Final pertama di Wembley baru berakhir 0-1 setelah extra time lewat gol Didier Drogba.", impact: "United gagal meraih double, tetapi musim tetap menjadi titik balik besar era baru Ferguson." }
    ],
    additionalInfo: [
      "Rekor liga United: 38 pertandingan, 28 menang, 5 seri, 5 kalah, gol 83:27, 89 poin, juara Premier League.",
      "Rekor semua kompetisi MUFCInfo: 60 pertandingan, 42 menang, 7 seri, 11 kalah, gol 123:51.",
      "MUFCInfo mencatat top scorer semua kompetisi: Cristiano Ronaldo 23, Wayne Rooney 23, Louis Saha 13, Ole Gunnar Solskjaer 11, Paul Scholes 7, Ryan Giggs 6, dan Michael Carrick 6.",
      "Assist yang diisi pada tabel skuad adalah assist Premier League dari StatsCrew, bukan semua kompetisi.",
      "Top assist Premier League United 2006/07 menurut StatsCrew: Wayne Rooney 11, Cristiano Ronaldo 8, Ryan Giggs 7, Louis Saha 4, Michael Carrick 3, Gary Neville 3, Ole Gunnar Solskjaer 3, Park Ji-sung 2, Patrice Evra 2, Wes Brown 2, Paul Scholes 1, John O'Shea 1, Darren Fletcher 1, Nemanja Vidic 1, Mikael Silvestre 1, Alan Smith 1, dan Gabriel Heinze 1.",
      "Nomor skuad 2006/07 mengikuti United By Numbers dan FootballSquads: Van der Sar 1, Gary Neville 2, Evra 3, Heinze 4, Ferdinand 5, Brown 6, Ronaldo 7, Rooney 8, Saha 9, Giggs 11, Park 13, Smith 14, Vidic 15, Carrick 16, Larsson 17, Scholes 18, Rossi 19, Solskjaer 20, Dong 21, O'Shea 22, Richardson 23, Fletcher 24, Danny Simpson 25, Bardsley 26, Silvestre 27, Pique 28, Kuszczak 29, Lee Martin 30, Cathcart 32, Eagles 33, Shawcross 34, Kieran Lee 35, David Gray 36, Heaton 38, Zieler 39, Adam Eckersley 40, Phil Marsh 41, Michael Barnes 42, Jonny Evans 47, Ritchie Jones 49, Gibson 50, dan Fraizer Campbell 51.",
      "Transfermarkt mencatat pengeluaran utama United 2006/07 sebesar EUR 27.20m untuk Michael Carrick; Tomasz Kuszczak dan Henrik Larsson masuk sebagai pinjaman.",
      "Transfermarkt mencatat pemasukan 2006/07 sebesar EUR 18.00m, terutama Ruud van Nistelrooy EUR 15.00m, David Jones EUR 1.50m, Jonathan Spector EUR 750k, David Bellion EUR 500k, Luke Steele sekitar EUR 250k, dan beberapa transfer kecil lain.",
      "Wikipedia/ringkasan musim mencatat Carrick GBP 13m awal, Van Nistelrooy GBP 10.2m, David Jones GBP 1m, Paul McShane GBP 1.5m, Luke Steele GBP 170k, dan Sylvan Ebanks-Blake GBP 200k; tabel transfer memakai nilai euro agar konsisten dengan musim sebelumnya.",
      "FA Cup berakhir sebagai runner-up setelah kalah 0-1 dari Chelsea di final Wembley baru.",
      "League Cup berakhir di ronde keempat setelah kalah 0-1 dari Southend United.",
      "Champions League berakhir di semifinal setelah kalah agregat 3-5 dari AC Milan.",
      "Cristiano Ronaldo memenangkan PFA Player of the Year, PFA Young Player of the Year, dan FWA Footballer of the Year.",
      "Kemenangan 7-1 atas Roma di Old Trafford menjadi salah satu laga Eropa paling ikonik United era Ferguson."
    ],
    featured: false
  },
  {
    id: "2007-08",
    label: "2007/08",
    title: "Manchester United Musim 2007/08",
    era: "Era Ronaldo & Rooney",
    managers: ["Sir Alex Ferguson"],
    competitions: [
      "Premier League",
      "FA Cup",
      "League Cup",
      "UEFA Champions League",
      "FA Community Shield"
    ],
    leaguePosition: "1st Premier League",
    trophies: ["Premier League", "UEFA Champions League", "FA Community Shield"],
    summary:
      "European Double: United mempertahankan Premier League, menjuarai Champions League di Moscow, dan membuka musim dengan Community Shield. Cristiano Ronaldo mencetak 42 gol semua kompetisi, sementara trio Ronaldo-Rooney-Tevez dan pertahanan Van der Sar, Ferdinand, Vidic, Evra menjadi tulang punggung tim terbaik Eropa.",
    story: [
      "United datang sebagai juara bertahan Premier League, tetapi Ferguson tahu skuad 2006/07 masih perlu lebih dalam untuk menaklukkan Eropa. Karena itu Owen Hargreaves, Anderson, Nani, Tomasz Kuszczak, dan Carlos Tevez masuk untuk memberi variasi taktik, tenaga, dan rotasi.",
      "Start liga justru buruk: United imbang melawan Reading dan Portsmouth, Rooney cedera, Ronaldo terkena kartu merah di Fratton Park, lalu United kalah derby dari Manchester City. Setelah tiga laga, posisi mereka sempat merosot jauh dari puncak.",
      "Begitu mesin mulai hidup, bentuk tim menjadi sangat modern. Ronaldo tidak lagi hanya winger, tetapi finisher utama dari sisi kanan/kiri. Rooney dan Tevez bekerja tanpa bola, turun menjemput, menekan bek lawan, dan membuka ruang untuk Ronaldo.",
      "Gary Neville hampir absen semusim penuh, sehingga Wes Brown menjadi bek kanan utama. Brown, Ferdinand, Vidic, Evra, dan Van der Sar membuat United hanya kebobolan 22 gol di liga.",
      "Di Eropa, United tidak terkalahkan. Mereka melewati Lyon, Roma, dan Barcelona sebelum final all-English melawan Chelsea di Luzhniki Stadium, Moscow.",
      "Final Champions League menjadi klimaks dramatis: Ronaldo mencetak gol sundulan dari umpan silang Wes Brown, Frank Lampard menyamakan skor, Didier Drogba dikartu merah, lalu Van der Sar menyelamatkan penalti Nicolas Anelka dalam adu penalti.",
      "Musim ini juga emosional karena peringatan 50 tahun Munich Air Disaster. United memakai seragam retro tanpa sponsor dan nama pemain saat derby Manchester Februari 2008, momen yang sangat kuat dalam sejarah klub meski hasilnya kalah.",
      "Dengan Premier League, Champions League, dan Community Shield, musim 2007/08 menjadi puncak pertama era Ronaldo-Rooney dan salah satu musim terbaik sepanjang sejarah Manchester United."
    ],
    squad: [
      { name: "Edwin van der Sar", shirtNumber: 1, position: "Kiper", age: 36, country: "Netherlands", appearances: 44, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Gary Neville", shirtNumber: 2, position: "Bek kanan/kapten", age: 32, country: "England", appearances: 1, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Patrice Evra", shirtNumber: 3, position: "Bek kiri", age: 26, country: "France", appearances: 48, goals: 0, assists: 1, status: "Pemain utama" },
      { name: "Owen Hargreaves", shirtNumber: 4, position: "Gelandang bertahan/bek kanan", age: 26, country: "England", appearances: 34, goals: 2, assists: 1, status: "Pemain utama" },
      { name: "Rio Ferdinand", shirtNumber: 5, position: "Bek tengah", age: 28, country: "England", appearances: 51, goals: 3, assists: 1, status: "Pemain utama" },
      { name: "Wes Brown", shirtNumber: 6, position: "Bek kanan/bek tengah", age: 27, country: "England", appearances: 52, goals: 1, assists: 2, status: "Pemain utama" },
      { name: "Cristiano Ronaldo", shirtNumber: 7, position: "Winger/forward", age: 22, country: "Portugal", appearances: 49, goals: 42, assists: 7, status: "Pemain utama" },
      { name: "Anderson", shirtNumber: 8, position: "Gelandang tengah", age: 19, country: "Brazil", appearances: 38, goals: 0, assists: 1, status: "Pemain utama" },
      { name: "Louis Saha", shirtNumber: 9, position: "Striker", age: 29, country: "France", appearances: 24, goals: 5, assists: 0, status: "Cadangan" },
      { name: "Wayne Rooney", shirtNumber: 10, position: "Forward/second striker", age: 21, country: "England", appearances: 43, goals: 18, assists: 10, status: "Pemain utama" },
      { name: "Ryan Giggs", shirtNumber: 11, position: "Winger kiri/gelandang serang", age: 33, country: "Wales", appearances: 43, goals: 4, assists: 5, status: "Pemain utama" },
      { name: "Ben Foster", shirtNumber: 12, position: "Kiper", age: 24, country: "England", appearances: 1, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Park Ji-sung", shirtNumber: 13, position: "Gelandang/winger", age: 26, country: "South Korea", appearances: 18, goals: 1, assists: 1, status: "Cadangan" },
      { name: "Gabriel Heinze", shirtNumber: 14, position: "Bek kiri/bek tengah", age: 29, country: "Argentina", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Cadangan" },
      { name: "Nemanja Vidic", shirtNumber: 15, position: "Bek tengah", age: 25, country: "Serbia", appearances: 45, goals: 1, assists: 1, status: "Pemain utama" },
      { name: "Michael Carrick", shirtNumber: 16, position: "Gelandang tengah", age: 26, country: "England", appearances: 49, goals: 2, assists: 2, status: "Pemain utama" },
      { name: "Nani", shirtNumber: 17, position: "Winger kiri/kanan", age: 20, country: "Portugal", appearances: 41, goals: 4, assists: 6, status: "Pemain utama" },
      { name: "Paul Scholes", shirtNumber: 18, position: "Gelandang tengah", age: 32, country: "England", appearances: 34, goals: 2, assists: 3, status: "Pemain utama" },
      { name: "Gerard Pique", shirtNumber: 19, position: "Bek tengah", age: 20, country: "Spain", appearances: 13, goals: 2, assists: 0, status: "Cadangan" },
      { name: "Ole Gunnar Solskjaer", shirtNumber: 20, position: "Striker/winger kanan", age: 34, country: "Norway", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Cadangan" },
      { name: "Dong Fangzhuo", shirtNumber: 21, position: "Striker", age: 22, country: "China", appearances: 2, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "John O'Shea", shirtNumber: 22, position: "Bek/gelandang", age: 26, country: "Republic of Ireland", appearances: 38, goals: 0, assists: 2, status: "Pemain utama" },
      { name: "Jonny Evans", shirtNumber: 23, position: "Bek tengah", age: 19, country: "Northern Ireland", appearances: 3, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Darren Fletcher", shirtNumber: 24, position: "Gelandang tengah/kanan", age: 23, country: "Scotland", appearances: 24, goals: 2, assists: 0, status: "Cadangan" },
      { name: "Danny Simpson", shirtNumber: 25, position: "Bek kanan", age: 20, country: "England", appearances: 8, goals: 0, assists: 1, status: "Pemain muda" },
      { name: "Phil Bardsley", shirtNumber: 26, position: "Bek kanan", age: 22, country: "England", appearances: 1, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Mikael Silvestre", shirtNumber: 27, position: "Bek tengah/bek kiri", age: 30, country: "France", appearances: 6, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Darron Gibson", shirtNumber: 28, position: "Gelandang tengah", age: 19, country: "Northern Ireland", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Tomasz Kuszczak", shirtNumber: 29, position: "Kiper", age: 25, country: "Poland", appearances: 16, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Lee Martin", shirtNumber: 30, position: "Winger/gelandang serang", age: 20, country: "England", appearances: 1, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Carlos Tevez", shirtNumber: 32, position: "Forward/second striker", age: 23, country: "Argentina", appearances: 48, goals: 19, assists: 7, status: "Pemain utama" },
      { name: "Chris Eagles", shirtNumber: 33, position: "Winger kanan", age: 21, country: "England", appearances: 6, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Rodrigo Possebon", shirtNumber: 34, position: "Gelandang tengah", age: 18, country: "Brazil", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Ryan Shawcross", shirtNumber: 34, position: "Bek tengah", age: 19, country: "Wales", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Kieran Lee", shirtNumber: 35, position: "Bek/gelandang", age: 19, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "David Gray", shirtNumber: 36, position: "Bek kanan", age: 19, country: "Scotland", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Craig Cathcart", shirtNumber: 37, position: "Bek tengah", age: 18, country: "Northern Ireland", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Tom Heaton", shirtNumber: 38, position: "Kiper", age: 21, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Fraizer Campbell", shirtNumber: 39, position: "Striker", age: 19, country: "England", appearances: 2, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Adam Eckersley", shirtNumber: 40, position: "Bek kiri", age: 21, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Ron-Robert Zieler", shirtNumber: 41, position: "Kiper", age: 18, country: "Germany", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Sean Evans", shirtNumber: 42, position: "Gelandang", age: 19, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Sam Hewson", shirtNumber: 43, position: "Gelandang tengah", age: 18, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "James Chester", shirtNumber: 44, position: "Bek tengah", age: 18, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Febian Brandy", shirtNumber: 45, position: "Striker", age: 18, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Richard Eckersley", shirtNumber: 46, position: "Bek kanan", age: 18, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Danny Welbeck", shirtNumber: 47, position: "Striker", age: 16, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" }
    ],
    transfersIn: [
      { player: "Anderson", from: "FC Porto", fee: "EUR 31.50m", date: "2 Juli 2007", note: "Transfermarkt mencatat EUR 31.50m; sumber Inggris saat itu sering menyatukan paket Anderson dan Nani." },
      { player: "Nani", from: "Sporting CP", fee: "EUR 25.50m", date: "2 Juli 2007", note: "Transfermarkt mencatat EUR 25.50m; datang sebagai winger muda Portugal dan langsung menjadi rotasi utama." },
      { player: "Owen Hargreaves", from: "Bayern Munich", fee: "EUR 25.00m", date: "1 Juli 2007", note: "Transfermarkt mencatat EUR 25.00m; laporan Inggris saat itu menyebut sekitar GBP 17m-17.5m." },
      { player: "Carlos Tevez", from: "West Ham United / MSI", fee: "EUR 12.70m", date: "10 Agustus 2007", note: "Loan fee dua musim menurut Transfermarkt; langsung menjadi bagian penting dari trio Ronaldo-Rooney-Tevez." },
      { player: "Tomasz Kuszczak", from: "West Bromwich Albion", fee: "EUR 4.30m", date: "2 Juli 2007", note: "Transfer permanen setelah musim sebelumnya dipinjam dari West Brom." },
      { player: "Rodrigo Possebon", from: "Internacional youth", fee: "EUR 3.50m", date: "30 Januari 2008", note: "Transfermarkt mencatat EUR 3.50m; diberi nomor 34 pada Februari 2008." },
      { player: "Rafael", from: "Fluminense U17", fee: "EUR 3.00m", date: "2007/08", note: "Transfermarkt memasukkan kedatangan Rafael pada catatan 2007/08, meski ia baru masuk skuad utama musim berikutnya setelah berusia 18 tahun." },
      { player: "Manucho", from: "Petro Luanda", fee: "EUR 1.00m", date: "1 Januari 2008", note: "Datang pada bursa Januari lalu langsung dipinjamkan ke Panathinaikos karena urusan izin kerja dan adaptasi." },
      { player: "Sam Hewson", from: "Manchester United U18", fee: "-", date: "2007/08", note: "Naik ke daftar skuad muda menurut Transfermarkt dan FootballSquads." },
      { player: "Giuseppe Rossi", from: "Parma", fee: "End of loan", date: "30 Juni 2007", note: "Kembali dari pinjaman Parma sebelum dijual permanen ke Villarreal." },
      { player: "Tim Howard", from: "Everton", fee: "End of loan", date: "30 Juni 2007", note: "Kembali secara administratif dari pinjaman Everton sebelum transfer permanen dicatat pada musim ini." },
      { player: "Gerard Pique", from: "Real Zaragoza", fee: "End of loan", date: "30 Juni 2007", note: "Kembali dari pinjaman La Liga dan menjadi bek rotasi sepanjang musim." }
    ],
    transfersOut: [
      { player: "Gabriel Heinze", to: "Real Madrid", fee: "EUR 12.00m", date: "23 Agustus 2007", note: "Transfermarkt mencatat EUR 12.00m setelah saga transfer panjang pada musim panas 2007." },
      { player: "Giuseppe Rossi", to: "Villarreal", fee: "EUR 10.00m", date: "31 Juli 2007", note: "Transfermarkt mencatat EUR 10.00m; menjadi salah satu penjualan akademi terbesar United pada era itu." },
      { player: "Alan Smith", to: "Newcastle United", fee: "EUR 9.00m", date: "3 Agustus 2007", note: "Transfermarkt mencatat EUR 9.00m; sumber Inggris mencatat sekitar GBP 6m." },
      { player: "Kieran Richardson", to: "Sunderland", fee: "EUR 8.20m", date: "16 Juli 2007", note: "Transfermarkt mencatat EUR 8.20m; pindah permanen ke tim Roy Keane." },
      { player: "Tim Howard", to: "Everton", fee: "EUR 4.20m", date: "1 Juli 2007", note: "Transfer permanen ke Everton setelah masa pinjaman yang sukses." },
      { player: "Phil Bardsley", to: "Sunderland", fee: "EUR 3.00m", date: "22 Januari 2008", note: "Transfermarkt mencatat EUR 3.00m; sebelumnya sempat dipinjamkan ke Sheffield United." },
      { player: "Manucho", to: "Panathinaikos", fee: "EUR 200k", date: "31 Januari 2008", note: "Dipinjamkan setelah bergabung pada Januari; Transfermarkt mencatat loan fee EUR 200k." },
      { player: "Souleymane Mamam", to: "Royal Antwerp", fee: "Free transfer", date: "2007/08", note: "Keluar permanen sebagai free transfer menurut Transfermarkt." },
      { player: "Phil Marsh", to: "Blackpool", fee: "Free transfer", date: "2007/08", note: "Keluar dari kelompok pemain muda United sebagai free transfer." },
      { player: "Ole Gunnar Solskjaer", to: "Retired", fee: "-", date: "28 Agustus 2007", note: "Pensiun pada usia 34 tahun setelah lama berjuang dengan cedera lutut." },
      { player: "Adam Eckersley", to: "Port Vale", fee: "Free transfer", date: "1 Januari 2008", note: "Keluar permanen pada bursa Januari." },
      { player: "Ryan Shawcross", to: "Stoke City", fee: "EUR 1.30m", date: "17 Januari 2008", note: "Wikipedia mencatat sekitar GBP 1m; nilai euro dibulatkan untuk konsistensi, sementara Transfermarkt memasukkan Shawcross dalam arus keluar musim ini." },
      { player: "Kieran Lee", to: "Oldham Athletic", fee: "Free transfer", date: "21 Mei 2008", note: "Dilepas permanen setelah sebelumnya menjalani pinjaman." },
      { player: "Gerard Pique", to: "Barcelona", fee: "EUR 5.00m", date: "27 Mei 2008", note: "Nilai euro dibulatkan dari laporan sekitar GBP 5m; Transfermarkt mencatat kepindahan ini pada akhir musim." },
      { player: "Ryan Shawcross", to: "Stoke City", fee: "Loan transfer", date: "9 Agustus 2007", note: "Awalnya dipinjamkan ke Stoke sebelum transfer permanen Januari 2008." },
      { player: "Ritchie Jones", to: "Yeovil Town", fee: "Loan transfer", date: "14 Agustus 2007", note: "Dipinjamkan sampai Desember 2007." },
      { player: "Craig Cathcart", to: "Royal Antwerp", fee: "Loan transfer", date: "29 Agustus 2007", note: "Dipinjamkan ke klub mitra Royal Antwerp." },
      { player: "Lee Martin", to: "Plymouth Argyle / Sheffield United", fee: "Loan transfer", date: "2007/08", note: "Menjalani dua masa pinjaman pada musim ini." },
      { player: "Phil Bardsley", to: "Sheffield United", fee: "Loan transfer", date: "19 Oktober 2007", note: "Dipinjamkan sebelum pindah permanen ke Sunderland." },
      { player: "Fraizer Campbell", to: "Hull City", fee: "Loan transfer", date: "19 Oktober 2007", note: "Dipinjamkan semusim dan membantu Hull promosi ke Premier League." },
      { player: "Darron Gibson", to: "Wolverhampton Wanderers", fee: "Loan transfer", date: "19 Oktober 2007", note: "Dipinjamkan untuk menit bermain di Championship." },
      { player: "Jonny Evans", to: "Sunderland", fee: "Loan transfer", date: "4 Januari 2008", note: "Kembali ke Sunderland pada paruh kedua musim dan tetap berkembang sebagai bek muda." },
      { player: "Danny Simpson", to: "Ipswich Town", fee: "Loan transfer", date: "21 Maret 2008", note: "Dipinjamkan setelah sempat tampil beberapa kali untuk tim utama United." }
    ],
    commonStartingXI: {
      formation: "4-4-2 / 4-3-3",
      players: {
        GK: "Edwin van der Sar",
        RB: "Wes Brown",
        CB1: "Rio Ferdinand",
        CB2: "Nemanja Vidic",
        LB: "Patrice Evra",
        RM: "Cristiano Ronaldo",
        CM1: "Michael Carrick",
        CM2: "Paul Scholes",
        LM: "Ryan Giggs",
        ST1: "Wayne Rooney",
        ST2: "Carlos Tevez"
      }
    },
    keyPlayers: [
      { name: "Cristiano Ronaldo", position: "Winger/forward", contribution: "49 main, 42 gol semua kompetisi, 31 gol Premier League", story: "Musim Ballon d'Or Ronaldo: ia menjadi finisher utama United, top scorer Premier League, top scorer Champions League, dan pemain yang paling menentukan dalam perebutan dua gelar besar." },
      { name: "Wayne Rooney", position: "Forward/second striker", contribution: "43 main, 18 gol semua kompetisi, 10 assist Premier League", story: "Rooney sering mengorbankan posisi demi sistem. Ia turun menjemput bola, melebar, menekan, dan menjadi kreator utama bagi Ronaldo dan Tevez." },
      { name: "Carlos Tevez", position: "Forward/second striker", contribution: "48 main, 19 gol semua kompetisi, 7 assist Premier League", story: "Tevez langsung cocok dengan energi United. Pressing, agresivitas, dan gol-gol pentingnya membuat trio depan United sulit dibaca." },
      { name: "Rio Ferdinand", position: "Bek tengah", contribution: "51 main, 3 gol semua kompetisi", story: "Rio menjalani salah satu musim terbaiknya: tenang, cepat membaca permainan, dan menjadi pemimpin lini belakang ketika United hanya kebobolan 22 gol liga." },
      { name: "Nemanja Vidic", position: "Bek tengah", contribution: "45 main, 1 gol semua kompetisi", story: "Vidic memberi duel, heading, dan kekuatan fisik yang melengkapi Ferdinand. Duet ini menjadi fondasi defensive peak United." },
      { name: "Edwin van der Sar", position: "Kiper", contribution: "44 main, pahlawan adu penalti final Champions League", story: "Van der Sar menjaga stabilitas tim sepanjang musim dan membuat penyelamatan penentu atas penalti Nicolas Anelka di Moscow." },
      { name: "Wes Brown", position: "Bek kanan/bek tengah", contribution: "52 main, 1 gol semua kompetisi", story: "Cedera Gary Neville membuka jalan bagi Brown sebagai bek kanan utama. Umpan silangnya untuk gol Ronaldo di final Champions League menjadi momen puncak." },
      { name: "Michael Carrick", position: "Gelandang tengah", contribution: "49 main, 2 gol semua kompetisi", story: "Carrick memberi kontrol, passing vertikal, dan ketenangan dalam bentuk 4-4-2 maupun tiga gelandang di laga besar Eropa." },
      { name: "Paul Scholes", position: "Gelandang tengah", contribution: "34 main, 2 gol semua kompetisi", story: "Scholes melewatkan sebagian musim karena cedera, tetapi gol jarak jauhnya melawan Barcelona membawa United ke final Champions League." },
      { name: "Owen Hargreaves", position: "Gelandang bertahan/bek kanan", contribution: "34 main, 2 gol semua kompetisi", story: "Hargreaves memberi fleksibilitas taktis dan ketahanan untuk laga Eropa. Ia juga mengeksekusi penalti dengan sempurna di final." },
      { name: "Nani", position: "Winger", contribution: "41 main, 4 gol semua kompetisi, 6 assist Premier League", story: "Nani memberi rotasi dan kreativitas dari sisi sayap, termasuk beberapa momen penting pada musim debutnya." }
    ],
    statistics: {
      leaguePosition: "1st Premier League",
      matches: 57,
      wins: 39,
      draws: 11,
      losses: 7,
      goalsFor: 110,
      goalsAgainst: 33,
      topScorer: "Cristiano Ronaldo (42 gol semua kompetisi / 31 gol Premier League)",
      topAssist: "Wayne Rooney (10 assist Premier League menurut StatBunker; Transfermarkt mencatat 12 assist)",
      mostAppearances: "Wes Brown (52 main) dan Rio Ferdinand (51 main)"
    },
    importantMoments: [
      { month: "5 Agustus 2007", title: "Community Shield dimenangkan atas Chelsea", description: "United bermain 1-1 melawan Chelsea lalu menang adu penalti di Wembley.", impact: "Membuka musim dengan trofi dan menjadi pemanasan dramatis untuk rivalitas yang berlanjut sampai final Champions League." },
      { month: "19 Agustus 2007", title: "Start buruk di derby Manchester", description: "United kalah 0-1 dari Manchester City setelah dua hasil imbang awal liga.", impact: "Awal musim terasa berat, tetapi menjadi kontras besar dengan bagaimana tim akhirnya bangkit." },
      { month: "23 September 2007", title: "Chelsea dikalahkan 2-0", description: "United mengalahkan Chelsea di Old Trafford dalam laga liga pertama Avram Grant sebagai manajer Chelsea.", impact: "Kemenangan besar awal yang membantu mengembalikan arah musim." },
      { month: "12 Januari 2008", title: "Ronaldo hat-trick vs Newcastle", description: "United menang 6-0 atas Newcastle dan Ronaldo mencetak hat-trick senior pertamanya untuk klub.", impact: "Menjadi salah satu tanda jelas bahwa Ronaldo sudah berubah menjadi mesin gol." },
      { month: "10 Februari 2008", title: "Derby peringatan 50 tahun Munich", description: "United memakai seragam retro untuk memperingati Munich Air Disaster, tetapi kalah 1-2 dari Manchester City.", impact: "Secara emosional menjadi salah satu pertandingan paling penting dalam sejarah modern klub." },
      { month: "8 Maret 2008", title: "FA Cup berakhir melawan Portsmouth", description: "United kalah 0-1 dari Portsmouth di Old Trafford pada ronde keenam FA Cup.", impact: "Hasil ini menghentikan peluang treble domestik-Eropa." },
      { month: "23 Maret 2008", title: "Liverpool dihantam 3-0", description: "United mengalahkan Liverpool lewat gol Wes Brown, Ronaldo, dan Nani.", impact: "Kemenangan besar dalam race gelar dan salah satu performa liga paling kuat musim ini." },
      { month: "29 April 2008", title: "Gol Scholes singkirkan Barcelona", description: "United menang 1-0 atas Barcelona di Old Trafford melalui gol jarak jauh Paul Scholes.", impact: "Mengirim United ke final Champions League pertama sejak 1999." },
      { month: "11 Mei 2008", title: "Gelar liga dipastikan di Wigan", description: "United menang 2-0 di JJB Stadium lewat penalti Ronaldo dan gol Ryan Giggs.", impact: "United mempertahankan Premier League dengan 87 poin, unggul dua poin dari Chelsea." },
      { month: "21 Mei 2008", title: "Moscow: Champions League ketiga", description: "United bermain 1-1 melawan Chelsea dan menang adu penalti 6-5 di Luzhniki Stadium.", impact: "Mengunci European Double dan memberi United gelar European Cup/Champions League ketiga." }
    ],
    additionalInfo: [
      "Rekor liga United: 38 pertandingan, 27 menang, 6 seri, 5 kalah, gol 80:22, 87 poin, juara Premier League.",
      "Rekor semua kompetisi: 57 pertandingan, 39 menang, 11 seri, 7 kalah, gol 110:33, termasuk Community Shield yang dimenangkan lewat adu penalti setelah skor 1-1.",
      "Wikipedia/ringkasan musim mencatat skuad statistik semua kompetisi: Ronaldo 46+3 dan 42 gol, Tevez 39+9 dan 19 gol, Rooney 39+4 dan 18 gol, Ferdinand 51, Brown 48+4, Evra 48, Vidic 45, Carrick 39+10, dan Van der Sar 44.",
      "Assist pada tabel skuad memakai daftar Premier League Manchester United 2007/08 dari StatBunker: Rooney 10, Tevez 7, Ronaldo 7, Nani 6, Giggs 5, Scholes 3, O'Shea 2, Brown 2, Carrick 2, Hargreaves 1, Park 1, Evra 1, Ferdinand 1, Anderson 1, Simpson 1, dan Vidic 1.",
      "StatsCrew juga mencatat Wayne Rooney sebagai top assist liga United dengan 10 assist, tetapi beberapa angka individu berbeda dari StatBunker dan Transfermarkt karena metode pencatatan assist tidak selalu sama untuk era ini.",
      "Nomor skuad 2007/08 mengikuti FootballSquads dan catatan musim: Van der Sar 1, Gary Neville 2, Evra 3, Hargreaves 4, Ferdinand 5, Brown 6, Ronaldo 7, Anderson 8, Saha 9, Rooney 10, Giggs 11, Foster 12, Park 13, Heinze 14, Vidic 15, Carrick 16, Nani 17, Scholes 18, Pique 19, Solskjaer 20, Dong 21, O'Shea 22, Jonny Evans 23, Fletcher 24, Simpson 25, Bardsley 26, Silvestre 27, Gibson 28, Kuszczak 29, Lee Martin 30, Tevez 32, Eagles 33, Possebon/Shawcross 34, Kieran Lee 35, David Gray 36, Cathcart 37, Heaton 38, Campbell 39, Adam Eckersley 40, Zieler 41, Sean Evans 42, Hewson 43, Chester 44, Brandy 45, Richard Eckersley 46, dan Welbeck 47.",
      "Transfermarkt mencatat pengeluaran United 2007/08 sebesar EUR 106.50m, pemasukan EUR 46.60m, dan saldo EUR -59.90m.",
      "Transfermarkt mencatat kedatangan utama: Anderson EUR 31.50m, Nani EUR 25.50m, Owen Hargreaves EUR 25.00m, Carlos Tevez loan fee EUR 12.70m, Tomasz Kuszczak EUR 4.30m, Rodrigo Possebon EUR 3.50m, Rafael EUR 3.00m, dan Manucho EUR 1.00m.",
      "Transfermarkt mencatat penjualan utama: Gabriel Heinze EUR 12.00m, Giuseppe Rossi EUR 10.00m, Alan Smith EUR 9.00m, Kieran Richardson EUR 8.20m, Tim Howard EUR 4.20m, Phil Bardsley EUR 3.00m, serta loan fee Manucho EUR 200k ke Panathinaikos.",
      "Wikipedia mencatat Anderson dan Nani diumumkan dengan biaya gabungan GBP 30m, sementara beberapa laporan lain menyebut total paket lebih tinggi; tabel ini memakai nilai EUR Transfermarkt agar konsisten dengan musim-musim sebelumnya.",
      "FA Cup berakhir di ronde keenam setelah kalah 0-1 dari Portsmouth, yang kemudian menjadi juara FA Cup.",
      "League Cup berakhir di ronde ketiga setelah kalah 0-2 dari Coventry City di Old Trafford.",
      "Champions League dimenangkan tanpa kekalahan: United melewati Lyon, Roma, Barcelona, lalu Chelsea lewat adu penalti di final Moscow.",
      "Final Champions League 2008: Ronaldo mencetak gol menit 26 dari umpan silang Wes Brown, Lampard menyamakan skor sebelum turun minum, Drogba dikartu merah pada extra time, lalu Van der Sar menepis penalti Anelka.",
      "Cristiano Ronaldo memenangkan Ballon d'Or 2008 setelah musim 42 gol, Premier League, Champions League, European Golden Shoe, dan berbagai penghargaan pemain terbaik Inggris."
    ],
    featured: true
  },
  {
    id: "2008-09",
    label: "2008/09",
    title: "Manchester United Musim 2008/09",
    era: "Era Ronaldo & Rooney",
    managers: ["Sir Alex Ferguson"],
    competitions: [
      "Premier League",
      "FA Cup",
      "League Cup",
      "UEFA Champions League",
      "FA Community Shield",
      "UEFA Super Cup",
      "FIFA Club World Cup"
    ],
    leaguePosition: "1st Premier League",
    trophies: [
      "Premier League",
      "League Cup",
      "FA Community Shield",
      "FIFA Club World Cup"
    ],
    summary:
      "Musim terakhir Cristiano Ronaldo pada periode pertamanya di Manchester United: United menjadi juara Premier League tiga kali beruntun, memenangkan League Cup, Community Shield, dan FIFA Club World Cup, tetapi kalah dari Barcelona di final Champions League.",
    story: [
      "United masuk 2008/09 sebagai juara Inggris dan Eropa. Ekspektasinya besar, tetapi pramusim dan awal musim dibayangi saga transfer Cristiano Ronaldo ke Real Madrid, status Carlos Tevez yang belum permanen, serta kebutuhan striker baru karena Louis Saha terus terganggu cedera.",
      "Sir Alex Ferguson akhirnya mendapatkan Dimitar Berbatov dari Tottenham pada deadline day. Berbatov memberi gaya berbeda: lebih tenang, teknis, dan elegan dibanding intensitas Rooney-Tevez-Ronaldo. Kehadirannya memperkaya opsi, tetapi juga mengubah ritme serangan yang sebelumnya sangat cepat.",
      "Musim liga tidak selalu mulus. Liverpool mengalahkan United dua kali, termasuk 4-1 di Old Trafford, tetapi United lebih stabil sepanjang musim. Gol-gol penting Federico Macheda melawan Aston Villa dan Sunderland menjadi simbol mental juara dalam race gelar.",
      "Fondasi terbesar musim ini adalah pertahanan. Edwin van der Sar, Rio Ferdinand, Nemanja Vidic, Patrice Evra, John O'Shea, dan rotasi bek kanan membentuk tim yang hanya kebobolan 24 gol liga. Van der Sar juga menjadi wajah rekor clean sheet Premier League yang sangat panjang.",
      "Di Eropa, United kembali ke final Champions League setelah melewati Inter Milan, Porto, dan Arsenal. Namun di Roma, Barcelona menang 2-0 lewat Samuel Eto'o dan Lionel Messi. Kekalahan itu menjadi penanda akhir era Ronaldo di Old Trafford dan awal tantangan baru Ferguson.",
      "Walau tidak seikonik 2007/08, musim 2008/09 tetap salah satu musim paling komplet era modern United: empat trofi, final Eropa kedua beruntun, gelar liga ketiga berturut-turut, dan skuad yang dalam di hampir setiap lini."
    ],
    squad: [
      { name: "Edwin van der Sar", shirtNumber: 1, position: "Kiper", age: 37, country: "Netherlands", appearances: 49, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Gary Neville", shirtNumber: 2, position: "Bek kanan/kapten", age: 33, country: "England", appearances: 29, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Patrice Evra", shirtNumber: 3, position: "Bek kiri", age: 27, country: "France", appearances: 48, goals: 0, assists: 2, status: "Pemain utama" },
      { name: "Owen Hargreaves", shirtNumber: 4, position: "Gelandang bertahan/bek kanan", age: 27, country: "England", appearances: 3, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Rio Ferdinand", shirtNumber: 5, position: "Bek tengah", age: 29, country: "England", appearances: 43, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Wes Brown", shirtNumber: 6, position: "Bek kanan/bek tengah", age: 28, country: "England", appearances: 13, goals: 1, assists: 0, status: "Cadangan" },
      { name: "Cristiano Ronaldo", shirtNumber: 7, position: "Winger/forward", age: 23, country: "Portugal", appearances: 53, goals: 26, assists: 6, status: "Pemain utama" },
      { name: "Anderson", shirtNumber: 8, position: "Gelandang tengah", age: 20, country: "Brazil", appearances: 38, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Dimitar Berbatov", shirtNumber: 9, position: "Striker/second striker", age: 27, country: "Bulgaria", appearances: 43, goals: 14, assists: 10, status: "Pemain utama" },
      { name: "Wayne Rooney", shirtNumber: 10, position: "Forward/second striker", age: 22, country: "England", appearances: 49, goals: 20, assists: 7, status: "Pemain utama" },
      { name: "Ryan Giggs", shirtNumber: 11, position: "Gelandang kiri/tengah", age: 34, country: "Wales", appearances: 47, goals: 4, assists: 8, status: "Pemain utama" },
      { name: "Ben Foster", shirtNumber: 12, position: "Kiper", age: 25, country: "England", appearances: 9, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Park Ji-sung", shirtNumber: 13, position: "Gelandang/winger", age: 27, country: "South Korea", appearances: 40, goals: 4, assists: 2, status: "Pemain utama" },
      { name: "Zoran Tosic", shirtNumber: 14, position: "Winger", age: 21, country: "Serbia", appearances: 3, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Nemanja Vidic", shirtNumber: 15, position: "Bek tengah", age: 26, country: "Serbia", appearances: 55, goals: 7, assists: 1, status: "Pemain utama" },
      { name: "Michael Carrick", shirtNumber: 16, position: "Gelandang tengah", age: 27, country: "England", appearances: 43, goals: 4, assists: 7, status: "Pemain utama" },
      { name: "Nani", shirtNumber: 17, position: "Winger kiri/kanan", age: 21, country: "Portugal", appearances: 31, goals: 6, assists: 4, status: "Cadangan" },
      { name: "Paul Scholes", shirtNumber: 18, position: "Gelandang tengah", age: 33, country: "England", appearances: 35, goals: 3, assists: 2, status: "Pemain utama" },
      { name: "Danny Welbeck", shirtNumber: 19, position: "Striker/winger", age: 17, country: "England", appearances: 13, goals: 3, assists: 0, status: "Pemain muda" },
      { name: "Fabio", shirtNumber: 20, position: "Bek kiri/kanan", age: 18, country: "Brazil", appearances: 2, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Rafael", shirtNumber: 21, position: "Bek kanan", age: 18, country: "Brazil", appearances: 28, goals: 1, assists: 0, status: "Pemain muda" },
      { name: "John O'Shea", shirtNumber: 22, position: "Bek/gelandang", age: 27, country: "Republic of Ireland", appearances: 54, goals: 2, assists: 3, status: "Pemain utama" },
      { name: "Jonny Evans", shirtNumber: 23, position: "Bek tengah", age: 20, country: "Northern Ireland", appearances: 34, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Darren Fletcher", shirtNumber: 24, position: "Gelandang tengah/kanan", age: 24, country: "Scotland", appearances: 42, goals: 4, assists: 0, status: "Pemain utama" },
      { name: "Manucho", shirtNumber: 26, position: "Striker", age: 25, country: "Angola", appearances: 3, goals: 0, assists: 1, status: "Cadangan" },
      { name: "Mikael Silvestre", shirtNumber: 27, position: "Bek kiri/bek tengah", age: 31, country: "France", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Cadangan" },
      { name: "Darron Gibson", shirtNumber: 28, position: "Gelandang tengah", age: 20, country: "Northern Ireland", appearances: 14, goals: 3, assists: 0, status: "Pemain muda" },
      { name: "Tomasz Kuszczak", shirtNumber: 29, position: "Kiper", age: 26, country: "Poland", appearances: 8, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Lee Martin", shirtNumber: 30, position: "Winger/gelandang serang", age: 21, country: "England", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Fraizer Campbell", shirtNumber: 31, position: "Striker", age: 20, country: "England", appearances: 2, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Carlos Tevez", shirtNumber: 32, position: "Forward/second striker", age: 24, country: "Argentina", appearances: 51, goals: 15, assists: 3, status: "Pemain utama" },
      { name: "Sam Hewson", shirtNumber: 33, position: "Gelandang tengah", age: 19, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Rodrigo Possebon", shirtNumber: 34, position: "Gelandang tengah", age: 19, country: "Italy", appearances: 8, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Tom Cleverley", shirtNumber: 35, position: "Gelandang tengah", age: 19, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "David Gray", shirtNumber: 36, position: "Bek kanan", age: 20, country: "Scotland", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Craig Cathcart", shirtNumber: 37, position: "Bek tengah", age: 19, country: "Northern Ireland", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Ron-Robert Zieler", shirtNumber: 38, position: "Kiper", age: 19, country: "Germany", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "James Chester", shirtNumber: 39, position: "Bek tengah", age: 19, country: "England", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Ben Amos", shirtNumber: 40, position: "Kiper", age: 18, country: "England", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Federico Macheda", shirtNumber: 41, position: "Striker", age: 17, country: "Italy", appearances: 5, goals: 2, assists: 1, status: "Pemain muda" },
      { name: "Richard Eckersley", shirtNumber: 42, position: "Bek kanan", age: 19, country: "England", appearances: 4, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Davide Petrucci", shirtNumber: 43, position: "Gelandang", age: 16, country: "Italy", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Ritchie De Laet", shirtNumber: 44, position: "Bek kanan/bek tengah", age: 20, country: "Belgium", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Corry Evans", shirtNumber: 45, position: "Gelandang/bek", age: 18, country: "Northern Ireland", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Danny Drinkwater", shirtNumber: 46, position: "Gelandang tengah", age: 18, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Matty James", shirtNumber: 47, position: "Gelandang tengah", age: 17, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" }
    ],
    transfersIn: [
      { player: "Fabio", from: "Fluminense", fee: "Undisclosed", date: "1 Juli 2008", note: "Wikipedia mencatat fee undisclosed; masuk skuad utama setelah cukup umur untuk kontrak profesional." },
      { player: "Rafael", from: "Fluminense", fee: "Undisclosed", date: "1 Juli 2008", note: "Wikipedia mencatat fee undisclosed; Transfermarkt juga pernah memasukkan Rafael pada arus masuk 2007/08 dengan nilai EUR 3.00m, jadi tabel ini mengikuti tanggal registrasi skuad 2008/09." },
      { player: "Dimitar Berbatov", from: "Tottenham Hotspur", fee: "EUR 38.00m", date: "1 September 2008", note: "Transfermarkt mencatat EUR 38.00m; laporan Inggris saat itu menyebut GBP 30.75m." },
      { player: "Zoran Tosic", from: "Partizan", fee: "EUR 7.00m", date: "2 Januari 2009", note: "Transfermarkt mencatat EUR 7.00m; datang pada bursa Januari tetapi baru tampil tiga kali musim ini." },
      { player: "Ritchie De Laet", from: "Stoke City", fee: "EUR 250k", date: "8 Januari 2009", note: "Transfermarkt mencatat EUR 250k; bek muda Belgia yang mendapat satu penampilan liga." },
      { player: "Federico Macheda", from: "Manchester United U18", fee: "-", date: "2008/09", note: "Naik dari akademi dan mencetak gol liga krusial melawan Aston Villa serta Sunderland." },
      { player: "Danny Welbeck", from: "Manchester United U18", fee: "-", date: "2008/09", note: "Naik ke skuad utama dan mencetak tiga gol semua kompetisi." },
      { player: "Darron Gibson", from: "Manchester United Reserves", fee: "-", date: "2008/09", note: "Masuk rotasi tim utama setelah sebelumnya menjalani pinjaman." },
      { player: "Danny Simpson", from: "Blackburn Rovers", fee: "End of loan", date: "2008/09", note: "Kembali secara administratif dari masa pinjaman Blackburn sebelum dipinjamkan kembali." },
      { player: "Manucho", from: "Hull City", fee: "End of loan", date: "2008/09", note: "Kembali dari pinjaman sebelum kembali keluar dengan status pinjaman pada Januari." },
      { player: "Tom Heaton", from: "Cardiff City", fee: "End of loan", date: "2008/09", note: "Kembali secara administratif dari pinjaman." },
      { player: "Tom Cleverley", from: "Leicester City", fee: "End of loan", date: "2008/09", note: "Kembali secara administratif dari pinjaman dan tercatat dalam daftar skuad muda." },
      { player: "Lee Martin", from: "Nottingham Forest", fee: "End of loan", date: "2008/09", note: "Kembali dari pinjaman pada paruh musim." }
    ],
    transfersOut: [
      { player: "Gerard Pique", to: "Barcelona", fee: "EUR 5.00m", date: "27 Mei 2008", note: "Transfermarkt memasukkan kepindahan ini dalam arus keluar 2008/09; terjadi setelah musim 2007/08 selesai dan sebelum skuad 2008/09 berjalan." },
      { player: "Chris Eagles", to: "Burnley", fee: "EUR 1.50m", date: "29 Juli 2008", note: "Transfermarkt mencatat EUR 1.50m; Wikipedia mencatat fee undisclosed." },
      { player: "Mikael Silvestre", to: "Arsenal", fee: "EUR 950k", date: "20 Agustus 2008", note: "Transfermarkt mencatat EUR 950k; perpindahan langsung ke Arsenal cukup jarang pada era rivalitas Ferguson-Wenger." },
      { player: "Louis Saha", to: "Everton", fee: "Free transfer", date: "28 Agustus 2008", note: "Transfermarkt mencatat free transfer; Wikipedia mencatat undisclosed fee." },
      { player: "Dong Fangzhuo", to: "Dalian Shide", fee: "Free transfer", date: "28 Agustus 2008", note: "Dilepas pada akhir Agustus setelah tidak menembus skuad utama." },
      { player: "Fraizer Campbell", to: "Tottenham Hotspur", fee: "Loan transfer", date: "1 September 2008", note: "Dipinjamkan sebagai bagian dari konteks transfer Berbatov ke United." },
      { player: "Danny Simpson", to: "Blackburn Rovers", fee: "Loan transfer", date: "4 Agustus 2008", note: "Dipinjamkan semusim ke Blackburn." },
      { player: "Craig Cathcart", to: "Plymouth Argyle", fee: "Loan transfer", date: "8 Agustus 2008", note: "Dipinjamkan untuk menit bermain di Championship." },
      { player: "Lee Martin", to: "Nottingham Forest", fee: "Loan transfer", date: "13 Agustus 2008", note: "Dipinjamkan pada paruh awal musim sebelum kembali ke United." },
      { player: "Tom Heaton", to: "Cardiff City", fee: "Loan transfer", date: "1 Juli 2008", note: "Dipinjamkan semusim ke Cardiff City." },
      { player: "Tom Cleverley", to: "Leicester City", fee: "Loan transfer", date: "2008/09", note: "Dipinjamkan ke Leicester untuk pengalaman senior." },
      { player: "David Gray", to: "Plymouth Argyle", fee: "Loan transfer", date: "2008/09", note: "Dipinjamkan menurut catatan Transfermarkt dan FootballSquads." },
      { player: "Manucho", to: "Hull City", fee: "Loan transfer", date: "16 Januari 2009", note: "Dipinjamkan pada bursa Januari setelah hanya tampil tiga kali untuk United." },
      { player: "Michael Barnes", to: "Northwich Victoria", fee: "Free transfer", date: "2008/09", note: "Keluar permanen dari kelompok pemain muda." },
      { player: "Ritchie Jones", to: "Hartlepool United", fee: "Free transfer", date: "2008/09", note: "Keluar permanen setelah beberapa masa pinjaman." },
      { player: "Michael Lea", to: "Scunthorpe United", fee: "Free transfer", date: "2008/09", note: "Keluar permanen dari kelompok pemain muda." }
    ],
    commonStartingXI: {
      formation: "4-4-2 / 4-3-3",
      players: {
        GK: "Edwin van der Sar",
        RB: "John O'Shea",
        CB1: "Rio Ferdinand",
        CB2: "Nemanja Vidic",
        LB: "Patrice Evra",
        RM: "Cristiano Ronaldo",
        CM1: "Michael Carrick",
        CM2: "Darren Fletcher",
        LM: "Park Ji-sung",
        ST1: "Wayne Rooney",
        ST2: "Dimitar Berbatov"
      }
    },
    keyPlayers: [
      { name: "Cristiano Ronaldo", position: "Winger/forward", contribution: "53 main, 26 gol semua kompetisi, 18 gol Premier League", story: "Ronaldo tidak mengulang angka 42 gol musim sebelumnya, tetapi tetap menjadi pemain paling menentukan United, termasuk gol besar melawan Porto dan Arsenal di Champions League." },
      { name: "Wayne Rooney", position: "Forward/second striker", contribution: "49 main, 20 gol semua kompetisi, 7 assist Premier League", story: "Rooney terus menjadi perekat sistem. Ia bisa bermain sebagai striker, second striker, atau melebar demi memberi ruang bagi Ronaldo dan keseimbangan untuk tim." },
      { name: "Dimitar Berbatov", position: "Striker/second striker", contribution: "43 main, 14 gol semua kompetisi, top assist liga United menurut StatBunker", story: "Berbatov membawa sentuhan pertama, visi, dan tempo yang berbeda. Ia tidak selalu cocok dengan intensitas trio 2007/08, tetapi memberi kreativitas besar terutama di liga." },
      { name: "Nemanja Vidic", position: "Bek tengah", contribution: "55 main, 7 gol semua kompetisi", story: "Vidic menjalani salah satu musim terbaik bek United modern: dominan duel udara, produktif dari bola mati, dan menjadi pilar clean sheet record." },
      { name: "Edwin van der Sar", position: "Kiper", contribution: "49 main, bagian utama dari rekor clean sheet Premier League", story: "Van der Sar memberi ketenangan luar biasa di belakang dan menjadi simbol pertahanan yang hanya kebobolan 24 gol liga." },
      { name: "Michael Carrick", position: "Gelandang tengah", contribution: "43 main, 4 gol semua kompetisi, 7 assist Premier League", story: "Carrick menjaga tempo dan posisi. Dalam musim ketika Scholes mulai lebih sering dirotasi, Carrick menjadi gelandang kontrol paling stabil." },
      { name: "Darren Fletcher", position: "Gelandang tengah/kanan", contribution: "42 main, 4 gol semua kompetisi", story: "Fletcher memberi energi, pressing, dan keseimbangan. Absennya di final Champions League karena skorsing sangat terasa melawan lini tengah Barcelona." },
      { name: "Ryan Giggs", position: "Gelandang kiri/tengah", contribution: "47 main, 4 gol semua kompetisi, PFA Player of the Year", story: "Giggs sudah tidak lagi menjadi winger murni, tetapi kecerdasan dan kontrolnya di tengah membuatnya tetap sangat penting dalam rotasi Ferguson." },
      { name: "Carlos Tevez", position: "Forward/second striker", contribution: "51 main, 15 gol semua kompetisi", story: "Tevez memberi pressing dan energi, terutama di cup, tetapi status kontraknya menjadi cerita besar sebelum akhirnya pergi ke Manchester City setelah musim selesai." },
      { name: "Federico Macheda", position: "Striker", contribution: "5 main, 2 gol semua kompetisi", story: "Macheda muncul sebagai pahlawan kejutan lewat gol debut dramatis melawan Aston Villa, lalu mencetak gol penting lagi melawan Sunderland." }
    ],
    statistics: {
      leaguePosition: "1st Premier League",
      matches: 66,
      wins: 45,
      draws: 15,
      losses: 7,
      goalsFor: 119,
      goalsAgainst: 46,
      topScorer: "Cristiano Ronaldo (26 gol semua kompetisi / 18 gol Premier League)",
      topAssist: "Dimitar Berbatov (10 assist Premier League menurut StatBunker; StatsCrew/StatMuse mencatat 9)",
      mostAppearances: "Nemanja Vidic (55 main), John O'Shea (54 main), Cristiano Ronaldo (53 main)"
    },
    importantMoments: [
      { month: "10 Agustus 2008", title: "Community Shield dimenangkan atas Portsmouth", description: "United bermain 0-0 melawan Portsmouth di Wembley lalu menang adu penalti 3-1.", impact: "Membuka musim dengan trofi dan menjaga momentum setelah European Double 2007/08." },
      { month: "1 September 2008", title: "Berbatov datang pada deadline day", description: "Dimitar Berbatov bergabung dari Tottenham Hotspur setelah saga transfer panjang.", impact: "Memberi United striker teknis baru dan mengubah dinamika menit bermain Tevez." },
      { month: "21 Desember 2008", title: "FIFA Club World Cup dimenangkan di Jepang", description: "United mengalahkan LDU Quito 1-0 lewat gol Wayne Rooney meski Vidic dikartu merah.", impact: "Menjadikan United juara dunia antarklub dan menambah trofi internasional era Ferguson." },
      { month: "27 Januari 2009", title: "Clean sheet streak masuk buku rekor", description: "Rentetan tanpa kebobolan United terus memanjang pada musim dingin, dengan Van der Sar sebagai wajah utama rekor tersebut.", impact: "Menunjukkan betapa kuatnya struktur pertahanan United dalam perburuan gelar liga." },
      { month: "1 Maret 2009", title: "League Cup dimenangkan melawan Tottenham", description: "Final berakhir 0-0 setelah extra time, lalu United menang adu penalti 4-1. Ben Foster menjadi man of the match.", impact: "Memberi trofi domestik kedua musim ini dan menunjukkan kedalaman skuad Ferguson." },
      { month: "14 Maret 2009", title: "Liverpool menang 4-1 di Old Trafford", description: "United kalah besar dari rival utama dalam laga liga yang membuka kembali title race.", impact: "Menjadi pukulan besar, tetapi United tetap pulih dan menjaga jarak sampai akhir musim." },
      { month: "5 April 2009", title: "Macheda menyelamatkan United vs Aston Villa", description: "Federico Macheda mencetak gol debut dramatis saat United menang 3-2 setelah tertinggal.", impact: "Salah satu momen paling penting dalam perebutan gelar Premier League 2008/09." },
      { month: "15 April 2009", title: "Ronaldo roketkan United di Porto", description: "Gol jarak jauh Cristiano Ronaldo memberi United kemenangan 1-0 di Estadio do Dragao dan tiket semifinal Champions League.", impact: "Membawa United melewati situasi sulit setelah imbang 2-2 di Old Trafford." },
      { month: "16 Mei 2009", title: "Gelar Premier League dipastikan melawan Arsenal", description: "United bermain 0-0 dengan Arsenal di Old Trafford dan mengunci gelar liga ketiga berturut-turut.", impact: "Menyamai pencapaian three-peat liga United era 1998/99 sampai 2000/01." },
      { month: "27 Mei 2009", title: "Final Roma kalah dari Barcelona", description: "United kalah 0-2 dari Barcelona di final Champions League lewat gol Samuel Eto'o dan Lionel Messi.", impact: "Mengakhiri ambisi mempertahankan Champions League dan menjadi laga besar terakhir Ronaldo sebelum pindah ke Real Madrid." }
    ],
    additionalInfo: [
      "Rekor liga United: 38 pertandingan, 28 menang, 6 seri, 4 kalah, gol 68:24, 90 poin, juara Premier League.",
      "Rekor semua kompetisi di tabel ini menghitung 66 pertandingan resmi termasuk Community Shield, UEFA Super Cup, dan FIFA Club World Cup: 45 menang, 15 seri, 7 kalah, gol 119:46. Adu penalti dicatat sebagai hasil seri pada waktu pertandingan.",
      "Statistik penampilan dan gol skuad mengikuti tabel musim 2008/09: Ronaldo 48+5 dan 26 gol, Vidic 52+3 dan 7 gol, O'Shea 42+12 dan 2 gol, Rooney 39+10 dan 20 gol, Tevez 34+17 dan 15 gol, Berbatov 36+7 dan 14 gol, serta Van der Sar 49.",
      "Assist pada tabel skuad memakai daftar Premier League Manchester United 2008/09 dari StatBunker agar konsisten dengan musim 2007/08: Berbatov 10, Giggs 8, Carrick 7, Rooney 7, Ronaldo 6, Nani 4, O'Shea 3, Tevez 3, Park 2, Evra 2, Scholes 2, Macheda 1, Manucho 1, dan Vidic 1.",
      "StatsCrew dan StatMuse mencatat Berbatov sebagai top assist liga United dengan 9 assist, sementara Transfermarkt pada profil 2008/09 mencatat assist semua kompetisi: Berbatov 11, Rooney 8, Carrick 8, Ronaldo 7, dan Giggs 6. Perbedaan ini berasal dari metode pencatatan assist.",
      "Nomor skuad 2008/09 mengikuti FootballSquads: Van der Sar 1, Neville 2, Evra 3, Hargreaves 4, Ferdinand 5, Brown 6, Ronaldo 7, Anderson 8, Berbatov 9, Rooney 10, Giggs 11, Foster 12, Park 13, Tosic 14, Vidic 15, Carrick 16, Nani 17, Scholes 18, Welbeck 19, Fabio 20, Rafael 21, O'Shea 22, Jonny Evans 23, Fletcher 24, Manucho 26, Darron Gibson 28, Kuszczak 29, Lee Martin 30, Campbell 31, Tevez 32, Hewson 33, Possebon 34, Cleverley 35, David Gray 36, Cathcart 37, Zieler 38, Chester 39, Amos 40, Macheda 41, Richard Eckersley 42, Petrucci 43, De Laet 44, Corry Evans 45, Drinkwater 46, dan Matty James 47.",
      "Transfermarkt mencatat pengeluaran United 2008/09 sebesar EUR 45.25m: Berbatov EUR 38.00m, Tosic EUR 7.00m, dan De Laet EUR 250k.",
      "Transfermarkt mencatat pemasukan utama United 2008/09: Gerard Pique EUR 5.00m, Chris Eagles EUR 1.50m, dan Mikael Silvestre EUR 950k; Louis Saha dan Dong Fangzhuo dicatat sebagai free transfer.",
      "Wikipedia mencatat Rafael dan Fabio resmi masuk dari Fluminense pada 1 Juli 2008 dengan fee undisclosed, sedangkan Transfermarkt mencatat Rafael dalam arus masuk 2007/08. Karena musim 2007/08 di file ini sudah mencatat Rafael, catatan 2008/09 menekankan registrasi skuad utama.",
      "Perjalanan Champions League: United menjadi juara grup, melewati Inter Milan 2-0 agregat, Porto 3-2 agregat, Arsenal 4-1 agregat, lalu kalah 0-2 dari Barcelona di final Roma.",
      "Final Champions League 2009 starting XI: Van der Sar; O'Shea, Ferdinand, Vidic, Evra; Carrick, Anderson, Giggs; Park, Rooney, Ronaldo. Fletcher absen karena skorsing setelah kartu merah kontroversial di semifinal melawan Arsenal.",
      "League Cup dimenangkan atas Tottenham Hotspur lewat adu penalti 4-1 setelah 0-0; Ben Foster menjadi man of the match.",
      "FIFA Club World Cup dimenangkan di Jepang: United mengalahkan Gamba Osaka 5-3 di semifinal dan LDU Quito 1-0 di final.",
      "Cristiano Ronaldo pindah ke Real Madrid setelah musim ini, menjadikan 2008/09 sebagai penutup periode pertamanya di Manchester United."
    ],
    featured: false
  },
  {
    id: "2009-10",
    label: "2009/10",
    title: "Manchester United Musim 2009/10",
    era: "Era Ronaldo & Rooney",
    managers: ["Sir Alex Ferguson"],
    competitions: ["Premier League", "FA Cup", "League Cup", "UEFA Champions League", "FA Community Shield"],
    leaguePosition: "2nd Premier League",
    trophies: ["League Cup"],
    summary:
      "Musim pertama setelah Cristiano Ronaldo dan Carlos Tevez pergi. United tidak runtuh: Wayne Rooney menjadi pusat serangan, Antonio Valencia langsung penting, League Cup dipertahankan, tetapi gelar liga lepas ke Chelsea dengan selisih satu poin.",
    story: [
      "United masuk 2009/10 sebagai juara Premier League tiga musim beruntun dan runner-up Champions League, tetapi musim panas 2009 mengubah bentuk tim secara drastis. Ronaldo dijual ke Real Madrid dengan biaya rekor dunia, sementara Tevez tidak dipermanenkan dan akhirnya bergabung dengan Manchester City.",
      "Ferguson tidak mengganti Ronaldo dengan superstar sejenis. Ia membeli Antonio Valencia, Michael Owen, Gabriel Obertan, dan Mame Biram Diouf, lalu menggeser fokus serangan ke Wayne Rooney. United menjadi lebih langsung: crossing dari Valencia, Nani, Giggs, dan Evra diarahkan ke Rooney sebagai finisher utama.",
      "Rooney menjawab perubahan itu dengan musim terbaiknya sampai saat itu: 34 gol semua kompetisi dan 26 gol Premier League. Banyak gol datang dari sundulan dan pergerakan di kotak penalti, tanda bahwa perannya berubah dari second striker pekerja keras menjadi nomor 9 utama.",
      "Walau kehilangan Ronaldo, United tetap sangat kompetitif. Di liga mereka mencetak 86 gol, finis dengan 85 poin, dan hanya kalah satu poin dari Chelsea. Kekalahan kandang 1-2 dari Chelsea pada April 2010 dan cedera Rooney melawan Bayern menjadi titik balik terbesar.",
      "Musim ini juga memperlihatkan batas skuad. Rio Ferdinand, Nemanja Vidic, Edwin van der Sar, John O'Shea, dan beberapa bek lain tidak selalu tersedia, sehingga Ferguson beberapa kali harus memainkan struktur darurat. United tetap memenangkan League Cup, tetapi tersingkir dari FA Cup oleh Leeds dan dari Champions League oleh Bayern melalui aturan gol tandang."
    ],
    squad: [
      { name: "Edwin van der Sar", shirtNumber: 1, position: "Kiper", age: 38, country: "Netherlands", appearances: 29, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Gary Neville", shirtNumber: 2, position: "Bek kanan, kapten", age: 34, country: "England", appearances: 28, goals: 0, assists: 1, status: "Pemain utama" },
      { name: "Patrice Evra", shirtNumber: 3, position: "Bek kiri", age: 28, country: "France", appearances: 51, goals: 0, assists: 2, status: "Pemain utama" },
      { name: "Owen Hargreaves", shirtNumber: 4, position: "Gelandang bertahan/bek kanan", age: 28, country: "England", appearances: 1, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Rio Ferdinand", shirtNumber: 5, position: "Bek tengah", age: 30, country: "England", appearances: 21, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Wes Brown", shirtNumber: 6, position: "Bek kanan/bek tengah", age: 29, country: "England", appearances: 29, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Michael Owen", shirtNumber: 7, position: "Striker", age: 29, country: "England", appearances: 31, goals: 9, assists: 0, status: "Cadangan" },
      { name: "Anderson", shirtNumber: 8, position: "Gelandang tengah", age: 21, country: "Brazil", appearances: 23, goals: 1, assists: 2, status: "Cadangan" },
      { name: "Dimitar Berbatov", shirtNumber: 9, position: "Striker/second striker", age: 28, country: "Bulgaria", appearances: 43, goals: 12, assists: 6, status: "Pemain utama" },
      { name: "Wayne Rooney", shirtNumber: 10, position: "Striker/forward", age: 23, country: "England", appearances: 44, goals: 34, assists: 3, status: "Pemain utama" },
      { name: "Ryan Giggs", shirtNumber: 11, position: "Gelandang kiri/tengah", age: 35, country: "Wales", appearances: 32, goals: 7, assists: 9, status: "Pemain utama" },
      { name: "Ben Foster", shirtNumber: 12, position: "Kiper", age: 26, country: "England", appearances: 13, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Park Ji-sung", shirtNumber: 13, position: "Gelandang/winger", age: 28, country: "South Korea", appearances: 26, goals: 4, assists: 1, status: "Pemain utama" },
      { name: "Zoran Tosic", shirtNumber: 14, position: "Winger", age: 22, country: "Serbia", appearances: 2, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Nemanja Vidic", shirtNumber: 15, position: "Bek tengah", age: 27, country: "Serbia", appearances: 33, goals: 1, assists: 0, status: "Pemain utama" },
      { name: "Michael Carrick", shirtNumber: 16, position: "Gelandang tengah", age: 28, country: "England", appearances: 44, goals: 5, assists: 1, status: "Pemain utama" },
      { name: "Nani", shirtNumber: 17, position: "Winger kiri/kanan", age: 22, country: "Portugal", appearances: 34, goals: 6, assists: 8, status: "Pemain utama" },
      { name: "Paul Scholes", shirtNumber: 18, position: "Gelandang tengah", age: 34, country: "England", appearances: 38, goals: 7, assists: 3, status: "Pemain utama" },
      { name: "Danny Welbeck", shirtNumber: 19, position: "Forward/winger", age: 18, country: "England", appearances: 11, goals: 2, assists: 0, status: "Pemain muda" },
      { name: "Fabio", shirtNumber: 20, position: "Bek kiri/kanan", age: 19, country: "Brazil", appearances: 11, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Rafael", shirtNumber: 21, position: "Bek kanan", age: 19, country: "Brazil", appearances: 16, goals: 1, assists: 1, status: "Pemain muda" },
      { name: "John O'Shea", shirtNumber: 22, position: "Bek/gelandang", age: 28, country: "Republic of Ireland", appearances: 19, goals: 1, assists: 1, status: "Pemain utama" },
      { name: "Jonny Evans", shirtNumber: 23, position: "Bek tengah", age: 21, country: "Northern Ireland", appearances: 28, goals: 0, assists: 0, status: "Pemain utama" },
      { name: "Darren Fletcher", shirtNumber: 24, position: "Gelandang tengah", age: 25, country: "Scotland", appearances: 41, goals: 5, assists: 7, status: "Pemain utama" },
      { name: "Antonio Valencia", shirtNumber: 25, position: "Winger kanan", age: 24, country: "Ecuador", appearances: 49, goals: 7, assists: 8, status: "Pemain utama" },
      { name: "Gabriel Obertan", shirtNumber: 26, position: "Winger", age: 20, country: "France", appearances: 13, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Federico Macheda", shirtNumber: 27, position: "Striker", age: 17, country: "Italy", appearances: 10, goals: 1, assists: 1, status: "Pemain muda" },
      { name: "Darron Gibson", shirtNumber: 28, position: "Gelandang tengah", age: 21, country: "Republic of Ireland", appearances: 23, goals: 5, assists: 2, status: "Cadangan" },
      { name: "Tomasz Kuszczak", shirtNumber: 29, position: "Kiper", age: 27, country: "Poland", appearances: 14, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Ritchie De Laet", shirtNumber: 30, position: "Bek kanan/bek tengah", age: 20, country: "Belgium", appearances: 5, goals: 0, assists: 0, status: "Cadangan" },
      { name: "Corry Evans", shirtNumber: 31, position: "Gelandang/bek", age: 19, country: "Northern Ireland", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Mame Biram Diouf", shirtNumber: 32, position: "Striker", age: 21, country: "Senegal", appearances: 6, goals: 1, assists: 0, status: "Pemain muda" },
      { name: "Sam Hewson", shirtNumber: 33, position: "Gelandang", age: 20, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Tom Cleverley", shirtNumber: 35, position: "Gelandang tengah", age: 20, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "David Gray", shirtNumber: 36, position: "Bek kanan", age: 21, country: "Scotland", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Craig Cathcart", shirtNumber: 37, position: "Bek tengah", age: 20, country: "Northern Ireland", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Ron-Robert Zieler", shirtNumber: 38, position: "Kiper", age: 20, country: "Germany", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "James Chester", shirtNumber: 39, position: "Bek tengah", age: 20, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Ben Amos", shirtNumber: 40, position: "Kiper", age: 19, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Joshua King", shirtNumber: 41, position: "Striker", age: 17, country: "Norway", appearances: 1, goals: 0, assists: 0, status: "Pemain muda" },
      { name: "Magnus Eikrem", shirtNumber: 42, position: "Gelandang/second striker", age: 19, country: "Norway", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Matty James", shirtNumber: 43, position: "Gelandang tengah", age: 18, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Joe Dudgeon", shirtNumber: 44, position: "Bek kiri", age: 18, country: "Northern Ireland", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Oliver Gill", shirtNumber: 45, position: "Bek tengah", age: 18, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Cameron Stewart", shirtNumber: 46, position: "Winger", age: 18, country: "England", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" },
      { name: "Oliver Norwood", shirtNumber: 47, position: "Gelandang tengah", age: 18, country: "Northern Ireland", appearances: 0, goals: 0, assists: NOT_AVAILABLE, status: "Pemain muda" }
    ],
    transfersIn: [
      { player: "Antonio Valencia", from: "Wigan Athletic", fee: "EUR 18.80m", date: "1 Juli 2009", note: "Transfermarkt mencatat EUR 18.80m; laporan Inggris saat itu sering menyebut sekitar GBP 16m." },
      { player: "Michael Owen", from: "Newcastle United", fee: "Free transfer", date: "3 Juli 2009", note: "Datang gratis setelah kontraknya di Newcastle berakhir; mencetak 9 gol semua kompetisi." },
      { player: "Gabriel Obertan", from: "Bordeaux", fee: "EUR 4.00m", date: "8 Juli 2009", note: "Winger muda Prancis; sumber Inggris menyebut fee undisclosed, Transfermarkt mencatat EUR 4.00m." },
      { player: "Mame Biram Diouf", from: "Molde", fee: "EUR 4.50m", date: "30 Juli 2009", note: "Dibeli dari Molde lalu sempat dipinjamkan kembali sebelum masuk skuad United pada Januari 2010." },
      { player: "Joshua King", from: "Manchester United U18", fee: "-", date: "2009/10", note: "Naik ke skuad utama dan melakukan debut profesional di League Cup melawan Wolves." },
      { player: "Oliver Gill", from: "Manchester United U18", fee: "-", date: "2009/10", note: "Bek muda yang tercatat dalam skuad musim 2009/10." },
      { player: "Matty James", from: "Manchester United U18", fee: "-", date: "2009/10", note: "Gelandang muda yang tercatat dalam skuad, lalu menjalani pinjaman setelahnya." },
      { player: "Magnus Eikrem", from: "Manchester United U18", fee: "-", date: "2009/10", note: "Gelandang muda Norwegia yang masuk daftar skuad." },
      { player: "Tom Heaton", from: "Cardiff City", fee: "End of loan", date: "2009/10", note: "Kembali secara administratif dari pinjaman sebelum menjalani beberapa pinjaman lain musim ini." },
      { player: "Danny Simpson", from: "Blackburn Rovers", fee: "End of loan", date: "2009/10", note: "Kembali dari pinjaman Blackburn sebelum dipinjamkan ke Newcastle." }
    ],
    transfersOut: [
      { player: "Cristiano Ronaldo", to: "Real Madrid", fee: "EUR 94.00m", date: "1 Juli 2009", note: "Transfer rekor dunia saat itu; sumber Inggris menyebut GBP 80m." },
      { player: "Carlos Tevez", to: "End of loan / Manchester City", fee: "End of loan", date: "30 Juni 2009", note: "United tidak mempermanenkan Tevez; ia kemudian bergabung dengan Manchester City dan memanaskan rivalitas derby." },
      { player: "Fraizer Campbell", to: "Sunderland", fee: "EUR 4.10m", date: "11 Juli 2009", note: "Transfer permanen setelah sebelumnya dipinjamkan ke Tottenham pada 2008/09." },
      { player: "Manucho", to: "Real Valladolid", fee: "EUR 2.75m", date: "17 Juli 2009", note: "Dijual permanen setelah gagal menembus skuad utama United." },
      { player: "Lee Martin", to: "Ipswich Town", fee: "EUR 2.25m", date: "6 Juli 2009", note: "Transfermarkt mencatat EUR 2.25m; laporan Inggris menyebut sekitar GBP 1.5m." },
      { player: "Danny Simpson", to: "Newcastle United", fee: "Loan transfer", date: "14 Agustus 2009", note: "Dipinjamkan ke Newcastle sebelum kemudian menjadi permanen." },
      { player: "Richard Eckersley", to: "Burnley", fee: "Kompensasi tribunal", date: "15 Juli 2009", note: "Menolak kontrak baru United dan bergabung dengan Burnley; nilai kompensasi ditentukan tribunal." },
      { player: "Zoran Tosic", to: "Koln", fee: "Loan fee EUR 500k", date: "27 Januari 2010", note: "Dipinjamkan ke Bundesliga pada paruh kedua musim." },
      { player: "Tom Cleverley", to: "Watford", fee: "Loan transfer", date: "18 Agustus 2009", note: "Dipinjamkan untuk menit bermain di Championship." },
      { player: "Rodrigo Possebon", to: "Braga", fee: "Loan transfer", date: "2009/10", note: "Dipinjamkan ke Portugal." },
      { player: "Mame Biram Diouf", to: "Molde", fee: "Loan transfer", date: "2009/10", note: "Dipinjamkan kembali ke Molde setelah transfer disepakati." },
      { player: "Danny Welbeck", to: "Preston North End", fee: "Loan transfer", date: "Januari 2010", note: "Dipinjamkan pada paruh kedua musim." },
      { player: "Sam Hewson", to: "Bury", fee: "Loan transfer", date: "2009/10", note: "Dipinjamkan dari kelompok pemain muda." },
      { player: "Ben Amos", to: "Molde", fee: "Loan transfer", date: "2009/10", note: "Dipinjamkan untuk pengalaman senior." },
      { player: "David Gray", to: "Plymouth Argyle", fee: "Loan transfer", date: "2009/10", note: "Dipinjamkan dari kelompok pemain muda." },
      { player: "Tom Heaton", to: "Rochdale / QPR / Wycombe", fee: "Loan transfer", date: "2009/10", note: "Menjalani beberapa pinjaman sepanjang musim." },
      { player: "Scott Moffatt", to: "Altrincham", fee: "Loan transfer", date: "2009/10", note: "Pemain muda yang dipinjamkan menurut catatan Transfermarkt." }
    ],
    commonStartingXI: {
      formation: "4-2-3-1 / 4-4-1-1",
      players: {
        GK: "Edwin van der Sar",
        RB: "Gary Neville",
        CB1: "Rio Ferdinand",
        CB2: "Nemanja Vidic",
        LB: "Patrice Evra",
        RM: "Antonio Valencia",
        CM1: "Michael Carrick",
        CM2: "Darren Fletcher",
        LM: "Nani",
        ST1: "Wayne Rooney",
        ST2: "Dimitar Berbatov"
      }
    },
    keyPlayers: [
      { name: "Wayne Rooney", position: "Striker/forward", contribution: "44 main, 34 gol semua kompetisi, 26 gol Premier League", story: "Rooney mengambil alih panggung setelah Ronaldo pergi. Ia menjadi finisher utama, sering menjadi target crossing, dan nyaris membawa United menjuarai liga meski cedera pada fase paling penting." },
      { name: "Antonio Valencia", position: "Winger kanan", contribution: "49 main, 7 gol semua kompetisi, 8 assist Premier League menurut StatBunker", story: "Valencia bukan pengganti Ronaldo secara gaya, tetapi memberi struktur baru: lari lurus, crossing kuat, disiplin bertahan, dan suplai konstan untuk Rooney." },
      { name: "Ryan Giggs", position: "Gelandang kiri/tengah", contribution: "32 main, 7 gol semua kompetisi, 9 assist Premier League", story: "Giggs masih menjadi kreator penting pada usia 35-36 tahun. Bola mati, umpan terobosan, dan pengalamannya membantu United tetap produktif tanpa Ronaldo." },
      { name: "Darren Fletcher", position: "Gelandang tengah", contribution: "41 main, 5 gol semua kompetisi, 7 assist Premier League", story: "Fletcher menjadi gelandang paling stabil: intens, agresif, dan penting dalam transisi bertahan-menyerang. Musim ini memperkuat statusnya sebagai pemain besar dalam sistem Ferguson." },
      { name: "Patrice Evra", position: "Bek kiri", contribution: "51 main, pemain dengan penampilan terbanyak", story: "Evra menjadi jangkar konsistensi saat lini belakang sering cedera. Ia memberi lebar serangan sekaligus kestabilan di sisi kiri." },
      { name: "Nani", position: "Winger", contribution: "34 main, 6 gol semua kompetisi, 8 assist Premier League", story: "Nani menjalani musim naik-turun, tetapi performanya meningkat setelah awal 2010. Ia memberi ledakan kreativitas, termasuk laga besar di Arsenal dan Bayern." },
      { name: "Michael Owen", position: "Striker", contribution: "31 main, 9 gol semua kompetisi", story: "Owen datang gratis sebagai pelapis dan memberi beberapa momen besar: gol 90+6 melawan Manchester City, hat-trick di Wolfsburg, dan gol di final League Cup." },
      { name: "Dimitar Berbatov", position: "Striker/second striker", contribution: "43 main, 12 gol semua kompetisi, 6 assist Premier League", story: "Berbatov tetap produktif di liga, tetapi sering dibandingkan dengan intensitas Rooney. Dalam laga besar, Ferguson kadang memilih struktur lebih padat dengan Rooney sendirian di depan." }
    ],
    statistics: {
      leaguePosition: "2nd Premier League",
      matches: 55,
      wins: 38,
      draws: 6,
      losses: 11,
      goalsFor: 120,
      goalsAgainst: 47,
      topScorer: "Wayne Rooney (34 gol semua kompetisi / 26 gol Premier League)",
      topAssist: "Ryan Giggs (9 assist Premier League menurut StatBunker/StatMuse; Transfermarkt juga mencatat Antonio Valencia 9)",
      mostAppearances: "Patrice Evra (51 main), Antonio Valencia (49 main), Wayne Rooney dan Michael Carrick (44 main)"
    },
    importantMoments: [
      { month: "1 Juli 2009", title: "Ronaldo pindah ke Real Madrid", description: "Cristiano Ronaldo meninggalkan United dengan biaya rekor dunia saat itu.", impact: "Mengakhiri era serangan Ronaldo-Rooney-Tevez dan memaksa Ferguson membangun ulang pola serangan." },
      { month: "1 Juli 2009", title: "Antonio Valencia datang dari Wigan", description: "Valencia bergabung sebagai rekrutan utama musim panas.", impact: "Memberi United winger kanan klasik yang menjadi pemasok utama crossing untuk Rooney." },
      { month: "9 Agustus 2009", title: "Community Shield kalah adu penalti dari Chelsea", description: "United bermain 2-2 melawan Chelsea di Wembley, lalu kalah 1-4 dalam adu penalti.", impact: "Membuka musim dengan tanda bahwa duel United-Chelsea akan sangat ketat." },
      { month: "20 September 2009", title: "Derby 4-3 dan gol Michael Owen", description: "United mengalahkan Manchester City 4-3 di Old Trafford lewat gol Owen pada menit 90+6.", impact: "Menjadi momen emosional besar setelah Tevez pindah ke City." },
      { month: "3 Januari 2010", title: "FA Cup tersingkir oleh Leeds", description: "United kalah 0-1 dari Leeds United di Old Trafford pada ronde ketiga FA Cup.", impact: "Salah satu kekalahan cup paling mengejutkan era Ferguson." },
      { month: "31 Januari 2010", title: "Arsenal 1-3 United", description: "United menang besar di Emirates lewat serangan balik cepat, dengan Nani, Rooney, dan Park sangat menentukan.", impact: "Menunjukkan United masih bisa memainkan sepak bola transisi elite tanpa Ronaldo." },
      { month: "28 Februari 2010", title: "League Cup dipertahankan", description: "United mengalahkan Aston Villa 2-1 di final. Owen menyamakan skor dan Rooney mencetak gol kemenangan.", impact: "Menjadi trofi utama musim ini dan menunjukkan kedalaman skuad." },
      { month: "30 Maret 2010", title: "Rooney cedera melawan Bayern", description: "Rooney cedera pada akhir leg pertama perempat final Champions League di Munich.", impact: "Mengubah momentum title race dan duel Eropa karena United sangat bergantung pada Rooney." },
      { month: "7 April 2010", title: "Tersingkir oleh Bayern lewat gol tandang", description: "United menang 3-2 di Old Trafford tetapi agregat 4-4 membuat Bayern lolos karena gol tandang.", impact: "Eliminasi yang menyakitkan karena United sempat unggul 3-0 sebelum kartu merah Rafael dan gol Arjen Robben." },
      { month: "9 Mei 2010", title: "Menang 4-0 atas Stoke, tetap gagal juara", description: "United menutup liga dengan kemenangan besar, tetapi Chelsea mengalahkan Wigan 8-0 dan finis satu poin di atas United.", impact: "Mengunci musim sebagai nyaris juara: 85 poin, 86 gol liga, tetapi posisi kedua." }
    ],
    additionalInfo: [
      "Rekor liga United: 38 pertandingan, 27 menang, 4 seri, 7 kalah, gol 86:28, 85 poin, finis kedua di belakang Chelsea yang mengumpulkan 86 poin.",
      "Rekor semua kompetisi di tabel ini menghitung 55 pertandingan resmi termasuk Community Shield: 38 menang, 6 seri, 11 kalah, gol 120:47. Adu penalti Community Shield dicatat sebagai hasil seri pada waktu pertandingan.",
      "Statistik penampilan dan gol skuad mengikuti tabel musim 2009/10: Rooney 42+2 dan 34 gol, Evra 48+3, Valencia 37+12 dan 7 gol, Carrick 33+11 dan 5 gol, Berbatov 29+14 dan 12 gol, Fletcher 39+2 dan 5 gol, Scholes 32+6 dan 7 gol, Nani 30+4 dan 6 gol, serta Van der Sar 29.",
      "Assist pada tabel skuad memakai daftar Premier League Manchester United 2009/10 dari StatBunker agar konsisten dengan musim sebelumnya: Giggs 9, Nani 8, Valencia 8, Fletcher 7, Berbatov 6, Scholes 3, Rooney 3, Gibson 2, Anderson 2, Evra 2, Park 1, Carrick 1, Macheda 1, O'Shea 1, Neville 1, dan Rafael 1.",
      "Transfermarkt dan StatMuse memakai metode berbeda untuk sebagian assist: Transfermarkt mencatat Valencia 9 dan Giggs 9 sebagai top assist, sedangkan StatMuse menampilkan Giggs 9 dan Valencia 7. Perbedaan ini berasal dari definisi assist dan cakupan data.",
      "Nomor skuad 2009/10 mengikuti FootballSquads: Van der Sar 1, Neville 2, Evra 3, Hargreaves 4, Ferdinand 5, Brown 6, Owen 7, Anderson 8, Berbatov 9, Rooney 10, Giggs 11, Foster 12, Park 13, Tosic 14, Vidic 15, Carrick 16, Nani 17, Scholes 18, Welbeck 19, Fabio 20, Rafael 21, O'Shea 22, Evans 23, Fletcher 24, Valencia 25, Obertan 26, Macheda 27, Gibson 28, Kuszczak 29, De Laet 30, Corry Evans 31, Diouf 32, Hewson 33, Cleverley 35, Gray 36, Cathcart 37, Zieler 38, Chester 39, Amos 40, King 41, Eikrem 42, Matty James 43, Dudgeon 44, Gill 45, Stewart 46, dan Norwood 47.",
      "Transfermarkt mencatat pengeluaran United 2009/10 sebesar EUR 27.30m: Valencia EUR 18.80m, Diouf EUR 4.50m, Obertan EUR 4.00m, dan Owen free transfer.",
      "Transfermarkt mencatat pemasukan United 2009/10 sebesar EUR 104.47m, terutama Cristiano Ronaldo EUR 94.00m, Fraizer Campbell EUR 4.10m, Manucho EUR 2.75m, Lee Martin EUR 2.25m, Danny Simpson EUR 865k, dan loan fee Zoran Tosic EUR 500k.",
      "League Cup dimenangkan dengan perjalanan: Wolves 1-0, Barnsley 2-0, Tottenham 2-0, Manchester City 4-3 agregat, lalu Aston Villa 2-1 di final.",
      "FA Cup berakhir sangat cepat: United kalah 0-1 dari Leeds United di ronde ketiga di Old Trafford.",
      "Perjalanan Champions League: United juara grup, menyingkirkan AC Milan 7-2 agregat di babak 16 besar, lalu tersingkir dari Bayern Munich lewat gol tandang setelah agregat 4-4.",
      "Final League Cup 2010 starting XI: Kuszczak; Rafael, Vidic, Evans, Evra; Valencia, Fletcher, Carrick, Park; Owen, Berbatov. Rooney masuk sebagai pengganti dan mencetak gol kemenangan.",
      "Musim ini menjadi transisi penting dari tim Ronaldo menuju tim Rooney. United tetap kuat, tetapi cedera Rooney dan head-to-head melawan Chelsea membuat margin kecil berubah menjadi kehilangan gelar."
    ],
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
    seasonIds: [
      "1986-87",
      "1987-88",
      "1988-89",
      "1989-90",
      "1990-91",
      "1991-92"
    ]
  },
  {
    name: "Era Premier League awal",
    description: "Fase gelar liga modern pertama dan dominasi domestik awal.",
    seasonIds: ["1992-93", "1993-94", "1994-95", "1995-96"]
  },
  {
    name: "Era Treble",
    description: "Puncak era 1990-an dengan musim 1998/99 sebagai ikon utama.",
    seasonIds: ["1996-97", "1997-98", "1998-99", "1999-00", "2000-01"]
  },
  {
    name: "Era Ronaldo & Rooney",
    description: "Era transisi menuju skuad juara Eropa 2008 dan akhir periode pertama Ronaldo.",
    seasonIds: ["2001-02", "2002-03", "2003-04", "2004-05", "2005-06", "2006-07", "2007-08", "2008-09", "2009-10"]
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
