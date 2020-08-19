import React from "react";
import './gallery.css';
import {readdirSync} from 'fs';
import * as path from 'path';

export class Gallery extends React.Component<{}, {}>{
    private arrayOfImages = [];
    private testFolder = './../images';
    private fs = require('fs');

    constructor(props:any){
        super(props);
        this.arrayOfImages = this.fs.readdirSync(this.testFolder);
        console.log(this.arrayOfImages);
    }

    public render(){
            return(
            <div className="container">
            {this.arrayOfImages.map(url=>{
            <img className="image" src={url}/>
            })}
            </div>
            )
    }
}