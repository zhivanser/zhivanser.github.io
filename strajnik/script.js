// СТРАЖНиК — мелкая интерактивность без зависимостей
(function(){
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function(){ nav.classList.toggle('open'); });
    nav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ nav.classList.remove('open'); });
    });
  }
  // reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target); }
      });
    }, {threshold: 0.12});
    els.forEach(function(el){ io.observe(el); });
  } else {
    els.forEach(function(el){ el.classList.add('vis'); });
  }
  // to top
  var totop = document.getElementById('totop');
  window.addEventListener('scroll', function(){
    if (window.scrollY > 600) totop.classList.add('show');
    else totop.classList.remove('show');
  }, {passive:true});
  totop.addEventListener('click', function(){ window.scrollTo({top:0, behavior:'smooth'}); });
})();
