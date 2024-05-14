"use server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getWork = async () => {
    return await prisma.work.findMany({
        orderBy: {
            period_start: 'desc'
        }
    });
}

export const getEducation = async () => {
    return await prisma.education.findMany({
        orderBy: {
            period_start: 'desc'
        }
    });
}

export const getAbout = async () => {
    return await prisma.about.findFirst();
}