console.log('OBS');
var switchColorTheme = function() {
  theme = localStorage.getItem('theme');
  if(theme == 'dark') {
    console.log('Switch to light');
    localStorage.setItem('theme', 'light');
    jtd.setTheme('light');      
  } else {
    console.log('Switch to dark');
    localStorage.setItem('theme', 'dark');
    jtd.setTheme('dark');    
  }
}

var theme = localStorage.getItem('theme');
console.log('Use theme', theme);
if(theme == 'dark') {
  jtd.setTheme('dark');  
} else {
  jtd.setTheme('light');  
}
