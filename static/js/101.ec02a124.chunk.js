"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[101],{2596:function(e,n,t){t.d(n,{Z:function(){return l}});var r,i,c=t(7692),o=t(168),a=t(5706),s=t(1087),u=a.Z.li(r||(r=(0,o.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),v=(0,a.Z)(s.rU)(i||(i=(0,o.Z)(["\n  font-size: 18px;\n  color: #3f1ae0;\n  text-decoration: none;\n"]))),f=t(184),l=function(e){var n=e.id,t=e.title,r=e.location;return(0,f.jsxs)(u,{children:[(0,f.jsx)(c.FXJ,{style:{marginRight:"8px"}}),(0,f.jsx)(v,{to:"/movies/".concat(n),state:{from:r},children:t})]})}},8101:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r,i,c=t(3433),o=t(5861),a=t(9439),s=t(4687),u=t.n(s),v=t(2791),f=t(7689),l=t(1414),d=t(168),g=t(5706),p=g.Z.h1(r||(r=(0,d.Z)(["\n  margin-bottom: 20px;\n"]))),h=g.Z.ul(i||(i=(0,d.Z)([""]))),m=t(2596),Z=t(184),x=function(){var e=(0,v.useState)([]),n=(0,a.Z)(e,2),t=n[0],r=n[1],i=(0,f.TH)();return(0,v.useEffect)((function(){if(!t.length){var e=function(){var e=(0,o.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.getTrendMovies();case 3:n=e.sent,t=n.data.results,r((0,c.Z)(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(new Error);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[t]),(0,Z.jsx)("section",{className:"section",children:(0,Z.jsxs)("div",{className:"container",children:[(0,Z.jsx)(p,{children:"Trending day"}),(0,Z.jsx)(h,{children:t.map((function(e){var n=e.id,t=e.title;return(0,Z.jsx)(m.Z,{id:n,title:t,location:i},n)}))})]})})}},1414:function(e,n,t){t.d(n,{a:function(){return c}});var r=t(1243);r.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="75863554b170222a0e5caae215e0183a",c={getTrendMovies:function(){return r.Z.get("trending/movie/day?api_key=".concat(i))},getMovieById:function(e){return r.Z.get("movie/".concat(e,"?api_key=").concat(i))},getMovieByQuery:function(e){return r.Z.get("search/movie?query=".concat(e,"&api_key=").concat(i))},getCreditsMovie:function(e){return r.Z.get("movie/".concat(e,"/credits?api_key=").concat(i))},getReviewsMovie:function(e){return r.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(i))}}}}]);
//# sourceMappingURL=101.ec02a124.chunk.js.map