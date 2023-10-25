(function(){
    'use strict';

    console.log('reading js');

    const myForm = document.querySelector('#myform');
    const madLib = document.querySelector('#madlib');
     

    myForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const noun1 = document.querySelector('#noun1').value;
        const emotion1 = document.querySelector('#emotion1').value;
        const noun2 = document.querySelector('#noun2').value;
        const animal = document.querySelector('#animal').value;
        const catchphrase = document.querySelector('#catchphrase').value;
        const emotion2 = document.querySelector('#emotion2').value;
        const adj1 = document.querySelector('#adj1').value;
        const plural = document.querySelector('#plural').value;
        const verb = document.querySelector('#verb').value;
        const location = document.querySelector('#location').value;
        const adverb = document.querySelector('#adverb').value;
        const song = document.querySelector('#song').value;
        const body = document.querySelector('#body').value;
        const adj2 = document.querySelector('#adj2').value;
        const noun3 = document.querySelector('#noun3').value;

        let myText = '';

        if(noun1 == '' ){
            myText = "Please provide a noun"
            document.querySelector('#noun1').focus();
        }
        else if (emotion1 == '') {
            myText = "Please provide an emotion"
            document.querySelector('#emotion1').focus();
        }
        else if (noun2 == ''){
            myText = "Please provide a noun"
            document.querySelector('#noun2').focus();
        }
        else if(animal == ''){
            myText = "Please provide an animal"
            document.querySelector('#animal').focus();
        } 
        else if(catchphrase == ''){
            myText = "Please provide a catch phrase"
            document.querySelector('#catchphrase').focus();
        }
        else if(emotion2 == ''){
            myText = "Please provide an emotion"
            document.querySelector('#emotion2').focus();
        }
        else if(adj1 == ''){
            myText = "Please provide an adjective"
            document.querySelector('#adj1').focus();
        }
        else if(plural == ''){
            myText = "Please provide a plural noun"
            document.querySelector('#plural').focus();
        }
        else if(verb == ''){
            myText = "Please provide a verb"
            document.querySelector('#verb').focus();
        }
        else if(location == ''){
            myText = "Please provide a location"
            document.querySelector('#location').focus();
        }
        else if(adverb == ''){
            myText = "Please provide an adverb"
            document.querySelector('#adverb').focus();
        }
        else if(song == ''){
            myText = "Please provide a song title"
            document.querySelector('#song').focus();
        }
        else if(body == ''){
            myText = "Please provide a body part"
            document.querySelector('#body').focus();
        }
        else if(adj2 == ''){
            myText = "Please provide an adjective"
            document.querySelector('#adj2').focus();
        }
        else if(noun3 == ''){
            myText = "Please provide a noun"
            document.querySelector('#noun3').focus();
        }

        else {
            myText = `you typed the words ${noun1}, ${emotion1}, ${noun2}, ${animal}, ${catchphrase}, ${emotion2}, ${adj1}, ${plural}, ${verb}, ${location}, ${adverb}, ${song}, ${body}, ${adj2}, ${noun3}, `;
            document.querySelector('#noun1').value = '';
            document.querySelector('#emotion1').value = '';
            document.querySelector('#noun2').value = '';
            document.querySelector('#animal').value = '';
            document.querySelector('#catchphrase').value = '';
            document.querySelector('#emotion2').value = '';
            document.querySelector('#adj1').value = '';
            document.querySelector('#plural').value = '';
            document.querySelector('#verb').value = '';
            document.querySelector('#location').value = '';
            document.querySelector('#adverb').value = '';
            document.querySelector('#song').value = '';
            document.querySelector('#body').value = '';
            document.querySelector('#adj2').value = '';
            document.querySelector('#noun3').value = '';

        } 

        madLib.innerHTML = myText;

    });


})();