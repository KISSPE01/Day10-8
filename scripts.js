$('#button-1').click(() => {
    console.log('Yeah, you clicked me');
})

$('#button-2').click(() => {
    $('#button-1').text('Already Submitted.');
})

let formColor = $("input:checked").val();
let firstClick = true;

$('input').click(() => {
    formColor = $("input:checked").val();
})

$('#button-3').click(() => {
    if (firstClick === true) {
    $('#button-3').css('background-color', formColor);
    }
    firstClick = false;
})
