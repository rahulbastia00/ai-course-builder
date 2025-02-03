import React from 'react'
import { Input } from '@/components/ui/input'; // Import only Input from this file

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


function SelectOption() {
    return (
        <div className='px-10 md:px-20 lg:px-44'>
            <div className='grid grid-col-2'>
                <div>
                    <label className='text-sm'>Deficulty label</label>
                    <Select>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Beginner">Beginner</SelectItem>
                            <SelectItem value="Intermediate">Intermediate</SelectItem>
                            <SelectItem value="Advance">Advance</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className='text-sm'>Course Duration</label>
                    <Select>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1 Hr">1 Hr</SelectItem>
                            <SelectItem value="2 Hr">2 Hr</SelectItem>
                            <SelectItem value="More than 3 Hr">More than 3 Hr</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className='text-sm'>No of Chapter</label>
                    <Input type="number"/>
                </div>
            </div>
        </div>
    )
}

export default SelectOption
