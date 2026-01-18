/**
 * Okinaw American Village Coupon Map Logic (Final Integrated Version)
 * [Features]
 * - Central Data Management: Dining & Shopping DB
 * - UI Logic: Clean Map (Image Only), Search, Hashtags, Favorites
 * - Responsive: Header Auto-Resize
 */

/* -------------------------------------------------------------------------- */
/* 1. 데이터베이스 (쿠폰북 전수 데이터 포함)                                   */
/* -------------------------------------------------------------------------- */
const db = {
    // 🍽️ 식당 데이터 (Dining, Cafe, Sweets, Izakaya, Bar)
    dining: [
        // [호텔 & 뷔페]
        {
            name: "Hilton Suriyun (수리윤)",
            category: "뷔페/호텔",
            benefit: "런치/디너 15% 할인",
            hours: "11:30-15:00 / 17:30-21:30",
            building: "힐튼 오키나와 차탄 리조트",
            tags: ["#호텔뷔페", "#런치", "#디너", "#가족"],
            [span_0](start_span)[span_1](start_span)desc: "힐튼 호텔 내 고급 뷔페 레스토랑[span_0](end_span)[span_1](end_span)"
        },
        {
            name: "Hilton Corrente (코렌테)",
            category: "이탈리안",
            benefit: "런치/디너 15% 할인",
            hours: "11:30-15:00 / 17:30-22:30",
            building: "힐튼 오키나와 차탄 리조트",
            tags: ["#이탈리안", "#호텔", "#데이트", "#파스타"],
            [span_2](start_span)[span_3](start_span)desc: "세련된 분위기의 호텔 이탈리안 레스토랑[span_2](end_span)[span_3](end_span)"
        },

        // [오키나와 요리]
        {
            name: "Taco Rice Cafe Kijimuna",
            category: "타코라이스",
            benefit: "음료 1잔 서비스 (8명까지)",
            hours: "11:00-22:00",
            building: "데포아일랜드 C동 2F",
            tags: ["#타코라이스", "#오무타코", "#소울푸드"],
            [span_4](start_span)[span_5](start_span)desc: "부드러운 계란이 올라간 오무타코 맛집[span_4](end_span)[span_5](end_span)"
        },
        {
            name: "Kamezen Shokudo (카메젠 식당)",
            category: "오키나와소바",
            benefit: "5% 할인",
            hours: "11:00-14:45 / 17:00-21:00",
            building: "데포아일랜드 C동 2F",
            tags: ["#오키나와소바", "#라프티", "#가성비"],
            [span_6](start_span)[span_7](start_span)desc: "옛날 분위기의 오키나와 소바 전문점[span_6](end_span)[span_7](end_span)"
        },
        {
            name: "Churahama Shokudo",
            category: "오키나와요리",
            benefit: "음료 1잔 서비스 (최대 10명)",
            hours: "12:00-15:30 / 17:00-23:00",
            building: "디스토션 시사이드 3F",
            tags: ["#정식", "#이자카야", "#오션뷰"],
            [span_8](start_span)[span_9](start_span)desc: "바다를 보며 즐기는 오키나와 가정식[span_8](end_span)[span_9](end_span)"
        },
        {
            name: "Chatan Dunchi (차탄 둔치)",
            category: "오키나와요리",
            benefit: "오리지널 음료 1잔 서비스",
            hours: "17:00-23:00",
            building: "데포아일랜드 시사이드 3F",
            tags: ["#이자카야", "#오션뷰", "#창작요리"],
            [span_10](start_span)[span_11](start_span)desc: "분위기 좋은 오키나와 창작 요리 주점[span_10](end_span)[span_11](end_span)"
        },
        {
            name: "Mihama Dunchi (미하마 둔치)",
            category: "오키나와요리",
            benefit: "오리지널 음료 1잔 서비스",
            hours: "17:00-23:00",
            building: "데포 센트럴 2F",
            tags: ["#이자카야", "#개별룸", "#모임"],
            [span_12](start_span)[span_13](start_span)desc: "다양한 오키나와 요리를 즐길 수 있는 곳[span_12](end_span)[span_13](end_span)"
        },
        {
            name: "Shimanchu (시만츄)",
            category: "라이브주점",
            benefit: "바다포도(우미부도) 서비스",
            hours: "16:00-22:00",
            building: "레쿠 프리미어동 2F",
            tags: ["#라이브공연", "#민요", "#술한잔"],
            [span_14](start_span)[span_15](start_span)desc: "오키나와 민요 라이브와 함께하는 술자리[span_14](end_span)[span_15](end_span)"
        },
        {
            name: "Kanasanya (카나산야)",
            category: "오키나와요리",
            benefit: "소프트드링크 1잔 서비스",
            hours: "17:00-23:00",
            building: "데포 센트럴 3F",
            tags: ["#아구돼지", "#샤브샤브", "#저녁"],
            [span_16](start_span)[span_17](start_span)desc: "엄선된 재료로 만드는 오키나와 요리[span_16](end_span)[span_17](end_span)"
        },
        {
            name: "Funka Delica",
            category: "오키나와요리",
            benefit: "10% 할인 (주류 제외)",
            hours: "11:00-18:00",
            building: "미하마 34-2 1F",
            tags: ["#포크타마고", "#주먹밥", "#브런치"],
            [span_18](start_span)[span_19](start_span)desc: "오키나와 소울푸드 포크 타마고 전문점[span_18](end_span)[span_19](end_span)"
        },
        {
            name: "KISEKI (키세키)",
            category: "오키나와소바",
            benefit: "토핑 1개 무료 (파/면/새우/우엉 중 택1)",
            hours: "11:00-21:00",
            building: "디스토션 시사이드 1F",
            tags: ["#조개육수", "#이색소바", "#라멘스타일"],
            [span_20](start_span)[span_21](start_span)desc: "진한 조개 육수의 이색 오키나와 소바[span_20](end_span)[span_21](end_span)"
        },

        // [스테이크 & 햄버거 & 카레]
        {
            name: "JUMBO STEAK HAN'S (미하마점)",
            category: "스테이크",
            benefit: "10% 할인",
            hours: "11:00-23:00",
            building: "데포아일랜드 A동 2F",
            tags: ["#스테이크", "#고기", "#푸짐한양"],
            [span_22](start_span)[span_23](start_span)desc: "아메리칸 빌리지의 대표적인 점보 스테이크[span_22](end_span)[span_23](end_span)"
        },
        {
            name: "STEAK HOUSE BB",
            category: "스테이크",
            benefit: "음료 1잔 또는 토핑 1개 무료",
            hours: "11:30-21:00",
            building: "데포아일랜드 A동 2F",
            tags: ["#스테이크", "#가성비", "#런치"],
            [span_24](start_span)[span_25](start_span)desc: "합리적인 가격의 스테이크 하우스[span_24](end_span)[span_25](end_span)"
        },
        {
            name: "BLUE OCEAN STEAK",
            category: "스테이크",
            benefit: "웰컴 드링크 1잔 서비스",
            hours: "17:00-23:00",
            building: "미하마 51-2 2F",
            tags: ["#고급스테이크", "#오션뷰", "#기념일"],
            [span_26](start_span)[span_27](start_span)desc: "바다를 보며 즐기는 럭셔리 스테이크[span_26](end_span)[span_27](end_span)"
        },
        {
            name: "STEAK HOUSE 88",
            category: "스테이크",
            benefit: "드링크바 1잔 무료",
            hours: "11:00-23:00",
            building: "데포아일랜드 A동 2F",
            tags: ["#스테이크", "#노포", "#패밀리"],
            [span_28](start_span)[span_29](start_span)desc: "오키나와 스테이크의 원조 격인 레스토랑[span_28](end_span)[span_29](end_span)"
        },
        {
            name: "Seaside STEAK BEEFY'S",
            category: "스테이크",
            benefit: "10% 할인",
            hours: "11:30-15:00 / 17:00-22:00",
            building: "데포아일랜드 시사이드 4F",
            tags: ["#스테이크", "#전망좋은곳", "#테라스"],
            [span_30](start_span)[span_31](start_span)desc: "최고의 전망을 자랑하는 스테이크 하우스[span_30](end_span)[span_31](end_span)"
        },
        {
            name: "JUMBO STEAK HAN'S (데포센트럴점)",
            category: "스테이크",
            benefit: "10% 할인 또는 드링크 1잔",
            hours: "11:00-23:00",
            building: "데포 센트럴 2F",
            tags: ["#스테이크", "#고기", "#가족식사"],
            [span_32](start_span)[span_33](start_span)desc: "한스 스테이크의 또 다른 지점[span_32](end_span)[span_33](end_span)"
        },
        {
            name: "Chatan Burger Base Atabii's",
            category: "햄버거",
            benefit: "햄버거 토핑 1개 무료",
            hours: "9:00-15:00 / 17:00-21:00",
            building: "데포아일랜드 시사이드 1F",
            tags: ["#수제버거", "#조식", "#바다앞"],
            [span_34](start_span)[span_35](start_span)desc: "아침부터 즐길 수 있는 본격 수제버거[span_34](end_span)[span_35](end_span)"
        },
        {
            name: "JETTA BURGER MARKET",
            category: "햄버거",
            benefit: "아메리카노(HOT/ICE) 1잔 서비스",
            hours: "11:00-22:00",
            building: "디스토션 패션빌딩 2F",
            tags: ["#수제버거", "#멕시칸", "#힙한분위기"],
            [span_36](start_span)[span_37](start_span)desc: "다양한 버거와 멕시칸 요리[span_36](end_span)[span_37](end_span)"
        },
        {
            name: "BRUAL (브루알)",
            category: "햄버거",
            benefit: "10% 할인",
            hours: "10:00-21:00",
            building: "데포아일랜드 시사이드 2F",
            tags: ["#수제버거", "#맥주", "#테라스"],
            [span_38](start_span)[span_39](start_span)desc: "육즙 가득한 패티의 수제버거[span_38](end_span)[span_39](end_span)"
        },
        {
            name: "Naughty By Nature",
            category: "햄버거",
            benefit: "소프트드링크 1잔 서비스",
            hours: "11:00-19:30 (금토 ~21:00)",
            building: "미하마 51-3 1F",
            tags: ["#채식옵션", "#건강식", "#버거"],
            [span_40](start_span)[span_41](start_span)desc: "건강하고 맛있는 버거[span_40](end_span)[span_41](end_span)"
        },
        {
            name: "BOLLYWOOD DREAMS",
            category: "인도카레",
            benefit: "10% 할인",
            hours: "11:00-21:00",
            building: "데포아일랜드 A동 2F",
            tags: ["#인도커리", "#난", "#할랄"],
            [span_42](start_span)[span_43](start_span)desc: "본격 인도 쉐프가 만드는 카레[span_42](end_span)[span_43](end_span)"
        },
        {
            name: "Horizon Curry Works",
            category: "카레",
            benefit: "10% 할인",
            hours: "11:00-22:00",
            building: "디스토션 시사이드 2F",
            tags: ["#유러피안카레", "#뷰맛집", "#데이트"],
            [span_44](start_span)[span_45](start_span)desc: "바다를 보며 먹는 고급스러운 카레[span_44](end_span)[span_45](end_span)"
        },
        {
            name: "BOLLYWOOD Jewel",
            category: "인도카레",
            benefit: "10% 할인",
            hours: "11:00-21:30",
            building: "시사이드 스퀘어 1F",
            tags: ["#인도요리", "#카레", "#가족"],
            [span_46](start_span)[span_47](start_span)desc: "다양한 종류의 인도 요리[span_46](end_span)[span_47](end_span)"
        },

        // [카페 & 디저트]
        {
            name: "BLUE SEAL (블루씰)",
            category: "디저트",
            benefit: "싱글 구매 시 주니어 스쿱 추가 (더블)",
            hours: "11:00-21:00",
            building: "데포아일랜드 시사이드 2F",
            tags: ["#아이스크림", "#오키나와필수", "#디저트"],
            [span_48](start_span)[span_49](start_span)desc: "오키나와에서 꼭 먹어야 할 아이스크림[span_48](end_span)[span_49](end_span)"
        },
        {
            name: "Santommy (산토미)",
            category: "디저트",
            benefit: "1,000円以上 구매 시 5% 할인",
            hours: "10:00-18:00",
            building: "아메리칸 데포 B동 1F",
            tags: ["#바움쿠헨", "#선물", "#케이크"],
            [span_50](start_span)[span_51](start_span)desc: "부드러운 수제 바움쿠헨 전문점[span_50](end_span)[span_51](end_span)"
        },
        {
            name: "KAME ANDAGI",
            category: "디저트",
            benefit: "1,000円以上 구매 시 안다기 1개 증정",
            hours: "11:00-20:00",
            building: "레쿠 메인동 1F",
            tags: ["#사타안다기", "#도넛", "#간식"],
            [span_52](start_span)[span_53](start_span)desc: "토핑을 얹어 먹는 퓨전 사타안다기[span_52](end_span)[span_53](end_span)"
        },
        {
            name: "Kamakura (카마쿠라)",
            category: "디저트",
            benefit: "선물용 와라비모찌 구매 시 시럽 증정",
            hours: "10:30-20:00",
            building: "데포아일랜드 A동 1F",
            tags: ["#와라비모찌", "#일본디저트", "#음료"],
            [span_54](start_span)[span_55](start_span)desc: "마시는 와라비모찌 음료가 인기[span_54](end_span)[span_55](end_span)"
        },
        {
            name: "cafe and fruits BUNBUN",
            category: "디저트/카페",
            benefit: "식사 시 소프트드링크 1잔 무료",
            hours: "8:00-20:00",
            building: "플라자 F 1F",
            tags: ["#과일샌드", "#디저트", "#예쁜카페"],
            [span_56](start_span)[span_57](start_span)desc: "신선한 과일이 듬뿍 들어간 샌드위치[span_56](end_span)[span_57](end_span)"
        },
        {
            name: "Vongo & Anchor",
            category: "카페",
            benefit: "10% 할인",
            hours: "8:00-22:00",
            building: "베셀호텔 별관 1F",
            tags: ["#브런치", "#커피", "#분위기"],
            [span_58](start_span)[span_59](start_span)desc: "건강한 메뉴와 스페셜티 커피[span_58](end_span)[span_59](end_span)"
        },
        {
            name: "Seaside Cafe Hanon",
            category: "카페",
            benefit: "식사 주문 시 아이스크림 서비스",
            hours: "9:00-17:00 (주말 ~19:00)",
            building: "오크 패션빌딩 2F",
            tags: ["#팬케이크", "#오션뷰", "#디저트"],
            [span_60](start_span)[span_61](start_span)desc: "하얀 산토리니 풍의 팬케이크 맛집[span_60](end_span)[span_61](end_span)"
        },
        {
            name: "CLIMAX COFFEE",
            category: "카페",
            benefit: "10% 할인 (현금만)",
            hours: "9:30-22:00",
            building: "데포아일랜드 시사이드 1F",
            tags: ["#머핀", "#커피", "#테라스"],
            [span_62](start_span)[span_63](start_span)desc: "다양한 머핀과 진한 커피[span_62](end_span)[span_63](end_span)"
        },
        {
            name: "Cafe & Bar MaiMalu",
            category: "카페/바",
            benefit: "식사 주문 시 칵테일/음료 1잔 서비스",
            hours: "15:00-24:00",
            building: "디스토션 시사이드 1F",
            tags: ["#칵테일", "#오션뷰", "#선셋"],
            [span_64](start_span)[span_65](start_span)desc: "석양을 보며 칵테일 한 잔[span_64](end_span)[span_65](end_span)"
        },
        {
            name: "ZHYVAGO COFFEE ROASTERY",
            category: "카페",
            benefit: "10% 할인 (레쿠 투숙객 한정)",
            hours: "7:00-22:00",
            building: "레쿠 프리미어동 1F",
            tags: ["#로스터리", "#커피맛집", "#힙플레이스"],
            [span_66](start_span)[span_67](start_span)desc: "서해안 스타일의 힙한 로스터리 카페[span_66](end_span)[span_67](end_span)"
        },
        {
            name: "CARAVANA ICE CREAM",
            category: "디저트",
            benefit: "10% 할인 (레쿠 투숙객 한정)",
            hours: "11:00-22:00",
            building: "레쿠 프리미어동 1F",
            tags: ["#아이스크림", "#도넛", "#디저트"],
            [span_68](start_span)[span_69](start_span)desc: "수제 아이스크림과 도넛[span_68](end_span)[span_69](end_span)"
        },
        {
            name: "ONIYANMA COFFEE",
            category: "카페",
            benefit: "음료 주문 시 아이스크림 서비스",
            hours: "9:30-19:00",
            building: "디스토션 패션빌딩 2F",
            tags: ["#커피", "#카페", "#휴식"],
            [span_70](start_span)[span_71](start_span)desc: "차분한 분위기의 카페[span_70](end_span)[span_71](end_span)"
        },

        // [일식 & 양식 & 이자카야]
        {
            name: "Agu no Kakurega",
            category: "일식/샤브",
            benefit: "10% 할인",
            hours: "17:00-22:30",
            building: "미하마 2-2-2",
            tags: ["#아구돼지", "#샤브샤브", "#저녁"],
            [span_72](start_span)[span_73](start_span)desc: "오키나와 아구 돼지 샤브샤브 전문점[span_72](end_span)[span_73](end_span)"
        },
        {
            name: "Hakata Yakiniku Tenjin",
            category: "야키니쿠",
            benefit: "음료 1잔 서비스 (주류 포함)",
            hours: "11:30-15:00 / 17:00-23:00",
            building: "아메리칸 데포 C동 2F",
            tags: ["#야키니쿠", "#고기", "#런치"],
            [span_74](start_span)[span_75](start_span)desc: "하카타 스타일의 야키니쿠[span_74](end_span)[span_75](end_span)"
        },
        {
            name: "Yakiniku Fukugyu",
            category: "야키니쿠",
            benefit: "음료 1잔 서비스 (4명까지)",
            hours: "11:00-23:00",
            building: "데포아일랜드 E동 2F",
            tags: ["#와규", "#야키니쿠", "#고기"],
            [span_76](start_span)[span_77](start_span)desc: "질 좋은 와규를 즐길 수 있는 곳[span_76](end_span)[span_77](end_span)"
        },
        {
            name: "Chatan Steam Seafood",
            category: "씨푸드",
            benefit: "음료 1잔 서비스",
            hours: "11:00-23:00",
            building: "미하마 51-2 3F",
            tags: ["#해산물찜", "#씨푸드", "#건강식"],
            [span_78](start_span)[span_79](start_span)desc: "신선한 해산물 찜 요리[span_78](end_span)[span_79](end_span)"
        },
        {
            name: "GYUUBUSHI (규부시)",
            category: "야키니쿠",
            benefit: "10% 할인",
            hours: "17:00-23:00",
            building: "데포 센트럴 6F",
            tags: ["#야키니쿠", "#전망", "#디너"],
            [span_80](start_span)[span_81](start_span)desc: "전망 좋은 곳에서 즐기는 야키니쿠[span_80](end_span)[span_81](end_span)"
        },
        {
            name: "Yakiniku Rikio",
            category: "야키니쿠",
            benefit: "음료 또는 디저트 서비스",
            hours: "17:00-23:00",
            building: "디스토션 패션빌딩 2F",
            tags: ["#야키니쿠", "#캐주얼", "#고기"],
            [span_82](start_span)[span_83](start_span)desc: "캐주얼하게 즐기는 야키니쿠[span_82](end_span)[span_83](end_span)"
        },
        {
            name: "Jiruya (지루야)",
            category: "이자카야",
            benefit: "음료 1잔 무료 (주류 포함)",
            hours: "17:00-01:00",
            building: "아메리칸 데포 A동 1F",
            tags: ["#마제소바", "#이자카야", "#늦은밤"],
            [span_84](start_span)[span_85](start_span)desc: "마제소바와 술을 함께 즐기는 곳[span_84](end_span)[span_85](end_span)"
        },
        {
            name: "SUNRISE",
            category: "양식",
            benefit: "15% 할인",
            hours: "11:00-22:00",
            building: "시사이드 스퀘어 1F",
            tags: ["#치즈스테이크", "#햄버거", "#미국맛"],
            [span_86](start_span)[span_87](start_span)desc: "필라델피아 치즈 스테이크 전문점[span_86](end_span)[span_87](end_span)"
        },
        {
            name: "Hamburg Steak MASUO",
            category: "양식",
            benefit: "10% 할인",
            hours: "11:30-21:00",
            building: "아메리칸 데포 A동 1F",
            tags: ["#함바그", "#와규", "#육즙"],
            [span_88](start_span)[span_89](start_span)desc: "와규 함바그 스테이크[span_88](end_span)[span_89](end_span)"
        },
        {
            name: "SOLIS GRANDE",
            category: "이탈리안",
            benefit: "식사 시 아이스크림 서비스",
            hours: "11:00-15:00 / 17:00-22:00",
            building: "베셀호텔 별관 1F",
            tags: ["#이탈리안", "#피자", "#테라스"],
            [span_90](start_span)[span_91](start_span)desc: "분위기 좋은 이탈리안 레스토랑[span_90](end_span)[span_91](end_span)"
        },
        {
            name: "Red Lobster",
            category: "씨푸드",
            benefit: "음료/맥주/와인 리필 1잔 무료",
            hours: "11:00-22:00",
            building: "미하마 8-10",
            tags: ["#랍스터", "#씨푸드", "#패밀리"],
            [span_92](start_span)[span_93](start_span)desc: "전 세계적인 씨푸드 레스토랑[span_92](end_span)[span_93](end_span)"
        },
        {
            name: "Tony Roma's",
            category: "아메리칸",
            benefit: "소프트드링크 또는 하이네켄 1잔 무료",
            hours: "17:00-21:30",
            building: "미하마 8-7",
            tags: ["#립", "#스테이크", "#미국맛"],
            [span_94](start_span)[span_95](start_span)desc: "베이비백립이 유명한 아메리칸 레스토랑[span_94](end_span)[span_95](end_span)"
        },
        {
            name: "Capricciosa",
            category: "이탈리안",
            benefit: "음료/맥주/와인 1잔 무료",
            hours: "11:00-21:00",
            building: "미하마 8-7",
            tags: ["#파스타", "#피자", "#캐주얼"],
            [span_96](start_span)[span_97](start_span)desc: "푸짐한 양의 이탈리안 파스타[span_96](end_span)[span_97](end_span)"
        },
        {
            name: "Pocke Farm",
            category: "카페/식사",
            benefit: "음료 100엔 할인",
            hours: "10:00-21:00",
            building: "아메리칸 데포 B동 1F",
            tags: ["#타코라이스", "#버거", "#간편식"],
            [span_98](start_span)[span_99](start_span)desc: "가볍게 즐기는 식사와 음료[span_98](end_span)[span_99](end_span)"
        },
        {
            name: "BENSON'S",
            category: "핫도그",
            benefit: "토핑 1개 무료",
            hours: "10:00-21:00",
            building: "아메리칸 데포 B동 1F",
            tags: ["#핫도그", "#미국맛", "#간식"],
            [span_100](start_span)[span_101](start_span)desc: "정통 아메리칸 핫도그[span_100](end_span)[span_101](end_span)"
        },
        {
            name: "Taco Loco",
            category: "멕시칸",
            benefit: "음료 1잔 서비스",
            hours: "11:00-22:00",
            building: "아메리칸 데포 B동 2F",
            tags: ["#타코", "#멕시칸", "#맥주"],
            [span_102](start_span)[span_103](start_span)desc: "다양한 타코와 멕시칸 요리[span_102](end_span)[span_103](end_span)"
        },
        {
            name: "Guts",
            category: "치킨",
            benefit: "소프트드링크 증정",
            hours: "12:00-21:00",
            building: "데포 센트럴 2F",
            tags: ["#치킨", "#튀김", "#간식"],
            [span_104](start_span)[span_105](start_span)desc: "바삭한 프라이드 치킨[span_104](end_span)[span_105](end_span)"
        },
        {
            name: "Pao Pao The Elephant",
            category: "태국요리",
            benefit: "5% 할인",
            hours: "12:00-14:30 / 17:00-21:00",
            building: "미하마 8-10",
            tags: ["#타이푸드", "#커리", "#이색요리"],
            [span_106](start_span)[span_107](start_span)desc: "본격 태국 요리 전문점[span_106](end_span)[span_107](end_span)"
        },
        {
            name: "La Pesciolina",
            category: "이탈리안",
            benefit: "3,000円以上 10% 할인",
            hours: "18:00-23:00",
            building: "레쿠 프리미어동 1F",
            tags: ["#시칠리아", "#해산물", "#와인"],
            [span_108](start_span)[span_109](start_span)desc: "시칠리아풍 해산물 이탈리안[span_108](end_span)[span_109](end_span)"
        },
        {
            name: "Pizzeria Bar Ariccia",
            category: "피자",
            benefit: "식사 시 음료 200엔 할인",
            hours: "11:00-16:00 / 17:30-22:00",
            building: "데포아일랜드 시사이드 1F",
            tags: ["#피자", "#화덕피자", "#오션뷰"],
            [span_110](start_span)[span_111](start_span)desc: "바다 앞 테라스에서 즐기는 화덕피자[span_110](end_span)[span_111](end_span)"
        },
        {
            name: "EL PASO",
            category: "멕시칸",
            benefit: "음료 200엔 할인",
            hours: "11:00-15:00 / 16:30-22:00",
            building: "데포아일랜드 D동 2F",
            tags: ["#멕시칸", "#타코", "#부리또"],
            [span_112](start_span)[span_113](start_span)desc: "캐주얼 멕시칸 레스토랑[span_112](end_span)[span_113](end_span)"
        },
        {
            name: "Cafe & Bar Oh Yeah",
            category: "바/이자카야",
            benefit: "하부주 1잔 또는 안주 서비스",
            hours: "17:00-03:00",
            building: "오크 패션빌딩 2F",
            tags: ["#다트", "#바", "#늦은밤"],
            [span_114](start_span)[span_115](start_span)desc: "새벽까지 즐기는 캐주얼 바[span_114](end_span)[span_115](end_span)"
        },
        {
            name: "Sai (사이)",
            category: "이자카야",
            benefit: "안주 1품 서비스",
            hours: "17:00-02:00",
            building: "구르메관 2F",
            tags: ["#이자카야", "#술", "#안주"],
            [span_116](start_span)[span_117](start_span)desc: "편안한 분위기의 이자카야[span_116](end_span)[span_117](end_span)"
        },
        {
            name: "Shirakawa Store",
            category: "이자카야",
            benefit: "2번째 음료 무료",
            hours: "17:00-23:00",
            building: "아메리칸 데포 A동 1F",
            tags: ["#서서마시기", "#타치노미", "#로컬"],
            [span_118](start_span)[span_119](start_span)desc: "가볍게 한잔하기 좋은 타치노미 스타일[span_118](end_span)[span_119](end_span)"
        },
        {
            name: "Irish Pub Howdy",
            category: "펍",
            benefit: "안주 1품 무료",
            hours: "17:00-01:00",
            building: "데포 센트럴 5F",
            tags: ["#기네스", "#피쉬앤칩스", "#펍"],
            [span_120](start_span)[span_121](start_span)desc: "이국적인 분위기의 아이리쉬 펍[span_120](end_span)[span_121](end_span)"
        }
    ],

    // 🛍️ 쇼핑 & 액티비티 데이터 (Shopping, Activity, Beauty, Variety)
    shopping: [
        // [의류]
        {
            name: "RUN OKI (런 오키)",
            category: "의류",
            benefit: "10% 할인 (세일 제외)",
            hours: "10:00-21:00",
            building: "데포아일랜드 B동",
            tags: ["#티셔츠", "#기념품", "#오리지널"],
            [span_122](start_span)[span_123](start_span)desc: "오키나와 오리지널 티셔츠 브랜드[span_122](end_span)[span_123](end_span)"
        },
        {
            name: "Respect",
            category: "의류",
            benefit: "5% 할인 (세일품 제외)",
            hours: "11:00-21:00",
            building: "시사이드 스퀘어 1F",
            tags: ["#캐주얼", "#패션", "#의류"],
            [span_124](start_span)[span_125](start_span)desc: "다양한 캐주얼 의류 편집숍[span_124](end_span)[span_125](end_span)"
        },
        {
            name: "SKIP",
            category: "의류",
            benefit: "5% 할인",
            hours: "11:00-20:00",
            building: "아메리칸 데포 B동 1F",
            tags: ["#키즈", "#아동복", "#캐주얼"],
            [span_126](start_span)[span_127](start_span)desc: "아이들을 위한 패션 아이템[span_126](end_span)[span_127](end_span)"
        },
        {
            name: "Loyal Okinawa",
            category: "의류",
            benefit: "3,000円以上 구매 시 굿즈 증정",
            hours: "11:00-20:00",
            building: "데포아일랜드 E동 1F",
            tags: ["#오키나와셔츠", "#패션", "#기념품"],
            [span_128](start_span)[span_129](start_span)desc: "오키나와 스타일의 셔츠 전문점[span_128](end_span)[span_129](end_span)"
        },
        {
            name: "Hat Store Flava",
            category: "잡화/모자",
            benefit: "10% 할인 (일부 제외)",
            hours: "10:00-22:00",
            building: "데포아일랜드 C동 1F",
            tags: ["#모자", "#패션소품", "#선물"],
            [span_130](start_span)[span_131](start_span)desc: "다양한 디자인의 모자 전문점[span_130](end_span)[span_131](end_span)"
        },
        {
            name: "Dazzle",
            category: "의류",
            benefit: "10% 할인",
            hours: "10:00-21:00",
            building: "디스토션 패션빌딩",
            tags: ["#여성의류", "#패션", "#트렌드"],
            [span_132](start_span)[span_133](start_span)desc: "트렌디한 여성 패션 아이템[span_132](end_span)[span_133](end_span)"
        },
        {
            name: "Southern Deli AGOO",
            category: "의류/잡화",
            benefit: "3,000円以上 구매 시 엽서 증정",
            hours: "11:00-19:00",
            building: "데포아일랜드 시사이드 1F",
            tags: ["#T셔츠", "#잡화", "#기념품"],
            [span_134](start_span)[span_135](start_span)desc: "오리지널 티셔츠와 델리[span_134](end_span)[span_135](end_span)"
        },
        {
            name: "SOHO",
            category: "의류/잡화",
            benefit: "3,000円以上 수입 굿즈 증정",
            hours: "11:00-20:00",
            building: "아메리칸 데포 C동 1F",
            tags: ["#밀리터리", "#구제", "#수입의류"],
            [span_136](start_span)[span_137](start_span)desc: "미군 불하품 및 다양한 수입 의류[span_136](end_span)[span_137](end_span)"
        },

        // [액세서리]
        {
            name: "Choshichiya (조칠야) 1호점",
            category: "액세서리",
            benefit: "4,000円以上 구매 시 책갈피 증정",
            hours: "10:00-20:00",
            building: "데포아일랜드 A동 1F",
            tags: ["#호타루유리", "#유리공예", "#액세서리"],
            [span_138](start_span)[span_139](start_span)desc: "오키나와 호타루 유리 공예품[span_138](end_span)[span_139](end_span)"
        },
        {
            name: "AMATSUBU (아마츠부)",
            category: "액세서리",
            benefit: "3,000円以上 5% 할인 (현금만)",
            hours: "12:00-21:00",
            building: "데포아일랜드 A동 1F",
            tags: ["#파워스톤", "#핸드메이드", "#선물"],
            [span_140](start_span)[span_141](start_span)desc: "천연석과 유리를 사용한 핸드메이드 액세서리[span_140](end_span)[span_141](end_span)"
        },
        {
            name: "Southerly",
            category: "액세서리",
            benefit: "10% 할인",
            hours: "11:30-19:30",
            building: "데포아일랜드 시사이드 1F",
            tags: ["#액세서리", "#마린스타일", "#잡화"],
            [span_142](start_span)[span_143](start_span)desc: "바다를 테마로 한 액세서리 숍[span_142](end_span)[span_143](end_span)"
        },
        {
            name: "Splash Okinawa",
            category: "잡화/액세서리",
            benefit: "3,000円以上 구매 시 잡화 증정",
            hours: "10:00-21:30",
            building: "디스토션 패션빌딩 1F",
            tags: ["#오키나와감성", "#소품", "#선물"],
            [span_144](start_span)[span_145](start_span)desc: "오키나와 감성의 아기자기한 소품들[span_144](end_span)[span_145](end_span)"
        },
        {
            name: "Choshichiya (조칠야) 2호점",
            category: "액세서리",
            benefit: "4,000円以上 구매 시 책갈피 증정",
            hours: "11:00-20:00",
            building: "데포 센트럴 1F",
            tags: ["#호타루유리", "#유리공예", "#선물"],
            [span_146](start_span)[span_147](start_span)desc: "호타루 유리 전문점 2호점[span_146](end_span)[span_147](end_span)"
        },
        {
            name: "OHANA",
            category: "액세서리",
            benefit: "2,000円以上 품목당 500엔 할인/포장무료",
            hours: "11:00-21:00",
            building: "데포아일랜드 A동 1F",
            tags: ["#하와이안", "#주얼리", "#커플템"],
            [span_148](start_span)[span_149](start_span)desc: "하와이안 스타일 주얼리[span_148](end_span)[span_149](end_span)"
        },
        {
            name: "Lagoon",
            category: "액세서리",
            benefit: "5% 할인",
            hours: "10:00-21:00",
            building: "데포아일랜드 A동 1F",
            tags: ["#비치스타일", "#액세서리", "#잡화"],
            [span_150](start_span)[span_151](start_span)desc: "해변에 어울리는 다양한 액세서리[span_150](end_span)[span_151](end_span)"
        },

        // [기념품 & 잡화]
        {
            name: "OKINAWA MARKET",
            category: "기념품",
            benefit: "3,000円以上 굿즈 증정",
            hours: "11:00-20:00",
            building: "데포아일랜드 시사이드 1F",
            tags: ["#과자", "#캐릭터", "#선물"],
            [span_152](start_span)[span_153](start_span)desc: "다양한 오키나와 한정 과자와 캐릭터 굿즈[span_152](end_span)[span_153](end_span)"
        },
        {
            name: "Oka no Ipponmatsu",
            category: "기념품",
            benefit: "8,000円以上 무료배송 / 2,500円以上 에코백",
            hours: "10:00-22:00",
            building: "드래곤 팰리스 1F",
            tags: ["#오키나와술", "#특산품", "#식품"],
            [span_154](start_span)[span_155](start_span)desc: "다양한 오키나와 특산품과 주류[span_154](end_span)[span_155](end_span)"
        },
        {
            name: "OKINAWAYA (오키나와야)",
            category: "기념품",
            benefit: "1,000円以上 구매 시 별모래 증정",
            hours: "9:30-21:30",
            building: "아메리칸 데포 A동 1F",
            tags: ["#종합기념품", "#과자", "#잡화"],
            [span_156](start_span)[span_157](start_span)desc: "오키나와 대표 기념품 숍[span_156](end_span)[span_157](end_span)"
        },
        {
            name: "Okinawaya Awamorigura",
            category: "주류",
            benefit: "3,000円以上 미니보틀 증정 등",
            hours: "10:00-21:30",
            building: "아메리칸 데포 A동 1F",
            tags: ["#아와모리", "#소주", "#전통주"],
            [span_158](start_span)[span_159](start_span)desc: "오키나와 전통주 아와모리 전문점[span_158](end_span)[span_159](end_span)"
        },
        {
            name: "Depot Island",
            category: "수입잡화",
            benefit: "3,000円以上 굿즈 증정",
            hours: "10:00-21:00",
            building: "데포아일랜드 A동 1F",
            tags: ["#빈티지", "#미국감성", "#잡화"],
            [span_160](start_span)[span_161](start_span)desc: "아메리칸 빌리지의 상징적인 수입 잡화점[span_160](end_span)[span_161](end_span)"
        },
        {
            name: "American Depot",
            category: "수입잡화",
            benefit: "3,000円以上 굿즈 증정",
            hours: "10:00-21:00",
            building: "아메리칸 데포 A동 1F",
            tags: ["#미국잡화", "#빈티지", "#패션"],
            [span_162](start_span)[span_163](start_span)desc: "미국 직수입 빈티지 의류와 잡화[span_162](end_span)[span_163](end_span)"
        },
        {
            name: "Mihama Glass SORA",
            category: "유리공예",
            benefit: "5,000円以上 소품 케이스 증정",
            hours: "12:00-21:00",
            building: "데포아일랜드 A동 1F",
            tags: ["#유리공예", "#선물", "#반짝반짝"],
            [span_164](start_span)[span_165](start_span)desc: "아름다운 유리 공예품 전문점[span_164](end_span)[span_165](end_span)"
        },
        {
            name: "Kaigansouko 21",
            category: "잡화/화장품",
            benefit: "5% 할인 (현금만, 일부 제외)",
            hours: "10:30-20:00",
            building: "데포아일랜드 B동 1F",
            tags: ["#캐릭터", "#화장품", "#재미있는"],
            [span_166](start_span)[span_167](start_span)desc: "장난감부터 화장품까지 다양한 잡화[span_166](end_span)[span_167](end_span)"
        },
        {
            name: "YAMACHU-HONNPO",
            category: "식품/잡화",
            benefit: "오리지널 키홀더 증정",
            hours: "10:00-20:00",
            building: "데포아일랜드 E동 1F",
            tags: ["#매운맛", "#식품", "#오리지널"],
            [span_168](start_span)[span_169](start_span)desc: "매운 소스와 오키나와 식료품[span_168](end_span)[span_169](end_span)"
        },
        {
            name: "Pineapple Pineapple+ y",
            category: "기념품",
            benefit: "3,000円以上 파인애플 아이스크림 1개",
            hours: "11:00-20:00",
            building: "데포 센트럴 1F",
            tags: ["#파인애플", "#디저트", "#코스메틱"],
            [span_170](start_span)[span_171](start_span)desc: "파인애플을 테마로 한 상품들[span_170](end_span)[span_171](end_span)"
        },
        {
            name: "made in okinawa",
            category: "기념품",
            benefit: "3,000円以上 5% 할인",
            hours: "11:00-19:00",
            building: "데포 센트럴 1F",
            tags: ["#오키나와산", "#식품", "#공예품"],
            [span_172](start_span)[span_173](start_span)desc: "오키나와에서 만든 엄선된 제품들[span_172](end_span)[span_173](end_span)"
        },
        {
            name: "Leather Base",
            category: "가죽공예",
            benefit: "5,000円以上 가방 구매 시 가죽소품",
            hours: "10:00-21:00",
            building: "데포아일랜드 E동 1F",
            tags: ["#가죽", "#핸드메이드", "#지갑"],
            [span_174](start_span)[span_175](start_span)desc: "직접 만드는 가죽 제품 전문점[span_174](end_span)[span_175](end_span)"
        },
        {
            name: "Leather & Wood U.A.STORE",
            category: "공예품",
            benefit: "5,000円以上 키커버 증정",
            hours: "11:00-21:00",
            building: "데포아일랜드 E동 1F",
            tags: ["#가죽", "#나무", "#핸드메이드"],
            [span_176](start_span)[span_177](start_span)desc: "가죽과 나무 소재의 유니크한 아이템[span_176](end_span)[span_177](end_span)"
        },
        {
            name: "CASARINA",
            category: "잡화",
            benefit: "5% 할인",
            hours: "11:00-19:00",
            building: "미하마 51-3",
            tags: ["#리조트룩", "#수영복", "#잡화"],
            [span_178](start_span)[span_179](start_span)desc: "비치웨어와 리조트 잡화[span_178](end_span)[span_179](end_span)"
        },
        {
            name: "Nangoku Zakka TIDA",
            category: "잡화",
            benefit: "1,000円以上 스티커 증정",
            hours: "12:00-19:00",
            building: "레쿠 메인동 1F",
            tags: ["#오키나와디자인", "#문구", "#스티커"],
            [span_180](start_span)[span_181](start_span)desc: "오키나와 아티스트의 굿즈[span_180](end_span)[span_181](end_span)"
        },
        {
            name: "Shurisekkenn (슈리비누)",
            category: "화장품",
            benefit: "스킨케어 샘플 증정",
            hours: "10:00-20:00",
            building: "데포아일랜드 A동 1F",
            tags: ["#천연비누", "#향기", "#스킨케어"],
            [span_182](start_span)[span_183](start_span)desc: "오키나와 식물로 만든 천연 비누[span_182](end_span)[span_183](end_span)"
        },
        {
            name: "OKICHU",
            category: "잡화/신발",
            benefit: "섬조리 구매시 키홀더 증정",
            hours: "11:00-20:00",
            building: "데포아일랜드 E동 1F",
            tags: ["#쪼리", "#커스텀", "#기념품"],
            [span_184](start_span)[span_185](start_span)desc: "발바닥부터 끈까지 내가 고르는 커스텀 섬조리(쪼리)[span_184](end_span)[span_185](end_span)"
        },
        {
            name: "Mihama Glass Kanzashiya",
            category: "액세서리",
            benefit: "3,000円以上 소품 증정",
            hours: "12:00-21:00",
            building: "아메리칸 데포 C동 1F",
            tags: ["#비녀", "#일본전통", "#액세서리"],
            [span_186](start_span)[span_187](start_span)desc: "일본 전통 장신구 칸자시 전문점[span_186](end_span)[span_187](end_span)"
        },
        {
            name: "Ryu Spa Okinawa Cosmetics",
            category: "화장품",
            benefit: "1,100円以上 마스크팩 1매 증정",
            hours: "10:00-21:00",
            building: "데포 센트럴 1F",
            tags: ["#구메지마", "#해양심층수", "#스킨케어"],
            [span_188](start_span)[span_189](start_span)desc: "오키나와 해양심층수 화장품[span_188](end_span)[span_189](end_span)"
        },

        // [액티비티 & 뷰티 & 기타]
        {
            name: "GiGO (구 SEGA)",
            category: "게임센터",
            benefit: "메달 1.5배 증량",
            hours: "10:00-24:00",
            building: "시사이드 스퀘어 1F",
            tags: ["#게임", "#인형뽑기", "#비오는날"],
            [span_190](start_span)[span_191](start_span)desc: "다양한 아케이드 게임과 엔터테인먼트[span_190](end_span)[span_191](end_span)"
        },
        {
            name: "ENAGIC BOWL",
            category: "볼링",
            benefit: "1게임 할인 (일반요금)",
            hours: "10:00-24:00 (주말 09:00~)",
            building: "시사이드 스퀘어 2F",
            tags: ["#볼링", "#오션뷰", "#가족"],
            [span_192](start_span)[span_193](start_span)desc: "바다를 보며 즐기는 볼링[span_192](end_span)[span_193](end_span)"
        },
        {
            name: "JOY JUNGLE",
            category: "게임센터",
            benefit: "메달 20개 증정 / UFO 캐쳐 1회 무료",
            hours: "10:00-24:00",
            building: "드래곤 팰리스",
            tags: ["#게임", "#인형뽑기", "#실내"],
            [span_194](start_span)[span_195](start_span)desc: "가족형 실내 게임 센터[span_194](end_span)[span_195](end_span)"
        },
        {
            name: "Terme VILLA Chula-U",
            category: "온천/수영장",
            benefit: "타월 세트 무료 대여",
            hours: "07:00-23:00",
            building: "미하마 2번지",
            tags: ["#온천", "#수영장", "#힐링"],
            [span_196](start_span)[span_197](start_span)desc: "천연 온천과 야외 수영장을 동시에[span_196](end_span)[span_197](end_span)"
        },
        {
            name: "MAGIC OCEAN",
            category: "공연/엔터",
            benefit: "입장료 할인 (성인 500엔 할인 등)",
            hours: "17:00-23:00",
            building: "데포 센트럴 4F",
            tags: ["#매직쇼", "#공연", "#이색체험"],
            [span_198](start_span)[span_199](start_span)desc: "식사와 함께 즐기는 매직 엔터테인먼트[span_198](end_span)[span_199](end_span)"
        },
        {
            name: "swordfish",
            category: "액티비티",
            benefit: "투어 15% 할인",
            hours: "08:00-20:00",
            building: "온나손 마에다 (외부)",
            tags: ["#스노클링", "#다이빙", "#바다"],
            [span_200](start_span)[span_201](start_span)desc: "푸른 동굴 다이빙 및 바나나 보트 체험[span_200](end_span)[span_201](end_span)"
        },
        {
            name: "SHUHARI BIKE WORKS",
            category: "렌탈",
            benefit: "자전거 렌탈 10% 할인",
            hours: "11:00-18:00 (주말 10:00-19:00)",
            building: "레쿠 프리미어동 1F",
            tags: ["#자전거", "#산책", "#여행"],
            [span_202](start_span)[span_203](start_span)desc: "자전거로 즐기는 아메리칸 빌리지[span_202](end_span)[span_203](end_span)"
        },
        {
            name: "La leia",
            category: "펫호텔",
            benefit: "펫호텔 이용 5% 할인",
            hours: "12:00-19:00",
            building: "미하마 15-31",
            tags: ["#반려동물", "#강아지", "#돌봄"],
            [span_204](start_span)[span_205](start_span)desc: "반려동물 돌봄 서비스[span_204](end_span)[span_205](end_span)"
        },
        {
            name: "Healing forest SHURO",
            category: "뷰티/마사지",
            benefit: "마사지 메뉴 10% 할인",
            hours: "11:00-19:30",
            building: "빌라 차탄 1F",
            tags: ["#마사지", "#에스테", "#힐링"],
            [span_206](start_span)[span_207](start_span)desc: "여행의 피로를 풀어주는 힐링 마사지[span_206](end_span)[span_207](end_span)"
        },
        {
            name: "m-grace's",
            category: "뷰티/에스테",
            benefit: "정가 메뉴 10% 할인",
            hours: "11:00-20:00",
            building: "데포아일랜드 시사이드 2F",
            tags: ["#피부관리", "#뷰티", "#에스테"],
            [span_208](start_span)[span_209](start_span)desc: "토탈 뷰티 케어 살롱[span_208](end_span)[span_209](end_span)"
        },
        {
            name: "Love Nail Okinawa",
            category: "뷰티/네일",
            benefit: "드링크 1잔 서비스",
            hours: "10:00-20:00",
            building: "디스토션 시사이드 3F",
            tags: ["#네일", "#기분전환", "#여행"],
            [span_210](start_span)[span_211](start_span)desc: "오키나와 여행 기념 네일 아트[span_210](end_span)[span_211](end_span)"
        },
        {
            name: "céleste spa",
            category: "뷰티/스파",
            benefit: "쇼트 바디 45분 12,650엔",
            hours: "13:00-22:00",
            building: "레쿠 메인동 8F",
            tags: ["#호텔스파", "#마사지", "#럭셔리"],
            [span_212](start_span)[span_213](start_span)desc: "호텔 내 고급 릴랙세이션 스파[span_212](end_span)[span_213](end_span)"
        }
    ]
};

