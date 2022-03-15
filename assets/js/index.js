$("#add_user").submit(function() {
    alert("Data inserted successfully");
})

$("#update_user").submit(function(event) {
    event.preventDefault();
    let unindexed_array = $(this).serializeArray();
    let data = {};
    $.map(unindexed_array, function(n, i) {
        data[n['name']] = n['value'];
    });
    let request = {
        "url": `http://localhost:3000/api/update/${data.id}`,
        "method": "PUT",
        "data": data
    }
    $.ajax(request).done((response) => {
        alert("Data Upadated Successfully");
    })
})

if (window.location.pathname == "/") {
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function() {
        var id = $(this).attr("data-id");
        var request = {
            "url": `http://localhost:3000/api/delete/${id}`,
            "method": "DELETE"
        }
        if (confirm("Are you sure you want to delete this record?")) {
            $.ajax(request).done((response) => {
                alert("Data Deleted Successfully");
                location.reload();
            })

        }
    })
}