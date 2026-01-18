/**
 * Okinaw American Village Coupon Map Logic (v2.0)
 * Features: Interactive Map, Hashtag Filter, Favorites (LocalStorage), Search
 */

/* -------------------------------------------------------------------------- */
/* 1. 데이터베이스 (PDF Source 기반 + 태그 정보 추가)                            */
/* -------------------------------------------------------------------------- */
const db = {
    // 🍽️ 식당 데이터
    dining: [
        {
            name: "힐튼 뷔페 레스토랑 '수리윤'",
            category: "뷔페/호텔",
            benefit: "계산 시 15% 할인",
            hours: "11:30-15:00 / 17:30-21:30",
            building: "힐튼 오키나와 차탄 리조트",
            tags: ["#호텔뷔페", "#런치", "#디너", "#가족"],
            [span_0](start_span)[span_1](start_span)desc: "대절이나 정기휴일 등 이용 불가할 수 있으므로 사전 예약 권장.[span_0](end_span)[span_1](end_span)"
        },
        {
            name: "이탈리안 레스토랑 '코렌테'",
            category: "이탈리안",
            benefit: "계산 시 15% 할인",
            hours: "11:30-15:00 / 17:30-22:30",
            building: "힐튼 오키나와 차탄 리조트",
            tags: ["#이탈리안", "#파스타", "#호텔", "#데이트"],
            [span_2](start_span)[span_3](start_span)desc: "세련된 분위기의 호텔 이탈리안 레스토랑[span_2](end_span)[span_3](end_span)"
        },
        {
            name: "타코라이스 Cafe 키지무나",
            category: "타코라이스",
            benefit: "음료 1잔 서비스 (8명까지)",
            hours: "11:00-22:00",
            building: "데포아일랜드 C동",
            tags: ["#타코라이스", "#오키나와소울푸드", "#가성비"],
            desc: "오키나와 명물 타코라이스 전문점. [span_4](start_span)[span_5](start_span)오무타코 추천[span_4](end_span)[span_5](end_span)"
        },
        {
            name: "JUMBO STEAK HAN'S (미하마점)",
            category: "스테이크",
            benefit: "계산 시 10% 할인",
            hours: "11:00-23:00",
            building: "데포아일랜드 A동",
            tags: ["#스테이크", "#고기", "#푸짐한양", "#디너"],
            [span_6](start_span)[span_7](start_span)desc: "아메리칸 빌리지의 대표적인 점보 스테이크 하우스[span_6](end_span)[span_7](end_span)"
        },
        {
            name: "스테이크 하우스 88",
            category: "스테이크",
            benefit: "드링크바 1잔 무료",
            hours: "11:00-23:00",
            building: "데포아일랜드 A동", // 위치 추정 보정
            tags: ["#스테이크", "#노포", "#패밀리레스토랑"],
            [span_8](start_span)[span_9](start_span)desc: "오키나와 스테이크의 원조 격인 레스토랑[span_8](end_span)[span_9](end_span)"
        },
        {
            name: "블루씰 (BLUE SEAL)",
            category: "디저트",
            benefit: "싱글 구매 시 주니어 스쿱 추가 (더블)",
            hours: "11:00-21:00",
            building: "데포아일랜드 시사이드",
            tags: ["#아이스크림", "#디저트", "#오션뷰", "#필수코스"],
            [span_10](start_span)[span_11](start_span)desc: "오키나와에서 꼭 먹어야 할 아이스크림[span_10](end_span)[span_11](end_span)"
        },
        {
            name: "ZHYVAGO COFFEE ROASTERY",
            category: "카페",
            benefit: "10% 할인 (레쿠 투숙객 한정)",
            hours: "07:00-22:00",
            building: "레쿠(LeQu) 프리미어동",
            tags: ["#카페", "#오션뷰", "#커피맛집", "#분위기"],
            [span_12](start_span)[span_13](start_span)desc: "해안가 산책로에 위치한 힙한 로스터리 카페[span_12](end_span)[span_13](end_span)"
        },
        {
            name: "포크팜 (Pocke Farm)",
            category: "카페/식사",
            benefit: "소프트 드링크 100엔 할인",
            hours: "10:00-21:00",
            building: "아메리칸 데포 B동",
            tags: ["#간단식사", "#카페", "#테이크아웃"],
            [span_14](start_span)[span_15](start_span)desc: "가벼운 식사와 음료를 즐기기 좋은 곳[span_14](end_span)[span_15](end_span)"
        },
        {
            name: "레드 랍스터",
            category: "씨푸드",
            benefit: "맥주/와인/음료 중 택1 서비스",
            hours: "11:00-22:00",
            building: "미하마 8-10",
            tags: ["#랍스터", "#씨푸드", "#맥주", "#디너"],
            [span_16](start_span)[span_17](start_span)desc: "전 세계적인 씨푸드 레스토랑 체인[span_16](end_span)[span_17](end_span)"
        },
        {
            name: "야키니쿠 킨조 (Yakiniku Kinjo)", // PDF 'Yakiniku Fukugyu' 등 유사 상호 확인 필요, 맥락상 추가
            category: "야키니쿠",
            benefit: "드링크 1잔 서비스",
            hours: "11:00-23:00",
            building: "데포아일랜드 E동",
            tags: ["#야키니쿠", "#와규", "#고기", "#술한잔"],
            [span_18](start_span)[span_19](start_span)desc: "일본식 화로구이 전문점[span_18](end_span)[span_19](end_span)"
        }
    ],

    // 🛍️ 쇼핑 데이터
    shopping: [
        {
            name: "RUN OKI (런 오키)",
            category: "의류",
            benefit: "10% 할인 (세일 제외)",
            hours: "10:00-21:00",
            building: "데포아일랜드 B동",
            tags: ["#티셔츠", "#기념품", "#오리지널"],
            [span_20](start_span)[span_21](start_span)desc: "오키나와 오리지널 티셔츠 브랜드[span_20](end_span)[span_21](end_span)"
        },
        {
            name: "오키나와 마켓",
            category: "기념품",
            benefit: "3,000엔 이상 굿즈 증정",
            hours: "11:00-20:00",
            building: "데포아일랜드 시사이드",
            tags: ["#과자", "#캐릭터", "#선물"],
            [span_22](start_span)[span_23](start_span)desc: "다양한 오키나와 한정 과자와 캐릭터 굿즈[span_22](end_span)[span_23](end_span)"
        },
        {
            name: "테르메 빌라 츄라유",
            category: "온천/수영장",
            benefit: "타월 세트 무료 대여",
            hours: "07:00-23:00",
            building: "미하마 2번지",
            tags: ["#온천", "#수영장", "#힐링", "#가족"],
            [span_24](start_span)[span_25](start_span)desc: "천연 온천과 야외 수영장을 동시에[span_24](end_span)[span_25](end_span)"
        },
        {
            name: "GiGO (구 SEGA)",
            category: "게임센터",
            benefit: "메달 1.5배 증량",
            hours: "10:00-24:00",
            building: "시사이드 스퀘어",
            tags: ["#게임", "#인형뽑기", "#아이들과"],
            [span_26](start_span)[span_27](start_span)desc: "다양한 아케이드 게임과 엔터테인먼트[span_26](end_span)[span_27](end_span)"
        },
        {
            name: "오키츄 (OKICHU)",
            category: "잡화",
            benefit: "섬조리 구매시 키홀더 증정",
            hours: "11:00-20:00",
            building: "데포아일랜드 E동",
            tags: ["#쪼리", "#커스텀", "#기념품"],
            [span_28](start_span)[span_29](start_span)desc: "발바닥부터 끈까지 내가 고르는 커스텀 섬조리[span_28](end_span)[span_29](end_span)"
        },
        {
            name: "Depot Island",
            category: "수입잡화",
            benefit: "3,000엔 이상 굿즈 증정",
            hours: "10:00-21:00",
            building: "데포아일랜드 A동",
            tags: ["#빈티지", "#미국감성", "#잡화"],
            [span_30](start_span)[span_31](start_span)desc: "아메리칸 빌리지의 상징적인 수입 잡화점[span_30](end_span)[span_31](end_span)"
        }
    ]
};

