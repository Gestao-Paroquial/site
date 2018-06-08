whenElementReady('#casamento__success', () => {
    $('#casamento__success').on('hidden.bs.modal', function () {
        window.location.href = "/";
    });
});