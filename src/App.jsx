import Market from "./Market.jsx"
import Header from "./Header.jsx"
import Card from "./Card.jsx"
import NavigationBar from "./NavigationBar.jsx"
import Additional from "./Additional.jsx"
import Partner from "./Partners.jsx"
import Footer from "./Footer.jsx"

function App() {


  return (
    <>
      {/* <Header/><Food/><Footer/><hr />
      <Card/><Card/><Card/><Card/><hr />
      <Button/><Button/><hr /><br />
      <Student name="Sachin" age={23} isStudent={true}/>
      <Student name="pasindu" age={24} isStudent={false}/>
      <Student name="pasindu" age={24} isStudent={false}/>
      <Student name="pasindu" age={24} isStudent={false}/>
      <Student name="pasindu" age={24} isStudent={false}/>
      <hr />
      <UserGreeting isLoggedIn={false} name="brocode"/>
      <UserGreeting isLoggedIn={false}/><hr /> */}
      <NavigationBar/>
     <br />
      <Header/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <br />
      <hr />
      <Market/><hr />
      <Additional/>
      <br /><hr />
      <Partner/>
      <br />
      <Footer/>
      <br />
      <hr />




    </>
  );
}

export default App
