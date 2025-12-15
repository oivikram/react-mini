import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src={props.img} alt="" />
        <button>SAVE <Bookmark /></button>
      </div>
      <div className="center">
        <h3>{props.company} <span>{props.post}</span></h3>
        <h2>{props.title}</h2>
      </div>
      <div className="bottom">
        <div>
          <h3>{props.salary}</h3>
          <p>{props.location}</p>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
