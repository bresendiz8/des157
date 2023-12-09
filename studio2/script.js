(function () {
    'use strict'
    console.log('reading js');

    const img = document.querySelector('#pic');
    const pInfo = document.querySelector('#bio');
    const pName = document.querySelector('#name');
    const pAge = document.querySelector('#age');
    const pBreed = document.querySelector('#breed');
    const pFun = document.querySelector('#fun');
    const aTest = document.querySelector('#test');

  
    document.querySelector('#rocket2').addEventListener('click', function(e){
      document.querySelector('#overlay').className= "showing";
      e.preventDefault();
      img.src="images/rocket3.png"
      pName.innerHTML="Name: Rocket";
      pAge.innerHTML="Age: 1";
      pBreed.innerHTML="Breed: ChowChow";
      pFun.innerHTML="Fun Fact: Rocket loves to take crocs away…. Or anything really!";
      aTest.innerHTML="Appreciation Post: Rocket is the biggest goofball. He will always keep one busy because he is so energetic. He may cause trouble but will always put a smile on one's face! -rocket's human";
      window.scrollTo(0, 0);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
       });
    });

    document.querySelector('#panther').addEventListener('click', function(e){
      document.querySelector('#overlay').className= "showing";
      e.preventDefault();
      pName.innerHTML="Name: Panther";
      pAge.innerHTML="Age: 1";
      pBreed.innerHTML="Breed: Domestic short hair";
      pFun.innerHTML="Fun Fact: Panther is really good at zoomies he becomes a parkour master";
      aTest.innerHTML="Appreciation Post: Even though panther can be quite independent he can always tell when I am feeling down. Whenever I’m overly stressed due to school or just feel like crying it’s like he can sense it and he becomes cuddly or kneads dough on me. When things get hard Panther is a big reason why I keep going because I want to always provide him with best that I can. -panther's human";
      window.scrollTo(0, 0);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
       });
    });
    
    document.querySelector('#scar').addEventListener('click', function(e){
      document.querySelector('#overlay').className= "showing";
      e.preventDefault();
      pName.innerHTML="Name: Scar";
      pAge.innerHTML="Age: 3";
      pBreed.innerHTML="Breed: Tabby";
      pFun.innerHTML="Fun Fact: Scar and Haku are siblings!";
      aTest.innerHTML="Appreciation Post: Scar is a sweet cat. He always tends to stick and scout around making me feel safe. Scar loves to take daily naps and has the cutest fluffiest tail. -scar's human";
      window.scrollTo(0, 0);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
       });
    });


    document.querySelector('#claude').addEventListener('click', function(e){
      document.querySelector('#overlay').className= "showing";
      e.preventDefault();
      pName.innerHTML="Name: Claude";
      pAge.innerHTML="Age: unknown";
      pBreed.innerHTML="Breed: Orange Tabby";
      pFun.innerHTML="Fun Fact: Claude will not eat any other treats besides churus!";
      aTest.innerHTML="Appreciation Post: Claude is the friendly apartment cat. He loves to come to the apartment and call out until someone gives him attention. Everyone around loves his company and leave food out for Claude to munch on. He recently was adopted by a neighbor! -fav human";
      window.scrollTo(0, 0);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
       });
    });

    document.querySelector('#dog1').addEventListener('click', function(e){
      document.querySelector('#overlay').className= "showing";
      e.preventDefault();
      pName.innerHTML="Name: Rengoku";
      pAge.innerHTML="Age: 2";
      pBreed.innerHTML="Breed: Husky";
      pFun.innerHTML="Fun Fact: He eats everything";
      aTest.innerHTML="Appreciation Post: Rengoku is always acting crazy but, when I was very sad he acted very calm. He put his head on my knee and laid down by me until I went back inside -rengoku's human";
      window.scrollTo(0, 0);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
       });
    });

    document.querySelector('#kobe').addEventListener('click', function(e){
      document.querySelector('#overlay').className= "showing";
      e.preventDefault();
      pName.innerHTML="Name: Kobe";
      pAge.innerHTML="Age: 14";
      pBreed.innerHTML="Breed: Chihuahua";
      pFun.innerHTML="Fun Fact: Kobe’s favorite food was chicken";
      aTest.innerHTML="Appreciation Post: Kobe was a tiny dog, weighing at only 4 pounds. Yet, he brought the biggest joy to my family and I. He was always there to cuddle and lend a listening ear whenever I needed it :) -kobe's human";
      window.scrollTo(0, 0);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
       });

    });

    document.querySelector('#dog2').addEventListener('click', function(e){
      document.querySelector('#overlay').className= "showing";
      e.preventDefault();
      pName.innerHTML="Name: Rosie";
      pAge.innerHTML="Age: 10";
      pBreed.innerHTML="Breed: Terrier Mix";
      pFun.innerHTML="Fun Fact: When she was younger she was able to climb up the wooden fence";
      aTest.innerHTML="Appreciation Post: My dog has always been there for me even when I just went outside to hang with her she stayed with me. Through the saddest of days she was by my side and made me feel better by allowing me to vent -rosie's human";
      window.scrollTo(0, 0);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
       });

    });

    document.querySelector('#chewbacca').addEventListener('click', function(e){
      document.querySelector('#overlay').className= "showing";
      e.preventDefault();
      pName.innerHTML="Name: Chewbacca";
      pAge.innerHTML="Age: 7";
      pBreed.innerHTML="Breed: German Shepard";
      pFun.innerHTML="Fun Fact: Chewbacca has a mole in the middle of his tongue";
      aTest.innerHTML="Appreciation Post: Chewbacca has helped with my mental health by not allowing me to end the day on a bad note. Chewy has constant energy and quirkiness radiating that draws you in. Spending time with his cuddly self eases any stress that I am feeling from outside pressures -chewy's human";
      window.scrollTo(0, 0);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
       });

    });

    document.querySelector('#haku').addEventListener('click', function(e){
      document.querySelector('#overlay').className= "showing";
      e.preventDefault();
      pName.innerHTML="Name: Haku";
      pAge.innerHTML="Age: 3";
      pBreed.innerHTML="Breed: Grey Tabby";
      pFun.innerHTML="Fun Fact: Haku will fall asleep right away if you give him belly rubs! ";
      aTest.innerHTML="Appreciation Post: Haku became part of my family at the beginning of the covid quarantine, and he remained by my side every day. I cherished every moment spent with him, as he never failed to bring a smile to my face, especially during challenging times. Whenever I return home for a visit, he continues to be my steadfast companion, a truly loyal and affectionate cuddle bug. -haku's human";
      window.scrollTo(0, 0);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
       });

    });

      document.querySelector('.close').addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector('#overlay').className = "hidden";  
      
        });
    
        document.addEventListener('keydown',function(e){
          if(e.key === 'Escape'){
          document.querySelector('#overlay').className = "hidden";
            
        }        
        
     });
    //page loader//
      const preloader = document.getElementById('preloader');
        preloader.className = 'fadeout';
    
      
        preloader.addEventListener('animationend', function () {
    
      
        preloader.style.display = 'none';
      
    });
    
})();