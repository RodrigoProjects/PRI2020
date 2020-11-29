$(document).ready(function () {
    populateAlunos()
});


function populateAlunos(){

    $('#alunosContainer').empty()
    $.ajax({
        type: "GET",
        url: "http://localhost:7700/alunos/all",
        success: function (response) {
            if(response.length == 0){
                $('#alunosContainer').append(`
                    <div class="alert alert-warning" style="margin-top: 2vh;" role="alert"> 
                        Sem alunos!
                    </div>
                `)
            } else {
                response.forEach(e => {
                    let html = alunoTemplate({ aluno: e})
                    $('#alunosContainer').append(html)
                });
            }
        },
        error: (e) => {
            $('#alunosContainer').append(`<div class="alert alert-danger" role="alert">
            Oops! Server connection error.
          </div>`)
        }
    });
}


// Description icon click.
function descriptionModal(id) {

    $('#detailsContent').empty();
    $.ajax({
        type: "GET",
        url: "http://localhost:7700/alunos/" + id,
        success: function (response) {
            response.forEach(e => {
                let html = detailsTemplate({ aluno: e})
                $('#detailsContent').append(html)
            });
        },
        error: (e) => {
            $('#detailsContent').append(`
            <div class="modal-header">
                <h3>Error</h3>
            </div>
            <div class="modal-body">
                <div class="alert alert-danger" role="alert">
                    Oops! Server connection error.
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Close</button>
            </div>`)
        }
    })

    $('#details').modal('show')
}

// Delete Modal Show
function deleteModal(id){

    $('#deleteContent').empty();

    $.ajax({
        type: "GET",
        url: "http://localhost:7700/alunos/" + id,
        success: function (response) {
            response.forEach(e => {
                let html = deleteTemplate({ aluno: e})
                $('#deleteContent').append(html)
            });
        },
        error: (e) => {
            $('#deleteContent').append(`
            <div class="modal-header">
                <h3>Error</h3>
            </div>
            <div class="modal-body">
                <div class="alert alert-danger" role="alert">
                    Oops! Server connection error.
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Close</button>
            </div>`)
        }
    })

    $('#delete').modal('show')

}

// Delete one student
function deleteAluno(id){

    $.ajax({
        type: "DELETE",
        url: "http://localhost:7700/alunos/delete/" + id,
        success: function (response) {
            populateAlunos()
            $('#delete').modal('toggle')

        },
        error: (e) => {
            alert("Server is not working correctly or that student does not exist.")
        }
    });

}

function addModal() {
    $('#addForm').trigger('reset')
    $('#preview').attr('src', '')
    $('#avatar').attr('name', '')
    $('#add').modal('show')
}

// Avatar Preview
$('#avatar').change(e => {
    var output = document.getElementById('preview');
    output.src = URL.createObjectURL(e.target.files[0]);
    output.hidden = false
    $('#avatar').attr('name', 'avatar')
    output.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
      }
})

// Add a Student
function addAluno() {

    if($('#nome').val().trim() != "" && $('#numero').val().trim() != "" && $('#sexo').val().trim() != ""){
        
        let form = document.getElementById("addForm")
        let formData = new FormData(form)

        $.ajax({
            type: "POST",
            url: "http://localhost:7700/alunos",
            enctype: 'multipart/form-data',
            cache: false,
            data: formData,
            contentType: false, // requires jQuery 1.6+
            processData: false,
            success: function (response) {
                $('#add').modal('toggle')
                console.log("All okay!")
                populateAlunos()
            },
            error: (e) => {
                $('#add-alerts').empty().append(`<div class="alert alert-danger" role="alert">
                                        Connection to server can't be made!
                                      </div>`)
            }
        });
    } else {
        $('#add-alerts').empty().append(`<div class="alert alert-danger" role="alert">
                                        Os campos nome, número e sexo são obrigatórios!
                                      </div>`)
    }
    


}

// Avatar Preview Edit form
$('#editAvatar').change(e => {
    console.log("Im here!!")
    let output = document.getElementById('editPreview');
    output.src = URL.createObjectURL(e.target.files[0]);
    $('#editAvatar').attr('name', 'avatar')
    output.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
      }
})

// Edit Modal show
function editModal(id){
    $('#editAvatar').attr('name', '')
    $('#editContent').empty();
    
    $.ajax({
        type: "GET",
        url: "http://localhost:7700/alunos/" + id,
        success: function (response) {
            response.forEach(e => {

                $("#editAvatar").unbind("change");

                let html = editTemplate({ aluno: e})
                $('#editContent').append(html)

                $('#editAvatar').change(e => {
                    console.log("Im here!!")
                    let output = document.getElementById('editPreview');
                    output.src = URL.createObjectURL(e.target.files[0]);
                    $('#editAvatar').attr('name', 'avatar')
                    output.onload = function() {
                        URL.revokeObjectURL(output.src) // free memory
                      }
                })
            });
        },
        error: (e) => {
            $('#editContent').append(`
            <div class="modal-header">
                <h3>Error</h3>
            </div>
            <div class="modal-body">
                <div class="alert alert-danger" role="alert">
                    Oops! Server connection error.
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Close</button>
            </div>`)
        }
    })

    $('#edit').modal('show')
    


}

function editAluno(id){
    if($('#editNome').val().trim() != "" && $('#editNumero').val().trim() != "" && $('#editSexo').val().trim() != ""){
        
        let form = document.getElementById("editForm")
        let formData = new FormData(form)

        $.ajax({
            type: "PUT",
            url: "http://localhost:7700/alunos/" + id,
            enctype: 'multipart/form-data',
            cache: false,
            data: formData,
            contentType: false, // requires jQuery 1.6+
            processData: false,
            success: function (response) {
                $('#edit').modal('toggle')
                populateAlunos()
            },
            error: (e) => {
                $('#edit-alerts').empty().append(`<div class="alert alert-danger" role="alert">
                                        Connection to server can't be made!
                                      </div>`)
            }
        });
    } else {
        $('#edit-alerts').empty().append(`<div class="alert alert-danger" role="alert">
                                        Os campos nome, número e sexo são obrigatórios!
                                      </div>`)
    }   
}


// Search Bar
$('#searchInput').keyup(e => {
    if(e.target.value.trim() == ""){
        populateAlunos()
    } else {
        $('#alunosContainer').empty()

        $.ajax({
            type: "GET",
            url: "http://localhost:7700/alunos/query/" + e.target.value.trim(),
            success: function (response) {

                if(response.length == 0){
                    $('#alunosContainer').append(`
                        <div class="alert alert-warning" style="margin-top: 2vh;" role="alert"> 
                            Aluno não encontrado!
                        </div>
                    `)
                } else {
                    response.forEach(e => {
                        let html = alunoTemplate({ aluno: e})
                        $('#alunosContainer').append(html)
                    });
                }
                
            },
            error: (e) => {
                $('#alunosContainer').append(`<div class="alert alert-danger" role="alert">
                Oops! Server connection error.
              </div>`)
            }
        });
    }
})