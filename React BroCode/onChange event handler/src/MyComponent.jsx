import { useState } from "react";

function MyComponent() {

    const [name, setName] = useState("Guest")
    const [quantitiy, setQuantitiy] = useState(1)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("")

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleQuantityChange(event) {
        setQuantitiy(event.target.value)
    }

    function handleCommentChange(event) {
        setComment(event.target.value)
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }

    function handleShippingChange(event) {
        setShipping(event.target.value)
    }


    return (
        <>
            <div>
                <input value={name} onChange={handleNameChange} />
                <p>Name : {name}</p>

                <input value={quantitiy} onChange={handleQuantityChange} type="number" />
                <p>Quantitiy : {quantitiy}</p>

                <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions" />
                <p>Comment : {comment}</p>

                <select value={payment} onChange={handlePaymentChange}>
                    <option>Select a option</option>
                    <option>Visa</option>
                    <option>MasterCard</option>
                    <option>Paypal</option>

                </select>
                <p>Payment : {payment}</p>

                <label>
                    <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
                    Pick Up
                </label>
                <br />
                <label>
                    <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
                    Pick Up
                </label>
                <p>Shipping : {shipping}</p>

            </div>

        </>
    )
}

export default MyComponent;