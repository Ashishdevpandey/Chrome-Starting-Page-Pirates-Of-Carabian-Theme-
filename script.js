// --- Random Quotes ---
const quotes = [
    "I’m not late; I’m just early for the next catastrophe.",
    "My compass points to trouble—coincidentally, that’s also where the rum is.",
    "A ship is safe in harbour, but that’s not what ships or Sparrows are for.",
    "I’ve misplaced my sanity—if found, please keep it; we weren’t getting along.",
    "Reputation is what people remember; rum is what helps them forget.",
    "I never bluff—I just exaggerate with conviction.",
    "The world is round; that’s why my plans keep coming back to bite me.",
    "I’m allergic to boredom—breaks me out in adventure.",
    "Give a man a fish, he eats today; teach a man to fish, he’ll still steal mine.",
    "My moral compass spins—keeps life interesting.",
    "I don’t need a map—I have questionable instincts.",
    "Parley: the pirate equivalent of ‘please’ with a sword behind the back.",
    "I’m not lost; I’m unpredictably located.",
    "Trust is like sand: slips through your fingers and scratches your eyes.",
    "The horizon’s out there somewhere—let’s go steal it.",
    "I’m fluent in three languages: English, Profanity, and Drunken Mumble.",
    "Luck favours the bold; I favour borrowing luck with interest.",
    "A hat’s not just an accessory—it’s a flag you wear on your head.",
    "I’ve never met a problem rum couldn’t ignore on my behalf.",
    "Time is a pirate’s least reliable crew-member—always jumping ship.",
    "I’m not arguing; I’m simply explaining why I’m right.",
    "Gravity and I have an on-again-off-again relationship—mostly off.",
    "I try to avoid temptation unless it’s waving at me from a bottle.",
    "My plans are like origami cranes—pretty, fragile, and likely to sink.",
    "I’ve got a rendezvous with destiny—and she’s buying the first round.",
    "A wise man fears the sea; a clever man fears the sea’s creditors.",
    "I don’t run away—I advance in a different direction.",
    "I’m not mad; reality is just too plain for my tastes.",
    "A promised ship is like a promised drink—only useful once it’s in hand.",
    "My schedule is open—unless the Kraken calls, then I’m busy.",
    "I’m only honest when it’s inconvenient for everyone else.",
    "Bravery is just fear with a better publicist.",
    "I’ve got a bad feeling about this—and usually, my bad feelings are right.",
    "My conscience is clear—mostly because I don’t use it often.",
    "I’m the captain of my soul—even if the crew mutinies occasionally.",
    "The sea calls to me—usually collect.",
    "I don’t mistakes; I make spontaneous learning opportunities.",
    "Every storm runs out of rain; every bottle runs out of rum—tragic really.",
    "I’m not a hero; heroes have to pay for their own drinks.",
    "I’ve got the wind at my back and the law further back.",
    "A good lie is worth a thousand truths if it saves your skin.",
    "My life is one long improv act with a lot of near-death scenes.",
    "I’m not scared; I’m tactically retreating to a better position.",
    "The best treasure isn’t gold—it’s the story you tell about finding it.",
    "I’m not unlucky; the universe just likes to test my reflexes.",
    "I’m a man of my word—unless my word gets me killed.",
    "I’ve got a compass that doesn’t point north—but it points to what I want.",
    "I’m not avoiding work; I’m conserving energy for emergencies.",
    "Survival is my specialty; style is my trademark.",
    "I’ve never met a horizon I didn’t want to sail past.",
    "I’m not drunk; I’m just less sober than usual.",
    "Risk is just opportunity wearing a scary mask.",
    "I’ve got a plan—it involves running, shouting, and possibly an explosion.",
    "I’m not a pirate; I’m a high-seas entrepreneur with flexible ethics.",
    "Freedom is the only currency that matters—and gold, of course.",
    "I’ve got a smile that hides a thousand schemes.",
    "I’m not lost; I’m exploring unintended destinations.",
    "Safety is overrated; adventure is where the fun is.",
    "I’ve never met a rule I didn’t want to bend into a pretzel.",
    "I’m not reckless; I’m aggressively optimistic.",
    "The sea is my mistress; the ship is my wife; the rum is my therapist.",
    "I’ve got a knack for getting into trouble—and a talent for getting out.",
    "I’m not hiding; I’m lying in wait—very quietly.",
    "Fate is what you make it—and what you steal along the way.",
    "I’m not a chaotic evil; I’m a chaotic neutral with style.",
    "I’ve never met a lock I couldn’t pick—or a door I couldn’t kick.",
    "I’m not selfish; I’m self-preservation focused.",
    "The world is big; my patience is small—let’s move.",
    "I’ve got a ledger of debts longer than a plank—but I swim well.",
    "I’m not a legend; I’m a rumor with a hat.",
    "Curiosity killed the cat; satisfaction brought it back—with treasure.",
    "I’m not fleeing; I’m leading an expedition away from the enemy.",
    "I’ve never met a challenge I couldn’t talk my way around.",
    "I’m not unpredictable; I’m consistently surprising.",
    "The wind whispers secrets; I usually just shout back.",
    "I’ve got a coat full of tricks and a hat full of ideas.",
    "I’m not a villain; I’m just the hero of a different story.",
    "Rules are just guidelines for people with no imagination.",
    "I’ve never met a storm I couldn’t weather—eventually.",
    "I’m not grounded; I’m just docked for refreshments.",
    "Adventure is waiting; unfortunately, so are the bills.",
    "I’ve got a soul of a poet and the hands of a thief.",
    "I’m not distracted; I’m multi-tasking my survival.",
    "Life is a voyage; try not to sink before the end.",
    "I’ve never met a silence I couldn’t fill with a lie.",
    "I’m not ignoring you; I’m prioritizing my internal monologue.",
    "The sea is deep; my pockets are shallow—time to fix that.",
    "I’ve got a lucky coin—it has two heads, just in case.",
    "I’m not finished; I’m just plotting the sequel.",
    "Every day above ground is a good day; every day at sea is better.",
    "I’ve never met a warning label I didn’t ignore.",
    "I’m not stubborn; I’m persistent in my convictions.",
    "The stars guide me; the rum motivates me.",
    "I’ve got a legacy to build—or steal—whichever is faster.",
    "I’m not late; the world just started without me.",
    "Chaos is my co-pilot; luck is my navigator.",
    "I’ve never met a bet I didn’t like—or lose gracefully.",
    "I’m not a scoundrel; I’m a lovable rogue.",
    "The ocean is my playground; the shore is my penalty box.",
    "I’ve got a story for every scar—and a scar for every story.",
    "I’m not quitting; I’m strategically pivoting.",
    "Danger is just excitement with consequences.",
    "I’ve never met a dawn I didn’t welcome—eventually.",
    "I’m not alone; I’m in excellent company—myself.",
    "The tide turns; so do I—usually away from trouble.",
    "I’ve got a plan A, B, and C—and usually need D.",
    "I’m not flawed; I’m customized for adventure.",
    "History is written by the victors; I prefer to write the footnotes.",
    "I’ve never met a shore I couldn’t leave.",
    "I’m not waiting; I’m creating anticipation.",
    "The map is not the territory; but it helps limit the wandering.",
    "I’ve got a thirst for adventure—and rum—mostly rum.",
    "I’m not lost at sea; I’m at home on the waves.",
    "Destiny calls; I usually let it go to voicemail.",
    "I’ve never met a journey I regretted—once the hangover faded.",
    "I’m not reckless; I’m calculating the odds—badly.",
    "The horizon is a promise; the sunset is a receipt.",
    "I’ve got a ship to sail and a legend to burnish.",
    "I’m not finished yet; the best part is usually the escape."
];

