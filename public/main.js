console.log('Hello from public');





// edit button handler
$('.edit').on('click', function(evt) {
  console.log('clicked');
  $.get('/card/judge', function(response) {
    console.log(response);
  })
})


// create a card button handler
$('.create').on('click', function(evt) {
  console.log('clicked');
  $.post('/insert_card', {
    name:$('input[name="name"]').val(),
    spot_number:$("input[name='spot_number']").val(),
    spot_type:$("input[name='spot_type']").val(),
    aura:$("input[name='aura']").val(),
    type:$("input[name='type']").val(),
    group: $("input[name='group']").val(),
    ability: $("textarea[name='ability']").val(),
    burst:$("input[name='burst']").val(),
    attack:$("input[name='attack']").val(),
    defense:$("input[name='defense']").val(),
  },
  function(response) {
    console.log(response)
  })
})



// delete a card button handler
$('.delete').on('click', function(evt) {
  $.post('/delete', {name: $('#name').text()}, function(response) {
    console.log($('#name').text());
  })
})






