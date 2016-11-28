'use strict';

class App{
	constructor(){

	}
	render(html, component){
		/* Override */
		component.innerHTML += html;
	}
}
class Component extends App{
	constructor(){
		super();
	}
	wholePage(){
		this.render(
			`
			<nav class="white" role="navigation">
      <div class="nav-wrapper container">
        <ul class="right hide-on-med-and-down">
          <li id="navlist1"><a href="#">HOME</a></li>
          <li id="navlist2"><a href="#">SHEETS</a></li>
          <li id="navlist3"><a href="#">CONTACT</a></li>
          <li id="navlist4"><a href="#"><i class="small material-icons">person_pin</i></a></li>
          <li id="navlist5"><a href="#"><i class="small material-icons">shopping_cart</i></a></li>
        </ul>

        <ul id="nav-mobile" class="side-nav">
          <li id="navlist1"><a href="#">HOME</a></li>
          <li id="navlist2"><a href="#">SHEETS</a></li>
          <li id="navlist3"><a href="#">CONTACT</a></li>
        </ul>
        <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
        <a href="#" id="person" class="button-collapse"><i class="small material-icons">person_pin</i></a>
        <a href="#" id="cart" class="button-collapse"><i class="small material-icons">shopping_cart</i></a>

      </div>
    </nav>

    <div id="index-banner">
      <div class="section no-pad-bot">
        <div class="container">
          <br><br>
          <div class="row center" id="apollo">
            <img src="img/apollossymphony_black.png" alt="Apollo's Symphony">
          </div>
          <div class="row center" id="lookbox">
            <center><a href="#"><p id="look">Take A Look</p></a></center>
          </div>
          <br><br>

        </div>
      </div>
    
    </div>


    <div class="parallax-container valign-wrapper">
      <div class="section no-pad-bot">
        <div class="container">
          <div class="row center">
            <h5 class="header col s12 light" id="divText">Indulge the melody within these papers</h5>
          </div>
        </div>
      </div>
      <div class="parallax"><img src="img/index_background.jpg" alt="Unsplashed background img 2"></div>
    </div>

    <div class="container">
      <div class="section">

        <div class="row">
          <div class="col s12 center">
            <h3><i class="mdi-content-send brown-text"></i></h3>
            <h4 id="header">About Us</h4>
            <p class="left-align light" id="about-text">Experience the variety of virtuosos in Apollo&apos;s Symphony, a music sheet website, where a copy of the masterpieces of all the different famous composers in centuries. This experience is a proposal to imagine the beauty of life, an acceptance of where and what we are living in our own shoes just to synchronize the harmony around ourselves to contribute peace and love to the humankind. Music is freedom.</p>
          </div>
        </div>

      </div>
    </div>


    <div class="parallax-container valign-wrapper">
      <div class="section no-pad-bot">
        <div class="container">
          <div class="row center">
            <h5 class="header col s12 light" id="divText">A collection of famous composers&apos; majestic masterpieces</h5>
          </div>
        </div>
      </div>
      <div class="parallax"><img src="img/famouscomposers.jpg" alt="Unsplashed background img 3"></div>
    </div>

    <div class="container">
      <div class="section">
        <div class="row">
          <div class="col s12 center">
            <h2 id="header">Famous Composers</h2>
            <div class="card horizontal">
              <div class="card-image">
                <img src="img/beethoven.jpg">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p><b>Ludwig van Beethoven</b> is considered one of the greatest classical composers who has ever lived. It is not known exactly when Beethoven was born, but he is baptized on December 17, 1770 in Bonn, Germany. With an alcoholic father, Ludwig has a difficult life as a young boy.</p>
                </div>
                <div class="sheetfont">
                  <a href="#">Sheets</a>
                </div>
              </div>
            </div>
            <div class="card horizontal">
              <div class="card-image">
                <img src="img/mozart.jpg">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p><b>Wolfgang Amadeus Mozart</b> was born on January 27, 1756, and died of illness on December 5, 1791. He was only thirty-five years old at the time of his death. Mozart, from an early age, amazed his father with his musical talent.</p>
                </div>
                <div class="sheetfont">
                  <a href="#">Sheets</a>
                </div>
              </div>
            </div>

            <div class="card horizontal">
              <div class="card-image">
                <img src="img/bach.jpg">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p><b>Johann Sebastian Bach</b> was born in Eisenach, Thuringia, Germany, on March 31, 1685 (N.S.) / March 21, 1685 (O.S.), he came from a family of musicians, stretching back several generations. His father, Johann Ambrosius, worked as the town musician in Eisenach, and it is believed that he taught young Johann to play the violin.</p>
                </div>
                <div class="sheetfont">
                  <a href="#">Sheets</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="page-footer white">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <center><a href="#" id="footerimage"><img src="img/apollossymphony_black.png" width="60%" height="60%"></a></center>
            <p id="footertext2">I am a college student working on this project like its my full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


          </div>
          <div class="col l3 s12">
            <h5 id="header">Sitemap</h5>
            <ul id="footertext2">
              <li><a href="#!">Home</a></li>
              <li><a href="#!">Sheet</a></li>
              <li><a href="#!">Contact</a></li>
            </ul>
          </div>
          <div class="col l3 s12">
            <h5 id="header">Instruments</h5>
            <ul id="footertext2">
              <li><a href="#!">Violin</a></li>
              <li><a href="#!">Piano</a></li>
              <li><a href="#!">Flute</a></li>
              <li><a href="#!">Cello</a></li>
            </ul>
          </div>
        </div>
      </div>
     <br>
     <br>
     <br>
    </footer>
			`,document.getElementById('app'));
	}
}

let component = new Component();
component.wholePage();