// Change navbar color on scroll
window.onscroll = function() {
    const nav = document.getElementById('navbar');
    if (window.pageYOffset > 100) {
        nav.style.background = "#00152b";
        nav.style.padding = "10px 8%";
    } else {
        nav.style.background = "#002D5B";
        nav.style.padding = "20px 8%";
    }
};

// Handle Review/Message Box submission
document.getElementById('safesolForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('userName').value;
    alert(`Safesol Executive Team: Message received from ${name}. We appreciate your interest and will respond within 2 hours.`);
    this.reset();
});