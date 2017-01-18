console.log('Hello from public');

$('.edit').on('click', function(evt){
  console.log('clicked');
  $.get('/card/judge', function(response){
    console.log(response);
  })
})
