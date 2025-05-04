export function code_list(list, ind, emptyComment) {
    if (list == null) return "null" + (emptyComment ? ` // ${emptyComment}` : "")
    if (list.length == 0) return "[]" + (emptyComment ? ` // ${emptyComment}` : "")
    return "[\n" + list.map((v) => {
        var res;
        switch (typeof (v)) {
            case 'boolean': res = v ? 'true' : 'false'; break;
            case 'number': res = v; break;
            case 'string': res = `"${v}"`; break;
            case 'object': res = v instanceof Array ? code_list(v, ind + 1) : code_object(v, ind + 1); break;
            default: res = 'unknown type';
        }
        return "    ".repeat(ind + 1) + `${res}`
    })
        .join(",\n")
        + "\n" + "    ".repeat(ind) + "]"
}

export function code_object(obj, ind, emptyComment) {
    if (obj == null) return "null" + (emptyComment ? ` // ${emptyComment}` : "")
    let keys = Object.keys(obj)
    if (keys.length == 0) return "[]" + (emptyComment ? ` // ${emptyComment}` : "")
    return "[\n" + keys.map((k) => {
        var val = obj[k]
        var res;
        switch (typeof (val)) {
            case 'boolean': res = val ? 'true' : 'false'; break;
            case 'number': res = val; break;
            case 'string': res = `"${val}"`; break;
            case 'object': res = val instanceof Array ? code_list(val, ind + 1) : code_object(val, ind + 1); break;
            default: res = 'unknown type';
        }
        return "    ".repeat(ind + 1) + `"${k}" => ${res}`
    })
        .join(",\n")
        + "\n" + "    ".repeat(ind) + "]"
}

export function capitalize(sentence) {
    const words = sentence.split(" ");

    return words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
}


/** @param {string} content */
export function parsePhp(content) {
    content = content
        .replace('<?php', '') // remove php tag and return
        .replace('?>', '')
        .replace('return [', '[') // remove first return
        .replace('];',']') // remove extra semicolon
        .replace(/(\/\/.+\n)/gm, '') // remove comments
        .replace(/(\n([ \t]+|)\n)/gm, '\n') // remove extra line breaks
        .replace(/\[/gm,'{') // preemptively transform into json syntax
        .replace(/\]/gm, '}')
        .replace(/\{([^\=\>]*)\}/gm, `[$1]`) // change arrays back to square brackets
        .replace(/{[\s]*{([\s\S]*)}[\s]*}/gm, `[{$1}]`) // same for object arrays
        .replace(/\s?\=\>/gm,':') // change arrows to colons
        .replace(/,([\s}\]]+$)/gm, `$1`) // remove trailing comma

    return JSON.parse(content);

}