import React, { Component } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import styles from "./style";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Icon,
  Button,
  Label,
  Dimensions,
} from "native-base";
import { connect } from "react-redux";
import { auth } from "../../src/store/actions/index";

import Loader from "../../components/Loader/index";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (value, name) => {
    this.setState({
      [name]: value,
    });
  };

  validate = () => {
    let isError = false;
    if (this.state.username.length === 0) {
      alert("Username is required !");
      isError = true;
    } else if (this.state.password.length === 0) {
      alert("password is required !");
      isError = true;
    }
    return isError;
  };

  handleSubmit = () => {
    let invalid = this.validate();
    const payload = {
      user_name: this.state.username,
      password: this.state.password,
    };
    if (!invalid) {
      this.props.onLogin(payload);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (
      this.props.response !== nextProps.response &&
      nextProps.response !== ""
    ) {
      if (nextProps.response.status.toLowerCase() == "success") {
        this.props.navigation.navigate("Home");
      } else {
        alert("Invalid username or password.");
      }
    }
    if (this.props.error !== nextProps.error && nextProps.error !== "") {
      alert("Unable to login.");
    }
  }

  render() {
    const { username, password } = this.state;
    return (
      <Container style={styles.loginWrap}>
        <Loader loading={this.props.disable} />
        <Content disableKBDismissScroll={true}>
          <View style={styles.loginInnerWrap}>
            {/* logo */}
            <View style={styles.logoArea}>
              <Image
                source={require("../../assests/logo1.png")}
                // source={{uri:'https://via.placeholder.com/100x100.png?text=Logo'}}
                style={{ height: 200, width: 200 }}
              />
            </View>

            {/* form */}
            <View style={styles.formArea}>
              <Item style={styles.usernameWrap}>
                <Icon name="person" style={styles.inputIcon} />
                <Input
                  spellCheck={false}
                  placeholder="Username"
                  value={username}
                  onChangeText={(text) => this.handleChange(text, "username")}
                />
              </Item>

              <Item style={styles.usernameWrap}>
                <Icon name="lock" style={styles.inputIcon} />
                <Input
                  secureTextEntry={true}
                  maxLength={20}
                  placeholder="Password"
                  value={password}
                  onChangeText={(text) => this.handleChange(text, "password")}
                />
              </Item>

              <Button
                style={styles.loginBtnWrap}
                onPress={this.handleSubmit.bind(this)}
                primary={true}
                disabled={this.props.disable}
                block
              >
                <Text style={styles.loginBtnTxt}>Login</Text>
              </Button>

              <View style={styles.loginFooterWrap}>
                <Text style={styles.dontHaveAccntTxt}>
                  Don't have an account?
                </Text>
                <Text
                  style={[styles.dontHaveAccntTxt, styles.signupTxt]}
                  onPress={() => this.props.navigation.navigate("Registration")}
                >
                  {" "}
                  Sign up here
                </Text>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    response: state.auth.data,
    disable: state.auth.disable,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (payload) => dispatch(auth(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
