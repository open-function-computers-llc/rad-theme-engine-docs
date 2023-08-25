const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

document.getElementById('mode').addEventListener('click', () => {

  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');

});

if (localStorage.getItem('theme') === 'dark') {

  document.body.classList.add('dark');

}

if (!localStorage.getItem('darkModeCheck')) {
  if(isDarkMode === true){
    document.body.classList.add('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  }

  localStorage.setItem('darkModeCheck', 'true');
}
