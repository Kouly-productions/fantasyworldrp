const searchableItems = [
    { title: 'Bill Cipher', url: 'BillInfo.html' },
    { title: 'Knight', url: 'Knight.html' },
    // Add more items as needed
];

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm === '') {
            searchResults.innerHTML = '';
            return;
        }
        
        const filteredItems = searchableItems.filter(item => 
            item.title.toLowerCase().includes(searchTerm)
        );

        displayResults(filteredItems);
    });

    function displayResults(results) {
        searchResults.innerHTML = '';
        if (results.length === 0) {
            searchResults.style.display = 'none';
            return;
        }
        
        results.forEach(item => {
            const div = document.createElement('div');
            div.innerHTML = `<a href="${item.url}">${item.title}</a>`;
            searchResults.appendChild(div);
        });
        searchResults.style.display = 'block';
    }
});