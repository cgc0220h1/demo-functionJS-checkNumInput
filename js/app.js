function validate(value) {
    if (isNaN(value)) {
        return false;
    }
    return true;
}

function checkNum() {
    let num;
    for (; ;) {
        num = prompt("Mời nhập vào giá trị cần kiểm tra");
        if (num === "") {
            alert("Không có giá trị nhập vào. Vui lòng nhập giá trị.")
        } else {
            break;
        }
    }
    if (validate(num)) {
        return alert("Đây là một số");
    }
    return alert("Đây là ký tự số");
}