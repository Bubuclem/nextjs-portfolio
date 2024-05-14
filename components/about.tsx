"use client"

import { About as AboutType } from "@prisma/client";

const About = ({ aboutData }: { aboutData: AboutType }) => {
    return (
        <div className="mx-auto max-w-2xl text-center">
            <h2 className='select-none text-3xl font-bold tracking-tight bg-clip-text text-transparent sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-pink-500 hover:to-yellow-500'> {aboutData?.name} </h2>
            <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-slate-400'>{aboutData?.description}</p>
        </div>
    );
};

export default About;