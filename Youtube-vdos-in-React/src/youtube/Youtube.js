import React from 'react';

class Youtube extends React.Component {
    render() {
        return (
            <div class="card-deck">
                <div class="card">
                    <iframe width="510" height="315" src="https://www.youtube.com/embed/RzKi82Fv8uc" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div class="card-body">
                        <h5 class="card-title">Java</h5>
                        <p class="card-text">I am developing a react native project. I am first in React Native. I have some errors in my project.
                         I 'd like to know how to handle error in React native. And how can I see the errors? if …</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">java</small>
                    </div>
                </div>
                <div class="card">
                    <iframe width="510" height="315" src="https://www.youtube.com/embed/1nuhemrfnjw" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div class="card-body">
                        <h5 class="card-title">React</h5>
                        <p class="card-text">I am developing a react native project. I am first in React Native. 
                        I have some errors in my project. I 'd like to know how to handle error in React native. And how can I see the errors? if …</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">React</small>
                    </div>
                </div>
                <div class="card">
                    <iframe width="510" height="315" src="https://www.youtube.com/embed/TYp_BBP--TA" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div class="card-body">
                        <h5 class="card-title">Angular</h5>
                        <p class="card-text">I am developing a react native project. I am first in React Native. I have some errors in my project.
                         I 'd like to know how to handle error in React native. And how can I see the errors? if …</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Angular</small>
                    </div>
                </div>
            </div>



        )
    }
}
export default Youtube;