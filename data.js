const reportData = {
    issue: "2026 March-NO.33 (Special Edition)",
    date: "2026.03.30",
    main: {
        title: "현대차, 주총서 '렌터카 사업' 공식화... 모빌리티 판도 흔드는 수직계열화",
        desc: "3월 26일 현대자동차가 자동차 대여 사업을 정관에 추가하며 10조 규모 시장에 진출했습니다. 제조-구독-인증중고차로 이어지는 통합 생태계 구축으로 쏘카, 롯데 등 기존 강자들과의 무한 경쟁이 시작되었습니다.",
        img: "https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202603/26/edaily/20260326105820464jymx.jpg",
        link: "https://v.daum.net/v/XiaDoLIkE8"
    },
    // [AI TECH] 핵심 기술 동향 10선
    ai: [
        { title: "하네스 엔지니어링: AI 코딩 100% 시대의 도래", desc: "단순 코딩을 넘어 AI의 결과물을 최적화하는 새로운 개발자 역량이 부상 중입니다.", img: "https://www.chosun.com/resizer/v2/CW7ZIDFSHRBCLHXIFR27M57A7I.jpg?auth=d0c81e707e5b449aece2e02604af52b3032e061944d75e4532f0a8a91a4d96bc&width=616" },
        { title: "맞춤형 HBM: AI 메모리 병목 현상의 종결자", desc: "삼성·SK가 주도하는 맞춤형 HBM 생태계가 AI 하드웨어 혁신을 이끌고 있습니다.", img: "https://images.unsplash.com/photo-1591405351990-4726e331f141?w=400" },
        { title: "에이전트 AI: 수동적 챗봇에서 '자율적 동료'로", desc: "사용자의 복잡한 목표를 이해하고 소프트웨어를 직접 조작하는 에이전틱 AI가 확산 중입니다.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400" },
        { title: "비언어 인터페이스: 뇌파와 입 모양으로 내리는 AI 명령", desc: "음성 인식의 한계를 돌파하는 새로운 인터페이스 기술이 빅테크의 핵심 전장이 되었습니다.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400" },
        { title: "소버린 AI 팩토리: 국가 단위 데이터 주권 인프라 구축", desc: "한국형 데이터센터와 클라우드가 결합된 소버린 AI 생태계가 본격 가동을 시작했습니다.", img: "https://images.unsplash.com/photo-1558494949-ef0109121c64?w=400" },
        { title: "피지컬 AI: 물리 세계를 학습하는 월드 모델의 진화", desc: "물리학을 이해하고 미래를 예측하는 AI가 자율주행과 로봇 공학의 핵심으로 자리 잡았습니다.", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400" },
        { title: "AI 법(AI Act) 시행: 규제가 가이드라인이 되는 시대", desc: "EU를 필두로 고위험 AI에 대한 강력한 보안 및 책임 규제가 산업 표준으로 정착 중입니다.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400" },
        { title: "멀티모달 고도화: 텍스트를 넘어 영상·음성 동시 처리", desc: "AI 모델의 인지 밀도가 급상승하며 인간 수준의 복합 추론이 가능해졌습니다.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400" },
        { title: "데이터센터 냉각 혁신: AI 서버 열 잡는 액체 냉각 기술", desc: "전력 소비를 20% 이상 절감하는 차세대 쿨링 기술 도입이 데이터센터 시장의 화두입니다.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400" },
        { title: "AI 고용 서비스: 하루 57명의 취업을 연결하는 AI", desc: "청년과 기업을 정밀 매칭하는 공공 부문의 AI 고용 서비스가 가시적인 성과를 내고 있습니다.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400" }
    ],
    // [AUTO TREND] 차량 플랫폼 및 업체 동향 10선
    auto: [
        { cat: "엔카(Encar)", title: "성수동 팝업 '엔카라지' 성공... MZ 소통 강화", desc: "일주일간 1만 명 방문. 3월 중고차 브랜드 평판 1위 수성의 결정적 계기가 되었습니다.", img: "https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202603/25/fnnewsi/20260325091728514iwdq.jpg", link: "https://v.daum.net/v/ujRRrisATD" },
        { cat: "케이카(K-Car)", title: "4월 개인 직거래(C2C) 서비스 전격 론칭", desc: "직영의 신뢰를 C2C로 확장하여 불투명한 중고차 직거래 시장을 혁신한다는 전략입니다.", img: "https://dtd31o1ybbmk8.cloudfront.net/photos/12c9c849d7f9a747c11d310a3592f9f5/thumb.png", link: "https://www.digitaltoday.co.kr/news/articleView.html?idxno=646893" },
        { cat: "쏘카(Socar)", title: "프리미엄 '블랙라벨' 100대 확충... 흑자 안착", desc: "수입차 라인업 확대로 대당 이익률을 제고하며 모빌리티 플랫폼의 자생력을 증명했습니다.", img: "https://image.zdnet.co.kr/2026/03/19/2711ff60e2a3901b0f5cd8213813e390.jpg", link: "https://zdnet.co.kr/view/?no=20260319092151" },
        { cat: "Carvana", title: "카바나, 5대 1 주식 분할로 시장 지배력 과시", desc: "수익성 개선을 바탕으로 물류 인프라 투자를 확대하며 글로벌 중고차 이커머스 선두를 굳혔습니다.", img: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400", link: "https://investors.carvana.com/news-releases/2026" },
        { cat: "리본카", title: "투명 품질 리포트 효과... 온라인 판매 41% 급증", desc: "196가지 세부 항목 고지로 '정보 비대칭'을 해소한 것이 비대면 구매 신뢰로 이어졌습니다.", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400", link: "https://www.newstap.co.kr/news/articleView.html?idxno=324493" },
        { cat: "차봇", title: "FT 선정 '아태 고성장 기업' 3년 연속 등재", desc: "IT/SW 부문 국내 15위. 금융과 보험을 융합한 오토커머스 플랫폼의 강력한 수익성을 입증했습니다.", img: "https://image.zdnet.co.kr/2026/03/18/dd92851885cddf055829ff452e03e897.jpg", link: "https://zdnet.co.kr/view/?no=20260318091834" },
        { cat: "현대캐피탈", title: "기아 인증중고차 전용 '2.9% 저금리' 론칭", desc: "강력한 자본력을 바탕으로 금리 혜택을 제공하며 일반 단지와의 경쟁 우위를 선점했습니다.", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400", link: "https://www.hyundaimotorgroup.com/ko/news/CONT0000000000206594" },
        { cat: "렌터카", title: "공정위, 롯데-SK 기업 결합 최종 불허 결정", desc: "1, 2위 업체의 결합이 시장 경쟁을 해친다는 판단 하에 불허되면서 시장 재편의 새 국면이 열렸습니다.", img: "https://images.unsplash.com/photo-1554260570-9140fd3b7614?w=400", link: "https://www.youtube.com/watch?v=ExLPPFmHkDc" },
        { cat: "헤이딜러", title: "IPO 전 200억 규모 구주 거래... 몸값 재평가", desc: "상장을 앞두고 지분 구조를 정리하며 시장의 높은 기대감을 반영하고 있습니다.", img: "https://cdn.newstopkorea.com/news/photo/202602/43064_43404_5553.png", link: "https://www.newstopkorea.com/news/articleView.html?idxno=43064" },
        { cat: "글로벌", title: "포르쉐, 영국 Carwow와 온라인 판매 협력", desc: "완성차 제조사가 플랫폼과의 직접 제휴를 통해 디지털 채널을 장악하려는 트렌드가 확산 중입니다.", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400", link: "https://www.carwow.co.uk/news" }
    ]
};
