const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

document.getElementById('mode').addEventListener('click', () => {

  document.body.classList.toggle('dark');
  let newTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);

  document.body.setAttribute('data-bs-theme',newTheme);

});

if (localStorage.getItem('theme') === 'dark') {

  document.body.classList.add('dark');
  document.body.setAttribute('data-bs-theme','dark');

}

if (!localStorage.getItem('darkModeCheck')) {
  if(isDarkMode === true){
    document.body.classList.add('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  }

  localStorage.setItem('darkModeCheck', 'true');
}
