(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{5109:function(e,a,n){Promise.resolve().then(n.t.bind(n,8173,23)),Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.t.bind(n,5538,23)),Promise.resolve().then(n.bind(n,1204)),Promise.resolve().then(n.bind(n,1270)),Promise.resolve().then(n.bind(n,5504)),Promise.resolve().then(n.bind(n,2671)),Promise.resolve().then(n.bind(n,7388)),Promise.resolve().then(n.t.bind(n,8921,23)),Promise.resolve().then(n.bind(n,4996)),Promise.resolve().then(n.t.bind(n,5771,23)),Promise.resolve().then(n.bind(n,623))},1204:function(e,a,n){"use strict";var s=n(7437),i=n(5486),o=n(2265),t=n(9842),r=n(7138);n(2543);let l=e=>{let{blog:a}=e,{id:n,title:i,image:o,date:t,content:l}=a;return(0,s.jsxs)("div",{className:"text-base lg:text-lg",children:[(0,s.jsx)("div",{className:"relative overflow-hidden rounded-md w-full pt-[61.46%] aspect-blog",children:(0,s.jsx)(r.default,{href:"/blogs",children:(0,s.jsx)("img",{alt:i,loading:"lazy",decoding:"async",className:"transition duration-500 origin-center rounded-md hover:scale-110",src:o,style:{position:"absolute",height:"100%",width:"100%",inset:0,objectFit:"contain",color:"transparent"}})})}),(0,s.jsxs)("div",{className:"text-base",children:[(0,s.jsx)("div",{className:"flex items-center justify-start gap-3",children:(0,s.jsx)("div",{className:"my-4 text-gray-500"})}),(0,s.jsx)("div",{className:"pb-3 text-xl font-bold tracking-light respo-h1",children:(0,s.jsx)(r.default,{href:"/blogs",children:i})}),(0,s.jsx)("div",{className:"text-lg line-clamp-3 respo-p1",dangerouslySetInnerHTML:{__html:l}}),(0,s.jsx)("div",{className:"flex items-center text-gray-500 respo-d1",children:(0,s.jsx)("span",{children:t})})]})]})};a.default=()=>{let[e,a]=(0,o.useState)([]),[n,r]=(0,o.useState)();return(0,o.useEffect)(()=>{(async()=>{let e=(0,t.IO)((0,t.hJ)(i.db,"blogs"),(0,t.Xo)("date","desc"));a((await (0,t.PL)(e)).docs.map(e=>({id:e.id,...e.data()})))})()},[]),(0,s.jsx)("section",{className:"relative bg-white py-8 px-8 sm:py-0 sm:pb-8",style:{zIndex:2},children:(0,s.jsxs)("div",{className:" bolg-fix max-w-7xl px-6 mx-auto lg:px-9 ",children:[(0,s.jsxs)("div",{className:"max-w-2xl mx-auto lg:mx-0",children:[(0,s.jsx)("p",{className:" repo-h text-brand text-base font-semibold leading-8",style:{color:"#3758F9"},children:"Blogs"}),(0,s.jsx)("h2",{className:" repo-h mt-2  font-bold tracking-tight text-gray-900 sm:text-[40px]",children:(0,s.jsx)("span",{children:"Explore Our Top Trending Articles"})}),(0,s.jsx)("p",{className:" repo-p mt-6 mb-8 text-lg leading-8 text-gray-600",children:"Dive into our trending blog posts and stay updated with the latest trends, insights, and expert opinions."})]}),(0,s.jsx)("div",{className:"grid max-w-2xl grid-cols-1 gap-16 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none",children:e.slice(0,3).map(e=>(0,s.jsx)(l,{blog:e},e.id))})]})})}},1270:function(e,a,n){"use strict";n.d(a,{default:function(){return i}});var s=n(2265);function i(){return(0,s.useEffect)(()=>{var e;return null===(e=window.document.scrollingElement)||void 0===e?void 0:e.scrollTo(0,0)},[]),null}},5504:function(e,a,n){"use strict";var s=n(7437),i=n(2265);let o=[{question:"What services does Ridge Tech Corporation offer?",answer:"Ridge Tech Corporation offers web development, mobile app development, and complete digital marketing services."},{question:"What technologies do your full stack developers specialize in",answer:"Our full stack developers specialize in technologies such as React JS, Node JS, Java, and Python."},{question:"What platforms do you develop mobile apps for?",answer:"We develop mobile apps for all major platforms, including iOS and Android."},{question:"How do you ensure the quality of your mobile app development?",answer:"We ensure quality by following best practices in app design and development, rigorous testing, and incorporating user feedback to create engaging and user-friendly apps."}];a.default=()=>{let[e,a]=(0,i.useState)(null),n=(0,i.useRef)([]);(0,i.useEffect)(()=>{n.current.forEach((a,n)=>{a&&(a.style.maxHeight=e===n?"".concat(a.scrollHeight,"px"):"0px")})},[n,e]);let t=n=>{a(e===n?null:n)};return(0,s.jsxs)("div",{className:"container flex justify-center items-center flex-col pb-4 ",children:[(0,s.jsx)("div",{className:"faq-top mt-5 mb-4",children:(0,s.jsx)("p",{style:{color:"rgb(55, 88, 249)"},className:" repo-h text-brand text-[16px] font-semibold leading-8 text-center text-{#2222FF} ",children:"FAQs"})}),(0,s.jsx)("div",{className:"faq-bottom mb-5",children:o.map((a,i)=>(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:"question-section container ".concat(e===i?"active":""),onClick:()=>t(i),children:(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"question-align",children:[(0,s.jsx)("h4",{className:"question-style resop-fq mt-5 mb-6 text-sm md:text-lg font-semibold text-dark dark:text-white text-[20px] md:text-[18px]",children:a.question}),(0,s.jsx)("span",{className:e===i?"question-icon rotate":"question-icon",children:"+ "})]}),(0,s.jsx)("div",{ref:e=>n.current[i]=e,className:e===i?"answer answer-divider":"answer",children:(0,s.jsx)("p",{className:"h-20 mt-5 mb-5 tailored2  leading-relaxed text-body-color dark:text-dark-6 text-[14px]  md:text-[18px] ",children:a.answer})})]})})},i))})]})}},7388:function(e,a,n){"use strict";var s=n(7437);n(2265);var i=n(7095),o=n(6044);n(70),a.default=()=>{let{ref:e,inView:a}=(0,o.YD)({triggerOnce:!0,threshold:.1});return(0,s.jsx)("section",{className:"cta-sec",ref:e,children:(0,s.jsxs)("div",{className:"containerz",children:[(0,s.jsxs)("div",{className:"left",children:[(0,s.jsxs)("p",{children:["Ridge Tech Corporation",(0,s.jsx)("br",{}),"Success Story!"]}),(0,s.jsx)("p",{children:"We are a dynamic group of technology enthusiasts who are motivated by innovation, excitement, and a strong sense of curiosity. Our goal is to pave the way for a brighter future by collaborating with businesses, enterprises, organisations, and government agencies to improve operations. Our rapid expansion and growing customer base reflect our industry leadership in custom web and mobile app development. Choose us for client-focused online and mobile app development."})]}),(0,s.jsx)("div",{className:"right",children:(0,s.jsx)("div",{className:"counter_ap",children:[{start:0,end:30,text:"Team of Professionals",color:"clr_purple"},{start:0,end:60,text:"Happy & Satisfied Clients",color:"clr_orange"},{start:0,end:100,text:"Total Projects Completed",color:"clr_blue"},{start:0,end:3,text:"Years of Experience in industry",color:"clr_sky"},{start:0,end:97,text:"Client Retention",color:"clr_green"}].map((e,n)=>(0,s.jsxs)("div",{className:"cta-box ".concat(e.color),children:[a&&(0,s.jsx)(i.ZP,{start:e.start,end:e.end,duration:5,separator:",",delay:0,children:e=>{let{countUpRef:a}=e;return(0,s.jsxs)("span",{className:"counter-value d-inline-block",children:[(0,s.jsx)("span",{ref:a}),(0,s.jsx)("span",{className:"counterpls",children:"+"})]})}}),(0,s.jsx)("span",{className:"counter_Text",children:e.text})]},n))})})]})})}},2671:function(e,a,n){"use strict";var s=n(7437),i=n(8059),o=n.n(i);n(2265);var t=n(3153);n(1390),n(9051),n(5291),a.default=()=>(0,s.jsxs)("div",{className:"jsx-78fbd576247d721a container certified-badge hire_expert_space",children:[(0,s.jsxs)("div",{style:{marginBottom:"20px"},className:"jsx-78fbd576247d721a text-center read_expertSpace",children:[(0,s.jsx)("div",{style:{marginTop:"4vh",fontWeight:"700",color:"#3758F9"},className:"jsx-78fbd576247d721a  up-h mainh2",children:"Success Stories"}),(0,s.jsx)("div",{style:{marginTop:"1vh",fontSize:"40px",marginBottom:"7vh",fontWeight:"700"},className:"jsx-78fbd576247d721a mainh2",children:"Ridge Tech Clients' Success Stories"})]}),(0,s.jsx)("div",{style:{marginTop:"20px",color:"white"},className:"jsx-78fbd576247d721a row slider_logo badge_slider",children:(0,s.jsx)(t.Z,{dots:!0,infinite:!0,speed:500,slidesToShow:5,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1199,settings:{slidesToShow:4}},{breakpoint:991,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}],children:[{imgSrc:"https://appwrk.com/wp-content/uploads/2022/09/upwork.webp",alt:"Upwork Reviews - Ridge Tech",title:"Upwork Reviews"},{imgSrc:"https://appwrk.com/wp-content/uploads/2022/09/good-firms.webp",alt:"GoodFirms Reviews - Ridge Tech",title:"GoodFirms Reviews"},{imgSrc:"https://appwrk.com/wp-content/uploads/2022/09/clutch-1.webp",alt:"Clutch Reviews - Ridge Tech",title:"Clutch Reviews"},{imgSrc:"https://appwrk.com/wp-content/uploads/2022/09/designrush.webp",alt:"DesignRush Reviews - Ridge Tech",title:"DesignRush Reviews"},{imgSrc:"https://appwrk.com/wp-content/uploads/2022/09/google-reviews.webp",alt:"Google Reviews - Ridge Tech",title:"Google Reviews - Ridge Tech"}].map((e,a)=>(0,s.jsxs)("div",{style:{padding:"10px"},className:"jsx-78fbd576247d721a col-12 badge_inside_slider",children:[(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"150px",backgroundColor:"white",borderRadius:"10px",marginBottom:"10px"},className:"jsx-78fbd576247d721a badge_box",children:(0,s.jsx)("a",{rel:"noopener noreferrer",className:"jsx-78fbd576247d721a",children:(0,s.jsx)("img",{loading:"lazy",style:{width:"180px"},src:e.imgSrc,alt:e.alt,title:e.title,className:"jsx-78fbd576247d721a lazyload"})})}),(0,s.jsx)("div",{style:{textAlign:"center",fontSize:"16px",marginBottom:"7vh"},className:"jsx-78fbd576247d721a h3",children:e.title})]},a))})}),(0,s.jsx)(o(),{id:"78fbd576247d721a",children:"@media(max-width:768px){.mainh2.jsx-78fbd576247d721a{margin-bottom:2vh!important;font-size:20px!important}.h3.jsx-78fbd576247d721a{font-size:14px!important}.badge_box.jsx-78fbd576247d721a{height:100px!important}.badge_inside_slider.jsx-78fbd576247d721a{padding:5px!important}.slider_logo.jsx-78fbd576247d721a{margin-top:10px!important}}@media(max-width:480px){.mainh2.jsx-78fbd576247d721a{font-size:20px!important}.h3.jsx-78fbd576247d721a{font-size:14px!important}.badge_box.jsx-78fbd576247d721a{height:80px!important}.badge_inside_slider.jsx-78fbd576247d721a{padding:2px!important}}"})]})},4996:function(e,a,n){"use strict";n.d(a,{default:function(){return b}});var s=n(7437),i=n(7138);n(8845);var o=n(2265),t=n(7287),r=n.n(t),l=n(358),d=n(6712),c=()=>{let[e,a]=(0,o.useState)(null);(0,o.useEffect)(()=>{{a(window.innerWidth<=768);let e=()=>{a(window.innerWidth<=768)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}},[]);let[n,i]=(0,o.useState)(null),t=[{title:"Mobile App Development",link:"#",details:"\n  With our bespoke application development services, you can make your app idea a reality. As a top mobile app development company, our professionals create user-friendly apps for iOS and Android that propel businesses forward. We manage the entire app development process, from concept to launch. Collaborate with us for a flawless mobile app development experience..\n\n\n  ",bullettss:["React Native App Development","Flutter App Development","Progressive Web App Development","Android App Development","iOS App Development"]},{title:"Website Development",link:"#",details:"Enhance your online presence with our custom web design and website development services. As a leading website development company, our experts, including experienced web developers, design websites that attract traffic, increase conversions, and make a memorable impact. We manage every step, from requirement gathering to deployment. Partner with us for a website that surpasses expectations.",bullettss:["Custom Software Development","Python Development","Vue Js Development","Webflow Development","WordPress Development","Laravel Development","MailChimp Development","Shopify Development","ASP.NET Development","React Js Development","Angular Js Development","Node Js Development"]},{title:"Software Development",link:"#",details:"Enhance your workflows, increase your revenue, and streamline your business operations with our tailored software engineering solutions. As an IT software development company, our experts, including skilled software developers, craft customised software to meet your distinct business needs. From concept to code and development to deployment, we manage everything. Partner with us for personalised software engineering solutions designed to optimise your business operations. We stand out among system integrators and software development firms by delivering top-tier custom software solutions to achieve your desired business goals. ",bullettss:["Programming Languages","Databases","Programming Tools"]},{title:"Digital Marketing",link:"#",details:"Elevate your digital footprint and drive customer acquisition with our data-driven strategies from a top digital marketing agency. Our experts craft comprehensive internet marketing strategies to help your business grow and achieve tangible results. As a leading digital marketing company, we focus on increasing your brand awareness, website traffic, search engine ranking, customer reach, and sales. Trust our team for expert digital marketing services that deliver real impact. \n  ",bullettss:["Search Engine Optimization","Social Media Marketing","Pay Per Click Advertising","Email Marketing","Content Writing"]}];(0,o.useEffect)(()=>{i(t[0])},[]);let c=e=>{i(t[e])};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:r().leftPane,children:[(0,s.jsx)("h2",{className:r().leftpane1,children:" Services We Provide : "}),(0,s.jsx)("h2",{className:r().leftpane2,children:"Best Mobile App Development to Web Designing and Software Development Company"})]}),(0,s.jsxs)("div",{style:{position:"relative"},className:"".concat(r().servicesContainer," container"),children:[(0,s.jsx)("div",{className:r().middlePane,children:t.map((e,a)=>(0,s.jsx)("div",{onClick:()=>c(a),className:r().serviceItem,children:e.title},a))}),(0,s.jsx)("div",{className:r().rightPane,children:n&&(0,s.jsxs)("div",{className:r().serviceDetails,children:[(0,s.jsx)("h3",{children:n.title}),(0,s.jsx)("p",{children:n.details}),(0,s.jsx)("ul",{typeof:"disk"}),(0,s.jsx)("div",{className:r().ulfix,style:{display:"flex",paddingTop:"2vh",marginRight:e?"2vh":"10vh"},children:e?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.Z,{children:n.bullettss.map((a,n)=>(0,s.jsx)(d.Z,{xs:12,children:(0,s.jsx)("li",{style:{fontWeight:"400",fontSize:e?"14px":"18px",color:"#333333",whiteSpace:"nowrap",marginTop:e?"7%":"3%"},children:(0,s.jsx)("a",{href:"#",children:a})})},n))})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{children:n.bullettss.slice(0,6).map((a,n)=>(0,s.jsx)(d.Z,{xs:6,children:(0,s.jsx)("li",{style:{fontWeight:"400",fontSize:e?"10px":"18px",color:"#333333",whiteSpace:"nowrap",marginTop:e?"7%":"3%"},children:(0,s.jsx)("a",{href:"#",children:a})})},n))}),n.bullettss.length>6&&(0,s.jsx)(l.Z,{children:n.bullettss.slice(6,12).map((a,n)=>(0,s.jsx)(d.Z,{xs:6,children:(0,s.jsx)("li",{style:{fontWeight:"400",fontSize:"18px",color:"#333333",whiteSpace:"nowrap",marginTop:e?"7%":"2%",marginLeft:e?"2vw":"5vw"},children:(0,s.jsx)("a",{href:"#",children:a})})},n))})]})})]})})]})]})};n(4077);var m=n(6648),p=()=>{let[e,a]=(0,o.useState)("frontend"),[n,i]=(0,o.useState)(null);return(0,s.jsx)("section",{className:" container main",children:(0,s.jsx)("div",{className:"main-2c",children:(0,s.jsxs)("div",{className:"text",children:[(0,s.jsxs)("div",{className:"text-box",children:[(0,s.jsxs)("h3",{className:"topz ",children:["Technologies and Platforms ",(0,s.jsx)("span",{style:{color:"black"},children:"We Work"})," "]}),(0,s.jsx)("p",{className:"top-three",children:"Programming languages that our team is skilled in include but are not limited to Angular, Python, Java, ReactJS, and JavaScript. Our knowledge of iOS, Android, and cross-platform technologies like Flutter and React Native extends to mobile development as well. We also offer UI design services that enhance user experiences across all platforms. Our collaboration with AWS, Google Cloud, Microsoft Azure, and other cloud service providers supports our robust digital marketing strategies and solutions. Our expertise in cutting-edge technologies such as AI, ML, blockchain, and IoT, combined with our experience in digital marketing, allows us to offer creative solutions tailored to each individual client's requirements. Whether you need advanced mobile development or a comprehensive tech corporation partnership, we possess the knowledge and expertise to provide excellent, custom solutions."})]}),(0,s.jsx)("div",{className:"photo-box",children:(0,s.jsx)(m.default,{src:"/images/Services/block/technew.jpg",alt:"hero",width:700,height:400,className:"technew"})})]})})})},u=n(9700);n(4824);var h=()=>(0,s.jsxs)("div",{className:"fancy-text-wrapper",children:[(0,s.jsx)("span",{className:"prefix-text",children:"Specialise In:"}),(0,s.jsx)(u.x,{strings:["Mobile App Development","Website Development","Digital Marketing","Software Development","UI/UX Design Services"],typeSpeed:50,backSpeed:30,startDelay:30,backDelay:1e3,showCursor:!0,cursorChar:"|",loop:!0})]}),g=n(5263),x=n(3656);n(3242);let v=[{name:"Afghanistan",code:"+93"},{name:"Albania",code:"+355"},{name:"Algeria",code:"+213"},{name:"American Samoa",code:"+1-684"},{name:"Andorra",code:"+376"},{name:"Angola",code:"+244"},{name:"Anguilla",code:"+1-264"},{name:"Antigua and Barbuda",code:"+1-268"},{name:"Argentina",code:"+54"},{name:"Armenia",code:"+374"},{name:"Aruba",code:"+297"},{name:"Australia",code:"+61"},{name:"Austria",code:"+43"},{name:"Azerbaijan",code:"+994"},{name:"Bahamas",code:"+1-242"},{name:"Bahrain",code:"+973"},{name:"Bangladesh",code:"+880"},{name:"Barbados",code:"+1-246"},{name:"Belarus",code:"+375"},{name:"Belgium",code:"+32"},{name:"Belize",code:"+501"},{name:"Benin",code:"+229"},{name:"Bermuda",code:"+1-441"},{name:"Bhutan",code:"+975"},{name:"Bolivia",code:"+591"},{name:"Bosnia and Herzegovina",code:"+387"},{name:"Botswana",code:"+267"},{name:"Brazil",code:"+55"},{name:"British Virgin Islands",code:"+1-284"},{name:"Brunei",code:"+673"},{name:"Bulgaria",code:"+359"},{name:"Burkina Faso",code:"+226"},{name:"Burundi",code:"+257"},{name:"Cabo Verde",code:"+238"},{name:"Cambodia",code:"+855"},{name:"Cameroon",code:"+237"},{name:"Canada",code:"+1"},{name:"Cayman Islands",code:"+1-345"},{name:"Central African Republic",code:"+236"},{name:"Chad",code:"+235"},{name:"Chile",code:"+56"},{name:"China",code:"+86"},{name:"Colombia",code:"+57"},{name:"Comoros",code:"+269"},{name:"Congo (DRC)",code:"+243"},{name:"Congo (Republic)",code:"+242"},{name:"Cook Islands",code:"+682"},{name:"Costa Rica",code:"+506"},{name:"Croatia",code:"+385"},{name:"Cuba",code:"+53"},{name:"Cyprus",code:"+357"},{name:"Czech Republic",code:"+420"},{name:"Denmark",code:"+45"},{name:"Djibouti",code:"+253"},{name:"Dominica",code:"+1-767"},{name:"Dominican Republic",code:"+1-809"},{name:"Ecuador",code:"+593"},{name:"Egypt",code:"+20"},{name:"El Salvador",code:"+503"},{name:"Equatorial Guinea",code:"+240"},{name:"Eritrea",code:"+291"},{name:"Estonia",code:"+372"},{name:"Eswatini",code:"+268"},{name:"Ethiopia",code:"+251"},{name:"Fiji",code:"+679"},{name:"Finland",code:"+358"},{name:"France",code:"+33"},{name:"French Guiana",code:"+594"},{name:"Gabon",code:"+241"},{name:"Gambia",code:"+220"},{name:"Georgia",code:"+995"},{name:"Germany",code:"+49"},{name:"Ghana",code:"+233"},{name:"Gibraltar",code:"+350"},{name:"Greece",code:"+30"},{name:"Greenland",code:"+299"},{name:"Grenada",code:"+1-473"},{name:"Guadeloupe",code:"+590"},{name:"Guam",code:"+1-671"},{name:"Guatemala",code:"+502"},{name:"Guinea",code:"+224"},{name:"Guinea-Bissau",code:"+245"},{name:"Guyana",code:"+592"},{name:"Haiti",code:"+509"},{name:"Honduras",code:"+504"},{name:"Hong Kong",code:"+852"},{name:"Hungary",code:"+36"},{name:"Iceland",code:"+354"},{name:"India",code:"+91"},{name:"Indonesia",code:"+62"},{name:"Iran",code:"+98"},{name:"Iraq",code:"+964"},{name:"Ireland",code:"+353"},{name:"Israel",code:"+972"},{name:"Italy",code:"+39"},{name:"Ivory Coast",code:"+225"},{name:"Jamaica",code:"+1-876"},{name:"Japan",code:"+81"},{name:"Jordan",code:"+962"},{name:"Kazakhstan",code:"+7"},{name:"Kenya",code:"+254"},{name:"Kiribati",code:"+686"},{name:"Kosovo",code:"+383"},{name:"Kuwait",code:"+965"},{name:"Kyrgyzstan",code:"+996"},{name:"Laos",code:"+856"},{name:"Latvia",code:"+371"},{name:"Lebanon",code:"+961"},{name:"Lesotho",code:"+266"},{name:"Liberia",code:"+231"},{name:"Libya",code:"+218"},{name:"Liechtenstein",code:"+423"},{name:"Lithuania",code:"+370"},{name:"Luxembourg",code:"+352"},{name:"Macau",code:"+853"},{name:"Madagascar",code:"+261"},{name:"Malawi",code:"+265"},{name:"Malaysia",code:"+60"},{name:"Maldives",code:"+960"},{name:"Mali",code:"+223"},{name:"Malta",code:"+356"},{name:"Marshall Islands",code:"+692"},{name:"Martinique",code:"+596"},{name:"Mauritania",code:"+222"},{name:"Mauritius",code:"+230"},{name:"Mexico",code:"+52"},{name:"Micronesia",code:"+691"},{name:"Moldova",code:"+373"},{name:"Monaco",code:"+377"},{name:"Mongolia",code:"+976"},{name:"Montenegro",code:"+382"},{name:"Montserrat",code:"+1-664"},{name:"Morocco",code:"+212"},{name:"Mozambique",code:"+258"},{name:"Myanmar",code:"+95"},{name:"Namibia",code:"+264"},{name:"Nauru",code:"+674"},{name:"Nepal",code:"+977"},{name:"Netherlands",code:"+31"},{name:"New Caledonia",code:"+687"},{name:"New Zealand",code:"+64"},{name:"Nicaragua",code:"+505"},{name:"Niger",code:"+227"},{name:"Nigeria",code:"+234"},{name:"Niue",code:"+683"},{name:"North Korea",code:"+850"},{name:"North Macedonia",code:"+389"},{name:"Norway",code:"+47"},{name:"Oman",code:"+968"},{name:"Pakistan",code:"+92"},{name:"Palau",code:"+680"},{name:"Palestine",code:"+970"},{name:"Panama",code:"+507"},{name:"Papua New Guinea",code:"+675"},{name:"Paraguay",code:"+595"},{name:"Peru",code:"+51"},{name:"Philippines",code:"+63"},{name:"Poland",code:"+48"},{name:"Portugal",code:"+351"},{name:"Puerto Rico",code:"+1-787"},{name:"Qatar",code:"+974"},{name:"Romania",code:"+40"},{name:"Russia",code:"+7"},{name:"Rwanda",code:"+250"},{name:"Saint Kitts and Nevis",code:"+1-869"},{name:"Saint Lucia",code:"+1-758"},{name:"Saint Vincent and the Grenadines",code:"+1-784"},{name:"Samoa",code:"+685"},{name:"San Marino",code:"+378"},{name:"Sao Tome and Principe",code:"+239"},{name:"Saudi Arabia",code:"+966"},{name:"Senegal",code:"+221"},{name:"Serbia",code:"+381"},{name:"Seychelles",code:"+248"},{name:"Sierra Leone",code:"+232"},{name:"Singapore",code:"+65"},{name:"Sint Maarten",code:"+1-721"},{name:"Slovakia",code:"+421"},{name:"Slovenia",code:"+386"},{name:"Solomon Islands",code:"+677"},{name:"Somalia",code:"+252"},{name:"South Africa",code:"+27"},{name:"South Korea",code:"+82"},{name:"South Sudan",code:"+211"},{name:"Spain",code:"+34"},{name:"Sri Lanka",code:"+94"},{name:"Sudan",code:"+249"},{name:"Suriname",code:"+597"},{name:"Sweden",code:"+46"},{name:"Switzerland",code:"+41"},{name:"Syria",code:"+963"},{name:"Taiwan",code:"+886"},{name:"Tajikistan",code:"+992"},{name:"Tanzania",code:"+255"},{name:"Thailand",code:"+66"},{name:"Timor-Leste",code:"+670"},{name:"Togo",code:"+228"},{name:"Tokelau",code:"+690"},{name:"Tonga",code:"+676"},{name:"Trinidad and Tobago",code:"+1-868"},{name:"Tunisia",code:"+216"},{name:"Turkey",code:"+90"},{name:"Turkmenistan",code:"+993"},{name:"Tuvalu",code:"+688"},{name:"Uganda",code:"+256"},{name:"Ukraine",code:"+380"},{name:"United Arab Emirates",code:"+971"},{name:"United Kingdom",code:"+44"},{name:"United States",code:"+1"},{name:"Uruguay",code:"+598"},{name:"Uzbekistan",code:"+998"},{name:"Vanuatu",code:"+678"},{name:"Vatican City",code:"+379"},{name:"Venezuela",code:"+58"},{name:"Vietnam",code:"+84"},{name:"Yemen",code:"+967"},{name:"Zambia",code:"+260"},{name:"Zimbabwe",code:"+263"}];var b=()=>{let[e,a]=(0,o.useState)({name:"",email:"",isdCode:"United States+1",phoneNumber:"",Choose_Service:"",budget:"",message:""}),n=async e=>{await (0,g.R)(e)},t=n=>{let{name:s,value:i}=n.target;a({...e,[s]:i})},r=async a=>{a.preventDefault(),console.log("Form data submitted:",e);let n={name:e.name,email:e.email,isd_code:e.isdCode,phone_number:e.phoneNumber,select_budget:"N/A",choose_service:"from_floating_button",message:e.message};if(!(await fetch("https://api.ridgetechcorp.com/api/submission/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).ok)throw Error("Network response was not ok");window.location.href="/thank-you"};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"relative overflow-hidden container_hero w-full overflow-hidden",children:(0,s.jsxs)("div",{className:"hero-section",children:[(0,s.jsx)(x.Z,{id:"tsparticles",init:n,className:"particles-container",options:{fullScreen:{enable:!1},background:{color:{value:"linear-gradient(70deg, #000a2c 40%, #002d8f 100%)"}},fpsLimit:60,particles:{links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!1},move:{direction:"none",enable:!0,outModes:{default:"out"},random:!1,speed:2,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0,interactivity:{detectsOn:"canvas",events:{onHover:{enable:!0,mode:"repulse"},onClick:{enable:!0,mode:"remove"}},modes:{connect:{distance:150,links:{opacity:.5}},push:{quantity:4},remove:{quantity:2},repulse:{quantity:1}}}}}),(0,s.jsxs)("div",{className:"flex flex-col md:flex-row w-full items-center",children:[(0,s.jsxs)("div",{className:"top-texts hero_text_container max-w-3xl mx-auto text-center ",children:[(0,s.jsxs)("div",{className:"top",children:[(0,s.jsx)("h1",{children:"Top Website & Mobile App Development including Marketing Solutions for Your Business."}),(0,s.jsx)("br",{}),(0,s.jsx)("h2",{children:"Enhance your digital journey with innovative mobile development, web marketing and powerful digital marketing techniques."}),(0,s.jsx)("div",{className:"mt-[20px]",children:(0,s.jsx)(h,{})}),(0,s.jsx)("div",{className:"button mb-[20px]",children:(0,s.jsx)(i.default,{href:"/contact-us",className:"button-link",children:"Talk to an expert"})})]}),(0,s.jsxs)("div",{className:"topNewimg flex gap-3 justify-start items-center mt-4",children:[(0,s.jsx)("img",{src:"/images/Services/5star.png",alt:"5 star rating",className:"rounded-lg h-[30px] md:h-[50px]"}),(0,s.jsx)("img",{src:"/images/Services/google.png",alt:"Google",className:"rounded-lg h-[30px] md:h-[50px]"}),(0,s.jsx)("img",{src:"/images/clutch.png",alt:"WhatsApp",className:"rounded-lg h-[30px] md:h-[50px]"}),(0,s.jsx)("img",{src:"/images/Services/g firms.png",alt:"Google firms",className:"rounded-lg h-[30px] md:h-[50px]"})]})]}),(0,s.jsxs)("div",{className:"form-website-hero bg-[#FAFAFA] rounded-lg z-[2] p-6 mt-2 w-full max-w-md mx-auto shadow-lg",children:[(0,s.jsxs)("p",{className:"text-center mb-4 text-xl font-bold",children:["Ready to innovate?",(0,s.jsx)("br",{}),(0,s.jsx)("span",{className:"text-blue-500",children:"Let's get in touch"})]}),(0,s.jsx)("form",{onSubmit:r,children:(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("div",{className:"form-group w-full mb-4",children:(0,s.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,className:"w-full p-2 border border-gray-300 rounded",onChange:t,placeholder:"Your Name",required:!0})}),(0,s.jsx)("div",{className:"form-group w-full mb-4",children:(0,s.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,className:"w-full p-2 border border-gray-300 rounded",onChange:t,placeholder:"Your Email",required:!0})}),(0,s.jsxs)("div",{className:" flex w-full mb-4",children:[(0,s.jsx)("select",{id:"isdCode",name:"isdCode",value:e.isdCode,onChange:t,className:"w-[47%] p-2 border border-gray-300 rounded",required:!0,children:v.map(e=>(0,s.jsxs)("option",{value:e.name+e.code,children:["(",e.code,") - ",e.name]},e.code))}),(0,s.jsx)("input",{type:"tel",id:"phoneNumber",name:"phoneNumber",value:e.phoneNumber,className:"w-[60%] p-2 ml-2 border border-gray-300 rounded",onChange:t,placeholder:"Phone Number",required:!0})]}),(0,s.jsx)("div",{className:"form-group w-full mb-4",children:(0,s.jsxs)("select",{id:"Choose_Service",name:"Choose_Service",value:e.Choose_Service,className:"w-full p-2 border border-gray-300 rounded",onChange:t,required:!0,children:[(0,s.jsx)("option",{value:"",children:"Choose Service"}),(0,s.jsx)("option",{value:"Mobile Application Development",children:"Mobile App Development"}),(0,s.jsx)("option",{value:"Website Development",children:"Website Development"}),(0,s.jsx)("option",{value:"Digital Marketing",children:"Digital Marketing"}),(0,s.jsx)("option",{value:"Software Development",children:"Software Development"}),(0,s.jsx)("option",{value:"UI UX Design",children:"UI UX Design"})]})}),(0,s.jsx)("div",{className:"form-group w-full mb-4",children:(0,s.jsx)("textarea",{id:"message",name:"message",value:e.message,className:"w-full p-2 border border-gray-300 rounded",onChange:t,placeholder:"How can I help you?",required:!0})}),(0,s.jsx)("button",{type:"submit",className:"submit-button w-full p-2 bg-blue-500 text-white rounded",children:"Submit"})]})})]})]})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(p,{})]})}},623:function(e,a,n){"use strict";var s=n(7437),i=n(2265),o=n(3153);n(9051),n(5291),n(8590),a.default=()=>{let[e,a]=(0,i.useState)(!1);return(0,s.jsx)("section",{className:"section our_achievements_content service_landing_new not_white pb-8",children:(0,s.jsx)("div",{className:"",children:(0,s.jsxs)("div",{className:"inner-section",children:[(0,s.jsx)("p",{className:"h2",children:"Our Competencies"}),(0,s.jsxs)(o.Z,{dots:!1,infinite:!0,speed:2500,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:0,cssEase:"linear",pauseOnHover:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:0,cssEase:"linear"}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:0,cssEase:"linear"}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:0,cssEase:"linear"}}],children:[(0,s.jsx)("div",{children:(0,s.jsx)("li",{className:"list-data",style:{width:"100%",display:"inline-block"},children:(0,s.jsx)("a",{style:{backgroundColor:"black"},rel:"noopener noreferrer",children:(0,s.jsxs)("div",{className:"box_main",children:[(0,s.jsx)("img",{className:"lazyload logos",loading:"lazy",src:"/images/asp.png",alt:"ASP.NET Development",width:"70"}),(0,s.jsx)("p",{className:"h5",children:"ASP.NET Development"})]})})})}),(0,s.jsx)("div",{children:(0,s.jsx)("li",{className:"list-data",style:{width:"100%",display:"inline-block"},children:(0,s.jsx)("a",{style:{backgroundColor:"black"},rel:"noopener noreferrer",children:(0,s.jsxs)("div",{className:"box_main",children:[(0,s.jsx)("img",{className:"lazyload logos",loading:"lazy",src:"/images/angu.png",alt:"Angular Js Development",width:"30"}),(0,s.jsx)("p",{className:"h5",children:"Angular Js Development"})]})})})}),(0,s.jsx)("div",{children:(0,s.jsx)("li",{className:"list-data",style:{width:"100%",display:"inline-block"},children:(0,s.jsx)("a",{className:"bg-black",rel:"noopener noreferrer",children:(0,s.jsxs)("div",{className:"box_main",children:[(0,s.jsx)("img",{className:"lazyload logos",loading:"lazy",src:"/images/programing.png",alt:"Node Js Development",width:"40"}),(0,s.jsx)("p",{className:"h5",children:"Node Js Development"})]})})})}),(0,s.jsx)("div",{children:(0,s.jsx)("li",{className:"list-data",style:{width:"100%",display:"inline-block"},children:(0,s.jsx)("a",{style:{backgroundColor:"black"},rel:"noopener noreferrer",children:(0,s.jsxs)("div",{className:"box_main",children:[(0,s.jsx)("img",{className:"lazyload logos",loading:"lazy",src:"/images/sopi.png",alt:"Shopify Development",width:"50"}),(0,s.jsx)("p",{className:"h5",children:"Shopify Development"})]})})})})]})]})})})}},5538:function(){},2543:function(){},1390:function(){},4077:function(){},70:function(){},8921:function(){},8845:function(){},5771:function(){},4824:function(){},8590:function(){},3242:function(){},7287:function(e){e.exports={leftPane:"Services_leftPane__Dm9Lm",leftpane2:"Services_leftpane2__ccnpe",servicesContainer:"Services_servicesContainer__BX8cL",middlePane:"Services_middlePane__UHUSM",learnMore:"Services_learnMore__7S7iT",serviceItem:"Services_serviceItem__YP3mr",rightPane:"Services_rightPane__w_u2d",serviceDetails:"Services_serviceDetails__w3xX1","fix-li":"Services_fix-li__lZKzg","underline-hover":"Services_underline-hover__UrESM",selected:"Services_selected__iRiUb",bullettss:"Services_bullettss__WSI7e",Link:"Services_Link__15LDb",ulfix:"Services_ulfix__srYhW",leftpane1:"Services_leftpane1___ajgW","grid-color":"Services_grid-color__W44pd","upper-text":"Services_upper-text__muiv2","second-p":"Services_second-p___dJV3",cardz:"Services_cardz__7DgII",single:"Services_single__dtYcM","cardz-para":"Services_cardz-para__u6lZM",cardzo:"Services_cardzo__JZUDY",underlineAnimation:"Services_underlineAnimation__GcfiN"}},5486:function(e,a,n){"use strict";n.d(a,{db:function(){return r}});var s=n(5236),i=n(9842),o=n(9854);let t=(0,s.ZF)({apiKey:"AIzaSyDPbKWBkOHodYLemY23OSHZ6OCxhrXHBEI",authDomain:"rtcadmin-e25f8.firebaseapp.com",projectId:"rtcadmin-e25f8",storageBucket:"rtcadmin-e25f8.appspot.com",messagingSenderId:"407907255842",appId:"1:407907255842:web:a5645d88af6656a19e6c7b"}),r=(0,i.ad)(t);(0,o.cF)(t)}},function(e){e.O(0,[7186,6072,1918,8811,7957,4160,1611,4358,231,8173,1757,2162,251,5680,2114,9964,2971,7023,1744],function(){return e(e.s=5109)}),_N_E=e.O()}]);