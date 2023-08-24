const route = window.location.hash;
const indexPage = document.getElementById('index');
const databasePage = document.getElementById('database');

if (route === '#index') {
    indexPage.style.display = 'block';
    databasePage.style.display = 'none';
}
else if (route === '#database') {
    indexPage.style.display = 'none';
    databasePage.style.display = 'block';
} else {
    indexPage.style.display = 'block';
    databasePage.style.display = 'none';
}
