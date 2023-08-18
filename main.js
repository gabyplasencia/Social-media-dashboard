//https://github.com/thecodercoder/fem-dklt-toggle/blob/main/app/js/script.js

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const setDarkMode = () => {
  lightButton.checked = false
  darkButton.checked = true
  document.querySelector('body').classList = 'dark';
  localStorage.setItem('colorMode', 'dark');
};

const setLightMode = () => {
  darkButton.checked = false
  lightButton.checked = true
  document.querySelector('body').classList = 'light';
  localStorage.setItem('colorMode', 'light');
};

const colorModeFromLocalStorage = () => {
  return localStorage.getItem('colorMode');
};

const colorModeFromPreferences = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches 
              ? 'dark'
              : 'light' 
};

const loadAndUpdateColor = () => {
  const color = colorModeFromLocalStorage() || colorModeFromPreferences();
  color == 'dark' ? darkButton.click() : lightButton.click();
};

const toggleWrapper = document.querySelector('.toggle__wrapper');
toggleWrapper.addEventListener('click', (event) => {
  toggleCheck(event.target)
});

const toggleCheck = (target) => {
  if(target.name == "theme"){
    darkButton.checked ? setDarkMode() : setLightMode()
    return
  }
  darkButton.checked ? setLightMode() : setDarkMode()
}
window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        event.matches ? darkButton.click() : lightButton.click();
      });
      
loadAndUpdateColor();