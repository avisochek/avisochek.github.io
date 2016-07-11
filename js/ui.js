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
hasher.initialized.add(parseHash); //parse initial hash
hasher.changed.add(parseHash); //parse hash changes
hasher.init(); //start listening for history change

//update URL fragment generating new history record
hasher.setHash('');

crossroads.addRoute('asdf',function(){
  console.log("home!@")
  $("#front-link-section").removeClass("dock");
  $(".front-link").removeClass("dock");
  $(".front-icon").removeClass("dock");
  $("#front-page-headline").removeClass("dock");
  $(".side-item").removeClass("show");
});

crossroads.addRoute('{item}',function(item){
  $("#front-link-section").addClass("dock");
  $(".front-link").addClass("dock");
  $(".front-icon").addClass("dock");
  $("#front-page-headline").addClass("dock");
  $(".side-item").removeClass("show");
  $("#"+item+"-section").addClass("show");
});
