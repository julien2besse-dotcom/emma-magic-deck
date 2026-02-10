/* ═══════════════════════════════════════════════════════
   EMMA'S MAGIC DECK - Application Logic
   ═══════════════════════════════════════════════════════ */

// ─── Card Definitions ─────────────────────────────────
const CARDS = [
    // SUPREME (1)
    {
        id: 'joker-supreme',
        name: 'Joker Suprême',
        desc: 'TA demande, ton caprice. Je dis oui.',
        emoji: '🃏',
        rarity: 'supreme',
        rarityLabel: 'Suprême'
    },
    // LEGENDARY (3)
    {
        id: 'restau-grand-jeu',
        name: 'Restau "Grand Jeu"',
        desc: 'Invitation complète : tu choisis, je réserve, je paie.',
        emoji: '🍽️',
        rarity: 'legendary',
        rarityLabel: 'Légendaire'
    },
    {
        id: 'soiree-sushi',
        name: 'Soirée Sushi',
        desc: 'Commande japonaise immédiate à la maison.',
        emoji: '🍣',
        rarity: 'legendary',
        rarityLabel: 'Légendaire'
    },
    {
        id: 'joker-veto-social',
        name: 'Joker Veto Social',
        desc: 'Annulation de toute obligation sociale. Soirée pyjama sans excuse.',
        emoji: '🛋️',
        rarity: 'legendary',
        rarityLabel: 'Légendaire'
    },
    // RARE (8)
    {
        id: 'massage-royal',
        name: 'Massage Royal',
        desc: 'Massage complet avec huile et musique.',
        emoji: '👑',
        rarity: 'rare',
        rarityLabel: 'Rare'
    },
    {
        id: 'massage-detente',
        name: 'Massage Détente',
        desc: 'Pour évacuer tout le stress.',
        emoji: '💆',
        rarity: 'rare',
        rarityLabel: 'Rare'
    },
    {
        id: 'bain-reine-1',
        name: 'Bain de Reine',
        desc: 'Je prépare tout : eau, mousse, bougies.',
        emoji: '🛁',
        rarity: 'rare',
        rarityLabel: 'Rare'
    },
    {
        id: 'bain-reine-2',
        name: 'Bain de Reine',
        desc: 'Je prépare tout : eau, mousse, bougies.',
        emoji: '🛁',
        rarity: 'rare',
        rarityLabel: 'Rare'
    },
    {
        id: 'chef-domicile-1',
        name: 'Chef à Domicile',
        desc: 'Je cuisine de A à Z. Tu ne touches à rien.',
        emoji: '👨‍🍳',
        rarity: 'rare',
        rarityLabel: 'Rare'
    },
    {
        id: 'chef-domicile-2',
        name: 'Chef à Domicile',
        desc: 'Je cuisine de A à Z. Tu ne touches à rien.',
        emoji: '👨‍🍳',
        rarity: 'rare',
        rarityLabel: 'Rare'
    },
    {
        id: 'cine-popcorn-1',
        name: 'Ciné & Popcorn',
        desc: 'Sortie ciné ou séance VOD de ton choix.',
        emoji: '🎬',
        rarity: 'rare',
        rarityLabel: 'Rare'
    },
    {
        id: 'cine-popcorn-2',
        name: 'Ciné & Popcorn',
        desc: 'Sortie ciné ou séance VOD de ton choix.',
        emoji: '🎬',
        rarity: 'rare',
        rarityLabel: 'Rare'
    },
    // COMMON (17)
    {
        id: 'massage-rapide-1',
        name: 'Massage Rapide',
        desc: 'Épaules ou pieds, détente express.',
        emoji: '💫',
        rarity: 'common',
        rarityLabel: 'Commune'
    },
    {
        id: 'massage-rapide-2',
        name: 'Massage Rapide',
        desc: 'Épaules ou pieds, détente express.',
        emoji: '💫',
        rarity: 'common',
        rarityLabel: 'Commune'
    },
    {
        id: 'massage-rapide-3',
        name: 'Massage Rapide',
        desc: 'Épaules ou pieds, détente express.',
        emoji: '💫',
        rarity: 'common',
        rarityLabel: 'Commune'
    },
    {
        id: 'bain-simple-1',
        name: 'Bain de Reine',
        desc: 'Version simple : préparation du bain.',
        emoji: '🫧',
        rarity: 'common',
        rarityLabel: 'Commune'
    },
    {
        id: 'bain-simple-2',
        name: 'Bain de Reine',
        desc: 'Version simple : préparation du bain.',
        emoji: '🫧',
        rarity: 'common',
        rarityLabel: 'Commune'
    },
    {
        id: 'chef-simple',
        name: 'Chef à Domicile',
        desc: 'Version simple : je gère le repas.',
        emoji: '🍳',
        rarity: 'common',
        rarityLabel: 'Commune'
    },
    {
        id: 'vaisselle-1',
        name: 'Joker Vaisselle',
        desc: 'Je fais tout, tu ne touches à rien.',
        emoji: '🧽',
        rarity: 'common',
        rarityLabel: 'Commune'
    },
    {
        id: 'vaisselle-2',
        name: 'Joker Vaisselle',
        desc: 'Je fais tout, tu ne touches à rien.',
        emoji: '🧽',
        rarity: 'common',
        rarityLabel: 'Commune'
    },
    {
        id: 'vaisselle-3',
        name: 'Joker Vaisselle',
        desc: 'Je fais tout, tu ne touches à rien.',
        emoji: '🧽',
        rarity: 'common',
        rarityLabel: 'Commune'
    },
    {
        id: 'tu-as-raison-1',
        name: 'Joker "Tu as Raison"',
        desc: 'Fin du débat. Tu gagnes immédiatement.',
        emoji: '✅',
        rarity: 'legendary',
        rarityLabel: 'Légendaire'
    },
    {
        id: 'tu-as-raison-2',
        name: 'Joker "Tu as Raison"',
        desc: 'Fin du débat. Tu gagnes immédiatement.',
        emoji: '✅',
        rarity: 'legendary',
        rarityLabel: 'Légendaire'
    },
    {
        id: 'calin-batterie',
        name: 'Câlin "Batterie"',
        desc: 'Long et silencieux, pour recharger.',
        emoji: '🔋',
        rarity: 'common',
        rarityLabel: 'Commune'
    },
    {
        id: 'calin-ours',
        name: 'Câlin "Ours"',
        desc: 'Gros câlin enveloppant.',
        emoji: '🐻',
        rarity: 'common',
        rarityLabel: 'Commune'
    },
    {
        id: 'calin-lit',
        name: 'Câlin au Lit',
        desc: '10 minutes sans téléphone.',
        emoji: '🛏️',
        rarity: 'common',
        rarityLabel: 'Commune'
    },
    {
        id: 'session-bisous',
        name: 'Session Bisous',
        desc: 'Avalanche.',
        emoji: '💋',
        rarity: 'common',
        rarityLabel: 'Commune'
    },
    {
        id: 'calin-reconfort',
        name: 'Câlin Réconfort',
        desc: 'Quand tu en as besoin, je suis là.',
        emoji: '💝',
        rarity: 'common',
        rarityLabel: 'Commune'
    },
    {
        id: 'calin-matin',
        name: 'Câlin du Matin',
        desc: 'Pour bien commencer la journée.',
        emoji: '🌅',
        rarity: 'common',
        rarityLabel: 'Commune'
    }
];

