
import APICall from './APICallComponents/APICall';


const Content = () => {

  return (

    <div>
      <div className="title">Click on the username to see their posts.</div>
      <div className="content">

        <APICall />
      </div>
    </div>
  )
}

export default Content;