/**
 * Okinaw American Village Coupon Map Logic
 * Updated for: Multi-Page Structure (index.html / shopping.html)
 */

/* -------------------------------------------------------------------------- */
/* 1. 데이터베이스 (PDF Source 기반)                                           */
/* -------------------------------------------------------------------------- */
const db = {
    // 🍽️ 식당 데이터 
    dining: [
        {
            name: "힐튼 뷔페 레스토랑 '수리윤'",
            category: "뷔페/호텔",
            benefit: "계산 시 15% 할인 (런치/디너)",
            hours: "11:30-15:00 / 17:30-21:30",
            building: "힐튼 오키나와 차탄 리조트",
            desc: "대절이나 정기휴일 등 이용 불가할 수 있으므로 사전 예약 권장."
        },
        {
            name: "이탈리안 레스토랑 '코렌테'",
            category: "이탈리안",
            benefit: "계산 시 15% 할인 (런치/디너)",
            hours: "11:30-15:00 / 17:30-22:30",
            building: "힐튼 오키나와 차탄 리조트",
            desc: "대절이나 정기휴일 등 이용 불가할 수 있음."
        },
        {
            name: "타코라이스 Cafe 키지무나",
            category: "타코라이스",
            benefit: "식사 고객 코카콜라 소프트 드링크 1잔 서비스 (8명까지)",
            hours: "11:00-22:00",
            building: "데포아일랜드 C동",
            desc: "오키나와 소울푸드 타코라이스 전문점"
        },
        {
            name: "JUMBO STEAK HAN'S (미하마점)",
            category: "스테이크",
            benefit: "계산 시 10% 할인",
            hours: "11:00-23:00",
            building: "데포아일랜드 A동",
            desc: "아메리칸 빌리지의 대표적인 점보 스테이크 하우스"
        },
        {
            name: "스테이크 하우스 88",
            category: "스테이크",
            benefit: "드링크바 1잔 무료",
            hours: "11:00-23:00",
            building: "데포아일랜드 A동", 
            desc: "오키나와 노포 스테이크 전문점"
        },
        {
            name: "발리우드 드림스",
            category: "인도 커리",
            benefit: "계산 시 10% 할인",
            hours: "11:00-21:00",
            building: "데포아일랜드 A동",
            desc: "본격 인도 카레 전문점"
        },
        {
            name: "블루씰 (BLUE SEAL)",
            category: "디저트/아이스크림",
            benefit: "싱글 아이스 구매 시 주니어 스쿱 서비스",
            hours: "11:00-21:00",
            building: "데포아일랜드 시사이드",
            desc: "오키나와 필수 코스 아이스크림"
        },
        {
            name: "ZHYVAGO COFFEE ROASTERY",
            category: "카페",
            benefit: "계산 시 10% 할인 (레쿠 호텔 투숙객 한정)",
            hours: "07:00-22:00",
            building: "레쿠(LeQu) 프리미어동",
            desc: "해안가 분위기가 좋은 로스터리 카페"
        },
        {
            name: "포크팜 (Pocke Farm)",
            category: "카페/식사",
            benefit: "소프트 드링크 단품 100엔 할인",
            hours: "10:00-21:00",
            building: "아메리칸 데포 B동",
            desc: "가벼운 식사와 음료"
        },
        {
            name: "레드 랍스터",
            category: "씨푸드",
            benefit: "글라스 맥주/와인 또는 리필 드링크 서비스",
            hours: "11:00-22:00",
            building: "미하마 8-10",
            desc: "전 세계적인 씨푸드 레스토랑 체인"
        }
        // ... 식당 데이터 추가 필요 시 여기에 계속 추가
    ],

    // 🛍️ 쇼핑 & 액티비티 데이터 
    shopping: [
        {
            name: "RUN OKI (런 오키)",
            category: "의류/티셔츠",
            benefit: "계산 시 10% 할인 (세일 상품 제외)",
            hours: "10:00-21:00",
            building: "데포아일랜드 B동",
            desc: "오키나와 오리지널 티셔츠 브랜드"
        },
        {
            name: "Respect (리스펙트)",
            category: "캐주얼 의류",
            benefit: "계산 시 5% 할인 (세일품 및 신발 제외)",
            hours: "11:00-21:00",
            building: "시사이드 스퀘어",
            desc: "캐주얼 패션 전문점"
        },
        {
            name: "오키나와 마켓",
            category: "기념품/과자",
            benefit: "3,000엔 이상 구매 시 굿즈 증정",
            hours: "11:00-20:00",
            building: "데포아일랜드 시사이드",
            desc: "오키나와 한정 과자 및 캐릭터 굿즈"
        },
        {
            name: "GiGO (구 SEGA)",
            category: "게임센터",
            benefit: "메달 대출 매수 1.5배 증량",
            hours: "10:00-24:00",
            building: "시사이드 스퀘어",
            desc: "다양한 아케이드 게임과 인형뽑기"
        },
        {
            name: "테르메 빌라 츄라유",
            category: "온천/수영장",
            benefit: "배스타월 및 페이스타월 무료 대여",
            hours: "07:00-23:00",
            building: "미하마 2번지",
            desc: "천연 온천과 야외 수영장"
        },
        {
            name: "마직 오션 (MAGIC OCEAN)",
            category: "엔터테인먼트",
            benefit: "입장료 할인 (성인 500엔 할인 등)",
            hours: "17:00-23:00",
            building: "데포 센트럴",
            desc: "식사를 하며 즐기는 매직 쇼"
        },
        {
            name: "Healing forest SHURO",
            category: "에스테틱/마사지",
            benefit: "시술 메뉴 10% 할인",
            hours: "11:00-19:30",
            building: "빌라 차탄 1층",
            desc: "여행의 피로를 풀어주는 힐링 마사지"
        },
        {
            name: "오키츄 (OKICHU)",
            category: "신발/잡화",
            benefit: "오리지널 섬조리 구매+가공 주문 시 키홀더 증정",
            hours: "11:00-20:00",
            building: "데포아일랜드 E동",
            desc: "나만의 오리지널 쪼리 만들기"
        },
        {
            name: "Depot Island (데포 아일랜드)",
            category: "수입 잡화",
            benefit: "3,000엔 이상 구매 시 수입 굿즈 증정",
            hours: "10:00-21:00",
            building: "데포아일랜드 A동",
            desc: "아메리칸 스타일의 수입 잡화점"
        }
        // ... 쇼핑 데이터 추가 필요 시 여기에 계속 추가
    ]
};

