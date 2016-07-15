function goToPortfolio(){

  $("#portfolio").addClass("active");
  $("#front-page-headline").removeClass("front-page");
};




// $(document).ready(function(){
//   $("#portfolioLink").click(function(){
//     goToPortfolio();
//   });
// })

//initialize routes
//setup crossroads
// crossroads.addRoute('foo');
// crossroads.addRoute('lorem/ipsum');
crossroads.routed.add(console.log, console); //log all routes

//setup hasher
function parseHash(newHash, oldHash){
  crossroads.parse(newHash);
}
var home = crossroads.addRoute('home',function(){
  console.log("home!@")
  $("#front-link-section").removeClass("dock");
  $(".front-link").removeClass("dock");
  $(".front-icon").removeClass("dock");
  $("#front-page-headline").removeClass("dock");
  $(".side-item").removeClass("show");
});
// home.greedy = true;
var item = crossroads.addRoute('/{item}',function(item){
  $("#front-link-section").addClass("dock");
  $(".front-link").addClass("dock");
  $(".front-icon").addClass("dock");
  $("#front-page-headline").addClass("dock");
  $(".side-item").removeClass("show");
  $("#"+item+"-section").addClass("show");
});
hasher.initialized.add(parseHash); //parse initial hash
hasher.changed.add(parseHash); //parse hash changes
hasher.init(); //start listening for history change


// item.greedy=true;
hasher.setHash(hasher.getHash());
