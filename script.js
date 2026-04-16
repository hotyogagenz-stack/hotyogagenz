function getGuidance(mood) {
    const box = document.getElementById('guidance-result');
    const messages = {
        sad: "It's okay to not be okay. Try the 'Heart Healing' journaling prompt today. We are with you. ❤️",
        anxious: "Breathe in for 4, hold for 4, release for 4. You are safe here. Our Hot Yoga can help ground you. 🌿",
        tired: "You've been doing a lot. Productivity is not your only worth. Take 20 minutes to just vent. 🥱",
        happy: "We love this for you! Keep that energy. Maybe share a positive thought in our community blog? ✨"
    };

    box.style.opacity = 0;
    setTimeout(() => {
        box.innerHTML = `<p style="color: #C084FC; font-style: normal; font-weight: 600;">${messages[mood]}</p>`;
        box.style.opacity = 1;
    }, 300);
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Scroll Reveal Effect
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.glass-card');
    reveals.forEach(card => {
        const windowHeight = window.innerHeight;
        const revealTop = card.getBoundingClientRect().top;
        if (revealTop < windowHeight - 150) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
