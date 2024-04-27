import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    return NextResponse.json({method:'GET' ,counter: 1000 }, { status: 200 })
}
export async function POST(request: Request) {
    return NextResponse.json({method:'POST' , counter: 1000 }, { status: 200 })
}