document.addEventListener('DOMContentLoaded', () => {
    // Quote Initialization
    const quoteEl = document.getElementById('daily-quote');
    if (quoteEl) {
        quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    }

    // Attach Event Listeners to replacement buttons
    // Adjusted Fate Button
    const adjustFateBtn = document.querySelector('.clock-settings-btn');
    if (adjustFateBtn) {
        adjustFateBtn.addEventListener('click', openClockSettings);
    }

    // Modal Background Click (Close)
    const clockSettingsModal = document.getElementById('clock-settings-modal');
    if (clockSettingsModal) {
        clockSettingsModal.addEventListener('click', function (event) {
            if (event.target === this) closeClockSettings();
        });
    }

    // Seal Fate Button
    // We need to add an ID to the button in HTML or select it carefully
    // Since we are moving to external JS, let's grab it by the onclick attribute we removed or just select it
    // In the HTML update, we will add id="seal-fate-btn" to the button
    const sealFateBtn = document.getElementById('seal-fate-btn');
    if (sealFateBtn) {
        sealFateBtn.addEventListener('click', saveClockSettings);
    }

    // Initialize Components
    updateGauges();
    setInterval(updateGauges, 2000);

    updateDeathClock();
    setInterval(updateDeathClock, 1000);

    renderDock();
});

