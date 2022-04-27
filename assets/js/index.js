var SERVER = "http://localhost";
var PORT = 4000;

$("#add_user").submit(function() {
    alert("Data inserted successfully");
});

$("#update_user").submit(function(event) {
    event.preventDefault();
    let unindexed_array = $(this).serializeArray();
    let data = {};
    $.map(unindexed_array, function(n, i) {
        data[n["name"]] = n["value"];
    });
    let request = {
        url: `${SERVER}:${PORT}/api/update/${data.id}`,
        method: "PUT",
        data: data,
    };
    console.log(request);
    $.ajax(request).done((response) => {
        alert("Data Updated Successfully");
    });
});

if (window.location.pathname == "/") {
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function() {
        var id = $(this).attr("data-id");
        var request = {
            url: `${SERVER}:${PORT}/api/delete/${id}`,
            method: "DELETE",
        };
        if (confirm("Are you sure you want to delete this record?")) {
            $.ajax(request).done((response) => {
                alert("Data Deleted Successfully");
                location.reload();
            });
        }
    });
}