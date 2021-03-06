import React, {Component} from "react";
import CountDownTest from "../../components/timer";
import axios from "axios";
import io from "socket.io-client";

const socketUrl = "https://gameday-testing.herokuapp.com";

class QuizLoop extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            socket: null,
            questions: "poop"
        }
    }

    componentWillMount() {
        this.initSocket();
    }

    componentDidMount() {
        const { socket } = this.state;
        
        socket.emit("userConnected")
        console.log("didMount");
        // axios.get("/api/getquestions")
        //     .then(data => {
        //         console.log("questions", data);
        //     });
    }
    
    initSocket = () => {
        const socket = io(socketUrl);
        socket.on("connect", () => {
            console.log("CONNECTED");
            this.getQuestions();
        });

        this.setState({socket});
    }

    getQuestions = () => {
        const { socket } = this.state;
        // socket.on("gotquestions", (questions) => {
        //     console.log("Questions:",questions);
        //     this.setState({questions});
        // });

        socket.on("gotquestions", () => {
            console.log("Questions:");
            // this.setState({questions});
        });
    }
    

    render() {
        return (<>
          <nav>
            <div className="nav-wrapper" >
                
           

           

            
  </div>
        </nav>
        
            <div className="container">
                <div className="row">
                    <div className="col s12">

                        {/* Timer Component */}
                        <div><h1><CountDownTest/></h1></div>

                        {/* Question Card */}
                        

                        <br/>
                        
                        {/* Question Cards */}
                        <div className="card-panel yellow darken-4">
                            <span className="white-text">
                                7
                            </span>
                        </div>

                        <div className="card-panel yellow darken-4">
                            <span className="white-text">
                                14 pounds
                            </span>
                        </div>

                        <div className="card-panel yellow darken-4">
                            <span className="white-text">
                                No one has ever seen a woodchuck
                            </span>
                        </div>

                        <div className="card-panel yellow darken-4">
                            <span className="white-text">
                                What is a woodchuck? Why would it chuck wood? What is chucking?
                            </span>
                        </div>

                    </div>
                </div>
            </div>
            
        </>);
    }
}

export default QuizLoop;