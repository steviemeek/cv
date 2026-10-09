// SCRIPT to write date of last modification (update) where called on a page
// steviemeek
document.addEventListener('DOMContentLoaded', () => {
    const dateSpan = document.getElementById('auto-date');
    if (dateSpan) {
        const modDate = new Date(document.lastModified);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        dateSpan.innerText = modDate.toLocaleDateString('en-GB', options);
    }
});

