import React from 'react';
import Card from './src/components/Card';
function App(){

let data = [
    {
     plan:"Free",
     price:0,
     user:"Single User",
     isUser: true,
     storage:"5 GB",
     isStorage:true,
     publicProjects:"Unlimited Public Projects",
     ispublicProjects:true,
    communityAdress:"Community Acsess",
    iscommunityAdress:true,
    privateProjects:"Unlimited Private Projects",
    isprivateProjects:false,
    phoneSupport:"Dedicated Phone Support",
    isphoneSupport:false,
    subDomain:"Free Subdomain",
    issubDomain:false,
    reports:"Monthly Status Reports",
    isreports:false,
   

    },
    {
        plan:"Plus",
     price:9,
     user:"5 User",
     isUser: true,
     storage:"50 GB",
     isStorage:true,
     publicProjects:"Unlimited Public Projects",
     ispublicProjects:true,
    communityAdress:"Community Acsess",
    iscommunityAdress:true,
    privateProjects:"Unlimited Private Projects",
    isprivateProjects:true,
    phoneSupport:"Dedicated Phone Support",
    isphoneSupport:true,
    subDomain:"Free Subdomain",
    issubDomain:true,
    reports:"Monthly Status Reports",
    isreports:false,
   
    },
    {
   plan: "Pro",
     price:49,
     user:"Unlimited User",
     isUser: true,
     storage:"150 GB",
     isStorage:true,
     publicProjects:"Unlimited Public Projects",
     ispublicProjects:true,
    communityAdress:"Community Acsess",
    iscommunityAdress:true,
    privateProjects:"Unlimited Private Projects",
    isprivateProjects:true,
    phoneSupport:"Dedicated Phone Support",
    isphoneSupport:true,
    subDomain:" Free Subdomain",
    issubDomain:true,
    reports:"Monthly Status Reports",
    isreports:true,
    
    },
]
    return <>
            <section className="pricing py-5">
  <div className="container">
    <div className="row">
   
     {
        data.map((e,i)=>{
            return <Card data={e} key={i}/>
        })
     }
   
    </div>
  </div>
</section>

        </>
            
    
    
}

export default App;
