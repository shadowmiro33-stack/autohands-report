// data.js
var archiveData = {
    "2026-03-30": {
        issue: "2026 March-NO.33",
        video: {
            title: "테슬라 FSD 뚫렸다? 한국서도 구매 폭증...테슬라 해킹 대소동?!",
            desc: "국내 테슬라 유저들 사이에서 벌어진 FSD 구매 소동과 해킹 이슈의 전말 긴급 분석 영상입니다.",
            url: "https://youtu.be/JMbguxdvwqY?si=BygV0-TRJtLVAw63",
            source: "김한용의 Mocha"
        },
        main: {
            title: "현대차, 주총서 '렌터카 사업' 공식 진출... 모빌리티 판도 흔드는 수직계열화",
            desc: "3월 26일 현대자동차 정관에 '자동차 대여 사업' 추가. 단순 제조를 넘어 차량 생애주기 전체를 직접 관리하는 통합 플랫폼 전략이 본격화되었습니다.",
            img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800",
            link: "https://www.econovill.com/news/articleView.html?idxno=734918",
            source: "이코노믹리뷰"
        },
        ai: [
            { title: "하네스 엔지니어링: AI 코딩 100% 시대", desc: "코딩 문법보다 AI에게 명확한 맥락을 제시하고 검증하는 역량이 필수화되었습니다.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400", link: "https://www.chosun.com/economy/tech_it/2026/03/16/N6DM6IKF7NFHHCVB7OMSSDUWBU/", source: "조선일보" },
            { title: "삼성전자 HBM 공급망 전략 변화", desc: "HBM4 공급 로드맵과 함께 글로벌 빅테크들의 수급 경쟁이 심화되고 있습니다.", img: "https://images.unsplash.com/photo-1591405351990-4726e331f141?w=400", link: "http://www.e-today.kr/news/articleView.html?idxno=909651", source: "경제투데이" },
            { title: "에이전틱 AI 시대의 커머스 미래", desc: "AI 에이전트가 직접 판단하고 거래를 실행하는 '에이전틱 커머스'가 부상 중입니다.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400", link: "https://www.deloitte.com/kr/ko/Industries/financial-services/perspectives/future-of-commerce-agentic-ai.html", source: "Deloitte Korea" },
            { title: "구글 '터보퀀트' 신기술 공개", desc: "AI 메모리 사용량을 획기적으로 줄여주는 신기술로 반도체 생태계가 요동치고 있습니다.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400", link: "https://www.yna.co.kr/view/AKR20260327109100003", source: "연합뉴스" },
            { title: "무언(無言) AI 인터페이스", desc: "음성 인식 한계를 극복하기 위해 입 모양 등 비언어적 수단을 활용하는 방식입니다.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400", link: "https://www.chosun.com/economy/tech_it/2026/03/26/OSLKWJUQMZDAVIQJPFHE36SNFU/", source: "조선일보" },
            { title: "AI 법(AI Act) 본격화", desc: "기술 발전과 사회적 책임 사이의 균형을 찾기 위한 글로벌 규제가 안착 중입니다.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400", link: "https://www.benews.co.kr/news/476424", source: "브랜드경제신문" },
            { title: "데이터 엔지니어링: 에이전트 중심 설계", desc: "에이전트가 기본 사용자로 작동하는 환경을 전제로 한 인프라 설계가 핵심 과제입니다.", img: "https://images.unsplash.com/photo-1558494949-ef0109121c64?w=400", link: "https://news.hada.io/topic?id=26155", source: "GeekNews" },
            { title: "피지컬 AI: 물리 세계 학습 자율주행", desc: "물리적 환경을 정밀하게 시뮬레이션하고 제어하는 기술이 상용화 단계입니다.", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400", link: "https://www.chosun.com/economy/tech_it/2026/03/26/VYYVTBNDRFHD7E44N6XKAJVSLU/", source: "조선일보" },
            { title: "공공부문 AI 혁신 가속: 행안부 사례", desc: "공공 서비스와 민간 솔루션 간의 결합이 활발해지고 있습니다.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400", link: "https://mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&nttId=124639", source: "행정안전부" },
            { title: "AI 고용 플랫폼 성과", desc: "AI 알고리즘을 통한 직무 역량 분석으로 일자리 미스매치 문제를 해결합니다.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400", link: "https://www.chosun.com/national/education/2026/03/27/FTO23AZ3R5GGRDJINLLZUMZBH4/", source: "조선일보" }
        ],
        auto: [
            { cat: "Encar", title: "성수 팝업 '엔카라지' 성료", desc: "중고차 거래 전 과정을 오프라인 체험으로 풀어낸 혁신 사례입니다.", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400", link: "https://www.mk.co.kr/news/business/11997601", source: "매일경제" },
            { cat: "K-Car", title: "4월 개인 직거래(C2C) 베타 오픈", desc: "직영 인프라를 개인 간 거래 시장으로 확장하여 유효 시장을 넓힙니다.", img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400", link: "https://www.digitaltoday.co.kr/news/articleView.html?idxno=646893", source: "디지털투데이" },
            { cat: "Socar", title: "프리미엄 '블랙라벨' 100대 확충", desc: "수입차 라인업 확대로 법인 및 장거리 수요를 선점했습니다.", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400", link: "https://platum.kr/archives/283833", source: "플래텀" },
            { cat: "리본카", title: "RQI 리포트 투명 공개 전략", desc: "196가지 세부 점검 항목을 투명하게 고지하여 신뢰도를 높입니다.", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400", link: "https://biz.heraldcorp.com/article/10698220", source: "헤럴드경제" },
            { cat: "차봇", title: "FT '아태 고성장 기업' 3년 연속 선정", desc: "국내 IT/SW 부문 15위에 오르며 강력한 성장성을 입증했습니다.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400", link: "https://v.daum.net/v/xLghLWzttd", source: "한스경제" },
            { cat: "헤이딜러", title: "한국타이어와 중고차 타이어 공급 협력", desc: "인증 중고차의 상품화 품질 제고를 위해 타이어 기업과 협력합니다.", img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400", link: "https://www.yna.co.kr/view/AKR20260317120300003", source: "연합뉴스" },
            { cat: "현대캐피탈", title: "기아 인증중고차 전용 2.9% 저금리", desc: "캡티브 금융사의 자본력을 활용한 공격적 마케팅입니다.", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400", link: "https://www.hyundaimotorgroup.com/ko/news/CONT0000000000206594", source: "현대차그룹" },
            { cat: "Carvana", title: "미국 카바나 주식 분할 결정", desc: "물류 효율화와 수익성 개선을 기반으로 이커머스 패권을 공고히 합니다.", img: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400", link: "https://investors.carvana.com/news-releases/2026", source: "Carvana IR" },
            { cat: "투루카", title: "주말 전 차종 50% 할인 공세", desc: "휴맥스 인프라를 활용해 점유율 확대를 꾀하고 있습니다.", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400", link: "https://www.digitaltoday.co.kr/news/articleView.html?idxno=642720", source: "디지털투데이" },
            { cat: "Carwow", title: "영국 카와우 온라인 판매 채널 확대", desc: "온라인 플랫폼과 오프라인 딜러의 상생 모델을 구축했습니다.", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400", link: "https://www.carwow.co.uk/news", source: "Carwow News" }
        ]
    }
};
