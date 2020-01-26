$(document).ready(function() {
    $(`#add`).on(`click`, () => {
        let cartname = $(`#cartname`).val();
        let quantity = $(`#quantity`).val();
        let itemname = $(`#itemname`).val();
        let priceperitem = $(`#priceperitem`).val();
        console.log(cartname, quantity, itemname, priceperitem);

        $.post('/cart/add',{
            cartname: cartname,
            quantity: quantity,
            itemname: itemname,
            priceperitem: priceperitem
        }, () => {
            console.log("Proceed");
        });
    });

    $(`#update`).on(`click`, () => {
        let cartname = $(`#cartname`).val();
        let quantity = $(`#quantity`).val();
        let itemname = $(`#itemname`).val();
        let priceperitem = $(`#priceperitem`).val();

        $.post('/cart/update',{
            cartname: cartname,
            quantity: quantity,
            itemname: itemname,
            priceperitem: priceperitem
        }, () => {
            console.log("Proceed");
        });
    });

    $(`#retrieve`).on(`click`, () => {
        let cartname = $(`#cartname`).val();

        $.post('/cart/retrieve',{
            cartname: cartname
        }, () => {
            console.log("Proceed");
        });
    });

    $(`#delete`).on(`click`, () => {
        let cartname = $(`#cartname`).val();
        let itemname = $(`#itemname`).val();

        $.post('/cart/remove',{
            cartname: cartname,
            itemname: itemname
        }, () => {
            console.log("Proceed");
        });
    });
});