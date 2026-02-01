// The Cyber Crunch - Interactive Scripts

// Add typing effect to terminal
document.addEventListener('DOMContentLoaded', function() {
    console.log('The Cyber Crunch initialized...');
    
    // Add some interactive terminal commands
    const terminalBody = document.querySelector('.terminal-body');
    
    // Click anywhere on terminal to add interactivity
    if (terminalBody) {
        terminalBody.addEventListener('click', function(e) {
            // Add a subtle pulse effect when clicked
            this.style.boxShadow = '0 0 30px rgba(0, 255, 65, 0.5)';
            setTimeout(() => {
                this.style.boxShadow = '';
            }, 200);
        });
    }
    
    // Add hover effects to info cards
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#00ccff';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = '#00ff41';
        });
    });
    
    // Add matrix rain effect in background (subtle)
    createMatrixRain();
    
    // Log system status
    console.log('Status: ONLINE');
    console.log('Neural Networks: ACTIVE');
    console.log('Security Protocols: ENABLED');
});

// Matrix rain effect
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.1';
    canvas.style.zIndex = '0';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);
    
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = '15px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = characters[Math.floor(Math.random() * characters.length)];
            ctx.fillText(text, i * 20, drops[i] * 20);
            
            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 50);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Reinitialize drops array with new column count
        const newColumns = Math.floor(canvas.width / 20);
        drops.length = newColumns;
        drops.fill(1);
    });
}

// Add some cyberpunk quotes that appear in console
const cyberQuotes = [
    'The future is already here — it\'s just not evenly distributed.',
    'In cyberspace, no one can hear you scream.',
    'The only way out is through.',
    'Information wants to be free.',
    'We are the architects of our own reality.'
];

setTimeout(() => {
    const randomQuote = cyberQuotes[Math.floor(Math.random() * cyberQuotes.length)];
    console.log(`%c${randomQuote}`, 'color: #00ff41; font-style: italic;');
}, 2000);
