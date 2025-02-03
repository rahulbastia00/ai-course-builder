"use client"
import React from 'react'
import {useUser} from '@clerk/nextjs'
import { Button } from '@/components/ui/button';
import Link from 'next/link';


function AddCourse() {
    const { user } = useUser();
    return (
        <div className="flex items-center justify-between">
            <div>
                <h2 className='test-2xl'>Hello,
                    <span className="font-bold">{user?.fullName}</span>
                </h2>
                <p className="text-sm text-gray-300">Create new course with ai share with your friends</p>
            </div>
            <Link href={'/create-course'}>
            <Button>Create ai course</Button>
            </Link> 
        </div>
    )
}

export default AddCourse
