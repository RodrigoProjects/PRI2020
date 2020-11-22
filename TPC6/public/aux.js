function create_canceled_table_row(e){

    var tr = document.createElement("tr")
    tr.classList.add("table-danger")
    
    var td1 = document.createElement("td")
    var itd1 = document.createElement("i")
    itd1.setAttribute("class", "fas fa-bookmark")
    itd1.setAttribute("style", "color:" + e.color + ";")

    td1.appendChild(itd1)

    var td2 = document.createElement("td")
    td2.innerHTML = e.descricao

    var td3 = document.createElement("td")
    td3.innerHTML = e.supervisor.nome

    var td4 = document.createElement("td")
    td4.innerHTML = e.timestamp

    var td5 = document.createElement("td")

    var i4 = document.createElement("i")
    i4.setAttribute("class", "fas fa-trash action-icon")
    i4.setAttribute("id", "delete-task")
    i4.setAttribute("style", "color: darkgoldenrod;")
    i4.setAttribute("onClick", "deleteTodo("+ e.id +")")

    td5.appendChild(i4)

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)

    $("#insert-canceled").append(tr)
}

function create_finished_table_row(e){

    var tr = document.createElement("tr")
    tr.classList.add("table-success")
    
    var td1 = document.createElement("td")
    var itd1 = document.createElement("i")
    itd1.setAttribute("class", "fas fa-bookmark")
    itd1.setAttribute("style", "color:" + e.color + ";")

    td1.appendChild(itd1)

    var td2 = document.createElement("td")
    td2.innerHTML = e.descricao

    var td3 = document.createElement("td")
    td3.innerHTML = e.supervisor.nome

    var td4 = document.createElement("td")
    td4.innerHTML = e.timestamp

    var td5 = document.createElement("td")

    var i4 = document.createElement("i")
    i4.setAttribute("class", "fas fa-trash action-icon")
    i4.setAttribute("id", "delete-task")
    i4.setAttribute("style", "color: darkgoldenrod;")
    i4.setAttribute("onClick", "deleteTodo("+ e.id +")")

    td5.appendChild(i4)


    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)

    $("#insert-finished").append(tr)
}

function create_pending_table_row(e){
    
    var tr = document.createElement("tr")
    tr.classList.add("table-secondary")
    
    var td1 = document.createElement("td")
    var itd1 = document.createElement("i")
    itd1.setAttribute("class", "fas fa-bookmark")
    itd1.setAttribute("style", "color:" + e.color + ";")

    td1.appendChild(itd1)

    var td2 = document.createElement("td")
    td2.innerHTML = e.descricao

    var td3 = document.createElement("td")
    td3.innerHTML = e.supervisor.nome

    var td4 = document.createElement("td")
    td4.innerHTML = e.timestamp

    var td5 = document.createElement("td")

    var i1 = document.createElement("i")
    i1.setAttribute("class", "fas fa-check action-icon")
    i1.setAttribute("id", "finish-task")
    i1.setAttribute("style", "color: green;")
    i1.setAttribute("onClick", "finishTodo("+ e.id +")")

    var i2 = document.createElement("i")
    i2.setAttribute("class", "fas fa-times action-icon")
    i2.setAttribute("id", "cancel-task")
    i2.setAttribute("style", "color: red;")
    i2.setAttribute("onClick", "cancelTodo("+ e.id +")")

    var i3 = document.createElement("i")
    i3.setAttribute("class", "fas fa-edit action-icon")
    i3.setAttribute("id", "edit-task")
    i3.setAttribute("style", "color: rgb(26, 83, 255);")
    i3.setAttribute("onClick", "editModal(" + JSON.stringify(e) + ")")
    

    var i4 = document.createElement("i")
    i4.setAttribute("class", "fas fa-trash action-icon")
    i4.setAttribute("id", "delete-task")
    i4.setAttribute("style", "color: darkgoldenrod;")
    i4.setAttribute("onClick", "deleteTodo("+ e.id +")")

    td5.appendChild(i1)
    td5.appendChild(i2)
    td5.appendChild(i3)
    td5.appendChild(i4)

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)

    $("#insert-pending").append(tr)

}

function update_todo_table(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/tarefas?state=Pending&_sort=timestamp,descricao",
        success: function (response) {
            $("#insert-pending").empty()            

            response.forEach(e => {
                create_pending_table_row(e)

            });
        }
    });
}

function update_finished_table(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/tarefas?state=Finished&_sort=descricao,supervisor.nome",
        success: function (response) {
            $("#insert-finished").empty()            

            response.forEach(e => {
                create_finished_table_row(e)
            });
        }
    });
}

function update_canceled_table(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/tarefas?state=Canceled&_sort=descricao,supervisor.nome",
        success: function (response) {
            $("#insert-canceled").empty()            

            response.forEach(e => {
                create_canceled_table_row(e)
            });
        }
    });
}