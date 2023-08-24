const route = window.location.hash;
const indexPage = document.getElementById('index');
const featuresPage = document.getElementById('features');
const requirementsPage = document.getElementById('requirements');
const databasePage = document.getElementById('database');

if (route === '#index') {
    indexPage.style.display = 'block';
    databasePage.style.display = 'none';
    featuresPage.style.display = 'none';
    requirementsPage.style.display = 'none';
}
else if (route === '#features') {
    indexPage.style.display = 'none';
    databasePage.style.display = 'none';
    requirementsPage.style.display = 'none';
}
else if (route === '#requirements') {
    indexPage.style.display = 'none';
    databasePage.style.display = 'none';
    featuresPage.style.display = 'none';
}
else if (route === '#database') {
    indexPage.style.display = 'none';
    databasePage.style.display = 'block';
    featuresPage.style.display = 'none';
    requirementsPage.style.display = 'none';
} else {
    indexPage.style.display = 'block';
    databasePage.style.display = 'none';
    featuresPage.style.display = 'none';
    requirementsPage.style.display = 'none';
}