// --- Simulated Gauges ---
function updateGauges() {
    // CPU: Random fluctuation around 30-50%
    const cpu = Math.floor(Math.random() * 20) + 30;
    // RAM: Steady increment
    const ram = Math.floor(Math.random() * 10) + 40;

    const cpuVal = document.getElementById('cpu-val');
    const ramVal = document.getElementById('ram-val');
    const cpuCircle = document.getElementById('cpu-circle');
    const ramCircle = document.getElementById('ram-circle');

    if (cpuVal) cpuVal.textContent = cpu + '%';
    if (ramVal) ramVal.textContent = ram + '%';

    // Update Dash Offset (251 is full circle)
    // Offset = Total - (Total * Percentage)
    const cpuOffset = 251 - (251 * (cpu / 100));
    const ramOffset = 251 - (251 * (ram / 100));

    if (cpuCircle) cpuCircle.style.strokeDashoffset = cpuOffset;
    if (ramCircle) ramCircle.style.strokeDashoffset = ramOffset;
}

// --- Search ---
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const query = this.value;
            if (query) window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    });
}

// --- Captain's Dock (Bookmarks) ---
const dockContainer = document.getElementById('dock-container');
const modal = document.getElementById('modal');
const managerList = document.getElementById('manager-list');
const cancelBtn = document.getElementById('cancel-btn');
const saveBtn = document.getElementById('save-btn');
const titleInput = document.getElementById('link-title');
const urlInput = document.getElementById('link-url');

// Default Bookmarks
const defaultLinks = [
    { title: 'GitHub', url: 'https://github.com' },
    { title: 'YouTube', url: 'https://youtube.com' },
    { title: 'Gmail', url: 'https://mail.google.com' },
    { title: 'ChatGPT', url: 'https://chatgpt.com' }
];

// Load or Init
let bookmarks = JSON.parse(localStorage.getItem('captain_charts')) || defaultLinks;

function renderDock() {
    if (!dockContainer) return;
    dockContainer.innerHTML = '';

    bookmarks.forEach((link) => {
        const div = document.createElement('div');
        div.className = 'dock-icon';
        div.title = link.title;

        try {
            const domain = new URL(link.url).hostname;
            const iconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
            div.style.backgroundImage = `url('${iconUrl}')`;
        } catch (e) {
            console.error("Invalid URL:", link.url);
        }

        div.addEventListener('click', () => window.location.href = link.url);
        dockContainer.appendChild(div);
    });

    // Settings Gear Button
    const settingsBtn = document.createElement('div');
    settingsBtn.className = 'dock-icon add-dock-btn';
    settingsBtn.innerHTML = '⚙️';
    settingsBtn.title = "Manage Courses";
    settingsBtn.addEventListener('click', openManager);
    dockContainer.appendChild(settingsBtn);

    localStorage.setItem('captain_charts', JSON.stringify(bookmarks));
}

function openManager() {
    if (modal) {
        modal.classList.add('active');
        renderManagerList();
    }
}

