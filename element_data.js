//原子番号,種類,元素記号,日本語,中国語（台湾）,中国語,韓国語,ギリシャ語,ドイツ語,英語,フランス語,ラテン語,ロシア語,色

const DATA=`1,非金属,H,水素,氫,氢,수소,Υδρογόνο,Wasserstoff,Hydrogen,Hydrogène,Hydrogenium,Водород,FFFFFF
2,貴ガス,He,ヘリウム,氦,氦,헬륨,Ήλιο,Helium,Helium,Hélium,Helium,Гелий,D9FFFF
3,アルカリ金属,Li,リチウム,鋰,锂,리튬,Λίθιο,Lithium,Lithium,Lithium,Lithium,Литий,CC80FF
4,2族元素,Be,ベリリウム,鈹,铍,베릴륨,Βηρύλλιο,Beryllium,Beryllium,Béryllium,Beryllium,Бериллий,C2FF00
5,非金属,B,ホウ素（硼素）,硼,硼,붕소,Βόριο,Bor,Boron,Bore,Borium,Бор,FFB5B5
6,非金属,C,炭素,碳,碳,탄소,Άνθρακας,Kohlenstoff,Carbon,Carbone,Carbonium,Углерод,909090
7,非金属,N,窒素,氮,氮,질소,Άζωτο,Stickstoff,Nitrogen,Azote,Nitrogenium,Азот,3050F8
8,非金属,O,酸素,氧,氧,산소,Οξυγόνο,Sauerstoff,Oxygen,Oxygène,Oxygenium,Кислород,FF0D0D
9,ハロゲン,F,フッ素（弗素）,氟,氟,플루오린,Φθόριο,Fluor,Fluorine,Fluor,Fluorum,Фтор,90E050
10,貴ガス,Ne,ネオン,氖,氖,네온,Νέον,Neon,Neon,Néon,Neon,Неон,B3E3F5
11,アルカリ金属,Na,ナトリウム,鈉,钠,나트륨,Νάτριο,Natrium,Sodium,Sodium,Natrium,Натрий,AB5CF2
12,2族元素,Mg,マグネシウム,鎂,镁,마그네슘,Μαγνήσιο,Magnesium,Magnesium,Magnésium,Magnesium,Магний,8AFF00
13,典型金属,Al,アルミニウム,鋁,铝,알루미늄,Αργίλιο,Aluminium,Aluminium,Aluminium,Aluminium,Алюминий,BFA6A6
14,非金属,Si,ケイ素（珪素）,矽,硅,규소,Πυρίτιο,Silicium,Silicon,Silicium,Silicium,Кремний,F0C8A0
15,非金属,P,リン（燐）,磷,磷,인,Φωσφόρος,Phosphor,Phosphorus,Phosphore,Phosphorus,Фосфор,FF8000
16,非金属,S,硫黄,硫,硫,황,Θείο,Schwefel,Sulfur,Soufre,Sulphur,Сера,FFFF30
17,ハロゲン,Cl,塩素,氯,氯,염소,Χλώριο,Chlor,Chlorine,Chlore,Chlorum,Хлор,1FF01F
18,貴ガス,Ar,アルゴン,氬,氩,아르곤,Αργό,Argon,Argon,Argon,Argon,Аргон,80D1E3
19,アルカリ金属,K,カリウム,鉀,钾,칼륨,Κάλιο,Kalium,Potassium,Potassium,Kalium,Калий,8F40D4
20,アルカリ土類金属,Ca,カルシウム,鈣,钙,칼슘,Ασβέστιο,Calcium,Calcium,Calcium,Calcium,Кальций,3DFF00
21,遷移金属,Sc,スカンジウム,鈧,钪,스칸듐,Σκάνδιο,Scandium,Scandium,Scandium,Scandium,Скандий,E6E6E6
22,遷移金属,Ti,チタン,鈦,钛,티타늄,Τιτάνιο,Titan,Titanium,Titane,Titanium,Титан,BFC2C7
23,遷移金属,V,バナジウム,釩,钒,바나듐,Βανάδιο,Vanadium,Vanadium,Vanadium,Vanadium,Ванадий,A6A6AB
24,遷移金属,Cr,クロム,鉻,铬,크롬,Χρώμιο,Chrom,Chromium,Chrome,Chromium,Хром,8A99C7
25,遷移金属,Mn,マンガン,錳,锰,망가니즈,Μαγγάνιο,Mangan,Manganese,Manganèse,Manganum,Марганец,9C7AC7
26,遷移金属,Fe,鉄,鐵,铁,철,Σίδηρος,Eisen,Iron,Fer,Ferrum,Железо,E06633
27,遷移金属,Co,コバルト,鈷,钴,코발트,Κοβάλτιο,Cobalt,Cobalt,Cobalt,Cobaltum,Кобальт,F090A0
28,遷移金属,Ni,ニッケル,鎳,镍,니켈,Νικέλιο,Nickel,Nickel,Nickel,Niccolum,Никель,50D050
29,遷移金属,Cu,銅,銅,铜,구리,Χαλκός,Kupfer,Copper,Cuivre,Cuprum,Медь,C88033
30,亜鉛族元素,Zn,亜鉛,鋅,锌,아연,Ψευδάργυρος,Zink,Zinc,Zinc,Zincum,Цинк,7D80B0
31,典型金属,Ga,ガリウム,鎵,镓,갈륨,Γάλλιο,Gallium,Gallium,Gallium,Gallium,Галлий,C28F8F
32,典型金属,Ge,ゲルマニウム,鍺,锗,게르마늄,Γερμάνιο,Germanium,Germanium,Germanium,Germanium,Германий,668F8F
33,非金属,As,ヒ素（砒素）,砷,砷,비소,Αρσενικό,Arsen,Arsenic,Arsenic,Arsenicum,Мышьяк,BD80E3
34,非金属,Se,セレン,硒,硒,셀레늄,Σελήνιο,Selen,Selenium,Sélénium,Selenium,Селен,FFA100
35,ハロゲン,Br,臭素,溴,溴,브로민,Βρώμιο,Brom,Bromine,Brome,Bromum,Бром,A62929
36,貴ガス,Kr,クリプトン,氪,氪,크립톤,Κρυπτό,Krypton,Krypton,Krypton,Krypton,Криптон,5CB8D1
37,アルカリ金属,Rb,ルビジウム,銣,铷,루비듐,Ρουβίδιο,Rubidium,Rubidium,Rubidium,Rubidium,Рубидий,702EB0
38,アルカリ土類金属,Sr,ストロンチウム,鍶,锶,스트론튬,Στρόντιο,Strontium,Strontium,Strontium,Strontium,Стронций,00FF00
39,遷移金属,Y,イットリウム,釔,钇,이트륨,Ύτριο,Yttrium,Yttrium,Yttrium,Yttrium,Иттрий,94FFFF
40,遷移金属,Zr,ジルコニウム,鋯,锆,지르코늄,Ζιρκόνιο,Zirconium,Zirconium,Zirconium,Zirconium,Цирконий,94E0E0
41,遷移金属,Nb,ニオブ,鈮,铌,나이오븀,Νιόβιο,Niob,Niobium,Niobium,Niobium,Ниобий,73C2C9
42,遷移金属,Mo,モリブデン,鉬,钼,몰리브데넘,Μολυβδένιο,Molybdän,Molybdenum,Molybdène,Molybdenum,Молибден,54B5B5
43,遷移金属,Tc,テクネチウム,鎝,锝,테크네튬,Τεχνήτιο,Technetium,Technetium,Technétium,Technetium,Технеций,3B9E9E
44,遷移金属,Ru,ルテニウム,釕,钌,루테늄,Ρουθήνιο,Ruthenium,Ruthenium,Ruthénium,Ruthenium,Рутений,248F8F
45,遷移金属,Rh,ロジウム,銠,铑,로듐,Ρόδιο,Rhodium,Rhodium,Rhodium,Rhodium,Родий,0A7D8C
46,遷移金属,Pd,パラジウム,鈀,钯,팔라듐,Παλλάδιο,Palladium,Palladium,Palladium,Palladium,Палладий,006985
47,遷移金属,Ag,銀,銀,银,은,Άργυρος,Silber,Silver,Argent,Argentum,Серебро,C0C0C0
48,亜鉛族元素,Cd,カドミウム,鎘,镉,카드뮴,Κάδμιο,Cadmium,Cadmium,Cadmium,Cadmium,Кадмий,FFD98F
49,典型金属,In,インジウム,銦,铟,인듐,Ίνδιο,Indium,Indium,Indium,Indium,Индий,A67573
50,典型金属,Sn,スズ（錫）,錫,锡,주석,Κασσίτερος,Zinn,Tin,Étain,Stannum,Олово,668080
51,典型金属,Sb,アンチモン,銻,锑,안티모니,Αντιμόνιο,Antimon,Antimony,Antimoine,Stibium,Сурьма,9E63B5
52,非金属,Te,テルル,碲,碲,텔루륨,Τελλούριο,Tellur,Tellurium,Tellure,Tellurium,Теллур,D47A00
53,ハロゲン,I,ヨウ素,碘,碘,아이오딘,Ιώδιο,Iod,Iodine,Iode,Iodum,Иод,940094
54,貴ガス,Xe,キセノン,氙,氙,제논,Ξένο,Xenon,Xenon,Xénon,Xenon,Ксенон,429EB0
55,アルカリ金属,Cs,セシウム,銫,铯,세슘,Καίσιο,Caesium,Caesium,Césium,Caesium,Цезий,57178F
56,アルカリ土類金属,Ba,バリウム,鋇,钡,바륨,Βάριο,Barium,Barium,Baryum,Barium,Барий,00C900
57,ランタノイド,La,ランタン,鑭,镧,란타넘,Λανθάνιο,Lanthan,Lanthanum,Lanthane,Lanthanum,Лантан,70D4FF
58,ランタノイド,Ce,セリウム,鈰,铈,세륨,Δημήτριο,Cer,Cerium,Cérium,Cerium,Церий,FFFFC7
59,ランタノイド,Pr,プラセオジム,鐠,镨,프라세오디뮴,Πρασινοδύμιο,Praseodym,Praseodymium,Praséodyme,Praseodymium,Празеодим,D9FFC7
60,ランタノイド,Nd,ネオジム,釹,钕,네오디뮴,Νεοδύμιο,Neodym,Neodymium,Néodyme,Neodymium,Неодим,C7FFC7
61,ランタノイド,Pm,プロメチウム,鉕,钷,프로메튬,Προμήθειο,Pro­methium,Promethium,Prométhium,Promethium,Прометий,A3FFC7
62,ランタノイド,Sm,サマリウム,釤,钐,사마륨,Σαμάριο,Samarium,Samarium,Samarium,Samarium,Самарий,8FFFC7
63,ランタノイド,Eu,ユウロピウム,銪,铕,유로퓸,Ευρώπιο,Europium,Europium,Europium,Europium,Европий,61FFC7
64,ランタノイド,Gd,ガドリニウム,釓,钆,가돌리늄,Γαδολίνιο,Gadolinium,Gadolinium,Gadolinium,Gadolinium,Гадолиний,45FFC7
65,ランタノイド,Tb,テルビウム,鋱,铽,터븀,Τέρβιο,Terbium,Terbium,Terbium,Terbium,Тербий,30FFC7
66,ランタノイド,Dy,ジスプロシウム,鏑,镝,디스프로슘,Δυσπρόσιο,Dysprosium,Dysprosium,Dysprosium,Dysprosium,Диспрозий,1FFFC7
67,ランタノイド,Ho,ホルミウム,鈥,钬,홀뮴,Όλμιο,Holmium,Holmium,Holmium,Holmium,Гольмий,00FF9C
68,ランタノイド,Er,エルビウム,鉺,铒,어븀,Έρβιο,Erbium,Erbium,Erbium,Erbium,Эрбий,00E675
69,ランタノイド,Tm,ツリウム,銩,铥,툴륨,Θούλιο,Thulium,Thulium,Thulium,Thulium,Тулий,00D452
70,ランタノイド,Yb,イッテルビウム,鐿,镱,이터븀,Υττέρβιο,Ytterbium,Ytterbium,Ytterbium,Ytterbium,Иттербий,00BF38
71,ランタノイド,Lu,ルテチウム,鎦,镥,루테튬,Λουτήτιο,Lutetium,Lutetium,Lutécium,Lutetium,Лютеций,00AB24
72,遷移金属,Hf,ハフニウム,鉿,铪,하프늄,Άφνιο,Hafnium,Hafnium,Hafnium,Hafnium,Гафний,4DC2FF
73,遷移金属,Ta,タンタル,鉭,钽,탄탈럼,Ταντάλιο,Tantal,Tantalum,Tantale,Tantalum,Тантал,4DA6FF
74,遷移金属,W,タングステン,鎢,钨,텅스텐,Βολφράμιο,Wolfram,Tungsten,Tungstène,Wolframium,Вольфрам,2194D6
75,遷移金属,Re,レニウム,錸,铼,레늄,Ρήνιο,Rhenium,Rhenium,Rhénium,Rhenium,Рений,267DAB
76,遷移金属,Os,オスミウム,鋨,锇,오스뮴,Όσμιο,Osmium,Osmium,Osmium,Osmium,Осмий,266696
77,遷移金属,Ir,イリジウム,銥,铱,이리듐,Ιρίδιο,Iridium,Iridium,Iridium,Iridium,Иридий,175487
78,遷移金属,Pt,白金,鉑,铂,백금,Λευκόχρυσος,Platin,Platinum,Platine,Platinum,Платина,D0D0E0
79,遷移金属,Au,金,金,金,금,Χρυσός,Gold,Gold,Or,Aurum,Золото,FFD123
80,亜鉛族元素,Hg,水銀,汞,汞,수은,Υδράργυρος,Quecksilber,Mercury,Mercure,Hydrargyrum,Ртуть,B8B8D0
81,典型金属,Tl,タリウム,鉈,铊,탈륨,Θάλλιο,Thallium,Thallium,Thallium,Thallium,Таллий,A6544D
82,典型金属,Pb,鉛,鉛,铅,납,Μόλυβδος,Blei,Lead,Plomb,Plumbum,Свинец,575961
83,典型金属,Bi,ビスマス,鉍,铋,비스무트,Βισμούθιο,Bismut,Bismuth,Bismuth,Bisemutum,Висмут,9E4FB5
84,典型金属,Po,ポロニウム,釙,钋,폴로늄,Πολώνιο,Polonium,Polonium,Polonium,Polonium,Полоний,AB5C00
85,ハロゲン,At,アスタチン,砈,砹,아스타틴,Άστατο,Astat,Astatine,Astate,Astatum,Астат,754F45
86,貴ガス,Rn,ラドン,氡,氡,라돈,Ραδόνιο,Radon,Radon,Radon,Radon,Радон,428296
87,アルカリ金属,Fr,フランシウム,鍅,钫,프랑슘,Φράνκιο,Francium,Francium,Francium,Francium,Франций,420066
88,アルカリ土類金属,Ra,ラジウム,鐳,镭,라듐,Ράδιο,Radium,Radium,Radium,Radium,Радий,007D00
89,アクチノイド,Ac,アクチニウム,錒,锕,악티늄,Ακτίνιο,Actinium,Actinium,Actinium,Actinium,Актиний,70ABFA
90,アクチノイド,Th,トリウム,釷,钍,토륨,Θόριο,Thorium,Thorium,Thorium,Thorium,Торий,00BAFF
91,アクチノイド,Pa,プロトアクチニウム,鏷,镤,프로트악티늄,Πρωτακτίνιο,Protac­tinium,Protactinium,Protactinium,Protactinium,Протактиний,00A1FF
92,アクチノイド,U,ウラン,鈾,铀,우라늄,Ουράνιο,Uran,Uranium,Uranium,Uranium,Уран,008FFF
93,アクチノイド,Np,ネプツニウム,錼,镎,넵투늄,Ποσειδώνιο,Neptunium,Neptunium,Neptunium,Neptunium,Нептуний,0080FF
94,アクチノイド,Pu,プルトニウム,鈽,钚,플루토늄,Πλουτώνιο,Plutonium,Plutonium,Plutonium,Plutonium,Плутоний,006BFF
95,アクチノイド,Am,アメリシウム,鋂,镅,아메리슘,Αμερίκιο,Americium,Americium,Américium,Americium,Америций,545CF2
96,アクチノイド,Cm,キュリウム,鋦,锔,퀴륨,Κιούριο,Curium,Curium,Curium,Curium,Кюрий,785CE3
97,アクチノイド,Bk,バークリウム,鉳,锫,버클륨,Μπερκέλιο,Berkelium,Berkelium,Berkélium,Berkelium,Берклий,8A4FE3
98,アクチノイド,Cf,カリホルニウム,鉲,锎,캘리포늄,Καλιφόρνιο,Californium,Californium,Californium,Californium,Калифорний,A136D4
99,アクチノイド,Es,アインスタイニウム,鑀,锿,아인슈타이늄,Αϊνσταΐνιο,Einsteinium,Einsteinium,Einsteinium,Einsteinium,Эйнштейний,B31FD4
100,アクチノイド,Fm,フェルミウム,鐨,镄,페르뮴,Φέρμιο,Fermium,Fermium,Fermium,Fermium,Фермий,B31FBA
101,アクチノイド,Md,メンデレビウム,鍆,钔,멘델레븀,Μεντελέβιο,Mende­levium,Mendelevium,Mendélévium,Mendelevium,Менделевий,B30DA6
102,アクチノイド,No,ノーベリウム,鍩,锘,노벨륨,Νομπέλιο,Nobelium,Nobelium,Nobélium,Nobelium,Нобелий,BD0D87
103,アクチノイド,Lr,ローレンシウム,鐒,铹,로렌슘,Λωρένσιο,Lawren­cium,Lawrencium,Lawrencium,Lawrencium,Лоуренсий,C70066
104,超重元素,Rf,ラザホージウム,鑪,𬬻,러더포듐,Ραδερφόρντιο,Ruther­fordium,Rutherfordium,Rutherfordium,Rutherfordium,Резерфордий,CC0059
105,超重元素,Db,ドブニウム,𨧀,𬭊,더브늄,Ντούμπνιο,Dubnium,Dubnium,Dubnium,Dubnium,Дубний,D1004F
106,超重元素,Sg,シーボーギウム,𨭎,𬭳,시보귬,Σιμπόργκιο,Seaborgium,Seaborgium,Seaborgium,Seaborgium,Сиборгий,D90045
107,超重元素,Bh,ボーリウム,𨨏,𬭛,보륨,Μπόριο,Bohrium,Bohrium,Bohrium,Bohrium,Борий,E00038
108,超重元素,Hs,ハッシウム,𨭆,𬭶,하슘,Χάσιο,Hassium,Hassium,Hassium,Hassium,Хассий,E6002E
109,超重元素,Mt,マイトネリウム,䥑,鿏,마이트너륨,Μαϊτνέριο,Meitnerium,Meitnerium,Meitnérium,Meitnerium,Мейтнерий,EB0026
110,超重元素,Ds,ダームスタチウム,鐽,𫟼,다름슈타튬,Νταρμστάντιο,Darm­stadtium,Darmstadtium,Darmstadtium,Darmstadtium,Дармштадтий,F20019
111,超重元素,Rg,レントゲニウム,錀,𬬭,뢴트게늄,Ρεντγκένιο,Roent­genium,Roentgenium,Roentgenium,Roentgenium,Рентгений,F8000F
112,超重元素,Cn,コペルニシウム,鎶,鿔,코페르니슘,Κοπερνίκιο,Coper­nicium,Copernicium,Copernicium,Copernicium,Коперниций,FE0004
113,超重元素,Nh,ニホニウム,鉨,钅尓,니호늄,Νιχόνιο,Nihonium,Nihonium,Nihonium,Nihonium,Нихоний,FF0D00
114,超重元素,Fl,フレロビウム,鈇,𫓧,플레로븀,Φλερόβιο,Flerovium,Flerovium,Flérovium,Flerovium,Флеровий,FF1E00
115,超重元素,Mc,モスコビウム,鏌,镆,모스코븀,Μοσκόβιο,Moscovium,Moscovium,Moscovium,Moscovium,Московий,FF2E00
116,超重元素,Lv,リバモリウム,鉝,𫟷,리버모륨,Λιβερμόριο,Liver­morium,Livermorium,Livermorium,Livermorium,Ливерморий,FF3F00
117,超重元素,Ts,テネシン,石田,石田,테네신,Τενέσιο,Tenness,Tennessine,Tennesse,Tennessine,Теннессин,FF5100
118,超重元素,Og,オガネソン,奥气,奥气,오가네손,Ογκανέσσιο,Oganesson,Oganesson,Oganesson,Oganesson,Оганесон,FF6200`;

