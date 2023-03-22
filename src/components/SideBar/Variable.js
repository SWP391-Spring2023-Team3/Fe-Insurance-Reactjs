
import ListPunishment from "../Punishment/ListPunishment"
import ListContract from "../Contract/ListContract"
import ListAccident from "../Accident/ListAccident"
import ListPayment from "../Payment/ListPayment"
import ListCompensation from "../Compensation/ListCompensation"
import UserProfile from "../Profile/UserProfile"

export const featuresUser = 
[
    {
        id:1,
        name:"contracts history",
        icon : null,
        description : "",
        color: "null",
        active:true,
        data : <ListContract isAdmin={false}/>
    },    
    {
        id:2,
        name:"payment history",
        icon : null,
        description : "",
        color: "null",
        active:false,
        data : <ListPayment isAdmin={false}/>
    },
    {
        id:3,
        name:"punishment history",
        icon : null,
        description : "",
        color: "null",
        active:false,
        data : <ListPunishment isAdmin={false}/>
    },
    {
        id:4,
        name:"compensation history",
        icon : null,
        description : "",
        color: "null",
        active:false,
        data : <ListCompensation isAdmin={false}/>
    },
    {
        id:5,
        name:"accident history",
        icon : null,
        description : "",
        color: "null",
        active:false,
        data : <ListAccident isAdmin={false}/>
    },
    {
        id:6,
        name:"profile",
        icon : null,
        description : "",
        color: "null",
        active:false,
        data : <UserProfile/>
    },
]

export const featuresAdmin = 
[
    {
        id:2,
        name:"list contract",
        icon : null,
        description : "",
        active: false,
        data : <ListContract  isAdmin={true}/>
    },
    {
        id:3,
        name:"list payment",
        icon : null,
        description : "",
        active: false,
        data : <ListPayment isAdmin={true}/>
    },
    {
        id:4,
        name:"list punishment",
        icon : null,
        description : "",
        active: false,
        data : <ListPunishment isAdmin={true}/>
    },
    {
        id:5,
        name:"list conpensate",
        icon : null,
        description : "",
        active: false,
        data : <ListCompensation isAdmin={true}/>
    },
    {
        id:6,
        name:"list accidents",
        icon : null,
        description : "",
        active: false,
        data : <ListAccident isAdmin={true}/>
    },
]