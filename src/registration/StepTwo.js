import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route, Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import './reg.css';

class StepTwo extends React.Component {

    changeImg = (e) => {
        console.log(e.target);
        console.log(e.target.files[0]);

        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = event => {
                this.setState({ profilephoto: event.target.result });
            };
            reader.readAsDataURL(e.target.files[0]);

        }
        this.setState({ hasimg: true });
    }
    state = {
        profilephoto: '',
        hasimg: false
    };

    render() {
        return (
            <div className="reg-rectangle">
                <h2 className="step-two-heading">Step Two</h2>
                <h2 className="pro-pic-heading">PROFILE PICTURE</h2>
                <MuiThemeProvider>
                <div className="pro-pic-placeholder" >
                        {!this.state.hasimg ?
                            <div className="upload-circle">
                                <div className="plus-logo">
                                    <div className="plus-horizontal" />
                                    <div className="plus-vertical" />
                                </div>
                                <input
                                    type="file"
                                    onChange={e => {
                                        this.changeImg(e);
                                    }}
                                    style={inputimg}
                                />
                            </div>
                            :
                            <img
                                src={this.state.profilephoto}
                                className="pro-pic-jpg"
                                alt="Profile"
                            />
                        }

                    </div>
                </MuiThemeProvider>
                <div className="nextBox">
                    <Route render={({ history }) => (
                        <FlatButton {...this.props} onClick={() => {
                            this.setState({ logged: false })
                            history.push('/StepThree')
                        }}
                            className="next-button"
                            label="Next Step" />
                    )} />
                </div>
                <h2 className="skip-for-now "> Skip for now</h2>
            </div>
        );
    }
}
const inputimg = {
    opacity: 0,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%'
};
export default StepTwo
