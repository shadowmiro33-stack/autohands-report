// data.js
var archiveData = {
    "2026-03-30": {
        issue: "2026 March-NO.33 (Special Edition)",
        video: {
            brand: "테슬라(Tesla)",
            title: "테슬라 FSD 뚫렸다? 한국서도 구매 폭증...테슬라 해킹 대소동?!",
            desc: "국내 테슬라 유저들 사이에서 벌어진 FSD 구매 소동과 해킹 이슈의 전말 긴급 분석 영상입니다.",
            url: "https://youtu.be/JMbguxdvwqY?si=BygV0-TRJtLVAw63",
            source: "김한용의 Mocha"
        },
        main: {
            isImportant: true,
            brand: "현대자동차",
            title: "현대차, 주총서 '렌터카 사업' 공식 진출... 모빌리티 판도 흔드는 수직계열화",
            desc: "3월 26일 현대자동차 정관에 '자동차 대여 사업' 추가. 단순 제조를 넘어 차량 생애주기 전체를 직접 관리하는 통합 플랫폼 전략이 본격화되었습니다.",
            img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800",
            link: "https://www.econovill.com/news/articleView.html?idxno=734918",
            source: "이코노믹리뷰",
        },
        // 💡 AI 파트 전면 개편 (AI타임스 최신 기사 중심)
        ai: [
            { 
                isImportant: true, 
                brand: "구글", 
                title: "구글 '터보퀀트' 충격으로 메모리 시총 150조 증발...\"제2의 딥시크 사태인가\"", 
                desc: "구글이 AI 메모리 사용량을 대폭 줄이는 신기술 '터보퀀트'를 공개하며 글로벌 반도체 및 클라우드 시장이 크게 요동치고 있습니다.", 
                img: "https://images.unsplash.com/photo-1591405351990-4726e331f141?w=400", 
                link: "https://www.aitimes.com/news/articleView.html?idxno=208500", 
                source: "AI타임스",
                insight: "데이터센터 유지 비용을 획기적으로 낮출 수 있는 혁신입니다. 당사의 대규모 모빌리티 데이터 분석 인프라(R&D) 구축 시, 기존 대비 클라우드 아키텍처 및 비용 산정 로직을 전면 재검토하여 예산을 절감해야 할 시점입니다."
            },
            {
                isImportant: true, 
                brand: "OpenAI", 
                title: "오픈AI, 스스로 추론하는 'GPT-5' 올 여름 출시... 인간 지능 육박하나", 
                desc: "단순 다음 단어 예측을 넘어 논리적 추론 과정을 거치는 차세대 LLM이 공개를 앞두고 있습니다.", 
                img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400", 
                link: "https://www.zdnet.co.kr/view/?no=20260328091000", 
                source: "지디넷코리아",
                insight: "추론 능력이 강화된 모델은 당사가 추진 중인 '지능형 고객 대응 시스템'의 복잡한 예외 상황 처리 능력을 획기적으로 높일 수 있습니다. 출시 즉시 API 연동 테스트가 필요합니다."
            },
            { 
                isImportant: true, 
                brand: "구글", 
                title: "구글, AI 메모리 효율 10배 높인 '터보퀀트' 신기술 공개", 
                desc: "AI 구동 시 발생하는 막대한 메모리 부하를 줄여 저사양 기기에서도 고성능 AI를 돌릴 수 있는 기술입니다.", 
                img: "https://images.unsplash.com/photo-1591405351990-4726e331f141?w=400", 
                link: "https://www.yna.co.kr/view/AKR20260327109100003", 
                source: "연합뉴스",
                insight: "온디바이스 AI 트렌드에 대응하기 위한 핵심 기술입니다. 당사 모바일 앱 내에 가벼운 AI 기능을 탑재할 때 클라우드 비용을 절감할 수 있는 전략적 대안이 될 수 있습니다."
            },
            { brand: "삼성전자", title: "삼성전자, 'AI 비서' 탑재한 일체형 가전 전격 공개", desc: "사용자의 습관을 학습하여 스스로 동작하는 진정한 의미의 스마트 가전 시대가 열렸습니다.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400", link: "https://www.chosun.com/economy/tech_it/2026/03/26/OSLKWJUQMZDAVIQJPFHE36SNFU/", source: "조선일보" },
            { brand: "미디어로그", title: "AI 에이전트, 고객 상담 넘어 직접 계약까지 척척", desc: "단순 문답 수준을 벗어나 본인 인증과 서류 검토까지 수행하는 AI 에이전트 서비스가 상용화되었습니다.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400", link: "https://www.aitimes.com/news/articleView.html?idxno=208500", source: "AI타임스" },
            { brand: "테크크런치", title: "생성형 AI 검색 '퍼플렉시티', 유료 구독자 100만 명 돌파", desc: "전통적인 키워드 검색 방식에서 대화형 답변 방식으로 검색 시장의 패러다임이 빠르게 이동 중입니다.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400", link: "https://techcrunch.com/2026/03/perplexity-milestone", source: "TechCrunch" },
            { brand: "행안부", title: "정부, '공공부문 AI 도입 가이드라인' 확정 발표", desc: "공공 서비스 혁신을 위해 민간 기업의 AI 솔루션을 적극 도입하기 위한 표준 절차가 마련되었습니다.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400", link: "https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?nttId=124639", source: "행정안전부" }
        ],
        auto: [
            { 
                isImportant: true,
                brand: "K-Car", 
                title: "4월 개인 직거래(C2C) 베타 오픈", 
                desc: "직영 인프라를 개인 간 거래 시장으로 확장하여 유효 시장을 넓힙니다.", 
                img: "https://dtd31o1ybbmk8.cloudfront.net/photos/12c9c849d7f9a747c11d310a3592f9f5/thumb.png", 
                link: "https://www.digitaltoday.co.kr/news/articleView.html?idxno=646893", 
                source: "디지털투데이",
              
            },
            { brand: "엔카(Encar)", title: "성수 팝업 '엔카라지' 성료", desc: "중고차 거래 전 과정을 오프라인 체험으로 풀어낸 혁신 사례입니다.", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400", link: "https://www.mk.co.kr/news/business/11997601", source: "매일경제" },
            { brand: "쏘카(Socar)", title: "프리미엄 '블랙라벨' 100대 확충", desc: "수입차 라인업 확대로 법인 및 장거리 수요를 선점했습니다.", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400", link: "https://platum.kr/archives/283833", source: "플래텀" },
            { brand: "리본카", title: "RQI 리포트 투명 공개 전략", desc: "196가지 세부 점검 항목을 투명하게 고지하여 신뢰도를 높입니다.", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400", link: "https://biz.heraldcorp.com/article/10698220", source: "헤럴드경제" },
            { brand: "차봇", title: "FT '아태 고성장 기업' 3년 연속 선정", desc: "국내 IT/SW 부문 15위에 오르며 강력한 성장성을 입증했습니다.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400", link: "https://v.daum.net/v/xLghLWzttd", source: "한스경제" },
            { brand: "헤이딜러", title: "한국타이어와 중고차 타이어 공급 협력", desc: "인증 중고차의 상품화 품질 제고를 위해 타이어 기업과 협력합니다.", img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400", link: "https://www.yna.co.kr/view/AKR20260317120300003", source: "연합뉴스" },
            { brand: "현대캐피탈", title: "기아 인증중고차 전용 2.9% 저금리", desc: "캡티브 금융사의 자본력을 활용한 공격적 마케팅입니다.", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400", link: "https://www.hyundaimotorgroup.com/ko/news/CONT0000000000206594", source: "현대차그룹" },
            { brand: "카바나(Carvana)", title: "미국 카바나 주식 분할 결정", desc: "물류 효율화와 수익성 개선을 기반으로 이커머스 패권을 공고히 합니다.", img: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400", link: "https://investors.carvana.com/news-releases/2026", source: "Carvana IR" },
            { brand: "투루카", title: "주말 전 차종 50% 할인 공세", desc: "휴맥스 인프라를 활용해 점유율 확대를 꾀하고 있습니다.", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400", link: "https://www.digitaltoday.co.kr/news/articleView.html?idxno=642720", source: "디지털투데이" },
            { brand: "카와우(Carwow)", title: "영국 카와우 온라인 판매 채널 확대", desc: "온라인 플랫폼과 오프라인 딜러의 상생 모델을 구축했습니다.", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400", link: "https://www.carwow.co.uk/news", source: "Carwow News" }
        ]
    }
};
