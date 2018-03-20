import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from "actions/userInfo";
import {getHaha} from "actions/haha";

class UserInfo extends Component {

    render() {
        const {userInfo, userIsLoading, userErrorMsg} = this.props.state.userInfo;
        const {haha, hahaIsLoading, hahaErrorMsg} = this.props.state.haha;
        //const {userInfo, isLoading, errorMsg} = this.props.userInfo;
        return (
            <div>
                {
                    userIsLoading ? '请求信息中......' :
                        (
                            userErrorMsg ? userErrorMsg :
                                <div>
                                    <p>用户信息：</p>
                                    <p>用户名：{userInfo.name}</p>
                                    <p>介绍：{userInfo.intro}</p>
                                </div>
                        )
                }
                <button onClick={() => {
					console.log(this.props);
					this.props.getUserInfo()
				}
				}>请求用户信息</button>
                {
                    hahaIsLoading ? '请求信息中......' :
                        (
                            hahaErrorMsg ? hahaErrorMsg :
                                <div>
                                    <p>用户信息：</p>
                                    <p>用户名：{haha.haha}</p>
                                    <p>介绍：{haha.hehe}</p>
                                </div>
                        )
                }
                <button onClick={ () =>this.props.getHaha()}>请求用户信息</button>
            </div>
        )
    }
}

const mapStateToPros	= (state) => {
	return {
		state: state
	}
}

//export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(UserInfo);
export default connect(mapStateToPros, {getUserInfo, getHaha})(UserInfo);
