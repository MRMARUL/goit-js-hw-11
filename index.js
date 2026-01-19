import{S as d,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",m="54275957-199f1005dc59da3798006718a";function h(i){const t=new URLSearchParams({key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${f}?${t}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function p(i){return i.map(({webformatURL:t,largeImageURL:o,tags:s,likes:e,views:r,comments:n,downloads:u})=>`
      <li class="gallery-item">
        <a href="${o}">
          <img src="${t}" alt="${s}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes</b>: ${e}</p>
          <p><b>Views</b>: ${r}</p>
          <p><b>Comments</b>: ${n}</p>
          <p><b>Downloads</b>: ${u}</p>
        </div>
      </li>`).join("")}const y=document.querySelector(".search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new d(".gallery a");y.addEventListener("submit",i=>{i.preventDefault();const t=i.target.elements.query.value.trim();t&&(c.innerHTML="",l.classList.remove("is-hidden"),h(t).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}c.insertAdjacentHTML("beforeend",p(o.hits)),g.refresh()}).catch(()=>{a.error({message:"Something went wrong. Please try again later."})}).finally(()=>{l.classList.add("is-hidden")}))});
//# sourceMappingURL=index.js.map
