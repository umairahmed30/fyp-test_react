import react from "react";
import '../style/search.css';

const SearchBar= ()=>{

  


return(
    <>
     <div class="jumbotron">
         <div class="container" style={{color:'ffffff'}}>
  <h2 class="display-4 pt-5">Hello, world!</h2>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4"/>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg mb-2" href="#" role="button">Learn more</a>
  </p>
                    <section class="search-sec">
                        <div class="container">
                            <form action="#" method="post" novalidate="novalidate">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="row">
                                            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                                <input type="text" class="form-control search-slt" placeholder="Enter Pickup City"/>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                                <input type="text" class="form-control search-slt" placeholder="Enter Drop City"/>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                                <select class="form-control search-slt" id="exampleFormControlSelect1">
                                                    <option>Select Vehicle</option>
                                                    <option>Example one</option>
                                                    <option>Example one</option>
                                                    <option>Example one</option>
                                                    <option>Example one</option>
                                                    <option>Example one</option>
                                                    <option>Example one</option>
                                                </select>
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                                <button type="button" class="btn btn-search wrn-btn">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
  </div>
</div>


    </>
)
}

export {SearchBar}