/* -------------------------------------------------------------------------- */
/* 2. 공통 로직 (Core Logic)                                                 */
/* -------------------------------------------------------------------------- */
const common = {
    currentType: null,      // 'dining' or 'shopping'
    currentTag: 'all',      // 현재 선택된 해시태그
    showOnlyFav: false,     // 찜한 목록만 보기 여부
    myLikes: [],            // 찜한 가게 이름 목록

    // 1. 페이지 초기화
    initPage: function(type) {
        this.currentType = type;
        
        this.loadLikes();           // 찜 목록 로드
        this.renderHashtags(type);  // 해시태그 바 생성
        this.renderList(type);      // 리스트 생성
        
        const searchInput = document.getElementById('searchInput');
        if(searchInput) {
            searchInput.addEventListener('input', () => this.filterData());
        }

        // [중요] 헤더 높이 자동 감지 (지도가 열릴 때 본문 밀어내기)
        this.adjustContentMargin();
    },

    // 2. 레이아웃 자동 조절 (ResizeObserver)
    adjustContentMargin: function() {
        const header = document.getElementById('mainHeader');
        const content = document.querySelector('.content-container');
        
        if (header && content) {
            const resizeObserver = new ResizeObserver(entries => {
                for (let entry of entries) {
                    // 헤더 높이 + 15px 여백을 본문 상단 마진으로 설정
                    content.style.marginTop = (entry.contentRect.height + 15) + 'px';
                }
            });
            resizeObserver.observe(header);
        }
    },

    // 3. 찜(Likes) 기능
    loadLikes: function() {
        const saved = localStorage.getItem('okinawa_likes');
        this.myLikes = saved ? JSON.parse(saved) : [];
    },

    saveLikes: function() {
        localStorage.setItem('okinawa_likes', JSON.stringify(this.myLikes));
    },

    toggleLike: function(storeName, btnElement) {
        if(event) event.stopPropagation();

        const index = this.myLikes.indexOf(storeName);
        if (index === -1) {
            this.myLikes.push(storeName);
            btnElement.classList.add('active');
            btnElement.innerText = "♥"; 
        } else {
            this.myLikes.splice(index, 1);
            btnElement.classList.remove('active');
            btnElement.innerText = "♡"; 
        }
        this.saveLikes();
        if (this.showOnlyFav) this.filterData();
    },

    toggleFavFilter: function(btn) {
        this.showOnlyFav = !this.showOnlyFav;
        btn.classList.toggle('active');
        const label = btn.nextElementSibling;
        if(label) label.innerText = this.showOnlyFav ? "전체보기" : "찜만 보기";
        this.filterData();
    },

    // 4. 해시태그 기능
    renderHashtags: function(type) {
        const container = document.getElementById('hashtagNav');
        if(!container) return;

        const allTags = new Set();
        db[type].forEach(item => {
            if(item.tags) item.tags.forEach(tag => allTags.add(tag));
        });

        let html = `<span class="tag-chip active" onclick="common.filterByTag('all', this)">전체</span>`;
        allTags.forEach(tag => {
            html += `<span class="tag-chip" onclick="common.filterByTag('${tag}', this)">${tag}</span>`;
        });
        container.innerHTML = html;
    },

    filterByTag: function(tag, el) {
        this.currentTag = tag;
        document.querySelectorAll('.tag-chip').forEach(c => c.classList.remove('active'));
        el.classList.add('active');
        this.filterData();
    },

    // 5. 리스트 렌더링
    renderList: function(type) {
        const container = document.getElementById('list-container');
        if(!container) return;

        const dataset = db[type];
        
        // 건물별 그룹화
        const grouped = dataset.reduce((acc, item) => {
            const key = item.building || "기타 건물";
            if (!acc[key]) acc[key] = [];
            acc[key].push(item);
            return acc;
        }, {});

        let html = '';
        if (Object.keys(grouped).length === 0) {
            container.innerHTML = `<div style="text-align:center; padding:50px; color:#999;">데이터 준비중입니다.</div>`;
            return;
        }

        for (const [buildingName, items] of Object.entries(grouped)) {
            const sectionId = `section-${buildingName.replace(/\s+/g, '').replace(/[^a-zA-Z0-9가-힣]/g, '')}`;
            
            html += `<div id="${sectionId}" class="building-section">`;
            html += `<div class="section-header"><span>🏢</span> ${buildingName}</div>`;
            
            items.forEach((item, index) => {
                const uniqueId = `detail-${index}-${Math.random().toString(36).substr(2, 9)}`;
                const isLiked = this.myLikes.includes(item.name);
                const heartIcon = isLiked ? "♥" : "♡";
                const activeClass = isLiked ? "active" : "";
                const tagsHtml = item.tags ? item.tags.map(t => `<span class="badge">${t}</span>`).join('') : '';

                const mapQuery = encodeURIComponent(`오키나와 아메리칸 빌리지 ${item.name}`);
                const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

                html += `
                <div class="card" 
                     data-name="${item.name}" 
                     data-tags="${item.tags ? item.tags.join(',') : ''}"
                     data-hours="${item.hours}"
                     data-fav="${isLiked}">
                    
                    <button class="card-like-btn ${activeClass}" onclick="common.toggleLike('${item.name}', this)">${heartIcon}</button>

                    <div class="card-header">
                        <h3 class="store-name">${item.name}</h3>
                    </div>

                    <div class="store-badges">
                        <span class="badge discount">🎁 ${item.benefit}</span>
                        ${tagsHtml}
                    </div>
                    
                    <div class="card-info">
                         <div class="info-row">🕒 ${item.hours}</div>
                         <div class="info-row">📍 ${item.building}</div>
                    </div>
                    
                    <div class="more-info" id="${uniqueId}">
                        <p>${item.desc || '설명 없음'}</p>
                        <p style="font-size:11px; color:#aaa; margin-top:5px;">* 영업시간 및 혜택은 변동될 수 있습니다.</p>
                    </div>

                    <div class="action-row">
                        <a href="${mapLink}" target="_blank" class="act-btn btn-map">🗺️ 구글지도</a>
                        <div class="act-btn btn-detail" onclick="common.toggleDetail('${uniqueId}', this)">상세정보 ▼</div>
                    </div>
                </div>`;
            });
            html += `</div>`;
        }
        container.innerHTML = html;
        this.filterData(); 
    },

    // 6. 통합 필터링
    filterData: function() {
        const input = document.getElementById('searchInput').value.toLowerCase();
        
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            const name = card.dataset.name.toLowerCase();
            const tags = (card.dataset.tags || "").toLowerCase();
            const isLiked = common.myLikes.includes(card.dataset.name);
            
            let isVisible = true;
            if (input && !name.includes(input) && !tags.includes(input)) isVisible = false;
            if (this.currentTag !== 'all' && !tags.includes(this.currentTag.toLowerCase())) isVisible = false;
            if (this.showOnlyFav && !isLiked) isVisible = false;

            card.style.display = isVisible ? "block" : "none";
        });

        document.querySelectorAll('.building-section').forEach(sec => {
            const cardsInSec = sec.querySelectorAll('.card');
            let hasVisible = false;
            cardsInSec.forEach(c => { if(c.style.display !== 'none') hasVisible = true; });
            sec.style.display = hasVisible ? 'block' : 'none';
        });
    },

    // 7. 유틸리티 (상세정보 토글)
    toggleDetail: function(id, btn) {
        const content = document.getElementById(id);
        if (content.classList.contains('open')) {
            content.classList.remove('open');
            btn.innerText = "상세정보 ▼";
        } else {
            content.classList.add('open');
            btn.innerText = "접기 ▲";
        }
    },
    
    // (선택 사항) 스크롤 이동 함수 - 현재 지도 클릭이 없어졌지만 기능 유지
    scrollToSection: function(id) {
        const target = document.getElementById(id);
        if (target) {
            const headerHeight = document.getElementById('mainHeader').offsetHeight;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - (headerHeight + 10);
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    }
};
