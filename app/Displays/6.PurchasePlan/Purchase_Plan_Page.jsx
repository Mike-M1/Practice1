"use client"

import { useState } from "react"
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe("pk_test_51PfpsbRsS4uUQiswViVLsKEsHDw9gyxfTfK12JbEKfxZtPRQVLBPTnDjzA3ZLHQkH5kw6CQ3FsDHKKYJ04OyTQaw00KdyCmHVc")
const Purchase = () => {
    const [loading, setLoading] = useState(false)

    const handleClick = async () => {
        setLoading(true);
        const stripe = await stripePromise;
        const response = await fetch('/api/checkout-session', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({

            }),
        });
        console.log(response)

        const session = await response.json();
        console.log(session)

        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        })

        if(result.error) {
            alert(result.error.message);
        }
        setLoading(false);
    }
    return (
        <h1 onClick={handleClick}>{loading ? "Processing" : "I think this will be a Stripe Page"}</h1>
    )
}

export default Purchase