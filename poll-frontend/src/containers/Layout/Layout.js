import React ,{ Component , Fragment }  from "react";
import Header from "../../components/Header/Header";
import PollList from "../PollList/PollList";
import Poll from '../../components/Poll/Poll'
import CreatePoll from "../CreatePoll/CreatePoll";
import Footer from "../../UI/Footer/Footer"
import Shuffle from "../../components/shuffle/shuffle"


class Layout extends Component {
  render() {
  	return (
  		<Fragment>
  		 <Header />
		 <CreatePoll />
			<Shuffle />
		   <PollList />
		   <Poll />
		 <Footer />
        </Fragment>

  		)
  }
}
export default Layout;