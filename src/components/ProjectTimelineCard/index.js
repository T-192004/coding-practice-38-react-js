// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {timelineItem} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} =
    timelineItem
  return (
    <div className="project-card">
      <img className="project-image" src={imageUrl} alt="project" />
      <div className="project-content-header">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="project-duration-container">
          <AiFillCalendar />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a className="project-link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
