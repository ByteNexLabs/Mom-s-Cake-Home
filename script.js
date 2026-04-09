const waNumber = "919386440069"; 

// 1. Order direct from Cake Cards
function orderCake(cakeName) {
    const message = `Hi Satabdi, I want to order a cake from Moms Cake Home.\n\nI am interested in the *${cakeName}*. Could you please share the details and pricing?`;
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
}

// 2. Submit Order Form
function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const cakeType = document.getElementById('cakeType').value;
    const notes = document.getElementById('custMessage').value;

    let message = `Hi Satabdi, I want to order a cake from Moms Cake Home. ❤️\n\n`;
    message += `*Name:* ${name}\n`;
    message += `*Phone:* ${phone}\n`;
    message += `*Cake Type:* ${cakeType}\n`;
    
    if (notes.trim() !== "") {
        message += `*Special Requests:* ${notes}\n`;
    }
    
    message += `\nPlease let me know the next steps!`;

    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
}

// 3. Smooth scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
