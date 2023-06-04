import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';

const timeline = () => {
  return (
    <div id='timeline'>
      <div class='heading'>
        Time<span class='point'>line</span>
      </div>
      <hr class='line-time' />
      <VerticalTimeline>
        <h2 className='date-time'>
          <span class='day'>June 6</span>Day 1
        </h2>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='9 AM-10 AM'
          iconStyle={{ background: '#fff', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Event Registration
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='10 AM - 3 PM'
          iconStyle={{ background: '#fff', color: '#fff' }}
          //   icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Work On Project</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='3 PM - 4 PM'
          iconStyle={{ background: '#fff', color: '#fff' }}
          //   icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Speaker Session -1
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='6:30 PM - 7 PM'
          iconStyle={{ background: '#fff', color: '#fff' }}
          //   icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Comedy Club Session
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='10 PM - 11 PM'
          iconStyle={{ background: '#fff', color: '#fff' }}
          //   icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Review 1</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <VerticalTimeline>
        <h2 className='date-time'>
          June 7 <span class='day-color'>Day 2</span>
        </h2>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='9 AM - 10 AM'
          iconStyle={{ background: '#fff', color: '#fff' }}
          //   icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Review 2</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='10 PM - 11 PM'
          iconStyle={{ background: '#fff', color: '#fff' }}
          //   icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Speaker Session 2</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='11 AM - 12:30 PM'
          iconStyle={{ background: '#fff', color: '#fff' }}
          //   icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Submission For{' '}
            <main class='.vertical-timeline-element-title'>
              Midhack Evaluation
            </main>
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='3:30 PM - 5:10 PM'
          iconStyle={{ background: '#fff', color: '#fff' }}
          //   icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Final Pitching</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='5:10 PM - 5:30 PM'
          iconStyle={{ background: '#fff', color: '#fff' }}
          //   icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Evaluation</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='5:30 PM - 6 PM'
          iconStyle={{ background: '#fff', color: '#fff' }}
          //   icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Result And Prizes</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default timeline;
