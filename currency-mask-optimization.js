// Old Code - not by me
const Mask = function (v) {
    v = v.replace(/\D/g, "");
    v = new String(Number(v));
    var len = v.length;

    if (1 == len)
        v = v.replace(/(\d)/, "0,0$1");
    else if (2 == len)
        v = v.replace(/(\d)/, "0,$1");
    else if (len > 2 && len < 9) {
        v = v.replace(/(\d{2})$/, ',$1');

        if (len > 5 && len < 9) {
            var x = len - 5
                , er = new RegExp('(\\d{' + x + '})(\\d)');
            v = v.replace(er, '$1.$2');
        }
    }
    if (len == 9) {
        /* var refReg = 'v = v.replace(/(\d{1})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3,$4");'; */
        v = v.replace(/(\d{1})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3,$4");
        refReg = '/';
        /* eval(refReg); */
    }

    if (len == 10) {
        v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3,$4");
    }

    if (len == 11) {
        v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3,$4");
    }

    if (len == 12) {
        v = v.replace(/(\d{1})(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3.$4,$5");
    }

    if (len == 13) {
        v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3.$4,$5");
    }

    if (len == 14) {
        v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3.$4,$5");
    }

    if (len == 15) {
        v = v.replace(/(\d{1})(\d{3})(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3.$4.$5,$6");
    }

    if (len == 16) {
        v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3.$4.$5,$6");
    }

    if (len == 17) {
        v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3.$4.$5,$6");
    }

    if (len == 18) {
        v = v.replace(/(\d{1})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3.$4.$5.$6,$7");
    }

    if (len == 19) {
        v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3.$4.$5.$6,$7");
    }

    if (len == 20) {
        v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3.$4.$5.$6,$7");
    }

    return v;
}

// Optimized Code - by me
const toCurrency = (string) => {
    let amount = new Number(string).toFixed(0);

    const pattern = /^\$?(?<integers>\d{1,3}(\d{3})*\d{3}|\d+)(?<decimals>\,?\d{2})$/gm;
    const exec = pattern.exec(amount);

    const integers = exec.groups.integers;
    const decimals = exec.groups.decimals;

    const reverseInt = integers.split('').reverse();

    let formated = reverseInt.map((a, b) => {
        return (b % 3 === 0) ? (b > 0 ? a + '.' : a) : a;
    });

    formated = formated.reverse().join('');

    return formated + ',' + decimals;
}