$(document).ready(function () {
    updateFiles()

});


function updateFiles(){

    $('#files').empty()
    $('#alertsContainer').empty()

    $.ajax({
        type: "GET",
        url: "http://localhost:7700/files/all",
        success: function (response) {
            if(response.length == 0){
                $('#alertsContainer').append(`
                    <div class="alert alert-warning" style="margin-top: 2vh;" role="alert"> 
                        Sem ficheiros!
                    </div>
                `)
            } else {
                response.forEach(e => {
                    console.log("Aluno")
                });
            }
        },
        error: (e) => {
            $('#alertsContainer').append(`<div class="alert alert-danger" role="alert">
            Oops! Server connection error.
          </div>`)
        
        }
    });
}

function addModal(){
    $('#moreFiles').empty()
    $('#addForm').trigger('reset')
    $('#add').modal('show')

}

function addFileForm(){
    let id = '_' + Math.random().toString(36).substr(2, 9);
    let form = $(`
    <div class="card bg-light formCard" id="${id}">
        <div class="card-body">
            <div class="cardAction">
                    <i class="fas fa-times" style="color:red; cursor: pointer;" onClick="removeFileForm('${id}')" ></i>
            </div>
            <div class="form-group">
                <label for="Descricao"> Descrição:</label>
                <input class="form-control" id="Descricao" type="text" name="descricao" required />
            </div>
            <div class="form-group">
                <label for="File"> Ficheiro:</label>
                <input class="form-control-file" id="File" type="file" name="ficheiro" required/>
                
            </div>
        </div>
    </div>`)

    $('#moreFiles').append(form)
}

function removeFileForm(id){
   $(`#${id}`).remove()
}

$('#addForm').submit((e) => {
    e.preventDefault();
    let form = document.getElementById('addForm')
    let formData = new FormData(form)

    $.ajax({
        type: "POST",
        url: "http://localhost:7700/files",
        cache: false,
        data: formData,
        contentType: false, // requires jQuery 1.6+
        processData: false,
        success: function (response) {
            $('#add').modal('toggle')
            updateFiles()
        },
        error: (e) => {
            $('#add-alerts').empty().append(`<div class="alert alert-danger" role="alert">
                                    Connection to server can't be made!
                                  </div>`)
        }
    });

})
    

