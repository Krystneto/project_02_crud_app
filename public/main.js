console.log('Client side browser');


// create a card button handler
$('.create').on('click', function(evt) {
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
    if (response.status === 200) {
      window.location.pathname = '/';
    }
  });
});

// edit button handler
$('.edit').on('click', function(evt) {
  console.log('clicked');
});

// Update card button handler
$('.update').on('click', function(evt) {
  console.log('clicked');
  $.post('/edit', {
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
    if (response.status === 200) {
      window.location.pathname = '/';
    };
  });
});

// delete a card button handler
$('.delete').on('click', function(evt) {
  $.post('/delete', {name: $('#name').text()},
    function(response) {
  });
  $(this).parents('.container').remove();
});







