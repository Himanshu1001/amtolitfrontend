import React ,{ Component , Fragment }  from "react";
import Button from 'react-bootstrap/Button';


class Shuffle extends Component {
    render() {
        return (
            <div>
              <div className="container" >
              <div className="row" style={{paddingTop:"20px", height:"20px",}}>
                  
                  <div className="col-md-12 text-center">
              <Button type="submit" variant="outline-primary" size="lg" style={{color: "#195998" , fontWeight: "600", fontSize: "20px", alignItems:"center", justifyContent:"center"}}>Shuffle</Button>
              </div>
          </div>
          </div>
          </div>
  
            )
    }
  }


  export default Shuffle;