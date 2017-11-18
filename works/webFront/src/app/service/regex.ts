export const regex = {
    merchantNo: /^[0-9]{15}$/,
    mobile: /^1(3|4|5|7|8)\d{9}$/,
    email: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z]{2,4}$/,
    mobileCode: /^[0-9]{6}$/,
    // password: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,32}/,
    // 大小写 数字 特殊字符  四选三
    password: /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,16}$/,
    closingNo: /^[0-9]{6}$/
}