/* -------------------------------------------------------------------------- */
/* 2. 공통 로직 (Common Logic)                                                */
/* -------------------------------------------------------------------------- */
const common = {
    currentType: null, // 현재 페이지 타입 ('dining' or 'shopping')

    // [New] 페이지 초기화 함수
    initPage: function(type) {
        this.currentType = type;
        
        // 1. 리스트 렌더링
        this.renderList(type);
        
        // 2. 건물 네비게이션 칩 생성
        this.generateNavChips(type);
        
        // 3. 검색창 이벤트 연결
        const searchInput = document.getElementById('searchInput');
        if(searchInput) {
            searchInput.addEventListener('input', () => this.filterData());
        }
    },

    // 리스트 렌더링 (Target ID가 'list-container'로 통일됨)
    renderList: function(type) {
        const container = document.getElementById('list-container');
        if(!container) return; // 컨테이너가 없으면 중단

        const dataset = db[type];
        
        // 건물별 그룹화
        const grouped = dataset.reduce((acc, item) => {
            const key = item.building || "기타 건물";
            if (!acc[key]) acc[key] = [];
            acc[key].push(item);
            return acc;
        }, {});

        let html = '';
        
        // 데이터 없음 처리
        if (Object.keys(grouped).length === 0) {
            container.innerHTML = `<div style="text-align:center; padding:50px; color:#999;">데이터를 준비중입니다.</div>`;
            return;
        }

        // HTML 생성
        for (const [buildingName, items] of Object.entries(grouped)) {
            // 섹션 ID 생성 (특수문자 제거)
            const sectionId = `section-${buildingName.replace(/\s+/g, '').replace(/[^a-zA-Z0-9가-힣]/g, '')}`;
            
            html += `<div id="${sectionId}" class="building-section">`;
            html += `<div class="section-header">${buildingName}</div>`;
            
            items.forEach((item, index) => {
                const uniqueId = `detail-${index}-${Math.random().toString(36).substr(2, 9)}`;
                // 구글 맵 검색 쿼리
                const mapQuery = encodeURIComponent(`오키나와 아메리칸 빌리지 ${item.name}`);
                const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

                html += `
                <div class="card" data-name="${item.name}" data-category="${item.category}" data-building="${buildingName}" data-hours="${item.hours}">
                    <div class="card-top">
                        <h3 class="store-name">${item.name}</h3>
                        <span class="store-cat">${item.category}</span>
                    </div>
                    <div class="benefit-badge">🎁 ${item.benefit}</div>
                    <div class="card-info">
                        <div class="info-row">🕒 ${item.hours}</div>
                        <div class="info-row">📍 ${item.building}</div>
                    </div>
                    
                    <div class="more-details" id="${uniqueId}">
                        <p>${item.desc || '추가 설명이 없습니다.'}</p>
                        <p style="font-size:12px; color:#888; margin-top:5px;">※ 혜택 내용은 매장 사정에 따라 변경될 수 있습니다.</p>
                    </div>

                    <div class="action-area">
                        <a href="${mapLink}" target="_blank" class="btn-map">
                            🗺️ 지도 보기
                        </a>
                        <button class="btn-toggle" onclick="common.toggleDetail('${uniqueId}', this)">
                            상세정보 ▼
                        </button>
                    </div>
                </div>`;
            });
            html += `</div>`;
        }

        container.innerHTML = html;
    },

    // 네비게이션 칩 생성
    generateNavChips: function(type) {
        const navContainer = document.getElementById('buildingNav');
        if(!navContainer) return;

        const dataset = db[type];
        // 중복 제거된 건물명 리스트
        const buildings = [...new Set(dataset.map(item => item.building || "기타"))].sort();
        
        let html = `<a onclick="common.scrollToSection('top', this)" class="chip active">전체</a>`;
        
        buildings.forEach(b => {
            const sectionId = `section-${b.replace(/\s+/g, '').replace(/[^a-zA-Z0-9가-힣]/g, '')}`;
            html += `<a onclick="common.scrollToSection('${sectionId}', this)" class="chip">${b}</a>`;
        });

        navContainer.innerHTML = html;
    },

    // 스크롤 이동
    scrollToSection: function(id, el) {
        // 칩 스타일 활성화
        if (el) {
            document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            el.classList.add('active');
        }

        if (id === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const target = document.getElementById(id);
        if (target) {
            const headerOffset = 160; // 헤더 높이 보정
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    },

    // 아코디언 토글
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

    // 검색 및 필터링
    filterData: function() {
        const input = document.getElementById('searchInput').value.toLowerCase();
        // 영업중 토글 확인 (UI상 class 'active' 확인)
        const toggleBtn = document.querySelector('.filter-toggle');
        const onlyOpen = toggleBtn && toggleBtn.classList.contains('active');
        
        // 현재 리스트 컨테이너 내의 모든 카드 검색
        const cards = document.querySelectorAll('#list-container .card');
        
        cards.forEach(card => {
            const text = (card.dataset.name + card.dataset.category + card.dataset.building).toLowerCase();
            const hoursStr = card.dataset.hours;
            let isVisible = true;

            // 1. 검색어 체크
            if (!text.includes(input)) {
                isVisible = false;
            }

            // 2. 영업중 체크
            if (isVisible && onlyOpen) {
                if (!this.checkIsOpen(hoursStr)) {
                    isVisible = false;
                }
            }

            card.style.display = isVisible ? "block" : "none";
        });

        // 카드가 하나도 없는 섹션 숨김 처리
        document.querySelectorAll('.building-section').forEach(sec => {
            const cardsInSection = sec.querySelectorAll('.card');
            let hasVisibleCard = false;
            cardsInSection.forEach(c => {
                if(c.style.display !== 'none') hasVisibleCard = true;
            });
            sec.style.display = hasVisibleCard ? 'block' : 'none';
        });
    },

    // 영업시간 체크 (단순 버전)
    checkIsOpen: function(hoursStr) {
        if (!hoursStr) return true; 
        
        const now = new Date();
        const currentHour = now.getHours();
        const currentMin = now.getMinutes();
        const currentTime = currentHour * 60 + currentMin;

        // "11:00-22:00" 포맷 파싱
        const times = hoursStr.match(/([0-9]{1,2}):([0-9]{2})/g);
        if (!times || times.length < 2) return true;

        const [startH, startM] = times[0].split(':').map(Number);
        const [endH, endM] = times[1].split(':').map(Number);
        
        const startTime = startH * 60 + startM;
        let endTime = endH * 60 + endM;

        // 새벽 종료(예: 02:00) 처리
        if (endTime < startTime) endTime += 24 * 60;
        
        // 현재 시간이 새벽인 경우 (예: 01:00) -> 25:00으로 처리
        let checkTime = currentTime;
        if (currentHour < 6) checkTime += 24 * 60;

        return checkTime >= startTime && checkTime <= endTime;
    }
};
