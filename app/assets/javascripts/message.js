$(function(){
  function buildPost(message){
    var content = message.text ? `${ message.text }` : "";
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var html = `<div class="main-box__messages" data-message-id="${ message.id }">
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
  function scrollBottom(){
    var target = $('.main-box__messages').last();
    var position = target.offset().top + $('.messages-box').scrollTop();
    $('.messages-box').animate({
      scrollTop: position
    }, 300, 'swing');
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
      var html = buildPost(post);
      $(".messages-box").append(html);
      scrollBottom();
      $("#new_message")[0].reset();
    })
    .fail(function(){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    })
    .always(function(){
      $('.form__submit').prop('disabled', false);
    })
  })

  var reloadMessages = function() {
    last_message_id = $(".main-box__messages:last").data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';
      messages.forEach(function (message){
        insertHTML = buildPost(message);
        $(".messages-box").append(insertHTML)
      })
    })
    .fail(function() {
      console.log('error');
    });
  };
  if (window.location.href.match(/\/groups\/\d+\/messages/)){
    setInterval(reloadMessages, 7000);
  };
});