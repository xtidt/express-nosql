$('#btn1').on('click', () => {
  $.ajax({
    type: 'GET',
    contentType: 'application/x-www-form-urlencoded',
    url: '/users/view',
    data: {
      user: $('#view-user').val()
    },
    success: function (res) {
      draw(res)
    }
  })
})

$('#btn2').on('click', () => {
  $.ajax({
    type: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    url: '/users/add',
    data: {
      user: $('#add-user').val(),
      pwd: $('#add-pwd').val()
    },
    success: function (res) {
      draw(res)
    }
  })
})

$('#btn3').on('click', () => {
  $.ajax({
    type: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    url: '/users/update',
    data: {
      user: $('#update-user').val(),
      pwd: $('#update-pwd').val()
    },
    success: function (res) {
      draw(res)
    }
  })
})

$('#btn4').on('click', () => {
  $.ajax({
    type: 'DELETE',
    contentType: 'application/x-www-form-urlencoded',
    url: '/users/delete',
    data: {
      user: $('#delete-user').val()
    },
    success: function (res) {
      draw(res)
    }
  })
})

function draw (content) {
  // create the editor
  const container = document.getElementById('jsoneditor')
  container.innerHTML = ''
  const options = {}
  const editor = new JSONEditor(container, options)
  // set json
  editor.set(content)
}
