// Function 1: Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');

        if (targetId === '#top') {
            // Logic to scroll smoothly to the absolute top of the page (0, 0)
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Existing logic: Scroll smoothly to a specific section ID
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Function 2: Typing Effect for the Terminal
const textElement = document.getElementById('typing-text');
const phrases = [
    // Original Phrases
    "Compiling knowledge...",
    "Adapting to new meta...",
    "Feeling a bit low today...",
    "System operational.",
    "Grinding rank...",
    
    // Personalized Tech Phrases (Genius Focus)
    "Optimizing server architecture.",
    "Bypassing school firewall.",
    "Calculating latency (ping: 5ms).",
    "Running debug on existence.",
    "Configuration check: complete.",
    
    // Personalized Student/Mood Phrases (Bad at studies/Sad)
    "Trying to understand this equation.",
    "Error: Motivation not found.",
    "Prioritizing real-world skills.",
    "Just another day in 9th Standard.",
    "Need a 20-minute power nap.",
    
    // Personalized Gaming/Vegetarian Phrases (Adaptability)
    "New game, new strat.",
    "Switching main roles.",
    "Vegetarian power up active.",
    "Loading cheat codes (it's called skill).",

    // Additional Tech/Server Phrases
    "Checking kernel logs for fun.",
    "Setting up a new proxy chain.",
    "Brotli compression enabled.",
    "Need more RAM for Minecraft.",
    "Patching vulnerability 404.",
    "Code is compiling, standby...",
    "Rebooting imagination...",
    "Why doesn't the teacher use SSH?",
    "Database optimization complete.",
    "Access granted. Welcome, user.",
    
    // Additional Student/Mood Phrases
    "Physics class feels like a DDoS attack.",
    "Mentally checking out of history.",
    "Trying to merge the curriculum branches. Conflict detected.",
    "School system offline.",
    "Mood set to: grayscale.",
    "Just a little tired, it's fine.",
    "Is it Friday yet?",
    "Contemplating the meaning of homework.",
    "Need better sleep metrics.",
    "Running on pure caffeine and logic.",

    // Additional Gaming/Adaptability Phrases
    "Mastered this game's movement in 30 minutes.",
    "Reading patch notes.",
    "Theory-crafting a new build.",
    "Need a vegetarian snack for the raid.",
    "The grind is eternal.",
    "My K/D ratio is higher than my GPA.",
    "Respawn timer counting down...",
    "PvP mode: activated.",
    "Exploring the map boundaries.",
    "It's not luck, it's skill.",

    // --- 50 NEW PHRASES ---
    // Tech/Genius Focus (New Set)
    "Deploying firewall update (v. school-admin-blocker).",
    "Analyzing CPU usage (too high for this simple task).",
    "Packet loss: 99% during history lecture.",
    "Generating secure, 16-character password (it's 'password123').",
    "Searching for a zero-day exploit in my textbook.",
    "Compiling a new custom shader for better focus.",
    "My brain is running on Python 2.7. Time for an upgrade.",
    "Just decrypted the school's Wi-Fi password. (It was 'guest').",
    "Checking system integrity... found an algebra variable.",
    "Task Kill: Procrastination.exe.",
    "Need to optimize my sleep cycle using machine learning.",
    "Running a penetration test on the fridge lock.",
    "Installing Linux on my old graphics calculator.",
    "IP address currently broadcasting: 127.0.0.1 (Localhost).",
    "Writing a script to automate note-taking (failed).",

    // Student/Mood Focus (New Set)
    "Motivation.status = 404 Not Found.",
    "Waiting for the next subject to load.",
    "Trying to merge the curriculum branches. Conflict detected.",
    "Debugging my study habits (still buggy).",
    "Current energy level: 5%. Recommend recharge.",
    "Daydreaming about future server racks.",
    "Feeling the weight of exponential decay.",
    "Processing emotional output... NaN.",
    "Running on low power mode.",
    "Thinking about dropping out to found a startup.",
    "Wishing school had a skip_class() command.",
    "This math problem is a logical fallacy.",
    "Just need to get through this day (or semester).",
    "Checking for cheat codes in the final exam.",
    "Priorities = Tech > Sleep > Grades.",

    // Gaming/Adaptability Focus (New Set)
    "My current quest objective: find the remote.",
    "Unlocked the 'Perfect Adaptation' achievement.",
    "Farming resources for the next raid night.",
    "The respawn mechanism in real life is unfair.",
    "My inventory is full of empty soda cans.",
    "This game has terrible hit registration (I missed the bus).",
    "Optimizing my keybindings for studying.",
    "Currently maining the 'Overachieving Procrastinator' class.",
    "Found a secret route past the hallway monitor.",
    "Leveling up my social anxiety skill tree.",
    "Need better ping to the teacher's desk.",
    "If only grades scaled with playtime.",
    "My real life loadout needs an urgent buff.",
    "Executing the stealth sequence for a late entry.",
    "My brain is running the latest game engine.",

    // Vegetarian/Miscellaneous Focus (New Set)
    "Fueling system with plant-based logic.",
    "Searching for the optimal protein source (beans or lentils?).",
    "Vegetarian diet: high energy, low lag.",
    "Calculating the distance to the nearest decent veg snack.",
    "Recharging health with a power green smoothie."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Pause before new word
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start typing when page loads
document.addEventListener('DOMContentLoaded', typeEffect);


// Function 3: Ensure all external links open in a new tab
function setExternalLinksTarget() {
    const currentDomain = window.location.hostname;

    document.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');

        if (href && !href.startsWith('#')) {
            try {
                const linkUrl = new URL(href, window.location.origin);

                if (linkUrl.hostname !== currentDomain) {
                    link.setAttribute('target', '_blank');
                    link.setAttribute('rel', 'noopener noreferrer');
                }
            } catch (e) {
                if (href.startsWith('http')) {
                    link.setAttribute('target', '_blank');
                    link.setAttribute('rel', 'noopener noreferrer');
                }
            }
        }
    });
}

// Call the function once to set targets on load
setExternalLinksTarget();