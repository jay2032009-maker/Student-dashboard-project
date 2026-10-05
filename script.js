const btn=document.getElementById('menuBtn'), side=document.getElementById('sidebar');
btn.addEventListener('click',()=>side.classList.toggle('open'));
document.querySelectorAll('.sidebar a').forEach(a=>a.addEventListener('click',()=>side.classList.remove('open')));