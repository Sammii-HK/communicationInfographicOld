// JavaScript Document

(function(){
  var $content = $(this.'.modal-content').detach();   // Remove modal from page

  $(this.'.item-content').on('click', function() {           // Click handler to open modal
    modal.open({content: $content, width:340, height:300});
  });
}());