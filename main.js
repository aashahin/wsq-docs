const route = window.location.hash;
const indexPage = document.getElementById("index");
const featuresPage = document.getElementById("features");
const requirementsPage = document.getElementById("requirements");
const databasePage = document.getElementById("database");
const installPage = document.getElementById("install");

if (route === "#index") {
  databasePage.style.display = "none";
  featuresPage.style.display = "none";
  requirementsPage.style.display = "none";
  installPage.style.display = "none";
} else if (route === "#features") {
  document.title = "المميزات - وسَق";
  indexPage.style.display = "none";
  databasePage.style.display = "none";
  requirementsPage.style.display = "none";
  installPage.style.display = "none";
} else if (route === "#requirements") {
  document.title = "المتطلبات - وسَق";
  indexPage.style.display = "none";
  databasePage.style.display = "none";
  featuresPage.style.display = "none";
  installPage.style.display = "none";
} else if (route === "#database") {
  document.title = "تثبيت قاعدة البيانات - وسَق";
  indexPage.style.display = "none";
  featuresPage.style.display = "none";
  requirementsPage.style.display = "none";
  installPage.style.display = "none";
} else if (route === "#install") {
  document.title = "تثبيت النظام - وسَق";
  indexPage.style.display = "none";
  databasePage.style.display = "none";
  featuresPage.style.display = "none";
  requirementsPage.style.display = "none";
} else {
  document.title = "وسَق";
  databasePage.style.display = "none";
  featuresPage.style.display = "none";
  requirementsPage.style.display = "none";
  installPage.style.display = "none";
}
