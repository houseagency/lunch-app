webpackJsonp([1],{"/DF0":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("U7vG"),s=n.n(i),c=n("pAMG"),l=(n.n(c),n("INDk")),u=n.n(l),p=n("KluA"),f=function(e){function t(){return a(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props.choosenCat;return s.a.createElement("div",{className:"btn-container"},u.a.map(function(t,n){return s.a.createElement(p.a,{key:n,btnTxt:t.name,onClick:function(){return e(t.id)},catBtn:"cat-btn",btnIcon:t.imgIcon})}))},t}(i.Component);t.a=f},0:function(e,t,n){n("+prg"),e.exports=n("lVK7")},"1K4x":function(e,t,n){"use strict";var a=n("U7vG"),r=n.n(a),o=r.a.createElement("footer",null),i=function(e){return o};t.a=i},"2Fet":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("U7vG"),s=n.n(i),c=n("jdcc"),l=s.a.createElement("i",{className:"fa fa-map-marker","aria-hidden":"true"}),u=s.a.createElement("div",{className:"section-divider"},s.a.createElement("div",{className:"header-container"},s.a.createElement("h3",null,"DETAILS"))),p=s.a.createElement("div",{className:"section-divider"},s.a.createElement("div",{className:"header-container"},s.a.createElement("h3",null,"LOCATION"))),f=function(e){function t(){return a(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this,t=this.props.selectedRestaurant;return s.a.createElement("div",{className:"info-container"},s.a.createElement("img",{className:"rest-img",src:t.img_url}),s.a.createElement("div",{className:"info"},s.a.createElement("h1",null,t.name),s.a.createElement("div",{className:"address-container"},l,s.a.createElement("p",null," ",t.address)),s.a.createElement("p",null,"Cuisine: ",t.cuisine," "),s.a.createElement("p",null,"Price range: ",t.price_range),s.a.createElement("p",null,"Rating: ",t.rating)),u,s.a.createElement("div",{className:"info"},s.a.createElement("p",{className:"details"},t.desc),s.a.createElement("a",{target:"_blank",href:t.menu_link},"To the lunch menu")),p,s.a.createElement(c.a,{position:t.position,zoom:18,containerElement:s.a.createElement("div",{style:{height:300,width:"100%",marginTop:20}}),mapElement:s.a.createElement("div",{style:{height:"100%"}})}),s.a.createElement("a",{className:"moreInfo-link",href:"#",ref:"link",onClick:function(){return e.props.backToStart()}},"BACK TO START"))},t}(i.Component);t.a=f},INDk:function(e,t){e.exports=[{name:"Formal Lunch",id:"1",imgIcon:"img/icon_formal.svg"},{name:"Work Lunch",id:"2",imgIcon:"img/icon_work.svg"}]},KluA:function(e,t,n){"use strict";var a=n("U7vG"),r=n.n(a),o=function(e){return r.a.createElement("button",{className:e.catBtn,onClick:e.onClick},r.a.createElement("img",{className:"btn-icon",src:e.btnIcon}),r.a.createElement("span",null,e.btnTxt))};t.a=o},LGxg:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("U7vG"),s=n.n(i),c=(n("KluA"),n("+caA")),l=(n.n(c),function(e){function t(n){a(this,t);var o=r(this,e.call(this,n));return o.slotHeight=99,o.spin=o.spin.bind(o),o.moveSpinnerOneStep=o.moveSpinnerOneStep.bind(o),o.stopSpinner=o.stopSpinner.bind(o),o}return o(t,e),t.prototype.spin=function(){var e=this.props.restaurantList,t=Math.floor(Math.random()*e.length);this.selectedRestaurant=e[t],this.moveSpinnerOneStep(1,0===t?e.length:t,6)},t.prototype.moveSpinnerOneStep=function(e,t,n){var a=this;c.TweenMax.killTweensOf(this.refs.slots),e===this.props.restaurantList.length+1&&(e=1,c.TweenMax.set(this.refs.slots,{y:0}),n--),n<=0&&e===t?this.stopSpinner(e):c.TweenMax.to(this.refs.slots,.1,{y:-e*this.slotHeight,ease:Linear.easeNone,onComplete:function(){a.moveSpinnerOneStep(e+1,t,n)}})},t.prototype.stopSpinner=function(e){this.props.onRestaurantSelected(this.selectedRestaurant),c.TweenMax.to(this.refs.slots,2,{y:-e*this.slotHeight,ease:Elastic.easeOut})},t.prototype.componentWillReceiveProps=function(e){e.restaurantList!==this.props.restaurantList&&this.spin()},t.prototype.componentDidMount=function(){this.spin()},t.prototype.componentWillUnmount=function(){c.TweenMax.killTweensOf(this.refs.slots)},t.prototype.render=function(){var e=this,t=this.props.restaurantList,n=[].concat(t,[t[0]]).map(function(e,t){return s.a.createElement("div",{key:t,className:"restaurant-container"},s.a.createElement("p",{className:"spinner-txt"},e.name))});return s.a.createElement("div",{className:"randomizer-container"},s.a.createElement("div",{className:"slot-machine"},s.a.createElement("div",{ref:"slots",className:"slot-container"},n)),s.a.createElement("a",{className:"moreInfo-link",href:"#",ref:"link",onClick:function(){return e.props.showInfo()}},"MORE INFO"))},t}(i.Component));t.a=l},VH3W:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("U7vG"),s=n.n(i),c=(n("CIox"),n("F8kA"),n("/DF0"),n("LGxg"),n("2Fet"),s.a.createElement("header",null,s.a.createElement("div",{className:"logo-container"}))),l=function(e){function t(){return a(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return c},t}(s.a.Component);t.a=l},aLQP:function(e,t,n){e.exports=n.p+"MarkerIcon.2d0ebf2f.svg"},cilB:function(e,t){},jdcc:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("U7vG"),s=n.n(i),c=n("BL0p"),l=(n.n(c),n("aLQP")),u=n.n(l),p=function(e){function t(){a(this,t);var n=r(this,e.call(this));return n.state={map:null,markers:[]},n}return o(t,e),t.prototype.mapMoved=function(){console.log("mapMoved: "+JSON.stringify(this.state.map.getCenter()))},t.prototype.mapLoaded=function(e){null==this.state.map&&this.setState({map:e})},t.prototype.render=function(){return s.a.createElement(c.GoogleMap,{ref:this.mapLoaded.bind(this),onDragEnd:this.mapMoved.bind(this),defaultZoom:this.props.zoom,defaultCenter:this.props.position},s.a.createElement(c.Marker,{position:this.props.position,icon:{url:u.a,scaledSize:new google.maps.Size(64,64)}}))},t}(i.Component);t.a=Object(c.withGoogleMap)(p)},lVK7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("U7vG"),r=n.n(a),o=n("O27J"),i=(n.n(o),n("pnOm"));Object(o.render)(r.a.createElement(i.a,null),document.querySelector("#app"))},pAMG:function(e,t){e.exports=[{restId:"1",name:"Restaurang Tranan",menu_link:"http://www.tranan.se/restaurangen/meny/",cuisine:["European","Swedish"],price_range:"$$-$$$",rating:"****",phone:"08-52728100",address:"Karlbergsvägen 14",cat_id:"1",img_url:"img/tranan.jpg",desc:"A place to meet at, have a bite to eat and something to drink. That was how Tranan was know in 1929 by the residents of Stockholm, and that’s how it’s still known today - over 80 years later.",position:{lat:59.343172,lng:18.049017}},{restId:"2",name:"Miss Clara",menu_link:"http://www.missclarahotel.com/restaurang/lunch-meny",cuisine:["International","Swedish"],price_range:"$$$",rating:"****",phone:"08-4406710",address:"Sveavägen 48",cat_id:"1",img_url:"img/fish_miss_clara.jpg",desc:"The kitchen’s philosophy is to work in as natural way as possible. They change our meat, fish and vegetarian dishes every week.",position:{lat:59.337522,lng:18.062079}},{restId:"3",name:"Raw Sushi & Grill",menu_link:"http://raw.se/lunch/",cuisine:"Japanese",price_range:"$$-$$$",rating:"***",phone:"08-309680",address:"Rörstrandsgatan 9 ",cat_id:"1",img_url:"img/raw.jpg",desc:"Japan meets Europe in an elegant restaurant focusing on the rawness. At Raw sushi and sashimi coexists with hot dishes from the grill, bothmeat and shellfish.",position:{lat:59.339795,lng:18.033839}},{restId:"4",name:"Hamburgarstugan",link:"http://www.hamburgarstugan.se/",menu_link:"http://www.hamburgarstugan.se/wp-content/uploads/2016/04/Meny-Original-A4.pdf",cuisine:"Fast food",price_range:"$",rating:"***",phone:"08-216217",address:"Odengatan 53",cat_id:"2",img_url:"img/hStugan2.jpg",desc:"Come to Hamburgerstugan and get your life's best burger experience. They compile every burger with love daily. You get a day-to-day high-rise burger with home-made dressings and dip sauces. Gluten free bread is available.",position:{lat:59.343554,lng:18.054583}},{restId:"5",name:"Masala Masala",link:"www.masalamasala.se",menu_link:"http://www.masalamasala.se/lunchmeny/",cuisine:"Indian",price_range:"$$",rating:"**",phone:"08-12147043",address:"Odengatan 60",cat_id:"2",img_url:"img/masala.jpg",desc:"Masala Masala – Genuine Indian cuisine, also inspired by its neighboring countries. Our innovative chef has specially composed a number of new vegan dishes.",position:{lat:59.34348,lng:18.052472}},{restId:"6",name:"Babel Deli",link:"http://babeldeli.com/",menu_link:"http://babeldeli.com/wp-content/uploads/2016/02/takeawaywebb2.pdf",cuisine:"Meze",price_range:"$$",rating:"***",phone:"08-6683903",address:"Kungstensgatan 33",cat_id:"2",img_url:"img/meze.jpg",desc:"Babel is today both on Kungstensgatan at Sveavägen and on Långholmsgatan at Hornstull. Welcome to a fantastic dining experience guaranteed by Mamma Etimad!",position:{lat:59.341657,lng:18.059082}},{restId:"7",name:"Arirang",link:"http://arirang.se/",menu_link:"http://arirang.se/lunch/",cuisine:"Korean",price_range:"$$",rating:"***",phone:"08-6733225",address:"Luntmakargatan 65",cat_id:"2",img_url:"img/korean.jpg",desc:"Mild or spicy. Gentle and sweet or tantalisingly hot. Anything is possible at Arirang. You can choose how to combine our dishes yourself or you can ask us for advice.",position:{lat:59.340634,lng:18.060196}}]},pnOm:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("U7vG"),s=n.n(i),c=n("cilB"),l=(n.n(c),n("VH3W")),u=n("1K4x"),p=n("/DF0"),f=n("LGxg"),h=n("2Fet"),m=(n("KluA"),n("pAMG")),d=n.n(m),g=n("INDk"),y=(n.n(g),s.a.createElement(l.a,null)),b=s.a.createElement(u.a,null),w=function(e){function t(){a(this,t);var n=r(this,e.call(this));return n.state={step:1,selectedCategory:null,restaurantsList:[],selectedRestaurant:null},n.onRestaurantSelected=n.onRestaurantSelected.bind(n),n.choosenCat=n.choosenCat.bind(n),n.showInfo=n.showInfo.bind(n),n.backToStart=n.backToStart.bind(n),n}return o(t,e),t.prototype.choosenCat=function(e){this.setState({step:2,restaurantsList:d.a.filter(function(t){return t.cat_id===e})})},t.prototype.backToStart=function(){this.setState({step:1})},t.prototype.showInfo=function(){this.setState({step:3})},t.prototype.onRestaurantSelected=function(e){this.setState({selectedRestaurant:e})},t.prototype.renderSteps=function(){return 1===this.state.step?s.a.createElement(p.a,{choosenCat:this.choosenCat}):2===this.state.step?s.a.createElement(f.a,{restaurantList:this.state.restaurantsList,onRestaurantSelected:this.onRestaurantSelected,showInfo:this.showInfo}):3===this.state.step?s.a.createElement(h.a,{selectedRestaurant:this.state.selectedRestaurant,backToStart:this.backToStart}):void 0},t.prototype.render=function(){return s.a.createElement("div",{className:"wrapper"},y,s.a.createElement("main",null,this.renderSteps()),b)},t}(i.Component);t.a=w}},[0]);
//# sourceMappingURL=app.967a8843.js.map