import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

function checkoutTable() {

    return (
        <>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                </tr>
                <tr>
                    <td>Amy</td>
                    <td>$5</td>
                </tr>
            </table>
            <div> Total: </div>
        </>
    )
}

export default checkoutTable