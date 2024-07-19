"use client"

import { Education as EducationType } from "@prisma/client";

const formatDate = (date: any) => {
    const d = new Date(date);
    return `${d.getFullYear()}`;
}

const Education = ({ educationData }: { educationData: EducationType[] }) => {
    return (
        educationData ? (
            <div className="mx-auto max-w-2xl text-center">
                <h2 className='select-none text-3xl font-bold tracking-tight bg-clip-text text-transparent sm:text-4xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-pink-500 hover:to-yellow-500'> Education. </h2>
                <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600 dark:text-gray-500 text-justify">
                    {educationData?.map((education: any) => (
                        <li className="flex gap-x-3" key={education.id}>
                            <svg className="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400"
                                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong
                                    className="font-semibold text-gray-900 dark:text-slate-400">{education?.name}</strong>,
                                <span className='mx-1'>{education?.degree}</span>
                                ({formatDate(education?.period_start)} - {education?.period_end ? formatDate(education?.period_end) : "Present"})
                            </span>
                        </li>
                    ))}
                </ul>
            </div >
        ) : (
            <></>
        )
    );
};

export default Education;