var mansoo = "저는 초보 입니다"

alert(getBalnk(mansoo));


function getBalnk(s){
    res = 0;
    var index = 0;
    while(index != -1){
        index = s.indexOf(" ", index) + 1;
        ++res;
        alert(index);
    }
    return res;
}