let memory = 0; // Biến để lưu trữ giá trị nhớ
let num1 = '';
let num2 = '';
let operation = '';

function appendNumber(number) {
    if (operation) {
        num2 += number; // Thêm số vào num2 nếu đã chọn phép toán
        document.getElementById('result').value = num2; // Cập nhật ô kết quả
    } else {
        num1 += number; // Thêm số vào num1
        document.getElementById('result').value = num1; // Cập nhật ô kết quả
    }
}

function appendDecimal() {
    if (operation) {
        if (!num2.includes('.')) {
            num2 += '.';
            document.getElementById('result').value = num2;
        }
    } else {
        if (!num1.includes('.')) {
            num1 += '.';
            document.getElementById('result').value = num1;
        }
    }
}

function setOperation(op) {
    if (num1) {
        operation = op; // Lưu phép toán
        document.getElementById('result').value = ''; // Xóa ô kết quả để nhập số thứ hai
    }
}

function calculate() {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let result;

    if (operation === 'sqrt') {
        result = Math.sqrt(n1); // Căn bậc hai
    } else if (operation === '^') {
        result = Math.pow(n1, 2); // Bình phương
    } else {
        if (isNaN(n1) || isNaN(n2)) {
            alert('Vui lòng nhập đủ số để tính toán.');
            return;
        }

        switch (operation) {
            case '+':
                result = n1 + n2;
                break;
            case '-':
                result = n1 - n2;
                break;
            case '*':
                result = n1 * n2;
                break;
            case '/':
                if (n2 === 0) {
                    alert('Không thể chia cho 0.');
                    return;
                }
                result = n1 / n2;
                break;
            default:
                alert('Vui lòng nhập phép toán hợp lệ.');
                return;
        }
    }

    document.getElementById('result').value = result.toFixed(2); // Hiển thị kết quả với 2 chữ số thập phân
    clearInputs(); // Reset các giá trị sau khi tính
}

function memoryAdd() {
    const result = parseFloat(document.getElementById('result').value);
    if (!isNaN(result)) {
        memory += result; // Cộng kết quả vào giá trị nhớ
        alert('Giá trị nhớ hiện tại: ' + memory);
    }
}

function memorySubtract() {
    const result = parseFloat(document.getElementById('result').value);
    if (!isNaN(result)) {
        memory -= result; // Trừ kết quả khỏi giá trị nhớ
        alert('Giá trị nhớ hiện tại: ' + memory);
    }
}

function memoryRecall() {
    num1 = memory.toString(); // Gọi nhớ vào số thứ nhất
    document.getElementById('result').value = num1;
}

function clearInputs() {
    num1 = '';
    num2 = '';
    operation = '';
    document.getElementById('result').value = ''; // Xóa ô kết quả
}

