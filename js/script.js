$(document).ready(function() {

  $("button").click(function() {
    var newItemContainer = $("<div></div>", {class: "item-container"});
    $(".registered-inputs").append(newItemContainer);
    var newCheckBox = $("<form></form>", {class: "checkbox-container"});
    $(newItemContainer).append(newCheckBox);
    var newCheckBoxInput = $("<input>", {type: "checkbox"}, {class: "checkbox"});
    $(newCheckBox).append(newCheckBoxInput);

    var newItem = $("<div></div>", {class: "item"});
    var item = $(".item-input").val();
    $(newItem).append(item);
    $(newItemContainer).append(newItem);

    var newQuantity = $("<div>", {class: "quantity"});
    var quantity = $(".quantity-input").val();
    $(newQuantity).append(quantity);
    $(newItemContainer).append(newQuantity);

    var newCost = $("<div>", {class: "cost"})
    var cost = $(".cost-input").val();
    $(newCost).append(cost);
    $(newItemContainer).append(newCost);

    $(".item-input").val('');
    $(".quantity-input").val('');
    $(".cost-input").val('');
  });

  $("input:checkbox").change(function(){
    if($(this).is(":checked")) {
      $(this).parent().siblings().addClass("checked");
    }
    else if($(this).not(":checked")) {
      $(this).parent().siblings().removeClass("checked");
    }
  });
});
