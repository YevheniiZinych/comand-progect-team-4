!function(){var e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=function(){var o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(o){o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();var menuLinks=document.querySelectorAll(".header__nav-link[data-goto]");if(menuLinks.length>0){function onMenuLinkClick(e){var t=e.target;if(t.dataset.goto&&document.querySelector(t.dataset.goto)){var o=document.querySelector(t.dataset.goto).getBoundingClientRect().top+pageYOffset-document.querySelector("header").offsetHeight;window.scrollTo({top:o,behavior:"smooth"}),e.preventDefault()}}menuLinks.forEach((function(e){e.addEventListener("click",onMenuLinkClick)}))}
//# sourceMappingURL=index.ae6626ef.js.map
