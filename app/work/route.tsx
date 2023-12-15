import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request: Request) {
    const works = await prisma.work.findMany({
        orderBy: [
            {
                order: 'desc'
            }
        ]
    })
    return NextResponse.json(works)
}