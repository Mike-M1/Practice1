"use server"

import Stripe from "stripe"
import { NextResponse } from "next/server";

const stripe = new Stripe("sk_test_51PfpsbRsS4uUQisw5rfh4gCgRZ9JjGtjMqjlLSBtpHwjnmvWwrwXFKS94a3iCdqEP9QhP9PBBDxlpHJgnTIdTiGf00nuF4Ziuy")

export async function POST(req, res) {
    if (req.method === 'POST') {
        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: 'T-shirt',
                            },
                            unit_amount: 2000,
                        },
                        quantity: 1,
                    },
                ],
                mode: "payment",
                success_url: `https://localhost:3000/Routes/Home`,
                cancel_url: `https://localhost:3000/Routes/Purchase`,
            });
            
            
            return NextResponse.json({id: session.id})
        } catch (err) {
            
            
            return NextResponse.json({error: err.message}, {status: 500})
        }
    } else {
        res.setHeader("Allow", 'POST');
        res.status(405).end("Method Not Allowed");
    }
}
