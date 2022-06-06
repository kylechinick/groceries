$(document).ready(function () {
  $('form#list').submit(function (event) {
    event.preventDefault();
    const produce = $('select#produce').val();
    const snacks = $('select#snacks').val();

    let groceryItems = [produce, snacks];
    console.log(groceryItems);

    groceryItems.sort();
    console.log(groceryItems);

    const groceryItemsUpper = groceryItems.map(element => {
      return element.toUpperCase();
    });
    console.log(groceryItemsUpper)

    $("#ans1").text(groceryItemsUpper[0])
    $("#ans2").text(groceryItemsUpper[1])
  });
});
