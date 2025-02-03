import React from 'react';
import { Input } from '@/components/ui/input'; // Import only Input from this file
import { Textarea } from '@/components/ui/textarea'; // Import Textarea from this file

function TopicDescription() {
  return (
    <div className='mx-20 lg:mx-44'>
      {/* Topic Input */}
      <div className='mt-5'>
        <label>Write the topic for which you want to generate a course (e.g., python, java)</label>
        <Input placeholder={'Topic'} />
      </div>
     
      {/* Textarea for movie suggestion */}
      <div className='mt-5'>
        <label>Tell me a movie about your course</label>
        <Textarea placeholder='About your course' />
      </div>
      {/* Additional content can go here */}
    </div>
  );
}

export default TopicDescription;
