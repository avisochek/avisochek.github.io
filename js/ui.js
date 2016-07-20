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
  $("#front-link-section").addClass("dock");
  $(".front-link").addClass("dock");
  $(".front-icon").addClass("dock");
  $("#front-page-headline").addClass("dock");
  $(".side-item").removeClass("show");
  $("#"+item+"-section").addClass("show");
};

crossroads.ignoreState = true;
//setup hasher
function initParse(hash){
  crossroads.parse(hash);
};
function parseHash(newHash, oldHash){
  crossroads.parse(newHash);
};
hasher.initialized.add(parseHash); //parse initial hash
hasher.changed.add(parseHash); //parse hash changes
hasher.init(); //start listening for history change

if (hasher.getHash()===""){
  hasher.setHash("#home");
};

crossroads.addRoute('home',function(){
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
  $(".side-item").css("transition", "transform 1s");
  $(".front-icon").css("transition"," background-image 0.5s,width 2s,height 2s");
  $("front-page-headline").css("transition","font-size 2s");
});
