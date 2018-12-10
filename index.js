// Exported properties
exports.level = 3;

// Exported functions
exports.write = function(message, level = 3) {

    switch(level) {
        case 1:
            category = 'ERROR:   '
            break;
        case 2:
            category = 'WARNING: '
            break;
        case 3:
            category = 'INFO:    '
            break;
        case 4:
            category = 'DEBUG:   '
            break;
        case 5:
            category = 'VERBOSE: '
            break;
        default:
            category = 'UNCAT.:  '
    }

    if(level <= exports.level) {
        console.log(`${Date()} - ${category}${message}`)
    }
}