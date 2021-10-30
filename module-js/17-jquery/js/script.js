document.getElementById('id');

// javascript vanilla
document.querySelector('#test');

// jquery

$('#test')
$('.test')
$('li')

// console.log()
// console.log($('#test'))

document.createElement('h1');

// let h1 = $('<h1>hola desde jquery</h1>');
// $('body').html('<h1>hola desde jquery</h1> ')
let h1 = $('<h1>hola desde jquery</h1>');
// Agrega un elemento antes del indicado en el selector
// $('ul').before(h1);
// $('ul').after(h1);
// $('ul').prepend(h1);
// $('ul').after(h1);
// $('ul').hide();
// $('ul').remove();


// Agregar Clases de Css
// $('ul').addClass('content');
// $('ul').removeClass('content');
// $('ul').toggleClass('content');
// $('ul').css('color', 'blue');

// for each 
// $('li').each((index, element) => {
//     if($(element).text() === 'indicado') {
//         $(element).addClass('verde')
//     }
// })

// element.addEventListener ( 'click' , () => {

// });


// $('.class').mouseover(function (event) { 
//         console.log(event)
// });


// $("button").click(function(){
//     console.log('entroo')
//     $("#div1").fadeTo("fast", 0);
//     $("#div2").fadeTo("fast", 0);
//     $("#div3").fadeTo("fast", 0);
//   }); 


// $("input").click(() => {
//     console.log('se escucha');
//    const inputSelected =  $(".controls-wrapper input[type='radio']:checked").val();
//    console.log($('#figura'))

// //    $('#figura').attr('class', inputSelected);
//     $('#figura').removeClass();
//     $('#figura').addClass(inputSelected);
// })
const list = [];

$('#add').click(() => {

  const value = $('#data-input').val();
  console.log(value);
  list.push(value);
  createCard(value, 1)
  // renderCards()
  console.log(list);
});

const renderCards = () => {
  $('.card').remove()

  console.log(list)
  list.forEach((content, index) => {
    createCard(content, index)
  });
};

const createCard = (content, index) => {
  const card = $('#content-list').append(`<div class='card'></div>`);
  console.log('creacion de card')
  const label = `<label for="${index}">${content}</label>`;
  const input = `<input type="radio" name="card" id=${index}></input>`;
  $('.card').append(label, input)
  $('#content-list div').addClass('card-element');

  $('input[type="radio"]').click(function (event) {
    // $('input[type="radio"]').removeClass();
    $('label').removeClass('selected')
    $(this).siblings().addClass('selected')

    console.log($('input[type="radio"]'))
  })
};

$('.card').click(function (e) { 
  console.log(e.target.id)
  
});



{/* <label for="option1">opcion 1</label> */}
{/* <input type="radio" name="card" id="option1"></input> */}






