
import ListPunishment from "../Punishment/ListPunishment"
import ListContract from "../Contract/ListContract"
import ListAccident from "../Accident/ListAccident"
import ListPayment from "../Payment/ListPayment"
import ListCompensation from "../Compensation/ListCompensation"

export const featuresUser = 
[
    {
        name:"contracts",
        icon : null,
        description : "",
        color: "null",
        data : <ListPunishment/>
    },    
    {
        name:"payment history",
        icon : null,
        description : "",
        color: "null",
        data : <ListPunishment/>
    },
    {
        name:"punishment",
        icon : null,
        description : "",
        color: "null",
        data : <ListPunishment/>
    },
]

export const featuresAdmin = 
[
    {
        id:1,
        name:"list user",
        icon : null,
        description : "",
        active:true,
        data : <ListPunishment/>
    },
    {
        id:2,
        name:"list contract",
        icon : null,
        description : "",
        active: false,
        data : <ListContract/>
    },
    {
        id:3,
        name:"list payment",
        icon : null,
        description : "",
        active: false,
        data : <ListPayment/>
    },
    {
        id:4,
        name:"list punishment",
        icon : null,
        description : "",
        active: false,
        data : <ListPunishment/>
    },
    {
        id:5,
        name:"list conpensate",
        icon : null,
        description : "",
        active: false,
        data : <ListCompensation/>
    },
    {
        id:6,
        name:"list accidents",
        icon : null,
        description : "",
        active: false,
        data : <ListAccident/>
    },
]