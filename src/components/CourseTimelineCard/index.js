// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {timelineItem} = props
  const {categoryId, courseTitle, description, duration, tagsList} =
    timelineItem

  const getTagListItem = eachTag => {
    const {id, name} = eachTag
    return (
      <li className="course-tag-item" key={id}>
        {name}
      </li>
    )
  }
  return (
    <div className="course-card">
      <div className="course-card-header">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="course-card-duration-card">
          <AiFillClockCircle className="time-icon" />
          <p className="course-card-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="course-tag-list-container">
        {tagsList.map(eachTag => getTagListItem(eachTag))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
