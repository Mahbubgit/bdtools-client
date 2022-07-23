import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="collapse collapse-arrow border">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium peer-checked:bg-neutral peer-checked:text-white text-left">
                    1. How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content peer-checked:bg-neutral peer-checked:text-white text-left">
                    <li>
                        Using Immutable Data Structures.
                    </li>
                    <li>
                        Function/Stateless Components and React.PureComponent.
                    </li>
                    <li>
                        Multiple Chunk Files.
                    </li>
                    <li>
                        Using Production Mode Flag in Webpack.
                    </li>
                    <li>
                        Dependency optimization.
                    </li>
                    <li>
                        Use React.Fragments to Avoid Additional HTML Element Wrappers.
                    </li>
                    <li>
                        Avoid Inline Function Definition in the Render Function.
                    </li>
                    <li>
                        Throttling and Debouncing Event Action in JavaScript.
                    </li>
                    <li>
                        Avoid using Index as Key for map.
                    </li>
                    <li>
                        Avoiding Props in Initial States.
                    </li>
                    <li>
                        Spreading props on DOM elements.
                    </li>
                    <li>
                        Use Reselect in Redux to Avoid Frequent Re-render.
                    </li>
                    <li>
                        Avoid Async Initialization in componentWillMount().
                    </li>
                    <li>
                        Memoize React Components.
                    </li>
                    <li>
                        CSS Animations Instead of JS Animations.
                    </li>
                    <li>
                        Using a CDN.
                    </li>
                    <li>
                        Using Web Workers for CPU Extensive Tasks.
                    </li>
                    <li>
                        Virtualize Long Lists.
                    </li>
                    <li>
                        Analyzing and Optimizing Your Webpack Bundle Bloat.
                    </li>
                    <li>
                        Consider Server-side Rendering.
                    </li>
                    <li>
                        Enable Gzip Compression on Web Server.
                    </li>
                </div>
            </div>
            <div className="collapse collapse-arrow border">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium peer-checked:bg-neutral peer-checked:text-white text-left">
                    2. What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content peer-checked:bg-neutral peer-checked:text-white text-left">
                    <p>
                        There are several ways to manage states in React, including the use of:
                        <br />
                        <li>Hooks.</li>
                        <li>React Context API.</li>
                        <li>Apollo Link State.</li>
                    </p>

                </div>
            </div>
            <div className="collapse collapse-arrow border">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium peer-checked:bg-neutral peer-checked:text-white text-left">
                    3. How does prototypical inheritance work?
                </div>
                <div className="collapse-content peer-checked:bg-neutral peer-checked:text-white text-left">
                    <p>
                        Prototypal Inheritance: The Prototypal Inheritance is a feature in JavaScript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object. <br />
                        When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
                    </p>

                </div>
            </div>
            <div className="collapse collapse-arrow border">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium peer-checked:bg-neutral peer-checked:text-white text-left">
                    4. Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`?
                </div>
                <div className="collapse-content peer-checked:bg-neutral peer-checked:text-white text-left">
                    <p>
                        We should never update the state directly because of the following reasons: <br />

                        1. If we update it directly, calling the setState() afterward may just replace the update we made. <br />
                        2. When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition and accessing it after calling this method will only return the present value. <br />
                        3. We will lose control of the state across all components.
                    </p>

                </div>
            </div>
            <div className="collapse collapse-arrow border">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium peer-checked:bg-neutral peer-checked:text-white text-left">
                    5. What is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content peer-checked:bg-neutral peer-checked:text-white text-left">
                    <p>
                        Unit Testing is a type of software testing where individual units or components of a software are tested. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. <br />

                        Whenever the application is ready and given to the Test engineer, he/she will start checking every component of the module or module of the application independently or one by one, and this process is known as Unit testing or components testing. <br /> <br />

                        a) Unit tests help to fix bugs early in the development cycle and save costs. <br />
                        b) It helps the developers to understand the testing code base and enables them to make changes quickly. <br />
                        c) Good unit tests serve as project documentation. <br />
                        d) Unit tests help with code re-use. Migrate both your code and your tests to your new project. Tweak the code until the tests run again
                    </p>

                </div>
            </div>

        </div>
    );
};

export default Blogs;