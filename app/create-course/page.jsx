"use client";

import React, { useContext, useEffect, useState } from 'react';
import { HiMiniSquaresPlus } from "react-icons/hi2";
import { MdOutlineTopic } from "react-icons/md";
import { IoReorderThreeSharp } from "react-icons/io5";
import { Button } from '@/components/ui/button';
import SelectCategory from './_components/SelectCategory';
import TopicDescription from './_components/TopicDescription';
import SelectOption from './_components/SelectOption';
import { UserinputContext } from '../_context/UserinputContext';

function CreateCourse() {
    const StepperOptions = [
        {
            id: 1,
            name: 'Category',
            icon: <HiMiniSquaresPlus />
        },
        {
            id: 2,
            name: 'Topic & desc',
            icon: <MdOutlineTopic />
        },
        {
            id: 3,
            name: 'Options',
            icon: <IoReorderThreeSharp />
        }
    ];

    const { userCourseInput, setCourseInput } = useContext(UserinputContext);

    const [activeIndex, setActiveIndex] = useState(0); // Initialize to 0

    // Fixed useEffect syntax and variable name
    useEffect(() => {
        console.log(userCourseInput);
    }, [userCourseInput]);

    const cheackStatus = () => {
        if (!userCourseInput) return true; // Handle undefined state safely

        if (userCourseInput?.length === 0) {
            return true;
        }

        if (activeIndex === 0 && (!userCourseInput.category || userCourseInput.category.length === 0)) {
            return true; 
        }
        if (activeIndex == 1 && userCourseInput?.topic?.length == 0 || userCourseInput?.topic == undefined) {
            return true;
        }
        else if(activeIndex==2&&(userCourseInput?.level==undefined||userCourseInput?.duration==undefined||userCourseInput?.displayVedio==undefined||userCourseInput?.noOfChapter==undefined)){
            return true
        }
        return false;
    };


    return (
        <div>
            {/* Steppers */}
            <div className='flex flex-col justify-center items-center mt-10'>
                <h2 className='text-4xl text-primary font-medium'>Create Course</h2>
                <div className='flex mt-10'>
                    {StepperOptions.map((item, index) => (
                        <div className='flex items-center' key={item.id}>
                            <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                                <div className={`bg-gray-300 p-3 rounded-full text-white ${activeIndex >= index && 'bg-purple-500'}`}>
                                    {item.icon}
                                </div>
                                <h2 className='hidden md:block md:text-sm'>{item.name}</h2>
                            </div>
                            {index !== StepperOptions.length - 1 && (
                                <div className='h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300'> </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className='px-10 md:px-20 lf:px-44 mt-10'>
                {/* Component Rendering */}
                {activeIndex === 0 ? <SelectCategory /> :
                    activeIndex === 1 ? <TopicDescription /> :
                        <SelectOption />}

                {/* Next & Previous Buttons */}
                <div className='flex justify-between mt-10'>
                    <Button disabled={activeIndex === 0} variant='outline' onClick={() => setActiveIndex(activeIndex - 1)}>
                        Previous
                    </Button>
                    {activeIndex < 2 && (
                        <Button disabled={cheackStatus()} onClick={() => setActiveIndex(activeIndex + 1)}>Next</Button>
                    )}
                    {activeIndex === 2 && (
                        <Button disabled={cheackStatus()} onClick={() => setActiveIndex(activeIndex + 1)}>Generate Course</Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CreateCourse;