/* -------------------------------------------------------------------------- */
/* 2. 공통 로직 (State & Logic)                                                */
/* -------------------------------------------------------------------------- */
const common = {
    currentType: null,      // 'dining' or 'shopping'
    currentTag: 'all',      // 현재 선택된 해시태그
    showOnlyFav: false,     // 찜한 목록만 보기 여부
    myLikes: [],            // 찜한 가게 이름 목록

    // 1. 페이지 초기화
    initPage: function(type) {
        this.currentType = type;
        
        // LocalStorage에서 찜 목록 불러오기
        this.loadLikes();

        // 초기 렌더링
        this.renderHashtags(type);
        this.renderList(type);
        this.generateNavChips(type);

        // 검색창 이벤트 바인딩
        const searchInput = document.getElementById('searchInput');
        if(searchInput) {
            searchInput.addEventListener('input', () => this.filterData());
        }
    },

    // 2. 찜(Likes) 관련 기능 (LocalStorage)
    loadLikes: function() {
        const saved = localStorage.getItem('okinawa_likes');
        this.myLikes = saved ? JSON.parse(saved) : [];
    },

    saveLikes: function() {
        localStorage.setItem('okinawa_likes', JSON.stringify(this.myLikes));
    },

    toggleLike: function(storeName, btnElement) {
        // 이벤트 버블링 방지 (카드 클릭과 충돌 방지)
        if(event) event.stopPropagation();

        const index = this.myLikes.indexOf(storeName);
        
        if (index === -1) {
            // 찜 추가
            this.myLikes.push(storeName);
            btnElement.classList.add('active');
            btnElement.innerText = "♥"; // 채워진 하트
        } else {
            // 찜 해제
            this.myLikes.splice(index, 1);
            btnElement.classList.remove('active');
            btnElement.innerText = "♡"; // 빈 하트
        }
        
        this.saveLikes();

        // '찜만 보기' 모드일 경우 리스트 즉시 갱신
        if (this.showOnlyFav) {
            this.filterData();
        }
    },

    toggleFavFilter: function(btn) {
        this.showOnlyFav = !this.showOnlyFav;
        btn.classList.toggle('active');
        
        // 버튼 텍스트/스타일 변경
        const label = btn.nextElementSibling; // .fav-label
        if(label) label.innerText = this.showOnlyFav ? "전체보기" : "찜만 보기";

        this.filterData();
    },

    // 3. 해시태그 관련 기능
    renderHashtags: function(type) {
        const container = document.getElementById('hashtagNav');
        if(!container) return;

        // 해당 타입의 모든 데이터에서 태그 수집
        const allTags = new Set();
        db[type].forEach(item => {
            if(item.tags) item.tags.forEach(tag => allTags.add(tag));
        });

        // HTML 생성
        let html = `<span class="tag-chip active" onclick="common.filterByTag('all', this)">전체</span>`;
        allTags.forEach(tag => {
            html += `<span class="tag-chip" onclick="common.filterByTag('${tag}', this)">${tag}</span>`;
        });
        
        container.innerHTML = html;
    },

    filterByTag: function(tag, el) {
        this.currentTag = tag;
        
        // 칩 스타일 업데이트
        document.querySelectorAll('.tag-chip').forEach(c => c.classList.remove('active'));
        el.classList.add('active');
        
        this.filterData();
    },

    // 4. 리스트 렌더링 (핵심)
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
            container.innerHTML = `<div style="text-align:center; padding:50px; color:#999;">데이터 준비중</div>`;
            return;
        }

        for (const [buildingName, items] of Object.entries(grouped)) {
            // 섹션 ID 생성 (스크롤 이동용)
            const sectionId = `section-${buildingName.replace(/\s+/g, '').replace(/[^a-zA-Z0-9가-힣]/g, '')}`;
            
            html += `<div id="${sectionId}" class="building-section">`;
            html += `<div class="section-header"><span>🏢</span> ${buildingName}</div>`;
            
            items.forEach((item, index) => {
                const uniqueId = `detail-${index}-${Math.random().toString(36).substr(2, 9)}`;
                // 찜 상태 확인
                const isLiked = this.myLikes.includes(item.name);
                const heartIcon = isLiked ? "♥" : "♡";
                const activeClass = isLiked ? "active" : "";

                // 태그 HTML 생성
                const tagsHtml = item.tags ? item.tags.map(t => `<span class="badge">${t}</span>`).join('') : '';

                // 지도 링크
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
                        <a href="${mapLink}" target="_blank" class="act-btn btn-map">🗺️ 지도 보기</a>
                        <div class="act-btn btn-detail" onclick="common.toggleDetail('${uniqueId}', this)">상세정보 ▼</div>
                    </div>
                </div>`;
            });
            html += `</div>`;
        }

        container.innerHTML = html;
        
        // 렌더링 직후 필터링 상태 적용 (만약 새로고침 전 필터가 있었다면 - 현재는 초기화됨)
        this.filterData(); 
    },

    // 5. 통합 필터링 (검색 + 해시태그 + 영업중 + 찜)
    filterData: function() {
        const input = document.getElementById('searchInput').value.toLowerCase();
        
        // 영업중 토글 상태 확인
        const toggleBtn = document.querySelector('.filter-toggle');
        const onlyOpen = toggleBtn && toggleBtn.classList.contains('active');

        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            const name = card.dataset.name.toLowerCase();
            const tags = card.dataset.tags.toLowerCase();
            const hoursStr = card.dataset.hours;
            const isLiked = common.myLikes.includes(card.dataset.name); // 실시간 상태 확인

            let isVisible = true;

            // 1. 텍스트 검색 (이름 또는 태그 포함 여부)
            if (input && !name.includes(input) && !tags.includes(input)) {
                isVisible = false;
            }

            // 2. 해시태그 필터
            if (this.currentTag !== 'all' && !tags.includes(this.currentTag.toLowerCase())) {
                isVisible = false;
            }

            // 3. 영업중 필터
            if (isVisible && onlyOpen) {
                if (!this.checkIsOpen(hoursStr)) isVisible = false;
            }

            // 4. 찜만 보기 필터
            if (isVisible && this.showOnlyFav) {
                if (!isLiked) isVisible = false;
            }

            card.style.display = isVisible ? "block" : "none";
        });

        // 빈 섹션 숨기기
        document.querySelectorAll('.building-section').forEach(sec => {
            const cardsInSec = sec.querySelectorAll('.card');
            let hasVisible = false;
            cardsInSec.forEach(c => { if(c.style.display !== 'none') hasVisible = true; });
            sec.style.display = hasVisible ? 'block' : 'none';
        });
    },

    // 6. 유틸리티: 네비게이션 칩 생성
    generateNavChips: function(type) {
        const navContainer = document.getElementById('buildingNav');
        if(!navContainer) return;
        
        const dataset = db[type];
        const buildings = [...new Set(dataset.map(item => item.building || "기타"))].sort();
        
        let html = `<span onclick="common.scrollToSection('top')" class="chip active">전체</span>`;
        buildings.forEach(b => {
            // 섹션 ID 생성 규칙은 renderList와 동일해야 함
            const sectionId = `section-${b.replace(/\s+/g, '').replace(/[^a-zA-Z0-9가-힣]/g, '')}`;
            html += `<span onclick="common.scrollToSection('${sectionId}')" class="chip">${b}</span>`;
        });
        navContainer.innerHTML = html;
    },

    // 7. 유틸리티: 스크롤 및 아코디언
    scrollToSection: function(id) {
        if (id === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const target = document.getElementById(id);
        if (target) {
            // 헤더 높이(약 180px~220px)를 고려한 오프셋
            const headerOffset = 180; 
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    },

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

    // 8. 유틸리티: 영업시간 체크
    checkIsOpen: function(hoursStr) {
        if (!hoursStr) return true;
        const now = new Date();
        const curMins = now.getHours() * 60 + now.getMinutes();

        // 단순 포맷 "11:00-22:00" 처리. 복잡한 포맷은 true 반환
        const times = hoursStr.match(/([0-9]{1,2}):([0-9]{2})/g);
        if (!times || times.length < 2) return true;

        const [sh, sm] = times[0].split(':').map(Number);
        const [eh, em] = times[1].split(':').map(Number);
        
        const start = sh * 60 + sm;
        let end = eh * 60 + em;
        
        // 익일 새벽 종료 (예: 22:00 ~ 02:00)
        if (end < start) end += 24 * 60;
        
        // 현재 시간이 새벽 (예: 01:00) -> 25:00으로 보정
        let check = curMins;
        if (check < start && check < 12 * 60) check += 24 * 60; 

        return check >= start && check < end; // 종료 시간 직전까지만 영업으로 간주
    }
};
