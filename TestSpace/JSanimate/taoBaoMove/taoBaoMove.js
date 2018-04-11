function initMove() {
    var aList;
    aList=document.getElementsByTagName("a");
        for (var i = 0; i < aList.length; i++) {
            aList[i].onmouseenter = function (e) {
                var iThis = this;
                var iList = iThis.getElementsByTagName("i")[0];
                startMove(iList, {top: -90, opacity: 0}, function () {
                    iList.style.top = 20 + "px";
                    startMove(iList, {opacity: 100,top: 0});
                    // startMove(iList, {top: 0,opacity: 100});
                });
                e.stopPropagation();
            };
    }
}
window.onload=initMove;

