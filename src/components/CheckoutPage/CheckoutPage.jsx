import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import CheckoutTable from "./CheckoutTable/CheckoutTable";

function checkout() {

    return (
        <>
            <h2>Step 3: Checkout</h2>
            <p>Name</p>
            <p>Address</p>
            <CheckoutTable />
        </>
    )
}

export default checkout;