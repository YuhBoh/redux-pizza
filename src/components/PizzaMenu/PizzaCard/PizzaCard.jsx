import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function PizzaCard (props) {

  const dispatch = useDispatch();
  const pizza = props.pizza;
  const [toggle, setToggle] = useState(false);
  const orderedPizzasObj = useSelector(store => store.orderedPizzasObj);
  
  const toggleToggle = () => {
    if (toggle == false) {

      setToggle(true);
      dispatch({
        type: 'ADD_PIZZA',
        payload: pizza
      })
      // console.log(orderedPizzasId)
      dispatch({
        type:'ADD_PRICE',
        payload:pizza.price
    })
    } else {

      setToggle(false);
      dispatch({
        type: 'REMOVE_PIZZA',
        payload: pizza
      })
      // console.log('orderedPizzasId:', orderedPizzasId)
      dispatch({
        type:'REMOVE_PRICE',
        payload:pizza.price
    })
    }
  }

  const renderButton = () => {
    // console.log("In the renderButton function")
    if (toggle == false) {
      return (
        <button onClick={() => {toggleToggle()}}>ADD</button>
      )
    } else {
      return (
        <button onClick={() => {toggleToggle()}}>REMOVE</button>
      )
    }
  }

  return (
    <div key={pizza.id}>
      <img src={pizza.image_path} alt="" />
      <h2>Name of pizza: {pizza.name}</h2>
      <h3>Description: {pizza.description}</h3>
      <h3>Price of Pizza: {pizza.price}</h3>
      {renderButton()}
    </div>
  );
}

export default PizzaCard;