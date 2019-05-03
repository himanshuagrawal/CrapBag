foo();
var data;
function foo() {
    var x = localStorage.getItem('data');
    if (x == null||x=='null') {
        var obj = {};
        obj.qty1 = 12;
        obj.qty2 = 2;
        obj.qty3 = 5;
        obj.qty4 = 1;
        obj.qty5 = 3;
        obj.cartqty1 = 0;
        obj.cartqty2 = 0;
        obj.cartqty3 = 0;
        obj.cartqty4 = 0;
        obj.cartqty5 = 0;
        localStorage.setItem('data', JSON.stringify(obj));
    }
    data = JSON.parse(localStorage.getItem('data'));
    for (var i = 1; i <= 5; i++) {
        var qty = 'qty' + i;
        var cartqty = 'cartqty' + i;
        var item = 'item' + i;
        var button = 'addbutton' + i;
        document.getElementById(qty).innerHTML = data[qty];
        document.getElementById(cartqty).innerHTML = data[cartqty];
        if (parseInt(data[cartqty]) > 0) {
            document.getElementById(item).style.display = 'block';
        }
        else {
            document.getElementById(item).style.display = 'none';
        }
        if (parseInt(data[qty]) == 0) {
            document.getElementById(button).disabled = true;
        }
        else {
            document.getElementById(button).disabled = false;
        }
    }
    if (parseInt(data['cartqty1']) == 0 && parseInt(data['cartqty2']) == 0 && parseInt(data['cartqty3']) == 0 && parseInt(data['cartqty4']) == 0 && parseInt(data['cartqty5']) == 0) {
        document.getElementById('removebtn').style.display = 'none';
    }
    else {
        document.getElementById('removebtn').style.display = 'block';
    }

};



var add = function (i) {
    var qty = 'qty' + i;
    var cartqty = 'cartqty' + i;
    data[qty] = data[qty] - 1;
    data[cartqty] = data[cartqty] + 1;
    localStorage.setItem('data', JSON.stringify(data));
    foo();
}

var remove = function (i) {
    var qty = 'qty' + i;
    var cartqty = 'cartqty' + i;
    data[qty] = data[qty] + 1;
    data[cartqty] = data[cartqty] - 1;
    localStorage.setItem('data', JSON.stringify(data));
    foo();
}

var removeall = function(i){
    localStorage.setItem('data',null);
    foo();
}