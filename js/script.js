//******************SCRIPT CREATED BY W3SCHOOLS.COM************************************************
//https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_theme_company_smoothscroll&stacked=h
//*************************************************************************************************

$(document).ready(function(){
	
    /*	
        $('#experience-timeline').each(function() {
    
            $this = $(this); // Store reference to this
            $userContent = $this.children('div'); // user content
    
            // Create each timeline block
            $userContent.each(function() {
                $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
            });	
                    // Add icons to each block
            $this.find('.vtimeline-point').each(function() {
                $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
            });
            
                  // Add dates to the timeline if exists
            $this.find('.vtimeline-content').each(function() {
                var date = $(this).data('date');
                if (date) { // Prepend if exists
                    $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
                }
            });
        });
        */
        
      // Add smooth scrolling to all links in navbar + footer link
      $(".navbar a, #lead-down a, footer a[href='#home']").on('click', function(event) {
    
       // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
    
        // Prevent default anchor click behavior
        event.preventDefault();
    
        // Store hash
        var hash = this.hash;
    
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 300, function(){
    
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
          });
        } // End if
      });
    })
    
    //SLIDE IN ELEMENT
    
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
    
        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
      });
    
    //NAVBAR IS HIDING AFTER CLICKING ANYWHERE
    $("body").click(function(event) {
            // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called 
             if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible") ) {
                $('.navbar-collapse').collapse('toggle');
            }
      });
      
    
    });