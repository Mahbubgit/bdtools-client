import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{fontWeight: match? 'bold' : 'normal', fontSize: match? 'large' : 'medium', backgroundColor: match? 'gray' : 'white', color: match? 'white' : 'gray', textDecoration: match ? "none" : "white" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }
  
export default CustomLink;