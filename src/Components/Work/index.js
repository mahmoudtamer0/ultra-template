import React, { Component } from 'react';
import './style.css'
import axios from 'axios';

class Work extends Component {
    state = {
        works: []
    }

    componentDidMount() {
        axios.get('data.json').then(res => this.setState({ works: res.data.works }))
    }
    render() {
        let { works } = this.state;
        let worklist = works.map(work => {
            return (
                <div className="part" key={work.id}>
                    <i className={work.icon_name}></i>
                    <h4 className="part-title">{work.title}</h4>
                    <hr className="line" />
                    <p className="part-desc">
                        {work.body}
                    </p>
                </div>

            )
        })
        return (
            <div className="work" >
                <div className="container">
                    <h2 className="work-title"><span>My</span> Work</h2>
                    {worklist}

                </div>
            </div>

        );
    }
}

export default Work;