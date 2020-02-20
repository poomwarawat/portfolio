import React, {Component} from 'react'

export default class StorageDataTable extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let messageNodes = this.props.rows.map((r) => {
            return (
                <tr key={r.no + r.name}>
                    <td scope="row">{r.no}</td>
                    <td>{r.name}</td>
                    <td>{r.contentType}</td>
                    <td>{r.size} Mb</td>
                    <td><a target="_blank" href={r.downloadURLs}>Download</a></td>
                    <td><a target="_blank" onClick={(e) => this.props.deleteData(e,r)}>Delete</a></td>
                </tr>
            )
        });
        return(
            <div>
                <h1>Hello</h1>
                <table border="1" className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">File Name</th>
                            <th scope="col">File Type</th>
                            <th scope="col">File Size</th>
                            <th scope="col">Download</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messageNodes}
                    </tbody>
                </table>
            </div>
        )
    }
}