// ─── Test Mode ────────────────────────────────────────
// Add ?test to URL for unlimited draws (no daily limit)
const TEST_MODE = window.location.search.includes('test');

// ─── State ────────────────────────────────────────────
const STORAGE_KEY = 'emma_magic_deck';
const IDB_NAME = 'emma_deck_db';
const IDB_STORE = 'state';

function getDefaultState() {
    return {
        onboarded: false,
        firstUseDate: null,
        lastDrawDate: null,
        drawnCards: {},   // { cardId: { drawnDate, used } }
    };
}

let state = getDefaultState();

function saveState() {
    const data = JSON.stringify(state);
    // Primary: localStorage
    try { localStorage.setItem(STORAGE_KEY, data); } catch {}
    // Backup: IndexedDB
    saveToIDB(data);
    // Show save indicator briefly
    showSaveIndicator();
}

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            state = { ...getDefaultState(), ...JSON.parse(raw) };
            return;
        }
    } catch {}
    // If localStorage failed, we'll try IDB in async init
}

// Try to recover from IndexedDB if localStorage is empty
async function tryRecoverFromIDB() {
    if (Object.keys(state.drawnCards).length > 0) return; // already have data
    try {
        const data = await loadFromIDB();
        if (data) {
            const parsed = JSON.parse(data);
            if (parsed.drawnCards && Object.keys(parsed.drawnCards).length > 0) {
                state = { ...getDefaultState(), ...parsed };
                // Re-save to localStorage
                try { localStorage.setItem(STORAGE_KEY, data); } catch {}
            }
        }
    } catch {}
}

