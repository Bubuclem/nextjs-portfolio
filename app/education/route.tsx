import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request: Request) {
    const educations = await prisma.education.findMany({
        orderBy: [
            {
                order: 'desc'
            }
        ]
    })
    return NextResponse.json(educations)
}