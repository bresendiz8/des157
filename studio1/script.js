(function(){
    'use strict';

    const myForm = document.querySelector('#myform');
    const madLib = document.querySelector('#madlib');
     

    myForm.addEventListener('submit', function(event) {
        event.preventDefault();
        document.querySelector('#overlay').className = "showing";

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

        let myText = "";

        if(noun1 == "" ){
            myText = '<p>Please provide a noun.</p><button class="close">close</button>'
            document.querySelector('#noun1').focus();
        }
        else if (emotion1 == "") {
            myText = '<p>Please provide an emotion.</p><button class="close">close</button>'
            document.querySelector('#emotion1').focus();
        }
        else if (noun2 == ""){
            myText = '<p>Please provide a noun.</p><button class="close">close</button>'
            document.querySelector('#noun2').focus();
        }
        else if(animal == ""){
            myText = '<p>Please provide an animal.</p><button class="close">close</button>'
            document.querySelector('#animal').focus();
        } 
        else if(catchphrase == ""){
            myText = '<p>Please provide a catch phrase.</p><button class="close">close</button>'
            document.querySelector('#catchphrase').focus();
        }
        else if(emotion2 == ""){
            myText = '<p>Please provide an emotion.</p><button class="close">close</button>'
            document.querySelector('#emotion2').focus();
        }
        else if(adj1 == ""){
            myText = '<p>Please provide an adjective.</p><button class="close">close</button>'
            document.querySelector('#adj1').focus();
        }
        else if(plural == ""){
            myText = '<p>Please provide a plural noun.</p><button class="close">close</button>'
            document.querySelector('#plural').focus();
        }
        else if(verb == ""){
            myText = '<p>Please provide a verb.</p><button class="close">close</button>'
            document.querySelector('#verb').focus();
        }
        else if(location == ""){
            myText = '<p>Please provide a location.</p><button class="close">close</button>'
            document.querySelector('#location').focus();
        }
        else if(adverb == ""){
            myText = '<p>Please provide an adverb.</p><button class="close">close</button>'
            document.querySelector('#adverb').focus();
        }
        else if(song == ""){
            myText = '<p>Please provide a song title.</p><button class="close">close</button>'
            document.querySelector('#song').focus();
        }
        else if(body == ""){
            myText = '<p>Please provide a body part.</p><button class="close">close</button>'
            document.querySelector('#body').focus();
        }
        else if(adj2 == ""){
            myText = '<p>Please provide an adjective.</p><button class="close">close</button>'
            document.querySelector('#adj2').focus();
        }
        else if(noun3 == ""){
            myText = '<p>Please provide a noun.</p><button class="close">close</button>'
            document.querySelector('#noun3').focus();
        }

        else {
            myText = `<p>When Haku and Luna met, it was ${noun1} at first sight. Haku was ${emotion1}. She was like ${noun2} and walked like a ${animal}. Haku zoomed over to meow "${catchphrase}" and introduced himself. Luna was so ${emotion2}. She had seen him in the streets before and believed he was super ${adj1}. They meowed and meowed for so long and finally exchanged ${plural}. On the first date, they ${verb} at ${location} and Haku couldn't keep his paws off her. He ${adverb} at her and meowed "${song}". He instantly knew he had to put a ring on her ${body}. Since meeting, they've been inseparable and she started to call him her "${adj2} ${noun3}".<p> 
            <button class="close">close</button>`;
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

        document.querySelector('.close').addEventListener('click',function(event){
            event.preventDefault();
            document.querySelector('#overlay').className = "hidden";        
        });
    
        document.addEventListener('keydown',function(event){
            if(event.key === 'Escape'){
                document.querySelector('#overlay').className = "hidden";
            }        
        });
    });
})();