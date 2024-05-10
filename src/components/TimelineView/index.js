// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="app-container">
      <h1 className="main-heading">
        <span className="sub-heading">MY JOURNEY OF</span>
        <br /> CCBP 4.0
      </h1>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          cardWidth={500}
          style={{
            // set the width of the timeline container
            height: '250px', // set the height of the timeline container
          }}
          theme={{
            primary: '#0967d2', // change the primary color
            secondary: '#ffffff', // change the secondary color
            background: '#2b237c', // change the background color
          }}
        >
          {timelineItemsList.map(timelineItem =>
            timelineItem.categoryId === 'COURSE' ? (
              <CourseTimelineCard
                key={timelineItem.id}
                timelineItem={timelineItem}
              />
            ) : (
              <ProjectTimelineCard
                key={timelineItem.id}
                timelineItem={timelineItem}
              />
            ),
          )}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
