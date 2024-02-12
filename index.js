function downloadImage(url, newNameFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
        var blob = xhr.response;
        var a = document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = newNameFile;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    xhr.send();
}