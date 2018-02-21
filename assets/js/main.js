var container = document.querySelector('.screenshot');           
var tabs = document.querySelectorAll('.tab');
var activeTab = tabs[2];

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', function(e, i) {
    activeTab.classList.remove('is-active');
    activeTab = this;
    e.target.classList.add('is-active', 'is-pressed');

    setTimeout(() => {
      e.target.classList.remove('is-pressed');
    }, 120);

    const className = activeTab.textContent.toLowerCase();
    container.className = `screenshot ${className}`;
  })
}