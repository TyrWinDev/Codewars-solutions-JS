function printerError(s) {
    return (s.match(/[n-z]/ig) === null ? 0 : s.match(/[n-z]/ig).length) + '/' + s.length ;
}