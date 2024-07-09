const characters = [
    { name: "Bill Cipher", image: "/Images/Bill.png", url: "/CharacterInfo/Bill/BillInfo.html" },
    { name: "Lasse Vestergård", image: "/Images/Lasse.png", url: "/CharacterInfo/Lasse/LasseInfo.html" },
    // Add more characters as needed
];

document.addEventListener('DOMContentLoaded', () => {
    const characterGrid = document.getElementById('characterGrid');
    const searchInput = document.getElementById('searchInput');

    function createCharacterCard(character) {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
        `;
        card.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = character.url;
        });
        return card;
    }
    function displayCharacters(charactersToShow) {
        characterGrid.innerHTML = '';
        charactersToShow.forEach(character => {
            characterGrid.appendChild(createCharacterCard(character));
        });
    }

    function filterCharacters(searchTerm) {
        return characters.filter(character => 
            character.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim();
        const filteredCharacters = filterCharacters(searchTerm);
        displayCharacters(filteredCharacters);
    });

    // Initial display of all characters
    displayCharacters(characters);
});