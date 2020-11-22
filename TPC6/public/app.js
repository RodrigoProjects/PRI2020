// Once the document is ready fetch some information.
$(document).ready(function () {
    update_todo_table()
    update_finished_table()
    update_canceled_table()
});

// Add a todo. AJAX POST call.
$("#add-todo").click(function (e) { 
    e.preventDefault();
    
    if($("#desc_input").val() != "" && $("#datetime_input").val() != ""){
        var data = {
            "descricao": $("#desc_input").val(),
            "supervisor": {
                "id" : $('#super_input').val(),
                "nome" : $('#super_input').text()
            },
            "color" : $('#color_input').val(),
            "timestamp": $('#datetime_input').val().replace('T', ' '),
            "state" : "Pending"
        }

        $.ajax({
            type: "POST",
            url: "http://localhost:3001/addTodo",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                update_todo_table()

                let color_val = $('#color_input').val()
                $('.addTodo-form').trigger("reset");
                $('#color_input').val(color_val)

                $(".add-alerts").empty().append(`<div class="alert alert-success" role="alert">
                To-Do adicionado!
                </div>`);
            },
            error: function (err) {
                $(".add-alerts").empty().append(`<div class="alert alert-danger" role="alert">
                Servidor não responde!
                </div>`);
            },
        });
        

    } else {

        $(".add-alerts").empty().append(`<div class="alert alert-danger" role="alert">
        Descrição ou Data não preenchidos!
        </div>`);
    }

});


// Finish a todo with an API call.
function finishTodo(id) {
    $.ajax({
        type: "PUT",
        url: "http://localhost:3001/finishTodo/" + id,
        success: function (response) {
            update_todo_table()
            update_finished_table()
            
        },
        error: (e) => {
            console.log("Error! Server is offline.")
        }
    });
}

// Cancel a todo with an API call.
function cancelTodo(id) {
    $.ajax({
        type: "PUT",
        url: "http://localhost:3001/cancelTodo/" + id,
        success: function (response) {
            update_todo_table()
            update_canceled_table()
            
        },
        error: (e) => {
            console.log("Error! Server is offline.")
        }
    });
}

// Cancel a todo with an API call.
function deleteTodo(id) {
    $.ajax({
        type: "DELETE",
        url: "http://localhost:3001/deleteTodo/" + id,
        success: function (response) {
            update_todo_table()
            update_finished_table()
            update_canceled_table()
        },
        error: (e) => {
            console.log("Error! Server is offline.")
        }
    });
}

// Takes a todo and feeds the edit Modal
function feed_edit_modal(todo){
    $('.modal-title').text("Edit (" + todo.descricao + "):")
    $('#desc_edit').val(todo.descricao)
    $('#super_edit').val(todo.supervisor.id)
    $('#datetime_edit').val(todo.timestamp.replace(' ', 'T'))
    $('#color_edit').val(todo.color)

    $('#editSave').attr('onClick', 'editTodo(' + todo.id +')');
}

// Present a edit modal.
function editModal(todo){

    feed_edit_modal(todo)

    $('#editModal').modal("show")
}

// Edit a todo
function editTodo(id) {
    if($("#desc_edit").val() != "" && $("#datetime_edit").val() != ""){
        var data = {
            "descricao": $("#desc_edit").val(),
            "supervisor": {
                "id" : $('#super_edit').val(),
                "nome" : $('#super_edit').text()
            },
            "color" : $('#color_edit').val(),
            "timestamp": $('#datetime_edit').val().replace('T', ' '),
            "state" : "Pending"
        }

        $.ajax({
            type: "PUT",
            url: "http://localhost:3001/editTodo/" + id,
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                $('#editModal').modal("toggle")
                update_todo_table()
            },
            error: function (err) {
                $(".add-alerts").empty().append(`<div class="alert alert-danger" role="alert">
                Servidor não responde!
                </div>`);
            },
        });
        

    } else {

        $(".edit-alerts").empty().append(`<div class="alert alert-danger" role="alert">
        Descrição ou Data não preenchidos!
        </div>`);
    }
}