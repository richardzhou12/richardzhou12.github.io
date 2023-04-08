class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<nav class="navbar navbar-expand-sm bg-dark navbar-dark"><a class="navbar-brand" href="#">AvenirCreatif</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseNavbar"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="collapseNavbar"><ul class="nav navbar-nav"><li class="nav-item"><a class="nav-link" href="./pages/about_page.html">About</a></li><!--       <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Service</a><div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="#">List of service</a><a class="dropdown-item" href="#">How it works</a></div></li> --><li class="nav-item"><a class="nav-link" href="./pages/service_page.html">Service</a></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Product</a><div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="#">Furnitures</a><a class="dropdown-item" href="#">Pins</a><a class="dropdown-item" href="#">Paper Bags</a><a class="dropdown-item" href="#">...</a></div></li><li class="nav-item"><a class="nav-link" href="./pages/contact_page.html">Contact</a></li>    </ul></div><div class="collapse navbar-collapse justify-content-end" id="collapseNavbar"><ul class="nav navbar-nav nav-item dropdown"><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">LANGUAGE</a><div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="./index.html">EN</a><!-- <a class="dropdown-item" href="./index_chinese.html">中文</a> --><a class="dropdown-item" href="./index_espanol.html">ES</a><a class="dropdown-item" href="./index_francais.html">FR</a></div></li></ul></div>  </nav><div class="jumbotron text-center" style="background-image:url(/resources/background_jumbo.jpg); background-size: cover;"><h1>Avenir Creatif Limited</h1><p>Where the magic happens</p> </div>'
  }
}

customElements.define('main-header', Header);