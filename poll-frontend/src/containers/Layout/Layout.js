import React ,{ Component , Fragment }  from "react";
import Header from "../../components/Header/Header";
import PollList from "../PollList/PollList";
import CreatePoll from "../CreatePoll/CreatePoll";
import Footer from "../../UI/Footer/Footer"


class Layout extends Component {
  render() {
  	return (
  		<Fragment>
  		 <Header />
		 <CreatePoll />
  		 <PollList />
		 <Footer />
        </Fragment>

  		)
  }
}
export default Layout;