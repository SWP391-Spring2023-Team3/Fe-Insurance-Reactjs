import { combineReducers } from "@reduxjs/toolkit";
import { UserData } from "./userReducer";
import { ListPunishmentData, CreatePunishment, DeletePunishment } from "./punishmentReducer";
import { ListContractData, CreateContract, DeleteContract } from "./contractReducer";
import { ListPaymentData, CreatePayment, DeletePayment } from "./paymentReducer";
import { ListAccidentData, CreateAccident, DeleteAccident } from "./accidentReducer";
import { ListCompensationData,CreateCompensation,DeleteCompensation } from "./compensationReducer";

const rootReducer = combineReducers({
    userData: UserData,
    //punishment
    listPunishmentData: ListPunishmentData,
    createPunishment: CreatePunishment,
    deletePunishment: DeletePunishment,
    //contract
    listContractData: ListContractData,
    createContract: CreateContract,
    deleteContract: DeleteContract,
    //payment
    listPaymentData: ListPaymentData,
    createPayment: CreatePayment,
    deletePayment: DeletePayment,
    //accident
    listAccidentData: ListAccidentData,
    createAccident: CreateAccident,
    deleteAccident: DeleteAccident,
    //compensation
    listCompensationData: ListCompensationData,
    createCompensation: CreateCompensation,
    deleteCompensation: DeleteCompensation,
})

export default rootReducer