const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const root=document.documentElement, theme=$("#theme");
const saved=localStorage.getItem("theme"); if(saved) root.dataset.theme=saved;
function themeIcon(){theme.textContent=root.dataset.theme==="light"?"☾":"☼"} themeIcon();
theme.onclick=()=>{root.dataset.theme=root.dataset.theme==="light"?"dark":"light";localStorage.setItem("theme",root.dataset.theme);themeIcon()};
$("#menu").onclick=()=>{$(".nav nav").classList.toggle("mobile-open")};

const heat=$(".heatmap"); for(let i=0;i<240;i++){const x=document.createElement("i");const r=Math.random();x.style.background=r>.86?"#9a86ed":r>.70?"#7460bf":r>.48?"#51418a":r>.25?"#30275a":"#15151a";heat.appendChild(x)}
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});$$(".reveal").forEach(e=>obs.observe(e));
$$("[data-count]").forEach(el=>{let done=false;const o=new IntersectionObserver(es=>{if(es[0].isIntersecting&&!done){done=true;const end=+el.dataset.count;let n=0;const t=setInterval(()=>{n+=Math.ceil(end/25);if(n>=end){n=end;clearInterval(t)}el.textContent=n},35);o.disconnect()}});o.observe(el)});
addEventListener("scroll",()=>{const h=document.documentElement;$(".progress").style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%"});
