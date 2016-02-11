

var stuff=function(){
  // sidebar
  $("#sidebar_toggle").on("click",function(){
    $("#sidebar_content").toggle();
  });

  // get rid of the sidebar when clicking outside the sidebar_toggle button
  // thanks, Mark Amery --http://stackoverflow.com/questions/1403615/use-jquery-to-hide-a-div-when-the-user-clicks-outside-of-it
  $(document).mouseup(function (e){
    var container = $("#sidebar_toggle");
    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {$("#sidebar_content").hide();}
  });

  $("body").on("click",".portfolio_link",function(){
    $("#content").load("portfolio.html");
  });

  $("body").on("click",".home_link",function(){
    $("#content").load('home.html');
  });

  $("body").on("click",".profile_link",function(){
    $('#content').load('profile.html');
  });

  $('body').on('click','.portfolio_item',function(){
      $("#content").load('project_pages/'+$(this).attr('name')+'.html');
  });

  $('body').on("click",".block_link",function(){
    $($(this).attr('for')).toggle();
  });
};


// thanks -- John Millikin -- http://stackoverflow.com/questions/168963/stop-jquery-load-response-from-being-cached
$.ajaxSetup ({
    // Disable caching of AJAX responses
    cache: false
});


$(document).ready(function(){
  $("#content").load("home.html");
  stuff();
});