function renderManagerList() {
    if (!managerList) return;
    managerList.innerHTML = '';

    if (bookmarks.length === 0) {
        managerList.innerHTML = '<div style="padding:10px; color:rgba(255,255,255,0.5);">No charts found.</div>';
        return;
    }

    bookmarks.forEach((link, index) => {
        const item = document.createElement('div');
        item.className = 'manager-item';

        try {
            const domain = new URL(link.url).hostname;
            const iconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=16`;

            item.innerHTML = `
                <span><img src="${iconUrl}" width="16" height="16" style="opacity:0.7;"> ${link.title}</span>
                <span class="manager-delete" data-index="${index}">✕</span>
            `;
        } catch (e) {
            item.innerHTML = `
                <span>${link.title}</span>
                <span class="manager-delete" data-index="${index}">✕</span>
            `;
        }

        managerList.appendChild(item);
    });
}

function deleteLink(index) {
    bookmarks.splice(index, 1);
    renderDock();
    renderManagerList();
}

if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
        if (modal) modal.classList.remove('active');
        if (titleInput) titleInput.value = '';
        if (urlInput) urlInput.value = '';
    });
}

if (saveBtn) {
    saveBtn.addEventListener('click', () => {
        const title = titleInput.value.trim();
        let url = urlInput.value.trim();

        if (title && url) {
            if (!url.startsWith('http')) url = 'https://' + url;

            bookmarks.push({ title, url });

            renderDock();
            renderManagerList();

            titleInput.value = '';
            urlInput.value = '';
        }
    });
}

// Global Listener for Delete (Delegation)
if (managerList) {
    managerList.addEventListener('click', (e) => {
        if (e.target.classList.contains('manager-delete')) {
            const index = parseInt(e.target.getAttribute('data-index'));
            deleteLink(index);
        }
    });
}

// --- Death Clock Logic ---
const defaultDeathDate = "2085-01-01";
let targetDateStr = localStorage.getItem('deathDate') || defaultDeathDate;

const clockContainer = document.getElementById('clockContainer');
let centerYearEl;

if (clockContainer) {
    centerYearEl = document.createElement('div');
    centerYearEl.className = 'center-year';
    centerYearEl.id = 'centerYear';
    clockContainer.appendChild(centerYearEl);
}

const ringsConfig = [
    { name: 'seconds', max: 60, radius: 130, label: 's' },
    { name: 'minutes', max: 60, radius: 110, label: 'm' },
    { name: 'hours', max: 24, radius: 90, label: 'h' },
    { name: 'days', max: 31, radius: 70, label: 'd' },
    { name: 'months', max: 12, radius: 50, label: 'mo' },
];

if (clockContainer) {
    ringsConfig.forEach(config => {
        const ring = document.createElement('div');
        ring.className = `clock-ring ring-${config.name}`;
        const total = config.max;
        const angleStep = 360 / total;

        for (let i = 0; i < total; i++) {
            const span = document.createElement('span');
            let text = i.toString().padStart(2, '0');
            if (config.name === 'months' || config.name === 'days') text = (i + 1).toString().padStart(2, '0');

            const inner = document.createElement('div');
            inner.textContent = text;
            span.appendChild(inner);

            span.setAttribute('data-unit', config.label);
            span.style.transform = `translate(-50%, -50%) rotate(${i * angleStep}deg) translateY(-${config.radius}px)`;
            ring.appendChild(span);
        }
        clockContainer.appendChild(ring);
        config.el = ring;
    });
}

function updateDeathClock() {
    const now = new Date();
    const s = now.getSeconds();
    const m = now.getMinutes();
    const h = now.getHours();
    const D = now.getDate() - 1;
    const M = now.getMonth();
    const Y = now.getFullYear();

    if (centerYearEl) centerYearEl.textContent = Y;

    rotateRing('seconds', s);
    rotateRing('minutes', m);
    rotateRing('hours', h);
    rotateRing('days', D);
    rotateRing('months', M);

    const deathDate = new Date(targetDateStr);
    const diff = deathDate - now;

    const countdownEl = document.getElementById('countdown');
    if (countdownEl) {
        if (diff <= 0) {
            countdownEl.textContent = "Time's Up";
        } else {
            const dy = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
            const dd = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
            const dh = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const dm = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const ds = Math.floor((diff % (1000 * 60)) / 1000);
            countdownEl.innerHTML =
                `<span>${dy}</span>y <span>${dd}</span>d <span>${dh}</span>h <span>${dm}</span>m <span>${ds}</span>s`;
        }
    }
}

function rotateRing(name, value) {
    const config = ringsConfig.find(r => r.name === name);
    if (!config || !config.el) return;
    const total = config.max;
    const angleStep = 360 / total;
    const rotateVal = -(value * angleStep) + 90;

    config.el.style.transform = `rotate(${rotateVal}deg)`;

    Array.from(config.el.children).forEach((child, index) => {
        if (index === value) {
            child.classList.add('active-label');
        } else {
            child.classList.remove('active-label');
        }
    });
}

function openClockSettings() {
    const modal = document.getElementById('clock-settings-modal');
    if (modal) modal.classList.add('active');

    // Parse existing YYYY-MM-DD
    if (targetDateStr) {
        const parts = targetDateStr.split('-'); // [YYYY, MM, DD]
        if (parts.length === 3) {
            const yearInput = document.getElementById('deathYear');
            const monthInput = document.getElementById('deathMonth');
            const dayInput = document.getElementById('deathDay');

            if (yearInput) yearInput.value = parts[0];
            if (monthInput) monthInput.value = parts[1];
            if (dayInput) dayInput.value = parts[2];
        }
    }
}

function closeClockSettings() {
    const modal = document.getElementById('clock-settings-modal');
    if (modal) modal.classList.remove('active');
}

function saveClockSettings() {
    const dVal = document.getElementById('deathDay').value;
    const mVal = document.getElementById('deathMonth').value;
    const yVal = document.getElementById('deathYear').value;

    if (dVal && mVal && yVal) {
        const d = dVal.toString().padStart(2, '0');

        // Construct YYYY-MM-DD
        const newVal = `${yVal}-${mVal}-${d}`;
        targetDateStr = newVal;
        localStorage.setItem('deathDate', newVal);
        updateDeathClock();
        closeClockSettings();
    }
}
