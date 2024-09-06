const specialKeys = {
    'esc': 'Escape',
    'f1': 'F1',
    'f2': 'F2',
    'f3': 'F3',
    'f4': 'F4',
    'f5': 'F5',
    'f6': 'F6',
    'f7': 'F7',
    'f8': 'F8',
    'f9': 'F9',
    'f10': 'F10',
    'f11': 'F11',
    'f12': 'F12',
    'prtsc': 'PrintScreen',
    'scrlk': 'ScrollLock',
    'pause': 'Pause',
    'aspas': "'",
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '0': '0', 
    '´menos': '-',
    'igual': '=',
    'backspace': 'Backspace',
    'ins': 'Insert',
    'home': 'Home',
    'pgup': 'PageUp',
    'tab': 'Tab',
    'q': 'q',
    'w': 'w',
    'e': 'e',
    'r': 'r',
    't': 't',
    'y': 'y',
    'u': 'u',
    'i': 'i',
    'o': 'o',
    'p': 'p',
    'agudo': '´',
    'cochetel': '[',
    'enter': 'Enter',
    'del': 'Delete',
    'end': 'End',
    'pgdn': 'PageDown',
    'capslk': 'CapsLock',
    'a': 'a',
    's': 's',
    'd': 'd',
    'f': 'f',
    'g': 'g',
    'h': 'h',
    'j': 'j',
    'k': 'k',
    'l': 'l',
    'ç': 'ç',
    'til': '~',
    'cocheter': ']',
    'shiftl': 'ShiftLeft',
    'barra': '\\',
    'z': 'z',
    'x': 'x',
    'c': 'c',
    'v': 'v',
    'b': 'b',
    'n': 'n',
    'm': 'm',
    'virgula': ',',
    'ponto': '.',
    'pontovirgula': ';',
    'contrabarra': '/',
    'shiftr': 'ShiftRight',
    'aup': 'ArrowUp',
    'ctrl': 'ControlLeft',
    'win': 'MetaLeft',
    'alt': 'AltLeft',
    'espaco': ' ',
    'altgr': 'AltRight',
    'fn': 'Fn',
    'menu': 'ContextMenu',
    'ctrlr': 'ControlRight',
    'aleft': 'ArrowLeft',
    'adown': 'ArrowDown',
    'aright': 'ArrowRight'
};

document.addEventListener("keydown", function(event) {
    const key = event.key.toLowerCase();
    const keyId = Object.keys(specialKeys).find(id => specialKeys[id].toLowerCase() === key);

    if (keyId) {
        document.getElementById(keyId).classList.add("active");
    }
});

document.addEventListener("keyup", function(event) {
    const key = event.key.toLowerCase();
    const keyId = Object.keys(specialKeys).find(id => specialKeys[id].toLowerCase() === key);

    if (keyId) {
        document.getElementById(keyId).classList.remove("active");
    }
});
