window.onload = function() {
    $('#casamento__success').on('hidden.bs.modal', function () {
        window.location.href = "/";
    });
};