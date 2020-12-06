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
                    let html = `
                    <tr onClick="showFile('${e.filename}', '${e.type}')" style="cursor: pointer;">
                        <td> <i class="far fa-file-alt"/> </td>
                        <td>${e.filename}</td>
                        <td>${e.size}</td>
                        <td>${e.timestamp}</td>
                        <td>${e.type}</td>
                        <td>${e.descricao}</td>
                    </tr>
                `

                    $('#files').append($(html))
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
    


function showFile(name, mime){
    $('#showContent').empty()
    
    if(mime == 'image/jpeg'){
        var html = `
        <div class="modal-header">
            <div class="flex-header">
                <h5>${name}</h5>
                <div>
                    <a href="http://localhost:7700/files/download/${name}"<i class="fas fa-download fa-2x"/></a>
                    <i class="fas fa-times fa-2x" data-dismiss="modal" style="color: darkgray; cursor: pointer; margin-left: 1vw;"></i>
                </div>
            </div>
        </div>
        <div class="modal-body">
            <img class="imageShow" src="fileStore/${name}"/>
        </div>
    
    `

        
    } else {
        var html = `
        <div class="modal-header">
            <div class="flex-header">
                <h5>${name}</h5>
                <div>
                    <a href="http://localhost:7700/files/download/${name}"<i class="fas fa-download fa-2x"/></a>
                    <i class="fas fa-times fa-2x" data-dismiss="modal" style="color: red; cursor: pointer; margin-left: 1vw;"></i>
                </div>
            </div>
        </div>
        <div class="modal-body">
        <div class="alert alert-warning" role="alert">
        Este formato (${mime}) ainda não é suportado para visualização!
      </div>
        </div>
`
    }
    

    $('#showContent').append($(html))
    $('#show').modal('show')


}