// ─── IndexedDB helpers ────────────────────────────────
function saveToIDB(data) {
    try {
        const req = indexedDB.open(IDB_NAME, 1);
        req.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(IDB_STORE)) {
                db.createObjectStore(IDB_STORE);
            }
        };
        req.onsuccess = (e) => {
            const db = e.target.result;
            const tx = db.transaction(IDB_STORE, 'readwrite');
            tx.objectStore(IDB_STORE).put(data, 'current');
        };
    } catch {}
}

function loadFromIDB() {
    return new Promise((resolve) => {
        try {
            const req = indexedDB.open(IDB_NAME, 1);
            req.onupgradeneeded = (e) => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains(IDB_STORE)) {
                    db.createObjectStore(IDB_STORE);
                }
            };
            req.onsuccess = (e) => {
                const db = e.target.result;
                const tx = db.transaction(IDB_STORE, 'readonly');
                const get = tx.objectStore(IDB_STORE).get('current');
                get.onsuccess = () => resolve(get.result || null);
                get.onerror = () => resolve(null);
            };
            req.onerror = () => resolve(null);
        } catch { resolve(null); }
    });
}

// ─── Save indicator ──────────────────────────────────
let saveTimeout;
function showSaveIndicator() {
    const el = document.getElementById('save-indicator');
    if (!el) return;
    el.classList.add('show');
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => el.classList.remove('show'), 1500);
}

// ─── Utility ──────────────────────────────────────────
function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }
function today() { return new Date().toISOString().split('T')[0]; }
function vibrate(ms = 10) { if (navigator.vibrate) navigator.vibrate(ms); }

function getAvailableCount() {
    return getDrawnCards().filter(c => !state.drawnCards[c.id].used).length;
}

function getDayNumber() {
    if (!state.firstUseDate) return 1;
    const first = new Date(state.firstUseDate);
    const now = new Date();
    const diff = Math.floor((now - first) / (1000 * 60 * 60 * 24));
    return diff + 1;
}

function getRemainingCards() {
    return CARDS.filter(c => !state.drawnCards[c.id]);
}

function getDrawnCards() {
    return CARDS.filter(c => !!state.drawnCards[c.id]);
}

