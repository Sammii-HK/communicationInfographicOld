// JavaScript Document

/*(function(){
  var $content = $(this.'.modal-content').detach();   // Remove modal from page

  $(this.'.item-content').on('click', function() {           // Click handler to open modal
    modal.open({content: $content, width:340, height:300});
  });
}());*/

 $(".modal").click(function(){
        var _button = $(this).attr('id');
        var isOpen = $("."+_button+"_modal").css('display') === 'block';
        if(isOpen){
            $("."+_button+"_modal").css('display', 'none');
        }else{
            $("."+_button+"_modal").css('display', 'block');
        }

    })