$("button").click(function(){
    $.post('/api/posts/', {
        userId: window.currentUser.id ,
        title: $('#title').val(),
        body: $('#body').val()
        }, 
        function(data){
            console.log(data) ;
    });
  });