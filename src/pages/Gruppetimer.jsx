import React from "react";
import "../style/App.css";
import "../style/Gruppetimer.css";

const Gruppetimer = (props) => {
    return (
        <section>
            <div className="section">
                <div className="gruppetimer-section">
                    <div className="gruppetimer-header"></div>
                    <div className="gruppetimer-form">
                        <form 
                        method="POST"
                        action="https://forms.gle/uYT6xYmPVxzNCLtS7"
                        >
                            <input className="input" type="text" placeholder="Name" />
                            
                        </form>
                    </div>
                    <div className="gruppetimer-info"></div>
                </div>
            </div>
        </section>
    );
};

export default Gruppetimer;