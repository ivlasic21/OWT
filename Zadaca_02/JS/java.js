window.addEventListener("load", function () {
  var redci = this.document.querySelectorAll("#cjenikk tbody tr");
  var dodatno = this.document.getElementById("dodatno");
  redci.forEach(function (redak) {
    redak.addEventListener("mouseover", function () {
      if (redak.cells.length === 3) {
      //console.log(redak.querySelector("td:nth-child(2)")); 
      //console.log(redak.innerHTML)
     // console.log(redak.querySelector("td:nth-child(3)"));

      var opis = redak.querySelector("td:nth-child(2)").textContent;
      var cijena = redak.querySelector("td:nth-child(3)").textContent;

     var usluge = redak.querySelector("td:nth-child(1)");
     console.log(usluge);
     if (usluge.classList.contains('Restoran')) {
      dodatno.innerHTML = "<p>" + opis + " - " + cijena + "- Ručak po osobi 30€ - Večera po osobi 240€";
  
    } 
    else if(usluge.classList.contains('Rezervacija_kon')){
      dodatno.innerHTML = "<p>" + opis + " - " + cijena + "- Cjelodnevni najam 500€ - Večera po osobi 240€";
    }
    else if(usluge.classList.contains('Usluge_pranja')){
      dodatno.innerHTML = "<p>" + opis + " - " + cijena + "- Cjelodnevni najam 500€ - Večera po osobi 240€";

    }
    else {
            dodatno.innerHTML = "<p>" + opis + " - " + cijena + "</p>";
    } 
    }
    else (
      dodatno.innerHTML= "Usluga pranja i peglanja rublja - 10 €"
    )
    }); 
  });

 

  var vrijeme = document.getElementById("vrijeme_dolaska");

  // Onemogući unos vremena
  vrijeme.disabled = true;

  // Dohvati element za unos datuma

  var datum = document.getElementById("date_arrival");
  

  // Dodaj događaj koji će omogućiti unos vremena kada se odabere ispravan datum
  datum.addEventListener("change", function() {
    console.log("mijenja se");

    vrijeme.value = "00:00";

    var danas = new Date();
    var odabraniDatum = new Date(datum.value);
    var danass = new Date();
    danass.setHours(0,0,0,0);
    //var trenutnoVrijeme = danas.getHours() + ":" + danas.getMinutes();
    //var vrijemee = document.getElementById("vrijeme_dolaska");

    // Omogući unos vremena ako je odabrani datum veći ili jednak današnjem datumu
    if (odabraniDatum >= danass) {
      vrijeme.disabled = false;
    }
    else {
      vrijeme.disabled = true;
    }

    if (odabraniDatum.toDateString() === danas.toDateString()) {

      const sati = danas.getHours();
      const minute = danas.getMinutes();

      vrijeme.value = sati.toString().padStart(2, '0') + ':' + minute.toString().padStart(2, '0');

      //vrijeme.value = danas.toLocaleTimeString('en-US', {hour12:false});
      
      vrijeme.addEventListener('input', function () {
        console.log("pokrenila se i druga funkcija")

        const unesenoVrijeme = vrijeme.value.split(':');
        const trenutniSat = danas.getHours();
        const trenutnaMinuta = danas.getMinutes();
        const uneseniSat = parseInt(unesenoVrijeme[0]);
        const unesenaMinuta = parseInt(unesenoVrijeme[1]);
      
       
        if (uneseniSat < trenutniSat || (uneseniSat === trenutniSat && unesenaMinuta < trenutnaMinuta)) {
        
          vrijeme.value = sati.toString().padStart(2, '0') + ':' + minute.toString().padStart(2, '0');
          console.log(vrijeme.value);
         
        } 
      });
    } 


  });




	var forma = document.getElementById("obrazacc");
	forma.addEventListener("submit", function (event) {
    event.preventDefault();
		var greske = document.getElementById("greske");
		var Ime = document.getElementById("Ime").value;
		var Adresa = document.getElementById("Adresa").value;
		var email = document.getElementById("email").value;
		var kont = document.getElementById("kont").value;
    var broj_osoba = document.getElementById("broj_osoba").value;
    var data_arival = document.getElementById("date_arrival").value;
    var date_departure = document.getElementById("date_departure").value;
		var danas = new Date(); // trenutni datum
    var odabrani_datum = new Date(data_arival); 
    var odabrani_datum2 = new Date(date_departure);
    var danasss = new Date();
    danasss.setHours(0,0,0,0);
    var re = new RegExp(/^[^!#<>?]*$/);

  

		if (email.trim()=== "" ){
			console.log("greeška");
			greske.innerHTML = "Email je pogrešan";
      greske.style.display = "block";
		}
		else if (kont.trim()=== "" ){
			console.log("greeška");
			greske.innerHTML = "Kontakt je pogrešan";
      greske.style.display = "block";
		}


		else if (Adresa.trim()=== "" || !re.test(Adresa)){
			console.log("greeška");
			greske.innerHTML = "Adresa je pogrešna";
      greske.style.display = "block";
		}

	 else if (Ime.trim() === "" || !re.test(Ime)){
      console.log("greeška");
			greske.innerHTML = "Ime je pogrešno";
      greske.style.display = "block";
    } 

    else if (broj_osoba.trim() === ""){
      console.log("greeška");
			greske.innerHTML = "Broj osoba je pogrešan";
      greske.style.display = "block";
    } 

    else if (data_arival === "") {
      console.log("greeška datum je prazan");
			greske.innerHTML = "Datum dolaska je pogrešan";
      greske.style.display = "block";
  } 
    
    else if (odabrani_datum.toDateString() < danas.toDateString()) {
      console.log("greeška kod datuma");
			greske.innerHTML = "Datum dolaska je pogrešan";
      greske.style.display = "block";
  
    }

    else if (odabrani_datum2 < danasss) {
      console.log("greeška kod datumaa");
			greske.innerHTML = "Datum odlaska je pogrešan";
      greske.style.display = "block";
    }


    else {
      // svi podaci su ispravno uneseni
      this.submit(); // pozivamo funkciju za slanje obrasca
    }
	}); 


var formaa = document.getElementById("obrazaccc");
	formaa.addEventListener("submit", function (event) {

    event.preventDefault();
    var Predmet = document.getElementById("Predmet").value;
		var poruka = document.getElementById("poruka").value;
    
    var re = new RegExp(/^[^!#<>?]*$/);
    var re2 = new RegExp(/^[^!?\#<>]{10,1000}$/);




		if (Predmet.trim()=== "" || !re.test(Predmet)){
			console.log("greeška");
			greske.innerHTML = "Predmet je pogrešan";
      greske.style.display = "block";
		}
		else if (poruka.trim()=== ""  || !re2.test(poruka)){
			console.log("greeška");
			greske.innerHTML = "Poruka je pogrešna";
      greske.style.display = "block";
		}

    else {
      // svi podaci su ispravno uneseni
      this.submit(); // pozivamo funkciju za slanje obrasca
    }
	}); 

  var greskee = document.getElementById("greske");
greskee.addEventListener("click", function () {
  greskee.style.display = "none";
});

})
