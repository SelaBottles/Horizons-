import React from 'react';
import './css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                <img alt="Brand" src="logo2.jpg"/>
                            </a>
                        </div>
                    </div>
                </nav>
                <p className="navbar-text navbar-right">
                    <a href="#" className="navbar-link a"> About Us </a>
                </p>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>

                    
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src="car1.jpg" alt="..."/>
                            <div className="carousel-caption">
                            </div>
                        </div>
                        <div className="item">
                            <img src="car1.jpg" alt="..."/>
                            <div className="carousel-caption">
                            </div>
                        </div>
                        ...
                    </div>

                    
                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <h3 className="text-center"> PLANS </h3>
            </div>
        </div>

        <div className="row">
            <div className="col-sm-6 col-md-3">
                <div className="thumbnail">
                    <img src="virtual.jpeg" alt="virtual"/>
                    <div className="caption">
                        <h3> VIRTUAL OFFICES </h3>
                        <p> Our virtual offices allow your business to get our business address, phone services and olso, you become a member of our community with benefits such as access to our meeting rooms </p>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-3">
                <div className="thumbnail">
                    <img src="customized.jpg" alt="customized"/>
                    <div className="caption">
                        <h3> CUSTOMIZED OFFICES </h3>
                        <p> Our customized offices offer a great location for your business and you can customize your office to suit your preferences. Also, you become a member of our community with benefits such as access to our meeting rooms </p>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-3">
                <div className="thumbnail">
                    <img src="serviced.jpeg" alt="serviced"/>
                    <div className="caption">
                        <h3> SERVICED OFFICES </h3>
                        <p> Our serviced offices offer a great location for your business and we provide services such as internet, utilities and offers from our partners. Also, you become a member of our community with benefits such as access to our meeting
                            rooms </p>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-3">
                <div className="thumbnail">
                    <img src="meeting rooms.jpeg" alt="meeting"/>
                    <div className="caption">
                        <h3> MEETING ROOMS </h3>
                        <p> Our meeting rooms offer a great location for your meeting withyour clients or business partners. We provide presentation equipment and coffee. Also you become a member of our community with benefits such as access to our meeting
                            rooms</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container c">
            <div className="row">
                <div className="col-md-4 d">
                    <h4 className="e"> VISIT US IN KENYA </h4>
                    <h5 className="f"> Nairobi,Kenya </h5>
                    <h5 className="g"> Belgravia Crescent, 14 Riverside Drive, 4th Floor, Off Riverside. Hanover Centre, 14 Riverside Drive, 6th Floor, Off Riverside Drive </h5>
                </div>

                <div className="col-md-4 d">
                    <h4 className="e"> VISIT US IN GHANA </h4>
                    <h5 className="f"> Accra,Ghana </h5>
                    <h5 className="g"> One Airport Square. Airport City, 8th Floor </h5>
                </div>

                <div className="col-md-4 d">
                    <h4 className="e">VISIT US IN NIGEIA</h4>
                    <h5 className="f"> Lagos,Nigeria </h5>
                    <h5 className="g"> Sterling Bank Building </h5>
                </div>

            </div>
        </div>

    </div>

    <script type="text/javascript" src="js/jquery-3.4.1.min.js"> </script>
    <script type="text/javascript" src="js/bootstrap.min.js"> </script>

    </div>
  );
}

export default App;