const ELEMENT = DATA.split("\n").map(txt => {
  let splited = txt.split(",");
  return {
    number: splited[0],
    category: splited[1],
    symbol: splited[2],
    ja: splited[3],
    zhTW: splited[4],
    zhCN: splited[5],
    ko: splited[6],
    el: splited[7],
    de: splited[8],
    en: splited[9],
    fr: splited[10],
    la: splited[11],
    ru: splited[12],
    color: splited[13]
  };
});

const SONG = [
  "Sb","As","Al","Se",
  "H","O","N","Re",
  "Ni","Nd","Np","Ge",
  "Fe","Am","Ru","U",
  "Eu","Zr","Lu","V",
  "La","Os","At","Ra",
  "Au","Pa","In","Ga",
  
  "I","Th","Tm","Tl",
  
  "Y","Yb","Ac","Rb",
  "B","Gd","Nb","Ir",
  "Sr","Si","Ag","Sm",
  "Bi","Br","Li","Be","Ba",
  
  "Ho","He","Hf","Er",
  "P","Fr","F","Tb",
  "Mn","Hg","Mo","Mg",
  "Dy","Sc","Ce","Cs",
  "Pb","Pr","Pt","Pu",
  "Pd","Pm","K","Po",
  "Ta","Tc","Ti","Te",
  
  "Cd","Ca","Cr","Cm",
  
  "S","Cf","Fm","Bk",
  "Md","Es","No",
  "Ar","Kr","Ne","Rn","Xe","Zn","Rh",
  "Cl","C","Co","Cu","W","Sn","Na",
  
  "Lr","Rf","Db","Sg",
  "Bh","Hs","Mt","Ds",
  "Rg","Cn","Nh","Fl",
  "Mc","Lv","Ts","Og"
]