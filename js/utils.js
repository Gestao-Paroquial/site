const showErrors = error => Object.values(error).forEach(alert);

const formValuesToObject = form =>
  $(form)
    .serializeArray()
    .reduce((prev, curr) => {
      prev[curr.name] = curr.value;
      return prev;
    }, {});

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

const backEndUrl = isLocalhost
  ? "http://localhost:8000"
  : "http://laravel.paroquiasle.org.br";