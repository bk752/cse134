import React, {PropTypes} from 'react';

function Timeline(props) {
  return (
    <div className={`timeline-item ${
      (props.active ? " timeline-item--active" : "") + 
      (props.first ? " timeline-item--first" : "") + 
      (props.last ? " timeline-item--last" : "")
    }`}>
      <div className="timeline-item__checkline">
        <div className="timeline-item__padding--before timeline-item__padding">
          <span className="timeline-item__line">
          </span>
        </div>
        <span className={`timeline-item__check ${props.done ? "timeline-item__check--done" : ""}`}>
          {props.image ? <img className="timeline-item__part-icon" src={props.image} alt=""/> : false}
        </span>
        <div className="timeline-item__padding--after timeline-item__padding">
          <span className="timeline-item__line">
          </span>
        </div>
      </div>
      <div className="timeline-item__text">
        <div className="timeline-item__title">
          {props.title}
        </div>
        <div className="timeline-item__info">
          {props.info}
        </div>
        {props.children}
      </div>
    </div>
  );
}

Timeline.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Timeline;
