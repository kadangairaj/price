
import "./App.css";

function App() {
  const free = {
    type : "FREE",
    Price : 0,
    User : "✅Single User",
    Stroage : 50,
    Public : "✅Unlimited  Public Projects",
    Access : "✅Community Access",
    Private : {
      value :" ❌ Unlimited Pravite Projects",
      style : "disabled"
    },
    Phone : {
      value : " ❌ Dedicated Phone Support",
      style : "disabled"
    },
    Domain :{
      value : " ❌ Free Subdomin",
      style : " disabled"
    },
    Reports : {
      value : " ❌Monthly Status Reports",
      style : " disabled"
    },
  };
  const plus = {
    type : "PLUS*",
    Price : 10,
    User : "✅Single User",
    Stroage : 50,
    Public : "✅Unlimited  Public Projects",
    Access : "✅Community Access",
    Private : {
      value :" ✅ Unlimited Pravite Projects",
      style : "abled",
    },
    Phone : {
      value : " ✅Dedicated Phone Support",
      style : "abled",
    },
    Domain :{
      value : "✅ Free Subdomin",
      style : "abled",
    },
    Reports : {
      value : " ❌Monthly Status Reports",
      style : "disabled",
    },
  }
  const pro ={
    type : "PRO",
    Price : 50,
    User : "✅Single User",
    Stroage : 50,
    Public : "✅Unlimited  Public Projects",
    Access : "✅Community Access",
    Private : {
      value :"✅Unlimited Pravite Projects",
      style : "abled",
    },
    Phone : {
      value : "✅Dedicated Phone Support",
      style : "abled",
    },
    Domain :{
      value : " ✅Free Subdomin",
      style : "abled",
    },
    Reports : {
      value : "✅Monthly Status Reports",
      style : "abled",
    },
  }
  return (
    <div className="all">
    <Pcard model={free}/>
    <Pcard model={plus}/>
    <Pcard model={pro}/>
    </div>
   
  );
}

export default App;
// card
function Pcard({model})  {
return(
  <div className="p-card">
    <p>{model.type}</p>
    <h3>${model.Price}/Months</h3>
    <hr />
    <p >{model.User}</p>
    <p><span>✅</span>Storage :{model.Stroage} GB</p>
    <p>{model.Public}</p>
    <p>{model.Access}</p>
    <p className={model.Private.style}>{model.Private.value}</p>
    <p className={model.Phone.style}>{model.Phone.value}</p>
    <p className={model.Domain.style}>{model.Domain.value}</p>
    <p className={model.Reports.style}>{model.Reports.value}</p>
    <button>GET STARTED</button>
  </div>
);
}