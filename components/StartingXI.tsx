import type { StartingXI as StartingXIType } from "@/data/seasons";
import { UserRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface StartingXIProps {
  data: StartingXIType;
}

const labels: Record<string, string> = {
  GK: "GK",
  RB: "RB",
  CB1: "CB",
  CB2: "CB",
  LB: "LB",
  RM: "RM",
  CM1: "CM",
  CM2: "CM",
  LM: "LM",
  ST1: "ST",
  ST2: "ST"
};

const playerPhotos: Record<string, string> = {
  "Chris Turner":
    "https://img.a.transfermarkt.technology/portrait/header/s_13490_3258_2010_3.jpg?lm=1",
  "Mick Duxbury":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ3GuNzta8nqnwnstCpX8KdN_rhzS7TRZAgQ&sc",
  "Paul McGrath":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUQ-LAD30jQnMvaeuT_COiHHAiF7saSaNsHg&s",
  "Kevin Moran":
    "https://img.a.transfermarkt.technology/portrait/header/s_102493_123_2014_01_03_2.jpg?lm=1",
  "Colin Gibson":
    "https://media.gettyimages.com/id/78951736/photo/circa-1987-colin-gibson-manchester-united-1985-1990.jpg?s=1024x1024&w=gi&k=20&c=0A2684J5BQyfzMRFImD4nNRwAyZY4gaqczbVSvtMnc0=",
  "Viv Anderson":
    "https://img.a.transfermarkt.technology/portrait/header/s_117188_123_2012_1.jpg?lm=1",
  "Jim Leighton":
    "https://img.a.transfermarkt.technology/portrait/header/91920-1458816912.jpg?lm=1",
  "Peter Schmeichel":
    "https://img.a.transfermarkt.technology/portrait/header/3465-1498486411.jpg?lm=1",
  "Les Sealey":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEjl659hn6XCm7XhD4iGJC80d2YT22BLqocw&s",
  "Clayton Blackmore":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Eo1y6ev8VqTAvncn1LDQNaLPEE4kZw5wFg&s",
  "Mal Donaghy":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoUJTH1PsuenEt4K0pAlxt1tq-WRNYKzqVNw&s",
  "Lee Martin":
    "https://img.a.transfermarkt.technology/portrait/big/s_15449_677_2009_1.jpg?lm=1",
  "Gary Pallister":
    "https://img.a.transfermarkt.technology/portrait/header/s_106917_123_2012_12_27_1.jpg?lm=1",
  "Steve Bruce":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7cpGQRxn6NFaGyOywM8bo6DyJeaIRaadBA&s",
  "Paul Parker":
    "https://img.a.transfermarkt.technology/portrait/header/101381-1652081459.jpg?lm=1",
  "Denis Irwin":
    "https://img.a.transfermarkt.technology/portrait/header/4280-1492089201.jpg?lm=1",
  "Gordon Strachan":
    "https://img.a.transfermarkt.technology/portrait/header/s_116156_123_2012_1.jpg?lm=1",
  "Bryan Robson":
    "https://img.a.transfermarkt.technology/portrait/header/s_101382_123_2012_1.jpg?lm=1",
  "Paul Ince":
    "https://img.a.transfermarkt.technology/portrait/header/s_3248_123_2012_1.jpg?lm=1",
  "Andrei Kanchelskis":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-A68pNNPEkuq5Xuuii95JI85sPFltwT9dQ&s",
  "Mike Phelan":
    "https://media.gettyimages.com/id/78958245/photo/circa-1990-mike-phelan-manchester-united-1989-1994.jpg?s=1024x1024&w=gi&k=20&c=9eXlrEHWVBs4KEWSUb8oc4RjF2dW8HofjSy8MoPQTOA=",
  "Neil Webb":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPncSRCk-FiztKVFpP9Ex9K_TAuHwNrTopTw&s",
  "Russell Beardsmore":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYq0R6N2rvE_fdyr-M-KSmQdmLiUcQKeblkA&s",
  "Lee Sharpe":
    "https://img.a.transfermarkt.technology/portrait/header/s_107229_123_2012_11_28_1.jpg?lm=1",
  "Ryan Giggs":
    "https://img.a.transfermarkt.technology/portrait/header/3406-1589198838.jpg?lm=1",
  "Danny Wallace":
    "https://i.ebayimg.com/00/s/MTUwMFgxMDAw/z/NvEAAOSwIYdecifR/$_57.JPG?set_id=8800005007",
  "Remi Moses":
    "https://img.a.transfermarkt.technology/portrait/header/s_176456_123_2014_01_03_1.jpg?lm=1",
  "Jesper Olsen":
    "https://img.a.transfermarkt.technology/portrait/header/s_116138_123_2012_12_27_1.jpg?lm=1",
  "Peter Davenport":
    "https://img.a.transfermarkt.technology/portrait/header/s_176497_123_2012_12_27_1.jpg?lm=1",
  "Mark Hughes":
    "https://img.a.transfermarkt.technology/portrait/header/s_8022_123_2012_1.jpg?lm=1",
  "Brian McClair":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5D3l9InzdTBGpSxwKf9r2x0iRm7QCHBpeg&s",
  "Ralph Milne":
    "https://img.a.transfermarkt.technology/portrait/header/s_176631_123_2012_1.jpg?lm=1",
  "Norman Whiteside":
    "https://img.a.transfermarkt.technology/portrait/header/s_117766_123_2012_1.jpg?lm=1",
  "Eric Cantona":
    "https://img.a.transfermarkt.technology/portrait/header/12000-1464096559.jpg?lm=1",
  "Roy Keane":
    "https://img.a.transfermarkt.technology/portrait/header/3396-1570441538.jpg?lm=1",
  "David May":
    "https://img.a.transfermarkt.technology/portrait/header/3538-1547546424.jpg?lm=1",
  "David Beckham":
    "https://img.a.transfermarkt.technology/portrait/header/3139-1746174990.jpg?lm=1",
  "Nicky Butt":
    "https://img.a.transfermarkt.technology/portrait/header/3543-1570703537.jpg?lm=1",
  "Andy Cole":
    "https://img.a.transfermarkt.technology/portrait/header/3238-1551429940.jpg?lm=1",
  "Gary Neville":
    "https://img.a.transfermarkt.technology/portrait/header/3403-1702409192.jpg?lm=1",
  "Ole Gunnar Solskjaer":
    "https://img.a.transfermarkt.technology/portrait/header/3394-1595504030.jpg?lm=1",
  "Paul Scholes":
    "https://img.a.transfermarkt.technology/portrait/header/3397-1595498527.jpg?lm=1",
  "Henning Berg":
    "https://img.a.transfermarkt.technology/portrait/header/3823-1589528429.jpg?lm=1",
  "Teddy Sheringham":
    "https://img.a.transfermarkt.technology/portrait/header/3392-1602491976.jpg?lm=1",
  "Dwight Yorke":
    "https://img.a.transfermarkt.technology/portrait/header/3223-1700221492.jpg?lm=1",
  "Jaap Stam":
    "https://img.a.transfermarkt.technology/portrait/header/s_3557_123_2012_12_27_1.jpg?lm=1",
  "Ronny Johnsen":
    "https://img.a.transfermarkt.technology/portrait/header/s_3578_123_2013_10_30_1.jpg?lm=1",
  "Mark Bosnich":
    "https://img.a.transfermarkt.technology/portrait/header/s_3249_123_2012_12_27_1.jpg?lm=1",
  "Mikael Silvestre":
    "https://img.a.transfermarkt.technology/portrait/header/3393-1542019112.jpg?lm=1",
  "Fabien Barthez":
    "https://img.a.transfermarkt.technology/portrait/header/3289-1414053325.jpg?lm=1",
  "Ruud van Nistelrooy":
    "https://img.a.transfermarkt.technology/portrait/header/3407-1730121299.jpg?lm=1",
  "Juan Sebastian Veron":
    "https://img.a.transfermarkt.technology/portrait/header/3143-1482941253.jpg?lm=1",
  "Laurent Blanc":
    "https://img.a.transfermarkt.technology/portrait/header/3113-1590410476.jpg?lm=1",
  "John O'Shea":
    "https://img.a.transfermarkt.technology/portrait/header/3540-1498839759.jpg?lm=1",
  "Rio Ferdinand":
    "https://img.a.transfermarkt.technology/portrait/header/3235-1592469934.jpg?lm=1",
  "Louis Saha":
    "https://img.a.transfermarkt.technology/portrait/header/s_4015_398_2013_02_14_1.jpg?lm=1",
  "Cristiano Ronaldo":
    "https://img.a.transfermarkt.technology/portrait/header/8198-1748102259.jpg?lm=1",
  "Tim Howard":
    "https://img.a.transfermarkt.technology/portrait/header/4267-1587066706.jpg?lm=1",
  "Gabriel Heinze":
    "https://img.a.transfermarkt.technology/portrait/header/5555-1719457315.jpg?lm=1",
  "Roy Carroll":
    "https://img.a.transfermarkt.technology/portrait/header/3534-1464948583.jpg?lm=1",
  "Wayne Rooney":
    "https://img.a.transfermarkt.technology/portrait/header/3332-1406462596.jpg?lm=1",
  "Darren Fletcher":
    "https://img.a.transfermarkt.technology/portrait/header/3547-1470302082.jpg?lm=1",
  "Edwin van der Sar":
    "https://img.a.transfermarkt.technology/portrait/header/3516-1719539293.jpg?lm=1",
  "Wes Brown":
    "https://img.a.transfermarkt.technology/portrait/header/s_3405_985_2009_1.jpg?lm=1",
  "Nemanja Vidic":
    "https://img.a.transfermarkt.technology/portrait/header/19726-1719879562.jpg?lm=1",
  "Carlos Tevez":
    "https://img.a.transfermarkt.technology/portrait/header/4276-1719495009.jpg?lm=1",
  "Michael Carrick":
    "https://img.a.transfermarkt.technology/portrait/header/3878-1666625002.jpg?lm=1",
  "Patrice Evra":
    "https://img.a.transfermarkt.technology/portrait/header/5285-1416219199.jpg?lm=1",
  "Park Ji-sung":
    "https://img.a.transfermarkt.technology/portrait/header/s_4592_985_2009_1.jpg?lm=1",
  "Dimitar Berbatov":
    "https://img.a.transfermarkt.technology/portrait/header/65-1683670068.jpg?lm=1",
  "Antonio Valencia":
    "https://img.a.transfermarkt.technology/portrait/header/33544-1484662583.jpg?lm=1",
  "Nani":
    "https://img.a.transfermarkt.technology/portrait/header/33706-1779104952.png?lm=1",
  "Rafael":
    "https://img.a.transfermarkt.technology/portrait/header/61892-1563889964.jpg?lm=1",
  "Javier Hernandez":
    "https://img.a.transfermarkt.technology/portrait/header/50935-1678022181.jpg?lm=1",
  "Jonny Evans":
    "https://img.a.transfermarkt.technology/portrait/header/42412-1699471667.jpg?lm=1",
  "Phil Jones":
    "https://img.a.transfermarkt.technology/portrait/header/117996-1469631370.jpg?lm=1",
  "Danny Welbeck":
    "https://img.a.transfermarkt.technology/portrait/header/67063-1746437656.jpg?lm=1",
  "Robin van Persie":
    "https://img.a.transfermarkt.technology/portrait/header/4380-1707301752.jpg?lm=1",
  "David de Gea":
    "https://img.a.transfermarkt.technology/portrait/header/59377-1667548362.jpg?lm=1",
  "Shinji Kagawa":
    "https://img.a.transfermarkt.technology/portrait/header/81785-1772817092.jpg?lm=1",
  "Tom Cleverley":
    "https://img.a.transfermarkt.technology/portrait/header/73484-1410950625.jpg?lm=1",
  "Adnan Januzaj":
    "https://img.a.transfermarkt.technology/portrait/header/177847-1685115304.png?lm=1",
  "Daley Blind":
    "https://img.a.transfermarkt.technology/portrait/header/12282-1718096647.jpg?lm=1",
  "Chris Smalling":
    "https://img.a.transfermarkt.technology/portrait/header/103427-1765232730.png?lm=1",
  "Marcos Rojo":
    "https://img.a.transfermarkt.technology/portrait/header/93176-1739889892.jpg?lm=1",
  "Ashley Young":
    "https://img.a.transfermarkt.technology/portrait/header/14086-1700736434.jpg?lm=1",
  "Ander Herrera":
    "https://img.a.transfermarkt.technology/portrait/header/99343-1709675915.png?lm=1",
  "Juan Mata":
    "https://img.a.transfermarkt.technology/portrait/header/44068-1671102342.png?lm=1",
  "Marouane Fellaini":
    "https://img.a.transfermarkt.technology/portrait/header/39679-1549036391.jpg?lm=1",
  "Angel Di Maria":
    "https://img.a.transfermarkt.technology/portrait/header/45320-1700648952.jpg?lm=1",
  "Senne Lammens":
    "https://img.a.transfermarkt.technology/portrait/header/503883-1755675220.jpg?lm=1",
  "Luke Shaw":
    "https://img.a.transfermarkt.technology/portrait/header/183288-1668500175.jpg?lm=1",
  "Harry Maguire":
    "https://img.a.transfermarkt.technology/portrait/header/177907-1663841733.jpg?lm=1",
  "Leny Yoro":
    "https://img.a.transfermarkt.technology/portrait/header/923831-1747857948.jpg?lm=1",
  "Diogo Dalot":
    "https://img.a.transfermarkt.technology/portrait/header/357147-1727785546.jpg?lm=1",
  "Matheus Cunha":
    "https://img.a.transfermarkt.technology/portrait/header/517894-1780390711.jpg?lm=1",
  "Casemiro":
    "https://img.a.transfermarkt.technology/portrait/header/16306-1699018876.jpg?lm=1",
  "Kobbie Mainoo":
    "https://img.a.transfermarkt.technology/portrait/header/820374-1719349758.jpg?lm=1",
  "Bryan Mbeumo":
    "https://img.a.transfermarkt.technology/portrait/header/413039-1769532496.jpg?lm=1",
  "Bruno Fernandes":
    "https://img.a.transfermarkt.technology/portrait/header/240306-1683882766.jpg?lm=1",
  "Benjamin Sesko":
    "https://img.a.transfermarkt.technology/portrait/header/627442-1779803478.jpg?lm=1"
};

const positions = [
  { key: "GK", x: 8, y: 50 },
  { key: "LB", x: 28, y: 14 },
  { key: "CB1", x: 28, y: 38 },
  { key: "CB2", x: 28, y: 62 },
  { key: "RB", x: 28, y: 86 },
  { key: "LM", x: 55, y: 14 },
  { key: "CM1", x: 55, y: 38 },
  { key: "CM2", x: 55, y: 62 },
  { key: "RM", x: 55, y: 86 },
  { key: "ST1", x: 82, y: 36 },
  { key: "ST2", x: 82, y: 64 }
] as const;

export function StartingXI({ data }: StartingXIProps) {
  return (
    <div className="overflow-hidden rounded-lg border bg-united-black text-white shadow-archive">
      <div className="flex flex-col gap-3 border-b border-white/10 bg-[linear-gradient(135deg,#0b0b0d,#7f0611)] p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-united-gold">
            Tactical board
          </p>
          <h3 className="mt-1 text-2xl font-black">Starting XI</h3>
        </div>
        <Badge variant="gold" className="w-fit bg-united-gold text-united-black">
          {data.formation}
        </Badge>
      </div>

      <div className="overflow-x-auto bg-[#0d5c32] p-4 sm:p-6">
        <div className="relative aspect-[16/9] min-w-[960px] overflow-hidden rounded-lg bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.09)_0_18%,transparent_18%_36%,rgba(255,255,255,0.08)_36%_54%,transparent_54%_72%,rgba(255,255,255,0.08)_72%_100%),linear-gradient(90deg,#146b3a,#0b552f)] bg-[size:46px_46px,100%_100%,100%_100%]">
          <div className="absolute inset-4 rounded-lg border-2 border-white/28" />
          <div className="absolute inset-y-4 left-1/2 w-0.5 -translate-x-1/2 bg-white/25" />
          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/25" />
          <div className="absolute bottom-1/2 left-4 h-44 w-20 translate-y-1/2 rounded-r-lg border-y-2 border-r-2 border-white/25" />
          <div className="absolute bottom-1/2 right-4 h-44 w-20 translate-y-1/2 rounded-l-lg border-y-2 border-l-2 border-white/25" />

          {positions.map((position) => {
            const playerName = data.players[position.key];
            const photo = playerPhotos[playerName];

            return (
              <div
                key={position.key}
                className="absolute flex min-h-32 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-lg border border-white/20 bg-united-black/78 p-3 text-center shadow-xl ring-1 ring-white/10 backdrop-blur transition hover:-translate-y-[calc(50%+0.25rem)] hover:border-united-gold"
                style={{ left: `${position.x}%`, top: `${position.y}%` }}
              >
                <div className="flex flex-col items-center">
                  <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-united-gold/70 bg-white/12 text-united-gold shadow-inner">
                    {photo ? (
                      <img
                        src={photo}
                        alt={playerName}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <UserRound className="h-6 w-6" />
                    )}
                  </span>
                  <span className="mt-3 rounded-full bg-united-gold px-2 py-0.5 text-[10px] font-black text-united-black">
                    {labels[position.key]}
                  </span>
                </div>
                <p className="mt-3 text-sm font-bold leading-5">
                  {playerName}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
