function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active-section');
    });
    document.getElementById(sectionId).classList.add('active-section');
}

function addRecentlyPlayed(gameName, gameLink, gameImage) {
    let recentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
    recentlyPlayed = recentlyPlayed.filter(game => game.name !== gameName);
    recentlyPlayed.unshift({ name: gameName, link: gameLink, image: gameImage });
    if (recentlyPlayed.length > 5) recentlyPlayed.pop();
    localStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayed));
    displayRecentlyPlayed();
}

function displayRecentlyPlayed() {
    let recentlyPlayedList = document.getElementById('recently-played-list');
    recentlyPlayedList.innerHTML = '';
    let recentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
    recentlyPlayed.forEach(game => {
        let listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${game.link}" target="_blank">
            <img src="${game.image}" alt="${game.name}" class="game-image">
            <p>${game.name}</p>
        </a>`;
        recentlyPlayedList.appendChild(listItem);
    });
}
document.addEventListener('DOMContentLoaded', displayRecentlyPlayed);
