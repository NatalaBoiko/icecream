!function(){new Swiper(".swiper",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets",clickable:"true"}});var e=document.querySelector(".burger__button"),t=document.querySelector(".mobile__menu"),n=document.querySelector(".header__btn"),o=document.querySelectorAll(".mobile__menu-nav li"),i=document.querySelector(".hero__section"),l=function(){t.classList.contains("mobile__menu-visible")&&(t.classList.remove("mobile__menu-visible"),n.classList.remove("is-hidden"),e.classList.remove("is-hidden"))};e.addEventListener("click",(function(o){t.classList.add("mobile__menu-visible"),t.classList.contains("mobile__menu-visible")?(n.classList.toggle("is-hidden"),e.classList.toggle("is-hidden"),i.addEventListener("click",(function(e){e.target!==t&&l()}))):(n.classList.toggle("is-hidden"),e.classList.toggle("is-hidden"),console.log("else"))})),o.forEach((function(e){e.addEventListener("click",l())}));var s=document.querySelector(".to_top");window.addEventListener("scroll",(function(){window.scrollY>=100?s.classList.add("to_top-visible"):s.classList.remove("to_top-visible")}));var c=document.querySelectorAll("button[data-modal]"),a=document.querySelectorAll(".modal"),r=document.querySelector(".modal__content"),d=document.body,u=document.querySelectorAll(".modal__cross"),m=document.querySelector(".modal__form"),_=function(e){e.classList.remove("modal__visible"),d.classList.remove("stop__scroll")};c.forEach((function(e){e.addEventListener("click",(function(t){console.log(d.classList),a.forEach((function(t){t.id===e.dataset.modal&&(console.log(t.id),t.classList.add("modal__visible"),d.classList.add("stop__scroll"))}))}))})),a.forEach((function(e){e.addEventListener("click",(function(t){if(t.preventDefault(),m.addEventListener("click",(function(e){e.preventDefault()})),t.target===r||"INPUT"===t.target.nodeName||"TEXTAREA"===t.target.nodeName)t.preventDefault();else{if(t.target!==t.currentTarget&&!u)return;_(e)}}))})),a.forEach((function(e){document.addEventListener("keydown",(function(t){"Escape"===t.code&&_(e)}))}));var v=document.querySelector(".form__btn");v.addEventListener("click",(function(){var e;e={from_name:document.getElementById("name").value,email_id:document.getElementById("email_id").value,message:document.getElementById("message").value},emailjs.send("service_cknjun9","template_bllpisk",e).then((function(e){console.log("SUCCESS!"+e.status+e.text)}),(function(e){console.log("FAILED...",e)}))}))}();
//# sourceMappingURL=index.b65e44d3.js.map
