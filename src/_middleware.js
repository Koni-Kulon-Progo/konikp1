import { NextResponse } from "next/server";
import {verify} from 'jsonwebtoken'

const secret = process.env.SECRET;

export default function middleware(req) {
    const {cookies} = req;
    const jwt = cookies.Oursite.JWT
    const url = req.url;

    if(url.includes("/LoginPage")) {
        if(jwt) {
            try{
                verify(jwt, secret);
                return NextResponse.redirect("/");
            }catch (e) {
                return NextResponse.next()
            }
        }
    }

    if(url.includes("/")){
        if(jwt === undefined) {
            return NextResponse.redirect("/DataWasit");
        }
        try{
            const user = verify(jwt, secret);
            console.log(user)
            return NextResponse.next();
        } catch (e) {
            return NextResponse.redirect("/DataPelatih")
        }
    }

    return NextResponse.next();
}