import "./App.css";
import Cards from "./components/Cards";

function App() {
  const details = [
    {
      userType: "FREE",
      price: 0,
      noOfUsers: "Single User",
      storageSize: 5,
      subDomains: ""
    },
    {
      userType: "PLUS",
      price: 9,
      noOfUsers: "5 Users",
      storageSize: 50,
      subDomains: ""
    },
    {
      userType: "PRO",
      price: 49,
      noOfUsers: "Unlimited Users",
      storageSize: 150,
      subDomains: "Unlimited"
    }
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            details.map(value =>{
              return (<Cards details={value} />)
            })
          }
        </div>
      </div>
    </section>
  );
}

export default App;
