import React, { Component } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2';
import axios from "axios";
import { Link, Redirect } from 'react-router-dom';
import Avatar from 'react-avatar';
import ReactLoading from '../common/Loading';
import { Jumbotron, Row, Col, Button,Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Statistics extends Component {


    componentDidMount(){  
        window.scrollTo(0,0);
    }
    constructor(props){
        super(props);
        this.state={
            barchartData:{
                labels:['ddco', 'ids', 'dml', 'ds','webtech'],
                datasets:[
                    {
                    
                        data:[30,25,32,29,35],
                        backgroundColor:['rgba(0,0,255,0.4)',
                        'rgba(255,0,0,0.4)',
                        'rgba(255,255,0,0.4)',
                        'rgba(255,0,255,0.4)',
                        'rgba(0,0,128,0.4)'],      
                    }
                ]
            },
            piechartData:{
                labels:['S', 'A', 'B', 'C','D', 'E', 'F'],
                datasets:[
                    {
                    
                        data:[52,186,123,75,45,28,7],
                        backgroundColor:['#FA8072',
                        '#F08080',
                        '#FFC0CB',
                        '#DE6C6C',
                        '#99004C',
                        '#FFA07A',
                        '#BC8F8F'],      
                    }
                ]
            },
            linechartData:{
                labels:['Sem 1','Sem 2', 'Sem 3','Sem 4','Sem 5','Sem 6','Sem 7'],
                datasets:[
                    {
                    
                        data:[8.9,9.2,7.8,10,9.3,8.0,9.4],
                        borderColor:'#FFA07A',
                        fill :false
                    }]   
            }
        }
    }

    render() {
        return (
            <div className="chart">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret color="info">
                  SELECT CLASS
                  </DropdownToggle>
            <DropdownMenu right>
             <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem>Another Action</DropdownItem>
           
            </DropdownMenu>
            </Dropdown><br/><br/>
            <Button color="info" >View Class Details</Button><br/><br/>
            <Button color="success">View Performance of a student</Button><br/><br/>
            <Button color="danger">Overall Performance</Button>

             <Line
            data={this.state.linechartData }
            height={50}
            options={{
                elements: {
                    line: {
                        tension: 0 
                    }
                },
                legend:{display:false},
            title:{
                display:true, 
                text: 'Performance of PES1201701222'}
            }}
            
        
        />  

            <Bar 
                data={this.state.barchartData }
                height={100}
                options={{
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            }
                        }],
                    
                    },
                    legend:{display:false},
                    title:{display:true, 
                           text: 'Average Marks of Subjects'},

                    maintainAspectRatio:true
                }}
                
            
            />  
            <br></br><br></br><br></br>
            <Pie
                height={100}
                data={this.state.piechartData }
                options={{maintainAspectRatio:true,
                    title:{display:true, 
                    text: 'Performance in ESA'},}}
            
            />  
           </div>
        )
    }
}
