import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request: Request) {
    const about = await prisma.about.findFirst()
    return NextResponse.json(about)
}