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
                brand: "사카나 AI", 
                title: "사카나 AI, 시스템이 100% 자체 작성한 논문이 사상 첫 '네이처'에 게재", 
                desc: "AI가 연구 아이디어 생성부터 논문 작성, 검증까지 전 과정을 독립적으로 수행해 세계 최고 권위의 학술지 심사를 통과했습니다.", 
                img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400", 
                link: "https://www.aitimes.com/news/articleView.html?idxno=208446", 
                source: "AI타임스",
                insight: "AI의 자율적 문제 해결 능력이 새로운 차원에 도달했습니다. 선행 연구 및 글로벌 트렌드 분석 업무에 이와 같은 자율형 리서치 AI 도입을 조기 테스트해 볼 필요가 있습니다."
            },
            { brand: "앤트로픽", title: "앤트로픽, 사상 최강 모델 '클로드 미소스(Mythos)' 출시 임박", desc: "코드 작성과 복잡한 추론에서 압도적 성능을 보이는 앤트로픽의 차세대 언어모델 '미소스'가 시장의 기대를 모으고 있습니다.", img: "https://images.unsplash.com/photo-1558494949-ef0109121c64?w=400", link: "https://www.aitimes.com/news/articleView.html?idxno=208499", source: "AI타임스" },
            { brand: "하비(Harvey)", title: "법률 AI 대표 하비, 16조 가치로 투자 유치...\"보조 넘어 에이전트로 진화\"", desc: "법률 등 전문 영역에 특화된 AI 스타트업이 거액 투자를 받으며, 단순 문답을 넘어 직접 업무를 수행하는 에이전트 전환을 선언했습니다.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400", link: "https://www.aitimes.com/news/articleView.html?idxno=208498", source: "AI타임스" },
            { brand: "오픈AI", title: "알트먼 \"AI로 '거대한 돌파구'에 집중해야...AGI는 인류 도약의 전 단계일 뿐\"", desc: "샘 알트먼 오픈AI CEO가 단순한 생산성 향상을 넘어 에너지, 의료 등 근본적인 도약을 위한 AI 기술 개발을 역설했습니다.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400", link: "https://www.aitimes.com/news/articleView.html?idxno=207925", source: "AI타임스" },
            { brand: "소프트뱅크", title: "소프트뱅크, 오픈AI 투자 확대 위해 60조 단기 대출...\"1년 내 IPO 승부수\"", desc: "손정의 회장이 오픈AI 지분 확대를 위해 대규모 자금을 조달하며 글로벌 AI 생태계 패권 경쟁에 사활을 걸고 있습니다.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400", link: "https://www.aitimes.com/news/articleView.html?idxno=208497", source: "AI타임스" },
            { brand: "애플", title: "애플, '시리' 대개편 위해 AI 마케팅 부사장으로 구글 베테랑 영입", desc: "애플이 온디바이스 AI 시장의 주도권을 쥐기 위해 구글 출신의 핵심 임원을 전격 영입하며 생태계 확장을 꾀하고 있습니다.", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400", link: "https://www.aitimes.com/news/articleView.html?idxno=208496", source: "AI타임스" },
            { brand: "메타", title: "메타, 기존 안경 착용자를 위한 새로운 폼팩터 AI 안경 출시 예정", desc: "레이밴과의 협업으로 웨어러블 AI 시장을 주도 중인 메타가 시력 교정용 안경 사용자를 겨냥한 신규 모델을 선보입니다.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400", link: "https://www.aitimes.com/news/articleView.html?idxno=208495", source: "AI타임스" },
            { brand: "인터콤", title: "고객지원 특화 AI '에이펙스' 공개...\"맞춤형으로 GPT·클로드 제쳐\"", desc: "고객 응대 CS 분야에 최적화된 전문 AI 모델이 범용 대형언어모델(LLM)보다 높은 성과를 보이며 버티컬 AI의 강세를 보여줍니다.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400", link: "https://www.aitimes.com/news/articleView.html?idxno=208494", source: "AI타임스" },
            { brand: "그래놀라", title: "B2B AI 회의록 '그래놀라', 기업가치 2조원 돌파하며 유니콘 등극", desc: "기업 특화 AI 회의록 서비스 그래놀라가 유니콘 기업 반열에 오르며, 엔터프라이즈 AI 솔루션의 강력한 수익성을 입증했습니다.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400", link: "https://www.aitimes.com/news/articleView.html?idxno=208493", source: "AI타임스" }
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
