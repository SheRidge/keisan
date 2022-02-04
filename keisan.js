function keisan() {
    text1 = document.getElementById('atai1')
    text2 = document.getElementById('atai2')

    x = parseInt(text1.value);
    y = parseInt(text2.value);
    
    if (text1.value == "") {
        alert("1つ目の値が入力されていません。");
    return;}
    if (text2.value == "") {
        alert("2つ目の値が入力されていません。");
    return;}
    z = x + y
    kekka = document.getElementById('kekka');
    kekka.innerHTML = z;

    if (z > 0)  {
        kekka.style.color = 'green';
    }else{
        kekka.style.color = 'red';
    }
}

function hikizan() {
    text1 = document.getElementById('atai1')
    text2 = document.getElementById('atai2')

    x = parseInt(text1.value);
    y = parseInt(text2.value);
    
    if (text1.value == "") {
        alert("1つ目の値が入力されていません。");
    return;}
    if (text2.value == "") {
        alert("2つ目の値が入力されていません。");
    return;}
    z = x - y
    kekka = document.getElementById('kekka');
    kekka.innerHTML = z;

    if (z > 0) {
        kekka.style.color = 'green';
    }else{
        kekka.style.color = 'red';
    }
}

function kakezan() {
    text1 = document.getElementById('atai1')
    text2 = document.getElementById('atai2')

    x = parseInt(text1.value);
    y = parseInt(text2.value);
    
    if (text1.value == "") {
        alert("1つ目の値が入力されていません。");
    return;}
    if (text2.value == "") {
        alert("2つ目の値が入力されていません。");
    return;}
    z = x * y
    kekka = document.getElementById('kekka');
    kekka.innerHTML = z;

    if (z > 0) {
        kekka.style.color = 'green';
    }else{
        kekka.style.color = 'red';
    }
}

function warizan() {
    text1 = document.getElementById('atai1')
    text2 = document.getElementById('atai2')

    x = parseInt(text1.value);
    y = parseInt(text2.value);
    
    if (text1.value == "") {
        alert("1つ目の値が入力されていません。");
    return;}
    if (text2.value == "") {
        alert("2つ目の値が入力されていません。");
    return;}
    z = x / y
    kekka = document.getElementById('kekka');
    kekka.innerHTML = z;

    if (z > 0) {
        kekka.style.color = 'green';
    }else{
        kekka.style.color = 'red';
    }
}

function nijou() {
    text1 = document.getElementById('atai1')
    text2 = document.getElementById('atai2')

    x = parseInt(text1.value)
    y = parseInt(text2.value)

    if (text1.value == "") {
        alert("1つ目の値が入力されていません。");
    return;}
    if (text2.value != "") {
        alert("2つ目の値には入力しないでください。");
    return}
    z = x * x
    kekka = document.getElementById('kekka');
    kekka.innerHTML = z;

    if (z > 0) {
        kekka.style.color = 'green';
    }else{
        kekka.style.color = 'red';
    }
}

function kaijou() {
    text1 = document.getElementById('atai1')
    text2 = document.getElementById('atai2')

    x = parseInt(text1.value)
    y = parseInt(text2.value)

    if (text1.value == "") {
        alert("1つ目の値が入力されていません。");
    return;}
    if (text2.value != "") {
        alert("2つ目の値には入力しないでください。");
    return}
    
    var n = x - 1
    var a = 2
    var z = 1

    for (var i = 0; i < n; i++){
        z = z * a
        a = a + 1
    }

    kekka = document.getElementById('kekka');
    kekka.innerHTML = z;

    if (z > 0) {
        kekka.style.color = 'green';
    }else{
        kekka.style.color = 'red';
    }
}

function yjou() {
    text1 = document.getElementById('atai1')
    text2 = document.getElementById('atai2')

    x = parseInt(text1.value);
    y = parseInt(text2.value);
    
    if (text1.value == "") {
        alert("1つ目の値が入力されていません。");
    return;}
    if (text2.value == "") {
        alert("2つ目の値が入力されていません。");
    return;}

    var z = 1

    for (var i = 0; i < y; i++){
        z = z * x
    }
    kekka = document.getElementById('kekka');
    kekka.innerHTML = z;

    if (z > 0) {
        kekka.style.color = 'green';
    }else{
        kekka.style.color = 'red';
    }
}
function yjou() {
    text1 = document.getElementById('atai1')
    text2 = document.getElementById('atai2')

    x = parseInt(text1.value);
    y = parseInt(text2.value);
    
    if (text1.value == "") {
        alert("1つ目の値が入力されていません。");
    return;}
    if (text2.value == "") {
        alert("2つ目の値が入力されていません。");
    return;}

    var z = 1

    for (var i = 0; i < y; i++){
        z = z * x
    }
    kekka = document.getElementById('kekka');
    kekka.innerHTML = z;

    if (z > 0) {
        kekka.style.color = 'green';
    }else{
        kekka.style.color = 'red';
    }
}

function tukaikata() {
    var a = "値を入力して、ボタンを押します。\nただ、2段目は1つ目の値のみ入力して下さい。";
    alert(a);
}