// ─── Fixed Draw Order (no randomness) ────────────────
// Perfect sequence: nice mix of rarities throughout
const DRAW_ORDER = [
    'calin-ours',        //  1  commune   — auto-drawn onboarding        (10 fév)
    'tu-as-raison-1',    //  2  LÉGENDAIRE — forced second draw           (10 fév)
    'calin-matin',       //  3  commune                                   (11 fév)
    'massage-rapide-1',  //  4  commune                                   (12 fév)
    'cine-popcorn-1',    //  5  rare ✨                                   (13 fév)
    'vaisselle-1',       //  6  commune                                   (14 fév)
    'calin-batterie',    //  7  commune                                   (15 fév)
    'soiree-sushi',      //  8  LÉGENDAIRE 🌟 (~1 semaine)               (16 fév)
    'bain-simple-1',     //  9  commune                                   (17 fév)
    'session-bisous',    // 10  commune                                   (18 fév)
    'massage-detente',   // 11  rare ✨                                   (19 fév)
    'calin-lit',         // 12  commune                                   (20 fév)
    'chef-domicile-1',   // 13  rare ✨                                   (21 fév)
    'vaisselle-2',       // 14  commune                                   (22 fév)
    'joker-veto-social', // 15  LÉGENDAIRE 🌟 (~2 semaines)              (23 fév)
    'massage-rapide-2',  // 16  commune                                   (24 fév)
    'bain-reine-1',      // 17  rare ✨                                   (25 fév)
    'calin-reconfort',   // 18  commune                                   (26 fév)
    'cine-popcorn-2',    // 19  rare ✨                                   (27 fév)
    'joker-supreme',     // 20  SUPRÊME 🌈 — avant le Pérou !            (28 fév)
    'chef-simple',       // 21  commune                                   (1 mars)
    'restau-grand-jeu',  // 22  LÉGENDAIRE 🌟                            (2 mars)
    'massage-rapide-3',  // 23  commune                                   (3 mars)
    'bain-reine-2',      // 24  rare ✨                                   (4 mars)
    'vaisselle-3',       // 25  commune                                   (5 mars)
    'tu-as-raison-2',    // 26  LÉGENDAIRE 🌟                            (6 mars)
    'bain-simple-2',     // 27  commune                                   (7 mars)
    'chef-domicile-2',   // 28  rare ✨                                   (8 mars)
    'massage-royal',     // 29  rare ✨ — dernière carte                  (9 mars)
];

function selectCard() {
    for (const id of DRAW_ORDER) {
        if (!state.drawnCards[id]) {
            return CARDS.find(c => c.id === id);
        }
    }
    return null;
}

