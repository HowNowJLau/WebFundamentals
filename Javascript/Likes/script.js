var initialLikes = [9, 12, 9];

function increaseNeilLikes() {
    var id = document.querySelector('#neil-likes');
    initialLikes[0]++;
    id.innerText = initialLikes[0] + " like(s)";
}

function increaseNicholeLikes() {
    var id = document.querySelector('#nichole-likes');
    initialLikes[1]++;
    id.innerText = initialLikes[1] + " like(s)";
}

function increaseJimLikes() {
    var id = document.querySelector('#jim-likes');
    initialLikes[2]++;
    id.innerText = initialLikes[2] + " like(s)";
}