//验证手机号码
export function checkTel(tel) {
    if (!(/^1\d{10}$/.test(tel))) {
        return false
    }
    return true
}

export function isPhone(str) {
    var partten = /(^(0\d{2})-(\d{8})$)|(^(0\d{3})-(\d{7})$)|(^(0\d{2})-(\d{8})-(\d+)$)|(^(0\d{3})-(\d{7})-(\d+)$)|(^\d{7}$)|(^\d{8}$)/;
    if (partten.test(str)) {
        return true;
    } else {
        return false;
    }
}
// 验证经度
export function checkLongitude(longitude) {
    if (!(/^-?(([1-9]\d?)|(1[1-7]\d)|180)(\.\d{1,6})?$/).test(longitude)) {
        return false
    }
    return true
}

// 验证纬度
export function checkLatitude(latitude) {
    if (!(/^-?(([1-8]\d?)|([1-8]\d)|90)(\.\d{1,6})?$/).test(latitude)) {
        return false
    }
    return true
}
//是否为正整数

export function isPositiveInteger(rule, val, callback) {
    // console.log(rule, s)
    var re = /^[0-9]+$/;
    if (val == '' && rule.msg) {
        return callback(new Error(`请输入${rule.msg}`));
    }
    if (!re.test(val)) {
        return callback(new Error('请输入数字'));
    }

    if (rule.max && val.length > rule.max) {
        return callback(new Error(`最多输入 ${rule.max} 个字符`));
    }

    return callback()

}

//只能输入数字和字母
export function isNumStr(rule, val, callback) {
    var re = /^[A-Za-z0-9]+$/
    if (val == '' && rule.msg) {
        return callback(new Error(`请输入${rule.msg}`));
    }
    if (!re.test(val)) {
        return callback(new Error('只能输入数字和字母'));
    }
    if (rule.max && val.length > rule.max) {
        return callback(new Error(`最多输入 ${rule.max} 个字符`));
    }
    return callback()


}
//只能输入整数或者保留两位小数
export function isNum2(rule, val, callback) {
    if (val == 0) {
        callback();
    }
    var re = /^(([0-9]+[\.]?[0-9]{1,2})|[1-9])$/
    if (val == '' && rule.msg) {
        return callback(new Error(`请输入${rule.msg}`));
    }
    if (!re.test(val)) {
        return callback(new Error('只能输入整数或者保留两位小数'));
    }
    if (rule.max && val.length > rule.max) {
        return callback(new Error(`最多输入 ${rule.max} 个字符`));
    }
    return callback()
}

// 验证正整数
export function isInt(val) {
    if (!/^\d+$/.test(val)) {
        return false;
    }
    return true;
}
// 验证正小数
export function isDec(val) {
    if (!/^\d+\.\d+$/.test(val)) {
        return false
    }
    return true
}
export function isIntOrDec(val) {
    if (isInt(val) || isDec(val)) {
        return true
    }
    return false
}

// 验证邮箱
export function isEmail(val) {
    if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(val)) {
        return false
    }
    return true;
}

export function isNumStr2(val) {
    if (!/^[A-Za-z0-9]+$/.test(val)) {
        return false
    }
    return true;
}

// 验证银行卡
export function isBankCard(val) {
    if (!/^\d{16}|\d{19}$/.test(val)) {
        return false
    }
    return true
}
export function isPositiveInt(val) {
    if (!/^[0-9]+$/.test(val)) {
        return false;
    }
    return true;
}
//只能输入数字和字母和汉子
export function isNumStrChinese(val) {
    var re = /^[a-zA-Z0-9\u4e00-\u9fa5]*$/
    if (!re.test(val)) {
        return false;
    } else {
        return true;
    }
}
export function trim(str) {
    str = str.replace(/^(\s|\u00A0)+/, '');
    for (var i = str.length - 1; i >= 0; i--) {
        if (/\S/.test(str.charAt(i))) {
            str = str.substring(0, i + 1);
            break;
        }
    }
    return str;
}