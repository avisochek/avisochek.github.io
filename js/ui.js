function goToPortfolio(){

  $("#portfolio").addClass("active");
  $("#front-page-headline").removeClass("front-page");
};

function goHome(){
  $("#front-link-section").removeClass("dock");
  $(".front-link").removeClass("dock");
  $(".front-icon").removeClass("dock");
  $("#front-page-headline").removeClass("dock");
  $(".side-item").removeClass("show");
};
function goToItem(item){
  console.log("fdsa");
  $("#front-link-section").addClass("dock");
  $(".front-link").addClass("dock");
  $(".front-icon").addClass("dock");
  $("#front-page-headline").addClass("dock");
  $(".side-item").removeClass("show");
  $("#"+item+"-section").addClass("show");
};

//initialize routes
//setup crossroads
// crossroads.addRoute('foo');
// crossroads.addRoute('lorem/ipsum');
//crossroads.routed.add(console.log, console); //log all routes
crossroads.ignoreState = true;
//setup hasher
function initParse(hash){
  crossroads.parse(hash);
};
function parseHash(newHash, oldHash){
  console.log(newHash);
  crossroads.parse(newHash);
};
hasher.initialized.add(parseHash); //parse initial hash
hasher.changed.add(parseHash); //parse hash changes
hasher.init(); //start listening for history change

if (hasher.getHash()===""){
  hasher.setHash("#home");
};

crossroads.addRoute('home',function(){
  console.log("aasdf");
  goHome();
});
crossroads.addRoute('portfolio',function(){
  goToItem("portfolio");
});
crossroads.addRoute('clustr',function(){
  goToItem("clustr");
});
crossroads.addRoute('contact',function(){
  goToItem("contact")
});
$(document).ready(function(){
  crossroads.parse(hasher.getHash());
});
