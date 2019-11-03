$(function(){
  function buildPost(message){
    var content = message.text ? `${ message.text }` : "";
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var html = `<div class="main-box__messages">
                  <div class="upper-message">
                    <div class="main-box__messages--username">
                    ${message.user_name}
                    </div>
                    <div class="main-box__messages--time">
                    ${message.created_at}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="main-box__messages--latestmessage">
                      ${content}<br>
                      ${img}
                    </p>
                  </div>
                </div>`
    return html;
  }
  $("#new_message").on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action");
    $.ajax({
      url: url,  
      type: 'POST',
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(post){
      console.log(post.image);
      var html = buildPost(post);
      $(".messages-box").append(html)
      $("#message_body").val("")
    })
    .fail(function(){
    })
    .always(function(post){
      $('.form__submit').prop('disabled', false);
    })
  })
});