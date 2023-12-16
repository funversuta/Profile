"use strict";(()=>{var e={};e.id=92,e.ids=[92],e.modules={8788:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>x,default:()=>u,getServerSideProps:()=>m,getStaticPaths:()=>g,getStaticProps:()=>d,reportWebVitals:()=>h,routeModule:()=>v,unstable_getServerProps:()=>f,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>P,unstable_getStaticProps:()=>S});var a=r(7093),i=r(5244),l=r(1323),p=r(4684),o=r(3900),n=r(4310),c=e([o,n]);[o,n]=c.then?(await c)():c;let u=(0,l.l)(n,"default"),d=(0,l.l)(n,"getStaticProps"),g=(0,l.l)(n,"getStaticPaths"),m=(0,l.l)(n,"getServerSideProps"),x=(0,l.l)(n,"config"),h=(0,l.l)(n,"reportWebVitals"),S=(0,l.l)(n,"unstable_getStaticProps"),P=(0,l.l)(n,"unstable_getStaticPaths"),b=(0,l.l)(n,"unstable_getStaticParams"),f=(0,l.l)(n,"unstable_getServerProps"),w=(0,l.l)(n,"unstable_getServerSideProps"),v=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/projects/[id]",pathname:"/projects/[id]",bundlePath:"",filename:""},components:{App:o.default,Document:p.default},userland:n});s()}catch(e){s(e)}})},4310:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>g,getStaticPaths:()=>u,getStaticProps:()=>d});var a=r(997);r(6689);var i=r(836),l=r(1598),p=r(5460),o=r(8419),n=r(3858),c=e([n]);n=(c.then?(await c)():c)[0];let u=async()=>({paths:o.w.e.map(e=>({params:{id:e.title}})),fallback:"blocking"}),d=async({params:e,locale:t="ru"})=>({props:{meta:{title:e?.id||"",description:"",keywords:""},...await (0,p.serverSideTranslations)(t,["common","SliderWithWidget","cardsSml"])},revalidate:1}),g=({meta:e,toggleTheme:t})=>{let{t:r}=(0,l.Z)("cardsSml"),s=r("cardsSml.items",{returnObjects:!0}),p=[];s.filter(t=>{t.title===e.title&&p.push(t)});let o={title:`Детальная страница проекта: ${e.title}`,slider:{items:p},theme:{title:"Переключение темы",color:{light:"Светлая",dark:"Тёмная"}}};return a.jsx(i.Z,{meta:e,header:{},sandwich:{},children:a.jsx(n.Z,{content:o,toggleTheme:t})})};s()}catch(e){s(e)}})},2167:e=>{e.exports=require("axios")},4287:e=>{e.exports=require("gsap")},1377:e=>{e.exports=require("next-i18next")},5460:e=>{e.exports=require("next-i18next/serverSideTranslations")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},4212:e=>{e.exports=require("only-scrollbar")},2042:e=>{e.exports=require("polished")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},4466:e=>{e.exports=require("react-transition-group")},997:e=>{e.exports=require("react/jsx-runtime")},9755:e=>{e.exports=require("recoil")},7518:e=>{e.exports=require("styled-components")},3877:e=>{e.exports=import("swiper")},3015:e=>{e.exports=import("swiper/react")},5941:e=>{e.exports=import("swr")},1017:e=>{e.exports=require("path")},8419:e=>{e.exports=JSON.parse('{"w":{"e":[{"title":"Retn","date":"react+next","place":"Один из первых коммерческих проектов помогал с тестированием, конентом, фиксом багом и доработкой мелкого функционала такие как: валидация загружаемых файлов на стороне фронта","image":"/images/retn.jpg","href":"https://retn.ru/"},{"title":"Sibur","date":"pug,scss,ts","place":"Сборка страниц из готовых блоков, в дальнейшем тех. поддержка(исправление багов, задачки из тех. долга): ошибки со стилями, создание новых форм регистрации, добавление схем, виджеты, контакты.","image":"/images/sibur.png","href":"https://www.sibur.ru/ru/"},{"title":"Bimeister","date":"pug,scss,ts","place":"Тут я уже был задействован с самого первого дня и был вовлечен почти во все аспекты работы. Сайт небольшой в сравнении с другими, поэтому работала маленькая команда из меня и старшего коллеги, за которым в дальнейшим я поправлял баги от тестировщика и заказчика, т.к. ей нужно было уделять время следующим проектам. Поэтому знаком с каждым блоком, с каждой страницей и тд. Единственное, анимацией больше всего занималась она, я лишь ее правил при необходимости.","image":"/images/bimeister.PNG","href":"https://bimeister.com/ru/"},{"title":"NLMK","date":"pug,scss,ts,gsap","place":"Не могу найти лендинги по нему, но я над ними работал вместе с большой командой, возможно с заказчиком в итоге, что-то не срослось. Тут были лендинги различные, с переходящими анимациями, мои задачи были фикс багов, верстка новых срочных блоков на основе уже имеющихся наполнение их контентом. Ничего сверх, но здесь я подробно познакомился с gsap и написал свою анимацию.","image":"/images/nlmk.PNG"},{"title":"Tek","date":"react+next","place":"Начиналось все со сборки страниц, допиливания блоков под страницы, далее доработкой все большего функционала, в конечном итоге я знал проект как свои 5 пальцев(может даже лучше). Занимался этим проектом около 6мес. Очень много научился именно здесь.","image":"/images/tek.PNG","href":"https://www.tektorg.ru/"},{"title":"Any some un project stuff","date":"","place":"Делал блок спойлеров для проекта на tilda, добавлял формы регистрации, делал блоки связанные со ссылками, уже не вспомню домены","image":"/images/tilda.PNG"},{"title":"non-commercial","date":"react+next","place":"Слайдер, виджет с погодой яндекса, и блок с карточками","image":"/images/self.PNG","href":"https://github.com/funversuta/test"}]}}')}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[859,365,998],()=>r(8788));module.exports=s})();