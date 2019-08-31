import React ,{ Component , Fragment }  from "react";
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

class CreatePoll extends Component {
  render() {
  	return (
  		<div>
			<div className="container" style={{paddingBottom: '4%'}}>
				<div className="row" style={{paddingTop:"20px", height:"20px"}}>
					<div className="col-md-12 text-center">
						<Link to={'/create-question'}  style = {{color: 'inherit'}}>
							<Button
								type="submit"
								variant="outline-primary"
								size="lg"
								style={{color: "#195998" , fontWeight: "600", fontSize: "20px", alignItems:"center", justifyContent:"center"}}>
								Log In to ask questions
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>

  		)
  }
}
export default CreatePoll;