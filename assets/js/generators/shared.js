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