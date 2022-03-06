// Дэлгэцтэй ажиллах контроллер
var uiController = (function(){})();

// Санхүүтэй ажиллах контроллер
var financeController = (function(){})();

// Програмын холбогч контроллер
var appController = (function(uiController, financeController){
    var ctrlAddItem = function(){
      // 1. Оруулсан өгөгдлийг дэлгэцээс олж авна.
      console.log("Дэлгэцээс өгөгдлөө авах хэсэг");
      // 2. Олж авсан өгөгдлүүдээ 
    };
document.querySelector(".add__btn").addEventListener("click", function(){
    ctrlAddItem();
    });

document.addEventListener("keypress", function(even){
  if(event.keyCode === 13 || event.which === 13){
    ctrlAddItem();
  }
});
})(uiController, financeController);