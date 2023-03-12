 
function fetchRandomDogImages()
{
    
    // <--------------Using ajax------------------>

    // var xhrRequest = new XMLHttpRequest();
    // xhrRequest.onload = function()
    // {
    //     var responseJSON =JSON.parse(xhrRequest.response);
    //     var imageUrl = responseJSON.message;
    //     $('#dog-image').attr('src', imageUrl);
    // }

    // xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random' , true);
    // xhrRequest.send();


    // <-------------------Using Jquery-------------->

    // $.ajax(
    //     {
    //         url:'https://dog.ceo/api/breeds/image/random',
    //         method:'GET',
    //         success:function(data){
    //             var imageUrl = data.message;
    //             $('#dog-image').attr('src', imageUrl);
    //         }
    //     });


    //<------------------Using get method---------------->

    $.get('https://dog.ceo/api/breeds/image/random',function(data){
                    var imageUrl = data.message;
                    $('#dog-image').attr('src', imageUrl);
                });
}

$('#fetch-dog-image-btn').click(fetchRandomDogImages);