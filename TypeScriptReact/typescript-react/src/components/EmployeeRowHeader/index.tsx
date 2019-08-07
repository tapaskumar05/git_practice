import React from 'react';

class SingleEmployeeRow extends React.Component<{}> {
    render() {
        return(
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Age</th>
                    <th>Salary</th>
                </tr>
            </thead>
        )
    }
}

export default SingleEmployeeRow;
