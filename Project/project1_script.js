
document.addEventListener('DOMContentLoaded', function(){
  // Modal
  var openModal = document.getElementById('openModalBtn');
  var modal = document.getElementById('modal');
  var modalClose = document.getElementById('modalClose');
  if(openModal && modal){
    openModal.addEventListener('click', function(){ modal.style.display='flex'; modal.setAttribute('aria-hidden','false'); });
  }
  if(modalClose && modal){
    modalClose.addEventListener('click', function(){ modal.style.display='none'; modal.setAttribute('aria-hidden','true'); });
    modal.addEventListener('click', function(e){ if(e.target===modal) { modal.style.display='none'; }});
  }

  // Go to Top
  var toTop = document.getElementById('toTop');
  toTop.addEventListener('click', function(){ window.scrollTo({top:0,behavior:'smooth'}); });

  // Circle counter
  var circle = document.getElementById('clickCircle');
  var reset = document.getElementById('resetCircle');
  var count = 0;
  if(circle){ circle.addEventListener('click', function(){ count++; circle.textContent = count; }); }
  if(reset){ reset.addEventListener('click', function(){ count=0; if(circle) circle.textContent = count; }); }

  // Simple slideshow (manual, no external libs)
  var slides = document.querySelectorAll('#slideshow .slide');
  var slideIndex = 0;
  function showSlide(i){ slides.forEach(function(s,idx){ s.style.display = idx===i ? 'block' : 'none'; }); }
  if(slides.length) { showSlide(slideIndex); /* optional auto advance: setInterval(...) */ }

  // Card gallery navigation (3 visible, looping)
  var cards = document.getElementById('cards');
  var left = document.getElementById('leftBtn');
  var right = document.getElementById('rightBtn');
  var total = cards ? cards.children.length : 0;
  var visible = 3;
  var pageCount = Math.ceil(total/visible);
  var page = 0;
  function updateGallery(){ if(cards) cards.style.transform = 'translateX(-' + (page*100) + '%)'; }
  if(right){ right.addEventListener('click', function(){ page = (page+1)%pageCount; updateGallery(); }); }
  if(left){ left.addEventListener('click', function(){ page = (page-1+pageCount)%pageCount; updateGallery(); }); }

  // Lab: username availability checker
  var takenUsernames = ['admin','user123','testuser','guest','peterpan'];
  var labInput = document.getElementById('lab_username');
  var labFeedback = document.getElementById('lab_feedback');
  var labForm = document.getElementById('labForm');
  var labSubmit = document.getElementById('lab_submit');
  if(labInput){
    labInput.addEventListener('input', function(){
      var val = (labInput.value||'').trim().toLowerCase();
      if(val===''){ labFeedback.textContent=''; if(labSubmit) labSubmit.disabled=true; return; }
      var available = takenUsernames.indexOf(val)===-1;
      if(available){ labFeedback.textContent='Available'; labFeedback.className='lab-feedback available'; if(labSubmit) labSubmit.disabled=false; }
      else { labFeedback.textContent='Taken'; labFeedback.className='lab-feedback unavailable'; if(labSubmit) labSubmit.disabled=true; }
    });
  }
  if(labForm){ labForm.addEventListener('submit', function(e){ e.preventDefault(); /* simulate register */ }); }
  if(labSubmit) labSubmit.disabled = true;

  // Header background change on scroll (visible state toggle)
  var header = document.getElementById('siteHeader');
  var origBg = header ? header.style.background : '';
  window.addEventListener('scroll', function(){
    if(!header) return;
    if(window.scrollY > 50){ header.style.background = '#ffddcc'; } else { header.style.background = origBg || '#fff'; }
  });

  // Title color update on resize (three ranges)
  var pageTitle = document.getElementById('pageTitle');
  function updateTitleColor(){
    var w = window.innerWidth;
    if(!pageTitle) return;
    if(w>1000) pageTitle.style.color = 'blue';
    else if(w>700) pageTitle.style.color = 'green';
    else if(w>300) pageTitle.style.color = 'orange';
    else pageTitle.style.color = '';
  }
  window.addEventListener('resize', updateTitleColor);
  updateTitleColor();
});