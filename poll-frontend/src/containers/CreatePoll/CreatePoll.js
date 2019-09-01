import React ,{ Component , Fragment }  from "react";
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

class CreatePoll extends Component {
  render() {
  	return (
  		
			<div className="container" style={{paddingBottom: '3%'}}>
				<div className="row" style={{paddingTop:"20px",}}>
					<div className="col-md-12 text-center">
						<Link to={'/create-question'}  style = {{color: 'inherit'}}>
							<Button
							    class="login-btn"
								type="submit"
								variant="outline-primary"
								size="small"
								>
								Log In to ask questions
							</Button>
						</Link>
					</div>
				</div>
			</div>
		

  		)
  }
}
export default CreatePoll;