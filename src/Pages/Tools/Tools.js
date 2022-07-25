import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';
import './Tools.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'

const Tools = () => {
    const [tools, setTools] = useState([]);
    const [key, setKey] = useState('hammer');

    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])

    return (

        <div className='my-2'>
            <div className='text-center'>
                <h3 className='text-primary font-bold text-4xl'>Tools - We Provide Worldwide</h3>
            </div>

            <Tabs
                id="controlled-tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-1 tools"
            >
                <Tab eventKey="hammer" title="Hammer">
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            tools.map(tool => <Tool
                                key={tool._id}
                                tool={tool}
                                serviceKey={key}
                            ></Tool>)
                        }
                    </div>
                </Tab>
                
                <Tab eventKey="chisel" title="Chisel">
                </Tab>
                
                <Tab eventKey="drill-machine" title="Drill Machine">
                </Tab>
                
                <Tab eventKey="electric-saw" title="Electric Saw">
                </Tab>

                <Tab eventKey="measuring-tape" title="Measuring Tape">
                </Tab>

                <Tab eventKey="pliers" title="Pliers">
                </Tab>

                <Tab eventKey="screwdriver" title="Screwdriver">
                </Tab>

                <Tab eventKey="wrench" title="Wrench">
                </Tab>
            </Tabs>
        </div>
    );
};


export default Tools;