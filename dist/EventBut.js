function EventBut(){let r=[],n={bind:function(n,e){e={name:n,handler:e};return r[n]=r[n]||[],r[n].push(e),console.log(e),e},unbind:function(n,e){let t=r[n];e=t.indexOf(e);return-1!==e?r[n].splice(e,1):[]},trigger:function(n,e){let t=r[n];return!!t&&(t.forEach(n=>n.handler(e)),!0)}};return n}
//# sourceMappingURL=EventBut.js.map
