export function _t(message, $t){
    var m = message.split('.');
    if(m.length > 0 && m[0] == '_'){
        var _message = $t(m[1]);
        var _attribute = $t(m[2]);
        return _message.replace(':attribute', _attribute);
    }
    return message;
}
