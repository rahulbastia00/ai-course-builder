import React, { useContext } from 'react';
import { Input } from '@/components/ui/input'; // Import only Input from this file
import { Textarea } from '@/components/ui/textarea'; // Import Textarea from this file
import { UserinputContext } from '@/app/_context/UserinputContext';

function TopicDescription() {
    const { useCourseInput, setCourseInput } = useContext(UserinputContext);

    const handleIputChange = (fieldname, value) => {
        setCourseInput(prev => ({
            ...prev,
            [fieldname]: value // Corrected from filedName to fieldname
        }));
    };

    return (
        <div className='mx-20 lg:mx-44'>
            {/* Topic Input */}
            <div className='mt-5'>
                <label>Write the topic for which you want to generate a course (e.g., python, java)</label>
                <Input
                    placeholder={'Topic'}
                    defaultValue={useCourseInput?.topic}
                    onChange={(e) => handleIputChange('topic', e.target.value)}
                />
            </div>

            {/* Textarea for course description */}
            <div className='mt-5'>
                <label>Tell me a movie about your course</label>
                <Textarea
                    defaultValue={useCourseInput?.description}
                    placeholder='About your course'
                    onChange={(e) => handleIputChange('description', e.target.value)}
                />
            </div>
            {/* Additional content can go here */}
        </div>
    );
}

export default TopicDescription;