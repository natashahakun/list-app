$(document).ready(function() {

  $("button").click(function() {
    var newItemContainer = $("<div></div>", {class: "item-container"});
    $(".registered-inputs").append(newItemContainer);
    var newCheckBox = $("<form></form>", {class: "checkbox"});
    $(newItemContainer).append(newCheckBox);
    var newCheckBoxInput = $("<input>", {type: "checkbox"});
    $(newItemContainer).append(newCheckBoxInput);

    var newItem = $("<div></div>", {class: "item"});
    var item = $(".item-input").val();
    $(newItem).append(item);
    $(newItemContainer).append(newItem);

  })
});
