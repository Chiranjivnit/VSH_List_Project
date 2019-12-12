import React, { Component } from "react";
import { fetchApi } from "../action/Action";
import { connect } from "react-redux";
import { List, Avatar } from 'antd';
import 'antd/dist/antd.less';
import { ListGroup, ListGroupItem, Media, CardImg, Input } from 'reactstrap';
import './ListView.css'


class ListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            search:''
        };
    }

    componentDidMount() {
        this.props.fetchApi()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.reducerListData != this.state.data) {
            this.setState({ data: nextProps.reducerListData })

        }
    }

    onchange = e => {
        this.setState({ search: e.target.value });
      };

    

    render() {
        const { reducerListData } = this.props
        const { search } =this.state
        
        return (
            <div>
                 <Input className="input" placeholder="Search..." onChange={this.onchange} ></Input>
                {reducerListData && reducerListData.ListApiData && reducerListData.ListApiData.length > 0 ? reducerListData.ListApiData.filter((list)=>{
                    return list.name.toLowerCase().search(search.toLowerCase()) !== -1
                }).map(item => {
                    return (
                        <ListGroup key={item.name} className="ListView">
                            <ListGroupItem>
                                <Media>
                                    <Media left href="#">
                                        <CardImg top width="100%" src={item.avatar} alt="Card image cap" />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            {item.name}
                                        </Media>
                                        {item.email}
                                    </Media>
                                </Media>
                            </ListGroupItem>
                        </ListGroup>
                    )
                }) : ''}

            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('state', state)
    return {
        reducerListData: state
    };
};

const mapDispatchToProps = dispatch => {
    console.log('dispatch', dispatch)
    return {
        fetchApi: () => dispatch(fetchApi())
    };
};



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListView);
