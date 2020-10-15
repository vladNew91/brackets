module.exports = function check(str, bracketsConfig) {
    let a = bracketsConfig.map((e) => e.join(""));
    for (let i = 0; i < a.length; i++) {
        if (str.includes(a[i])) {
            str = str.replace(a[i], "");
            i = -1;
        }
    }
    if (str.length == 0) {
        return true;
    } else return false;
};
