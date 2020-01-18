import React from 'react'
    
// const WithClass = propssss => (
//     <div className={propssss.classes}>{propssss.children}</div>
// );

const WithClass = (WrappedComponent, ClassName) => {
    return props => (
        <div className={ClassName}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default WithClass;