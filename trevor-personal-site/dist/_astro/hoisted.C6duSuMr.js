document.querySelectorAll(".nav-link").forEach(t=>{const{pathname:n}=window.location,a=t.pathname;(a===n||a.length>1&&n.includes(a))&&t.classList.add("active")});
