import React, { useContext } from 'react';
import { Input } from '@/components/ui/input'; // Import only Input from this file

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { UserinputContext } from '@/app/_context/UserinputContext';

function SelectOption() {
    const { useCourseInput, setCourseInput } = useContext(UserinputContext);

    const handleIputChange = (fieldname, value) => {
        setCourseInput(prev => ({
            ...prev,
            [fieldname]: value // Corrected from filedName to fieldname
        }));
    };

    return (
        <div className='px-10 md:px-20 lg:px-44'>
            <div className='grid grid-col-2'>
                <div>
                    <label className='text-sm'>Difficulty label</label>
                    <Select onChange={(value) => handleIputChange('level', value)}
                        defaultValue={useCourseInput?.level}

                    >
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
                    <Select onChange={(value) => handleIputChange('duration', value)}
                        defaultValue={useCourseInput?.duration}

                    >
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
                    <label className='text-sm'>Add Video</label>
                    <Select onChange={(value) => handleIputChange('displayVideo', value)}
                        defaultValue={useCourseInput?.displayVideo}
                    >
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className='text-sm'>No of chapters</label>
                    <Input
                        type="number"
                        className="h-14 text-lg"
                        defaultValue={useCourseInput?.noOfChapter}
                        onChange={(event) => handleIputChange('noOfChapters', event.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default SelectOption;