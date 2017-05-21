import { Progress, Button } from 'antd';
import React from 'react';
const ButtonGroup = Button.Group;

import './rateCircle.scss';

const Promption = (rate) => {
    if (rate <= 20) {
        return  <span style={{color: '#f04134',marginLeft:'5px'}}>起步阶段</span>;
    } else if (rate <= 90 ){
        return  <span style={{color: '#49a9ee',marginLeft:'5px'}}>正在进行</span>;
    } else {
        return  <span style={{color: '#00a854',marginLeft:'5px'}}>已完成</span>;
    }
};

class RateCircle extends React.Component {
    constructor (props) {
        super(props);
        const percent = this.props.circle || 0;
        this.state = {
            percent: percent,
        }
    }

    componentWillReceiveProps (nextProps) {
        if ('circle' in nextProps) {
            const percent = nextProps.circle || 0;
            this.setState({ percent });
        }
    }

    increase = () => {
        let percent = this.state.percent + 10;
        if (percent > 100) {
            percent = 100;
        }
        this.setState({ percent });
        this.triggerChange(percent);
    };
    decline = () => {
        let percent = this.state.percent - 10;
        if (percent < 0) {
            percent = 0;
        }
        this.setState({ percent });
        this.triggerChange(percent);

    };
    triggerChange = (changedValue) => {
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(changedValue);
        }
    };
    render() {
        let promption = Promption(this.state.percent);
        return (
            <div className="rate_wrapper">
                <div className="circle_wrapper">
                    <Progress type="circle" percent={this.state.percent} />
                    <div>{promption}</div>
                </div>
                <ButtonGroup className="btn_wrapper">
                    <Button onClick={this.decline} icon="minus" />
                    <Button onClick={this.increase} icon="plus" />
                </ButtonGroup>


            </div>
        );
    }
}

export default RateCircle;