// ─── Particle System (Background) ─────────────────────
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.resize();
        this.init();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth * devicePixelRatio;
        this.canvas.height = window.innerHeight * devicePixelRatio;
        this.canvas.style.width = window.innerWidth + 'px';
        this.canvas.style.height = window.innerHeight + 'px';
        this.ctx.scale(devicePixelRatio, devicePixelRatio);
    }

    init() {
        const count = Math.min(60, Math.floor(window.innerWidth * window.innerHeight / 12000));
        this.particles = [];
        for (let i = 0; i < count; i++) {
            this.particles.push(this.createParticle());
        }
    }

    createParticle() {
        return {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 2 + 0.5,
            speedY: -(Math.random() * 0.3 + 0.1),
            speedX: (Math.random() - 0.5) * 0.2,
            opacity: Math.random() * 0.5 + 0.1,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: Math.random() * 0.02 + 0.005,
        };
    }

    update() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        for (const p of this.particles) {
            p.y += p.speedY;
            p.x += p.speedX;
            p.pulse += p.pulseSpeed;
            if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
            if (p.x < -10) p.x = w + 10;
            if (p.x > w + 10) p.x = -10;
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for (const p of this.particles) {
            const o = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(212, 178, 120, ${o})`;
            this.ctx.fill();
        }
    }

    loop() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.loop());
    }

    start() {
        this.loop();
    }
}

// ─── Reveal Particle Burst ─────────────────────────────
class RevealParticles {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.active = false;
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth * devicePixelRatio;
        this.canvas.height = window.innerHeight * devicePixelRatio;
        this.canvas.style.width = window.innerWidth + 'px';
        this.canvas.style.height = window.innerHeight + 'px';
        this.ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    }

    burst(rarity) {
        this.particles = [];
        this.active = true;
        this.canvas.classList.add('active');

        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const colors = this.getColors(rarity);
        const count = rarity === 'supreme' ? 80 : rarity === 'legendary' ? 60 : rarity === 'rare' ? 40 : 25;

        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i / count) + (Math.random() - 0.5) * 0.5;
            const speed = Math.random() * 4 + 2;
            const size = Math.random() * 4 + 1.5;
            this.particles.push({
                x: cx,
                y: cy,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                size,
                color: colors[Math.floor(Math.random() * colors.length)],
                life: 1,
                decay: Math.random() * 0.015 + 0.008,
                gravity: 0.03,
            });
        }

        this.loop();
    }

    getColors(rarity) {
        switch (rarity) {
            case 'supreme': return ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#9B59B6', '#FF9FF3', '#FFEAA7'];
            case 'legendary': return ['#FFD700', '#FFA500', '#F4E5A0', '#D4A843', '#FFE66D', '#FFFACD'];
            case 'rare': return ['#9B6DD7', '#C4A3F0', '#6A3DAA', '#D5B8FF', '#BB86FC'];
            default: return ['#8B94A5', '#B0B8C8', '#A0A8B8', '#C0C8D5'];
        }
    }

    loop() {
        if (!this.active) return;

        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        let alive = false;

        for (const p of this.particles) {
            if (p.life <= 0) continue;
            alive = true;

            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            p.vx *= 0.99;
            p.life -= p.decay;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.life;
            this.ctx.fill();
            this.ctx.globalAlpha = 1;
        }

        if (alive) {
            requestAnimationFrame(() => this.loop());
        } else {
            this.active = false;
            this.canvas.classList.remove('active');
            this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        }
    }
}

// ─── Screen Management ────────────────────────────────
let currentScreen = null;

function showScreen(id, direction = 'fade') {
    const next = document.getElementById(id);
    const prev = currentScreen ? document.getElementById(currentScreen) : null;

    // On first call, hide ALL other screens
    if (!prev) {
        document.querySelectorAll('.screen').forEach(s => {
            if (s.id !== id) s.classList.add('is-hidden');
        });
    }

    if (prev && prev !== next) {
        if (direction === 'left') {
            prev.classList.add('slide-out-left');
            prev.classList.remove('slide-in-right', 'slide-in-left');
        } else if (direction === 'right') {
            prev.classList.add('slide-out-right');
            prev.classList.remove('slide-in-right', 'slide-in-left');
        } else {
            prev.classList.add('is-hidden');
        }
        setTimeout(() => {
            prev.classList.add('is-hidden');
            prev.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-right', 'slide-in-left');
        }, 500);
    }

    next.classList.remove('is-hidden');
    if (direction === 'left') {
        next.classList.add('slide-in-right');
    } else if (direction === 'right') {
        next.classList.add('slide-in-left');
    }

    currentScreen = id;
}

// ─── Onboarding ───────────────────────────────────────
let onboardingStep = 0;
let touchStartX = 0;
let touchStartY = 0;

function initOnboarding() {
    const steps = $$('.onboarding-step');
    const dots = $$('.dot');

    function goToStep(n) {
        if (n < 0 || n >= steps.length) return;

        const prev = steps[onboardingStep];
        const next = steps[n];

        if (n > onboardingStep) {
            prev.classList.remove('active');
            prev.classList.add('exit-left');
        } else {
            prev.classList.remove('active', 'exit-left');
        }

        setTimeout(() => {
            prev.classList.remove('exit-left');
        }, 600);

        next.classList.add('active');
        dots.forEach((d, i) => d.classList.toggle('active', i === n));
        onboardingStep = n;
        vibrate(5);
    }

    // Touch swipe for onboarding
    const onboarding = $('#onboarding');
    onboarding.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    onboarding.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
            if (dx < 0) goToStep(onboardingStep + 1);
            else goToStep(onboardingStep - 1);
        }
    }, { passive: true });

    // Tap to advance (except on last step which has a button)
    onboarding.addEventListener('click', (e) => {
        if (e.target.closest('.btn-magic') || e.target.closest('.dot')) return;
        if (onboardingStep < steps.length - 1) {
            goToStep(onboardingStep + 1);
        }
    });

    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            goToStep(parseInt(dot.dataset.dot));
        });
    });

    // Start button — auto-draw first card (calin-ours) during onboarding
    $('#btn-start').addEventListener('click', (e) => {
        e.stopPropagation();
        vibrate(15);
        state.onboarded = true;
        state.firstUseDate = today();

        // Auto-draw calin-ours as first card, but DON'T set lastDrawDate
        // so she can draw a second card the same day
        const firstCard = CARDS.find(c => c.id === 'calin-ours');
        currentRevealCard = firstCard;
        state.drawnCards[firstCard.id] = { drawnDate: today(), used: false };
        saveState();

        // Show the reveal animation
        setupRevealCard(firstCard);
        const inner = $('#card-inner');
        const btn = $('#btn-collect');
        const flipContainer = $('#card-flip');

        inner.classList.remove('flipped');
        flipContainer.classList.remove('float-in');
        btn.classList.remove('visible');
        btn.classList.add('is-hidden');

        showScreen('reveal', 'fade');

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                flipContainer.classList.add('float-in');
                setTimeout(() => {
                    inner.classList.add('flipped');
                    vibrate(20);
                    setTimeout(() => {
                        triggerRevealEffects(firstCard.rarity);
                        setTimeout(() => {
                            btn.classList.remove('is-hidden');
                            btn.classList.add('visible');
                        }, 400);
                    }, 400);
                }, 700);
            });
        });
    });
}

// ─── Home Screen ──────────────────────────────────────
function updateHomeUI() {
    const remaining = getRemainingCards();
    const available = getAvailableCount();
    $('#remaining-count').textContent = remaining.length;
    $('#collection-count').textContent = available;

    // Time-based greeting
    const hour = new Date().getHours();
    let greeting;
    if (hour < 6) greeting = 'Bonne nuit Emma ♥';
    else if (hour < 12) greeting = 'Bonjour Emma ♥';
    else if (hour < 18) greeting = 'Bon après-midi Emma ♥';
    else greeting = 'Bonsoir Emma ♥';
    $('#home-greeting').textContent = greeting;

    // Hide deck hint if no cards
    const hint = $('#deck-hint');
    if (remaining.length === 0) {
        hint.textContent = 'Toutes les cartes ont été tirées !';
    } else if (!TEST_MODE && state.lastDrawDate === today()) {
        hint.textContent = 'Reviens demain pour une nouvelle carte';
    } else {
        hint.textContent = 'Touche le paquet';
    }
}

function initHome() {
    // Deck tap
    $('#deck').addEventListener('click', () => {
        if ($('#deck').classList.contains('drawing')) return;

        // Check if already drawn today (skip in test mode)
        if (!TEST_MODE && state.lastDrawDate === today()) {
            $('#already-drawn').classList.remove('is-hidden');
            vibrate(10);
            return;
        }

        // Check if no cards left
        const remaining = getRemainingCards();
        if (remaining.length === 0) {
            $('#all-drawn').classList.remove('is-hidden');
            vibrate(10);
            return;
        }

        // Draw a card!
        vibrate(15);
        drawCard();
    });

    // Inventory button
    $('#btn-inventory').addEventListener('click', () => {
        vibrate(5);
        showScreen('inventory', 'left');
        renderInventory();
    });

    // Already drawn overlay
    $('#btn-ok-drawn').addEventListener('click', () => {
        $('#already-drawn').classList.add('is-hidden');
    });

    // All drawn overlay
    $('#btn-ok-all').addEventListener('click', () => {
        $('#all-drawn').classList.add('is-hidden');
        showScreen('inventory', 'left');
        renderInventory();
    });
}

// ─── Card Drawing ─────────────────────────────────────
let currentRevealCard = null;

function drawCard() {
    const card = selectCard();
    if (!card) return;

    currentRevealCard = card;

    // Mark as drawn
    state.drawnCards[card.id] = {
        drawnDate: today(),
        used: false
    };
    state.lastDrawDate = today();
    saveState();

    // Setup reveal screen
    setupRevealCard(card);

    // Animate deck
    const deck = $('#deck');
    deck.classList.add('drawing');

    // Show reveal screen
    const inner = $('#card-inner');
    const btn = $('#btn-collect');

    const flipContainer = $('#card-flip');

    // Reset state before showing
    inner.classList.remove('flipped');
    flipContainer.classList.remove('float-in');
    btn.classList.remove('visible');
    btn.classList.add('is-hidden');

    setTimeout(() => {
        showScreen('reveal', 'fade');

        // Small delay to ensure the screen is visible before animating
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                flipContainer.classList.add('float-in');

                // Flip card after float-in completes
                setTimeout(() => {
                    inner.classList.add('flipped');
                    vibrate(20);

                    // Trigger particles and effects
                    setTimeout(() => {
                        triggerRevealEffects(card.rarity);

                        // Show collect button
                        setTimeout(() => {
                            btn.classList.remove('is-hidden');
                            btn.classList.add('visible');
                        }, 400);
                    }, 400);
                }, 700);
            });
        });
    }, 300);
}

function setupRevealCard(card) {
    const face = $('#card-face');
    face.className = 'card-face card-' + card.rarity;
    $('#card-rarity-label').textContent = card.rarityLabel;
    $('#card-emoji').textContent = card.emoji;
    $('#card-name').textContent = card.name;
    $('#card-desc').textContent = card.desc;
}

function triggerRevealEffects(rarity) {
    // Particle burst
    revealParticles.burst(rarity);

    // Rays
    const rays = $('#reveal-rays');
    rays.className = 'reveal-rays active ' + rarity;
    setTimeout(() => rays.classList.remove('active'), 3000);

    // Screen shake for legendary/supreme
    if (rarity === 'legendary' || rarity === 'supreme') {
        document.body.classList.add('shake');
        vibrate([20, 30, 40]);
        setTimeout(() => document.body.classList.remove('shake'), 500);
    }
}

function initReveal() {
    // Collect button
    $('#btn-collect').addEventListener('click', () => {
        vibrate(10);
        const btn = $('#btn-collect');
        btn.classList.remove('visible');
        btn.classList.add('is-hidden');

        const inner = $('#card-inner');
        inner.classList.remove('flipped');
        $('#card-flip').classList.remove('float-in');

        const deck = $('#deck');
        deck.classList.remove('drawing');

        showScreen('home', 'fade');
        updateHomeUI();
    });
}

// ─── Inventory ────────────────────────────────────────
let currentFilter = 'all';
let currentModalCard = null;

function renderInventory() {
    const drawn = getDrawnCards();
    const grid = $('#inv-grid');
    const empty = $('#inv-empty');
    const usedCount = drawn.filter(c => state.drawnCards[c.id].used).length;

    $('#inv-count').textContent = drawn.length;
    // Update the home badge too (in case cards were used)
    const badge = document.getElementById('collection-count');
    if (badge) badge.textContent = drawn.length - usedCount;

    // Filter
    let filtered = drawn;
    if (currentFilter !== 'all') {
        filtered = drawn.filter(c => c.rarity === currentFilter);
    }

    if (filtered.length === 0) {
        grid.innerHTML = '';
        empty.classList.remove('is-hidden');
        return;
    }

    empty.classList.add('is-hidden');
    grid.innerHTML = '';

    filtered.forEach((card, i) => {
        const info = state.drawnCards[card.id];
        const isUsed = info && info.used;
        const el = document.createElement('div');
        el.className = `inv-card card-${card.rarity}${isUsed ? ' used' : ''}`;
        el.style.setProperty('--delay', `${i * 0.06}s`);
        el.innerHTML = `
            <span class="inv-rarity">${card.rarityLabel}</span>
            <span class="inv-emoji">${card.emoji}</span>
            <span class="inv-name">${card.name}</span>
            ${isUsed ? '<span class="used-badge">Utilisée</span>' : ''}
        `;
        el.addEventListener('click', () => openCardModal(card));
        grid.appendChild(el);
    });
}

function initInventory() {
    // Back button
    $('#btn-back').addEventListener('click', () => {
        vibrate(5);
        showScreen('home', 'right');
        updateHomeUI();
    });

    // Filters
    $$('.filter').forEach(btn => {
        btn.addEventListener('click', () => {
            $$('.filter').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderInventory();
            vibrate(5);
        });
    });
}

// ─── Card Modal ───────────────────────────────────────
function openCardModal(card) {
    currentModalCard = card;
    vibrate(5);

    const modal = $('#card-modal');
    const modalCard = $('#modal-card');
    const info = state.drawnCards[card.id];
    const isUsed = info && info.used;

    modalCard.className = 'modal-card card-' + card.rarity;
    $('#modal-rarity').textContent = card.rarityLabel;
    $('#modal-emoji').textContent = card.emoji;
    $('#modal-name').textContent = card.name;
    $('#modal-desc').textContent = card.desc;

    if (isUsed) {
        $('#modal-actions').classList.add('is-hidden');
        $('#modal-used').classList.remove('is-hidden');
    } else {
        $('#modal-actions').classList.remove('is-hidden');
        $('#modal-used').classList.add('is-hidden');
    }

    modal.classList.remove('is-hidden');
}

function closeCardModal() {
    $('#card-modal').classList.add('is-hidden');
    currentModalCard = null;
}

function initModal() {
    // Close
    $('#btn-close').addEventListener('click', closeCardModal);
    $('#modal-backdrop').addEventListener('click', closeCardModal);

    // Use card
    $('#btn-use').addEventListener('click', () => {
        if (!currentModalCard) return;
        vibrate(10);
        $('#confirm-card-name').textContent = currentModalCard.name;
        $('#confirm-dialog').classList.remove('is-hidden');
    });

    // Confirm use
    $('#btn-confirm-yes').addEventListener('click', () => {
        if (!currentModalCard) return;
        vibrate(20);
        state.drawnCards[currentModalCard.id].used = true;
        saveState();
        $('#confirm-dialog').classList.add('is-hidden');
        closeCardModal();
        renderInventory();
    });

    // Cancel use
    $('#btn-confirm-no').addEventListener('click', () => {
        $('#confirm-dialog').classList.add('is-hidden');
    });
}

// ─── Initialization ───────────────────────────────────
let bgParticles;
let revealParticles;

async function init() {
    loadState();
    await tryRecoverFromIDB();

    // Init particle systems
    bgParticles = new ParticleSystem($('#particles'));
    bgParticles.start();
    revealParticles = new RevealParticles($('#reveal-particles'));

    // Init all screens
    initOnboarding();
    initHome();
    initReveal();
    initInventory();
    initModal();

    // Show appropriate screen
    if (!state.onboarded) {
        showScreen('onboarding', 'fade');
    } else {
        showScreen('home', 'fade');
        updateHomeUI();
    }

    // Register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    }

    // Aggressive save on visibility change & before unload
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') saveState();
    });
    window.addEventListener('beforeunload', () => saveState());
    window.addEventListener('pagehide', () => saveState());

    // Test mode indicator
    if (TEST_MODE) {
        const badge = document.createElement('div');
        badge.textContent = 'MODE TEST';
        badge.style.cssText = 'position:fixed;top:8px;right:8px;z-index:999;font-size:10px;padding:4px 10px;border-radius:6px;background:rgba(255,107,107,0.2);color:#FF6B6B;font-weight:700;letter-spacing:0.1em;pointer-events:none;';
        document.body.appendChild(badge);
    }
}

// Wait for DOM
document.addEventListener('DOMContentLoaded', init);
